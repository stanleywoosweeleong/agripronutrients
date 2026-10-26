// AgriPro PWA service worker
//
// Strategy:
//   - Everything is same-origin (no CDN), so just cache-first the app shell.
//   - Install is all-or-nothing for the core files the app cannot start
//     without: if any of them fails to download, the install fails and the
//     previous version (and its cache) stays in charge. Icons are best-effort.
//   - Navigation requests fall back to the cached index.html regardless of the
//     exact URL the user visited (handles `/`, `/agripro/`, deep links, etc.).
//   - Bump CACHE_VERSION whenever any shipped file changes.

const CACHE_PREFIX  = 'agripro-';
const CACHE_VERSION = `${CACHE_PREFIX}v20`;
const CACHE_NAME    = `${CACHE_VERSION}-shell`;

// Everything the app needs to start. All same-origin, relative paths.
const CORE = [
  './',                                    // root URL (covers `https://host/agripro/`)
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './vendor/app.css',
  './vendor/react.production.min.js',
  './vendor/react-dom.production.min.js',
  './vendor/lucide-bridge.js',
  './vendor/lucide-react.min.js',
  './vendor/qrcode-generator.js',
];

// Nice to have offline, but not worth failing an update over.
const OPTIONAL = [
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon.png',
];

async function precache(cache, url) {
  const res = await fetch(url, { cache: 'reload' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await cache.put(url, res);
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Core files must all succeed. A rejection here fails the install, so the
    // old service worker keeps serving its complete cache instead of being
    // replaced by a broken one. (A half-filled new cache is removed by the
    // next successful activation.)
    await Promise.all(CORE.map(url => precache(cache, url)));
    const results = await Promise.allSettled(OPTIONAL.map(url => precache(cache, url)));
    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length) {
      console.warn('[SW] install: ' + failed.length + ' optional files failed to pre-cache',
                   failed.map(f => f.reason && f.reason.message));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Drop old AgriPro caches only. Other apps on the same origin (e.g. other
    // GitHub Pages projects under the same username) share Cache Storage.
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME).map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // ignore cross-origin

  // Navigation requests (the user opening the app, deep links, refreshes) ->
  // try network first (so updates are seen), fall back to cached index.html.
  if (req.mode === 'navigate') {
    event.respondWith(networkThenIndex(req));
    return;
  }

  // Static assets -> cache-first.
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const fresh = await fetch(req);
    // Only cache successful, basic responses (same-origin success)
    if (fresh.ok && fresh.type === 'basic') {
      cache.put(req, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (err) {
    // Last resort for image/asset requests: nothing we can do.
    throw err;
  }
}

async function networkThenIndex(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    // Only refresh the cached shell entry when the response is good
    if (fresh.ok) cache.put('./index.html', fresh.clone()).catch(() => {});
    return fresh;
  } catch (_) {
    // Offline -> serve cached index.html (or root) so the React app boots
    const cached = (await cache.match('./index.html')) || (await cache.match('./'));
    if (cached) return cached;
    // Truly nothing — let the browser show its offline page
    return Response.error();
  }
}

// Allow the page to force the new SW to activate immediately.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
