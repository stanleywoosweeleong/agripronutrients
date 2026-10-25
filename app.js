// === Auto-generated prelude (PWA wrapper) ===
// Pull React hooks off the React UMD global.
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// LucideReact UMD bundle exposes every icon as a named property on the global.
// Bail loudly if it's missing — better a clear error than a silent ReferenceError.
if (typeof LucideReact === 'undefined') {
  throw new Error('AgriPro: lucide-react UMD bundle not loaded before app.js');
}
const {
  Leaf,
  Activity,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  ShoppingBag,
  Target,
  Sprout,
  Thermometer,
  Zap,
  Wind,
  Flower2,
  Settings,
  Layers,
  HelpCircle,
  Eye,
  CloudRain,
  SunDim,
  FileText,
  Beaker,
  Sun,
  Sparkles,
  Calculator,
  ClipboardList,
  RotateCcw,
  ArrowRight,
  Scale,
  Atom,
  Droplets,
  ShieldCheck,
  Skull,
  FlaskConical,
  BarChart3,
  Languages,
  Check
} = LucideReact;
// === End prelude ===

// ==========================================
// 0. ERROR BOUNDARY
// ==========================================

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("AgriPro UI Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen flex items-center justify-center bg-red-50 p-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-red-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 text-red-600 mb-4"
      }, /*#__PURE__*/React.createElement(AlertTriangle, {
        size: 32
      }), /*#__PURE__*/React.createElement("h2", {
        className: "text-xl font-bold"
      }, tv({ zh: "\u5E94\u7528\u7A0B\u5E8F\u9519\u8BEF", en: "Application Error", ms: "Ralat Aplikasi" }))), /*#__PURE__*/React.createElement("p", {
        className: "text-stone-600 mb-4"
      }, tv({ zh: "\u53D1\u751F\u4E25\u91CD\u7684\u521D\u59CB\u5316\u9519\u8BEF\u3002\u8BF7\u91CD\u7F6E\u5E94\u7528\u7A0B\u5E8F\u4EE5\u6E05\u9664\u5148\u524D\u7248\u672C\u7684\u7F13\u5B58\u3002", en: "A critical initialization error occurred. Please reset the application to clear previous version cache.", ms: "Ralat permulaan yang kritikal telah berlaku. Sila set semula aplikasi untuk mengosongkan cache versi terdahulu." })), /*#__PURE__*/React.createElement("div", {
        className: "bg-stone-900 text-red-400 p-4 rounded-lg font-mono text-xs overflow-auto max-h-48 mb-6"
      }, this.state.error?.toString()), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          localStorage.clear();
          window.location.reload();
        },
        className: "w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
      }, tv({ zh: "\u6E05\u9664\u7F13\u5B58\u5E76\u91CD\u7F6E\u5E94\u7528", en: "Clear Cache & Reset App", ms: "Kosongkan Cache & Set Semula" }))));
    }
    return this.props.children;
  }
}

// ==========================================
// 1. DATA CONSTANTS
// ==========================================

const TRANSLATIONS = {
  zh: {
    app_title: "AgriPro 农学笔记",
    knowledge: "知识库",
    advisor: "智能顾问",
    mix_rules: "混配规则",
    ph_availability: "pH 有效性",
    tap_element: "点击元素查看深度农学解析",
    antagonism: "拮抗作用 (土壤/混配)",
    inhibition: "抑制 / 阻断",
    synergy: "协同作用",
    lbl_soil_conditions: "土壤与天气条件",
    lbl_adjust_soil: "调整参数以查看对养分有效性的影响",
    lbl_ph: "土壤 pH 值",
    lbl_texture: "土壤质地 / CEC",
    lbl_om: "有机质 (OM)",
    lbl_cation: "主要阳离子",
    lbl_weather: "天气 / 胁迫 (VPD)",
    lbl_ec: "土壤 EC (盐碱度)",
    lbl_crop_profile: "作物档案",
    lbl_crop_type: "作物种类",
    lbl_variety: "品种 / 克隆",
    lbl_tree_age: "树龄 (年)",
    lbl_crop_stage: "生长阶段",
    lbl_leaf_analysis: "叶片分析 / 症状",
    lbl_recommendation: "精准配方",
    lbl_rationale: "农学依据",
    lbl_rate_timing: "用量与时机",
    lbl_compat_warn: "安全检查",
    lbl_reset: "重置输入",
    lbl_calculate: "生成配方",
    opt_crop_durian: "榴莲",
    opt_crop_general: "通用 / 其他作物",
    opt_var_mk: "猫山王 (D197)",
    opt_var_bt: "黑刺 (D200)",
    opt_var_d24: "D24 (苏丹王)",
    opt_var_ioi: "IOI / 哈嘉哈斯玛 (D168)",
    opt_var_gp: "金凤 (D198)",
    opt_var_rp: "红虾 (D175)",
    opt_var_tekka: "竹脚 (D160)",
    opt_var_mt: "金枕头 (D159)",
    opt_var_tk: "松鼠王 (D214)",
    opt_var_d101: "D101 (红肉)",
    opt_var_generic: "通用 / 甘榜",
    opt_stage_seedling: "幼苗 / 移栽",
    opt_stage_veg: "营养期 (抽梢)",
    opt_stage_pre_flower: "开花前期 / 催花",
    opt_stage_flower_bud: "花芽萌发 (蟹眼期)",
    opt_stage_matchstick: "火柴枝期 (花梗伸长)",
    opt_stage_bloom: "盛花期 （含授粉期）",
    opt_stage_fruit_set: "幼果期 (0–10 DAA)",
    opt_stage_fruit_drop_1: "第一波落果: 胚胎淘汰 (10–25 DAA)",
    opt_stage_ping_pong: "第二波落果: 抽梢竞争 (35–50 DAA)",
    opt_stage_rapid_expansion: "快速膨大期 (50–90 DAA)",
    opt_stage_maturation: "成熟期与自然落果",
    opt_stage_post_harvest: "采后恢复期",
    opt_sym_none: "健康 / 平衡",
    opt_sym_yellow_old: "老叶发黄 (缺氮/镁/钾)",
    opt_sym_yellow_new: "新叶发黄 (缺铁/锰/硫)",
    opt_sym_burn: "叶尖焦枯 (盐害/缺钾)",
    opt_sym_stunted: "根系受损 / 生长停滞",
    opt_sym_fruit_crack: "果实开裂 / 畸形",
    opt_sym_wet_core: "湿芯 / 果肉水化",
    opt_sand: "沙土 (保水保肥差)",
    opt_loam: "壤土 (均衡)",
    opt_clay: "粘土 (保肥性强)",
    opt_low: "低 (<2%)",
    opt_med: "中 (2-5%)",
    opt_high: "高 (>5%)",
    opt_bal: "均衡",
    opt_hi_ca: "钙质 (高钙)",
    opt_hi_mg: "蛇纹石 (高镁)",
    opt_hi_k: "高钾",
    opt_hi_na: "盐碱 (高钠)",
    opt_dry: "炎热干燥 (VPD > 1.6 kPa)",
    opt_norm: "适宜 (0.8-1.2 kPa)",
    opt_wet: "暴雨 / 阴天 (< 0.5 kPa)",
    opt_ec_low: "低 (< 1.0)",
    opt_ec_opt: "适宜 (1.0-2.0)",
    opt_ec_high: "高 (> 2.0)",
    lbl_acid: "酸性",
    lbl_neutral: "中性",
    lbl_alkaline: "碱性",
    lbl_visual: "视觉检查",
    lbl_h2o2: "双氧水 (H2O2) 测试",
    desc_visual_low: "颜色浅/发白，沙质或板结，无泥土气味。",
    desc_visual_med: "标准褐色土壤。",
    desc_visual_high: "深黑色，团粒结构良好，有泥土芳香。",
    desc_h2o2_low: "无反应。",
    desc_h2o2_med: "轻微起泡。",
    desc_h2o2_high: "剧烈起泡/发热。",
    lbl_soil_impact: "环境影响分析",
    msg_soil_ok: "当前土壤条件基本适合该养分的吸收。",
    lbl_high_conc_inhib: "桶混抑制 / 不兼容",
    lbl_inhibits: "抑制/阻断",
    lbl_when: "条件:",
    lbl_none: "无",
    lbl_market_insight: "商业洞察",
    lbl_app_strategy: "施用策略",
    lbl_def_signal: "缺乏信号",
    lbl_common_sources: "常见来源",
    lbl_metabolism: "生理功能",
    lbl_enzymes: "关键酶",
    lbl_optimal_levels: "诊断参考",
    lbl_soil_test: "土壤目标",
    lbl_leaf_tissue: "叶片组织目标",
    lbl_ionic_form: "离子形态",
    lbl_leach_risk: "流失风险",
    lbl_soil_grip: "土壤吸附",
    lbl_compete: "竞争离子",
    lbl_stage_veg: "营养期",
    lbl_stage_fruit: "结果期",
    lbl_bio_synergy: "生物刺激素协同 (可选)",
    lbl_recipe_center: "配方中心",
    info_AA_zwitterion_title: "农学技术：两性离子效应",
    info_AA_zwitterion_desc: "为什么氨基酸被称为'双面胶'？\n• 智能电荷：它们同时携带正电荷(+)和负电荷(-)。这使得它们能够抓住土壤颗粒(减少流失)，同时包裹金属养分(天然螯合)。\n• pH 变色龙：与会沉淀的无机盐不同，它们根据土壤 pH 调整电荷，保持养分活性以便根系吸收。",
    lbl_immobile_insight: "不可移动养分策略",
    msg_immobile_advice: "交通管制：该元素在植物体内不可移动。老叶无法将其捐赠给新芽。\n\n策略：\n1. 精准打击：根部输送对快速生长来说通常太慢，必须直接叶面喷施在新叶/果实上。\n2. 搭便车：吸收完全依赖蒸腾作用（水流）。没有水分流动 = 没有吸收。请确保稳定灌溉。",
    cat_Macro: "大量元素",
    cat_Secondary: "中量元素",
    cat_Micro: "微量元素",
    cat_Beneficial: "有益元素",
    cat_Biostimulant: "生物刺激素",
    mob_Mobile: "植物内可移动",
    mob_Immobile: "植物内不可移动",
    elem_Nitrogen: "氮 (N)",
    elem_Phosphorus: "磷 (P)",
    elem_Potassium: "钾 (K)",
    elem_Sulfur: "硫 (S)",
    elem_Calcium: "钙 (Ca)",
    elem_Magnesium: "镁 (Mg)",
    elem_Iron: "铁 (Fe)",
    elem_Manganese: "锰 (Mn)",
    elem_Boron: "硼 (B)",
    elem_Copper: "铜 (Cu)",
    elem_Zinc: "锌 (Zn)",
    elem_Molybdenum: "钼 (Mo)",
    elem_Silicon: "硅 (Si)",
    elem_Chlorine: "氯 (Cl)",
    elem_Nickel: "镍 (Ni)",
    elem_Sodium: "钠 (Na)",
    elem_Cobalt: "钴 (Co)",
    elem_AminoAcids: "氨基酸 (AA)",
    elem_Peptides: "多肽 (Pep)",
    rec_Humic: "腐殖酸",
    src_urea: "尿素 (46%)",
    src_amsul: "硫酸铵 (21%)",
    src_calnit: "硝酸钙",
    src_kno3: "硝酸钾",
    src_dap: "磷酸二铵 DAP (18-46-0)",
    src_map: "磷酸一铵 MAP (11-52-0)",
    src_rock_phos: "磷矿粉 (ERP)",
    src_polyphos: "聚磷酸盐",
    src_mop: "氯化钾 (MOP/KCl)",
    src_sop: "硫酸钾 (SOP)",
    src_kmg_sulf: "硫酸钾镁",
    src_dolomite: "白云石 (GML)",
    src_gypsum: "石膏 (CaSO4)",
    src_lime: "石灰 (CaCO3)",
    src_kieserite: "水镁矾 (MgSO4)",
    src_mg_oxide: "氧化镁",
    src_mg_nitrate: "硝酸镁",
    src_elem_sulfur: "元素硫",
    src_fe_sulf: "硫酸亚铁",
    src_fe_edta: "EDTA 铁",
    src_fe_eddha: "EDDHA 铁 (红铁)",
    src_fe_amsul: "硫酸亚铁铵",
    src_zn_sulf: "硫酸锌",
    src_zn_edta: "EDTA 锌",
    src_zn_oxide: "氧化锌",
    src_mn_sulf: "硫酸锰",
    src_mn_edta: "EDTA 锰",
    src_mn_oxide: "氧化锰",
    src_cu_sulf: "硫酸铜",
    src_cu_hydrox: "氢氧化铜",
    src_cu_edta: "EDTA 铜",
    src_borax: "硼砂",
    src_boric: "硼酸",
    src_solubor: "速溶硼",
    src_ca_borate: "硼酸钙",
    src_na_moly: "钼酸钠",
    src_amm_moly: "钼酸铵",
    src_k_silicate: "硅酸钾",
    src_ca_silicate: "硅酸钙",
    src_rice_ash: "稻壳灰",
    src_ca_chlor: "氯化钙",
    src_amm_chlor: "氯化铵",
    src_ni_sulf: "硫酸镍",
    src_ni_nitr: "硝酸镍",
    src_sea_salt: "海盐",
    src_na_nitr: "硝酸钠",
    src_co_sulf: "硫酸钴",
    src_co_carb: "碳酸钴",
    src_plant_aa: "植物氨基酸 (大豆/玉米)",
    src_animal_aa: "动物氨基酸",
    src_fish_aa: "鱼氨基酸 (FAA)",
    src_fish_pep: "鱼蛋白肽",
    src_soy_pep: "大豆蛋白肽",
    val_ratio_7_1: "比例 > 7:1",
    val_high_ph_ca_b: "pH > 7.0 (形成不溶盐)",
    val_ratio_1_5: "比例 < 1.5",
    val_ratio_2_5: "比例 > 2.5",
    val_tank_mix: "桶混不兼容",
    mix_calnit: "硝酸钙",
    mix_phos: "磷酸盐",
    mix_sulf: "硫酸盐",
    mix_mag: "镁肥",
    mix_iron: "铁肥",
    mix_urea: "尿素",
    mix_amm_nit: "硝酸铵",
    mix_ca_mg: "钙 + 镁",
    mix_boron: "硼肥",
    mix_zinc: "锌肥",
    mix_ammonium: "铵态氮",
    mix_humic: "腐殖酸",
    mix_amino: "氨基酸",
    mix_pep: "多肽",
    mix_copper: "铜制剂杀菌剂",
    mix_silicate: "硅酸盐",
    mix_acids: "酸类",
    mix_seaweed: "海藻精 (碱性)",
    mix_pesticides: "敏感农药",
    mix_reason_ppt_white: "沉淀（产生白色固体）。",
    mix_reason_ppt_gyp: "沉淀（产生石膏）。",
    mix_reason_ppt_high: "高浓度/高pH下产生沉淀。",
    mix_reason_lockup: "互相锁定（除非使用螯合态）。",
    mix_reason_wet: "混合物会变湿/呈糊状。",
    mix_reason_ratio_complex: "物理性：浓缩液会瞬间结胶。化学性：请将Ca:Mg保持在3:1至5:1。⚠️警告：硼含量必须 < 0.2% (Ca:B ≈ 100:1)，过量会导致烧叶。",
    mix_reason_humate_sludge: "反应：形成不溶性的腐殖酸钙污泥，堵塞喷嘴。请改用黄腐酸。",
    mix_reason_copper_burn: "药害：氨基酸携带铜过快进入细胞组织，导致严重烧伤。",
    mix_reason_pep_copper: "药害：多肽增加细胞膜通透性，导致铜毒性烧伤。",
    mix_reason_silica_gel: "灾难：硅酸盐遇酸会聚合成玻璃状/凝胶状物质，彻底毁坏喷洒设备。",
    mix_reason_silica_ca: "沉淀：形成不溶性的硅酸钙。",
    mix_reason_ph_hydrolysis: "pH 冲突：强碱性海藻(pH >9)会导致农药发生水解失效。需添加缓冲剂。",
    mix_reason_zn_phos: "沉淀：锌 + 磷酸盐 = 磷酸锌（不溶性沉淀），导致双重锁定失效。",
    mix_reason_cu_acid: "烧叶风险：酸性环境会瞬间释放出过多的游离铜离子。",
    mix_reason_nh4_alkali: "挥发：在碱性条件（海藻/石灰）下，铵会迅速转化为氨气挥发流失。",
    status_incompatible: "不兼容",
    status_caution: "需谨慎",
    mix_protocol_title: "桶混操作规范",
    mix_protocol_gold: "黄金法则 (WALES): 严禁直接混合浓缩液",
    mix_protocol_gold_desc: "直接混合两种浓缩液（例如钙 + 硼）会引发化学“休克”。由于缺乏缓冲水，离子瞬间过饱和，使液体变成浓稠的凝胶或糊状（“布丁效应”），永久堵塞喷嘴。",
    mix_protocol_step1: "1. 先加水 (70%)",
    mix_protocol_step2: "2. 分别预稀释",
    mix_protocol_step3: "3. 按顺序添加",
    mix_protocol_step1_desc: "水是最好的化学缓冲剂。",
    mix_protocol_step2_desc: "请先在单独的桶中将每种肥料分别溶解。",
    mix_protocol_step3_desc: "加入浆液A -> 充分搅拌 -> 加入浆液B。",
    adj_title: "助剂策略",
    adj_subtitle: "选择正确的'信使'",
    adj_nis_title: "非离子表面活性剂 (NIS)",
    adj_nis_desc: "安全的全能型选择。降低表面张力以润湿叶片，但药液主要停留在表面。最适合常规营养补充，烧伤风险极低。",
    adj_si_title: "有机硅 (超级展着剂)",
    adj_si_desc: "渗透专家。具有极低的表面张力(20 dynes/cm)，液体能直接钻入气孔。非常适合内吸传导，但在高温下有烧叶风险。",
    adj_orange_title: "橙皮精油 / D-柠檬烯",
    adj_orange_desc: "有机的多面手。通过溶解蜡质角质层发挥渗透作用。额外奖励：通过物理脱水作用杀死软体害虫（螨虫/蓟马）。",
    adj_orange_warn: "警告：属于'热性'油类，会剥离蜡质导致阳光敏感。规则：1. >30°C 时严禁使用。2. 不要与其他强渗透剂混用。",
    adj_bee_title: "授粉昆虫安全",
    adj_bee_desc: "接触毒性：D-柠檬烯对蜜蜂有接触毒性（溶解外骨骼），且强烈气味会干扰觅食。\n\n合规要求：\n• 开花期间严禁喷洒。\n• 仅在傍晚蜜蜂归巢后进行喷洒。",
    adj_rule_burn: "烧伤风险：有机硅进入速度过快。在 30°C 以上绝对不要与铜制剂或硫磺混用。",
    adj_rule_runoff: "流失风险：超级展着会导致液滴聚结并从叶面流失。需适当减少用水量。",
    adj_rule_hydrolysis: "pH 敏感：如果 pH <4 或 >9 会迅速降解失效。配好后必须立即使用。",
    adj_diy_title: "用洗洁精 DIY？",
    adj_diy_desc: "<b>绝对不行：</b> 家用洗涤剂通常是<b>阴离子型</b>且含有钠盐。它们会极具破坏性地剥离叶片角质层，导致日灼和病原体轻松入侵。必须使用农业专用助剂。",
    chel_title: "螯合与稳定性",
    chel_subtitle: "解锁养分，防止土壤固定",
    chel_edta: "EDTA (标准型)",
    chel_edta_desc: "经济实惠的标配，适合叶面喷施。警告：在 pH > 6.5 时不稳定。如果在碱性土壤中使用，会直接释放养分（尤其是铁）并导致沉淀失效。",
    chel_eddha: "EDDHA (红铁)",
    chel_eddha_desc: "重型武器。在 pH 3.0-10.0 范围内极度稳定。是碱性土壤中根部施铁的【唯一】有效选择。价格昂贵但效果立竿见影。",
    chel_deta: "DETA",
    chel_deta_desc: "专家级。主要用于铜和锌。抓取力比 EDTA 更强，但在高碱性下依然会失效。⚠️ 真相：它无法螯合硼。",
    chel_dtpa: "DTPA (黄铁)",
    chel_dtpa_desc: "水培标准。稳定至 pH 7.5。完美填补了 EDTA (太弱) 和 EDDHA (太贵) 之间的空白。",
    chel_amino: "氨基酸 (有机态)",
    chel_amino_desc: "法拉利般的速度。渗透叶片角质层的速度最快。作为“预消化”的蛋白质，植物吸收它【零】能量消耗。抗逆恢复的最佳选择。",
    chel_fulvic: "黄腐酸 (载体)",
    chel_fulvic_desc: "黄金搬运工。小分子有机酸，能携带钙/镁/微量元素穿过细胞壁。在所有的 pH 水平下均可完美溶解。",
    chel_ligno: "木质素磺酸盐",
    chel_ligno_desc: "经济型有机物。造纸业副产品。络合力较弱（非真正的螯合），但具有极好的天然粘附/展着特性。仅限叶面使用。",
    chel_polyol: "糖醇 (Polyol)",
    chel_polyol_desc: "硼的专属出租车。甘露醇/山梨醇复合物。这是【唯一】能让硼在韧皮部中自由移动（从叶片运输到果实）的尖端技术。",
    chel_citric: "柠檬酸",
    chel_citric_desc: "调节剂。螯合作用较弱，但非常适合暂时降低桶混液的 pH 值以保持混合物的化学稳定。",
    chel_wood_vinegar: "木酢液",
    chel_wood_vinegar_desc: "增效剂。通过乙酸进行弱螯合。能有效降低 pH，驱避害虫，并显著改善叶片渗透性。",
    chel_lbl_synthetic: "合成螯合剂",
    chel_lbl_organic: "有机载体",
    chel_badge_ph_low: "pH < 6.5",
    chel_badge_ph_wide: "pH 3-10",
    chel_badge_ph_med: "pH < 7.5",
    chel_badge_fast: "极速吸收",
    chel_badge_univ: "全能通用",
    unit_title: "理解单位",
    unit_desc: "为什么使用比例(Ratio) vs 百分比(%) vs ppm",
    unit_col_unit: "单位",
    unit_col_target: "应用对象",
    unit_col_reason: "逻辑",
    unit_ratio_targets: "铁, 锰, 钙, 镁",
    unit_ratio_reason: "平衡决定了吸收率（离子竞争）。相对的比例比绝对的数量更为关键。",
    unit_percent_targets: "氮, 钾, 镁 (大量元素)",
    unit_percent_reason: "需求量大（占植物组织的 1-5%）。毒性/抑制作用均以百分比来衡量。",
    unit_ppm_targets: "锌, 铜, 硼, 钼 (微量元素)",
    unit_ppm_reason: "痕量需求。即便极微小的绝对量增加 (mg/kg) 也可能直接导致致命的中毒。",
    unit_row_ratio: "比例",
    unit_row_percent: "百分比(%)",
    unit_row_ppm: "ppm",
    info_N_func: "植物生命的终极建筑师。氮是氨基酸、蛋白质和叶绿素分子（光合作用的引擎）的基本构建块。它直接控制 DNA/RNA 合成，驱动细胞分裂，并调节叶面积指数 (LAI)。没有充足的氮，植物就无法构建任何代谢过程所需的酶系统。它是营养期生物量积累的核心驱动力。",
    info_N_comm: "商业形态：\n• 尿素 (46% N)：最便宜，浓度最高。酰胺态氮必须通过土壤脲酶和细菌转化为铵态，再转为硝态。如果不覆土或无水，挥发损失（变氨气）极高。先短暂升pH，然后强烈酸化土壤。\n• 硝酸钙 (15.5% N, 19% Ca)：高端选择。100% 硝态氮。见效快，不酸化，根系直接吸收无能量损耗。能协同拉动钙进入植物。果实膨大和急救的首选。\n• 硫酸铵 (21% N, 24% S)：含铵态氮，高酸化。适合高 pH 土壤或提供缓慢稳定的绿叶效果。⚠️警告：过量的铵会强烈抑制钙、钾、镁的吸收。\n• 硝酸钾 (13% N, 46% K2O)：快速救援。硝态氮充当载体，协同拉动钾进入植物。后期果实膨大和增甜无可匹敌。\n• 硝酸铵 (34% N)：平衡的半铵半硝。速效与长效兼备，但多地受管制。",
    info_N_app: "施用策略：“脉冲式喂肥”与阶段管理。在营养抽梢期重施氮肥；一旦开始花芽分化，必须立即控氮以防止“营养生长旁路”（植物为了长新叶而落花落果）。\n\n脉冲式施肥：施用主施氮肥后，等待 3-4 天再施钙或微量元素，避免根部拥堵。结果期，请将酰胺/铵态氮切换为硝态氮，以防止阻断钾和钙。",
    info_N_def: "移动元素警报：老叶均匀地变成浅绿色甚至纯黄色（包括叶脉也会黄）。植物会牺牲老叶以将氮调动到新梢。严重时表现为生长迟缓、枝条细弱、早落叶以及树冠稀疏。",
    info_N_bio: "有机协同：\n1. 鱼氨基酸：提供现成的多肽；植物直接吸收，节省了将硝态氮转化为蛋白质所需的大量 ATP 能量。\n2. 腐殖酸/黄腐酸：像海绵一样（高 CEC），在根区锁住游离的硝酸盐/铵离子，极大减少暴雨时的淋失。",
    info_N_antag: "1. 阳离子之战（铵 vs 钾/钙/镁）：铵 (NH4+) 是一种高活性正离子，会强势抢占钾、钙、镁的根部入口。\n解决方案：在果实灌浆期使用硝态氮 (NO3-) 避免阻断钾。\n\n2. 稀释陷阱（氮 vs 磷/微量元素）：过量的氮迫使叶片爆炸性生长。根系吸收缓慢的磷或微量元素的速度跟不上，导致新叶出现严重的“稀释性”缺乏。",
    info_N_syn: "1. 叶绿素引擎 (Mg)：氮构建卟啉环结构，而镁 (Mg) 位于正中心。缺一不可。\n2. 蛋白质工厂 (S)：氮制造多肽链，而硫 (S) 产生“二硫键”将蛋白质折叠成具备功能的3D形状。\n3. 硝酸盐载体 (K, Ca)：钾和钙充当生理护卫，帮助将硝态氮带上木质部。",
    info_N_inhib: "1. 铜 (Cu) 锁定：高氮会与铜结合，阻止木质素的形成（导致枝条变软）。\n2. 硼 (B) 抑制：高氮阻碍硼吸收，导致裂果和落花。\n3. pH 崩溃 (Mo)：大量使用铵/尿素会降低土壤pH，使钼在化学上被锁定，从而阻断氮的还原过程。",
    info_P_func: "能量通货与繁殖总开关。磷是 ATP（细胞能量）、DNA 和细胞骨架的核心。虽然它在幼苗期驱动根系伸长，但在成年果树中，它最关键的作用是发出从营养生长（抽梢）切换到生殖生长（开花）的信号。磷的激增告诉植物将积聚的能量用于产生花芽，而不是新叶。",
    info_P_comm: "商业形态：\n• MKP (磷酸二氢钾, 0-52-34)：毫无争议的催花之王。为什么果农在开花前大量施用？1) 零氮确保果树停止抽新叶。2) 极高的磷(52%)提供了萌发花芽所需的大量ATP能量。3) 高钾(34%)使枝条老熟，积累淀粉，并产生轻微渗透胁迫，诱导果树进入繁殖模式。\n• MAP (11-52-0)：含氮。适合早期根系发育，但如果在严格的催花期需要零氮则应避免。产生酸性微区 (pH ~4.0)。\n• DAP (18-46-0)：产生碱性微区 (pH ~8.0)。高氮高磷，严格用于早期营养阶段。\n• 聚磷酸盐：液体形态，比颗粒正磷酸盐更能抵抗土壤锁定。",
    info_P_app: "催花策略 (C:N 转换)：为了逼花，果树需要高碳水化合物 (C) 和低氮 (N)。在预计开花前 4-6 周，停止所有土壤氮肥。每 7-10 天叶面喷施 MKP (0-52-34) 以使枝条老熟并逼迫花芽萌发。\n\n⚠️ 磷-锌协议 (操作顺序)：如果果树缺锌，在纠正锌之前绝对不要重施磷。\n步骤 1：叶面喷施 EDTA-锌或氨基酸锌，完全绕过土壤。\n步骤 2：等待 5-7 天，让植物吸收并转运锌以构建生长酶。\n步骤 3：现在可以安全地向土壤施用重磷。永远不要在桶中将磷和锌混合。",
    info_P_def: "老叶变成深绿色、紫色或古铜色。根系变浅，开花严重推迟。",
    info_P_bio: "腐殖酸协同：腐殖酸包裹磷离子，防止其被铁/钙锁定。大大延长了磷的有效窗口期。",
    info_P_antag: "1. 单向阀门 (P vs N)：高磷不会阻止氮，但高氮会稀释磷。\n\n2. 三重磷锌锁定：高磷在三个层面上强势粉碎锌的吸收：\n• 化学：它们在土壤中结合形成不溶性的磷酸锌结石。\n• 生物：大量磷告诉果树抑制菌根真菌（而这些真菌是寻找锌所必需的）。\n• 生理：体内高磷将锌困在根部，阻止其通过木质部移动到新叶。",
    info_P_syn: "1. 能量载体 (Mg)：镁负责运输 ATP。没有镁 = 没有能量转移。\n2. 根系猎手 (N)：氮驱动根系长度以寻找不可移动的磷。",
    info_P_inhib: "1. 磷酸盐锁定 (Zn/Fe/Cu)：过量的磷产生磷酸锌结石，是导致缺锌的头号原因。\n2. 根部阻断：物理阻断铜的吸收位点。",
    info_K_func: "品质指挥官与渗透调节器。钾激活了 60 多种关键酶。它充当植物的液压泵，调节气孔开闭（抗旱性）并维持细胞膨压。最关键的是，钾是将光合产物（糖分）从叶片直接泵入膨大果实的运输工具，决定了最终尺寸、重量、糖度 (Brix) 和保质期。",
    info_K_comm: "商业形态：\n• MOP (氯化钾 / 0-0-60)：最便宜也最常见。警告：氯指数极高。对敏感作物（榴莲、牛油果、柑橘）有毒，导致叶缘烧焦并破坏土壤结构。结果期严格禁用。\n• SOP (硫酸钾 / 0-0-50)：优质黄金标准。极低的盐指数。提供钾和硫 (18%)，硫对风味、香气和精油至关重要。这是榴莲苦味的“黑金”秘密。\n• 硝酸钾 (KNO3 / 13-0-46)：最快的运输车。硝态氮充当分子护卫，瞬间将钾拉入植物。对于快速膨果和挽救严重缺钾无可匹敌。\n• 硅酸钾：高碱性液体叶面肥。提供钾的同时，物理硬化细胞壁（植硅体）以抵御害虫/真菌攻击。",
    info_K_app: "施用策略：在“果实膨大”阶段，对钾的需求呈指数级飙升。如果土壤钾含量低，果树会疯狂地从老叶中夺取钾来喂养果实。\n\n方案：在坐果后立即切换到高钾喂养（N:K 比例为 1:3 或 1:4）。对于优质作物，在收获前 3-4 周叶面喷施 SOP 或 KNO3，以推动最终的糖分积累和复杂风味的形成。",
    info_K_def: "移动元素警报：经典的“边缘焦枯”。老叶变黄，然后沿着外边缘物理烧伤（棕色/干脆）。果实会变小，缺乏甜味，成熟不均匀，果肉质地差、水化。",
    info_K_bio: "海藻精协同：冷压海藻（昆布）天然富含钾和生物活性细胞分裂素。在干旱或热浪期间将海藻与钾混合，向植物发出保持气孔运作的信号，防止产量崩溃。",
    info_K_antag: "1. 阳离子恶霸 (K vs Mg/Ca)：钾是一种小、高移动性且具有侵略性的正离子。植物天生会“奢侈吸收”钾。如果施用过多，它会在根部表面物理性地跑赢重质的 Ca++ 和 Mg++，引发严重的镁（黄化）和钙（裂果/湿芯）阻断。\n2. 铵阻断：土壤中高水平的铵 (NH4+) 会积极竞争并阻断钾的吸收。",
    info_K_syn: "1. 糖分护卫 (B)：钾提供移动树液的压力，但硼充当“守门员”，允许糖分穿过细胞膜进入果实。它们必须协同工作。\n2. 运输助手 (Fe & Mn)：钾调节水流，将移动缓慢的铁和锰带上树冠。",
    info_K_inhib: "1. 阳离子置换 (Mg/Ca)：在根部交换位点置换镁和钙。\n2. 硼稀释：由高钾驱动的极速细胞膨大可能会超过植物供应硼的能力，导致空心或开裂。",
    info_Ca_func: "结构水泥与抗裂果剂。钙在中胶层形成“果胶酸钙”——字面意义上是将植物细胞粘合在一起的胶水。随着果实（在水和钾的驱动下）快速膨大，细胞壁必须拉伸。如果缺钙，细胞“胶水”就会失效，果皮就会发生物理性撕裂，导致严重的裂果。它还能强化细胞壁抵御真菌入侵，并作为“第二信使”提醒植物应对高温和干旱胁迫。",
    info_Ca_comm: "商业形态：\n• 糖醇钙 (Polyol)：防止裂果的终极选择。钙天然不可移动，但糖醇络合物会欺骗植物，使钙通过韧皮部直接移动到果实中。\n• 钙-硼-镁液体组合：行业标准的生殖期叶面肥。硼是使钙发挥作用（交联细胞壁）的必需元素，而镁可以防止高钙在膨大果实中引起局部缺镁。\n• 硝酸钙：高溶解度水肥标准。向根部提供快速的硝态氮和钙。\n• 氨基酸钙：温和的叶面肥，渗透快，减少植物能量消耗。\n• 白云石 / 农业石灰（双效岩石）：高度不溶的碎石。服务于两个庞大的基础目的：1) pH 纠正（中和来自尿素/铵的酸）和 2) 盐基饱和（缓慢滴注钙和镁）。⚠️ 警告：切勿使用白云石来提供即时果实营养以阻止裂果或脐腐病。",
    info_Ca_app: "防裂果方案：钙只能随水（蒸腾作用）向上移动。果实几乎不蒸腾，因此根部吸收的钙大部分绕过了它们。您必须在膨大期每 10-14 天直接将移动性叶面钙（例如糖醇钙）喷洒在果实上。\n\n白云石时间表：因为它是一种缓释岩石，时机至关重要：\n1. 采后/恢复期：在收获后立即施用，以重置耗尽、酸化的土壤并重建钙/镁库。\n2. 开花前 2-3 个月：在开花前及早施用，使土壤 pH 达到完美优化，以便在结果期吸收昂贵的磷和钾肥。",
    info_Ca_def: "严重的果实开裂（膨大期间果皮开裂）。榴莲中的“湿芯”（水状、糊状果肉）。脐腐病。由于钙无法从老叶中转移，新叶长出时会呈钩状、扭曲或严重卷曲。根尖变褐、变钝并死亡。",
    info_Ca_bio: "载体协同：黄腐酸和特种多肽与钙离子结合，中和它们强大的正电荷。这使得沉重的钙分子能够轻松穿过蜡质叶片角质层进入植物组织，而不会卡在叶片表面。",
    info_Ca_syn: "1. 砖块与砂浆 (B)：这是强制性的协同作用。钙构建细胞壁“砖块”，但硼是“砂浆”。如果您施用钙而不施用硼，植物就无法将钙整合到细胞壁中，使喷洒完全无用。这就是为什么几乎所有商业叶面肥都是 钙+硼。\n2. 膨大三人组 (B + Mg)：在快速的果实膨大期间，钙+硼构建物理细胞结构，而镁 (Mg) 提供将糖分泵入这些新细胞所需的 ATP 能量。\n3. 铠甲 (Si)：硅在外部角质层上强化了钙壁。",
    info_Ca_antag: "1. 阳离子拥挤 (K/Mg)：高钙（石灰）填满交换位点，阻断钾和镁。\n2. pH 锁定：高钙提高 pH，使微量元素沉淀。",
    info_Ca_inhib: "1. pH 阻断 (Fe/Mn/Zn/B)：高 pH > 7.0 会锁定微量元素。",
    info_Mg_func: "叶绿素核心与质地大师。镁是叶绿素分子的中心原子——没有它，光合作用物理上就会停止。除了绿化之外，镁还是将蔗糖加载到韧皮部以运输到果实的主泵。在顶级榴莲种植中，镁是形成标志性粘稠、浓郁、奶油蛋浆般果肉质地的绝对关键。",
    info_Mg_comm: "商业形态：\n• 水镁矾 / 硫酸镁 (泻盐)：高溶解度，见效快。非常适合叶面喷施以绕过根部锁定，并提供复杂的风味/香气发育所需的必需硫。\n• 硝酸镁：优质水溶肥选择。硝酸盐充当载体，协同拉动镁进入植物。非常适合快速营养抽梢。\n• 白云石：缓释盐基饱和度。中和土壤酸，但无法为发育中的果实提供即时营养。\n• 氧化镁 (MgO)：大部分不溶。纯粹用作缓释土壤改良剂。",
    info_Mg_app: "施用策略（绕过“隐性饥饿”）：在果实膨大期，果农施用大量的钾 (K) 来使果实膨胀。因为钾是一个具侵略性的“恶霸”离子，它在根部完全锁死了镁。即使您的土壤测试显示镁含量很高，果树依然处于饥饿状态。\n\n顶级榴莲方案：为了在收获时保持高度期望的“绿壳”（防止过早黄化）并确保奶油般的果肉，您必须绕过根系。在最后的果实膨大阶段，每 10-14 天叶面喷施硫酸镁。目标是将土壤 K:Mg 比例维持在约 2:1 到 3:1。",
    info_Mg_def: "移动元素警报：经典的“叶脉间失绿”。老叶在叶脉之间变成强烈的黄色，在叶片基部留下独特的“绿色箭头”或三角形。在像榴莲这样的优质水果中，缺镁会导致果壳在完全成熟前变苍白/发黄，果肉水化、平淡，缺乏优质的粘稠质地。",
    info_Mg_syn: "1. 磷泵 (P)：镁携带 P/ATP。\n2. 绿色工厂 (N)：叶绿素的协同作用。",
    info_Mg_antag: "1. K/Mg 世仇：钾强烈抑制镁。\n2. 钙抑制：高钙会使土壤紧实，限制镁。",
    info_Mg_inhib: "1. 阳离子竞争 (Ca/K)：高镁抑制钙和钾的吸收。",
    info_S_func: "风味与香气架构师。硫是氨基酸半胱氨酸和甲硫氨酸的核心成分，它们是挥发性有机化合物 (VOCs) 的构建块。在顶级榴莲中，这些硫基化合物决定了猫山王和黑刺等品种强烈的刺激性、复杂的香气和标志性的“瓦斯味”酒精味。它还形成二硫键，赋予植物蛋白质结构完整性。",
    info_S_comm: "商业形态：\n• SOP (硫酸钾 / 0-0-50 + 18% S)：优质水果的圣杯。同时提供用于果实膨大的钾和用于风味的硫，不含任何会破坏果肉质地的氮。\n• 水镁矾 / 硫酸镁：高溶解度，同时提供镁以获得奶油质地和硫以获得苦味。\n• 元素硫 (90% S)：高度不溶。需要土壤细菌（硫杆菌）在几个月内缓慢将其转化为硫酸盐。强烈酸化土壤。\n• 硫酸铵 (21% N, 24% S)：非常适合早期营养性返绿，但在最后的果实成熟阶段必须避免使用。\n• 石膏 (CaSO4)：一种极好的土壤调理剂，提供硫酸根硫和钙而不改变土壤 pH。",
    info_S_app: "终极顶级榴莲方案 (K-Mg-S 铁三角)：\n要实现备受追捧的“黑金”特征（强烈的苦味、粘稠、带有刺激性香气的奶油果肉），果农必须在果实发育的最后 30 天掌握 K:Mg:S 的组合。\n\n• 比例：目标是在后期应用中达到 K:Mg:S 大约为 4:1:2 的比例。\n• 机制：钾 (K) 驱动糖分和果实大小。镁 (Mg) 构建厚实、柔滑的奶油质地。硫 (S) 将这些糖分发酵成挥发性硫化合物，产生令人垂涎的“苦味”和香气。\n• 策略：在落果前 30 天，停止所有氮。专门切换到 SOP (硫酸钾) 和叶面硫酸镁。",
    info_S_def: "非移动元素警报：与氮不同，硫不容易从老叶移动到新叶。缺乏症首先表现为最新叶片变成浅绿色/黄色。在果实中，低硫会导致果肉平淡、只有甜味，完全缺乏优质的复杂香气和标志性的苦味。",
    info_S_bio: "氨基酸协同：将硫与富含甲硫氨酸的氨基酸一起施用会产生巨大的乙烯产生放大器，自然加速均匀成熟并增强最终风味特征。",
    info_S_syn: "1. 氮的孪生兄弟：硫是将氮代谢成蛋白质所必需的。没有硫，氮会作为有毒的硝酸盐积聚在叶片中，吸引害虫。\n2. 风味铁三角 (K + Mg + S)：协同将简单的碳水化合物转化为复杂的精油和挥发性风味。",
    info_S_antag: "1. 钼酸盐冲突：高浓度的硫酸盐 (SO4²⁻) 会强烈竞争钼酸盐 (MoO4²⁻) 的根部吸收。\n2. 硝酸盐竞争：高硫酸盐会暂时抑制硝酸盐的吸收。",
    info_S_inhib: "1. 钼锁定：直接在根部膜上抑制钼的吸收。\n2. 酸化陷阱：大量使用元素硫或硫酸铵会使土壤 pH 崩溃，锁定大量元素。",
    info_Si_func: "终极应激铠甲。尽管由于它对基本生命不是严格不可缺少的而在历史上被“遗忘”，但硅对于田间生存至关重要。根部吸收它并将其输送到叶片，在那里它在角质层正下方聚合成固体的“植硅体”（微观玻璃/蛋白石结构）。这种双层装甲物理阻挡真菌菌丝穿透，并破坏刺吸式害虫（螨虫、蓟马、蚜虫）的口器。它还迫使叶片完美直立（最大化光捕获）并紧密调节气孔以防止在极端高温下失水。",
    info_Si_comm: "商业形态：\n• 正硅酸 / 单硅酸 (H4SiO4)：高级标准。这是植物可以【直接吸收】的唯一形式。高度稳定，通过叶面见效快，且不会大幅度提高桶混 pH。\n• 硅酸钾 (K2SiO3)：传统主力。高碱性 (pH 10-11)。非常适合补充 K 和 Si，但因桶混灾难而臭名昭著（与酸或钙混合时会立即变成固体玻璃状凝胶）。\n• 硅酸钙 (矿渣/硅灰石)：缓释颗粒土壤改良剂。非常适合中和高酸性土壤并锁定有毒的铝。\n• 稻壳灰 / 竹生物炭：无定形二氧化硅的廉价有机来源。需要微生物作用才能变得植物可用。",
    info_Si_app: "施用策略 (桶混噩梦)：硅在化学上具有侵略性。\n\n硅酸钾的黄金法则：绝对不要将硅酸钾与钙、镁或酸性肥料/农药混合而没有极端稀释，否则您的桶将瞬间变成凝胶，永久毁坏喷嘴。\n方案：始终将硅酸盐最后添加到高度稀释的桶中，或者最好单独喷洒它。在进入旱季/炎热季节之前，或者在预计病虫害压力激增之前重施。",
    info_Si_def: "隐蔽的脆弱性：植物没有它不会死，但它们变成了“软目标”。症状包括茎干虚弱、下垂（倒伏）、难以捕捉阳光的下垂叶片，以及对白粉病、枯萎病和螨虫侵扰的突然、严重的易感性。植物在正午高温下会萎蔫得更快。",
    info_Si_bio: "生物刺激素协同：将稳定的正硅酸与海藻提取物结合，创造出终极的“防旱和防热盾”，保持气孔活跃并防止日灼。",
    info_Si_syn: "1. 双重墙壁 (Ca)：硅和钙协同工作。钙是细胞之间的水泥，而硅是外部的玻璃盔甲。\n2. 光截获 (N)：硅保持富氮的大叶片坚挺直立，防止自我遮挡并最大化光合作用。",
    info_Si_antag: "1. 磷冲突：在土壤中，硅酸盐阴离子和磷酸盐阴离子竞争相同的结合位点。高硅施用实际上可以释放锁定的土壤磷，但极端的硅可能会竞争磷的吸收。",
    info_Si_inhib: "1. 凝胶效应 (桶混)：液体硅酸盐与酸性浓缩物和金属阳离子（Ca，Mg，Fe）有巨大的不兼容性，会立即形成不溶性凝胶沉淀。",
    info_Fe_func: "叶绿素架构师与呼吸催化剂。虽然镁是叶绿素分子的中心，但铁是构建它的【必需工具】。没有铁，植物就无法合成叶绿素，导致能量彻底衰竭。它是电子传递链（细胞呼吸）的核心驱动力，并且对于氮同化（将有毒的硝酸盐转化为可用的氨基酸）绝对必要。",
    info_Fe_comm: "商业形态：\n• Fe-EDDHA (红铁)：重型土壤救星。在高达 pH 10.0 内极其稳定。是在高 pH 或钙质（石灰石）土壤中施用的唯一有效选择。昂贵但保证吸收。\n• Fe-DTPA (黄铁)：稳定至 pH 7.5。水培和中性土壤的全球标准。\n• Fe-EDTA：在 pH 6.5 以上不稳定。如果在碱性土壤中使用，它会瞬间丢弃铁转而结合钙。最好仅限于叶面喷施。\n• 硫酸亚铁：便宜，但在化学上是“裸露”的。在大多数土壤中瞬间锁定。如果作为叶面施用且没有有机缓冲液，则有很高的烧伤风险。",
    info_Fe_app: "施用策略 (pH 与 UV 陷阱)：铁是最难管理的微量元素，因为它在碱性土壤 (pH > 7.0) 和高磷环境中会瞬间锁定。\n\n方案：如果土壤 pH 值高，通过叶面喷施（Fe-EDTA 或氨基酸铁）完全绕过根部。⚠️ 紫外线警告：合成铁螯合物会遭受光降解（紫外线会破坏螯合键）。始终在傍晚或清晨进行铁的叶面喷施。",
    info_Fe_def: "非移动元素警报：最新叶片上严重的“叶脉间失绿”。组织变成浅黄色或完全白色（“漂白”），但叶脉保持鲜明对比的深绿色。发生这种情况是因为无法从老叶中清除铁。",
    info_Fe_bio: "载体协同：黄腐酸和氨基酸充当天然螯合剂。将硫酸亚铁与氨基酸混合可保护铁免受锁定，防止叶片烧伤，并促进通过叶片气孔快速进入。",
    info_Fe_syn: "1. 运输护卫 (K)：钾调节水流，将沉重、不可移动的铁物理带到新梢。\n2. 酸化剂 (S)：硫降低根区的微 pH 值，自然解锁土壤中原生的铁。",
    info_Fe_antag: "1. 孪生宿敌 (Fe vs Mn)：铁和锰对植物根部来说在化学上看起来完全相同。高锰完全阻断铁的吸收，反之亦然。维持严格的 Fe:Mn 土壤比例约为 2:1。\n2. 钙陷阱：高钙（石灰石/碱性土壤）限制了铁的溶解度。",
    info_Fe_inhib: "1. 磷酸盐锁定：高磷施用将原生土壤铁结合成磷酸铁，一种不溶的岩石。\n2. 重金属饱和：过量的锌或铜物理占据了根部载体通道，将铁锁在外面。",
    info_Zn_func: "生长总调节剂与花粉架构师。锌是色氨酸（生长素，即主导植物生长的激素的构建块）的必需前体。它决定了节间伸长和叶片扩张。对于繁殖而言，锌是开花快速细胞分裂期间合成 DNA/RNA 的核心要求。它在很大程度上决定了花粉的活力，驱动花粉管的伸长，并防止灾难性的落花。",
    info_Zn_comm: "商业形态：\n• Zn-EDTA：在大多数土壤中高度稳定（至 pH 7.5）。非常适合滴灌和早期叶面喷施。\n• 硫酸锌：便宜且有效，但在高 pH 或高磷土壤中沉淀极快。\n• 氨基酸锌：绝对最快的叶面渗透速度。对于开花前的急救喷洒至关重要，因为氨基酸直接为高耗能的开花过程提供能量。\n• 氧化锌：不溶性石粉。有效性极慢，仅用作酸性土壤中的长期基肥。",
    info_Zn_app: "施用策略 (花前窗口期)：由于在开花期间大量消耗锌并且直接决定花粉健康，因此【必须】在花朵开放之前将其装载到树中。\n\n方案：在开花前阶段（通常与硼结合）叶面喷施 氨基酸锌 或 Zn-EDTA。⚠️ 磷陷阱：如果施用重磷 (如 MKP) 来催花，则必须在施磷前 7-10 天施用锌，以避免在土壤和组织中造成永久性的化学锁定（磷酸锌）。",
    info_Zn_def: "非移动元素警报：经典的“小叶病”综合征（新叶仍然很小）和“簇生病”（节间未能伸长，导致叶片聚集在一起）。生殖失败：大量落花，花粉虚弱/不育，以及因授粉不完全导致果实一边大一边小或畸形。",
    info_Zn_bio: "氨基酸协同：将锌与氨基酸结合起到了双重加速器的作用。氨基酸保护锌免于锁定，将其立即穿过叶片角质层，并提供准确的色氨酸以启动生长素的产生。",
    info_Zn_syn: "1. 生长双子星 (N)：氮驱动细胞的产生，但锌（通过生长素）告诉这些细胞扩张到其完整的健康尺寸。\n2. 繁殖 (B)：锌构建健康的花粉粒，而硼构建它行进的管道。两者都是坐果的必需条件。",
    info_Zn_antag: "1. 磷酸盐陷阱 (P)：农学中最著名的拮抗作用。高磷立即与土壤中的锌结合，形成不溶性的磷酸锌结石。始终在重磷之前施用锌。\n2. 金属竞争 (Fe/Cu/Mn)：锌竞争根部吸收通道的其他重金属。",
    info_Zn_inhib: "1. 铁/铜阻断：极端过量施用锌会完全使根部载体通道饱和，锁定铁和铜，从而引发人为的缺乏症。",
    info_B_func: "花卉架构师与糖分守门员。硼是繁殖的绝对关键。当花粉粒落在一朵花上时，它必须长出一条“花粉管”进入子房以受精种子。硼物理地构建并引导这条管道；没有它，管子破裂，受精失败，树就会疯狂地把花堕掉。此外，硼充当在细胞壁中交联果胶酸钙的“砂浆”，并充当允许糖分穿过细胞膜进入果实的守门员。",
    info_B_comm: "商业形态：\n• Ca-B-Mg 液体组合：行业标准。在结果期很少单独施用硼。它与钙（“砖块”）和镁（“能量泵”）捆绑在一起，以防止果实开裂。\n• 糖醇硼 (Polyol)：开花的高级标准。硼在自然状态下不可移动，但这种复合物欺骗植物，使硼通过韧皮部自由移动，直接到达花芽。\n• 四硼酸钠 (速溶硼 - 20% B)：高溶解度，叶面和滴灌的行业标准。警告：会显著提高桶混 pH。\n• 硼酸 (17% B)：较便宜，酸性，但需要温水才能正确溶解。\n• 硼酸钙：缓释岩石形态，纯粹用于长期土壤盐基饱和度。",
    info_B_app: "施用策略 (两个关键窗口期)：\n1. 开花前窗口：硼在土壤中随水移动。如果干燥，根部吸收为零。您必须在花朵开放前 2-4 周叶面喷施硼，以便果树可以将其装入花蕾中。\n2. 果实膨大（防裂）：每 10-14 天直接将 Ca+B 组合喷洒到果实上，以建立果皮弹性。\n⚠️ 毒性警告：硼具有所有养分中最窄的安全裕度。精确测量剂量；过量会严重烧伤叶片。",
    info_B_def: "非移动元素警报：灾难性的生殖失败。花朵大量掉落而无法坐果。幸存的果实通常是一边大一边小、畸形或呈“C”形（由于种子授粉不完全）。营养生长症状包括生长点（顶端分生组织）死亡，茎干空心，以及果皮厚、软木状、开裂。",
    info_B_bio: "糖醇 (Polyol) 协同：硼在植物内部天然严格不可移动。然而，用糖醇（甘露醇/山梨醇）配制硼起到了生物黑客的作用，允许硼进入韧皮部树液，并活跃地从叶片直接运输到高需求的花蕾中。",
    info_B_syn: "1. 强制性协同作用 (Ca)：钙构建细胞壁，但硼是化学交联果胶酸钙的“砂浆”。没有硼，钙就无用地漂浮在组织中，无法防止果实开裂。这就是为什么商业叶面肥严格地将 Ca+B 捆绑在一起。\n2. 终极组合 (Ca + B + Mg)：通常作为三重奏出售。当 Ca+B 构建膨大果实的物理结构时，捆绑镁 (Mg) 以提供将重糖分泵入果实所需的能量 (ATP)，并防止高钙在局部阻断镁。\n3. 糖分管道 (K)：钾产生移动树液的压力，而硼打开膜门，让糖进入果实。",
    info_B_antag: "1. 钙锁定 (pH)：土壤中的高钙水平（过度撒石灰）将强烈诱捕硼，使其无法获得。\n2. 稀释效应 (N/K)：由高氮或钾驱动的快速爆发性营养生长，将可用的硼物理稀释在过多的组织中，诱发顶端生长点突然的缺乏症。",
    info_B_inhib: "1. 极端的药害：硼中毒非常普遍。过量施用会导致严重的坏死（灼伤），从叶尖/边缘开始，迅速向内扩散直到叶片脱落。",
    info_Mn_func: "水分解器与防御激活器。锰是光系统 II 中放氧复合体 (OEC) 的关键引擎。它字面意义上在光合作用期间分解水分子，以产生驱动整个植物的电子。没有锰，光合作用在第一步就停止了。它还驱动 TCA 循环（细胞呼吸），并大量参与合成木质素，使植物细胞壁和根部硬化以抵抗病原体攻击。",
    info_Mn_comm: "商业形态：\n• 硫酸锰 (MnSO4)：全球标准。高溶解度，具有成本效益，极其快速见效的叶面喷施，以挽救缺乏的果树。\n• Mn-EDTA：一种稳定至 pH 7.0 的合成螯合物。最适合在贫瘠土壤上的滴灌系统中使用，以防止锰与土壤颗粒锁定。\n• 氧化锰 (MnO)：高度不溶的石粉。作为快速修复完全无用；它仅在高酸性土壤中作为多年缓释改良剂起作用。",
    info_Mn_app: "施用策略 (pH 跷跷板)：锰对土壤 pH 极其敏感。\n\n• 高 pH (> 7.0) 锁定：在碱性或钙质土壤中，锰迅速氧化成不可用的固体形式。您必须绕过土壤并使用叶面硫酸锰。\n• 低 pH (< 5.0) 毒性陷阱：在高酸性土壤中，锰变得异常可溶，淹没根部并导致严重的锰中毒（叶片斑点、皱缩、脱落——通常被误诊为真菌病）。治疗方法【不是】添加养分，而是施用白云石石灰来提高 pH 值，并将过量的锰安全地锁回土壤中。",
    info_Mn_def: "非移动元素警报：首先出现在新叶上。导致“斑驳”或“棋盘状”叶脉间失绿。与铁缺乏（白组织上有清晰锐利的绿脉）不同，锰缺乏看起来模糊不清，浅绿色/黄色的斑点在叶脉之间扩散。",
    info_Mn_bio: "黄腐酸协同：将锰与黄腐酸一起施用可防止锰离子在叶片表面过早氧化，确保快速的气孔进入和利用。",
    info_Mn_syn: "1. 铠甲制造者 (Cu)：锰和铜是合成木质素的终极搭配，物理硬化植物以防止真菌渗透。\n2. 酶激活 (K)：钾和锰共同激活几个关键的呼吸和能量转移酶。",
    info_Mn_antag: "1. 孪生宿敌 (Mn vs Fe)：铁和锰对植物根部来说在化学上看起来完全相同。高锰完全阻断铁的吸收，反之亦然。维持严格的 Fe:Mn 土壤比例约为 2:1。\n2. 钙阻断：高钙（石灰石）极大地抑制了根区的锰吸收。",
    info_Mn_inhib: "1. 铁饥饿：过量的锰彻底关闭植物体内的铁运输。\n2. 镁置换：极端的锰中毒可以置换叶片中的镁，从而有效摧毁叶绿素。",
    info_Cu_func: "木质素建设者与免疫催化剂。铜是一种必需的重金属，是合成木质素的主要催化剂——木质素是赋予枝干物理强度和结构刚度的“木头”。没有它，树木会产生柔软、虚弱、“橡胶状”的枝条，这些枝条会在果实的重量下折断。铜也是多酚氧化酶的核心成分，该酶负责植物免疫反应（植保素）和伤口的快速褐变/愈合。",
    info_Cu_comm: "市场形态与重金属现实：\n• 铜制剂（氢氧化铜/氧氯化铜）：广泛用于疾病控制。由于它们覆盖在叶片上，它们会缓慢降解并提供稳定的“营养”铜滴注。使用这些杀菌剂的果园很少需要额外的铜肥。\n• 硫酸铜（蓝矾）：高水溶性，但充当无情的重金属盐。如果未用石灰中和（制成波尔多液），会有极高的烧叶风险。\n• Cu-EDTA：对于纯营养滴灌或叶面施肥最安全的形式，因为螯合物保护重金属不至于引起即时的组织焦枯。",
    info_Cu_app: "施用策略 (毒性威胁)：由于铜是一种重金属，它在土壤中【不会降解】；它会永久积累。使用了几十年铜杀菌剂的果园经常遭受严重的土壤毒性，这会阻碍根系发育并杀死有益的土壤微生物和蚯蚓。\n\n方案：依靠您的标准杀菌剂计划来获得铜营养。仅在土壤测试确认真正缺乏时（通常仅在原始土壤或高泥炭/有机土壤中）才进行针对性的 Cu-EDTA 施用。",
    info_Cu_def: "非移动元素警报：新长出的枝条发生严重的结构失效。树枝变得异常柔软、呈橡胶状，并弯曲成“S 形”或严重下垂（由于零木质素）。引起严重的“枯梢病”，即新梢尖端死亡变黑。树皮和果实可能出现水泡或渗出的树胶袋（疹病）。",
    info_Cu_bio: "⚠️ 生物刺激素死亡陷阱：【严禁】将铜制剂杀菌剂与氨基酸或多肽混合。氨基酸充当“特洛伊木马”，将重金属铜直接穿过叶片角质层，瞬间拉入细胞质中，造成灾难性的药害（严重的叶片烧焦和落叶）。",
    info_Cu_syn: "1. 木材建造者 (Mn)：铜和锰是合成木质素和物理硬化植物抵抗真菌侵入的最佳搭配。\n2. 蛋白质加工 (N)：适当代谢氮所必需的。",
    info_Cu_antag: "1. 重金属世仇 (Zn/Fe/Mn)：过量的土壤铜强烈竞争根部吸收位点，强势锁定锌、铁和锰。\n2. 高有机质陷阱：铜与土壤有机质（腐殖质/泥炭）的结合比任何其他微量元素都要紧密，导致严重锁定。",
    info_Cu_inhib: "1. 根尖坏死：土壤中过量的重金属铜会永久地阻碍、增厚并杀死脆弱的根尖，摧毁植物的营养搜寻能力。\n2. 磷阻断：高土壤磷降低铜的溶解度。",
    info_Mo_func: "氮气转化器与蛋白质使能者。钼是两种至关重要的酶的关键金属辅助因子：硝酸还原酶和固氮酶。当植物从土壤中吸收硝酸盐 (NO3) 时，它不能直接使用它。它必须使用硝酸还原酶将 NO3 转化为铵 (NH4)，然后才能制造氨基酸。没有钼，这个过程就会停止。硝酸盐在叶片中积累到毒性水平（吸引害虫），而植物同时因缺乏蛋白质而挨饿。在豆科植物中，钼是细菌从空气中固定氮气的强制性要求。",
    info_Mo_comm: "商业形态：\n• 钼酸钠 (39% Mo)：全球行业标准。高水溶性。因为植物只需要极少量的钼，所以通常以微剂量（克/公顷）施用。\n• 钼酸铵 (54% Mo)：浓度更高，高水溶性的替代品。\n💡 pH 异常现象：钼是【唯一】在碱性土壤中变得更有效，而在酸性土壤 (pH < 5.5) 中完全锁定的微量元素。",
    info_Mo_app: "施用策略 (微剂量法则)：植物需要的是十亿分之一级的钼。\n\n方案：在钼被锁定的高酸性土壤中，叶面喷施钼酸钠是最有效的急救方法。它也被广泛用作豆科植物的种子处理，以过度增压根瘤的固氮能力。\n⚠️ 警告：过量施用很少对植物本身产生毒性，但会导致在作物上放牧的反刍动物发生致命的铜缺乏症（钼中毒）。",
    info_Mo_def: "移动元素警报：因为钼完全与氮的加工处理相关，它的缺乏症看起来完全像缺氮（老叶变浅绿/黄）。然而，独特的标志包括“鞭尾病”（叶片变得扭曲、细长和畸形）以及边缘叶片烧焦（由有毒的、未加工的硝酸盐从内向外烧毁叶片边缘引起）。",
    info_Mo_syn: "1. 氮气钥匙 (N)：钼解锁了氮气。在没有足够钼的情况下施用大量硝酸盐肥料，就像给植物喂食它无法消化的食物。\n2. 磷的拉动 (P)：土壤中的高磷水平积极增强了根部吸收钼酸盐的能力。",
    info_Mo_antag: "1. 硫酸根盾牌 (S)：钼酸根离子 (MoO4²⁻) 和硫酸根离子 (SO4²⁻) 在大小和电荷上几乎相同。大量施用硫将强势竞争钼的根部进入，从而引发严重的钼缺乏。",
    info_Mo_inhib: "1. 酸性土壤锁定：低于 5.5 的土壤 pH 会导致铁和铝氧化物将钼酸盐结合成不溶性的石头。\n2. 铜世仇：极高水平的钼会限制植物组织内铜的可用性。",
    info_Cl_func: "渗透平衡器。氯（以氯离子 Cl⁻ 形式吸收）是调节气孔开闭、维持细胞膨压（水压）和平衡植物内部电荷所必需的微量元素。它还在光合作用中发挥着微小但至关重要的作用（协助光系统 II 中的水分解过程）。虽然大多数阔叶作物只需要微量的氯，但某些耐盐作物在很大程度上依赖它进行水分管理。",
    info_Cl_comm: "市场形态与氯化物威胁：\n• MOP (氯化钾 / KCl)：含有 ~47% 的氯。它是最便宜的钾源，但巨大的氯化物负载对敏感作物有剧毒。\n• SOP (硫酸钾)：安全、低氯的替代品。\n⚠️ 榴莲陷阱：榴莲、牛油果和柑橘有“恐氯症”。由于它们缺乏在根部排除氯的基因机制，氯会在叶片中迅速积累。这会导致严重的叶尖焦枯（边缘烧伤）、过早落叶，并破坏优质果实的奶油质地和复杂风味。",
    info_Cl_app: "施用策略 (针对作物)：\n• 厌氯作物（榴莲、柑橘、浆果、烟草）：【严格避免使用 MOP】。您必须使用 SOP（硫酸钾）或硝酸钾来提供钾，而不带入有毒的氯负载。\n• 喜氯作物（油棕、椰子、甜菜、芹菜）：这些作物积极需要大量的氯来调节渗透压并最大化产量。对它们来说，廉价的 MOP 在农艺上实际上优于 SOP。",
    info_Cl_def: "在自然界中极其罕见，因为降雨、灌溉水和沿海海风通常提供足够的氯。如果缺乏，叶片会在边缘突然枯萎（即使土壤完全湿润），并且根系变得高度分枝但短粗。",
    info_Cl_syn: "1. 渗透搭配 (K)：氯化物直接与钾一起起作用，以打开和关闭气孔，调节植物在热应激期间的水分流失。\n2. 水分解器 (Mn)：与叶绿体中的锰一起驱动光合作用。",
    info_Cl_antag: "1. 硝酸盐战争：氯离子 (Cl⁻) 和硝酸根离子 (NO3⁻) 都是带负电的小阴离子。大量使用高氯肥料将积极竞争并抑制植物吸收必需氮的能力。\n2. 盐胁迫：高土壤氯会造成严重的渗透胁迫，实际上将水从根部拉出。",
    info_Ni_func: "尿素消化器与代谢催化剂。镍是脲酶【强制性金属辅助因子】。当植物吸收尿素（无论来自土壤还是叶面喷施）时，必须将其分解成可用的氨和二氧化碳。没有镍，这个过程就无法进行；尿素会积聚到剧毒水平，从内部烧毁植物。它在种子发芽和抗病能力方面也发挥关键作用。",
    info_Ni_comm: "市场形态：\n• 硫酸镍：高水溶性，通常以极低微剂量施用。\n• 木质素磺酸镍/螯合物：用于快速、安全的叶面渗透。\n⚠️ 商业现实：因为植物需要的是十亿分之一（ppb）级别的极微量镍，它很少作为独立肥料销售。大多数农业土壤都有足够的天然镍，且它常作为微量杂质包含在其他大宗肥料中。",
    info_Ni_app: "施用策略 (叶面尿素的伴侣)：真正的土壤缺镍极其罕见（尽管它曾导致山核桃园出现著名的“小鼠耳病”）。\n\n方案：目前镍最实用的农学用途是在大量【叶面喷施尿素】时加入微量镍。这能确保植物有足够的脲酶瞬间消化涌入的大量尿素，而不会遭受叶尖烧焦（尿素中毒）。",
    info_Ni_def: "移动元素警报：物理症状标志是“小鼠耳”叶片——新叶长出时变小、异常圆润且尖端变钝。隐性的代谢症状是大量喷洒尿素后，不久叶尖出现严重的坏死（死/烧焦），这是由于有毒尿素积聚引起的。",
    info_Ni_syn: "1. 尿素消化器 (N)：镍使尿素变得安全。它允许植物快速将尿素态氮转化为氨基酸。\n2. 种子活力：与其他微量元素协同，确保种子正常发育和萌发率。",
    info_Ni_antag: "1. 重金属竞争：高浓度的竞争性金属阳离子——尤其是锌 (Zn)、铜 (Cu) 和铁 (Fe)——会物理性地阻断镍进入根部的载体通道。\n2. 碱性锁定：和大多数微量元素一样，当土壤 pH 值超过 6.7 时，镍的有效性显著下降。",
    info_Ni_inhib: "1. 极高药害毒性：因为植物需要量极少，意外的过量施用具有剧毒，会完全阻碍根系生长，并通过阻断代谢途径来模拟缺铁/缺锌症状。",
    info_Na_func: "渗透替代品。虽然对大多数作物来说不是严格必需的，但钠可以作为钾的功能性备用元素，用于维持细胞膨压（水压）和调节气孔开闭，特别是在低钾环境中。在特定的耐盐植物（如甜菜、芹菜、菠菜等盐生植物）中，它积极辅助碳固定和浓度聚集。",
    info_Na_comm: "土壤破坏者 (分散/絮凝破坏)。钠对土壤结构的破坏是毁灭性的。由于 Na+ 离子具有巨大的水合壳（周围包裹一层厚厚的水），过量的钠在物理上会强行将粘土颗粒推开——这个过程被称为“分散”。这会摧毁疏松的团粒结构土壤，将其变成坚硬的混凝土状表面结皮。一旦发生，水无法渗入，根系缺氧窒息，有益的土壤生物群落崩溃。",
    info_Na_app: "救援策略 (石膏冲洗)：您无法简单地“中和”钠；您必须物理上将它从根区【驱逐】出去。\n\n方案：施用大量的石膏（硫酸钙）。沉重、双电荷的钙 (Ca++) 充当“恶霸”，强行将钠从粘土交换位点上撞下来。释放出来的钠随后与硫酸根结合形成硫酸钠——一种高溶解度的盐，然后【必须】使用大量清水灌溉，将其深层冲洗到根区之下。",
    info_Na_def: "在田间条件下几乎不存在，因为降雨和灌溉提供了微量钠。在纯水培设置中，特定 C4 植物严重缺钠可能会导致生长轻微减缓。",
    info_Na_syn: "1. 钾的备胎：在钾边缘性缺乏的土壤中，植物可以将钠泵入液泡中，仅仅为了维持物理水压（膨压），从而节省稀缺的钾用于关键的酶促反应。",
    info_Na_antag: "1. 阳离子窃贼 (K/Ca)：高钠在根部强烈竞争并抢占钾和钙。高钠经常引发严重的钙缺乏（裂果、叶尖焦枯），即使土壤本身的钙水平非常充足。",
    info_Co_func: "微生物引擎与乙烯控制器。钴对大多数高等植物来说是非必需元素，但对于生活在豆科植物根瘤中的固氮细菌（根瘤菌）来说是【绝对必需的】。它是钴胺素（维生素 B12）分子的中心原子，负责驱动大气氮向植物可用形态的酶促转化。新兴研究还表明，钴能抑制乙烯合成，可能会延长果实保质期，延缓成熟引起的落果。",
    info_Co_comm: "市场形态：\n• 硫酸钴 (CoSO4)：高水溶性，营养施用的标准。\n• 硝酸钴：用于特种滴灌计划。\n• 碳酸钴：低溶解度矿石形态，用于构建多年的土壤基底。\n⚠️ 现实：极度微量需求（ppb 级十亿分之一）。通常作为杂质微量存在于镍肥或铜肥中。",
    info_Co_app: "施用策略 (氮气放大器)：主要施用于豆科覆盖作物（如榴莲园中的黧豆 Mucuna bracteata）以最大化它们的固氮潜力，有效为主要作物提供“免费”的氮。\n\n方案：通常作为种子处理或微量的叶面喷施。在水果作物中，可在采收前施用以调节乙烯水平，防止热应激下的过早落果。",
    info_Co_def: "移动元素警报：在豆科植物中，由于根瘤失效，症状看起来与缺氮（老叶普遍黄化）完全相同。豆科植物将显示苍白、白色或绿色的根瘤，而不是健康粉红色的“豆血红蛋白”，这表明失去了活性的固氮作用。",
    info_Co_syn: "1. 固氮双雄 (N)：钴为固氮提供“引擎” (B12)，使其成为氮的终极沉默伙伴。\n2. 钼 (Mo)：两者都是固氮酶复合物必需的辅助因子。",
    info_Co_antag: "1. 锰竞争 (Mn)：高土壤锰 (Mn2+) 将积极竞争钴的吸收通道，即使在肥沃土壤中也导致固氮失败。\n2. 重金属拥堵：过量的锌或镍物理阻断钴的吸收。",
    info_AA_func: "营养界的“法拉利”与能量节省者。氨基酸是蛋白质的构建块。通常，植物会消耗 25% 的总代谢能量将无机氮（硝酸盐/铵态）转化为蛋白质。通过施用氨基酸，植物跳过了这个昂贵的过程，使它能够将节省的能量重新导向果实生产或压力防御。核心氨基酸包括：\n• 脯氨酸：保护细胞免受干旱和高温影响的“渗透盾牌”。\n• 甘氨酸：最小的氨基酸，作为天然螯合剂将重金属带入植物体内。\n• 谷氨酸：“代谢中枢”，触发整个氮气代谢途径。",
    info_AA_comm: "市场形态与 FAA 激增：\n• 植物源氨基酸 (大豆/玉米)：L-氨基酸含量高，干净，对所有阶段极其安全。最适合常规抗逆管理。\n• 动物源氨基酸：羟脯氨酸含量高。通常更便宜，用于大宗植物营养生长推进。\n• 鱼氨基酸 (FAA)：“重型起重机”。极力推荐，因为冷处理鱼发酵不仅保留了氨基酸，还包含了大量的天然多肽、海洋矿物质和生长激素（生长素/细胞分裂素）。\n💡 为什么选 FAA？FAA 提供了一种独特的“生长激增”和“根系爆发”，这是植物源氨基酸无法比拟的。它是采收后恢复“精疲力竭”的树木和刺激土壤微生物的黄金标准。",
    info_AA_app: "施用策略 (抗逆与恢复黑客)：\n• 恢复：在洪水、暴雨或严重高温后，立即施用 FAA 重启根系并重建能量储备。\n• 寒冷/阴天：当阳光不足、光合作用缓慢时，氨基酸提供“预消化”的食物以保持植物运转。\n• 农药缓冲液：将氨基酸与农药混合（除了铜/硫），可减少对叶片的“喷洒休克”。",
    info_AA_def: "非必需，但表现为“总体生长停滞”。缺乏有机氨基酸供应的果树在环境压力后难以恢复，叶片展开缓慢，坐果率明显低于使用了氨基酸营养计划的果树。",
    info_AA_syn: "1. 螯合伙伴 (Fe/Zn/Cu)：氨基酸包裹金属养分，中和它们的电荷，让它们“滑过”叶片角质层，毫不费力。\n2. 氮气增强剂：与所有形式的氮产生协同作用，极大加速蛋白质的合成。",
    info_AA_antag: "1. 杀菌剂警告：高浓度氨基酸会将一些接触性杀菌剂拉得太深进入植物组织，降低其表面保护效力。\n2. 铜/硫冲突：请参阅下文的抑制阻断。",
    info_AA_inhib: "1. 铜烧伤：【绝对不要】将氨基酸（尤其是 FAA）与铜基杀菌剂混合。氨基酸会将重金属铜直接带入植物细胞，导致严重的化学烧伤和落叶落果。",
    info_Pep_func: "生理“软件”与信号信使。多肽是由短链氨基酸（通常 <50）组成的，充当植物内部的生物软件。单独的氨基酸是“砖块”（食物/材料），而多肽为植物的代谢引擎提供“指令”。它们能触发系统性反应，如爆发式的根系萌发、花芽发育以及加厚细胞膜。最关键的是，多肽充当了沉重且不易移动养分（如钙）的高级生物护卫。",
    info_Pep_comm: "市场形态：\n• 鱼蛋白肽 (冷鲜提取)：黄金标准。富含海洋信号分子，能触发快速恢复和生长激增。\n• 大豆/植物多肽：高纯度肽链，极佳的开花期和坐果期叶面喷施选择。\n• 蛋白胨：标准农用级，主要用于提升土壤微生物活性，为营养生长提供稳定信号。\n💡 为什么选择多肽而不是氨基酸？单一氨基酸负责“喂养”植物；多肽负责对植物进行【重新编程】，使其能够更好地应对胁迫压力和主动吸收养分。",
    info_Pep_app: "施用策略 (“特洛伊木马”黑客技术)：\n• 防裂果 (钙-肽组合)：多肽能显著增加细胞膜的通透性。在坐果和膨大期，将多肽与叶面钙混合，能让植物将沉重的钙【直接拉入】果实的韧皮部——完美绕过了木质部缓慢的向上水流。\n• 根系诱导：在移栽或遭受严重虫害袭击后，通过土壤灌根，向植物发出瞬间重建根系的信号。\n• 抗旱信号：在干热季节来临前施用，向植物发出加固细胞壁以防止水分散失的信号。",
    info_Pep_def: "表现为“代谢停滞”。没有多肽支持的植物对肥料的反应较差，即便钙含量充足裂果率依然偏高，并且在经历环境冲击（高温、水涝、除草剂药害）后恢复十分迟缓。",
    info_Pep_syn: "1. 钙的终极快递员 (Ca)：多肽是自然界最高效的钙输送系统，能确保钙准确到达需要弹性的果皮位置。\n2. 激素协同：多肽作为前体物，能放大开花期植物天然生长素和细胞分裂素的功效。",
    info_Pep_antag: "1. 强氧化剂：避免与高浓度氯气或双氧水(H2O2)清洁剂混合，它们会物理性切断脆弱的多肽链。\n2. 金属冲突：见下方抑制阻断。",
    info_Pep_inhib: "1. 重金属烧伤：绝对不要将多肽（尤其是鱼蛋白肽）与铜制剂杀菌剂混合。多肽会瞬间将有毒的重金属铜直接拉进细胞质，导致细胞严重死亡。\n2. pH 变性：极高 (>10.0) 或极低 (<3.0) 的桶混 pH 会使肽链变性（断裂），从而使它们携带的信号指令完全失效。",
    // --- pH Chart Translations ---
    ph_chart_title: "pH 有效性图表",
    ph_chart_desc: "互动图表：展示不同 pH 水平下的养分吸收效率。",
    ph_current: "当前 pH",
    ph_optimal: "完美",
    ph_sufficient: "充足",
    ph_limited: "受限",
    ph_tip_optimal_title: "pH 管理：黄金区间",
    ph_tip_optimal_desc: "完美！这是“黄金适宜区”。绝大多数养分都处于化学有效状态。请维持有机质 (OM) 以缓冲和保持该 pH。",
    ph_tip_acidic_title: "酸性修正策略",
    ph_tip_acidic_desc: "在 pH {val} 时，{list} 被锁定。操作：施肥前 2-4 周施用白云石石灰 (GML)。在 pH 上升前避免使用尿素。",
    ph_tip_alkaline_title: "碱性修正策略",
    ph_tip_alkaline_desc: "在 pH {val} 时，{list} 发生沉淀。土壤施用无效。操作：微量元素改用叶面喷施。施用元素硫缓慢降低 pH。",
    ph_others: "等",
    ph_macros: "大量元素",
    ph_breakdown_title: "吸收率详细分析"
  },
  en: {
    app_title: "AgriPro Notebook",
    knowledge: "Knowledge",
    advisor: "Advisor",
    mix_rules: "Mixing",
    ph_availability: "pH Availability",
    tap_element: "Tap an element to view deep agronomic insights",
    antagonism: "Antagonism (Soil/Mix)",
    inhibition: "Inhibition/Blockage",
    synergy: "Synergy",
    lbl_soil_conditions: "Soil & Weather Conditions",
    lbl_adjust_soil: "Adjust to see impact on nutrient availability",
    lbl_ph: "Soil pH",
    lbl_texture: "Soil Texture / CEC",
    lbl_om: "Organic Matter (OM)",
    lbl_cation: "Dominant Cation",
    lbl_weather: "Weather / Stress (VPD)",
    lbl_ec: "Soil EC (Salinity)",
    lbl_crop_profile: "Crop Profile",
    lbl_crop_type: "Crop Type",
    lbl_variety: "Variety/Clone",
    lbl_tree_age: "Tree Age (Years)",
    lbl_crop_stage: "Growth Stage",
    lbl_leaf_analysis: "Leaf Analysis / Symptoms",
    lbl_recommendation: "Precision Recipe",
    lbl_rationale: "Agronomic Rationale",
    lbl_rate_timing: "Rate & Timing",
    lbl_compat_warn: "Safety Check",
    lbl_reset: "Reset Inputs",
    lbl_calculate: "Generate Recipe",
    opt_crop_durian: "Durian",
    opt_crop_general: "General / Other Crops",
    opt_var_mk: "Musang King (D197)",
    opt_var_bt: "Black Thorn (D200)",
    opt_var_d24: "D24 (Sultan)",
    opt_var_ioi: "IOI / Hajah Hasmah (D168)",
    opt_var_gp: "Golden Phoenix (D198)",
    opt_var_rp: "Red Prawn (D175)",
    opt_var_tekka: "Tekka (D160)",
    opt_var_mt: "Monthong (D159)",
    opt_var_tk: "Tupai King (D214)",
    opt_var_d101: "D101 (Mas)",
    opt_var_generic: "Generic / Kampung",
    opt_stage_seedling: "Seedling / Transplant",
    opt_stage_veg: "Vegetative (Flushing)",
    opt_stage_pre_flower: "Pre-Flowering & Induction",
    opt_stage_flower_bud: "Bud Emergence (Crab Eyes) ",
    opt_stage_matchstick: "Matchstick Elongation",
    opt_stage_bloom: "Full Bloom (Anthesis)",
    opt_stage_fruit_set: "Early Fruit Set (0–10 DAA)",
    opt_stage_fruit_drop_1: "1st Wave: Embryo Culling (10–25 DAA)",
    opt_stage_ping_pong: "2nd Wave: Flush Competition (35–50 DAA)",
    opt_stage_rapid_expansion: "Rapid Expansion (50–90 DAA)",
    opt_stage_maturation: "Maturation & Natural Split",
    opt_stage_post_harvest: "Post-harvest Recovery",
    opt_sym_none: "Healthy / Balanced",
    opt_sym_yellow_old: "Old Leaves Yellowing (Nitrogen/Magnesium/Potassium deficiency)",
    opt_sym_yellow_new: "New Leaves Yellowing (Iron/Manganese/Sulfur deficiency)",
    opt_sym_burn: "Leaf Tip Burn (Salinity/Potassium deficiency)",
    opt_sym_stunted: "Stunted Roots / Growth",
    opt_sym_fruit_crack: "Fruit Cracking / Deformity",
    opt_sym_wet_core: "Wet Core / Watery Flesh",
    opt_sand: "Sandy (Low Retention)",
    opt_loam: "Loam (Balanced)",
    opt_clay: "Clay (High Retention)",
    opt_low: "Low (<2%)",
    opt_med: "Medium (2-5%)",
    opt_high: "High (>5%)",
    opt_bal: "Balanced",
    opt_hi_ca: "Calcareous (High Ca)",
    opt_hi_mg: "Serpentine (High Mg)",
    opt_hi_k: "High Potassium",
    opt_hi_na: "Saline (High Na)",
    opt_dry: "Hot & Dry (VPD > 1.6 kPa)",
    opt_norm: "Optimal (0.8-1.2 kPa)",
    opt_wet: "Heavy Rain / Overcast (< 0.5 kPa)",
    opt_ec_low: "Low (< 1.0)",
    opt_ec_opt: "Optimal (1.0-2.0)",
    opt_ec_high: "High (> 2.0)",
    lbl_acid: "Acidic",
    lbl_neutral: "Neutral",
    lbl_alkaline: "Alkaline",
    lbl_visual: "Visual Check",
    lbl_h2o2: "H2O2 (Hydrogen Peroxide) Test",
    desc_visual_low: "Light color/white, sandy or compacted, no smell.",
    desc_visual_med: "Standard brown soil.",
    desc_visual_high: "Dark black, crumbly structure, earthy smell.",
    desc_h2o2_low: "No reaction.",
    desc_h2o2_med: "Slight fizzing.",
    desc_h2o2_high: "Violent fizzing/heat.",
    lbl_soil_impact: "Environmental Impact Analysis",
    msg_soil_ok: "Current soil conditions are generally favorable for this nutrient.",
    lbl_high_conc_inhib: "Tank Mix Inhibition / Incompatibility",
    lbl_inhibits: "Inhibits/Blocks",
    lbl_when: "When",
    lbl_none: "None",
    lbl_market_insight: "Commercial Insight",
    lbl_app_strategy: "Application Strategy",
    lbl_def_signal: "Deficiency Signals",
    lbl_common_sources: "Common Sources",
    lbl_metabolism: "Physiological Function",
    lbl_enzymes: "Key Enzymes",
    lbl_optimal_levels: "Diagnostic References",
    lbl_soil_test: "Soil Target",
    lbl_leaf_tissue: "Leaf Tissue Target",
    lbl_ionic_form: "Ionic Form",
    lbl_leach_risk: "Leaching Risk",
    lbl_soil_grip: "Soil Adsorption",
    lbl_compete: "Competition",
    lbl_stage_veg: "Vegetative",
    lbl_stage_fruit: "Fruiting",
    lbl_bio_synergy: "Bio-Stimulant Synergy (Optional)",
    lbl_recipe_center: "RECIPE",
    info_AA_zwitterion_title: "Agronomy Tech: Zwitterion Effect",
    info_AA_zwitterion_desc: "Why are Amino Acids called 'Double-Sided Tape'?\n• Smart Charge: They carry both positive (+) and negative (-) charges. This allows them to grab soil particles (reducing runoff) while wrapping around metal nutrients (natural chelation).\n• pH Chameleon: Unlike salts that precipitate, they adjust their charge based on soil pH, keeping nutrients active for root uptake.",
    lbl_immobile_insight: "Immobile Nutrient Strategy",
    msg_immobile_advice: "Traffic Control: This element does NOT move inside the plant. Old leaves cannot donate it to new shoots.\n\nStrategy:\n1. Direct Hit: Root delivery is often too slow for fast growth. You MUST spray directly on new leaves/fruit.\n2. Hitchhiker: Uptake depends entirely on transpiration (water flow). No water flow = No uptake. Ensure steady irrigation.",
    cat_Macro: "Macronutrient",
    cat_Secondary: "Secondary Nutrient",
    cat_Micro: "Micronutrient",
    cat_Beneficial: "Beneficial Element",
    cat_Biostimulant: "Biostimulant",
    mob_Mobile: "Mobile in Plant",
    mob_Immobile: "Immobile in Plant",
    elem_Nitrogen: "Nitrogen (N)",
    elem_Phosphorus: "Phosphorus (P)",
    elem_Potassium: "Potassium (K)",
    elem_Sulfur: "Sulfur (S)",
    elem_Calcium: "Calcium (Ca)",
    elem_Magnesium: "Magnesium (Mg)",
    elem_Iron: "Iron (Fe)",
    elem_Manganese: "Manganese (Mn)",
    elem_Boron: "Boron (B)",
    elem_Copper: "Copper (Cu)",
    elem_Zinc: "Zinc (Zn)",
    elem_Molybdenum: "Molybdenum (Mo)",
    elem_Silicon: "Silicon (Si)",
    elem_Chlorine: "Chlorine (Cl)",
    elem_Nickel: "Nickel (Ni)",
    elem_Sodium: "Sodium (Na)",
    elem_Cobalt: "Cobalt (Co)",
    elem_AminoAcids: "Amino Acids (AA)",
    elem_Peptides: "Peptides (Pep)",
    rec_Humic: "Humic Acid",
    src_urea: "Urea (46%)",
    src_amsul: "Ammonium Sulfate (21%)",
    src_calnit: "Calcium Nitrate",
    src_kno3: "Potassium Nitrate",
    src_dap: "DAP (18-46-0)",
    src_map: "MAP (11-52-0)",
    src_rock_phos: "Rock Phosphate (ERP)",
    src_polyphos: "Polyphosphate",
    src_mop: "Muriate of Potash (MOP/KCl)",
    src_sop: "Sulfate of Potash (SOP)",
    src_kmg_sulf: "Sul-Po-Mag",
    src_dolomite: "Dolomite (GML)",
    src_gypsum: "Gypsum (CaSO4)",
    src_lime: "Lime (CaCO3)",
    src_kieserite: "Kieserite (MgSO4)",
    src_mg_oxide: "Magnesium Oxide",
    src_mg_nitrate: "Magnesium Nitrate",
    src_elem_sulfur: "Elemental Sulfur",
    src_fe_sulf: "Ferrous Sulfate",
    src_fe_edta: "Fe-EDTA",
    src_fe_eddha: "Fe-EDDHA (Red Iron)",
    src_fe_amsul: "Ferrous Ammonium Sulfate",
    src_zn_sulf: "Zinc Sulfate",
    src_zn_edta: "Zn-EDTA",
    src_zn_oxide: "Zinc Oxide",
    src_mn_sulf: "Manganese Sulfate",
    src_mn_edta: "Mn-EDTA",
    src_mn_oxide: "Manganese Oxide",
    src_cu_sulf: "Copper Sulfate",
    src_cu_hydrox: "Copper Hydroxide",
    src_cu_edta: "Cu-EDTA",
    src_borax: "Borax",
    src_boric: "Boric Acid",
    src_solubor: "Solubor",
    src_ca_borate: "Calcium Borate",
    src_na_moly: "Sodium Molybdate",
    src_amm_moly: "Ammonium Molybdate",
    src_k_silicate: "Potassium Silicate",
    src_ca_silicate: "Calcium Silicate",
    src_rice_ash: "Rice Husk Ash",
    src_ca_chlor: "Calcium Chloride",
    src_amm_chlor: "Ammonium Chloride",
    src_ni_sulf: "Nickel Sulfate",
    src_ni_nitr: "Nickel Nitrate",
    src_sea_salt: "Sea Salt",
    src_na_nitr: "Sodium Nitrate",
    src_co_sulf: "Cobalt Sulfate",
    src_co_carb: "Cobalt Carbonate",
    src_plant_aa: "Plant Amino (Soy/Corn)",
    src_animal_aa: "Animal Amino",
    src_fish_aa: "Fish Amino (FAA)",
    src_fish_pep: "Fish Peptides",
    src_soy_pep: "Soy Peptides",
    val_ratio_7_1: "Ratio > 7:1",
    val_high_ph_ca_b: "pH > 7.0 (Insoluble Salts)",
    val_ratio_1_5: "Ratio < 1.5",
    val_ratio_2_5: "Ratio > 2.5",
    val_tank_mix: "Incompatible Mix",
    mix_calnit: "Calc. Nitrate",
    mix_phos: "Phosphates",
    mix_sulf: "Sulfates",
    mix_mag: "Magnesium",
    mix_iron: "Iron",
    mix_urea: "Urea",
    mix_amm_nit: "Ammonium Nit.",
    mix_ca_mg: "Ca + Mg",
    mix_boron: "Boron",
    mix_zinc: "Zinc Fert",
    mix_ammonium: "Ammonium N",
    mix_humic: "Humic Acid",
    mix_amino: "Amino Acids",
    mix_pep: "Peptides",
    mix_copper: "Copper Fungicide",
    mix_silicate: "Silicates",
    mix_acids: "Acids",
    mix_seaweed: "Seaweed (Alkaline)",
    mix_pesticides: "Sensitive Pesticides",
    mix_reason_ppt_white: "Precipitate (White Solid). ",
    mix_reason_ppt_gyp: "Precipitate (Gypsum). ",
    mix_reason_ppt_high: "Precipitates at high conc/pH. ",
    mix_reason_lockup: "Lockout (unless chelated). ",
    mix_reason_wet: "Mix becomes wet/paste. ",
    mix_reason_ratio_complex: "Physical: Concentrates gel instantly. Chemical: Keep Ca:Mg 3:1 to 5:1. ⚠️ Warning: Boron must be < 0.2% (Ca:B ≈ 100:1). Excess burns leaves.",
    mix_reason_humate_sludge: "Reaction: Forms insoluble Calcium Humate sludge, clogging nozzles. Use Fulvic Acid instead.",
    mix_reason_copper_burn: "Phytotoxicity: Aminos carry Copper into tissue too fast, causing severe burn.",
    mix_reason_pep_copper: "Phytotoxicity: Peptides increase cell permeability, leading to Copper toxicity burn.",
    mix_reason_silica_gel: "Disaster: Silicates polymerize into glass/gel upon contact with acid. Ruins equipment.",
    mix_reason_silica_ca: "Precipitation: Forms insoluble Calcium Silicate.",
    mix_reason_ph_hydrolysis: "pH Conflict: Alkaline seaweed (pH >9) causes pesticide hydrolysis (breakdown). Add buffer.",
    mix_reason_zn_phos: "Precipitation: Zinc + Phosphate = Zinc Phosphate (insoluble stone). Causes lockup.",
    mix_reason_cu_acid: "Burn Risk: Acidic environment releases too much Copper ion instantly.",
    mix_reason_nh4_alkali: "Volatilization: Ammonium turns to Ammonia gas in alkaline conditions (Seaweed/Lime).",
    status_incompatible: "Incompatible",
    status_caution: "Caution",
    mix_protocol_title: "Tank Mixing Protocol",
    mix_protocol_gold: "Gold Rule (WALES): No Direct Mixing",
    mix_protocol_gold_desc: "Directly mixing two concentrates (e.g., Calcium + Boron) causes chemical 'shock'. Due to lack of water, ions supersaturate instantly, turning liquid into thick gel or paste ('Pudding Effect'), blocking nozzles permanently.",
    mix_protocol_step1: "1. Water First (70%)",
    mix_protocol_step2: "2. Pre-dilute",
    mix_protocol_step3: "3. Add sequentially",
    mix_protocol_step1_desc: "Water is the best buffer.",
    mix_protocol_step2_desc: "Dissolve each fertilizer in a separate bucket first.",
    mix_protocol_step3_desc: "Add Slurry A -> Agitate -> Add Slurry B.",
    adj_title: "Adjuvant Strategy",
    adj_subtitle: "Choosing the right 'Courier'",
    adj_nis_title: "Non-Ionic Surfactant (NIS)",
    adj_nis_desc: "The Safe All-Rounder. Lowers surface tension to wet leaves but mostly stays on surface. Best for general nutrition, low burn risk.",
    adj_si_title: "Organosilicone (Super Spreader)",
    adj_si_desc: "Penetration Expert. Extremely low surface tension (20 dynes/cm). Liquid enters stomata directly. Great for systemic uptake but risky in heat.",
    adj_orange_title: "Orange Oil / D-Limonene",
    adj_orange_desc: "Organic Multitasker. Dissolves waxy cuticle to act as a penetrant. Bonus: Physically kills soft-bodied pests (mites/thrips) by dehydration.",
    adj_orange_warn: "Warning: 'Hot' Oil. Strips wax -> Sun sensitivity. Rules: 1. Do not use if >30°C. 2. Do not mix with other penetrants.",
    adj_bee_title: "Pollinator Safety",
    adj_bee_desc: "Contact Toxicity: D-Limonene is toxic to bees on contact (dissolves exoskeleton). Strong scent interferes with foraging.\n\nCompliance:\n• Do NOT spray during flowering.\n• Only spray in late evening when bees are hive-bound.",
    adj_rule_burn: "Burn Risk: Organosilicone enters too fast. Never mix with Copper or Sulfur above 30°C.",
    adj_rule_runoff: "Runoff Risk: Super spreading causes liquid to coalesce and run off. Reduce water volume.",
    adj_rule_hydrolysis: "pH Sensitive: Degrades rapidly if pH <4 or >9. Use immediately.",
    adj_diy_title: "DIY Dish Soap?",
    adj_diy_desc: "<b>NO:</b> Household detergents are usually <b>Anionic</b> and contain sodium. They strip the leaf cuticle aggressively, leading to sunscald and pathogen entry. Use agricultural adjuvants.",
    chel_title: "Chelation & Stability",
    chel_subtitle: "Unlock nutrients, prevent lockup",
    chel_edta: "EDTA (Standard)",
    chel_edta_desc: "Economy standard. Good for foliar. Warning: Unstable at pH > 6.5. Releases nutrients (especially Fe) in alkaline soil, leading to precipitation.",
    chel_eddha: "EDDHA (Red Iron)",
    chel_eddha_desc: "The Heavyweight. Extremely stable pH 3.0-10.0. The ONLY choice for soil application of Iron in alkaline soils. Expensive but works.",
    chel_deta: "DETA",
    chel_deta_desc: "Expert Grade. Used for Cu and Zn. Stronger grip than EDTA, but still fails in high alkalinity. ⚠️ Truth: Cannot chelate Boron.",
    chel_dtpa: "DTPA (Yellow Iron)",
    chel_dtpa_desc: "Hydroponic Standard. Stable up to pH 7.5. Fills the gap between EDTA (weak) and EDDHA (pricey).",
    chel_amino: "Amino Acid (Organic)",
    chel_amino_desc: "Ferrari Speed. Penetrates leaf cuticle fastest. As 'pre-digested' protein, plants spend zero energy absorbing it. Best for stress recovery.",
    chel_fulvic: "Fulvic Acid (Carrier)",
    chel_fulvic_desc: "The Gold Porter. Small organic acid molecule. Carries Ca/Mg/Trace elements through cell walls. Dissolves at all pH levels.",
    chel_ligno: "Lignosulfonate",
    chel_ligno_desc: "Economy Organic. Paper byproduct. Weak complexing (not true chelate), but excellent natural sticker/spreader properties. Foliar only.",
    chel_polyol: "Polyol (Sugar Alcohol)",
    chel_polyol_desc: "Boron's Taxi. Mannitol/Sorbitol complex. The ONLY technology that makes Boron mobile in the phloem (transport from leaf to fruit).",
    chel_citric: "Citric Acid",
    chel_citric_desc: "Adjuster. Weak chelation, but excellent for temporarily lowering tank pH to keep mixes stable.",
    chel_wood_vinegar: "Wood Vinegar",
    chel_wood_vinegar_desc: "Synergist. Weak chelation via acetic acid. Lowers pH, repels pests, and improves leaf penetration.",
    chel_lbl_synthetic: "Synthetic Chelates",
    chel_lbl_organic: "Organic Carriers",
    chel_badge_ph_low: "pH < 6.5",
    chel_badge_ph_wide: "pH 3-10",
    chel_badge_ph_med: "pH < 7.5",
    chel_badge_fast: "Fast Entry",
    chel_badge_univ: "Universal",
    unit_title: "Understanding Units",
    unit_desc: "Why use Ratio vs Percent vs ppm",
    unit_col_unit: "Unit",
    unit_col_target: "Targets",
    unit_col_reason: "Logic",
    unit_ratio_targets: "Fe, Mn, Ca, Mg",
    unit_ratio_reason: "Balance dictates uptake (Competition). Relative ratio is more critical than absolute amount.",
    unit_percent_targets: "N, K, Mg (Macros)",
    unit_percent_reason: "High quantity (1-5% of tissue). Toxicity/Inhibition is measured in percent.",
    unit_ppm_targets: "Zn, Cu, B, Mo (Micros)",
    unit_ppm_reason: "Trace amounts. A tiny absolute increase (mg/kg) can cause toxicity.",
    unit_row_ratio: "Ratio",
    unit_row_percent: "Percent",
    unit_row_ppm: "ppm",
    // FULLY EXPANDED COMMERCIAL FORMS & INSIGHTS
    info_N_func: "The Master Builder of Plant Life. Nitrogen is the fundamental building block of amino acids, proteins, and the chlorophyll molecule (the engine of photosynthesis). It directly controls DNA/RNA synthesis, drives cellular division, and regulates Leaf Area Index (LAI). Without sufficient N, the plant cannot construct the enzymatic machinery needed for any other metabolic processes. It is the primary driver of vegetative biomass accumulation.",
    info_N_comm: "Market Forms:\n• Urea (46% N): Cheapest, highest concentration. Amide-N must convert to Ammonium, then Nitrate via soil urease and nitrification bacteria. High volatilization loss (as ammonia gas) if left on the surface without moisture. Temporarily raises pH, then strongly acidifies.\n• Calcium Nitrate (15.5% N, 19% Ca): The Premium Choice. 100% Nitrate-N. Fast-acting, non-acidifying, and directly absorbed by roots without energy penalty. Synergistically pulls Calcium into the plant. Ideal for fruit expansion and rescue.\n• Ammonium Sulfate (21% N, 24% S): Contains Ammonium-N. Highly acidifying. Excellent for high-pH soils or providing a slow, steady green-up. ⚠️ Warning: Excess Ammonium strongly inhibits Calcium, Potassium, and Magnesium root uptake.\n• Potassium Nitrate (13% N, 46% K2O): Fast rescue. The Nitrate-N acts as a carrier, synergistically pulling Potassium into the plant. Unbeatable for late-stage fruit sizing and sweetening.\n• Ammonium Nitrate (34% N): Balanced half-ammonium, half-nitrate. Good instant and sustained feed, but highly regulated/restricted in many regions.",
    info_N_app: "Strategy: 'Pulse Feeding' & Stage Management. Apply N heavily during the vegetative flush. Once flowering initiates, immediately restrict N to prevent 'vegetative bypass' (where the plant drops flowers/fruit to grow new leaves). \n\nPulse feed: Apply main N-fertilizer, then wait 3-4 days before applying Calcium or Micros to avoid root congestion. In fruiting, switch from Amide/Ammonium sources to Nitrate sources to prevent blocking Potassium and Calcium.",
    info_N_def: "Mobile Element Alert: Old leaves turn pale green to solid yellow evenly across the entire leaf (including veins). The plant sacrifices older leaves to mobilize N to new growth. Severe cases show stunted, spindly growth, early leaf drop, and a thin, sparse canopy.",
    info_N_bio: "Organic Synergy:\n1. Fish Amino Acids provide pre-built peptide blocks; plants absorb these directly, saving the immense ATP energy normally required to convert nitrate into protein.\n2. Humic & Fulvic Acids act as a sponge (high CEC), holding onto mobile Nitrate/Ammonium ions in the root zone and dramatically reducing leaching losses during heavy rain.",
    info_N_antag: "1. The Cation War (Ammonium vs K/Ca/Mg): Ammonium (NH4+) is a highly reactive positive ion that aggressively outcompetes Potassium (K+), Calcium (Ca++), and Magnesium (Mg++) for root entry.\nSolution: Use Nitrate (NO3-) during fruit filling to avoid blocking K.\n\n2. The Dilution Trap (N vs P/Micros): Excess N forces a rapid explosion of vegetative foliage. The root system cannot mine Phosphorus or slow-moving Trace Elements fast enough to keep up, causing severe 'dilution' deficiencies in the new leaves.",
    info_N_syn: "1. Chlorophyll Engine (Mg): N builds the porphyrin ring structure, while Magnesium (Mg) sits dead center. Neither works without the other.\n2. Protein Factory (S): N borrows N to make the chain, but Sulfur (S) creates the 'disulfide bridges' that fold the protein into its functional 3D shape.\n3. Nitrate Carrier (K, Ca): Potassium and Calcium act as physiological escorts, helping carry Nitrate-N up the xylem.",
    info_N_inhib: "1. Copper (Cu) Lockout: High Nitrogen applications bind with Copper in the soil and tissue, preventing lignin formation (causing weak, soft branches).\n2. Boron (B) Inhibition: High N blocks Boron uptake, leading to fruit cracking and flower abortion.\n3. pH Crash (Mo): Heavy use of Ammonium/Urea lowers soil pH, making Molybdenum chemically unavailable for Nitrogen reduction.",
    info_P_func: "The Energy Currency & Reproductive Master Switch. Phosphorus is the backbone of ATP (cellular energy), DNA, and cell membranes. While it drives root elongation in young plants, its most critical role in mature trees is signaling the switch from vegetative growth (flushing) to generative reproduction (flowering). A massive spike in P tells the plant to channel its accumulated energy into producing floral buds instead of new leaves.",
    info_P_comm: "Market Forms:\n• MKP (Mono-Potassium Phosphate, 0-52-34): The undisputed king of flower induction. Why do farmers heavily apply this pre-flowering? 1) Zero Nitrogen ensures the tree stops flushing new leaves. 2) Massive P (52%) supplies the immense ATP energy required to push out floral buds. 3) High K (34%) matures branches, accumulates starch, and creates a slight osmotic stress that tricks the tree into survival/reproductive mode.\n• MAP (11-52-0): Contains N. Good for early root development but avoid during strict flower induction if N needs to be zero. Creates an acidic micro-zone (pH ~4.0).\n• DAP (18-46-0): Creates an alkaline micro-zone (pH ~8.0). High N and P, used strictly in early vegetative stages.\n• Polyphosphates: Liquid form that resists soil lock-up much better than granular orthophosphates.",
    info_P_app: "Pre-Flowering Strategy (The C:N Shift): To force flowers, the tree needs high Carbohydrates (C) and low Nitrogen (N). 4-6 weeks before expected blooming, halt all soil N. Apply foliar MKP (0-52-34) every 7-10 days to harden branches and force bud break.\n\n⚠️ The P-Zn Protocol (Order of Operations): If the tree lacks Zinc, do NOT apply heavy P until Zinc is corrected. \nStep 1: Apply foliar Zn-EDTA or Zn-Amino to bypass the soil entirely.\nStep 2: Wait 5-7 days for the plant to absorb and translocate the Zinc to build growth enzymes.\nStep 3: Now it is safe to apply heavy Phosphorus to the soil or via fertigation. Never tank-mix P and Zn.",
    info_P_def: "Old leaves turn dark green, purple, or bronze. Shallow roots, delayed flowering.",
    info_P_bio: "Humic Synergy: Humic acid coats P, preventing lockup by Iron/Calcium. Extends availability window.",
    info_P_antag: "1. One-Way Valve (P vs N): High P does not stop N, but High N dilutes P.\n\n2. The 3-Level P-Zn Lockout: High P aggressively crashes Zinc on three fronts:\n• Chemical: They bind in soil forming insoluble Zinc Phosphate stones.\n• Biological: Massive P tells the tree to suppress mycorrhizal fungi (which are needed to hunt for Zn).\n• Physiological: High internal P traps Zn in the roots, preventing it from traveling up the xylem to new leaves.",
    info_P_syn: "1. Energy Carrier (Mg): Mg transports ATP. No Mg = No energy transfer.\n2. Root Hunter (N): N drives root length to find immobile P.",
    info_P_inhib: "1. Phosphate Lockup (Zn/Fe/Cu): Excess P creates zinc phosphate stones. #1 cause of Zinc deficiency.\n2. Root Block: Physical blockage of Copper sites.",
    info_K_func: "The Quality Commander & Osmotic Regulator. Potassium activates over 60 critical enzymes. It acts as the plant's hydraulic pump, regulating stomatal opening/closing (drought resistance) and maintaining cell turgor. Crucially, K is the transport vehicle that pumps photosynthates (sugars) from the leaves directly into the expanding fruit, dictating final size, weight, Brix (sweetness), and shelf-life.",
    info_K_comm: "Market Forms:\n• MOP (Potassium Chloride / 0-0-60): The cheapest and most common. Warning: High chloride index. Toxic to sensitive crops (Durian, Avocado, Citrus) leading to leaf edge burn and ruined soil structure. Strictly avoid during fruiting.\n• SOP (Potassium Sulfate / 0-0-50): The Premium Quality Standard. Very low salt index. Delivers K plus Sulfur (18%), which is essential for flavor, aroma, and essential oils. The 'Black Gold' secret for Durian bitterness.\n• Potassium Nitrate (KNO3 / 13-0-46): The Fastest Transporter. The Nitrate acts as a molecular escort, instantly pulling K into the plant. Unmatched for rapid fruit sizing and rescuing severe deficiencies.\n• Potassium Silicate: A highly alkaline liquid foliar. Delivers K while physically hardening cell walls (phytoliths) against pest/fungal attacks.",
    info_K_app: "Application Strategy: K requirements skyrocket during the 'Fruit Sizing' phase. The tree will aggressively strip K from older leaves to feed the fruit if soil K is low. \n\nProtocol: Switch to heavy K feeding (N:K ratio of 1:3 or 1:4) immediately after fruit set. For premium crops, apply foliar SOP or KNO3 3-4 weeks before harvest to push final sugar accumulation and complex flavor profiles.",
    info_K_def: "Mobile Element Alert: Classic 'Marginal Scorch'. Older leaves turn yellow and then physically burn (brown/crispy) along the outer edges. Fruit will be undersized, lack sweetness, ripen unevenly, and have a poor, watery texture.",
    info_K_bio: "Seaweed Synergy: Cold-pressed Seaweed (Kelp) is naturally rich in Potassium and bio-active cytokinins. Mixing Seaweed with K during drought or heat waves signals the plant to keep stomata functioning, preventing yield collapse.",
    info_K_antag: "1. The Cation Bully (K vs Mg/Ca): Potassium is a small, highly mobile, and aggressive positive ion. Plants naturally 'Luxury Consume' K. If applied too heavily, it physically outruns heavy Ca++ and Mg++ at the root surface, inducing severe Magnesium (yellowing) and Calcium (fruit cracking/wet core) lockouts.\n2. The Ammonium Block: High levels of Ammonium (NH4+) in the soil will aggressively compete with and block Potassium uptake.",
    info_K_syn: "1. Sugar Escort (Boron): K provides the pressure to move sap, but Boron acts as the 'gatekeeper' allowing sugars to cross cell membranes into the fruit. They must work together.\n2. Transport Aide (Iron & Manganese): K regulates the flow of water that carries slow-moving Iron and Manganese up the canopy.",
    info_K_inhib: "1. Cation Displacement (Mg/Ca): Displaces Mg and Ca at root exchange sites.\n2. Boron Dilution: Extremely fast cell expansion driven by high K can outpace the plant's ability to supply Boron, causing hollow heart or cracking.",
    info_Ca_func: "The Structural Cement & Anti-Cracking Agent. Calcium forms 'Calcium Pectate' in the middle lamella—literally the glue that binds plant cells together. As fruits expand rapidly (driven by water and Potassium), the cell walls must stretch. If Calcium is deficient, the cellular 'glue' fails, and the fruit skin physically tears apart, resulting in severe Fruit Cracking. It also fortifies cell walls against fungal invasion and acts as a 'Second Messenger', alerting the plant to heat and drought stress.",
    info_Ca_comm: "Market Forms:\n• Sugar Alcohol Calcium (Polyol): The ultimate choice for preventing cracking. Calcium is naturally immobile, but Polyol complexing tricks the plant into moving Ca through the phloem directly into the fruit.\n• Ca-B-Mg Liquid Combos: The industry standard reproductive foliar. Boron is mandatory to make Calcium work (cross-linking the cell walls), while Magnesium prevents the high Ca from causing a localized Mg lockout in the expanding fruit.\n• Calcium Nitrate: Highly soluble fertigation standard. Provides fast Nitrate-N and Ca to roots.\n• Amino-Ca: Gentle foliar option with fast penetration, reducing plant energy expenditure.\n• Dolomite / Ag Lime (The 'Double Duty' Rock): Highly insoluble crushed rock. Serves two massive foundational purposes: 1) pH Correction (neutralizing acid from fertilizers like Urea/Ammonium) and 2) Base Saturation (slow-drip Ca & Mg). ⚠️ Warning: NEVER use Dolomite for immediate fruit nutrition to stop cracking or blossom end rot.",
    info_Ca_app: "Cracking Prevention Protocol: Calcium ONLY moves upward with water (transpiration). Fruits barely transpire, so root-absorbed Calcium mostly bypasses them. You MUST apply mobile foliar Calcium (e.g., Sugar Alcohol Ca) directly onto fruit every 10-14 days during expansion.\n\nDolomite Timing Protocol: Because it is a slow-release rock, timing is critical:\n1. Post-Harvest/Recovery: Apply immediately after harvest to reset exhausted, acidic soil and rebuild Ca/Mg banks.\n2. 2-3 Months Before Flowering: Apply well before blooming so the soil pH is perfectly optimized to absorb expensive P and K fertilizers during the fruiting stage.",
    info_Ca_def: "Severe Fruit Cracking (skin splitting during expansion). 'Wet Core' in durian (watery, mushy flesh). Blossom end rot. Because Ca cannot move from old leaves, new leaves emerge hooked, distorted, or severely curled. Root tips turn brown, blunt, and die.",
    info_Ca_bio: "Carrier Synergy: Fulvic Acid and specialized Peptides bind with Calcium ions, neutralizing their strong positive charge. This allows the heavy Ca molecules to easily slip through the waxy leaf cuticle and into the plant tissue without getting stuck on the leaf surface.",
    info_Ca_syn: "1. The Bricks & Mortar (B): This is a mandatory synergy. Calcium builds the cell wall 'bricks', but Boron is the 'mortar'. If you apply Calcium without Boron, the plant cannot incorporate the Ca into the cell wall, making the spray completely useless. This is why nearly all commercial foliars are Ca+B.\n2. The Expansion Trio (B + Mg): During rapid fruit expansion, Ca+B build the physical cell structure, while Magnesium (Mg) provides the ATP energy to pump sugars into those new cells.\n3. Armor (Si): Silicon reinforces Ca walls on the outer cuticle.",
    info_Ca_antag: "1. Cation Crowd (K/Mg): High Ca (Lime) fills exchange sites, blocking K and Mg.\n2. pH Lock: High Ca raises pH, precipitating trace elements.",
    info_Ca_inhib: "1. pH Block (Fe/Mn/Zn/B): High pH > 7.0 locks out micros.",
    info_Mg_func: "The Chlorophyll Core & Texture Master. Magnesium is the central atom of the chlorophyll molecule—without it, photosynthesis physically stops. Beyond greening, Mg is the master pump that loads sucrose into the phloem to be transported to the fruit. In premium durian cultivation, Mg is the absolute key to developing the signature sticky, rich, and creamy custard-like texture of the flesh.",
    info_Mg_comm: "Market Forms:\n• Kieserite / Magnesium Sulfate (Epsom): Highly soluble, fast-acting. Perfect for foliar sprays to bypass root lockup, and provides essential Sulfur for complex flavor/aroma development.\n• Magnesium Nitrate: Premium fertigation choice. The nitrate acts as a carrier, synergistically pulling Mg into the plant. Excellent for rapid vegetative flushing.\n• Dolomite: Slow-release base saturation. Neutralizes soil acid but provides zero immediate nutrition for developing fruit.\n• Magnesium Oxide (MgO): Mostly insoluble. Used purely as a slow-release soil amendment.",
    info_Mg_app: "Application Strategy (The 'Hidden Hunger' Bypass): During fruit sizing, farmers apply massive amounts of Potassium (K) to swell the fruit. Because K is an aggressive 'bully' ion, it completely locks out Mg at the roots. Even if your soil test shows high Mg, the tree is starving.\n\nPremium Durian Protocol: To maintain the highly desired 'Green Husk' at harvest (preventing premature yellowing) and ensure creamy flesh, you MUST bypass the roots. Apply foliar Magnesium Sulfate every 10-14 days during the final fruit expansion phase. Target a soil K:Mg ratio of roughly 2:1 to 3:1.",
    info_Mg_def: "Mobile Element Alert: Classic 'Interveinal Chlorosis'. Older leaves turn intensely yellow between the veins, leaving a distinct 'green arrowhead' or triangle at the base of the leaf. In premium fruits like Durian, Mg deficiency leads to pale/yellowish husks before full maturity, and flesh that is watery, bland, and lacking the premium sticky texture.",
    info_Mg_syn: "1. Phosphorus Pump (P): Mg carries P/ATP.\n2. Green Factory (N): Synergy for chlorophyll.",
    info_Mg_antag: "1. K/Mg Feud: K inhibits Mg strongly.\n2. Ca Inhibition: High Ca tightens soil, restricting Mg.",
    info_Mg_inhib: "1. Cation Comp (Ca/K): High Mg inhibits Ca and K uptake.",
    info_S_func: "The Flavor & Aroma Architect. Sulfur is a core component of the amino acids Cysteine and Methionine, which are the building blocks of volatile organic compounds (VOCs). In premium durian, these sulfur-based compounds dictate the intense pungency, complex aroma, and signature 'gas-like' alcoholic notes of varieties like Musang King and Black Thorn. It also forms disulfide bridges that give plant proteins their structural integrity.",
    info_S_comm: "Market Forms:\n• SOP (Potassium Sulfate / 0-0-50 + 18% S): The holy grail for premium fruit. Delivers both K for fruit sizing and S for flavor, without any Nitrogen to ruin the flesh texture.\n• Kieserite / Epsom Salt (Magnesium Sulfate): Highly soluble, delivers Mg for creamy texture and S for bitterness simultaneously.\n• Elemental Sulfur (90% S): Highly insoluble. Requires soil bacteria (Thiobacillus) to slowly convert it to sulfate over months. Strongly acidifies soil.\n• Ammonium Sulfate (21% N, 24% S): Excellent for early vegetative green-up but must be avoided during the final fruit ripening stage.\n• Gypsum (CaSO4): A fantastic soil conditioner that provides sulfate-S and Calcium without altering soil pH.",
    info_S_app: "The Ultimate Premium Durian Protocol (The K-Mg-S Triad):\nTo achieve the highly coveted 'Black Gold' profile (intensely bitter, sticky, creamy flesh with pungent aroma), farmers must master the K:Mg:S combination during the final 30 days of fruit development.\n\n• The Ratio: Target a K : Mg : S ratio of roughly 4 : 1 : 2 in late-stage applications.\n• The Mechanics: Potassium (K) drives sugar and fruit size. Magnesium (Mg) builds the thick, creamy, custard texture. Sulfur (S) ferments those sugars into the volatile sulfur compounds that cause the sought-after 'bitterness' and aroma.\n• Strategy: 30 days before fruit drop, halt all Nitrogen. Switch exclusively to SOP (Sulfate of Potash) and foliar Magnesium Sulfate.",
    info_S_def: "Immobile Element Alert: Unlike Nitrogen, Sulfur does not move easily from old to new leaves. Deficiency shows as pale green/yellowing on the NEWEST leaves first. In fruit, low sulfur results in bland, sweet-only flesh completely lacking the premium complex aroma and signature bitterness.",
    info_S_bio: "Amino Acid Synergy: Applying Sulfur alongside Methionine-rich Amino Acids acts as a massive amplifier for ethylene production, naturally accelerating uniform ripening and intensifying the final flavor profile.",
    info_S_syn: "1. The Nitrogen Twin: S is required to metabolize N into protein. Without S, Nitrogen accumulates as toxic nitrates in the leaf, attracting pests.\n2. The Flavor Triad (K + Mg + S): Synergizes to convert simple carbohydrates into complex essential oils and volatile flavors.",
    info_S_antag: "1. Molybdate Clash: High concentrations of Sulfate (SO4²⁻) strongly compete with Molybdate (MoO4²⁻) for root uptake.\n2. Nitrate Competition: High Sulfates can temporarily suppress Nitrate uptake.",
    info_S_inhib: "1. Molybdenum Lockout: Directly inhibits Mo uptake at the root membrane.\n2. Acidification Trap: Heavy use of Elemental Sulfur or Ammonium Sulfate will crash soil pH, locking out macronutrients.",
    info_Si_func: "The Ultimate Stress Armor. Though historically 'forgotten' because it's not strictly essential for basic life, Silicon is critical for field survival. Roots absorb it and transport it to the leaves, where it polymerizes into solid 'Phytoliths' (microscopic glass/opal structures) just beneath the cuticle. This double-layer armor physically blocks fungal hyphae from penetrating and breaks the mandibles of piercing-sucking insects (mites, thrips, aphids). It also forces leaves to stand perfectly erect (maximizing light capture) and tightly regulates stomata to prevent water loss during extreme heat.",
    info_Si_comm: "Market Forms:\n• Orthosilicic / Monosilicic Acid (H4SiO4): The Premium Standard. This is the ONLY form plants can directly absorb. Highly stabilized, fast-acting via foliar, and doesn't drastically spike tank pH.\n• Potassium Silicate (K2SiO3): The traditional workhorse. Highly alkaline (pH 10-11). Great for adding K and Si, but notorious for tank-mix disasters (turns into a solid glass-like gel when mixed with acids or calcium).\n• Calcium Silicate (Slag/Wollastonite): Slow-release granular soil amendment. Excellent for neutralizing highly acidic soils and locking up toxic Aluminum.\n• Rice Husk Ash / Bamboo Biochar: Cheap, organic sources of amorphous silica. Needs microbial action to become plant-available.",
    info_Si_app: "Application Strategy (The Tank-Mix Nightmare): Silicon is chemically aggressive. \n\nGolden Rule for K-Silicate: NEVER mix Potassium Silicate with Calcium, Magnesium, or acidic fertilizers/pesticides without extreme dilution, or your tank will instantly turn to jelly, ruining spray nozzles permanently. \nProtocol: Always add Silicate LAST to a highly diluted tank, or better yet, spray it completely alone. Apply heavily leading into the dry/hot season, or right before expected spikes in pest/fungal pressure.",
    info_Si_def: "Hidden Vulnerability: Plants won't die without it, but they become 'soft targets'. Symptoms include weak, floppy stems (lodging), drooping leaves that struggle to capture sunlight, and a sudden, severe susceptibility to powdery mildew, blight, and mite infestations. Plants will wilt much faster during midday heat.",
    info_Si_bio: "Biostimulant Synergy: Combining stabilized Orthosilicic Acid with Kelp (Seaweed) extracts creates the ultimate 'Drought & Heat Shield', keeping stomata active and preventing sunburn.",
    info_Si_syn: "1. The Double Wall (Ca): Silicon and Calcium work together. Ca is the cement between cells, while Si is the glass armor on the outside.\n2. Light Interception (N): Si keeps Nitrogen-heavy, large leaves rigidly upright, preventing self-shading and maximizing photosynthesis.",
    info_Si_antag: "1. Phosphorus Clash: In the soil, silicate anions and phosphate anions compete for the same binding sites. High Si application can actually free up locked soil P, but extreme Si might compete for P uptake.",
    info_Si_inhib: "1. The Jelly Effect (Tank Mix): Liquid silicates have a massive inhibition/incompatibility with acidic concentrates and metal cations (Ca, Mg, Fe), instantly forming insoluble gel precipitates.",
    info_Fe_func: "The Chlorophyll Architect & Respiration Catalyst. While Magnesium is the center of the chlorophyll molecule, Iron is the mandatory tool required to build it. Without Iron, the plant cannot synthesize chlorophyll, leading to complete energy failure. It is the core driver of the Electron Transport Chain (cellular respiration) and is absolutely essential for nitrogen assimilation (converting toxic nitrates into usable amino acids).",
    info_Fe_comm: "Market Forms:\n• Fe-EDDHA (Red Iron): The heavy-duty soil savior. Extremely stable up to pH 10.0. The ONLY effective choice for soil application in high-pH or calcareous (limestone) soils. Expensive but guarantees uptake.\n• Fe-DTPA (Yellow Iron): Stable up to pH 7.5. The global standard for hydroponics and neutral soils.\n• Fe-EDTA: Unstable above pH 6.5. If used in alkaline soil, it instantly drops the Iron and binds to Calcium instead. Best restricted to foliar sprays.\n• Ferrous Sulfate: Cheap, but chemically naked. Locks up instantly in most soils. Carries a high burn risk if used foliar without organic buffers.",
    info_Fe_app: "Application Strategy (The pH & UV Trap): Iron is the most notoriously difficult micronutrient to manage because it locks up instantly in alkaline soils (pH > 7.0) and high-phosphorus environments. \n\nProtocol: If soil pH is high, bypass roots entirely with foliar sprays (Fe-EDTA or Amino-Fe). ⚠️ UV Warning: Synthetic Iron chelates suffer from photodegradation (UV light breaks the chelate bond). ALWAYS apply Iron foliar sprays in the late evening or very early morning.",
    info_Fe_def: "Immobile Element Alert: Severe 'Interveinal Chlorosis' on the NEWEST leaves. The tissue turns pale yellow or completely white ('bleached'), but the veins remain a sharp, contrasting dark green. This happens because Iron cannot be scavenged from old leaves.",
    info_Fe_bio: "Carrier Synergy: Fulvic Acids and Amino Acids act as natural chelators. Mixing Ferrous Sulfate with Amino Acids protects the Iron from locking up, prevents leaf burn, and facilitates rapid entry through the leaf stomata.",
    info_Fe_syn: "1. The Transport Escort (K): Potassium regulates the water flow that physically carries heavy, immobile Iron up to the new shoots.\n2. The Acidifier (S): Sulfur lowers the micro-pH in the root zone, naturally unlocking native Iron in the soil.",
    info_Fe_antag: "1. The Twin Rivalry (Fe vs Mn): Iron and Manganese look chemically identical to the plant's roots. High Mn completely blocks Fe uptake, and vice versa. Maintain a strict soil ratio of Fe:Mn ≈ 2:1.\n2. The Calcium Trap: High Ca (limestone/alkaline soils) limits Iron solubility.",
    info_Fe_inhib: "1. Phosphate Lockup: High Phosphorus application binds native soil Iron into Iron Phosphate, an insoluble rock.\n2. Heavy Metal Saturation: Excess Zinc or Copper physically occupies the root carrier channels, locking Iron out.",
    info_Zn_func: "The Master Growth Regulator & Pollen Architect. Zinc is the essential precursor to Tryptophan, the building block of Auxin (the master plant growth hormone). It dictates internode elongation and leaf expansion. Crucially for reproduction, Zinc is a core requirement for DNA/RNA synthesis during the rapid cell division of flowering. It heavily dictates pollen viability, drives pollen tube elongation, and prevents catastrophic flower drop.",
    info_Zn_comm: "Market Forms:\n• Zn-EDTA: Highly stable in most soils (up to pH 7.5). Excellent for fertigation and early foliar.\n• Zinc Sulfate: Cheap and effective, but precipitates quickly in high-pH or high-Phosphorus soils.\n• Zinc Amino Acid Chelates: The absolute fastest foliar penetration. Crucial for pre-flowering rescue sprays because the amino acids directly feed the energy-intensive blooming process.\n• Zinc Oxide: Insoluble rock dust. Extremely slow availability, only useful as a long-term base in acidic soils.",
    info_Zn_app: "Application Strategy (The Pre-Flower Window): Because Zinc is heavily consumed during blooming and directly dictates pollen health, it MUST be loaded into the tree before flowers open. \n\nProtocol: Apply foliar Zn-Amino or Zn-EDTA during the pre-flowering stage (often combined with Boron). ⚠️ The Phosphorus Trap: If applying heavy P (like MKP) to induce flowers, you must apply Zinc 7-10 days BEFORE the Phosphorus to avoid permanent chemical lockup (Zinc Phosphate) in the soil and tissue.",
    info_Zn_def: "Immobile Element Alert: Classic 'Little Leaf' syndrome (new leaves remain tiny) and 'Rosetting' (internodes fail to elongate, causing leaves to bunch together). Reproductive Failure: Massive flower abortion, weak/sterile pollen, and lopsided or deformed fruit due to incomplete pollination.",
    info_Zn_bio: "Amino Acid Synergy: Combining Zinc with Amino Acids acts as a double-accelerator. The amino acids protect the Zinc from locking up, carry it instantly through the leaf cuticle, and provide the exact Tryptophan needed to jumpstart Auxin production.",
    info_Zn_syn: "1. The Growth Twins (N): Nitrogen drives the production of cells, but Zinc (via Auxin) tells those cells to expand to their full, healthy size.\n2. Reproduction (B): Zinc builds the healthy pollen grain, while Boron builds the tube it travels down. Both are mandatory for fruit set.",
    info_Zn_antag: "1. The Phosphate Trap (P): The most famous antagonism in agronomy. High Phosphorus instantly binds with Zinc in the soil, forming insoluble Zinc Phosphate stones. Always apply Zinc before heavy Phosphorus.\n2. Metal Competition (Fe/Cu/Mn): Zinc competes with other heavy metals for root absorption channels.",
    info_Zn_inhib: "1. Iron/Copper Block: Extreme over-application of Zinc will completely saturate root carrier channels, locking out Iron and Copper, which induces artificial deficiencies.",
    info_B_func: "The Floral Architect & Sugar Gatekeeper. Boron is the absolute linchpin for reproduction. When a pollen grain lands on a flower, it must grow a 'pollen tube' down into the ovary to fertilize the seed. Boron physically constructs and directs this tube; without it, the tube ruptures, fertilization fails, and the tree aggressively aborts the flower. Additionally, Boron acts as the 'mortar' that cross-links Calcium pectate in cell walls, and serves as the gatekeeper that allows sugars to cross cell membranes into the fruit.",
    info_B_comm: "Market Forms:\n• Ca-B-Mg Liquid Combos: The industry standard. Boron is rarely applied alone during fruiting. It is bundled with Calcium (the 'bricks') and Magnesium (the 'energy pump') to prevent fruit cracking.\n• Polyol / Sugar Alcohol Boron: The Premium Standard for flowering. Boron is naturally immobile, but this complex tricks the plant into moving Boron freely through the phloem directly to the flowers.\n• Sodium Borate (Solubor - 20% B): Highly soluble, the industry standard for foliar and fertigation. Warning: Raises tank pH significantly.\n• Boric Acid (17% B): Cheaper, acidic, but requires warm water to dissolve properly.\n• Calcium Borate (Ulexite): Slow-release rock form used purely for long-term soil base saturation.",
    info_B_app: "Application Strategy (Two Critical Windows):\n1. The Pre-Bloom Window: Boron moves in soil via water. If it's dry, root uptake is zero. You MUST apply foliar Boron 2-4 weeks BEFORE flowers open so the tree can pack it into buds.\n2. Fruit Expansion (Cracking Prevention): Apply Ca+B combos directly to the fruit every 10-14 days to build skin elasticity.\n⚠️ Toxicity Warning: Boron has the narrowest safety margin of any nutrient. Measure doses precisely; excess will severely burn leaves.",
    info_B_def: "Immobile Element Alert: Catastrophic reproductive failure. Flowers drop en masse without setting fruit. Surviving fruits are often lopsided, deformed, or shaped like a 'C' (due to incomplete seed pollination). Vegetative symptoms include the death of growing points (apical meristems), hollow stems, and thick, corky, cracked fruit skin.",
    info_B_bio: "Sugar Alcohol (Polyol) Synergy: Boron is naturally strictly immobile inside the plant. However, formulating Boron with Sugar Alcohols (Mannitol/Sorbitol) acts as a biological hack, allowing Boron to enter the phloem sap and transport actively from the leaves straight into the high-demand floral buds.",
    info_B_syn: "1. The Mandatory Synergy (Ca): Calcium builds the cell wall, but Boron is the 'mortar' that chemically cross-links the Calcium Pectate. Without Boron, Calcium floats uselessly in the tissue and cannot prevent fruit cracking. This is why commercial foliars strictly bundle Ca+B together.\n2. The Ultimate Combo (Ca + B + Mg): Often sold as a trio. While Ca+B build the physical structure of the expanding fruit, Magnesium (Mg) is bundled in to provide the energy (ATP) required to pump heavy sugars into the fruit, and to prevent the high Calcium from locking out Magnesium locally.\n3. The Sugar Pipeline (K): Potassium creates the pressure to move sap, while Boron opens the membrane gates to let the sugar into the fruit.",
    info_B_antag: "1. The Calcium Lockup (pH): High Calcium levels in the soil (from over-liming) will aggressively trap Boron, rendering it unavailable.\n2. The Dilution Effect (N/K): Fast, explosive vegetative growth driven by high Nitrogen or Potassium physically dilutes the available Boron across too much tissue, inducing a sudden deficiency at the growing tips.",
    info_B_inhib: "1. Extreme Phytotoxicity: Boron toxicity is very common. Over-application causes severe necrosis (burning) starting at the leaf tips/margins, rapidly progressing inward until the leaf drops.",
    info_Mn_func: "The Water Splitter & Defense Activator. Manganese is the critical engine of the Oxygen-Evolving Complex (OEC) in Photosystem II. It literally splits water molecules during photosynthesis to generate the electrons that power the entire plant. Without Mn, photosynthesis stops at step one. It also drives the TCA cycle (cellular respiration) and is heavily involved in synthesizing Lignin, which hardens plant cell walls and roots against pathogen attacks.",
    info_Mn_comm: "Market Forms:\n• Manganese Sulfate (MnSO4): The global standard. Highly soluble, cost-effective, and extremely fast-acting for foliar sprays to rescue deficient trees.\n• Mn-EDTA: A synthetic chelate stable up to pH 7.0. Best used in fertigation systems on depleted soils to prevent the Mn from locking up with soil particles.\n• Manganese Oxide (MnO): Highly insoluble rock dust. Completely useless as a quick fix; it only functions as a multi-year slow-release amendment in highly acidic soils.",
    info_Mn_app: "Application Strategy (The pH Seesaw): Manganese is incredibly sensitive to soil pH.\n\n• High pH (> 7.0) Lockout: In alkaline or calcareous soils, Mn rapidly oxidizes into unavailable solid forms. You MUST bypass the soil and use foliar Manganese Sulfate.\n• Low pH (< 5.0) Toxicity Trap: In highly acidic soils, Mn becomes wildly soluble, flooding the roots and causing severe Manganese Toxicity (leaf spotting, crinkling, dropping—often misdiagnosed as a fungal disease). The cure is NOT to add nutrients, but to apply Dolomite Lime to raise the pH and lock the excess Mn safely back into the soil.",
    info_Mn_def: "Immobile Element Alert: Shows up on NEW leaves first. Causes 'Mottled' or 'Checkered' interveinal chlorosis. Unlike Iron deficiency (which has razor-sharp green veins against white tissue), Mn deficiency looks diffuse and blurry, with pale green/yellow spots spreading between the veins.",
    info_Mn_bio: "Fulvic Synergy: Applying Manganese with Fulvic Acid prevents the Mn ions from prematurely oxidizing on the leaf surface, ensuring rapid stomatal entry and utilization.",
    info_Mn_syn: "1. The Armor Builders (Cu): Mn and Copper work synergistically to synthesize Lignin, hardening wood and defending roots against soil-borne pathogens.\n2. Enzyme Activation (K): Potassium and Mn co-activate several key respiratory and energy-transfer enzymes.",
    info_Mn_antag: "1. The Twin Rivalry (Mn vs Fe): Iron and Manganese are chemical twins. They compete fiercely for the exact same root absorption channels. Over-applying Mn will induce severe Iron starvation, and vice versa. Maintain a strict soil ratio of Fe:Mn ≈ 2:1.\n2. The Calcium Block: High Ca (limestone) heavily suppresses Mn uptake at the root zone.",
    info_Mn_inhib: "1. Iron Starvation: Excess Mn completely shuts down Iron transport inside the plant.\n2. Magnesium Displacement: Extreme Mn toxicity can displace Magnesium in the leaf, effectively destroying chlorophyll.",
    info_Cu_func: "The Lignin Builder & Immune Catalyst. Copper is an essential heavy metal that acts as the primary catalyst for synthesizing Lignin—the 'wood' that gives branches their physical strength and structural rigidity. Without it, trees produce soft, weak, 'rubbery' branches that snap under fruit weight. Copper is also a central component of Polyphenol Oxidase, the enzyme responsible for plant immune responses (phytoalexins) and the rapid browning/healing of wounds.",
    info_Cu_comm: "Market Forms & The Heavy Metal Reality:\n• Copper Fungicides (Hydroxide/Oxychloride): Widely used for disease control. Because they coat the leaf, they slowly degrade and provide a steady drip of 'nutritional' copper. Orchards using these rarely need extra Cu fertilizer.\n• Copper Sulfate (Bluestone): Highly soluble, but acts as a ruthless heavy metal salt. Extreme burn risk unless neutralized with lime (creating Bordeaux mixture).\n• Cu-EDTA: The safest form for pure nutritional fertigation or foliar feeding, as the chelate protects the heavy metal from causing immediate tissue scorch.",
    info_Cu_app: "Application Strategy (The Toxicity Threat): Because Copper is a heavy metal, it does NOT degrade in the soil; it accumulates forever. Orchards with decades of Copper fungicide use often suffer from severe soil toxicity, which stunts roots and kills beneficial soil microbes/earthworms.\n\nProtocol: Rely on your standard fungicide program for your Cu nutrition. Only apply targeted Cu-EDTA if soil tests confirm true deficiency (usually only in virgin soils or highly peaty/organic soils).",
    info_Cu_def: "Immobile Element Alert: Severe structural failure in new growth. Branches become abnormally soft, rubbery, and bend into 'S-shapes' or droop heavily (due to zero lignin). Causes severe 'Dieback' where new shoot tips die and turn black. Bark and fruit may develop blisters or oozing gum pockets (Exanthema).",
    info_Cu_bio: "⚠️ The Biostimulant Death Trap: NEVER mix Copper fungicides with Amino Acids or Peptides. Aminos act as 'Trojan Horses', pulling the heavy metal Copper directly through the leaf cuticle and into the cellular cytoplasm instantly, causing catastrophic phytotoxicity (severe leaf scorch and defoliation).",
    info_Cu_syn: "1. The Wood Builders (Mn): Copper and Manganese are the ultimate pair for synthesizing lignin and physically hardening the plant against fungal penetration.\n2. Protein Processing (N): Required to metabolize Nitrogen properly.",
    info_Cu_antag: "1. The Heavy Metal Feud (Zn/Fe/Mn): Excess soil Copper strongly competes for root absorption sites, aggressively locking out Zinc, Iron, and Manganese.\n2. High Organic Matter Trap: Copper binds tighter to soil organic matter (humus/peat) than any other micronutrient, causing severe lockup.",
    info_Cu_inhib: "1. Root Tip Necrosis: Excess heavy metal Copper in the soil permanently stunts, thickens, and kills delicate root tips, destroying the plant's nutrient foraging ability.\n2. Phosphorus Block: High soil P reduces Copper solubility.",
    info_Mo_func: "The Nitrogen Converter & Protein Enabler. Molybdenum is the crucial metal cofactor for two vital enzymes: Nitrate Reductase and Nitrogenase. When a plant absorbs Nitrate (NO3) from the soil, it cannot use it directly. It MUST use Nitrate Reductase to convert that NO3 into Ammonium (NH4) before making amino acids. Without Mo, this process halts. Nitrates accumulate in the leaves to toxic levels (attracting pests), while the plant simultaneously starves for protein. In legumes, Mo is mandatory for bacteria to fix nitrogen from the air.",
    info_Mo_comm: "Market Forms:\n• Sodium Molybdate (39% Mo): The global industry standard. Highly soluble. Because plants need so little Mo, this is typically applied in micro-doses (grams per hectare).\n• Ammonium Molybdate (54% Mo): Higher concentration, highly soluble alternative.\n💡 The pH Anomaly: Mo is the ONLY micronutrient that becomes MORE available in alkaline soils and completely locks up in acidic soils (pH < 5.5).",
    info_Mo_app: "Application Strategy (The Micro-Dose Rule): Plants require Molybdenum in parts-per-billion. \n\nProtocol: In highly acidic soils where Mo is locked up, foliar application of Sodium Molybdate is the most efficient rescue method. It is also widely used as a seed treatment for legumes to supercharge root nodules for Nitrogen fixation. \n⚠️ Warning: Over-application is rarely toxic to the plant itself, but causes fatal copper deficiency (Molybdenosis) in ruminant animals grazing on the crop.",
    info_Mo_def: "Mobile Element Alert: Because Mo is tied entirely to Nitrogen processing, its deficiency looks exactly like N deficiency (pale green/yellow older leaves). However, unique hallmarks include 'Whiptail' (leaves become twisted, elongated, and deformed) and marginal leaf scorch (caused by toxic, unprocessed nitrates burning the leaf edges from the inside out).",
    info_Mo_syn: "1. The Nitrogen Key (N): Mo unlocks Nitrogen. Applying heavy Nitrate fertilizers without adequate Mo is like giving the plant food it cannot digest.\n2. Phosphorus Pull (P): High Phosphorus levels in the soil actively enhance the root's ability to absorb Molybdate.",
    info_Mo_antag: "1. The Sulfate Shield (S): The Molybdate ion (MoO4²⁻) and the Sulfate ion (SO4²⁻) are virtually identical in size and electrical charge. Heavy applications of Sulfur will aggressively outcompete Mo for root entry, inducing severe Mo deficiency.",
    info_Mo_inhib: "1. Acid Soil Lockout: Soil pH below 5.5 causes iron and aluminum oxides to bind Molybdate into insoluble rocks.\n2. Copper Feud: Extremely high Mo levels can restrict Copper availability within plant tissues.",
    info_Cl_func: "The Osmotic Balancer. Chlorine (absorbed as Chloride, Cl⁻) is a micronutrient essential for regulating stomatal opening, maintaining cell turgor (water pressure) and balancing electrical charges within the plant. It also plays a minor but vital role in photosynthesis (assisting the water-splitting process in Photosystem II). While most broadleaf crops only need it in microscopic trace amounts, certain salt-tolerant crops rely on it heavily for water management.",
    info_Cl_comm: "Market Forms & The Chloride Threat:\n• MOP (Muriate of Potash / KCl): Contains ~47% Chloride. It is the cheapest source of Potassium, but the massive Chloride payload is highly toxic to sensitive crops.\n• SOP (Sulfate of Potash): The safe, low-chloride alternative.\n⚠️ The Durian Trap: Durian, avocado, and citrus are 'Chloride-Phobic'. Because they lack the genetic mechanism to exclude Cl at the roots, it accumulates rapidly in the leaves. This causes severe tip burn (marginal scorch), premature defoliation, and destroys the creamy texture and complex flavor of premium fruit.",
    info_Cl_app: "Application Strategy (Crop Specific):\n• Chloride-Haters (Durian, Citrus, Berries, Tobacco): STRICTLY AVOID MOP. You must use SOP (Sulfate of Potash) or Potassium Nitrate to supply K without the toxic Cl payload.\n• Chloride-Lovers (Oil Palm, Coconut, Sugar Beet, Celery): These crops actively require massive amounts of Chloride to regulate osmotic pressure and maximize yield. For them, cheap MOP is actually agronomically superior to SOP.",
    info_Cl_def: "Extremely rare in nature, as rainfall, irrigation water, and coastal sea breezes usually provide more than enough. If deficient, leaves will wilt suddenly at the margins (even when the soil is completely wet), and roots become highly branched but stubby and thick.",
    info_Cl_syn: "1. The Osmotic Pair (K): Chloride works directly with Potassium to open and close the stomata, regulating the plant's water loss during heat stress.\n2. Water Splitter (Mn): Works alongside Manganese in the chloroplasts to drive photosynthesis.",
    info_Cl_antag: "1. The Nitrate War: Chloride (Cl⁻) and Nitrate (NO3⁻) are both small, negatively charged anions. Heavy use of high-chloride fertilizers will aggressively compete with and suppress the plant's ability to absorb essential Nitrogen.\n2. Salt Stress: High soil Cl contributes to severe osmotic stress, effectively pulling water out of the roots.",
    info_Ni_func: "The Urea Digester & Metabolic Catalyst. Nickel is the mandatory metallic cofactor for the enzyme Urease. When plants absorb Urea (either from soil or foliar sprays), they must break it down into usable Ammonia and Carbon Dioxide. Without Nickel, this process is impossible; Urea accumulates to highly toxic levels and burns the plant from the inside out. It also plays a key role in seed germination and disease resistance.",
    info_Ni_comm: "Market Forms:\n• Nickel Sulfate: Highly soluble, typically applied in extreme micro-doses.\n• Nickel Lignosulfonate / Chelates: Used for rapid and safe foliar penetration.\n⚠️ Commercial Reality: Because plants need Nickel in microscopic amounts (parts per billion), it is rarely sold as a standalone fertilizer. Most agricultural soils have sufficient native Nickel, and it often arrives as a trace contaminant in other bulk fertilizers.",
    info_Ni_app: "Application Strategy (The Foliar Urea Companion): True soil deficiency is incredibly rare (though it famously causes 'Mouse-Ear' disease in Pecan orchards).\n\nProtocol: The most practical modern agronomic use for Nickel is adding a trace amount to heavy Foliar Urea sprays. This guarantees the plant has enough Urease enzyme to instantly digest the massive influx of Urea without suffering leaf tip scorch (Urea toxicity).",
    info_Ni_def: "Mobile Element Alert: The hallmark physical symptom is 'Mouse-Ear' leaves—new leaves emerge stunted, abnormally rounded, and with blunted tips. The hidden metabolic symptom is severe necrotic (dead/burnt) leaf tips shortly after a heavy Urea application, caused by toxic urea accumulation.",
    info_Ni_syn: "1. The Urea Digester (N): Nickel makes Urea safe. It allows the plant to rapidly convert urea-based nitrogen into amino acids.\n2. Seed Viability: Works synergistically with other trace elements to ensure proper seed development and germination rates.",
    info_Ni_antag: "1. The Heavy Metal Feud: High concentrations of competitive metallic cations—especially Zinc (Zn), Copper (Cu), and Iron (Fe)—will physically block Nickel from entering the root carrier channels.\n2. Alkaline Lockup: Like most micronutrients, Nickel availability drops significantly as soil pH rises above 6.7.",
    info_Ni_inhib: "1. Extreme Phytotoxicity: Because the plant needs so little, accidental over-application is highly toxic, completely stunting roots and mimicking Iron/Zinc deficiency by blocking their metabolic pathways.",
    info_Na_func: "The Osmotic Substitute. While not strictly essential for most crops, Sodium acts as a functional backup for Potassium in maintaining cell turgor (water pressure) and regulating stomatal opening, especially in low-K environments. In specific salt-tolerant plants (halophytes like sugar beets, celery, and spinach), it actively aids in carbon fixation and concentration.",
    info_Na_comm: "The Soil Destroyer (Dispersion/Deflocculation). Sodium is chemically devastating to soil structure. Because the Na+ ion has a massive hydration shell (it holds a thick layer of water around itself), excess Sodium physically forces clay particles apart—a process called 'dispersion'. This destroys crumbly, aggregated soil, turning it into a solid, concrete-like surface crust. Once this happens, water cannot infiltrate, roots suffocate from lack of oxygen (hypoxia), and beneficial soil biology collapses.",
    info_Na_app: "The Rescue Strategy (Gypsum Flushing): You cannot simply 'neutralize' Sodium; you must physically evict it from the root zone.\n\nProtocol: Apply massive amounts of Gypsum (Calcium Sulfate). The heavy, double-charged Calcium (Ca++) acts as a bully, forcefully knocking the Sodium off the clay exchange sites. The freed Sodium then binds with the Sulfate to form Sodium Sulfate—a highly soluble salt that MUST then be flushed deep below the root zone using heavy, clean irrigation.",
    info_Na_def: "Virtually non-existent in field conditions, as rainfall and irrigation provide trace amounts. In pure hydroponic setups, severe lack of Sodium in specific C4 plants might result in very slight growth reductions.",
    info_Na_syn: "1. The Potassium Spare: In soils with marginal Potassium, plants can pump Sodium into their cell vacuoles just to maintain physical water pressure (turgor), saving the scarce Potassium for critical enzymatic functions.",
    info_Na_antag: "1. The Cation Thief (K/Ca): High Sodium strongly outcompetetes Potassium and Calcium for root entry. High Na often induces severe Calcium deficiency (fruit cracking, tip burn) even if soil Calcium levels are perfectly adequate.",
    info_Co_func: "The Microbial Engine & Ethylene Controller. Cobalt is a non-essential element for most higher plants but is absolutely mandatory for the Nitrogen-fixing bacteria ($Rhizobium$) living in the root nodules of legumes. It is the central atom of the Cobalamin ($Vitamin B_{12}$) molecule, which drives the enzymatic conversion of atmospheric Nitrogen into plant-available forms. Emerging research also shows Cobalt inhibits Ethylene synthesis, potentially extending fruit shelf-life and delaying ripening-induced drop.",
    info_Co_comm: "Market Forms:\n• Cobalt Sulfate ($CoSO_4$): Highly soluble, the standard for nutritional applications.\n• Cobalt Nitrate: Used in specialized fertigation programs.\n• Cobalt Carbonate: Low solubility rock form, used for multi-year soil baseline building.\n⚠️ Reality: Required in extreme trace amounts (parts-per-billion). Often present as a trace contaminant in nickel or copper fertilizers.",
    info_Co_app: "Application Strategy (The Nitrogen Amplifier): Apply primarily to leguminous cover crops (like Mucuna bracteata in durian orchards) to maximize their Nitrogen-fixing potential, effectively providing 'free' N to the main crop. \n\nProtocol: Usually applied as a seed treatment or a trace foliar spray. In fruit crops, it can be applied pre-harvest to modulate ethylene levels and prevent premature fruit drop under extreme heat stress.",
    info_Co_def: "Mobile Element Alert: Symptoms in legumes look identical to Nitrogen deficiency (general yellowing of old leaves) because the root nodules have failed. Legumes will show pale, white, or green nodules instead of the healthy, pinkish-red 'leghamoglobin' color that indicates active $N_2$ fixation.",
    info_Co_syn: "1. The Fixation Duo (N): Cobalt provide the 'engine' ($B_{12}$) for Nitrogen fixation, making it Nitrogen's ultimate silent partner.\n2. Molybdenum ($Mo$): Both are mandatory co-factors for the nitrogenase enzyme complex.",
    info_Co_antag: "1. The Manganese Rivalry ($Mn$): High soil Manganese ($Mn^{2+}$) will aggressively outcompete Cobalt for absorption channels, leading to $N$ fixation failure even in fertile soils.\n2. Heavy Metal Congestion: Excess Zinc or Nickel will physically block Cobalt uptake channels.",
    info_AA_func: "The 'Ferrari' of Nutrition & Energy Saver. Amino Acids are the building blocks of proteins. Normally, a plant spends 25% of its total metabolic energy converting inorganic Nitrogen (Nitrate/Ammonium) into proteins. By applying Amino Acids, the plant skips this costly process, allowing it to re-direct that saved energy toward fruit production or stress defense. Key Aminos include:\n• Proline: The 'Osmotic Shield' that protects cells from drought and heat.\n• Glycine: The smallest AA, acting as a natural chelator to carry heavy metals into the plant.\n• Glutamic Acid: The 'Metabolic Hub' that triggers the entire Nitrogen pathway.",
    info_AA_comm: "Market Forms & The FAA Surge:\n• Plant-Based AA (Soy/Corn): High in L-Amino acids, clean, and extremely safe for all stages. Best for general stress management.\n• Animal-Based AA: High in Hydroxyproline. Often cheaper, used for bulk vegetative pushing.\n• Fish Amino Acids (FAA): The 'Heavy Lifter'. Heavily recommended because cold-processed fish fermentation preserves not just aminos, but massive levels of natural Peptides, Marine Minerals, and Growth Hormones (Auxins/Cytokinins). \n💡 Why FAA? FAA provides a unique 'Growth Surge' and 'Root Explosion' that plant-based aminos cannot match. It is the gold standard for recovering 'exhausted' trees post-harvest and stimulating soil microbes.",
    info_AA_app: "Application Strategy (The Stress & Recovery Hack): \n• Recovery: After flooding, heavy rain, or severe heat, apply FAA immediately to restart the root system and rebuild energy reserves.\n• Cold/Overcast Weather: When sunlight is low and photosynthesis is slow, AAs provide 'pre-digested' food to keep the plant moving.\n• Pesticide Buffer: Mixing AAs with pesticides (except Copper/Sulfur) reduces 'spray shock' on the leaves.",
    info_AA_def: "Non-essential but visible as 'General Stagnation'. Trees lacking organic amino supply struggle to recover from stress, show slow leaf expansion, and have poor fruit set compared to trees on an amino-fortified program.",
    info_AA_syn: "1. The Chelation Partner (Fe/Zn/Cu): Aminos wrap around metal nutrients, neutralizing their charge and allowing them to 'slip' through the leaf cuticle effortlessly.\n2. The N-Booster: Synergizes with all Nitrogen forms to accelerate protein synthesis.",
    info_AA_antag: "1. Fungicide Warning: High concentrations of AAs can reduce the efficacy of some contact fungicides by pulling them too deep into the plant tissue.\n2. Copper/Sulfur Clash: See inhibition below.",
    info_AA_inhib: "1. The Copper Scorch: NEVER mix Amino Acids (especially FAA) with Copper-based fungicides. The AAs will carry the heavy metal Copper directly into the plant cells, causing severe chemical burn and defoliation.",
    info_Pep_func: "The Physiological 'Software' & Signal Messengers. Peptides are short chains of amino acids (usually <50) that act as the plant's internal biological software. Unlike individual Amino Acids which are 'bricks' (food/materials), Peptides provide the 'instructions' for the plant's metabolic engine. They trigger systemic responses such as explosive root initiation, flower bud development, and the thickening of cell membranes. Most crucially, Peptides act as advanced biological escorts for heavy, immobile nutrients like Calcium.",
    info_Pep_comm: "Market Forms:\n• Fish Peptides (Cold Processed): The Gold Standard. Rich in marine signal molecules that trigger rapid recovery and growth surges. \n• Soy/Vegetable Peptides: High-purity chains, excellent for foliar application during flowering and fruit setting.\n• Peptones: Standard agricultural grade, used for boosting soil microbial activity and providing a steady signal for vegetative growth.\n💡 Why Peptides over Aminos? Individual Aminos feed the plant; Peptides RE-PROGRAM the plant to better handle stress and uptake nutrients.",
    info_Pep_app: "Application Strategy (The 'Trojan Horse' Hack):\n• Cracking Prevention (Ca-Pep): Peptides increase cell membrane permeability. Mixing Peptides with foliar Calcium during fruit set and expansion allows the plant to pull the heavy Calcium directly into the fruit phloem—bypassing the slow upward xylem flow.\n• Root Initiation: Apply via soil drench during transplanting or after a heavy pest attack to signal the plant to rebuild its root mass instantly.\n• Drought Signaling: Apply right before a hot season to signal the plant to strengthen cell walls against water loss.",
    info_Pep_def: "Visible as 'Metabolic Stagnation'. Plants without peptide support exhibit poor response to fertilizers, higher rates of fruit cracking (even with adequate Ca), and a sluggish recovery after environmental shocks (heat, flooding, or herbicide damage).",
    info_Pep_syn: "1. The Calcium Courier (Ca): Peptides are the most efficient natural delivery systems for Calcium, ensuring it reaches the fruit skin where it's needed for elasticity.\n2. Hormone Synergy: Peptides act as precursors that amplify the effect of natural Auxins and Cytokinins during flowering.",
    info_Pep_antag: "1. Strong Oxidizers: Avoid mixing with high-concentration Chlorine or Hydrogen Peroxide cleaners, which can physically break the delicate peptide chains.\n2. Metal Clash: See inhibition below.",
    info_Pep_inhib: "1. The Heavy Metal Scorch: Never mix Peptides (especially Fish Peptides) with Copper fungicides. The Peptides will pull the toxic heavy metal Copper into the cell cytoplasm instantly, causing severe tissue death.\n2. pH Denaturation: Extremely high (>10.0) or low (<3.0) tank mix pH will denature (break) the peptide chains, rendering their signaling messages useless.",
    // --- pH Chart Translations ---
    ph_chart_title: "pH Availability Chart",
    ph_chart_desc: "Interactive chart showing nutrient efficiency at different pH levels.",
    ph_current: "Current pH",
    ph_optimal: "Ideal",
    ph_sufficient: "Sufficient",
    ph_limited: "Limited",
    ph_tip_optimal_title: "pH Management: Gold Zone",
    ph_tip_optimal_desc: "Perfect! This is the 'Goldilocks Zone'. Most nutrients are chemically available. Maintain Organic Matter to buffer this.",
    ph_tip_acidic_title: "Acidic Correction Strategy",
    ph_tip_acidic_desc: "At pH {val}, {list} are locked up. Action: Apply Dolomite Lime (GML) 2-4 weeks before fertilizing. Avoid Urea until pH rises.",
    ph_tip_alkaline_title: "Alkaline Correction Strategy",
    ph_tip_alkaline_desc: "At pH {val}, {list} precipitate out. Soil application ineffective. Action: Use Foliar sprays for micros. Apply Sulfur to lower pH slowly.",
    ph_others: "etc.",
    ph_macros: "Macronutrients",
    ph_breakdown_title: "Detailed Availability Breakdown"
  },
  ms: {
    app_title: "AgriPro Nota Agronomi",
    knowledge: "Pengetahuan",
    advisor: "Penasihat",
    mix_rules: "Campuran",
    ph_availability: "Ketersediaan pH",
    tap_element: "Ketik unsur untuk melihat maklumat agronomi terperinci",
    antagonism: "Antagonisme (Tanah/Campuran)",
    inhibition: "Perencatan/Sekatan",
    synergy: "Sinergi",
    lbl_soil_conditions: "Keadaan Tanah & Cuaca",
    lbl_adjust_soil: "Laraskan untuk melihat kesan terhadap ketersediaan nutrien",
    lbl_ph: "pH Tanah",
    lbl_texture: "Tekstur Tanah / CEC",
    lbl_om: "Bahan Organik (OM)",
    lbl_cation: "Kation Dominan",
    lbl_weather: "Cuaca / Tekanan (VPD)",
    lbl_ec: "EC Tanah (Kemasinan)",
    lbl_crop_profile: "Profil Tanaman",
    lbl_crop_type: "Jenis Tanaman",
    lbl_variety: "Varieti/Klon",
    lbl_tree_age: "Umur Pokok (Tahun)",
    lbl_crop_stage: "Peringkat Pertumbuhan",
    lbl_leaf_analysis: "Analisis Daun / Simptom",
    lbl_recommendation: "Resipi Tepat",
    lbl_rationale: "Rasional Agronomi",
    lbl_rate_timing: "Kadar & Masa",
    lbl_compat_warn: "Semakan Keselamatan",
    lbl_reset: "Set Semula Input",
    lbl_calculate: "Jana Resipi",
    opt_crop_durian: "Durian",
    opt_crop_general: "Umum / Tanaman Lain",
    opt_var_mk: "Musang King (D197)",
    opt_var_bt: "Black Thorn (D200)",
    opt_var_d24: "D24 (Sultan)",
    opt_var_ioi: "IOI / Hajah Hasmah (D168)",
    opt_var_gp: "Golden Phoenix (D198)",
    opt_var_rp: "Red Prawn (D175)",
    opt_var_tekka: "Tekka (D160)",
    opt_var_mt: "Monthong (D159)",
    opt_var_tk: "Tupai King (D214)",
    opt_var_d101: "D101 (Mas)",
    opt_var_generic: "Generik / Kampung",
    opt_stage_seedling: "Anak Benih / Tanam Semula",
    opt_stage_veg: "Vegetatif (Pucuk Baru)",
    opt_stage_pre_flower: "Pra-Berbunga & Aruhan",
    opt_stage_flower_bud: "Kemunculan Putik (Mata Ketam) ",
    opt_stage_matchstick: "Pemanjangan Batang Mancis",
    opt_stage_bloom: "Bunga Kembang Penuh (Antesis)",
    opt_stage_fruit_set: "Awal Pembentukan Buah (0–10 DAA)",
    opt_stage_fruit_drop_1: "Gelombang 1: Pengguguran Embrio (10–25 DAA)",
    opt_stage_ping_pong: "Gelombang 2: Persaingan Pucuk (35–50 DAA)",
    opt_stage_rapid_expansion: "Pembesaran Pesat (50–90 DAA)",
    opt_stage_maturation: "Pematangan & Rekahan Semula Jadi",
    opt_stage_post_harvest: "Pemulihan Lepas Tuai",
    opt_sym_none: "Sihat / Seimbang",
    opt_sym_yellow_old: "Daun Tua Menguning (Kekurangan Nitrogen/Magnesium/Kalium)",
    opt_sym_yellow_new: "Daun Muda Menguning (Kekurangan Besi/Mangan/Sulfur)",
    opt_sym_burn: "Hujung Daun Terbakar (Kemasinan/Kekurangan Kalium)",
    opt_sym_stunted: "Akar / Pertumbuhan Terbantut",
    opt_sym_fruit_crack: "Buah Merekah / Cacat",
    opt_sym_wet_core: "Teras Basah / Isi Berair",
    opt_sand: "Berpasir (Daya Tahan Rendah)",
    opt_loam: "Lom (Seimbang)",
    opt_clay: "Liat (Daya Tahan Tinggi)",
    opt_low: "Rendah (<2%)",
    opt_med: "Sederhana (2-5%)",
    opt_high: "Tinggi (>5%)",
    opt_bal: "Seimbang",
    opt_hi_ca: "Berkapur (Ca Tinggi)",
    opt_hi_mg: "Serpentin (Mg Tinggi)",
    opt_hi_k: "Kalium Tinggi",
    opt_hi_na: "Masin (Na Tinggi)",
    opt_dry: "Panas & Kering (VPD > 1.6 kPa)",
    opt_norm: "Optimum (0.8-1.2 kPa)",
    opt_wet: "Hujan Lebat / Mendung (< 0.5 kPa)",
    opt_ec_low: "Rendah (< 1.0)",
    opt_ec_opt: "Optimum (1.0-2.0)",
    opt_ec_high: "Tinggi (> 2.0)",
    lbl_acid: "Berasid",
    lbl_neutral: "Neutral",
    lbl_alkaline: "Beralkali",
    lbl_visual: "Pemeriksaan Visual",
    lbl_h2o2: "Ujian H2O2 (Hidrogen Peroksida)",
    desc_visual_low: "Warna cerah/putih, berpasir atau padat, tiada bau.",
    desc_visual_med: "Tanah perang biasa.",
    desc_visual_high: "Hitam pekat, struktur rapuh/gembur, berbau tanah.",
    desc_h2o2_low: "Tiada tindak balas.",
    desc_h2o2_med: "Berbuih sedikit.",
    desc_h2o2_high: "Berbuih kuat/panas.",
    lbl_soil_impact: "Analisis Kesan Persekitaran",
    msg_soil_ok: "Keadaan tanah semasa secara amnya sesuai untuk nutrien ini.",
    lbl_high_conc_inhib: "Perencatan / Ketidakserasian Campuran Tangki",
    lbl_inhibits: "Merencat/Menyekat",
    lbl_when: "Bila",
    lbl_none: "Tiada",
    lbl_market_insight: "Maklumat Komersial",
    lbl_app_strategy: "Strategi Aplikasi",
    lbl_def_signal: "Tanda Kekurangan",
    lbl_common_sources: "Sumber Biasa",
    lbl_metabolism: "Fungsi Fisiologi",
    lbl_enzymes: "Enzim Utama",
    lbl_optimal_levels: "Rujukan Diagnostik",
    lbl_soil_test: "Sasaran Tanah",
    lbl_leaf_tissue: "Sasaran Tisu Daun",
    lbl_ionic_form: "Bentuk Ion",
    lbl_leach_risk: "Risiko Larut Lesap",
    lbl_soil_grip: "Penjerapan Tanah",
    lbl_compete: "Persaingan",
    lbl_stage_veg: "Vegetatif",
    lbl_stage_fruit: "Berbuah",
    lbl_bio_synergy: "Sinergi Biostimulan (Pilihan)",
    lbl_recipe_center: "RESIPI",
    info_AA_zwitterion_title: "Teknik Agronomi: Kesan Zwitterion",
    info_AA_zwitterion_desc: "Mengapa Asid Amino digelar 'Pita Dua Muka'?\n• Cas Pintar: Ia membawa cas positif (+) dan negatif (-). Ini membolehkannya melekat pada zarah tanah (mengurangkan larian air) sambil membalut nutrien logam (pengkelatan semula jadi).\n• Bunglon pH: Tidak seperti garam yang memendak, ia melaraskan casnya mengikut pH tanah, memastikan nutrien kekal aktif untuk diserap akar.",
    lbl_immobile_insight: "Strategi Nutrien Tidak Bergerak",
    msg_immobile_advice: "Kawalan Trafik: Unsur ini TIDAK bergerak di dalam pokok. Daun tua tidak dapat menyalurkannya kepada pucuk baru.\n\nStrategi:\n1. Sasaran Terus: Penghantaran melalui akar selalunya terlalu perlahan untuk pertumbuhan pesat. Anda MESTI sembur terus pada daun/buah baru.\n2. Penumpang: Penyerapan bergantung sepenuhnya pada transpirasi (aliran air). Tiada aliran air = Tiada penyerapan. Pastikan pengairan konsisten.",
    cat_Macro: "Nutrien Makro",
    cat_Secondary: "Nutrien Sekunder",
    cat_Micro: "Nutrien Mikro",
    cat_Beneficial: "Unsur Berfaedah",
    cat_Biostimulant: "Biostimulan",
    mob_Mobile: "Bergerak dalam Pokok",
    mob_Immobile: "Tidak Bergerak dalam Pokok",
    elem_Nitrogen: "Nitrogen (N)",
    elem_Phosphorus: "Fosforus (P)",
    elem_Potassium: "Kalium (K)",
    elem_Sulfur: "Sulfur (S)",
    elem_Calcium: "Kalsium (Ca)",
    elem_Magnesium: "Magnesium (Mg)",
    elem_Iron: "Besi (Fe)",
    elem_Manganese: "Mangan (Mn)",
    elem_Boron: "Boron (B)",
    elem_Copper: "Kuprum (Cu)",
    elem_Zinc: "Zink (Zn)",
    elem_Molybdenum: "Molibdenum (Mo)",
    elem_Silicon: "Silikon (Si)",
    elem_Chlorine: "Klorin (Cl)",
    elem_Nickel: "Nikel (Ni)",
    elem_Sodium: "Natrium (Na)",
    elem_Cobalt: "Kobalt (Co)",
    elem_AminoAcids: "Asid Amino (AA)",
    elem_Peptides: "Peptida (Pep)",
    rec_Humic: "Asid Humik",
    src_urea: "Urea (46%)",
    src_amsul: "Ammonium Sulfat (21%)",
    src_calnit: "Kalsium Nitrat",
    src_kno3: "Kalium Nitrat",
    src_dap: "DAP (18-46-0)",
    src_map: "MAP (11-52-0)",
    src_rock_phos: "Batuan Fosfat (ERP)",
    src_polyphos: "Polifosfat",
    src_mop: "Muriat Kalium (MOP/KCl)",
    src_sop: "Kalium Sulfat (SOP)",
    src_kmg_sulf: "Sul-Po-Mag",
    src_dolomite: "Dolomit (GML)",
    src_gypsum: "Gipsum (CaSO4)",
    src_lime: "Kapur (CaCO3)",
    src_kieserite: "Kieserit (MgSO4)",
    src_mg_oxide: "Magnesium Oksida",
    src_mg_nitrate: "Magnesium Nitrat",
    src_elem_sulfur: "Sulfur Unsur",
    src_fe_sulf: "Ferus Sulfat",
    src_fe_edta: "Fe-EDTA",
    src_fe_eddha: "Fe-EDDHA (Besi Merah)",
    src_fe_amsul: "Ferus Ammonium Sulfat",
    src_zn_sulf: "Zink Sulfat",
    src_zn_edta: "Zn-EDTA",
    src_zn_oxide: "Zink Oksida",
    src_mn_sulf: "Mangan Sulfat",
    src_mn_edta: "Mn-EDTA",
    src_mn_oxide: "Mangan Oksida",
    src_cu_sulf: "Kuprum Sulfat",
    src_cu_hydrox: "Kuprum Hidroksida",
    src_cu_edta: "Cu-EDTA",
    src_borax: "Boraks",
    src_boric: "Asid Borik",
    src_solubor: "Solubor",
    src_ca_borate: "Kalsium Borat",
    src_na_moly: "Natrium Molibdat",
    src_amm_moly: "Ammonium Molibdat",
    src_k_silicate: "Kalium Silikat",
    src_ca_silicate: "Kalsium Silikat",
    src_rice_ash: "Abu Sekam Padi",
    src_ca_chlor: "Kalsium Klorida",
    src_amm_chlor: "Ammonium Klorida",
    src_ni_sulf: "Nikel Sulfat",
    src_ni_nitr: "Nikel Nitrat",
    src_sea_salt: "Garam Laut",
    src_na_nitr: "Natrium Nitrat",
    src_co_sulf: "Kobalt Sulfat",
    src_co_carb: "Kobalt Karbonat",
    src_plant_aa: "Amino Tumbuhan (Soya/Jagung)",
    src_animal_aa: "Amino Haiwan",
    src_fish_aa: "Amino Ikan (FAA)",
    src_fish_pep: "Peptida Ikan",
    src_soy_pep: "Peptida Soya",
    val_ratio_7_1: "Nisbah > 7:1",
    val_high_ph_ca_b: "pH > 7.0 (Garam Tidak Larut)",
    val_ratio_1_5: "Nisbah < 1.5",
    val_ratio_2_5: "Nisbah > 2.5",
    val_tank_mix: "Campuran Tidak Serasi",
    mix_calnit: "Kalsium Nitrat",
    mix_phos: "Fosfat",
    mix_sulf: "Sulfat",
    mix_mag: "Magnesium",
    mix_iron: "Besi",
    mix_urea: "Urea",
    mix_amm_nit: "Ammonium Nit.",
    mix_ca_mg: "Ca + Mg",
    mix_boron: "Boron",
    mix_zinc: "Baja Zink",
    mix_ammonium: "N Ammonium",
    mix_humic: "Asid Humik",
    mix_amino: "Asid Amino",
    mix_pep: "Peptida",
    mix_copper: "Racun Kulat Kuprum",
    mix_silicate: "Silikat",
    mix_acids: "Asid",
    mix_seaweed: "Rumpai Laut (Alkali)",
    mix_pesticides: "Racun Perosak Sensitif",
    mix_reason_ppt_white: "Mendakan (Pepejal Putih). ",
    mix_reason_ppt_gyp: "Mendakan (Gipsum). ",
    mix_reason_ppt_high: "Memendak pada kepekatan/pH tinggi. ",
    mix_reason_lockup: "Terkunci (kecuali dikelat). ",
    mix_reason_wet: "Campuran menjadi lembap/pes. ",
    mix_reason_ratio_complex: "Fizikal: Bahan pekat terus menjadi gel. Kimia: Kekalkan Ca:Mg 3:1 hingga 5:1. ⚠️ Amaran: Boron mesti < 0.2% (Ca:B ≈ 100:1). Berlebihan akan membakar daun.",
    mix_reason_humate_sludge: "Tindak balas: Membentuk enapcemar Kalsium Humat tidak larut yang menyumbat muncung. Gunakan Asid Fulvik sebagai ganti.",
    mix_reason_copper_burn: "Fitotoksik: Amino membawa Kuprum ke dalam tisu terlalu cepat, menyebabkan daun terbakar teruk.",
    mix_reason_pep_copper: "Fitotoksik: Peptida meningkatkan kebolehtelapan sel, menyebabkan keracunan Kuprum (terbakar).",
    mix_reason_silica_gel: "Bencana: Silikat berpolimer menjadi kaca/gel apabila bertemu asid. Merosakkan peralatan.",
    mix_reason_silica_ca: "Pemendakan: Membentuk Kalsium Silikat tidak larut.",
    mix_reason_ph_hydrolysis: "Konflik pH: Rumpai laut beralkali (pH >9) menyebabkan hidrolisis (penguraian) racun perosak. Tambah penimbal.",
    mix_reason_zn_phos: "Pemendakan: Zink + Fosfat = Zink Fosfat (batu tidak larut). Menyebabkan nutrien terkunci.",
    mix_reason_cu_acid: "Risiko Terbakar: Persekitaran berasid membebaskan ion Kuprum terlalu banyak secara serta-merta.",
    mix_reason_nh4_alkali: "Pemeruapan: Ammonium bertukar menjadi gas Ammonia dalam keadaan beralkali (Rumpai Laut/Kapur).",
    status_incompatible: "Tidak Serasi",
    status_caution: "Berhati-hati",
    mix_protocol_title: "Protokol Campuran Tangki",
    mix_protocol_gold: "Peraturan Emas (WALES): Jangan Campur Terus",
    mix_protocol_gold_desc: "Mencampurkan dua bahan pekat secara terus (cth. Kalsium + Boron) menyebabkan 'kejutan' kimia. Kerana kekurangan air, ion menjadi lampau tepu serta-merta, menukar cecair menjadi gel atau pes pekat ('Kesan Puding') yang menyumbat muncung secara kekal.",
    mix_protocol_step1: "1. Air Dahulu (70%)",
    mix_protocol_step2: "2. Pracairkan",
    mix_protocol_step3: "3. Masukkan mengikut urutan",
    mix_protocol_step1_desc: "Air ialah penimbal terbaik.",
    mix_protocol_step2_desc: "Larutkan setiap baja dalam baldi berasingan terlebih dahulu.",
    mix_protocol_step3_desc: "Masukkan Larutan A -> Kacau -> Masukkan Larutan B.",
    adj_title: "Strategi Bahan Pembantu",
    adj_subtitle: "Memilih 'Kurier' yang betul",
    adj_nis_title: "Surfaktan Bukan Ionik (NIS)",
    adj_nis_desc: "Pilihan Serba Boleh yang Selamat. Menurunkan tegangan permukaan untuk membasahkan daun tetapi kebanyakannya kekal di permukaan. Terbaik untuk nutrisi am, risiko terbakar rendah.",
    adj_si_title: "Organosilikon (Super Spreader)",
    adj_si_desc: "Pakar Penembusan. Tegangan permukaan sangat rendah (20 dynes/cm). Cecair memasuki stomata secara terus. Bagus untuk penyerapan sistemik tetapi berisiko ketika panas.",
    adj_orange_title: "Minyak Oren / D-Limonene",
    adj_orange_desc: "Pelbagai Guna Organik. Melarutkan kutikel berlilin untuk bertindak sebagai penembus. Bonus: Membunuh perosak bertubuh lembut (hama/thrips) secara fizikal melalui penyahhidratan.",
    adj_orange_warn: "Amaran: Minyak 'Panas'. Menanggalkan lilin -> Sensitif cahaya matahari. Peraturan: 1. Jangan guna jika >30°C. 2. Jangan campur dengan penembus lain.",
    adj_bee_title: "Keselamatan Pendebunga",
    adj_bee_desc: "Ketoksikan Sentuhan: D-Limonene toksik kepada lebah apabila tersentuh (melarutkan eksoskeleton). Bau kuat mengganggu pencarian makanan.\n\nPematuhan:\n• JANGAN sembur ketika berbunga.\n• Sembur hanya pada lewat petang apabila lebah berada di sarang.",
    adj_rule_burn: "Risiko Terbakar: Organosilikon menembusi terlalu cepat. Jangan sekali-kali campur dengan Kuprum atau Sulfur pada suhu melebihi 30°C.",
    adj_rule_runoff: "Risiko Larian: Penyebaran berlebihan menyebabkan cecair bergabung dan mengalir jatuh. Kurangkan isipadu air.",
    adj_rule_hydrolysis: "Sensitif pH: Terurai dengan cepat jika pH <4 atau >9. Gunakan segera.",
    adj_diy_title: "Sabun Pencuci Pinggan DIY?",
    adj_diy_desc: "<b>TIDAK:</b> Detergen isi rumah biasanya <b>Anionik</b> dan mengandungi natrium. Ia menanggalkan kutikel daun secara agresif, menyebabkan selaran matahari dan kemasukan patogen. Gunakan bahan pembantu pertanian.",
    chel_title: "Pengkelatan & Kestabilan",
    chel_subtitle: "Buka kunci nutrien, elak nutrien terkunci",
    chel_edta: "EDTA (Standard)",
    chel_edta_desc: "Standard ekonomi. Bagus untuk semburan daun. Amaran: Tidak stabil pada pH > 6.5. Membebaskan nutrien (terutamanya Fe) dalam tanah beralkali, menyebabkan pemendakan.",
    chel_eddha: "EDDHA (Besi Merah)",
    chel_eddha_desc: "Kelas Berat. Sangat stabil pada pH 3.0-10.0. SATU-SATUNYA pilihan untuk aplikasi Besi ke tanah beralkali. Mahal tetapi berkesan.",
    chel_deta: "DETA",
    chel_deta_desc: "Gred Pakar. Digunakan untuk Cu dan Zn. Cengkaman lebih kuat daripada EDTA, tetapi masih gagal dalam keadaan sangat beralkali. ⚠️ Fakta: Tidak boleh mengkelat Boron.",
    chel_dtpa: "DTPA (Besi Kuning)",
    chel_dtpa_desc: "Standard Hidroponik. Stabil sehingga pH 7.5. Mengisi jurang antara EDTA (lemah) dan EDDHA (mahal).",
    chel_amino: "Asid Amino (Organik)",
    chel_amino_desc: "Kelajuan Ferrari. Menembusi kutikel daun paling cepat. Sebagai protein 'pra-cerna', pokok tidak menggunakan tenaga untuk menyerapnya. Terbaik untuk pemulihan tekanan.",
    chel_fulvic: "Asid Fulvik (Pembawa)",
    chel_fulvic_desc: "Pengangkut Emas. Molekul asid organik yang kecil. Membawa Ca/Mg/unsur surih menembusi dinding sel. Larut pada semua tahap pH.",
    chel_ligno: "Lignosulfonat",
    chel_ligno_desc: "Organik Ekonomi. Hasil sampingan kertas. Pengkompleksan lemah (bukan kelat sebenar), tetapi sifat pelekat/perata semula jadi yang sangat baik. Untuk semburan daun sahaja.",
    chel_polyol: "Poliol (Alkohol Gula)",
    chel_polyol_desc: "Teksi Boron. Kompleks Manitol/Sorbitol. SATU-SATUNYA teknologi yang menjadikan Boron bergerak dalam floem (diangkut dari daun ke buah).",
    chel_citric: "Asid Sitrik",
    chel_citric_desc: "Pelaras. Pengkelatan lemah, tetapi sangat baik untuk menurunkan pH tangki sementara bagi mengekalkan kestabilan campuran.",
    chel_wood_vinegar: "Cuka Kayu",
    chel_wood_vinegar_desc: "Sinergis. Pengkelatan lemah melalui asid asetik. Menurunkan pH, menghalau perosak dan meningkatkan penembusan daun.",
    chel_lbl_synthetic: "Kelat Sintetik",
    chel_lbl_organic: "Pembawa Organik",
    chel_badge_ph_low: "pH < 6.5",
    chel_badge_ph_wide: "pH 3-10",
    chel_badge_ph_med: "pH < 7.5",
    chel_badge_fast: "Serapan Pantas",
    chel_badge_univ: "Universal",
    unit_title: "Memahami Unit",
    unit_desc: "Mengapa guna Nisbah vs Peratus vs ppm",
    unit_col_unit: "Unit",
    unit_col_target: "Sasaran",
    unit_col_reason: "Logik",
    unit_ratio_targets: "Fe, Mn, Ca, Mg",
    unit_ratio_reason: "Keseimbangan menentukan penyerapan (Persaingan). Nisbah relatif lebih penting daripada jumlah mutlak.",
    unit_percent_targets: "N, K, Mg (Makro)",
    unit_percent_reason: "Kuantiti tinggi (1-5% daripada tisu). Ketoksikan/Perencatan diukur dalam peratus.",
    unit_ppm_targets: "Zn, Cu, B, Mo (Mikro)",
    unit_ppm_reason: "Amaun surih. Peningkatan mutlak yang sangat kecil (mg/kg) boleh menyebabkan ketoksikan.",
    unit_row_ratio: "Nisbah",
    unit_row_percent: "Peratus",
    unit_row_ppm: "ppm",
    info_N_func: "Pembina Utama Kehidupan Tumbuhan. Nitrogen ialah blok binaan asas bagi asid amino, protein dan molekul klorofil (enjin fotosintesis). Ia mengawal secara langsung sintesis DNA/RNA, memacu pembahagian sel dan mengawal Indeks Luas Daun (LAI). Tanpa N yang mencukupi, pokok tidak dapat membina jentera enzim yang diperlukan untuk proses metabolik lain. Ia merupakan pemacu utama pengumpulan biojisim vegetatif.",
    info_N_comm: "Bentuk di Pasaran:\n• Urea (46% N): Paling murah, kepekatan tertinggi. N-amida mesti ditukar kepada Ammonium, kemudian Nitrat melalui urease tanah dan bakteria penitritan. Kehilangan pemeruapan tinggi (sebagai gas ammonia) jika dibiarkan di permukaan tanpa kelembapan. Menaikkan pH buat sementara, kemudian sangat mengasidkan.\n• Kalsium Nitrat (15.5% N, 19% Ca): Pilihan Premium. 100% N-Nitrat. Bertindak cepat, tidak mengasidkan dan diserap terus oleh akar tanpa kos tenaga. Secara sinergi menarik Kalsium ke dalam pokok. Sesuai untuk pembesaran buah dan pemulihan.\n• Ammonium Sulfat (21% N, 24% S): Mengandungi N-Ammonium. Sangat mengasidkan. Sangat baik untuk tanah pH tinggi atau menghijaukan daun secara perlahan dan berterusan. ⚠️ Amaran: Ammonium berlebihan sangat merencat penyerapan Kalsium, Kalium dan Magnesium oleh akar.\n• Kalium Nitrat (13% N, 46% K2O): Pemulihan pantas. N-Nitrat bertindak sebagai pembawa, secara sinergi menarik Kalium ke dalam pokok. Tiada tandingan untuk pembesaran dan pemanisan buah di peringkat akhir.\n• Ammonium Nitrat (34% N): Seimbang separuh ammonium, separuh nitrat. Bagus untuk makanan segera dan berterusan, tetapi dikawal ketat/dihadkan di banyak kawasan.",
    info_N_app: "Strategi: 'Pembajaan Berdenyut' & Pengurusan Peringkat. Beri N dengan banyak semasa pucuk vegetatif. Sebaik sahaja pembungaan bermula, segera hadkan N untuk mengelakkan 'pintasan vegetatif' (pokok menggugurkan bunga/buah untuk menumbuhkan daun baru). \n\nPembajaan berdenyut: Beri baja N utama, kemudian tunggu 3-4 hari sebelum memberi Kalsium atau unsur Mikro untuk mengelakkan kesesakan akar. Semasa berbuah, tukar daripada sumber Amida/Ammonium kepada sumber Nitrat untuk mengelakkan sekatan Kalium dan Kalsium.",
    info_N_def: "Amaran Unsur Bergerak: Daun tua bertukar hijau pucat hingga kuning sekata di seluruh daun (termasuk urat). Pokok mengorbankan daun tua untuk memindahkan N ke pertumbuhan baru. Kes teruk menunjukkan pertumbuhan terbantut dan kurus, daun gugur awal, serta kanopi nipis dan jarang.",
    info_N_bio: "Sinergi Organik:\n1. Asid Amino Ikan membekalkan blok peptida siap dibina; pokok menyerapnya secara terus, menjimatkan tenaga ATP yang banyak yang biasanya diperlukan untuk menukar nitrat kepada protein.\n2. Asid Humik & Fulvik bertindak seperti span (CEC tinggi), menahan ion Nitrat/Ammonium yang mudah bergerak di zon akar dan mengurangkan kehilangan larut lesap secara ketara semasa hujan lebat.",
    info_N_antag: "1. Perang Kation (Ammonium vs K/Ca/Mg): Ammonium (NH4+) ialah ion positif yang sangat reaktif dan bersaing secara agresif dengan Kalium (K+), Kalsium (Ca++) dan Magnesium (Mg++) untuk memasuki akar.\nPenyelesaian: Gunakan Nitrat (NO3-) semasa pengisian buah untuk mengelakkan sekatan K.\n\n2. Perangkap Pencairan (N vs P/Mikro): N berlebihan memaksa ledakan pesat dedaun vegetatif. Sistem akar tidak dapat menyerap Fosforus atau Unsur Surih yang lambat bergerak dengan cukup pantas, menyebabkan kekurangan 'pencairan' yang teruk pada daun baru.",
    info_N_syn: "1. Enjin Klorofil (Mg): N membina struktur cincin porfirin, manakala Magnesium (Mg) terletak tepat di tengah. Kedua-duanya tidak berfungsi tanpa satu sama lain.\n2. Kilang Protein (S): N digunakan untuk membina rantai, tetapi Sulfur (S) membentuk 'jambatan disulfida' yang melipat protein kepada bentuk 3D yang berfungsi.\n3. Pembawa Nitrat (K, Ca): Kalium dan Kalsium bertindak sebagai pengiring fisiologi, membantu membawa N-Nitrat naik melalui xilem.",
    info_N_inhib: "1. Kuprum (Cu) Terkunci: Aplikasi Nitrogen yang tinggi mengikat Kuprum dalam tanah dan tisu, menghalang pembentukan lignin (menyebabkan dahan lemah dan lembut).\n2. Perencatan Boron (B): N tinggi menyekat penyerapan Boron, menyebabkan buah merekah dan bunga gugur.\n3. pH Menjunam (Mo): Penggunaan Ammonium/Urea yang banyak menurunkan pH tanah, menjadikan Molibdenum tidak tersedia secara kimia untuk penurunan Nitrogen.",
    info_P_func: "Mata Wang Tenaga & Suis Utama Pembiakan. Fosforus ialah tulang belakang ATP (tenaga sel), DNA dan membran sel. Walaupun ia memacu pemanjangan akar pada pokok muda, peranan paling penting pada pokok matang ialah memberi isyarat peralihan daripada pertumbuhan vegetatif (pucuk) kepada pembiakan generatif (pembungaan). Lonjakan P yang besar memberitahu pokok untuk menyalurkan tenaga yang terkumpul bagi menghasilkan putik bunga dan bukannya daun baru.",
    info_P_comm: "Bentuk di Pasaran:\n• MKP (Mono-Kalium Fosfat, 0-52-34): Raja aruhan bunga yang tiada tandingan. Mengapa petani memberinya dengan banyak sebelum berbunga? 1) Sifar Nitrogen memastikan pokok berhenti mengeluarkan pucuk baru. 2) P yang tinggi (52%) membekalkan tenaga ATP yang besar untuk mengeluarkan putik bunga. 3) K yang tinggi (34%) mematangkan dahan, mengumpul kanji dan mewujudkan sedikit tekanan osmotik yang 'memperdaya' pokok ke mod survival/pembiakan.\n• MAP (11-52-0): Mengandungi N. Bagus untuk perkembangan awal akar tetapi elakkan semasa aruhan bunga yang ketat jika N perlu sifar. Mewujudkan zon mikro berasid (pH ~4.0).\n• DAP (18-46-0): Mewujudkan zon mikro beralkali (pH ~8.0). N dan P tinggi, digunakan hanya pada peringkat awal vegetatif.\n• Polifosfat: Bentuk cecair yang jauh lebih tahan daripada terkunci dalam tanah berbanding ortofosfat berbutir.",
    info_P_app: "Strategi Pra-Berbunga (Peralihan C:N): Untuk memaksa pembungaan, pokok memerlukan Karbohidrat (C) tinggi dan Nitrogen (N) rendah. 4-6 minggu sebelum jangkaan berbunga, hentikan semua N tanah. Sembur MKP (0-52-34) pada daun setiap 7-10 hari untuk mengeraskan dahan dan memaksa putik pecah.\n\n⚠️ Protokol P-Zn (Urutan Langkah): Jika pokok kekurangan Zink, JANGAN beri P yang banyak sehingga Zink diperbetulkan. \nLangkah 1: Sembur Zn-EDTA atau Zn-Amino pada daun untuk memintas tanah sepenuhnya.\nLangkah 2: Tunggu 5-7 hari supaya pokok menyerap dan memindahkan Zink untuk membina enzim pertumbuhan.\nLangkah 3: Kini selamat untuk memberi Fosforus yang banyak ke tanah atau melalui fertigasi. Jangan sekali-kali campur P dan Zn dalam tangki.",
    info_P_def: "Daun tua bertukar hijau gelap, ungu atau gangsa. Akar cetek, pembungaan lewat.",
    info_P_bio: "Sinergi Humik: Asid humik menyalut P, menghalangnya terkunci oleh Besi/Kalsium. Memanjangkan tempoh ketersediaan.",
    info_P_antag: "1. Injap Sehala (P vs N): P tinggi tidak menghalang N, tetapi N tinggi mencairkan P.\n\n2. Penguncian P-Zn 3 Tahap: P tinggi menjatuhkan Zink secara agresif pada tiga aspek:\n• Kimia: Kedua-duanya terikat dalam tanah membentuk batu Zink Fosfat yang tidak larut.\n• Biologi: P yang tinggi memberi isyarat kepada pokok untuk menyekat kulat mikoriza (yang diperlukan untuk mencari Zn).\n• Fisiologi: P dalaman yang tinggi memerangkap Zn di akar, menghalangnya bergerak naik melalui xilem ke daun baru.",
    info_P_syn: "1. Pembawa Tenaga (Mg): Mg mengangkut ATP. Tiada Mg = Tiada pemindahan tenaga.\n2. Pemburu Akar (N): N memacu pemanjangan akar untuk mencari P yang tidak bergerak.",
    info_P_inhib: "1. Fosfat Terkunci (Zn/Fe/Cu): P berlebihan membentuk batu zink fosfat. Punca #1 kekurangan Zink.\n2. Sekatan Akar: Sekatan fizikal pada tapak Kuprum.",
    info_K_func: "Komander Kualiti & Pengawal Osmotik. Kalium mengaktifkan lebih 60 enzim penting. Ia bertindak sebagai pam hidraulik pokok, mengawal pembukaan/penutupan stomata (ketahanan kemarau) dan mengekalkan kesegahan sel. Paling penting, K ialah kenderaan pengangkut yang mengepam fotosintat (gula) dari daun terus ke buah yang sedang membesar, menentukan saiz, berat, Brix (kemanisan) dan jangka hayat akhir.",
    info_K_comm: "Bentuk di Pasaran:\n• MOP (Kalium Klorida / 0-0-60): Paling murah dan paling biasa. Amaran: Indeks klorida tinggi. Toksik kepada tanaman sensitif (Durian, Avokado, Sitrus) menyebabkan tepi daun terbakar dan struktur tanah rosak. Elakkan sama sekali semasa berbuah.\n• SOP (Kalium Sulfat / 0-0-50): Standard Kualiti Premium. Indeks garam sangat rendah. Membekalkan K serta Sulfur (18%), yang penting untuk rasa, aroma dan minyak pati. Rahsia 'Emas Hitam' untuk rasa pahit Durian.\n• Kalium Nitrat (KNO3 / 13-0-46): Pengangkut Terpantas. Nitrat bertindak sebagai pengiring molekul, menarik K ke dalam pokok dengan serta-merta. Tiada tandingan untuk pembesaran buah yang pesat dan memulihkan kekurangan teruk.\n• Kalium Silikat: Cecair semburan daun yang sangat beralkali. Membekalkan K sambil mengeraskan dinding sel secara fizikal (fitolit) terhadap serangan perosak/kulat.",
    info_K_app: "Strategi Aplikasi: Keperluan K meningkat mendadak semasa fasa 'Pembesaran Buah'. Pokok akan mengambil K daripada daun tua secara agresif untuk menampung buah jika K tanah rendah. \n\nProtokol: Tukar kepada pembajaan K yang tinggi (nisbah N:K 1:3 atau 1:4) sejurus selepas pembentukan buah. Untuk hasil premium, sembur SOP atau KNO3 pada daun 3-4 minggu sebelum tuai untuk meningkatkan pengumpulan gula akhir dan profil rasa yang kompleks.",
    info_K_def: "Amaran Unsur Bergerak: 'Hangus Tepi' klasik. Daun tua menguning dan kemudian terbakar (perang/rapuh) di sepanjang tepi luar. Buah bersaiz kecil, kurang manis, masak tidak sekata dan bertekstur lembik berair.",
    info_K_bio: "Sinergi Rumpai Laut: Rumpai Laut (Kelp) perahan sejuk kaya dengan Kalium dan sitokinin bioaktif secara semula jadi. Mencampurkan Rumpai Laut dengan K semasa kemarau atau gelombang haba memberi isyarat kepada pokok untuk mengekalkan fungsi stomata, mengelakkan hasil merosot.",
    info_K_antag: "1. Kation Pembuli (K vs Mg/Ca): Kalium ialah ion positif yang kecil, sangat mudah bergerak dan agresif. Pokok secara semula jadi melakukan 'Penggunaan Mewah' K. Jika diberi terlalu banyak, ia mengatasi Ca++ dan Mg++ yang berat di permukaan akar, menyebabkan Magnesium (menguning) dan Kalsium (buah merekah/teras basah) terkunci dengan teruk.\n2. Sekatan Ammonium: Paras Ammonium (NH4+) yang tinggi dalam tanah akan bersaing dan menyekat penyerapan Kalium secara agresif.",
    info_K_syn: "1. Pengiring Gula (Boron): K memberikan tekanan untuk menggerakkan sap, tetapi Boron bertindak sebagai 'penjaga pintu' yang membenarkan gula merentasi membran sel ke dalam buah. Kedua-duanya mesti bekerjasama.\n2. Pembantu Pengangkutan (Besi & Mangan): K mengawal aliran air yang membawa Besi dan Mangan yang lambat bergerak naik ke kanopi.",
    info_K_inhib: "1. Penyesaran Kation (Mg/Ca): Menyesarkan Mg dan Ca di tapak pertukaran akar.\n2. Pencairan Boron: Pengembangan sel yang sangat pantas akibat K tinggi boleh mengatasi keupayaan pokok membekalkan Boron, menyebabkan teras berongga atau merekah.",
    info_Ca_func: "Simen Struktur & Agen Anti-Rekah. Kalsium membentuk 'Kalsium Pektat' dalam lamela tengah—secara literal gam yang mengikat sel-sel tumbuhan. Apabila buah membesar dengan pesat (didorong oleh air dan Kalium), dinding sel mesti meregang. Jika Kalsium tidak mencukupi, 'gam' sel ini gagal dan kulit buah terkoyak secara fizikal, menyebabkan Buah Merekah yang teruk. Ia juga menguatkan dinding sel terhadap serangan kulat dan bertindak sebagai 'Utusan Kedua', memberi amaran kepada pokok tentang tekanan haba dan kemarau.",
    info_Ca_comm: "Bentuk di Pasaran:\n• Kalsium Alkohol Gula (Poliol): Pilihan terbaik untuk mencegah buah merekah. Kalsium secara semula jadi tidak bergerak, tetapi kompleks Poliol 'memperdaya' pokok supaya menggerakkan Ca melalui floem terus ke dalam buah.\n• Kombo Cecair Ca-B-Mg: Semburan daun standard industri untuk peringkat pembiakan. Boron wajib untuk membolehkan Kalsium berfungsi (menyambung silang dinding sel), manakala Magnesium mencegah Ca yang tinggi daripada menyebabkan Mg terkunci setempat dalam buah yang sedang membesar.\n• Kalsium Nitrat: Standard fertigasi yang sangat larut. Membekalkan N-Nitrat dan Ca dengan cepat kepada akar.\n• Amino-Ca: Pilihan semburan daun yang lembut dengan penembusan pantas, mengurangkan penggunaan tenaga pokok.\n• Dolomit / Kapur Pertanian (Batu 'Dwi Fungsi'): Batu hancur yang sangat tidak larut. Mempunyai dua fungsi asas yang besar: 1) Pembetulan pH (meneutralkan asid daripada baja seperti Urea/Ammonium) dan 2) Ketepuan Bes (Ca & Mg dilepaskan perlahan). ⚠️ Amaran: JANGAN SEKALI-KALI guna Dolomit untuk nutrisi buah segera bagi menghentikan buah merekah atau reput hujung bunga.",
    info_Ca_app: "Protokol Pencegahan Buah Merekah: Kalsium HANYA bergerak ke atas bersama air (transpirasi). Buah hampir tidak bertranspirasi, jadi Kalsium yang diserap akar kebanyakannya memintas buah. Anda MESTI menyembur Kalsium daun yang mudah bergerak (cth. Ca Alkohol Gula) terus ke buah setiap 10-14 hari semasa pembesaran.\n\nProtokol Masa Dolomit: Kerana ia batu yang dilepaskan perlahan, masa aplikasi amat penting:\n1. Selepas Tuai/Pemulihan: Tabur sejurus selepas tuaian untuk memulihkan tanah yang letih dan berasid serta membina semula simpanan Ca/Mg.\n2. 2-3 Bulan Sebelum Berbunga: Tabur jauh sebelum berbunga supaya pH tanah berada pada tahap optimum untuk menyerap baja P dan K yang mahal semasa peringkat berbuah.",
    info_Ca_def: "Buah Merekah Teruk (kulit pecah semasa pembesaran). 'Teras Basah' pada durian (isi berair dan lembik). Reput hujung bunga. Kerana Ca tidak boleh bergerak dari daun tua, daun baharu muncul bengkok, herot atau sangat berkerinting. Hujung akar menjadi perang, tumpul dan mati.",
    info_Ca_bio: "Sinergi Pembawa: Asid Fulvik dan Peptida khusus mengikat ion Kalsium, meneutralkan cas positifnya yang kuat. Ini membolehkan molekul Ca yang berat menembusi kutikel daun berlilin dengan mudah ke dalam tisu pokok tanpa tersekat di permukaan daun.",
    info_Ca_syn: "1. Bata & Simen (B): Ini sinergi wajib. Kalsium membina 'bata' dinding sel, tetapi Boron ialah 'simen'nya. Jika anda menyembur Kalsium tanpa Boron, pokok tidak dapat memasukkan Ca ke dalam dinding sel, menjadikan semburan itu langsung tidak berguna. Inilah sebabnya hampir semua baja daun komersial ialah Ca+B.\n2. Trio Pembesaran (B + Mg): Semasa pembesaran buah yang pesat, Ca+B membina struktur fizikal sel, manakala Magnesium (Mg) membekalkan tenaga ATP untuk mengepam gula ke dalam sel baharu tersebut.\n3. Perisai (Si): Silikon menguatkan dinding Ca pada kutikel luar.",
    info_Ca_antag: "1. Kesesakan Kation (K/Mg): Ca tinggi (Kapur) memenuhi tapak pertukaran, menghalang K dan Mg.\n2. Kunci pH: Ca tinggi menaikkan pH, memendakkan unsur surih.",
    info_Ca_inhib: "1. Sekatan pH (Fe/Mn/Zn/B): pH tinggi > 7.0 mengunci unsur mikro.",
    info_Mg_func: "Teras Klorofil & Pakar Tekstur. Magnesium ialah atom pusat molekul klorofil—tanpanya, fotosintesis terhenti sepenuhnya. Selain menghijaukan daun, Mg ialah pam utama yang memuatkan sukrosa ke dalam floem untuk diangkut ke buah. Dalam penanaman durian premium, Mg ialah kunci utama untuk menghasilkan tekstur isi yang melekit, kaya dan berkrim seperti kastard.",
    info_Mg_comm: "Bentuk di Pasaran:\n• Kieserit / Magnesium Sulfat (Epsom): Sangat larut, bertindak pantas. Sesuai untuk semburan daun bagi memintas akar yang terkunci, dan membekalkan Sulfur penting untuk perkembangan rasa/aroma yang kompleks.\n• Magnesium Nitrat: Pilihan fertigasi premium. Nitrat bertindak sebagai pembawa, menarik Mg ke dalam pokok secara sinergi. Sangat baik untuk pucuk vegetatif yang pantas.\n• Dolomit: Ketepuan bes lepasan perlahan. Meneutralkan asid tanah tetapi tidak memberi nutrisi segera kepada buah yang sedang membesar.\n• Magnesium Oksida (MgO): Kebanyakannya tidak larut. Digunakan semata-mata sebagai bahan pemulih tanah lepasan perlahan.",
    info_Mg_app: "Strategi Aplikasi (Memintas 'Kelaparan Tersembunyi'): Semasa pembesaran buah, petani membaja Kalium (K) dalam jumlah besar untuk membesarkan buah. Kerana K ialah ion 'pembuli' yang agresif, ia mengunci Mg sepenuhnya di akar. Walaupun ujian tanah menunjukkan Mg tinggi, pokok sebenarnya kebuluran.\n\nProtokol Durian Premium: Untuk mengekalkan 'Kulit Hijau' yang sangat diingini semasa tuaian (mencegah kekuningan pramatang) dan memastikan isi berkrim, anda MESTI memintas akar. Sembur Magnesium Sulfat pada daun setiap 10-14 hari semasa fasa akhir pembesaran buah. Sasarkan nisbah K:Mg tanah kira-kira 2:1 hingga 3:1.",
    info_Mg_def: "Amaran Unsur Bergerak: 'Klorosis Antara Urat' klasik. Daun tua menjadi kuning terang di antara urat, meninggalkan bentuk 'mata anak panah hijau' atau segi tiga yang jelas di pangkal daun. Pada buah premium seperti Durian, kekurangan Mg menyebabkan kulit pucat/kekuningan sebelum matang sepenuhnya, dan isi yang berair, tawar serta tiada tekstur melekit premium.",
    info_Mg_syn: "1. Pam Fosforus (P): Mg membawa P/ATP.\n2. Kilang Hijau (N): Sinergi untuk klorofil.",
    info_Mg_antag: "1. Persengketaan K/Mg: K merencat Mg dengan kuat.\n2. Rencatan Ca: Ca tinggi memadatkan tanah, menyekat Mg.",
    info_Mg_inhib: "1. Persaingan Kation (Ca/K): Mg tinggi merencat pengambilan Ca dan K.",
    info_S_func: "Arkitek Rasa & Aroma. Sulfur ialah komponen teras asid amino Sisteina dan Metionina, iaitu blok binaan sebatian organik meruap (VOC). Dalam durian premium, sebatian berasaskan sulfur ini menentukan bau yang kuat, aroma kompleks dan nota alkohol 'seperti gas' yang menjadi ciri varieti seperti Musang King dan Black Thorn. Ia juga membentuk jambatan disulfida yang memberi integriti struktur kepada protein tumbuhan.",
    info_S_comm: "Bentuk di Pasaran:\n• SOP (Kalium Sulfat / 0-0-50 + 18% S): Pilihan terbaik untuk buah premium. Membekalkan K untuk saiz buah dan S untuk rasa, tanpa sebarang Nitrogen yang merosakkan tekstur isi.\n• Kieserit / Garam Epsom (Magnesium Sulfat): Sangat larut, membekalkan Mg untuk tekstur berkrim dan S untuk rasa pahit serentak.\n• Sulfur Elemen (90% S): Sangat tidak larut. Memerlukan bakteria tanah (Thiobacillus) untuk menukarkannya perlahan-lahan kepada sulfat dalam tempoh beberapa bulan. Sangat mengasidkan tanah.\n• Ammonium Sulfat (21% N, 24% S): Sangat baik untuk penghijauan vegetatif awal tetapi mesti dielakkan semasa peringkat akhir pematangan buah.\n• Gipsum (CaSO4): Pemulih tanah yang hebat yang membekalkan S-sulfat dan Kalsium tanpa mengubah pH tanah.",
    info_S_app: "Protokol Durian Premium Terbaik (Triad K-Mg-S):\nUntuk mencapai profil 'Emas Hitam' yang sangat didambakan (isi yang sangat pahit, melekit, berkrim dengan aroma kuat), petani mesti menguasai gabungan K:Mg:S dalam 30 hari terakhir perkembangan buah.\n\n• Nisbah: Sasarkan nisbah K : Mg : S kira-kira 4 : 1 : 2 dalam aplikasi peringkat akhir.\n• Mekanisme: Kalium (K) memacu gula dan saiz buah. Magnesium (Mg) membina tekstur kastard yang tebal dan berkrim. Sulfur (S) menukar gula tersebut kepada sebatian sulfur meruap yang menghasilkan rasa 'pahit' dan aroma yang dicari.\n• Strategi: 30 hari sebelum buah gugur, hentikan semua Nitrogen. Tukar sepenuhnya kepada SOP (Sulfat Kalium) dan semburan daun Magnesium Sulfat.",
    info_S_def: "Amaran Unsur Tidak Bergerak: Tidak seperti Nitrogen, Sulfur tidak mudah bergerak dari daun tua ke daun baharu. Kekurangan kelihatan sebagai warna hijau pucat/kekuningan pada daun PALING BAHARU dahulu. Pada buah, sulfur rendah menghasilkan isi yang tawar, hanya manis, dan langsung tiada aroma kompleks premium serta rasa pahit tersendiri.",
    info_S_bio: "Sinergi Asid Amino: Menggunakan Sulfur bersama Asid Amino kaya Metionina bertindak sebagai penguat besar untuk penghasilan etilena, secara semula jadi mempercepatkan pematangan yang seragam dan memperhebat profil rasa akhir.",
    info_S_syn: "1. Kembar Nitrogen: S diperlukan untuk memetabolismekan N kepada protein. Tanpa S, Nitrogen terkumpul sebagai nitrat toksik dalam daun, menarik perosak.\n2. Triad Rasa (K + Mg + S): Bersinergi untuk menukar karbohidrat ringkas kepada minyak pati kompleks dan rasa meruap.",
    info_S_antag: "1. Pertembungan Molibdat: Kepekatan Sulfat (SO4²⁻) yang tinggi bersaing kuat dengan Molibdat (MoO4²⁻) untuk pengambilan akar.\n2. Persaingan Nitrat: Sulfat tinggi boleh menyekat pengambilan Nitrat buat sementara.",
    info_S_inhib: "1. Mo Terkunci: Merencat terus pengambilan Mo di membran akar.\n2. Perangkap Pengasidan: Penggunaan berat Sulfur Elemen atau Ammonium Sulfat akan menjatuhkan pH tanah secara mendadak, mengunci makronutrien.",
    info_Si_func: "Perisai Tekanan Terbaik. Walaupun dahulunya 'dilupakan' kerana tidak benar-benar penting untuk hidup asas, Silikon amat kritikal untuk kemandirian di ladang. Akar menyerapnya dan mengangkutnya ke daun, di mana ia berpolimer menjadi 'Fitolit' pepejal (struktur kaca/opal mikroskopik) betul-betul di bawah kutikel. Perisai dua lapis ini secara fizikal menghalang hifa kulat daripada menembusi dan mematahkan mandibel serangga pencucuk-penghisap (hama, thrips, afid). Ia juga memaksa daun berdiri tegak (memaksimumkan penangkapan cahaya) dan mengawal stomata dengan ketat untuk mencegah kehilangan air semasa panas melampau.",
    info_Si_comm: "Bentuk di Pasaran:\n• Asid Ortosilisik / Monosilisik (H4SiO4): Standard Premium. Inilah SATU-SATUNYA bentuk yang boleh diserap terus oleh pokok. Sangat stabil, bertindak pantas melalui semburan daun, dan tidak menaikkan pH tangki secara mendadak.\n• Kalium Silikat (K2SiO3): Pilihan tradisional. Sangat beralkali (pH 10-11). Bagus untuk menambah K dan Si, tetapi terkenal dengan bencana campuran tangki (bertukar menjadi gel pepejal seperti kaca apabila dicampur dengan asid atau kalsium).\n• Kalsium Silikat (Sanga/Wolastonit): Bahan pemulih tanah berbutir lepasan perlahan. Sangat baik untuk meneutralkan tanah yang sangat berasid dan mengunci Aluminium toksik.\n• Abu Sekam Padi / Biochar Buluh: Sumber silika amorfus organik yang murah. Memerlukan tindakan mikrob untuk menjadi tersedia kepada pokok.",
    info_Si_app: "Strategi Aplikasi (Mimpi Ngeri Campuran Tangki): Silikon bersifat agresif secara kimia. \n\nPeraturan Emas untuk K-Silikat: JANGAN SEKALI-KALI campur Kalium Silikat dengan Kalsium, Magnesium, atau baja/racun berasid tanpa pencairan melampau, atau tangki anda akan serta-merta menjadi jeli, merosakkan muncung sembur secara kekal. \nProtokol: Sentiasa masukkan Silikat PALING AKHIR ke dalam tangki yang sangat cair, atau lebih baik lagi, semburkannya bersendirian. Aplikasi dengan banyak menjelang musim kering/panas, atau sejurus sebelum jangkaan peningkatan tekanan perosak/kulat.",
    info_Si_def: "Kelemahan Tersembunyi: Pokok tidak akan mati tanpanya, tetapi menjadi 'sasaran mudah'. Simptom termasuk batang lemah dan terkulai (rebah), daun layu yang sukar menangkap cahaya matahari, dan kerentanan teruk secara tiba-tiba terhadap kulapuk berserbuk, hawar dan serangan hama. Pokok akan layu jauh lebih cepat semasa panas tengah hari.",
    info_Si_bio: "Sinergi Biostimulan: Menggabungkan Asid Ortosilisik stabil dengan ekstrak Kelp (Rumpai Laut) mewujudkan 'Perisai Kemarau & Haba' terbaik, mengekalkan stomata aktif dan mencegah lecur matahari.",
    info_Si_syn: "1. Dinding Berganda (Ca): Silikon dan Kalsium bekerjasama. Ca ialah simen di antara sel, manakala Si ialah perisai kaca di luar.\n2. Penangkapan Cahaya (N): Si mengekalkan daun besar yang kaya Nitrogen tegak dengan kukuh, mencegah teduhan sendiri dan memaksimumkan fotosintesis.",
    info_Si_antag: "1. Pertembungan Fosforus: Dalam tanah, anion silikat dan anion fosfat bersaing untuk tapak pengikatan yang sama. Aplikasi Si yang tinggi sebenarnya boleh membebaskan P tanah yang terkunci, tetapi Si yang melampau mungkin bersaing dengan pengambilan P.",
    info_Si_inhib: "1. Kesan Jeli (Campuran Tangki): Silikat cecair mempunyai rencatan/ketidakserasian yang besar dengan pekatan berasid dan kation logam (Ca, Mg, Fe), serta-merta membentuk mendakan gel yang tidak larut.",
    info_Fe_func: "Arkitek Klorofil & Pemangkin Respirasi. Walaupun Magnesium ialah pusat molekul klorofil, Besi ialah alat wajib yang diperlukan untuk membinanya. Tanpa Besi, pokok tidak dapat mensintesis klorofil, menyebabkan kegagalan tenaga sepenuhnya. Ia ialah pemacu teras Rantai Pengangkutan Elektron (respirasi sel) dan amat penting untuk asimilasi nitrogen (menukar nitrat toksik kepada asid amino yang boleh digunakan).",
    info_Fe_comm: "Bentuk di Pasaran:\n• Fe-EDDHA (Besi Merah): Penyelamat tanah tahan lasak. Sangat stabil sehingga pH 10.0. SATU-SATUNYA pilihan berkesan untuk aplikasi tanah pada tanah ber-pH tinggi atau berkapur (batu kapur). Mahal tetapi menjamin pengambilan.\n• Fe-DTPA (Besi Kuning): Stabil sehingga pH 7.5. Standard global untuk hidroponik dan tanah neutral.\n• Fe-EDTA: Tidak stabil melebihi pH 6.5. Jika digunakan pada tanah beralkali, ia serta-merta melepaskan Besi dan mengikat Kalsium pula. Paling sesuai untuk semburan daun sahaja.\n• Ferus Sulfat: Murah, tetapi 'telanjang' secara kimia. Terkunci serta-merta dalam kebanyakan tanah. Berisiko tinggi melecurkan daun jika disembur tanpa penimbal organik.",
    info_Fe_app: "Strategi Aplikasi (Perangkap pH & UV): Besi ialah unsur mikro yang paling sukar diurus kerana ia terkunci serta-merta dalam tanah beralkali (pH > 7.0) dan persekitaran tinggi fosforus. \n\nProtokol: Jika pH tanah tinggi, pintas akar sepenuhnya dengan semburan daun (Fe-EDTA atau Amino-Fe). ⚠️ Amaran UV: Kelat Besi sintetik mengalami fotodegradasi (cahaya UV memutuskan ikatan kelat). SENTIASA sembur Besi pada daun pada lewat petang atau awal pagi.",
    info_Fe_def: "Amaran Unsur Tidak Bergerak: 'Klorosis Antara Urat' yang teruk pada daun PALING BAHARU. Tisu menjadi kuning pucat atau putih sepenuhnya ('luntur'), tetapi urat kekal hijau gelap yang jelas dan kontras. Ini berlaku kerana Besi tidak dapat diambil semula dari daun tua.",
    info_Fe_bio: "Sinergi Pembawa: Asid Fulvik dan Asid Amino bertindak sebagai agen pengkelat semula jadi. Mencampurkan Ferus Sulfat dengan Asid Amino melindungi Besi daripada terkunci, mencegah daun melecur, dan memudahkan kemasukan pantas melalui stomata daun.",
    info_Fe_syn: "1. Pengiring Pengangkutan (K): Kalium mengawal aliran air yang secara fizikal membawa Besi yang berat dan tidak bergerak ke pucuk baharu.\n2. Pengasid (S): Sulfur menurunkan pH mikro di zon akar, secara semula jadi membuka kunci Besi asli dalam tanah.",
    info_Fe_antag: "1. Persaingan Kembar (Fe lwn Mn): Besi dan Mangan kelihatan sama secara kimia bagi akar pokok. Mn tinggi menyekat sepenuhnya pengambilan Fe, dan sebaliknya. Kekalkan nisbah tanah Fe:Mn ≈ 2:1 dengan ketat.\n2. Perangkap Kalsium: Ca tinggi (tanah batu kapur/beralkali) mengehadkan keterlarutan Besi.",
    info_Fe_inhib: "1. Fosfat Mengunci: Aplikasi Fosforus tinggi mengikat Besi asli tanah menjadi Besi Fosfat, sejenis batu yang tidak larut.\n2. Ketepuan Logam Berat: Zink atau Kuprum berlebihan secara fizikal menduduki saluran pembawa akar, mengunci Besi.",
    info_Zn_func: "Pengawal Atur Tumbesaran Utama & Arkitek Debunga. Zink ialah prekursor penting kepada Triptofan, blok binaan Auksin (hormon tumbesaran utama pokok). Ia menentukan pemanjangan ruas dan pengembangan daun. Bagi pembiakan, Zink ialah keperluan teras untuk sintesis DNA/RNA semasa pembahagian sel yang pesat ketika berbunga. Ia sangat menentukan daya hidup debunga, memacu pemanjangan tiub debunga, dan mencegah bunga gugur secara besar-besaran.",
    info_Zn_comm: "Bentuk di Pasaran:\n• Zn-EDTA: Sangat stabil dalam kebanyakan tanah (sehingga pH 7.5). Sangat baik untuk fertigasi dan semburan daun awal.\n• Zink Sulfat: Murah dan berkesan, tetapi cepat memendak dalam tanah ber-pH tinggi atau tinggi Fosforus.\n• Kelat Asid Amino Zink: Penembusan daun paling pantas. Penting untuk semburan penyelamat pra-berbunga kerana asid amino terus membekalkan tenaga untuk proses berbunga yang intensif.\n• Zink Oksida: Debu batu yang tidak larut. Ketersediaan sangat perlahan, hanya berguna sebagai asas jangka panjang dalam tanah berasid.",
    info_Zn_app: "Strategi Aplikasi (Tempoh Pra-Berbunga): Kerana Zink banyak digunakan semasa berbunga dan terus menentukan kesihatan debunga, ia MESTI dimuatkan ke dalam pokok sebelum bunga kembang. \n\nProtokol: Sembur Zn-Amino atau Zn-EDTA pada daun semasa peringkat pra-berbunga (selalunya bersama Boron). ⚠️ Perangkap Fosforus: Jika membaja P tinggi (seperti MKP) untuk merangsang bunga, anda mesti membaja Zink 7-10 hari SEBELUM Fosforus untuk mengelakkan penguncian kimia kekal (Zink Fosfat) dalam tanah dan tisu.",
    info_Zn_def: "Amaran Unsur Tidak Bergerak: Sindrom 'Daun Kecil' klasik (daun baharu kekal kecil) dan 'Roset' (ruas gagal memanjang, menyebabkan daun berkelompok). Kegagalan Pembiakan: Bunga gugur secara besar-besaran, debunga lemah/mandul, dan buah senget atau cacat akibat pendebungaan tidak lengkap.",
    info_Zn_bio: "Sinergi Asid Amino: Menggabungkan Zink dengan Asid Amino bertindak sebagai pemecut berganda. Asid amino melindungi Zink daripada terkunci, membawanya serta-merta menembusi kutikel daun, dan membekalkan Triptofan yang tepat diperlukan untuk memulakan penghasilan Auksin.",
    info_Zn_syn: "1. Kembar Tumbesaran (N): Nitrogen memacu penghasilan sel, tetapi Zink (melalui Auksin) mengarahkan sel tersebut berkembang ke saiz penuh yang sihat.\n2. Pembiakan (B): Zink membina butir debunga yang sihat, manakala Boron membina tiub yang dilaluinya. Kedua-duanya wajib untuk pembentukan buah.",
    info_Zn_antag: "1. Perangkap Fosfat (P): Antagonisme paling terkenal dalam agronomi. Fosforus tinggi serta-merta mengikat Zink dalam tanah, membentuk batu Zink Fosfat yang tidak larut. Sentiasa membaja Zink sebelum Fosforus tinggi.\n2. Persaingan Logam (Fe/Cu/Mn): Zink bersaing dengan logam berat lain untuk saluran penyerapan akar.",
    info_Zn_inhib: "1. Sekatan Besi/Kuprum: Aplikasi Zink yang terlalu berlebihan akan menepukan sepenuhnya saluran pembawa akar, mengunci Besi dan Kuprum, lalu menyebabkan kekurangan buatan.",
    info_B_func: "Arkitek Bunga & Penjaga Pintu Gula. Boron ialah tunjang utama pembiakan. Apabila butir debunga hinggap pada bunga, ia mesti menumbuhkan 'tiub debunga' ke dalam ovari untuk mensenyawakan biji. Boron secara fizikal membina dan mengarahkan tiub ini; tanpanya, tiub pecah, persenyawaan gagal, dan pokok menggugurkan bunga dengan banyak. Selain itu, Boron bertindak sebagai 'simen' yang menyambung silang Kalsium pektat dalam dinding sel, dan sebagai penjaga pintu yang membenarkan gula merentasi membran sel ke dalam buah.",
    info_B_comm: "Bentuk di Pasaran:\n• Kombo Cecair Ca-B-Mg: Standard industri. Boron jarang digunakan bersendirian semasa berbuah. Ia digabungkan dengan Kalsium ('bata') dan Magnesium ('pam tenaga') untuk mencegah buah merekah.\n• Boron Poliol / Alkohol Gula: Standard Premium untuk berbunga. Boron secara semula jadi tidak bergerak, tetapi kompleks ini 'memperdaya' pokok supaya menggerakkan Boron dengan bebas melalui floem terus ke bunga.\n• Natrium Borat (Solubor - 20% B): Sangat larut, standard industri untuk semburan daun dan fertigasi. Amaran: Menaikkan pH tangki dengan ketara.\n• Asid Borik (17% B): Lebih murah, berasid, tetapi memerlukan air suam untuk larut dengan sempurna.\n• Kalsium Borat (Uleksit): Bentuk batu lepasan perlahan yang digunakan semata-mata untuk ketepuan bes tanah jangka panjang.",
    info_B_app: "Strategi Aplikasi (Dua Tempoh Kritikal):\n1. Tempoh Pra-Berbunga: Boron bergerak dalam tanah melalui air. Jika tanah kering, pengambilan akar adalah sifar. Anda MESTI menyembur Boron pada daun 2-4 minggu SEBELUM bunga kembang supaya pokok dapat menyimpannya dalam putik.\n2. Pembesaran Buah (Pencegahan Merekah): Sembur kombo Ca+B terus ke buah setiap 10-14 hari untuk membina keanjalan kulit.\n⚠️ Amaran Ketoksikan: Boron mempunyai margin keselamatan paling sempit berbanding semua nutrien. Sukat dos dengan tepat; berlebihan akan melecurkan daun dengan teruk.",
    info_B_def: "Amaran Unsur Tidak Bergerak: Kegagalan pembiakan yang teruk. Bunga gugur beramai-ramai tanpa menjadi buah. Buah yang bertahan selalunya senget, cacat, atau berbentuk 'C' (akibat pendebungaan biji tidak lengkap). Simptom vegetatif termasuk kematian titik tumbuh (meristem apeks), batang berongga, dan kulit buah yang tebal, bergabus dan merekah.",
    info_B_bio: "Sinergi Alkohol Gula (Poliol): Boron secara semula jadi tidak bergerak langsung di dalam pokok. Namun, formulasi Boron dengan Alkohol Gula (Manitol/Sorbitol) bertindak sebagai 'jalan pintas' biologi, membolehkan Boron memasuki sap floem dan bergerak aktif dari daun terus ke putik bunga yang memerlukannya.",
    info_B_syn: "1. Sinergi Wajib (Ca): Kalsium membina dinding sel, tetapi Boron ialah 'simen' yang menyambung silang Kalsium Pektat secara kimia. Tanpa Boron, Kalsium terapung sia-sia dalam tisu dan tidak dapat mencegah buah merekah. Inilah sebabnya baja daun komersial sentiasa menggabungkan Ca+B.\n2. Kombo Terbaik (Ca + B + Mg): Selalunya dijual sebagai trio. Sementara Ca+B membina struktur fizikal buah yang membesar, Magnesium (Mg) ditambah untuk membekalkan tenaga (ATP) yang diperlukan bagi mengepam gula ke dalam buah, dan mencegah Kalsium tinggi daripada mengunci Magnesium setempat.\n3. Saluran Gula (K): Kalium mewujudkan tekanan untuk menggerakkan sap, manakala Boron membuka pintu membran untuk membenarkan gula masuk ke dalam buah.",
    info_B_antag: "1. Kalsium Mengunci (pH): Paras Kalsium tinggi dalam tanah (akibat pengapuran berlebihan) akan memerangkap Boron dengan agresif, menjadikannya tidak tersedia.\n2. Kesan Pencairan (N/K): Tumbesaran vegetatif yang pesat akibat Nitrogen atau Kalium tinggi secara fizikal mencairkan Boron yang tersedia ke atas terlalu banyak tisu, menyebabkan kekurangan mendadak di hujung tumbesaran.",
    info_B_inhib: "1. Fitotoksisiti Melampau: Ketoksikan Boron sangat biasa. Aplikasi berlebihan menyebabkan nekrosis (lecur) teruk bermula di hujung/tepi daun, merebak dengan cepat ke dalam sehingga daun gugur.",
    info_Mn_func: "Pemecah Air & Pengaktif Pertahanan. Mangan ialah enjin kritikal Kompleks Pembebasan Oksigen (OEC) dalam Fotosistem II. Ia memecahkan molekul air semasa fotosintesis untuk menjana elektron yang menggerakkan seluruh pokok. Tanpa Mn, fotosintesis terhenti pada langkah pertama. Ia juga memacu kitaran TCA (respirasi sel) dan banyak terlibat dalam sintesis Lignin, yang mengeraskan dinding sel dan akar pokok terhadap serangan patogen.",
    info_Mn_comm: "Bentuk di Pasaran:\n• Mangan Sulfat (MnSO4): Standard global. Sangat larut, kos efektif, dan bertindak sangat pantas melalui semburan daun untuk menyelamatkan pokok yang kekurangan.\n• Mn-EDTA: Kelat sintetik yang stabil sehingga pH 7.0. Paling sesuai digunakan dalam sistem fertigasi pada tanah kurang subur untuk mengelakkan Mn terkunci dengan zarah tanah.\n• Mangan Oksida (MnO): Debu batu yang sangat tidak larut. Langsung tidak berguna sebagai penyelesaian segera; ia hanya berfungsi sebagai bahan pemulih lepasan perlahan berbilang tahun dalam tanah yang sangat berasid.",
    info_Mn_app: "Strategi Aplikasi (Jongkang-Jongket pH): Mangan sangat sensitif terhadap pH tanah.\n\n• pH Tinggi (> 7.0) Terkunci: Dalam tanah beralkali atau berkapur, Mn cepat teroksida menjadi bentuk pepejal yang tidak tersedia. Anda MESTI memintas tanah dan menggunakan semburan daun Mangan Sulfat.\n• Perangkap Ketoksikan pH Rendah (< 5.0): Dalam tanah yang sangat berasid, Mn menjadi sangat larut, membanjiri akar dan menyebabkan Ketoksikan Mangan yang teruk (bintik daun, berkedut, gugur—sering disalah diagnosis sebagai penyakit kulat). Penawarnya BUKAN menambah nutrien, tetapi menabur Kapur Dolomit untuk menaikkan pH dan mengunci semula Mn berlebihan dengan selamat ke dalam tanah.",
    info_Mn_def: "Amaran Unsur Tidak Bergerak: Muncul pada daun BAHARU dahulu. Menyebabkan klorosis antara urat yang 'Berbintik-bintik' atau 'Bercorak Petak'. Tidak seperti kekurangan Besi (yang mempunyai urat hijau yang sangat jelas berlatarkan tisu putih), kekurangan Mn kelihatan kabur dan tersebar, dengan bintik hijau pucat/kuning merebak di antara urat.",
    info_Mn_bio: "Sinergi Fulvik: Menggunakan Mangan bersama Asid Fulvik mencegah ion Mn daripada teroksida awal di permukaan daun, memastikan kemasukan pantas melalui stomata dan penggunaannya.",
    info_Mn_syn: "1. Pembina Perisai (Cu): Mn dan Kuprum bekerjasama secara sinergi untuk mensintesis Lignin, mengeraskan kayu dan melindungi akar daripada patogen bawaan tanah.\n2. Pengaktifan Enzim (K): Kalium dan Mn bersama-sama mengaktifkan beberapa enzim utama respirasi dan pemindahan tenaga.",
    info_Mn_antag: "1. Persaingan Kembar (Mn lwn Fe): Besi dan Mangan ialah 'kembar' kimia. Kedua-duanya bersaing sengit untuk saluran penyerapan akar yang sama. Pemberian Mn berlebihan akan menyebabkan kebuluran Besi yang teruk, dan sebaliknya. Kekalkan nisbah tanah Fe:Mn ≈ 2:1 dengan ketat.\n2. Sekatan Kalsium: Ca yang tinggi (batu kapur) sangat menekan pengambilan Mn di zon akar.",
    info_Mn_inhib: "1. Kebuluran Besi: Mn berlebihan menghentikan sepenuhnya pengangkutan Besi di dalam pokok.\n2. Penggantian Magnesium: Ketoksikan Mn yang melampau boleh menggantikan Magnesium dalam daun, sekali gus memusnahkan klorofil.",
    info_Cu_func: "Pembina Lignin & Pemangkin Imun. Kuprum ialah logam berat penting yang bertindak sebagai pemangkin utama untuk mensintesis Lignin—'kayu' yang memberi dahan kekuatan fizikal dan ketegaran struktur. Tanpanya, pokok menghasilkan dahan yang lembut, lemah dan 'bergetah' yang mudah patah di bawah berat buah. Kuprum juga komponen utama Polifenol Oksidase, enzim yang bertanggungjawab untuk tindak balas imun tumbuhan (fitoaleksin) serta pemerangan/penyembuhan luka yang pantas.",
    info_Cu_comm: "Bentuk Pasaran & Realiti Logam Berat:\n• Racun Kulat Kuprum (Hidroksida/Oksiklorida): Digunakan secara meluas untuk kawalan penyakit. Kerana ia menyalut daun, ia terurai perlahan dan membekalkan kuprum 'nutrisi' secara berterusan. Kebun yang menggunakannya jarang memerlukan baja Cu tambahan.\n• Kuprum Sulfat (Bluestone): Sangat larut, tetapi bertindak sebagai garam logam berat yang keras. Risiko melecur sangat tinggi kecuali dineutralkan dengan kapur (menghasilkan campuran Bordeaux).\n• Cu-EDTA: Bentuk paling selamat untuk fertigasi atau semburan daun bagi tujuan nutrisi semata-mata, kerana kelat melindungi logam berat daripada menyebabkan lecur tisu serta-merta.",
    info_Cu_app: "Strategi Aplikasi (Ancaman Ketoksikan): Kerana Kuprum ialah logam berat, ia TIDAK terurai dalam tanah; ia terkumpul selama-lamanya. Kebun yang menggunakan racun kulat Kuprum selama berdekad-dekad sering mengalami ketoksikan tanah yang teruk, yang membantutkan akar dan membunuh mikrob/cacing tanah yang bermanfaat.\n\nProtokol: Bergantung pada program racun kulat biasa anda untuk keperluan Cu. Hanya gunakan Cu-EDTA secara bersasar jika ujian tanah mengesahkan kekurangan sebenar (biasanya hanya di tanah baharu atau tanah gambut/organik tinggi).",
    info_Cu_def: "Amaran Unsur Tidak Bergerak: Kegagalan struktur yang teruk pada pertumbuhan baharu. Dahan menjadi luar biasa lembut, bergetah, dan membengkok membentuk 'S' atau terkulai teruk (kerana tiada lignin). Menyebabkan 'Mati Rosot' (Dieback) yang teruk di mana hujung pucuk baharu mati dan menjadi hitam. Kulit batang dan buah mungkin melepuh atau mengeluarkan poket gam (Exanthema).",
    info_Cu_bio: "⚠️ Perangkap Maut Biostimulan: JANGAN SEKALI-KALI mencampurkan racun kulat Kuprum dengan Asid Amino atau Peptida. Asid amino bertindak sebagai 'Kuda Troy', menarik logam berat Kuprum terus menembusi kutikel daun dan masuk ke sitoplasma sel serta-merta, menyebabkan fitotoksisiti yang dahsyat (lecur daun teruk dan keguguran daun).",
    info_Cu_syn: "1. Pembina Kayu (Mn): Kuprum dan Mangan ialah pasangan terbaik untuk mensintesis lignin dan mengeraskan pokok secara fizikal terhadap penembusan kulat.\n2. Pemprosesan Protein (N): Diperlukan untuk metabolisme Nitrogen dengan betul.",
    info_Cu_antag: "1. Persengketaan Logam Berat (Zn/Fe/Mn): Kuprum tanah yang berlebihan bersaing kuat untuk tapak penyerapan akar, menyekat Zink, Besi dan Mangan secara agresif.\n2. Perangkap Bahan Organik Tinggi: Kuprum terikat lebih kuat pada bahan organik tanah (humus/gambut) berbanding mikronutrien lain, menyebabkan penguncian yang teruk.",
    info_Cu_inhib: "1. Nekrosis Hujung Akar: Logam berat Kuprum yang berlebihan dalam tanah membantutkan, menebalkan dan membunuh hujung akar yang halus secara kekal, memusnahkan keupayaan pokok mencari nutrien.\n2. Sekatan Fosforus: P tanah yang tinggi mengurangkan keterlarutan Kuprum.",
    info_Mo_func: "Penukar Nitrogen & Pemboleh Protein. Molibdenum ialah kofaktor logam penting bagi dua enzim utama: Nitrat Reduktase dan Nitrogenase. Apabila pokok menyerap Nitrat (NO3) dari tanah, ia tidak boleh menggunakannya secara terus. Ia MESTI menggunakan Nitrat Reduktase untuk menukar NO3 kepada Ammonium (NH4) sebelum membina asid amino. Tanpa Mo, proses ini terhenti. Nitrat terkumpul dalam daun ke tahap toksik (menarik perosak), sementara pokok pada masa yang sama kebuluran protein. Pada kekacang, Mo wajib untuk bakteria mengikat nitrogen dari udara.",
    info_Mo_comm: "Bentuk Pasaran:\n• Natrium Molibdat (39% Mo): Standard industri global. Sangat larut. Kerana pokok memerlukan Mo dalam jumlah yang amat sedikit, ia biasanya diberi dalam dos mikro (gram sehektar).\n• Ammonium Molibdat (54% Mo): Alternatif berkepekatan lebih tinggi dan sangat larut.\n💡 Keanehan pH: Mo ialah SATU-SATUNYA mikronutrien yang menjadi LEBIH tersedia di tanah beralkali dan terkunci sepenuhnya di tanah berasid (pH < 5.5).",
    info_Mo_app: "Strategi Aplikasi (Peraturan Dos Mikro): Pokok memerlukan Molibdenum dalam bahagian per bilion. \n\nProtokol: Di tanah sangat berasid di mana Mo terkunci, semburan daun Natrium Molibdat ialah kaedah penyelamat paling cekap. Ia juga digunakan secara meluas sebagai rawatan biji benih kekacang untuk memperkasa nodul akar bagi pengikatan Nitrogen. \n⚠️ Amaran: Pemberian berlebihan jarang toksik kepada pokok itu sendiri, tetapi menyebabkan kekurangan kuprum yang membawa maut (Molibdenosis) pada haiwan ruminan yang meragut tanaman tersebut.",
    info_Mo_def: "Amaran Unsur Bergerak: Kerana Mo berkait sepenuhnya dengan pemprosesan Nitrogen, kekurangannya kelihatan sama seperti kekurangan N (daun tua hijau pucat/kuning). Namun, tanda uniknya termasuk 'Whiptail' (daun berpintal, memanjang dan cacat) serta lecur tepi daun (disebabkan nitrat toksik yang tidak diproses membakar tepi daun dari dalam).",
    info_Mo_syn: "1. Kunci Nitrogen (N): Mo membuka kunci Nitrogen. Memberi baja Nitrat yang banyak tanpa Mo yang mencukupi umpama memberi pokok makanan yang tidak dapat dihadamkan.\n2. Tarikan Fosforus (P): Paras Fosforus yang tinggi dalam tanah meningkatkan keupayaan akar menyerap Molibdat.",
    info_Mo_antag: "1. Perisai Sulfat (S): Ion Molibdat (MoO4²⁻) dan ion Sulfat (SO4²⁻) hampir sama dari segi saiz dan cas elektrik. Pemberian Sulfur yang banyak akan mengatasi Mo secara agresif untuk masuk ke akar, menyebabkan kekurangan Mo yang teruk.",
    info_Mo_inhib: "1. Penguncian Tanah Berasid: pH tanah di bawah 5.5 menyebabkan oksida besi dan aluminium mengikat Molibdat menjadi batuan tidak larut.\n2. Persengketaan Kuprum: Paras Mo yang sangat tinggi boleh menghadkan ketersediaan Kuprum dalam tisu pokok.",
    info_Cl_func: "Pengimbang Osmotik. Klorin (diserap sebagai Klorida, Cl⁻) ialah mikronutrien penting untuk mengawal pembukaan stomata, mengekalkan turgor sel (tekanan air) dan mengimbangi cas elektrik dalam pokok. Ia juga memainkan peranan kecil tetapi penting dalam fotosintesis (membantu proses pemecahan air dalam Fotosistem II). Walaupun kebanyakan tanaman berdaun lebar hanya memerlukannya dalam jumlah surih yang amat kecil, sesetengah tanaman tahan garam sangat bergantung kepadanya untuk pengurusan air.",
    info_Cl_comm: "Bentuk Pasaran & Ancaman Klorida:\n• MOP (Muriate of Potash / KCl): Mengandungi ~47% Klorida. Ia sumber Kalium paling murah, tetapi muatan Klorida yang besar sangat toksik kepada tanaman sensitif.\n• SOP (Sulfate of Potash): Alternatif selamat dan rendah klorida.\n⚠️ Perangkap Durian: Durian, avokado dan sitrus adalah 'Fobia Klorida'. Kerana tiada mekanisme genetik untuk menyingkirkan Cl di akar, ia terkumpul dengan cepat dalam daun. Ini menyebabkan lecur hujung daun yang teruk (lecur tepi), keguguran daun pramatang, dan merosakkan tekstur berkrim serta rasa kompleks buah premium.",
    info_Cl_app: "Strategi Aplikasi (Mengikut Tanaman):\n• Pembenci Klorida (Durian, Sitrus, Beri, Tembakau): ELAKKAN MOP SAMA SEKALI. Anda mesti menggunakan SOP (Sulfate of Potash) atau Kalium Nitrat untuk membekalkan K tanpa muatan Cl yang toksik.\n• Penggemar Klorida (Kelapa Sawit, Kelapa, Bit Gula, Saderi): Tanaman ini memerlukan Klorida dalam jumlah besar untuk mengawal tekanan osmotik dan memaksimumkan hasil. Bagi mereka, MOP yang murah sebenarnya lebih baik dari segi agronomi berbanding SOP.",
    info_Cl_def: "Sangat jarang berlaku secara semula jadi, kerana hujan, air pengairan dan bayu laut pantai biasanya membekalkan lebih daripada mencukupi. Jika kekurangan, daun akan layu secara tiba-tiba di bahagian tepi (walaupun tanah basah sepenuhnya), dan akar menjadi sangat bercabang tetapi pendek dan tebal.",
    info_Cl_syn: "1. Pasangan Osmotik (K): Klorida bekerja terus dengan Kalium untuk membuka dan menutup stomata, mengawal kehilangan air pokok semasa tekanan haba.\n2. Pemecah Air (Mn): Bekerja bersama Mangan dalam kloroplas untuk memacu fotosintesis.",
    info_Cl_antag: "1. Perang Nitrat: Klorida (Cl⁻) dan Nitrat (NO3⁻) kedua-duanya anion kecil bercas negatif. Penggunaan baja tinggi klorida yang banyak akan bersaing secara agresif dan menekan keupayaan pokok menyerap Nitrogen yang penting.\n2. Tekanan Garam: Cl tanah yang tinggi menyumbang kepada tekanan osmotik yang teruk, menarik air keluar dari akar.",
    info_Ni_func: "Pencerna Urea & Pemangkin Metabolik. Nikel ialah kofaktor logam wajib bagi enzim Urease. Apabila pokok menyerap Urea (sama ada dari tanah atau semburan daun), ia mesti memecahkannya kepada Ammonia dan Karbon Dioksida yang boleh digunakan. Tanpa Nikel, proses ini mustahil; Urea terkumpul ke tahap sangat toksik dan membakar pokok dari dalam. Ia juga memainkan peranan utama dalam percambahan biji benih dan ketahanan penyakit.",
    info_Ni_comm: "Bentuk Pasaran:\n• Nikel Sulfat: Sangat larut, biasanya diberi dalam dos mikro yang amat kecil.\n• Nikel Lignosulfonat / Kelat: Digunakan untuk penembusan daun yang pantas dan selamat.\n⚠️ Realiti Komersial: Kerana pokok memerlukan Nikel dalam jumlah yang amat kecil (bahagian per bilion), ia jarang dijual sebagai baja tunggal. Kebanyakan tanah pertanian mempunyai Nikel semula jadi yang mencukupi, dan ia sering hadir sebagai bendasing surih dalam baja pukal lain.",
    info_Ni_app: "Strategi Aplikasi (Peneman Urea Semburan Daun): Kekurangan sebenar dalam tanah amat jarang (walaupun terkenal menyebabkan penyakit 'Telinga Tikus' di kebun Pecan).\n\nProtokol: Kegunaan agronomi moden paling praktikal untuk Nikel ialah menambah sedikit ke dalam semburan daun Urea yang pekat. Ini memastikan pokok mempunyai enzim Urease yang cukup untuk mencerna kemasukan Urea yang banyak serta-merta tanpa mengalami lecur hujung daun (ketoksikan Urea).",
    info_Ni_def: "Amaran Unsur Bergerak: Simptom fizikal utama ialah daun 'Telinga Tikus'—daun baharu tumbuh terbantut, luar biasa bulat, dengan hujung tumpul. Simptom metabolik tersembunyi ialah hujung daun nekrotik (mati/terbakar) yang teruk tidak lama selepas pemberian Urea yang banyak, disebabkan pengumpulan urea toksik.",
    info_Ni_syn: "1. Pencerna Urea (N): Nikel menjadikan Urea selamat. Ia membolehkan pokok menukar nitrogen berasaskan urea kepada asid amino dengan pantas.\n2. Daya Hidup Biji Benih: Bekerja secara sinergi dengan unsur surih lain untuk memastikan perkembangan biji benih dan kadar percambahan yang baik.",
    info_Ni_antag: "1. Persengketaan Logam Berat: Kepekatan tinggi kation logam pesaing—terutamanya Zink (Zn), Kuprum (Cu) dan Besi (Fe)—akan menyekat Nikel secara fizikal daripada memasuki saluran pembawa akar.\n2. Penguncian Alkali: Seperti kebanyakan mikronutrien, ketersediaan Nikel menurun dengan ketara apabila pH tanah melebihi 6.7.",
    info_Ni_inhib: "1. Fitotoksisiti Melampau: Kerana pokok memerlukan jumlah yang amat sedikit, pemberian berlebihan secara tidak sengaja sangat toksik, membantutkan akar sepenuhnya dan menyerupai kekurangan Besi/Zink dengan menyekat laluan metabolik mereka.",
    info_Na_func: "Pengganti Osmotik. Walaupun tidak benar-benar penting bagi kebanyakan tanaman, Natrium bertindak sebagai sandaran berfungsi untuk Kalium dalam mengekalkan turgor sel (tekanan air) dan mengawal pembukaan stomata, terutamanya dalam persekitaran rendah K. Pada tumbuhan tahan garam tertentu (halofit seperti bit gula, saderi dan bayam), ia membantu pengikatan dan pemekatan karbon.",
    info_Na_comm: "Pemusnah Tanah (Penyebaran/Deflokulasi). Natrium sangat memusnahkan struktur tanah dari segi kimia. Kerana ion Na+ mempunyai lapisan hidrasi yang besar (ia memegang lapisan air yang tebal di sekelilingnya), Natrium berlebihan memaksa zarah tanah liat berpisah secara fizikal—proses yang dipanggil 'penyebaran'. Ini memusnahkan tanah yang gembur dan teragregat, menjadikannya kerak permukaan yang keras seperti konkrit. Apabila ini berlaku, air tidak dapat meresap, akar lemas kerana kekurangan oksigen (hipoksia), dan biologi tanah yang bermanfaat runtuh.",
    info_Na_app: "Strategi Penyelamat (Pembilasan Gipsum): Anda tidak boleh sekadar 'meneutralkan' Natrium; anda mesti menyingkirkannya secara fizikal dari zon akar.\n\nProtokol: Beri Gipsum (Kalsium Sulfat) dalam jumlah besar. Kalsium (Ca++) yang berat dan bercas dua bertindak sebagai 'pembuli', menolak Natrium keluar dari tapak pertukaran tanah liat secara paksa. Natrium yang dibebaskan kemudian bergabung dengan Sulfat membentuk Natrium Sulfat—garam yang sangat larut yang MESTI dibilas jauh di bawah zon akar menggunakan pengairan air bersih yang banyak.",
    info_Na_def: "Hampir tiada dalam keadaan ladang, kerana hujan dan pengairan membekalkan jumlah surih. Dalam sistem hidroponik tulen, kekurangan Natrium yang teruk pada tumbuhan C4 tertentu mungkin menyebabkan sedikit pengurangan pertumbuhan.",
    info_Na_syn: "1. Penjimat Kalium: Di tanah dengan Kalium yang marginal, pokok boleh mengepam Natrium ke dalam vakuol sel hanya untuk mengekalkan tekanan air fizikal (turgor), sekali gus menjimatkan Kalium yang terhad untuk fungsi enzim yang kritikal.",
    info_Na_antag: "1. Pencuri Kation (K/Ca): Natrium yang tinggi mengatasi Kalium dan Kalsium dengan kuat untuk masuk ke akar. Na yang tinggi sering menyebabkan kekurangan Kalsium yang teruk (buah merekah, lecur hujung) walaupun paras Kalsium tanah mencukupi sepenuhnya.",
    info_Co_func: "Enjin Mikrob & Pengawal Etilena. Kobalt bukan unsur penting bagi kebanyakan tumbuhan tinggi tetapi wajib mutlak bagi bakteria pengikat Nitrogen ($Rhizobium$) yang hidup dalam nodul akar kekacang. Ia atom pusat molekul Kobalamin ($Vitamin B_{12}$), yang memacu penukaran enzimatik Nitrogen atmosfera kepada bentuk yang boleh digunakan pokok. Kajian terkini juga menunjukkan Kobalt merencat sintesis Etilena, berpotensi memanjangkan jangka hayat buah dan melambatkan keguguran akibat pemasakan.",
    info_Co_comm: "Bentuk Pasaran:\n• Kobalt Sulfat ($CoSO_4$): Sangat larut, standard untuk aplikasi nutrisi.\n• Kobalt Nitrat: Digunakan dalam program fertigasi khusus.\n• Kobalt Karbonat: Bentuk batuan berkelarutan rendah, digunakan untuk membina asas tanah bertahun-tahun.\n⚠️ Realiti: Diperlukan dalam jumlah surih yang amat kecil (bahagian per bilion). Sering hadir sebagai bendasing surih dalam baja nikel atau kuprum.",
    info_Co_app: "Strategi Aplikasi (Penguat Nitrogen): Beri terutamanya kepada tanaman penutup bumi kekacang (seperti Mucuna bracteata di kebun durian) untuk memaksimumkan potensi pengikatan Nitrogen, sekali gus membekalkan N 'percuma' kepada tanaman utama. \n\nProtokol: Biasanya diberi sebagai rawatan biji benih atau semburan daun surih. Pada tanaman buah, ia boleh diberi sebelum tuai untuk mengawal paras etilena dan mencegah keguguran buah pramatang di bawah tekanan haba melampau.",
    info_Co_def: "Amaran Unsur Bergerak: Simptom pada kekacang kelihatan sama seperti kekurangan Nitrogen (kekuningan umum pada daun tua) kerana nodul akar telah gagal. Kekacang akan menunjukkan nodul pucat, putih atau hijau dan bukannya warna merah jambu kemerahan 'leghemoglobin' yang sihat menandakan pengikatan $N_2$ aktif.",
    info_Co_syn: "1. Duo Pengikatan (N): Kobalt menyediakan 'enjin' ($B_{12}$) untuk pengikatan Nitrogen, menjadikannya rakan senyap utama Nitrogen.\n2. Molibdenum ($Mo$): Kedua-duanya kofaktor wajib bagi kompleks enzim nitrogenase.",
    info_Co_antag: "1. Persaingan Mangan ($Mn$): Mangan tanah yang tinggi ($Mn^{2+}$) akan mengatasi Kobalt secara agresif untuk saluran penyerapan, menyebabkan kegagalan pengikatan $N$ walaupun di tanah subur.\n2. Kesesakan Logam Berat: Zink atau Nikel berlebihan akan menyekat saluran pengambilan Kobalt secara fizikal.",
    info_AA_func: "'Ferrari' Nutrisi & Penjimat Tenaga. Asid Amino ialah blok binaan protein. Biasanya, pokok menggunakan 25% daripada jumlah tenaga metaboliknya untuk menukar Nitrogen tak organik (Nitrat/Ammonium) kepada protein. Dengan memberi Asid Amino, pokok melangkau proses yang mahal ini, membolehkannya mengalihkan tenaga yang dijimatkan kepada pengeluaran buah atau pertahanan tekanan. Asid amino utama termasuk:\n• Prolina: 'Perisai Osmotik' yang melindungi sel daripada kemarau dan haba.\n• Glisina: AA terkecil, bertindak sebagai agen pengkelat semula jadi untuk membawa logam berat ke dalam pokok.\n• Asid Glutamik: 'Hab Metabolik' yang mencetuskan keseluruhan laluan Nitrogen.",
    info_AA_comm: "Bentuk Pasaran & Lonjakan FAA:\n• AA Berasaskan Tumbuhan (Soya/Jagung): Tinggi asid L-Amino, bersih dan sangat selamat untuk semua peringkat. Terbaik untuk pengurusan tekanan umum.\n• AA Berasaskan Haiwan: Tinggi Hidroksiprolina. Selalunya lebih murah, digunakan untuk merangsang pertumbuhan vegetatif secara pukal.\n• Asid Amino Ikan (FAA): 'Pengangkat Berat'. Sangat disyorkan kerana penapaian ikan secara proses sejuk bukan sahaja mengekalkan asid amino, tetapi juga Peptida semula jadi, Mineral Marin dan Hormon Pertumbuhan (Auksin/Sitokinin) dalam jumlah besar. \n💡 Kenapa FAA? FAA memberi 'Lonjakan Pertumbuhan' dan 'Ledakan Akar' yang unik yang tidak dapat ditandingi asid amino berasaskan tumbuhan. Ia standard emas untuk memulihkan pokok yang 'letih' selepas tuai dan merangsang mikrob tanah.",
    info_AA_app: "Strategi Aplikasi (Petua Tekanan & Pemulihan): \n• Pemulihan: Selepas banjir, hujan lebat atau panas teruk, beri FAA segera untuk menghidupkan semula sistem akar dan membina semula simpanan tenaga.\n• Cuaca Sejuk/Mendung: Apabila cahaya matahari rendah dan fotosintesis perlahan, AA membekalkan makanan 'pra-cerna' untuk memastikan pokok terus aktif.\n• Penampan Racun Perosak: Mencampurkan AA dengan racun perosak (kecuali Kuprum/Sulfur) mengurangkan 'kejutan semburan' pada daun.",
    info_AA_def: "Tidak penting tetapi kelihatan sebagai 'Pertumbuhan Terbantut Umum'. Pokok yang kekurangan bekalan asid amino organik sukar pulih daripada tekanan, menunjukkan pengembangan daun yang perlahan, dan pembentukan buah yang lemah berbanding pokok dalam program diperkaya asid amino.",
    info_AA_syn: "1. Rakan Pengkelatan (Fe/Zn/Cu): Asid amino membalut nutrien logam, meneutralkan casnya dan membolehkannya 'menyelinap' menembusi kutikel daun dengan mudah.\n2. Penggalak N: Bersinergi dengan semua bentuk Nitrogen untuk mempercepatkan sintesis protein.",
    info_AA_antag: "1. Amaran Racun Kulat: Kepekatan AA yang tinggi boleh mengurangkan keberkesanan sesetengah racun kulat sentuhan dengan menariknya terlalu dalam ke tisu pokok.\n2. Pertembungan Kuprum/Sulfur: Lihat perencatan di bawah.",
    info_AA_inhib: "1. Lecur Kuprum: JANGAN SEKALI-KALI mencampurkan Asid Amino (terutamanya FAA) dengan racun kulat berasaskan Kuprum. AA akan membawa logam berat Kuprum terus ke dalam sel pokok, menyebabkan lecur kimia yang teruk dan keguguran daun.",
    info_Pep_func: "'Perisian' Fisiologi & Pembawa Isyarat. Peptida ialah rantai pendek asid amino (biasanya <50) yang bertindak sebagai perisian biologi dalaman pokok. Tidak seperti Asid Amino individu yang merupakan 'bata' (makanan/bahan), Peptida memberi 'arahan' kepada enjin metabolik pokok. Ia mencetuskan tindak balas sistemik seperti permulaan akar yang pesat, perkembangan putik bunga dan penebalan membran sel. Paling penting, Peptida bertindak sebagai pengiring biologi termaju bagi nutrien berat yang tidak bergerak seperti Kalsium.",
    info_Pep_comm: "Bentuk Pasaran:\n• Peptida Ikan (Proses Sejuk): Standard Emas. Kaya dengan molekul isyarat marin yang mencetuskan pemulihan pantas dan lonjakan pertumbuhan. \n• Peptida Soya/Sayuran: Rantai berketulenan tinggi, sangat baik untuk semburan daun semasa berbunga dan pembentukan buah.\n• Pepton: Gred pertanian standard, digunakan untuk meningkatkan aktiviti mikrob tanah dan memberi isyarat berterusan untuk pertumbuhan vegetatif.\n💡 Kenapa Peptida berbanding Asid Amino? Asid amino individu memberi makan kepada pokok; Peptida MEMPROGRAM SEMULA pokok untuk menangani tekanan dan menyerap nutrien dengan lebih baik.",
    info_Pep_app: "Strategi Aplikasi (Petua 'Kuda Troy'):\n• Pencegahan Rekahan (Ca-Pep): Peptida meningkatkan kebolehtelapan membran sel. Mencampurkan Peptida dengan Kalsium semburan daun semasa pembentukan dan pembesaran buah membolehkan pokok menarik Kalsium terus ke floem buah—memintas aliran xilem ke atas yang perlahan.\n• Permulaan Akar: Beri melalui siraman tanah semasa mengubah anak pokok atau selepas serangan perosak yang teruk untuk memberi isyarat kepada pokok membina semula jisim akarnya serta-merta.\n• Isyarat Kemarau: Beri sejurus sebelum musim panas untuk memberi isyarat kepada pokok menguatkan dinding sel terhadap kehilangan air.",
    info_Pep_def: "Kelihatan sebagai 'Genangan Metabolik'. Pokok tanpa sokongan peptida menunjukkan tindak balas lemah terhadap baja, kadar buah merekah yang lebih tinggi (walaupun Ca mencukupi), dan pemulihan yang lembap selepas kejutan persekitaran (panas, banjir atau kerosakan racun rumpai).",
    info_Pep_syn: "1. Kurier Kalsium (Ca): Peptida ialah sistem penghantaran semula jadi paling cekap untuk Kalsium, memastikan ia sampai ke kulit buah di mana ia diperlukan untuk keanjalan.\n2. Sinergi Hormon: Peptida bertindak sebagai prekursor yang menguatkan kesan Auksin dan Sitokinin semula jadi semasa berbunga.",
    info_Pep_antag: "1. Pengoksida Kuat: Elakkan mencampurkan dengan pembersih Klorin atau Hidrogen Peroksida berkepekatan tinggi, yang boleh memecahkan rantai peptida yang halus secara fizikal.\n2. Pertembungan Logam: Lihat perencatan di bawah.",
    info_Pep_inhib: "1. Lecur Logam Berat: Jangan sekali-kali mencampurkan Peptida (terutamanya Peptida Ikan) dengan racun kulat Kuprum. Peptida akan menarik logam berat toksik Kuprum ke dalam sitoplasma sel serta-merta, menyebabkan kematian tisu yang teruk.\n2. Denaturasi pH: pH campuran tangki yang terlalu tinggi (>10.0) atau rendah (<3.0) akan menyahasli (memecahkan) rantai peptida, menjadikan mesej isyaratnya tidak berguna.",
    ph_chart_title: "Carta Ketersediaan pH",
    ph_chart_desc: "Carta interaktif yang menunjukkan kecekapan nutrien pada tahap pH berbeza.",
    ph_current: "pH Semasa",
    ph_optimal: "Ideal",
    ph_sufficient: "Mencukupi",
    ph_limited: "Terhad",
    ph_tip_optimal_title: "Pengurusan pH: Zon Emas",
    ph_tip_optimal_desc: "Sempurna! Ini 'Zon Goldilocks'. Kebanyakan nutrien tersedia secara kimia. Kekalkan Bahan Organik untuk menampannya.",
    ph_tip_acidic_title: "Strategi Pembetulan Asid",
    ph_tip_acidic_desc: "Pada pH {val}, {list} terkunci. Tindakan: Tabur Kapur Dolomit (GML) 2-4 minggu sebelum membaja. Elakkan Urea sehingga pH meningkat.",
    ph_tip_alkaline_title: "Strategi Pembetulan Alkali",
    ph_tip_alkaline_desc: "Pada pH {val}, {list} termendak. Aplikasi tanah tidak berkesan. Tindakan: Gunakan semburan daun untuk mikronutrien. Tabur Sulfur untuk menurunkan pH secara perlahan.",
    ph_others: "dll.",
    ph_macros: "Makronutrien",
    ph_breakdown_title: "Pecahan Ketersediaan Terperinci"
  }
};

// ==========================================
// 1b. LANGUAGE RUNTIME  (added by merge)
// ==========================================
// Single source of truth for the active language. Persisted in localStorage.
// Default = Chinese on first ever launch (per product decision); the onboarding
// language picker pre-selects from the device language when it can.
const SUPPORTED_LANGS = ['zh', 'en', 'ms'];

// Native names, shown in the language picker regardless of active language.
const LANG_OPTIONS = [
  { id: 'zh', native: '中文', sub: '简体中文', short: '中', label: '中文' },
  { id: 'en', native: 'English', sub: 'English', short: 'EN', label: 'English' },
  { id: 'ms', native: 'Bahasa Melayu', sub: 'Malay', short: 'BM', label: 'Melayu' }
];

// Missing strings fall back along this chain (Malay readers get English first).
const LANG_FALLBACK = { zh: ['zh', 'en'], en: ['en', 'zh'], ms: ['ms', 'en', 'zh'] };

const HTML_LANG = { zh: 'zh-CN', en: 'en', ms: 'ms-MY' };

// Bump to re-show the onboarding language picker to existing users.
const ONBOARDING_VERSION = '2';

function getSavedLang() {
  try {
    const saved = localStorage.getItem('agripro_lang');
    if (SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) {}
  return null;
}

// Best guess from the device for pre-selecting the onboarding picker.
function detectDeviceLang() {
  try {
    const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const l of list) {
      const code = String(l || '').toLowerCase();
      if (code.startsWith('zh')) return 'zh';
      if (code.startsWith('ms') || code.startsWith('id')) return 'ms';
      if (code.startsWith('en')) return 'en';
    }
  } catch (e) {}
  return 'zh';
}

function getInitialLang() {
  return getSavedLang() || 'zh';
}

function needsOnboarding() {
  try {
    return localStorage.getItem('agripro_onboarding') !== ONBOARDING_VERSION;
  } catch (e) {
    return false;
  }
}

function markOnboarded() {
  try { localStorage.setItem('agripro_onboarding', ONBOARDING_VERSION); } catch (e) {}
}

// Module-level mutable language. Components read it via t()/tv() and are
// re-rendered by the top-level <App> lang state, which is kept in sync.
let CURRENT_LANG = getInitialLang();

function setCurrentLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  CURRENT_LANG = lang;
  try { localStorage.setItem('agripro_lang', lang); } catch (e) {}
  // Keep the document in sync for a11y / PWA correctness.
  try {
    document.documentElement.lang = HTML_LANG[lang];
    const dict = TRANSLATIONS[lang];
    if (dict && dict.app_title) document.title = dict.app_title;
  } catch (e) {}
}

// Key lookup: t('some_key') -> string in the active language, falls back to key.
function t(key) {
  for (const l of LANG_FALLBACK[CURRENT_LANG]) {
    const dict = TRANSLATIONS[l];
    if (dict && dict[key] != null) return dict[key];
  }
  return key;
}

// Value lookup: tv({ zh: '...', en: '...', ms: '...' }) -> string in the active language.
// Used for multilingual values stored inline in data objects (NUTRIENTS, etc.).
// Plain strings pass through unchanged, so it is always safe to call.
function tv(val) {
  if (val && typeof val === 'object' && !Array.isArray(val)) {
    for (const l of LANG_FALLBACK[CURRENT_LANG]) {
      if (val[l] != null) return val[l];
    }
    return '';
  }
  return val;
}

const MIX_RULES = [{
  a: 'mix_ca_mg',
  b: 'mix_boron',
  status: 'status_caution',
  reason: 'mix_reason_ratio_complex'
}, {
  a: 'mix_silicate',
  b: 'mix_acids',
  status: 'status_incompatible',
  reason: 'mix_reason_silica_gel'
}, {
  a: 'mix_silicate',
  b: 'mix_calnit',
  status: 'status_incompatible',
  reason: 'mix_reason_silica_ca'
}, {
  a: 'mix_zinc',
  b: 'mix_phos',
  status: 'status_incompatible',
  reason: 'mix_reason_zn_phos'
}, {
  a: 'mix_calnit',
  b: 'mix_phos',
  status: 'status_incompatible',
  reason: 'mix_reason_ppt_white'
}, {
  a: 'mix_calnit',
  b: 'mix_sulf',
  status: 'status_incompatible',
  reason: 'mix_reason_ppt_gyp'
}, {
  a: 'mix_mag',
  b: 'mix_phos',
  status: 'status_caution',
  reason: 'mix_reason_ppt_high'
}, {
  a: 'mix_iron',
  b: 'mix_phos',
  status: 'status_incompatible',
  reason: 'mix_reason_lockup'
}, {
  a: 'mix_urea',
  b: 'mix_amm_nit',
  status: 'status_incompatible',
  reason: 'mix_reason_wet'
}, {
  a: 'mix_ammonium',
  b: 'mix_seaweed',
  status: 'status_caution',
  reason: 'mix_reason_nh4_alkali'
}, {
  a: 'mix_humic',
  b: 'mix_calnit',
  status: 'status_incompatible',
  reason: 'mix_reason_humate_sludge'
}, {
  a: 'mix_amino',
  b: 'mix_copper',
  status: 'status_caution',
  reason: 'mix_reason_copper_burn'
}, {
  a: 'mix_pep',
  b: 'mix_copper',
  status: 'status_caution',
  reason: 'mix_reason_pep_copper'
}, {
  a: 'mix_copper',
  b: 'mix_acids',
  status: 'status_caution',
  reason: 'mix_reason_cu_acid'
}, {
  a: 'mix_seaweed',
  b: 'mix_pesticides',
  status: 'status_caution',
  reason: 'mix_reason_ph_hydrolysis'
}];
const ION_META = {
  N: {
    form: "NO₃⁻ / NH₄⁺",
    leach: { zh: "高 (硝态)", en: "High (NO₃)", ms: "Tinggi (NO₃)" },
    leach_desc: { zh: "高 (阴离子极易流失)", en: "High (Anion)", ms: "Tinggi (Anion)" },
    leachHigh: true,
    grip: { zh: "弱", en: "Weak", ms: "Lemah" },
    grip_desc: { zh: "弱", en: "Weak", ms: "Lemah" },
    compete: { zh: "Cl⁻, SO₄²⁻, K⁺", en: "Cl⁻, SO₄²⁻, K⁺", ms: "Cl⁻, SO₄²⁻, K⁺" },
  },
  P: {
    form: "H₂PO₄⁻",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低 (容易被固定)", en: "Low (Fixation)", ms: "Rendah (Pengikatan)" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强 (化学固定)", en: "Strong (Chemical)", ms: "Kuat (Kimia)" },
    compete: { zh: "Zn²⁺, Fe³⁺", en: "Zn²⁺, Fe³⁺", ms: "Zn²⁺, Fe³⁺" },
  },
  K: {
    form: "K⁺",
    leach: { zh: "中", en: "Med", ms: "Sederhana" },
    leach_desc: { zh: "中 (单价离子)", en: "Med (Monovalent)", ms: "Sederhana (Monovalen)" },
    leachHigh: false,
    grip: { zh: "弱", en: "Weak", ms: "Lemah" },
    grip_desc: { zh: "弱", en: "Weak", ms: "Lemah" },
    compete: { zh: "Mg²⁺, Ca²⁺", en: "Mg²⁺, Ca²⁺", ms: "Mg²⁺, Ca²⁺" },
  },
  S: {
    form: "SO₄²⁻",
    leach: { zh: "高", en: "High", ms: "Tinggi" },
    leach_desc: { zh: "高 (阴离子)", en: "High (Anion)", ms: "Tinggi (Anion)" },
    leachHigh: true,
    grip: { zh: "无", en: "None", ms: "Tiada" },
    grip_desc: { zh: "无", en: "None", ms: "Tiada" },
    compete: { zh: "NO₃⁻, MoO₄²⁻", en: "NO₃⁻, MoO₄²⁻", ms: "NO₃⁻, MoO₄²⁻" },
  },
  Ca: {
    form: "Ca²⁺",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低 (二价离子)", en: "Low (Divalent)", ms: "Rendah (Divalen)" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强", en: "Strong", ms: "Kuat" },
    compete: { zh: "K⁺, Mg²⁺", en: "K⁺, Mg²⁺", ms: "K⁺, Mg²⁺" },
  },
  Mg: {
    form: "Mg²⁺",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低 (二价离子)", en: "Low (Divalent)", ms: "Rendah (Divalen)" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强", en: "Strong", ms: "Kuat" },
    compete: { zh: "K⁺, Ca²⁺", en: "K⁺, Ca²⁺", ms: "K⁺, Ca²⁺" },
  },
  Fe: {
    form: "Fe²⁺ / Fe³⁺",
    leach: { zh: "极低", en: "Very Low", ms: "Sangat Rendah" },
    leach_desc: { zh: "极低", en: "Very Low", ms: "Sangat Rendah" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强 (易沉淀)", en: "Strong (Precipitate)", ms: "Kuat (Mendakan)" },
    compete: { zh: "Mn²⁺, Zn²⁺", en: "Mn²⁺, Zn²⁺", ms: "Mn²⁺, Zn²⁺" },
  },
  Mn: {
    form: "Mn²⁺",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低", en: "Low", ms: "Rendah" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强", en: "Strong", ms: "Kuat" },
    compete: { zh: "Fe²⁺", en: "Fe²⁺", ms: "Fe²⁺" },
  },
  B: {
    form: "H₃BO₃",
    leach: { zh: "高", en: "High", ms: "Tinggi" },
    leach_desc: { zh: "高 (非离子态)", en: "High (Non-ionic)", ms: "Tinggi (Bukan Ion)" },
    leachHigh: true,
    grip: { zh: "弱", en: "Weak", ms: "Lemah" },
    grip_desc: { zh: "弱 (随水流)", en: "Weak (Water flow)", ms: "Lemah (Aliran Air)" },
    compete: { zh: "Ca²⁺ (生理竞争)", en: "Ca²⁺ (Physio)", ms: "Ca²⁺ (Fisio)" },
  },
  Cu: {
    form: "Cu²⁺",
    leach: { zh: "极低", en: "Very Low", ms: "Sangat Rendah" },
    leach_desc: { zh: "极低", en: "Very Low", ms: "Sangat Rendah" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强 (有机质强吸附)", en: "Strong (Organic)", ms: "Kuat (Organik)" },
    compete: { zh: "Zn²⁺, N", en: "Zn²⁺, N", ms: "Zn²⁺, N" },
  },
  Zn: {
    form: "Zn²⁺",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低", en: "Low", ms: "Rendah" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强", en: "Strong", ms: "Kuat" },
    compete: { zh: "P, Fe²⁺", en: "P, Fe²⁺", ms: "P, Fe²⁺" },
  },
  Mo: {
    form: "MoO₄²⁻",
    leach: { zh: "高", en: "High", ms: "Tinggi" },
    leach_desc: { zh: "高", en: "High", ms: "Tinggi" },
    leachHigh: true,
    grip: { zh: "弱", en: "Weak", ms: "Lemah" },
    grip_desc: { zh: "弱", en: "Weak", ms: "Lemah" },
    compete: { zh: "SO₄²⁻", en: "SO₄²⁻", ms: "SO₄²⁻" },
  },
  Si: {
    form: "Si(OH)₄",
    leach: { zh: "中", en: "Med", ms: "Sederhana" },
    leach_desc: { zh: "中", en: "Med", ms: "Sederhana" },
    leachHigh: false,
    grip: { zh: "中", en: "Med", ms: "Sederhana" },
    grip_desc: { zh: "中", en: "Med", ms: "Sederhana" },
    compete: { zh: "无", en: "None", ms: "Tiada" },
  },
  Cl: {
    form: "Cl⁻",
    leach: { zh: "高", en: "High", ms: "Tinggi" },
    leach_desc: { zh: "极高", en: "Very High", ms: "Sangat Tinggi" },
    leachHigh: true,
    grip: { zh: "无", en: "None", ms: "Tiada" },
    grip_desc: { zh: "无", en: "None", ms: "Tiada" },
    compete: { zh: "NO₃⁻", en: "NO₃⁻", ms: "NO₃⁻" },
  },
  Ni: {
    form: "Ni²⁺",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低", en: "Low", ms: "Rendah" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强", en: "Strong", ms: "Kuat" },
    compete: { zh: "Zn²⁺", en: "Zn²⁺", ms: "Zn²⁺" },
  },
  Na: {
    form: "Na⁺",
    leach: { zh: "高", en: "High", ms: "Tinggi" },
    leach_desc: { zh: "高", en: "High", ms: "Tinggi" },
    leachHigh: true,
    grip: { zh: "弱", en: "Weak", ms: "Lemah" },
    grip_desc: { zh: "弱", en: "Weak", ms: "Lemah" },
    compete: { zh: "K⁺, Ca²⁺", en: "K⁺, Ca²⁺", ms: "K⁺, Ca²⁺" },
  },
  Co: {
    form: "Co²⁺",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低", en: "Low", ms: "Rendah" },
    leachHigh: false,
    grip: { zh: "强", en: "Strong", ms: "Kuat" },
    grip_desc: { zh: "强", en: "Strong", ms: "Kuat" },
    compete: { zh: "Mn²⁺", en: "Mn²⁺", ms: "Mn²⁺" },
  },
  AA: {
    form: "Zwitterion",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低 (智能电荷锁定)", en: "Low (Smart)", ms: "Rendah (Pintar)" },
    leachHigh: false,
    grip: { zh: "中", en: "Med", ms: "Sederhana" },
    grip_desc: { zh: "中 (双性结合)", en: "Med (Dual)", ms: "Sederhana (Dwi)" },
    compete: { zh: "无", en: "None", ms: "Tiada" },
  },
  Pep: {
    form: "Polypeptide",
    leach: { zh: "低", en: "Low", ms: "Rendah" },
    leach_desc: { zh: "低", en: "Low", ms: "Rendah" },
    leachHigh: false,
    grip: { zh: "中", en: "Med", ms: "Sederhana" },
    grip_desc: { zh: "中", en: "Med", ms: "Sederhana" },
    compete: { zh: "无", en: "None", ms: "Tiada" },
  }
};
const PH_AVAILABILITY_DATA = [{
  id: 'N',
  name: 'Nitrogen',
  color: '#10B981',
  points: [[4, 0.2], [5.5, 0.5], [6, 1], [8, 1], [9, 0.5]]
}, {
  id: 'P',
  name: 'Phosphorus',
  color: '#F59E0B',
  points: [[4, 0.1], [5, 0.2], [6, 0.5], [6.5, 1], [7.5, 1], [8, 0.5], [8.5, 0.2]]
}, {
  id: 'K',
  name: 'Potassium',
  color: '#3B82F6',
  points: [[4, 0.2], [5.5, 0.5], [6, 1], [9, 1]]
}, {
  id: 'S',
  name: 'Sulfur',
  color: '#EAB308',
  points: [[4, 0.2], [5.5, 0.5], [6, 1], [9, 1]]
}, {
  id: 'Ca',
  name: 'Calcium',
  color: '#6366F1',
  points: [[4, 0.1], [5.5, 0.3], [6.5, 1], [9, 1]]
}, {
  id: 'Mg',
  name: 'Magnesium',
  color: '#8B5CF6',
  points: [[4, 0.1], [5.5, 0.3], [6.5, 1], [9, 1]]
}, {
  id: 'Fe',
  name: 'Iron',
  color: '#9CA3AF',
  points: [[4, 1], [6, 1], [6.5, 0.5], [7.5, 0.1], [9, 0]]
}, {
  id: 'Mn',
  name: 'Manganese',
  color: '#A8A29E',
  points: [[4, 1], [5.5, 1], [6.5, 0.8], [7.5, 0.2], [9, 0]]
}, {
  id: 'B',
  name: 'Boron',
  color: '#F97316',
  points: [[4, 0.3], [5, 1], [7, 1], [7.5, 0.5], [9, 0]]
}, {
  id: 'Cu',
  name: 'Copper',
  color: '#D97706',
  points: [[4, 1], [6, 1], [7, 0.5], [8, 0.2]]
}, {
  id: 'Zn',
  name: 'Zinc',
  color: '#78716C',
  points: [[4, 1], [5.5, 1], [7, 0.5], [8, 0.1]]
}, {
  id: 'Mo',
  name: 'Molybdenum',
  color: '#14B8A6',
  points: [[4, 0], [5.5, 0.2], [7, 1], [9, 1]]
}, {
  id: 'Si',
  name: 'Silicon',
  color: '#94A3B8',
  points: [[4, 0.2], [5, 0.3], [6, 0.6], [7, 0.8], [8, 1], [9, 1]]
}, {
  id: 'Cl',
  name: 'Chlorine',
  color: '#34D399',
  points: [[4, 1], [9, 1]]
}, {
  id: 'Ni',
  name: 'Nickel',
  color: '#71717A',
  points: [[4, 1], [5.5, 1], [7, 0.8], [8, 0.3], [9, 0.1]]
}, {
  id: 'Na',
  name: 'Sodium',
  color: '#A78BFA',
  points: [[4, 1], [9, 1]]
}, {
  id: 'Co',
  name: 'Cobalt',
  color: '#52525B',
  points: [[4, 1], [5.5, 1], [7, 0.6], [8, 0.2], [9, 0.1]]
}, {
  id: 'AA',
  name: 'AminoAcids',
  color: '#F472B6',
  points: [[4, 0.8], [5, 1], [8, 1], [9, 0.7]]
}, {
  id: 'Pep',
  name: 'Peptides',
  color: '#EC4899',
  points: [[4, 0.8], [5, 1], [8, 1], [9, 0.7]]
}];
const NUTRIENTS = [{
  id: 'N',
  name: 'Nitrogen',
  type: 'Macro',
  mobility: 'Mobile',
  antagonism: ['K', 'B', 'Cu', 'P'],
  threshold: 3.0,
  inhibition: [{
    el: 'B',
    val: '> 3.5%'
  }, {
    el: 'Cu',
    val: '> 4%'
  }],
  synergy: ['Mg', 'Mo', 'S', 'AA'],
  sources: ['src_urea', 'src_amsul', 'src_calnit', 'src_kno3'],
  enzymes: [{
    name: 'Nitrate Reductase',
    func: 'Gatekeeper of N-Assimilation (NO3 → NO2)',
    zh_name: '硝酸还原酶',
    zh_func: '氮气同化的守门员 (NO3 → NO2)',
    ms_name: "Nitrat Reduktase",
    ms_func: "Penjaga Pintu Asimilasi N (NO3 → NO2)"
  }, {
    name: 'RuBisCO',
    func: 'Photosynthesis Engine (Fixes CO2)',
    zh_name: 'RuBisCO (核酮糖-1,5-二磷酸羧化酶)',
    zh_func: '光合作用引擎 (固定 CO2)',
    ms_name: "RuBisCO",
    ms_func: "Enjin Fotosintesis (Mengikat CO2)"
  }, {
    name: 'PAL',
    func: 'Defense & Lignin Synthesis',
    zh_name: 'PAL (苯丙氨酸解氨酶)',
    zh_func: '防御机制与木质素合成',
    ms_name: "PAL",
    ms_func: "Pertahanan & Sintesis Lignin"
  }, {
    name: 'GA Synthase',
    func: 'Stem Elongation (Gibberellins)',
    zh_name: '赤霉素合成酶',
    zh_func: '枝干/节间伸长',
    ms_name: "GA Sintase",
    ms_func: "Pemanjangan Batang (Giberelin)"
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 40,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 2.5,
        max: 3.0,
        unit: '%'
      },
      fruiting: {
        min: 2.0,
        max: 2.5,
        unit: '%'
      }
    }
  }
}, {
  id: 'P',
  name: 'Phosphorus',
  type: 'Macro',
  mobility: 'Mobile',
  antagonism: ['Zn', 'Fe', 'Cu', 'Ca', 'K'],
  threshold: 3.5,
  inhibition: [{
    el: 'Zn',
    val: '> 100ppm'
  }, {
    el: 'Fe',
    val: '> 150ppm'
  }],
  synergy: ['Mg', 'Mo'],
  sources: ['src_dap', 'src_map', 'src_rock_phos', 'src_polyphos'],
  enzymes: [{
    name: 'ATP Synthase',
    func: 'Generates ATP (Cellular Battery)',
    zh_name: 'ATP 合成酶',
    zh_func: '生成 ATP (细胞能量电池)',
    ms_name: "ATP Sintase",
    ms_func: "Menjana ATP (Bateri Sel)"
  }, {
    name: 'GAPDH',
    func: 'Calvin Cycle (Sugar Production)',
    zh_name: 'GAPDH',
    zh_func: '卡尔文循环 (糖分生产)',
    ms_name: "GAPDH",
    ms_func: "Kitaran Calvin (Penghasilan Gula)"
  }, {
    name: 'Phosphofructokinase',
    func: 'Pacemaker of Glycolysis',
    zh_name: '磷酸果糖激酶',
    zh_func: '糖酵解的起搏器',
    ms_name: "Fosfofruktokinase",
    ms_func: "Perentak Glikolisis"
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 40,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.15,
        max: 0.25,
        unit: '%'
      },
      fruiting: {
        min: 0.20,
        max: 0.30,
        unit: '%'
      }
    }
  }
}, {
  id: 'K',
  name: 'Potassium',
  type: 'Macro',
  mobility: 'Mobile',
  antagonism: ['Mg', 'Ca', 'N', 'B'],
  threshold: 4.0,
  inhibition: [{
    el: 'Mg',
    val: '> 3.5%'
  }, {
    el: 'B',
    val: '> 250ppm'
  }],
  synergy: ['Fe', 'Mn'],
  sources: ['src_mop', 'src_sop', 'src_kno3', 'src_kmg_sulf'],
  enzymes: [{
    name: 'Pyruvate Kinase',
    func: 'Final Step of Energy Production',
    zh_name: '丙酮酸激酶',
    zh_func: '能量生产的最后一步',
    ms_name: "Piruvat Kinase",
    ms_func: "Langkah Akhir Penghasilan Tenaga"
  }, {
    name: 'Starch Synthase',
    func: 'Fruit Filling (Sugar to Starch)',
    zh_name: '淀粉合成酶',
    zh_func: '果实灌浆 (糖转化为淀粉)',
    ms_name: "Sintase Kanji",
    ms_func: "Pengisian Buah (Gula kepada Kanji)"
  }, {
    name: 'ABA Synthase',
    func: 'Stomatal Control (Drought Defense)',
    zh_name: 'ABA 合成酶',
    zh_func: '气孔控制 (抗旱防御)',
    ms_name: "ABA Sintase",
    ms_func: "Kawalan Stomata (Pertahanan Kemarau)"
  }],
  optimal_levels: {
    soil: {
      min: 150,
      max: 300,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 1.5,
        max: 2.0,
        unit: '%'
      },
      fruiting: {
        min: 2.0,
        max: 2.8,
        unit: '%'
      }
    }
  }
}, {
  id: 'Ca',
  name: 'Calcium',
  type: 'Secondary',
  mobility: 'Immobile',
  antagonism: ['Mg', 'K', 'B', 'Mn', 'Fe', 'Zn'],
  threshold: 2.5,
  inhibition: [{
    el: 'Mg',
    val: 'val_ratio_7_1'
  }, {
    el: 'B',
    val: 'val_high_ph_ca_b'
  }],
  synergy: ['Si', 'Pep'],
  sources: ['src_dolomite', 'src_gypsum', 'src_calnit', 'src_lime'],
  enzymes: [{
    name: 'Peroxidase',
    func: 'Cell Wall Cross-linking (Rigidity)',
    zh_name: '过氧化物酶',
    zh_func: '细胞壁交联 (提供刚性)',
    ms_name: "Peroksidase",
    ms_func: "Paut Silang Dinding Sel (Ketegaran)"
  }, {
    name: 'Cellulose Synthase',
    func: 'Builds Structural Skeleton',
    zh_name: '纤维素合成酶',
    zh_func: '构建植物结构骨架',
    ms_name: "Selulosa Sintase",
    ms_func: "Membina Rangka Struktur"
  }, {
    name: 'Alpha-Amylase',
    func: 'Seed Germination (Starch Breakdown)',
    zh_name: 'α-淀粉酶',
    zh_func: '种子发芽 (淀粉分解)',
    ms_name: "Alfa-Amilase",
    ms_func: "Percambahan Biji (Penguraian Kanji)"
  }],
  optimal_levels: {
    soil: {
      min: 1000,
      max: 2500,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 1.5,
        max: 2.5,
        unit: '%'
      },
      fruiting: {
        min: 1.8,
        max: 2.5,
        unit: '%'
      }
    }
  }
}, {
  id: 'Mg',
  name: 'Magnesium',
  type: 'Secondary',
  mobility: 'Mobile',
  antagonism: ['Ca', 'K'],
  threshold: 0.8,
  inhibition: [{
    el: 'Ca',
    val: '> 1.0%'
  }],
  synergy: ['P', 'N'],
  sources: ['src_kieserite', 'src_dolomite', 'src_mg_oxide', 'src_mg_nitrate'],
  enzymes: [{
    name: 'RuBisCO',
    func: 'Activates Carbon Fixation',
    zh_name: 'RuBisCO',
    zh_func: '激活碳固定',
    ms_name: "RuBisCO",
    ms_func: "Mengaktifkan Pengikatan Karbon"
  }, {
    name: 'Hexokinase',
    func: 'Kickstarts Sugar Metabolism',
    zh_name: '己糖激酶',
    zh_func: '启动糖代谢',
    ms_name: "Heksokinase",
    ms_func: "Memulakan Metabolisme Gula"
  }, {
    name: 'Glutamine Synthetase',
    func: 'Ammonium Detoxification',
    zh_name: '谷氨酰胺合成酶',
    zh_func: '铵毒性解毒',
    ms_name: "Glutamin Sintetase",
    ms_func: "Penyahtoksikan Ammonium"
  }],
  optimal_levels: {
    soil: {
      min: 100,
      max: 250,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.25,
        max: 0.50,
        unit: '%'
      },
      fruiting: {
        min: 0.30,
        max: 0.50,
        unit: '%'
      }
    }
  }
}, {
  id: 'S',
  name: 'Sulfur',
  type: 'Secondary',
  mobility: 'Immobile',
  antagonism: ['Mo', 'Ca', 'AA'],
  threshold: 0.5,
  inhibition: [{
    el: 'Mo',
    val: '> 1%'
  }],
  synergy: ['N', 'Zn', 'Mn', 'Cu'],
  sources: ['src_amsul', 'src_elem_sulfur', 'src_gypsum', 'src_sop'],
  enzymes: [{
    name: 'Glutathione Reductase',
    func: 'Regenerates Antioxidants',
    zh_name: '谷胱甘肽还原酶',
    zh_func: '再生抗氧化剂',
    ms_name: "Glutation Reduktase",
    ms_func: "Menjana Semula Antioksidan"
  }, {
    name: 'Nitrogenase',
    func: 'Biological N-Fixation',
    zh_name: '固氮酶',
    zh_func: '生物固氮',
    ms_name: "Nitrogenase",
    ms_func: "Pengikatan N Biologi"
  }, {
    name: 'Coenzyme A',
    func: 'Fatty Acid & Energy Metabolism',
    zh_name: '辅酶 A',
    zh_func: '脂肪酸与能量代谢',
    ms_name: "Koenzim A",
    ms_func: "Metabolisme Asid Lemak & Tenaga"
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 50,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.20,
        max: 0.40,
        unit: '%'
      },
      fruiting: {
        min: 0.20,
        max: 0.40,
        unit: '%'
      }
    }
  }
}, {
  id: 'Fe',
  name: 'Iron',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Mn', 'Zn', 'P', 'Cu'],
  threshold: 0.5,
  inhibition: [{
    el: 'Mn',
    val: 'val_ratio_1_5'
  }],
  synergy: ['K', 'AA'],
  sources: ['src_fe_sulf', 'src_fe_edta', 'src_fe_eddha', 'src_fe_amsul'],
  enzymes: [{
    name: 'Catalase',
    func: 'Neutralizes Toxic Hydrogen Peroxide',
    zh_name: '过氧化氢酶',
    zh_func: '中和有毒的过氧化氢',
    ms_name: "Katalase",
    ms_func: "Meneutralkan Hidrogen Peroksida Toksik"
  }, {
    name: 'Nitrite Reductase',
    func: 'Protein Building (NO2 → NH4)',
    zh_name: '亚硝酸还原酶',
    zh_func: '蛋白质构建 (NO2 → NH4)',
    ms_name: "Nitrit Reduktase",
    ms_func: "Pembinaan Protein (NO2 → NH4)"
  }, {
    name: 'APX',
    func: 'Chloroplast Antioxidant',
    zh_name: 'APX (抗坏血酸过氧化物酶)',
    zh_func: '叶绿体抗氧化剂',
    ms_name: "APX",
    ms_func: "Antioksidan Kloroplas"
  }],
  optimal_levels: {
    soil: {
      min: 50,
      max: 150,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 50,
        max: 150,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 50,
        max: 150,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Zn',
  name: 'Zinc',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Fe', 'Cu', 'P'],
  threshold: 0.5,
  inhibition: [{
    el: 'Fe',
    val: '> 150ppm'
  }],
  synergy: ['P', 'Mg', 'AA'],
  sources: ['src_zn_sulf', 'src_zn_edta', 'src_zn_oxide'],
  enzymes: [{
    name: 'IAA Synthase',
    func: 'Auxin Precursor (Tryptophan)',
    zh_name: 'IAA 合成酶',
    zh_func: '生长素前体 (色氨酸)',
    ms_name: "IAA Sintase",
    ms_func: "Prekursor Auksin (Triptofan)"
  }, {
    name: 'SOD',
    func: 'First Line Antioxidant Defense',
    zh_name: 'SOD (超氧化物歧化酶)',
    zh_func: '第一道抗氧化防线',
    ms_name: "SOD",
    ms_func: "Barisan Pertama Pertahanan Antioksidan"
  }, {
    name: 'Carbonic Anhydrase',
    func: 'CO2 Supply for Photosynthesis',
    zh_name: '碳酸酐酶',
    zh_func: '为光合作用提供 CO2',
    ms_name: "Karbonik Anhidrase",
    ms_func: "Bekalan CO2 untuk Fotosintesis"
  }],
  optimal_levels: {
    soil: {
      min: 5,
      max: 15,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 20,
        max: 50,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 20,
        max: 50,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Mn',
  name: 'Manganese',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Fe', 'Zn', 'Mg', 'Ca'],
  threshold: 0.5,
  inhibition: [{
    el: 'Fe',
    val: 'val_ratio_2_5'
  }],
  synergy: ['Cu', 'AA'],
  sources: ['src_mn_sulf', 'src_mn_edta', 'src_mn_oxide'],
  enzymes: [{
    name: 'OEC (PSII)',
    func: 'Splits Water (Photosynthesis)',
    zh_name: '放氧复合体 (OEC)',
    zh_func: '光系统II中分解水',
    ms_name: "OEC (PSII)",
    ms_func: "Memecahkan Air (Fotosintesis)"
  }, {
    name: 'SOD',
    func: 'Mitochondrial Protection',
    zh_name: 'Mn-SOD',
    zh_func: '线粒体保护',
    ms_name: "SOD",
    ms_func: "Perlindungan Mitokondria"
  }, {
    name: 'Isocitrate Dehydrogenase',
    func: 'TCA Cycle Rate-Limiter',
    zh_name: '异柠檬酸脱氢酶',
    zh_func: 'TCA 循环的限速酶',
    ms_name: "Isositrat Dehidrogenase",
    ms_func: "Penghad Kadar Kitaran TCA"
  }],
  optimal_levels: {
    soil: {
      min: 20,
      max: 60,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 30,
        max: 100,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 30,
        max: 100,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Cu',
  name: 'Copper',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Zn', 'Fe', 'Mn', 'Mo', 'P', 'AA'],
  threshold: 0.5,
  inhibition: [{
    el: 'Fe',
    val: '> 50ppm'
  }, {
    el: 'AA',
    val: 'val_tank_mix'
  }],
  synergy: [],
  sources: ['src_cu_sulf', 'src_cu_hydrox', 'src_cu_edta'],
  enzymes: [{
    name: 'Laccase',
    func: 'Lignin Synthesis (Wood Hardening)',
    zh_name: '漆酶',
    zh_func: '木质素合成 (木质硬化)',
    ms_name: "Lakase",
    ms_func: "Sintesis Lignin (Pengerasan Kayu)"
  }, {
    name: 'SOD',
    func: 'Cytoplasm/Chloroplast Protection',
    zh_name: 'Cu/Zn-SOD',
    zh_func: '细胞质/叶绿体保护',
    ms_name: "SOD",
    ms_func: "Perlindungan Sitoplasma/Kloroplas"
  }, {
    name: 'Polyphenol Oxidase',
    func: 'Wound Repair (Browning)',
    zh_name: '多酚氧化酶',
    zh_func: '伤口修复 (褐变反应)',
    ms_name: "Polifenol Oksidase",
    ms_func: "Pemulihan Luka (Pemerangan)"
  }],
  optimal_levels: {
    soil: {
      min: 1,
      max: 5,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 10,
        max: 20,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 10,
        max: 20,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'B',
  name: 'Boron',
  type: 'Micro',
  mobility: 'Immobile',
  antagonism: ['Ca', 'K', 'N'],
  threshold: 0.5,
  inhibition: [{
    el: 'K',
    val: '> 150ppm'
  }],
  synergy: ['Si', 'Ca'],
  sources: ['src_borax', 'src_boric', 'src_solubor', 'src_ca_borate'],
  optimal_levels: {
    soil: {
      min: 1,
      max: 3,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 20,
        max: 50,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 30,
        max: 60,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'Mo',
  name: 'Molybdenum',
  type: 'Micro',
  mobility: 'Mobile',
  antagonism: ['Cu', 'S', 'Fe'],
  threshold: 0.5,
  inhibition: [{
    el: 'Cu',
    val: '> 5ppm'
  }],
  synergy: ['N', 'P'],
  sources: ['src_na_moly', 'src_amm_moly'],
  enzymes: [{
    name: 'Nitrate Reductase',
    func: 'Essential Cofactor for N-Reduction',
    zh_name: '硝酸还原酶',
    zh_func: '氮还原的必需辅助因子',
    ms_name: "Nitrat Reduktase",
    ms_func: "Kofaktor Penting untuk Penurunan N"
  }, {
    name: 'Nitrogenase',
    func: 'Key for N-Fixation (Legumes)',
    zh_name: '固氮酶',
    zh_func: '豆科植物固氮关键',
    ms_name: "Nitrogenase",
    ms_func: "Kunci untuk Pengikatan N (Kekacang)"
  }],
  optimal_levels: {
    soil: {
      min: 0.1,
      max: 0.5,
      unit: 'ppm (mg/kg)'
    },
    leaf: {
      vegetative: {
        min: 0.1,
        max: 0.5,
        unit: 'ppm (mg/kg)'
      },
      fruiting: {
        min: 0.1,
        max: 0.5,
        unit: 'ppm (mg/kg)'
      }
    }
  }
}, {
  id: 'AA',
  name: 'AminoAcids',
  type: 'Biostimulant',
  mobility: 'Mobile',
  antagonism: ['Cu', 'S'],
  threshold: 0,
  inhibition: [{
    el: 'Cu',
    val: 'val_tank_mix'
  }, {
    el: 'S',
    val: 'val_tank_mix'
  }],
  synergy: ['N', 'Fe', 'Zn', 'Mn'],
  sources: ['src_plant_aa', 'src_animal_aa', 'src_fish_aa'],
  enzymes: [{
    name: 'Proline',
    func: 'Stress Tolerance (Drought/Heat/Salt)',
    zh_name: '脯氨酸',
    zh_func: '抗逆性 (干旱/高温/盐碱)',
    ms_name: "Prolina",
    ms_func: "Toleransi Tekanan (Kemarau/Panas/Garam)"
  }, {
    name: 'Glycine',
    func: 'Chlorophyll Synthesis & Chelation',
    zh_name: '甘氨酸',
    zh_func: '叶绿素合成与天然螯合',
    ms_name: "Glisina",
    ms_func: "Sintesis & Pengkelatan Klorofil"
  }, {
    name: 'Glutamic Acid',
    func: 'Central Hub of N-Metabolism',
    zh_name: '谷氨酸',
    zh_func: '氮代谢的中枢核心',
    ms_name: "Asid Glutamik",
    ms_func: "Hab Utama Metabolisme N"
  }, {
    name: 'Methionine',
    func: 'Precursor to Ethylene (Ripening)',
    zh_name: '甲硫氨酸',
    zh_func: '乙烯前体 (促进果实成熟)',
    ms_name: "Metionina",
    ms_func: "Prekursor Etilena (Pemasakan)"
  }]
}, {
  id: 'Pep',
  name: 'Peptides',
  type: 'Biostimulant',
  mobility: 'Mobile',
  antagonism: ['Cu', 'S'],
  threshold: 0,
  inhibition: [{
    el: 'Cu',
    val: 'val_tank_mix'
  }, {
    el: 'S',
    val: 'val_tank_mix'
  }],
  synergy: ['Ca', 'K'],
  sources: ['src_fish_pep', 'src_soy_pep']
}, {
  id: 'Si',
  name: 'Silicon',
  type: 'Beneficial',
  mobility: 'Immobile',
  antagonism: [],
  threshold: 1.0,
  inhibition: [],
  synergy: ['Ca', 'N', 'P', 'Zn'],
  sources: ['src_k_silicate', 'src_ca_silicate', 'src_rice_ash']
}, {
  id: 'Cl',
  name: 'Chlorine',
  type: 'Micro',
  mobility: 'Mobile',
  antagonism: ['N', 'S'],
  threshold: 1.0,
  inhibition: [{
    el: 'N',
    val: '>1%'
  }],
  synergy: [],
  sources: ['src_mop', 'src_ca_chlor', 'src_amm_chlor']
}, {
  id: 'Ni',
  name: 'Nickel',
  type: 'Micro',
  mobility: 'Mobile',
  antagonism: ['Zn', 'Fe', 'Cu'],
  threshold: 0.1,
  inhibition: [],
  synergy: [],
  sources: ['src_ni_sulf', 'src_ni_nitr']
}, {
  id: 'Na',
  name: 'Sodium',
  type: 'Beneficial',
  mobility: 'Mobile',
  antagonism: ['K', 'Ca', 'Mg'],
  threshold: 1.0,
  inhibition: [],
  synergy: [],
  sources: ['src_sea_salt', 'src_na_nitr']
}, {
  id: 'Co',
  name: 'Cobalt',
  type: 'Beneficial',
  mobility: 'Immobile',
  antagonism: ['Mn', 'Fe'],
  threshold: 0.1,
  inhibition: [],
  synergy: [],
  sources: ['src_co_sulf', 'src_co_carb']
}];
const SOIL_OPTIONS = {
  texture: [{
    id: 'sand',
    label: 'opt_sand'
  }, {
    id: 'loam',
    label: 'opt_loam'
  }, {
    id: 'clay',
    label: 'opt_clay'
  }],
  om: [{
    id: 'low',
    label: 'opt_low'
  }, {
    id: 'med',
    label: 'opt_med'
  }, {
    id: 'high',
    label: 'opt_high'
  }],
  cation: [{
    id: 'bal',
    label: 'opt_bal'
  }, {
    id: 'hi_ca',
    label: 'opt_hi_ca'
  }, {
    id: 'hi_mg',
    label: 'opt_hi_mg'
  }, {
    id: 'hi_k',
    label: 'opt_hi_k'
  }, {
    id: 'hi_na',
    label: 'opt_hi_na'
  }],
  weather: [{
    id: 'dry',
    label: 'opt_dry',
    icon: Sun
  }, {
    id: 'norm',
    label: 'opt_norm',
    icon: SunDim
  }, {
    id: 'wet',
    label: 'opt_wet',
    icon: CloudRain
  }],
  ec: [{
    id: 'low',
    label: 'opt_ec_low'
  }, {
    id: 'opt',
    label: 'opt_ec_opt'
  }, {
    id: 'high',
    label: 'opt_ec_high'
  }],
  cropStage: [{
    id: 'seedling',
    label: 'opt_stage_seedling'
  }, {
    id: 'veg',
    label: 'opt_stage_veg'
  }, {
    id: 'pre_flower',
    label: 'opt_stage_pre_flower'
  }, {
    id: 'flower_bud',
    label: 'opt_stage_flower_bud'
  }, {
    id: 'matchstick',
    label: 'opt_stage_matchstick'
  }, {
    id: 'bloom',
    label: 'opt_stage_bloom'
  }, {
    id: 'fruit_set',
    label: 'opt_stage_fruit_set'
  }, {
    id: 'fruit_drop_1',
    label: 'opt_stage_fruit_drop_1'
  }, {
    id: 'ping_pong',
    label: 'opt_stage_ping_pong'
  }, {
    id: 'rapid_expansion',
    label: 'opt_stage_rapid_expansion'
  }, {
    id: 'maturation',
    label: 'opt_stage_maturation'
  }, {
    id: 'post_harvest',
    label: 'opt_stage_post_harvest'
  }],
  symptoms: [{
    id: 'none',
    label: 'opt_sym_none'
  }, {
    id: 'yellow_old',
    label: 'opt_sym_yellow_old'
  }, {
    id: 'yellow_new',
    label: 'opt_sym_yellow_new'
  }, {
    id: 'burn',
    label: 'opt_sym_burn'
  }, {
    id: 'stunted',
    label: 'opt_sym_stunted'
  }, {
    id: 'fruit_crack',
    label: 'opt_sym_fruit_crack'
  }, {
    id: 'wet_core',
    label: 'opt_sym_wet_core'
  }],
  cropType: [{
    id: 'durian',
    label: 'opt_crop_durian'
  }, {
    id: 'general',
    label: 'opt_crop_general'
  }],
  cropVariety: [{
    id: 'mk',
    label: 'opt_var_mk'
  }, {
    id: 'bt',
    label: 'opt_var_bt'
  }, {
    id: 'd24',
    label: 'opt_var_d24'
  }, {
    id: 'ioi',
    label: 'opt_var_ioi'
  }, {
    id: 'gp',
    label: 'opt_var_gp'
  }, {
    id: 'rp',
    label: 'opt_var_rp'
  }, {
    id: 'tekka',
    label: 'opt_var_tekka'
  }, {
    id: 'mt',
    label: 'opt_var_mt'
  }, {
    id: 'tk',
    label: 'opt_var_tk'
  }, {
    id: 'd101',
    label: 'opt_var_d101'
  }, {
    id: 'generic',
    label: 'opt_var_generic'
  }]
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

const getNutrientLabel = id => {
  if (id === 'Humic') return t('rec_Humic');
  const nut = NUTRIENTS.find(n => n.id === id);
  if (!nut) return id;
  const key = 'elem_' + nut.name;
  return t(key) !== key ? t(key) : nut.name;
};
const analyzeSoilImpact = (nutrientId, soil) => {
  const impacts = [];
  if (!nutrientId) return [];
  const nutName = getNutrientLabel(nutrientId);
  if (nutrientId === 'AA' || nutrientId === 'Pep') {
    if (soil.weather === 'dry') {
      impacts.push({
        level: 'good',
        msg: tv({ zh: '抗旱防御：帮助调节气孔并保留水分。在高温/干旱期间必不可少。', en: 'Drought Defense: Helps regulate stomata and retain moisture. Essential during heat/drought.', ms: "Pertahanan Kemarau: Membantu mengawal stomata dan mengekalkan kelembapan. Penting semasa panas/kemarau." })
      });
    } else if (soil.weather === 'wet') {
      impacts.push({
        level: 'good',
        msg: tv({ zh: '恢复：帮助重建根系并在暴雨后螯合养分，减少流失。', en: 'Recovery: Helps rebuild roots and chelate nutrients after heavy rain, reducing leaching loss.', ms: "Pemulihan: Membantu membina semula akar dan mengelat nutrien selepas hujan lebat, mengurangkan kehilangan akibat larut lesap." })
      });
    }
    if (soil.ec === 'high') {
      impacts.push({
        level: 'good',
        msg: tv({ zh: '盐碱缓冲：减少高盐分引起的渗透胁迫。', en: 'Salinity Buffer: Reduces osmotic stress caused by high salts.', ms: "Penampan Kemasinan: Mengurangkan tekanan osmotik akibat garam yang tinggi." })
      });
    }
    return impacts;
  }
  if (soil.weather === 'wet') {
    if (['N', 'K', 'Mg', 'S', 'B', 'Cl', 'Mo'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: `流失警告：暴雨会冲走${nutName}，请在雨后重施。`, en: `Leaching Alert: Heavy rain will wash ${nutName} away. Re-apply after rain.`, ms: `Amaran Larut Resap: Hujan lebat akan menghanyutkan ${nutName}. Gunakan semula selepas hujan.` })
      });
    }
  } else if (soil.weather === 'dry') {
    if (['Ca', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: `吸收受阻：${nutName}依赖蒸腾拉力。干旱停止吸收，必须进行叶面喷施。`, en: `Absorption Blocked: ${nutName} relies on transpiration pull. Drought stops uptake. Foliar spray required.`, ms: `Penyerapan Tersekat: ${nutName} bergantung pada tarikan transpirasi. Kemarau menghentikan pengambilan. Semburan daun diperlukan.` })
      });
    }
  }
  if (soil.ec === 'high') {
    if (['Fe', 'Mn', 'Zn', 'Cu'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: `高盐碱 (EC)：渗透胁迫，${nutName}等微量元素潜在锁定。`, en: `High Salinity (EC): Osmotic stress and potential lockup of micronutrients like ${nutName}.`, ms: `Kemasinan Tinggi (EC): Tekanan osmotik dan potensi penguncian mikronutrien seperti ${nutName}.` })
      });
    }
  }
  if (soil.ph < 5.5) {
    if (nutrientId === 'N') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '氮源：在酸性土壤中，避免使用铵/尿素（会进一步酸化）。使用硝态氮（如硝酸钙）。', en: 'Nitrogen Source: In acidic soil, avoid Ammonium/Urea (they acidify further). Use Nitrate (e.g., Calcium Nitrate).', ms: "Sumber Nitrogen: Dalam tanah berasid, elakkan Ammonium/Urea (ia menambah keasidan). Gunakan Nitrat (cth., Kalsium Nitrat)." })
      });
    } else if (['K', 'Ca', 'Mg', 'S', 'Mo'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '酸性锁定：pH < 5.5 时，大量元素和钼的有效性显著下降。铝毒性可能会干扰。', en: 'Acid Lock: At pH < 5.5, macros and Molybdenum availability drops significantly. Aluminum toxicity may interfere.', ms: "Kunci Asid: Pada pH < 5.5, ketersediaan makro dan Molibdenum menurun dengan ketara. Ketoksikan Aluminium mungkin mengganggu." })
      });
    }
    if (['Fe', 'Mn', 'Zn', 'Cu', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'low',
        msg: tv({ zh: '溶解度增加：微量元素在酸性中极易溶解。注意毒性（尤其是锰）。', en: 'Increased Solubility: Micros are highly soluble in acid. Watch for toxicity (esp. Manganese).', ms: "Keterlarutan Meningkat: Mikro sangat larut dalam keadaan berasid. Awasi ketoksikan (terutamanya Mangan)." })
      });
    }
    if (nutrientId === 'P') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '铝/铁固定：极高风险。磷与铝/铁结合成不溶性固体。', en: 'Al/Fe Fixation: Very High Risk. Phosphorus binds with Aluminum/Iron into insoluble solids.', ms: "Pengikatan Al/Fe: Risiko Sangat Tinggi. Fosforus terikat dengan Aluminium/Besi menjadi pepejal tidak larut." })
      });
    }
  } else if (soil.ph > 7.5) {
    if (['Fe', 'Mn', 'Zn', 'Cu', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '碱性固定：pH > 7.5 时，微量元素（除钼外）沉淀。必须使用螯合物或叶面喷施。', en: 'Alkaline Fixation: At pH > 7.5, micros (except Mo) precipitate. Must use Chelates or Foliar.', ms: "Pengikatan Alkali: Pada pH > 7.5, mikro (kecuali Mo) termendak. Wajib guna Kelat atau Semburan Daun." })
      });
    }
    if (nutrientId === 'P') {
      impacts.push({
        level: 'med',
        msg: tv({ zh: '钙固定：磷与钙结合形成不溶性的磷酸钙。', en: 'Calcium Fixation: P binds with Ca to form insoluble Calcium Phosphate.', ms: "Pengikatan Kalsium: P terikat dengan Ca membentuk Kalsium Fosfat yang tidak larut." })
      });
    }
    if (nutrientId === 'Mo') {
      impacts.push({
        level: 'good',
        msg: tv({ zh: '高有效性：钼在碱性土壤中最有效。', en: 'High Availability: Molybdenum is most available in alkaline soils.', ms: "Ketersediaan Tinggi: Molibdenum paling tersedia dalam tanah beralkali." })
      });
    }
  }
  if (soil.texture === 'sand') {
    if (['N', 'K', 'Mg', 'S', 'B'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '流失风险：沙土保肥力 (CEC) 低。该元素容易流失。需“少食多餐”。', en: 'Leaching Risk: Sandy soil has low retention (CEC). This element washes away easily. Apply "Little and Often".', ms: "Risiko Larut Lesap: Tanah berpasir mempunyai daya pegangan rendah (CEC). Unsur ini mudah dihanyutkan. Baja \"Sedikit tetapi Kerap\"." })
      });
    }
  } else if (soil.texture === 'clay') {
    if (nutrientId === 'K' || nutrientId === 'NH4') {
      impacts.push({
        level: 'med',
        msg: tv({ zh: '晶格固定：某些粘土会在其晶格结构中困住钾或铵离子。', en: 'Lattice Fixation: Some clays trap K or Ammonium ions in their lattice structure.', ms: "Pengikatan Kekisi: Sesetengah tanah liat memerangkap ion K atau Ammonium dalam struktur kekisinya." })
      });
    }
  }
  if (soil.om === 'low') {
    if (['N', 'S'].includes(nutrientId)) {
      impacts.push({
        level: 'med',
        msg: tv({ zh: '储备低：土壤缺乏有机氮/硫库。高度依赖肥料。', en: 'Low Reserves: Soil lacks organic N/S banks. Dependent on fertilizers.', ms: "Rizab Rendah: Tanah kekurangan simpanan N/S organik. Bergantung kepada baja." })
      });
    }
    if (['Fe', 'Zn', 'Cu', 'Mn'].includes(nutrientId)) {
      impacts.push({
        level: 'med',
        msg: tv({ zh: '无天然螯合：低有机质意味着微量元素容易被土壤矿物固定。', en: 'No Natural Chelation: Low OM means micros are easily fixed by soil mineralogy.', ms: "Tiada Pengkelatan Semula Jadi: Bahan organik (OM) yang rendah menyebabkan mikro mudah diikat oleh mineral tanah." })
      });
    }
  } else if (soil.om === 'high') {
    if (nutrientId === 'Cu') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '有机物结合：铜与有机质结合非常紧密，导致缺乏。', en: 'Organic Bind: Copper binds very strongly to organic matter, causing deficiency.', ms: "Ikatan Organik: Kuprum terikat sangat kuat pada bahan organik, menyebabkan kekurangan." })
      });
    }
  }
  if (soil.cation === 'hi_ca') {
    if (nutrientId === 'Mg') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '比例警告 (Ca:Mg > 6:1)：过量的钙阻断镁吸收。理想比例 3-6:1。', en: 'Ratio Alert (Ca:Mg > 6:1): Excess Ca blocks Mg uptake. Ideal ratio 3-6:1.', ms: "Amaran Nisbah (Ca:Mg > 6:1): Ca berlebihan menghalang pengambilan Mg. Nisbah ideal 3-6:1." })
      });
    } else if (nutrientId === 'K') {
      impacts.push({
        level: 'med',
        msg: tv({ zh: '阳离子竞争：高钙占据位点，可能减缓钾吸收。', en: 'Cation Comp: High Calcium occupies sites, potentially slowing K uptake.', ms: "Persaingan Kation: Kalsium yang tinggi menduduki tapak pertukaran, berpotensi melambatkan pengambilan K." })
      });
    } else if (['Fe', 'Mn', 'Zn'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '石灰诱发失绿：高钙通常意味着高 pH，导致微量元素沉淀。', en: 'Lime Induced Chlorosis: High Ca usually means high pH, causing micro precipitation.', ms: "Klorosis Akibat Kapur: Ca yang tinggi biasanya bermakna pH tinggi, menyebabkan mikro termendak." })
      });
    }
  } else if (soil.cation === 'hi_mg') {
    if (nutrientId === 'Ca') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '比例警告 (Ca:Mg < 3:1)：高镁抑制钙。土壤通常紧实/发粘。', en: 'Ratio Alert (Ca:Mg < 3:1): High Mg inhibits Ca. Soil often tight/sticky.', ms: "Amaran Nisbah (Ca:Mg < 3:1): Mg yang tinggi merencat Ca. Tanah selalunya padat/melekit." })
      });
    } else if (nutrientId === 'K') {
      impacts.push({
        level: 'med',
        msg: tv({ zh: '阳离子竞争：高镁土壤难以留住钾。', en: 'Cation Comp: High Mg soils struggle to hold K.', ms: "Persaingan Kation: Tanah tinggi Mg sukar memegang K." })
      });
    }
  } else if (soil.cation === 'hi_k') {
    if (nutrientId === 'Mg') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '比例警告 (K:Mg > 2:1)：强拮抗。钾是镁的“恶霸”。需叶面补镁。', en: 'Ratio Alert (K:Mg > 2:1): Strong Antagonism. K is a bully to Mg. Foliar Mg required.', ms: "Amaran Nisbah (K:Mg > 2:1): Antagonisme Kuat. K menindas Mg. Semburan daun Mg diperlukan." })
      });
    } else if (nutrientId === 'Ca') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '比例警告 (Ca:K < 10:1)：过量的钾降低钙的效率。', en: 'Ratio Alert (Ca:K < 10:1): Excess K reduces Ca efficiency.', ms: "Amaran Nisbah (Ca:K < 10:1): K berlebihan mengurangkan kecekapan Ca." })
      });
    } else if (nutrientId === 'B') {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '钾拮抗：钾驱动快速生长，稀释硼水平。', en: 'K Antagonism: K drives fast growth, diluting Boron levels.', ms: "Antagonisme K: K memacu pertumbuhan pesat, mencairkan paras Boron." })
      });
    }
  } else if (soil.cation === 'hi_na') {
    if (['K', 'Ca'].includes(nutrientId)) {
      impacts.push({
        level: 'high',
        msg: tv({ zh: '盐分竞争：钠竞争钾/钙的载体位点。', en: 'Salt Comp: Sodium competes with Potassium/Calcium carrier sites.', ms: "Persaingan Garam: Natrium bersaing dengan Kalium/Kalsium di tapak pembawa." })
      });
    }
  }
  return impacts;
};
const getSmartRecommendation = inputs => {
  const {
    weather,
    ec,
    stage,
    symptoms,
    crop,
    variety,
    age
  } = inputs;
  const ageNum = parseInt(age) || 5;
  let mix = new Set();
  let rationale = [];
  let rate = tv({ zh: "请参阅产品标签", en: "Refer to product label", ms: "Rujuk label produk" });
  let timing = tv({ zh: "清晨或傍晚", en: "Early morning or late evening", ms: "Awal pagi atau lewat petang" });
  let compatibility = tv({ zh: "通过 (无明显冲突)", en: "Pass", ms: "Lulus" });
  let warnings = [];
  if (stage === 'seedling') {
    mix.add("P");
    mix.add("Zn");
    mix.add("Pep");
    rationale.push(tv({ zh: "🌱 幼苗基础：磷 (P) 和锌 (Zn) 对根系至关重要。多肽 (Pep) 刺激根系生长。", en: "🌱 Seedling Base: Phosphorus (P) and Zinc (Zn) are critical for roots. Peptides (Pep) stimulate root mass.", ms: "🌱 Asas Anak Benih: Fosforus (P) dan Zink (Zn) amat penting untuk akar. Peptida (Pep) merangsang jisim akar." }));
    rate = tv({ zh: "幼树配方：高氮、高磷 | N:P:K ≈ 2:1:1", en: "Young Tree Mix: High N, High P | N:P:K ≈ 2:1:1", ms: "Campuran Pokok Muda: N Tinggi, P Tinggi | N:P:K ≈ 2:1:1" });
  } else if (stage === 'veg') {
    mix.add("N");
    mix.add("Mg");
    mix.add("AA");
    rationale.push(tv({ zh: "🌿 营养期：氮 (N) 推动叶面积指数，镁 (Mg) 构建叶绿素。氨基酸 (AA) 提高氮的利用率。", en: "🌿 Vegetative: Nitrogen (N) drives leaf area index, Magnesium (Mg) builds chlorophyll. Amino Acids (AA) improve N efficiency.", ms: "🌿 Vegetatif: Nitrogen (N) memacu indeks luas daun, Magnesium (Mg) membina klorofil. Asid Amino (AA) meningkatkan kecekapan N." }));
    if (ageNum < 5) {
      rate = tv({ zh: "幼梢：高氮 (N:K ≈ 3:1) @ 1:1000", en: "Young Flush: High N (N:K ≈ 3:1) @ 1:1000", ms: "Pucuk Muda: N Tinggi (N:K ≈ 3:1) @ 1:1000" });
    } else {
      rate = tv({ zh: "成熟维持：平衡 (N:K ≈ 1:1) @ 1:800", en: "Mature Maintenance: Balanced (N:K ≈ 1:1) @ 1:800", ms: "Penyelenggaraan Pokok Matang: Seimbang (N:K ≈ 1:1) @ 1:800" });
    }
  } else if (stage === 'pre_flower') {
    mix.add("P");
    mix.add("K");
    mix.add("Zn");
    mix.add("B");
    mix.add("Mg");
    mix.delete("N");
    rationale.push(tv({ zh: "🗓️ 开花前期：积累碳水化合物 (C)，抑制氮。P+K 促使枝条老熟。Zn+B 为发芽储备。", en: "🗓️ Pre-Flowering: Accumulate Carbohydrates (C), suppress N. P+K matures branches. Zn+B creates reserves for budding.", ms: "🗓️ Pra-Pembungaan: Kumpul Karbohidrat (C), tekan N. P+K mematangkan dahan. Zn+B membina rizab untuk pertunasan bunga." }));
    rationale.push(tv({ zh: "💡 专业提示 (1:1 vs MKP)：虽然 MKP (0-52-34) 是标准，但考虑添加 SOP 达到 1:1 (如 0-40-40)。钾是“刹车”——渗透压迫使顽固的树停止抽梢。", en: "💡 Pro Tip (1:1 vs MKP): While MKP (0-52-34) is standard, consider adding SOP to reach 1:1 (e.g., 0-40-40). Potassium is the 'brake'—osmotic stress forces stubborn trees to stop flushing.", ms: "💡 Tip Pro (1:1 vs MKP): Walaupun MKP (0-52-34) adalah standard, pertimbangkan menambah SOP untuk mencapai 1:1 (cth., 0-40-40). Kalium ialah 'brek'—tekanan osmotik memaksa pokok yang degil berhenti mengeluarkan pucuk." }));
    rate = tv({ zh: "高磷钾叶面肥 (P:K ≈ 1:1) + 土施白云石", en: "High P-K Foliar (P:K ≈ 1:1) + Soil Dolomite", ms: "Semburan Daun P-K Tinggi (P:K ≈ 1:1) + Dolomit Tanah" });
  } else if (stage === 'flower_bud') {
    mix.add("P");
    mix.add("B");
    mix.add("AA");
    rationale.push(tv({ zh: "👀 蟹眼期 (花芽萌发)：温和的磷 (P) 提供 ATP 能量。硼 (B) 驱动快速细胞分裂。氨基酸 (AA) 减少脆弱芽的环境胁迫。", en: "👀 Crab Eyes (Bud Emergence): Gentle Phosphorus (P) supplies ATP energy. Boron (B) drives rapid cell division. Amino Acids (AA) reduce environmental stress on tender buds.", ms: "👀 Mata Ketam (Kemunculan Putik): Fosforus (P) yang lembut membekalkan tenaga ATP. Boron (B) memacu pembahagian sel yang pesat. Asid Amino (AA) mengurangkan tekanan persekitaran pada putik yang lembut." }));
    rate = tv({ zh: "温和叶面肥：高磷 + 硼 @ 1:1000", en: "Gentle Foliar: High P + Boron @ 1:1000", ms: "Semburan Daun Lembut: P Tinggi + Boron @ 1:1000" });
  } else if (stage === 'matchstick') {
    mix.add("B");
    mix.add("Ca");
    mix.add("Zn");
    mix.add("AA");
    rationale.push(tv({ zh: "🔥 火柴枝期：快速伸长期。锌 (Zn) 驱动生长素产生以促进伸长，钙 (Ca) + 硼 (B) 构建结构完整性以防止早期脱落。", en: "🔥 Matchstick: Rapid elongation phase. Zinc (Zn) drives auxin production for length, while Calcium (Ca) + Boron (B) build structural integrity to prevent early drop.", ms: "🔥 Batang Mancis: Fasa pemanjangan pesat. Zink (Zn) memacu penghasilan auksin untuk kepanjangan, manakala Kalsium (Ca) + Boron (B) membina kekuatan struktur untuk mencegah gugur awal." }));
    rate = tv({ zh: "钙+硼组合 + 氨基酸锌 @ 1:800", en: "Ca+B Combo + Zinc Amino @ 1:800", ms: "Kombo Ca+B + Zink Amino @ 1:800" });
  } else if (stage === 'bloom') {
    mix.add("B");
    mix.add("AA");
    mix.delete("N");
    rationale.push(tv({ zh: "🌸 盛花期 （含授粉期）：授粉窗口期。尽量减少大量喷洒。硼 (B) 仅用于花粉管伸长。完全避免使用氮，以防止枝梢竞争。", en: "🌸 Full Bloom: Pollination window. Minimize heavy spraying. Boron (B) strictly for pollen tube elongation. Avoid N entirely to prevent shoot competition.", ms: "🌸 Bunga Kembang Penuh: Tempoh pendebungaan. Kurangkan semburan berat. Boron (B) hanya untuk pemanjangan tiub debunga. Elakkan N sepenuhnya untuk mencegah persaingan pucuk." }));
    rate = tv({ zh: "微剂量硼 + 氨基酸 (仅在必要时)", en: "Micro-dose Boron + Amino (Only if necessary)", ms: "Dos Mikro Boron + Amino (Hanya jika perlu)" });
    compatibility = tv({ zh: "警告：避免使用可能烧伤柱头的刺激性农药或重盐。", en: "Caution: Avoid harsh pesticides or heavy salts that may burn stigma.", ms: "Awas: Elakkan racun perosak yang keras atau garam berat yang boleh membakar stigma." });
  } else if (stage === 'fruit_set') {
    mix.add("Ca");
    mix.add("B");
    mix.add("Pep");
    rationale.push(tv({ zh: "🟢 幼果期 (0-10 DAA)：花落后的即时支持。多肽 (Pep) 与 Ca+B 协同作用以加强果柄连接。严格零氮以避免竞争。", en: "🟢 Early Fruit Set (0–10 DAA): Immediate support after the flower drops. Peptides (Pep) synergize with Ca+B to strengthen the pedicel (stem) attachment. Strict ZERO Nitrogen to avoid competition.", ms: "🟢 Pembentukan Buah Awal (0–10 DAA): Sokongan segera selepas bunga gugur. Peptida (Pep) bersinergi dengan Ca+B untuk menguatkan lekatan tangkai (pedikel). SIFAR Nitrogen sepenuhnya untuk mengelakkan persaingan." }));
    rate = tv({ zh: "Ca+B + 多肽 (轻量施用)", en: "Ca+B + Peptides (Light Application)", ms: "Ca+B + Peptida (Aplikasi Ringan)" });
  } else if (stage === 'fruit_drop_1') {
    mix.add("P");
    mix.add("Zn");
    mix.add("Mg");
    rationale.push(tv({ zh: "🌊 第一波：胚胎淘汰 (10-25 DAA)：“质量检查”。树木会自然脱落胚胎发育不良的果实。高磷提供能量，而氨基酸锌保持健康的生长素水平以防止脱落。", en: "🌊 1st Wave: Embryo Culling (10–25 DAA): The 'Quality Check.' The tree naturally sheds fruits with poor embryo development. High P supplies energy while Zn-Amino maintains healthy auxin levels to prevent abscission.", ms: "🌊 Gelombang Pertama: Penyingkiran Embrio (10–25 DAA): 'Pemeriksaan Kualiti.' Pokok secara semula jadi menggugurkan buah yang perkembangan embrionya lemah. P Tinggi membekalkan tenaga manakala Zn-Amino mengekalkan paras auksin yang sihat untuk mencegah keguguran." }));
    rate = tv({ zh: "叶面磷 + 氨基酸锌混合 @ 1:800", en: "Foliar P + Zn-Amino Mix @ 1:800", ms: "Campuran Semburan Daun P + Zn-Amino @ 1:800" });
  } else if (stage === 'ping_pong') {
    mix.add("K");
    mix.add("Ca");
    mix.add("Mg");
    mix.add("AA");
    rationale.push(tv({ zh: "🏓 第二波：抽梢竞争 (35-50 DAA)：猫山王最危险的阶段。如果此时树木长出新叶，它就会落果。高钾 (K) 作为营养生长的刹车，同时将糖分加载到果实中。", en: "🏓 2nd Wave: Flush Competition (35–50 DAA): The most dangerous phase for Musang King. If the tree flushes new leaves now, it will drop fruit. High Potassium (K) acts as a brake on vegetative growth while Loading sugars into fruit.", ms: "🏓 Gelombang Kedua: Persaingan Pucuk (35–50 DAA): Fasa paling berbahaya untuk Musang King. Jika pokok mengeluarkan pucuk baharu sekarang, ia akan menggugurkan buah. Kalium (K) yang tinggi bertindak sebagai brek pertumbuhan vegetatif sambil memuatkan gula ke dalam buah." }));
    if (ageNum < 7) {
      mix.add("N");
      rate = tv({ zh: "平衡 N:K (1:2) + 钙/镁叶面肥", en: "Balanced N:K (1:2) + Ca/Mg Foliar", ms: "N:K Seimbang (1:2) + Semburan Daun Ca/Mg" });
      rationale.push(tv({ zh: "🍎 幼树：添加少量氮以维持树冠，不引起落果。", en: "🍎 Young Tree: Add slight N to maintain canopy without causing fruit drop.", ms: "🍎 Pokok Muda: Tambah sedikit N untuk mengekalkan kanopi tanpa menyebabkan buah gugur." }));
    } else {
      rate = tv({ zh: "高钾 (N:K ≈ 1:3) + 钙/镁叶面肥", en: "High K (N:K ≈ 1:3) + Ca/Mg Foliar", ms: "K Tinggi (N:K ≈ 1:3) + Semburan Daun Ca/Mg" });
    }
  } else if (stage === 'rapid_expansion') {
    mix.add("K");
    mix.add("Ca");
    mix.add("Mg");
    mix.add("S");
    mix.add("Pep");
    rationale.push(tv({ zh: "🎈 快速膨大期 (50-90 DAA)：最大养分消耗。钾驱动大小。钙 + 多肽建立果皮弹性以防止开裂。镁 + 硫开始风味合成。", en: "🎈 Rapid Expansion (50–90 DAA): Maximum nutrient draw. K drives size. Ca + Peptides build skin elasticity to prevent cracking. Mg + S begin flavor synthesis.", ms: "🎈 Pembesaran Pesat (50–90 DAA): Pengambilan nutrien maksimum. K memacu saiz. Ca + Peptida membina keanjalan kulit untuk mencegah rekahan. Mg + S memulakan sintesis rasa." }));
    rate = tv({ zh: "高钾 (N:K ≈ 1:4) + 每10天重施 Ca+B 叶面肥", en: "High K (N:K ≈ 1:4) + Heavy Ca+B Foliar every 10 days", ms: "K Tinggi (N:K ≈ 1:4) + Semburan Daun Ca+B Berat setiap 10 hari" });
    if (variety === 'mk') {
      rationale.push(tv({ zh: "💡 猫山王特供：提高钙/镁比例，防止湿芯和烧壳。", en: "💡 Musang King Special: Boost Ca/Mg ratio to prevent Wet Core and husk burn.", ms: "💡 Khas Musang King: Tingkatkan nisbah Ca/Mg untuk mencegah Teras Basah dan kulit terbakar." }));
      rate += tv({ zh: " (额外添加钙/镁)", en: " (Extra Ca/Mg)", ms: " (Ca/Mg Tambahan)" });
    }
  } else if (stage === 'maturation') {
    mix.add("K");
    mix.add("S");
    mix.add("Mg");
    mix.delete("N");
    rationale.push(tv({ zh: "🟡 成熟期与自然落果：最后 30 天。钾 (K) 驱动最终糖度 (Brix)。硫 (S) + 镁构建标志性的苦甜/奶油“黑金”风味。零氮以防止果肉水化。", en: "🟡 Maturation & Natural Split: Final 30 days. Potassium (K) drives final Brix (sugar). Sulfur (S) + Mg build the signature bitter/creamy 'Black Gold' flavor. Zero N to prevent watery flesh.", ms: "🟡 Pematangan & Rekahan Semula Jadi: 30 hari terakhir. Kalium (K) memacu Brix (gula) akhir. Sulfur (S) + Mg membina rasa pahit/berlemak khas 'Black Gold'. Sifar N untuk mengelakkan isi berair." }));
    if (crop === 'durian') {
      let daaText = "";
      switch (variety) {
        case 'gp':
          daaText = tv({ zh: "金凤 (D198) 自然落果大约在 90–100 DAA。", en: "Golden Phoenix is an early dropper, around 90–100 DAA.", ms: "Golden Phoenix ialah varieti gugur awal, sekitar 90–100 DAA." });
          break;
        case 'mk':
          daaText = tv({ zh: "猫山王 (D197) 自然落果大约在 95–105 DAA。", en: "Musang King drops around 95–105 DAA.", ms: "Musang King gugur sekitar 95–105 DAA." });
          break;
        case 'rp':
          daaText = tv({ zh: "红虾 (D175) 自然落果大约在 100–105 DAA。", en: "Red Prawn drops around 100–105 DAA.", ms: "Udang Merah gugur sekitar 100–105 DAA." });
          break;
        case 'd101':
          daaText = tv({ zh: "红肉 (D101) 自然落果大约在 100–105 DAA。", en: "D101 drops around 100–105 DAA.", ms: "D101 gugur sekitar 100–105 DAA." });
          break;
        case 'tekka':
          daaText = tv({ zh: "竹脚 (D160) 自然落果大约在 100–105 DAA。", en: "Tekka drops around 100–105 DAA.", ms: "Tekka gugur sekitar 100–105 DAA." });
          break;
        case 'd24':
          daaText = tv({ zh: "苏丹王 (D24) 自然落果大约在 105–115 DAA。", en: "D24 (Sultan) drops around 105–115 DAA.", ms: "D24 (Sultan) gugur sekitar 105–115 DAA." });
          break;
        case 'tk':
          daaText = tv({ zh: "松鼠王 (D214) 自然落果大约在 105–110 DAA。", en: "Tupai King drops around 105–110 DAA.", ms: "Tupai King gugur sekitar 105–110 DAA." });
          break;
        case 'bt':
          daaText = tv({ zh: "黑刺 (D200) 自然落果大约在 110–120 DAA。", en: "Black Thorn takes longer to mature, dropping around 110–120 DAA.", ms: "Black Thorn mengambil masa lebih lama untuk matang, gugur sekitar 110–120 DAA." });
          break;
        case 'ioi':
          daaText = tv({ zh: "IOI (D168) 自然落果大约在 110–115 DAA。", en: "IOI drops around 110–115 DAA.", ms: "IOI gugur sekitar 110–115 DAA." });
          break;
        case 'mt':
          daaText = tv({ zh: "金枕头 (D159) 自然落果大约在 120–130 DAA。", en: "Monthong is a late dropper, taking 120–130 DAA for natural split.", ms: "Monthong ialah varieti gugur lewat, mengambil masa 120–130 DAA untuk rekah secara semula jadi." });
          break;
        default:
          daaText = tv({ zh: "一般甘榜克隆品种通常在 90–110 DAA 左右落果。", en: "Generic Kampung clones typically drop around 90–110 DAA.", ms: "Klon Kampung biasa lazimnya gugur sekitar 90–110 DAA." });
          break;
      }
      rationale.push(tv({ zh: `⏱️ 收获窗口期：${daaText} 在预计落果前 7-14 天停止灌溉，以最大化干物质（防止湿芯）。`, en: `⏱️ Harvest Window: ${daaText} Stop irrigation 7-14 days before expected drop to maximize dry matter (prevent wet core).`, ms: `⏱️ Tempoh Tuaian: ${daaText} Hentikan pengairan 7-14 hari sebelum jangkaan gugur untuk memaksimumkan bahan kering (elak isi basah).` }));
    }
    rate = tv({ zh: "土施 SOP (硫酸钾) + 叶面喷施 MgSO4", en: "Soil SOP (Sulfate of Potash) + Foliar MgSO4", ms: "SOP Tanah (Sulfat Kalium) + MgSO4 Semburan Daun" });
  } else if (stage === 'post_harvest') {
    mix.add("N");
    mix.add("Zn");
    mix.add("Fe");
    mix.add("AA");
    mix.add("Humic");
    rationale.push(tv({ zh: "🍂 采后恢复：氮 (N) + 微量元素 + 氨基酸 (AA) 恢复疲惫树木的活力。腐殖酸修复重度采收交通后的土壤结构。", en: "🍂 Post-Harvest Recovery: Nitrogen (N) + Micros + Amino (AA) to restore exhausted tree vigor. Humic acid repairs soil structure after heavy harvest traffic.", ms: "🍂 Pemulihan Lepas Tuai: Nitrogen (N) + Mikro + Amino (AA) untuk memulihkan kecergasan pokok yang keletihan. Asid humik membaiki struktur tanah selepas lalu lintas tuaian yang berat." }));
    rate = tv({ zh: "高氮恢复 (N:K ≈ 2:1) + 灌根", en: "High N Recovery (N:K ≈ 2:1) + Soil Drench", ms: "Pemulihan N Tinggi (N:K ≈ 2:1) + Siraman Tanah" });
  }
  if (weather === 'dry') {
    mix.add("Si");
    mix.add("K");
    mix.add("AA");
    if (mix.has("Ca")) mix.add("B");
    rationale.push(tv({ zh: "☀️ 炎热/干燥：必须添加硅 (Si) 和氨基酸 (AA) 以减少蒸腾。干旱停止钙吸收，需补充叶面钙。", en: "☀️ Hot/Dry: Must add Silicon (Si) and Amino (AA) to reduce transpiration. Drought stops Ca uptake, add foliar Ca.", ms: "☀️ Panas/Kering: Wajib tambah Silikon (Si) dan Amino (AA) untuk mengurangkan transpirasi. Kemarau menghentikan pengambilan Ca, tambah Ca semburan daun." }));
    rate = tv({ zh: "氨基酸: 2ml/L | 硅: 1ml/L (抗逆防护盾)", en: "Amino: 2ml/L | Si: 1ml/L (Stress Shield)", ms: "Amino: 2ml/L | Si: 1ml/L (Perisai Tekanan)" });
    timing = tv({ zh: "晚上喷洒（减少蒸发）", en: "Evening spray (reduce evaporation)", ms: "Semburan petang (kurangkan penyejatan)" });
  } else if (weather === 'wet') {
    mix.add("Mg");
    mix.add("Fe");
    mix.add("AA");
    if (stage !== 'fruit' && stage !== 'pre_flower') mix.add("N");
    rationale.push(tv({ zh: "🌧️ 阴雨：补充流失的镁/铁。氨基酸帮助根系在低氧状态下存活。", en: "🌧️ Rain/Overcast: Replace leached Mg/Fe. Amino Acids help roots survive hypoxia (low oxygen).", ms: "🌧️ Hujan/Mendung: Ganti Mg/Fe yang larut lesap. Asid Amino membantu akar bertahan dalam hipoksia (oksigen rendah)." }));
  }
  if (ec === 'high') {
    if (mix.has("K")) {
      mix.delete("K");
      rationale.push(tv({ zh: "⚠️ 高 EC 警告：已移除盐基钾肥 (KCl/KNO3) 以防止烧根。", en: "⚠️ High EC Alert: Removed salt-based K fertilizers (KCl/KNO3) to prevent root burn.", ms: "⚠️ Amaran EC Tinggi: Baja K berasaskan garam (KCl/KNO3) telah dikeluarkan untuk mencegah akar terbakar." }));
    }
    if (mix.has("N")) {
      mix.delete("N");
      mix.add("AA");
      rationale.push(tv({ zh: "⚠️ 盐碱策略：停止土壤施氮。使用叶面氨基酸作为安全的氮源。", en: "⚠️ Salinity Strategy: Stop soil N. Use Foliar Amino Acids as safe N source.", ms: "⚠️ Strategi Kemasinan: Hentikan N tanah. Gunakan Asid Amino semburan daun sebagai sumber N yang selamat." }));
    }
    mix.add("Humic");
    mix.add("Ca");
    rationale.push(tv({ zh: "🛡️ 缓冲：添加腐殖酸以缓冲盐分，添加钙以置换钠。", en: "🛡️ Buffer: Add Humic to buffer salts, Calcium to displace Sodium.", ms: "🛡️ Penampan: Tambah Humik untuk menampan garam, Kalsium untuk menyesarkan Natrium." }));
  }
  if (symptoms === 'yellow_new') {
    mix.add("Fe");
    mix.add("Mn");
    mix.add("AA");
    rationale.push(tv({ zh: "🚑 缺乏症：新叶发黄表明缺铁/锰。氨基酸有助于吸收。", en: "🚑 Deficiency: New leaf yellowing indicates Iron/Manganese shortage. Amino helps uptake.", ms: "🚑 Kekurangan: Daun muda menguning menunjukkan kekurangan Besi/Mangan. Amino membantu pengambilan." }));
  } else if (symptoms === 'yellow_old') {
    mix.add("Mg");
    mix.add("N");
    rationale.push(tv({ zh: "🚑 缺乏症：老叶发黄通常是移动性元素（氮或镁）。", en: "🚑 Deficiency: Old leaf yellowing is typically Mobile elements (N or Mg).", ms: "🚑 Kekurangan: Daun tua menguning lazimnya disebabkan unsur Mudah Alih (N atau Mg)." }));
  } else if (symptoms === 'fruit_crack') {
    mix.add("Ca");
    mix.add("B");
    mix.add("Pep");
    rationale.push(tv({ zh: "🚑 裂果急救：严重缺钙。必须使用“钙+硼+多肽”组合。", en: "🚑 Cracking Rescue: Severe Calcium deficiency. Must use 'Ca+B+Peptide' trio.", ms: "🚑 Rawatan Rekahan: Kekurangan Kalsium yang teruk. Wajib guna trio 'Ca+B+Peptida'." }));
    rate = tv({ zh: "钙: 3ml/L | 硼: 1ml/L (每5天一次)", en: "Ca: 3ml/L | B: 1ml/L (Every 5 days)", ms: "Ca: 3ml/L | B: 1ml/L (Setiap 5 hari)" });
  } else if (symptoms === 'wet_core') {
    mix.delete("N");
    mix.add("K");
    mix.add("Ca");
    rationale.push(tv({ zh: "🚑 湿芯/水化：氮过量或钾/钙不足。立即停氮。重施钾/钙。", en: "🚑 Wet Core / Watery Flesh: Excess N or low K/Ca. Stop N immediately. Heavy K/Ca application.", ms: "🚑 Teras Basah / Isi Berair: N berlebihan atau K/Ca rendah. Hentikan N serta-merta. Aplikasi K/Ca yang tinggi." }));
  } else if (symptoms === 'burn') {
    if (ec === 'high') {
      rationale.push(tv({ zh: "🔥 叶尖烧焦：由高盐度 (EC) 引起。用水+腐殖酸冲洗。", en: "🔥 Tip Burn: Caused by High Salinity (EC). Flush with water + Humic Acid.", ms: "🔥 Hujung Daun Terbakar: Disebabkan Kemasinan Tinggi (EC). Bilas dengan air + Asid Humik." }));
    } else {
      mix.add("K");
      rationale.push(tv({ zh: "🔥 叶尖烧焦：潜在的缺钾。已添加钾。", en: "🔥 Tip Burn: Potential Potassium deficiency. Added K.", ms: "🔥 Hujung Daun Terbakar: Kemungkinan kekurangan Kalium. K telah ditambah." }));
    }
  } else if (symptoms === 'stunted') {
    mix.add("P");
    mix.add("Zn");
    mix.add("AA");
    mix.add("Humic");
    rationale.push(tv({ zh: "🚑 生长停滞：根系停滞。磷+锌刺激根系，氨基酸提供能量，腐殖酸改善土壤。", en: "🚑 Stunted: Root stagnation. P + Zn to stimulate roots, Amino for energy, Humic to improve soil.", ms: "🚑 Terbantut: Akar tidak aktif. P + Zn untuk merangsang akar, Amino untuk tenaga, Humik untuk memperbaiki tanah." }));
  }
  if (mix.has("Ca") && mix.has("P")) {
    warnings.push(tv({ zh: "⚠️ 钙+磷沉淀风险：使用糖醇钙或分开喷洒。", en: "⚠️ Ca + P Precipitation Risk: Use Sugar Alcohol Ca or spray separately.", ms: "⚠️ Risiko Pemendakan Ca + P: Gunakan Ca Alkohol Gula atau sembur secara berasingan." }));
  }
  if (weather === 'wet' && (mix.has("AA") || mix.has("Pep"))) {
    warnings.push(tv({ zh: "🚫 危险：如果在雨季使用铜制剂，【严禁】与氨基酸/多肽混合 (严重烧伤风险)。", en: "🚫 Danger: If using Copper fungicide in wet season, DO NOT mix with Amino/Peptides (Severe Burn Risk).", ms: "🚫 Bahaya: Jika menggunakan racun kulat Kuprum pada musim hujan, JANGAN campur dengan Amino/Peptida (Risiko Terbakar Teruk)." }));
  }
  if (mix.has("Fe") && mix.has("Ca")) {
    warnings.push(tv({ zh: "⚠️ 铁/钙拮抗：钙可能降低铁的有效性。使用 EDDHA-Fe。", en: "⚠️ Fe/Ca Antagonism: Ca may reduce Fe availability. Use EDDHA-Fe.", ms: "⚠️ Antagonisme Fe/Ca: Ca boleh mengurangkan ketersediaan Fe. Gunakan EDDHA-Fe." }));
  }
  return {
    mixIds: Array.from(mix),
    rationale,
    rate,
    timing,
    compatibility: warnings.length > 0 ? warnings.join(" | ") : compatibility,
    hasWarning: warnings.length > 0
  };
};

// ==========================================
// 3. SUB-COMPONENTS (DEFINED THIRD)
// ==========================================

const NutrientWheel = ({
  onSelect,
  selectedId,
  inhibitionOffsets,
  onOffsetChange,
  recommendedNutrients,
  mode
}) => {
  const svgRef = useRef(null);
  const [draggingId, setDraggingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // NEW: Zoom & Pan State
  const [viewBox, setViewBox] = useState({
    x: 0,
    y: 0,
    w: 800,
    h: 800
  });
  const pointers = useRef(new Map());
  const prevDist = useRef(null);
  const radius = 240;
  const center = 400;
  const nodes = ['N', 'P', 'K', 'Ca', 'Mg', 'S', 'Si', 'Fe', 'Mn', 'Zn', 'Cu', 'B', 'Mo', 'Cl', 'Ni', 'Na', 'Co', 'AA', 'Pep'];
  const nodePositions = useMemo(() => nodes.map((id, index) => {
    const angle = index / nodes.length * 2 * Math.PI - Math.PI / 2;
    return {
      id,
      angle,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  }), []);
  const activeId = hoveredId || selectedId;
  const currentNutrient = useMemo(() => activeId ? NUTRIENTS.find(n => n.id === activeId) : null, [activeId]);
  const startNode = useMemo(() => activeId ? nodePositions.find(n => n.id === activeId) : null, [activeId, nodePositions]);

  // Determine if we are in "Advisor Mode" with a valid recipe
  const isAdvisorActive = mode === 'advisor' && recommendedNutrients && recommendedNutrients.length > 0;

  // NEW: Zoom Helper Functions
  const handleWheel = e => {
    e.preventDefault();
    e.stopPropagation();
    const scale = e.deltaY > 0 ? 1.1 : 0.9;
    zoom(scale);
  };
  const zoom = scaleFactor => {
    setViewBox(prev => {
      const newW = prev.w * scaleFactor;
      const newH = prev.h * scaleFactor;

      // Limits
      if (newW > 1600 || newW < 200) return prev;
      const dx = (prev.w - newW) / 2;
      const dy = (prev.h - newH) / 2;
      return {
        x: prev.x + dx,
        y: prev.y + dy,
        w: newW,
        h: newH
      };
    });
  };
  const handlePointerDownCombined = e => {
    pointers.current.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY
    });
    e.target.setPointerCapture(e.pointerId);
  };
  const handlePointerUpCombined = e => {
    pointers.current.delete(e.pointerId);
    e.target.releasePointerCapture(e.pointerId);
    if (pointers.current.size < 2) {
      prevDist.current = null;
    }
    setDraggingId(null);
  };
  const handlePointerMoveCombined = e => {
    if (pointers.current.has(e.pointerId)) {
      pointers.current.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY
      });
    }
    if (draggingId && svgRef.current) {
      e.preventDefault();
      const point = svgRef.current.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      const svgP = point.matrixTransform(svgRef.current.getScreenCTM().inverse());
      const dx = svgP.x - 400;
      const dy = svgP.y - 400;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const finalDist = Math.min(Math.max(dist, radius + 80), 750);
      onOffsetChange(prev => ({
        ...prev,
        [draggingId]: finalDist
      }));
      return;
    }
    if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (prevDist.current) {
        const scale = prevDist.current / dist;
        const dampenedScale = 1 + (scale - 1) * 1.2;
        zoom(dampenedScale);
      }
      prevDist.current = dist;
    } else if (pointers.current.size === 1 && !draggingId) {
      if (e.movementX !== undefined) {
        const {
          width
        } = e.currentTarget.getBoundingClientRect();
        const scale = viewBox.w / width;
        setViewBox(prev => ({
          ...prev,
          x: prev.x - e.movementX * scale,
          y: prev.y - e.movementY * scale
        }));
      }
    }
  };
  const handlePointerDownNode = (e, linkKey) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    setDraggingId(linkKey);
  };
  const resetView = () => {
    setViewBox({
      x: 0,
      y: 0,
      w: 800,
      h: 800
    });
  };
  const renderLines = () => {
    if (!currentNutrient || !startNode) return null;
    const createOutwardPath = (endNode, linkKey) => {
      const userDist = inhibitionOffsets && inhibitionOffsets[linkKey] ? inhibitionOffsets[linkKey] : 550;
      const dist = userDist;
      const diff = endNode.angle - startNode.angle;
      let midAngle = startNode.angle + diff / 2;
      if (Math.abs(diff) > Math.PI) midAngle += Math.PI;
      const controlX = center + dist * Math.cos(midAngle);
      const controlY = center + dist * Math.sin(midAngle);
      const startX = center + (radius + 20) * Math.cos(startNode.angle);
      const startY = center + (radius + 20) * Math.sin(startNode.angle);
      const endX = center + (radius + 20) * Math.cos(endNode.angle);
      const endY = center + (radius + 20) * Math.sin(endNode.angle);
      return {
        path: `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`,
        labelX: 0.25 * startX + 0.5 * controlX + 0.25 * endX,
        labelY: 0.25 * startY + 0.5 * controlY + 0.25 * endY
      };
    };
    const allowInteraction = currentNutrient.id === selectedId;
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
      id: "arrow-green",
      markerWidth: "10",
      markerHeight: "10",
      refX: "8",
      refY: "5",
      orient: "auto"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0,0 L0,10 L10,5 z",
      fill: "#059669"
    }))), currentNutrient.antagonism.map(targetId => {
      const endNode = nodePositions.find(n => n.id === targetId);
      if (!endNode) return null;
      return /*#__PURE__*/React.createElement("path", {
        key: `ant-${targetId}`,
        d: `M ${startNode.x} ${startNode.y} Q ${center} ${center} ${endNode.x} ${endNode.y}`,
        fill: "none",
        stroke: "#DC2626",
        strokeWidth: "4"
      });
    }), currentNutrient.inhibition && currentNutrient.inhibition.map(item => {
      const endNode = nodePositions.find(n => n.id === item.el);
      if (!endNode) return null;
      const linkKey = `${currentNutrient.id}-${item.el}`;
      const {
        path,
        labelX,
        labelY
      } = createOutwardPath(endNode, linkKey);
      const isDragging = draggingId === linkKey;
      const displayVal = t(item.val);
      // Pill width sized to the label. CJK glyphs are ~2x the width of Latin
      // characters at the same font size, so weight the character count by
      // script. Clamped to a sensible min/max.
      const pillCharW = [...displayVal].reduce((w, ch) =>
        w + (/[\u3000-\u9fff\uff00-\uffef]/.test(ch) ? 15 : 8), 0);
      const pillW = Math.min(220, Math.max(70, pillCharW + 28));
      return /*#__PURE__*/React.createElement("g", {
        key: linkKey
      }, /*#__PURE__*/React.createElement("path", {
        d: path,
        fill: "none",
        stroke: "#059669",
        strokeWidth: "4",
        strokeDasharray: "10,10",
        markerEnd: "url(#arrow-green)"
      }), /*#__PURE__*/React.createElement("g", {
        className: allowInteraction ? "cursor-grab active:cursor-grabbing" : "",
        onPointerDown: allowInteraction ? e => handlePointerDownNode(e, linkKey) : undefined
      }, /*#__PURE__*/React.createElement("rect", {
        x: labelX - pillW / 2,
        y: labelY - 20,
        width: pillW,
        height: "40",
        rx: "12",
        fill: "white",
        stroke: isDragging ? "#059669" : "#F97316",
        strokeWidth: isDragging ? 3 : 2
      }), /*#__PURE__*/React.createElement("text", {
        x: labelX,
        y: labelY + 4,
        textAnchor: "middle",
        className: "text-sm font-bold fill-orange-800 select-none pointer-events-none"
      }, displayVal)));
    }), currentNutrient.synergy?.map(targetId => {
      const endNode = nodePositions.find(n => n.id === targetId);
      if (!endNode) return null;
      return /*#__PURE__*/React.createElement("path", {
        key: `syn-${targetId}`,
        d: `M ${startNode.x} ${startNode.y} Q ${center} ${center} ${endNode.x} ${endNode.y}`,
        fill: "none",
        stroke: "#10B981",
        strokeWidth: "4",
        className: "opacity-60"
      });
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center py-4 w-full h-full max-h-[600px] aspect-square relative group"
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svgRef,
    viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`,
    className: "w-full h-full pointer-events-auto overflow-visible touch-none cursor-move bg-stone-50/20 rounded-full",
    onPointerDown: handlePointerDownCombined,
    onPointerMove: handlePointerMoveCombined,
    onPointerUp: handlePointerUpCombined,
    onPointerCancel: handlePointerUpCombined,
    onPointerLeave: handlePointerUpCombined,
    onWheel: handleWheel
  }, isAdvisorActive && /*#__PURE__*/React.createElement("g", {
    className: "animate-in fade-in zoom-in duration-500"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: 60,
    fill: "#ecfdf5",
    stroke: "#10b981",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: center,
    y: center + 8,
    textAnchor: "middle",
    className: "text-xl font-black fill-emerald-700 tracking-widest"
  }, t('lbl_recipe_center'))), !isAdvisorActive && /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: radius,
    stroke: "#e2e8f0",
    strokeWidth: "4",
    fill: "none"
  }), renderLines(), nodePositions.map(node => {
    const isSelected = activeId === node.id;
    const isRecommended = recommendedNutrients?.includes(node.id) || node.id === 'AA' && recommendedNutrients?.includes('AA') || node.id === 'Pep' && recommendedNutrients?.includes('Pep');
    const isAntag = currentNutrient?.antagonism.includes(node.id);
    const inhibitionData = currentNutrient?.inhibition?.find(i => i.el === node.id);
    const isInhib = !!inhibitionData;
    const isSyn = currentNutrient?.synergy?.includes(node.id);
    const isDimmed = isAdvisorActive && !isRecommended && !isSelected;
    const nut = NUTRIENTS.find(n => n.id === node.id);
    let displayLabel = node.id;
    if (nut) {
      if (CURRENT_LANG === 'zh') {
        // Chinese: elem_ value looks like "氮 (N)" — show the part before " (".
        const translated = t('elem_' + nut.name);
        displayLabel = translated.includes(' (') ? translated.split(' (')[0] : translated;
      } else {
        // English / Malay: the wheel node shows the chemical symbol only (node.id),
        // e.g. "N", "Mg" — never the full element name.
        displayLabel = node.id;
      }
    }
    let fillColor = "white";
    let strokeColor = "#d6d3d1";
    let textColor = "#1c1917";
    let opacity = isDimmed ? 0.2 : 1;
    let scale = isDimmed ? 0.8 : 1;
    if (isSelected) {
      fillColor = "#1c1917";
      strokeColor = "#1c1917";
      textColor = "white";
      scale = 1.1;
      opacity = 1;
    } else if (isInhib) {
      fillColor = "#f97316";
      strokeColor = "#ea580c";
      textColor = "white";
    } else if (isAntag) {
      fillColor = "#dc2626";
      strokeColor = "#b91c1c";
      textColor = "white";
    } else if (isSyn) {
      fillColor = "#059669";
      strokeColor = "#047857";
      textColor = "white";
    } else if (isRecommended) {
      fillColor = "#fef3c7";
      strokeColor = "#d97706";
      textColor = "#92400e";
      scale = 1.2;
    }
    let fontSizeClass = isSelected ? 'text-6xl' : 'text-3xl';
    let yOffset = isSelected ? 18 : 10;
    if (displayLabel.length === 2) {
      fontSizeClass = isSelected ? 'text-4xl' : 'text-lg';
      yOffset = isSelected ? 12 : 6;
    } else if (displayLabel.length >= 3) {
      fontSizeClass = isSelected ? 'text-2xl' : 'text-sm';
      yOffset = isSelected ? 8 : 5;
    }
    // Latin-script label tuning: the 'Pep' node label is wide.
    if (CURRENT_LANG !== 'zh' && !isSelected && node.id === 'Pep') {
      fontSizeClass = 'text-2xl';
    }
    return /*#__PURE__*/React.createElement("g", {
      key: node.id,
      onClick: () => onSelect(NUTRIENTS.find(n => n.id === node.id)),
      onMouseEnter: () => setHoveredId(node.id),
      onMouseLeave: () => setHoveredId(null),
      className: "cursor-pointer transition-all duration-500 ease-out",
      style: {
        transformBox: 'fill-box',
        transformOrigin: 'center',
        transform: `scale(${scale})`,
        opacity: opacity
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: node.x,
      cy: node.y,
      r: isSelected ? 50 : 32,
      fill: fillColor,
      stroke: strokeColor,
      strokeWidth: isSelected || isRecommended ? 7 : 3,
      className: `transition-all duration-300 shadow-xl ${isRecommended && !isSelected ? 'animate-pulse' : ''}`
    }), /*#__PURE__*/React.createElement("text", {
      x: node.x,
      y: node.y + yOffset,
      textAnchor: "middle",
      className: `font-bold select-none pointer-events-none transition-all duration-300 ${fontSizeClass}`,
      fill: textColor
    }, displayLabel));
  })), (viewBox.w !== 800 || viewBox.x !== 0 || viewBox.y !== 0) && /*#__PURE__*/React.createElement("button", {
    onClick: resetView,
    className: "absolute bottom-4 right-4 bg-white/90 backdrop-blur shadow-lg border border-stone-200 p-2 rounded-full text-stone-600 hover:text-stone-900 transition-all animate-in zoom-in",
    title: "Reset Zoom"
  }, /*#__PURE__*/React.createElement(RotateCcw, {
    size: 20
  })));
};
const PHChart = ({ lang }) => {
  const [hoverPH, setHoverPH] = useState(6.5);
  const [selectedEl, setSelectedEl] = useState(null);
  const containerRef = useRef(null);
  const [isDraggingLine, setIsDraggingLine] = useState(false);
  const rowHeight = 45;
  const topPadding = 50;
  const bottomPadding = 30;
  const chartHeight = topPadding + PH_AVAILABILITY_DATA.length * rowHeight + bottomPadding;
  const updatePH = clientX => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let newPH = 4.0 + x / width * 5.0;
    newPH = Math.max(4.0, Math.min(9.0, newPH));
    setHoverPH(parseFloat(newPH.toFixed(1)));
  };
  const handleLineDown = e => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggingLine(true);
    e.target.setPointerCapture(e.pointerId);
  };
  const handleLineMove = e => {
    if (!isDraggingLine) return;
    e.stopPropagation();
    e.preventDefault();
    updatePH(e.clientX);
  };
  const handleLineUp = e => {
    setIsDraggingLine(false);
    e.target.releasePointerCapture(e.pointerId);
  };
  const handleElClick = id => {
    setSelectedEl(selectedEl === id ? null : id);
  };
  const activeElementData = selectedEl ? PH_AVAILABILITY_DATA.find(e => e.id === selectedEl) : null;
  const getAvailabilityStatus = (el, currentPH) => {
    const points = el.points;
    let availability = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      if (currentPH >= p1[0] && currentPH <= p2[0]) {
        const t = (currentPH - p1[0]) / (p2[0] - p1[0]);
        availability = p1[1] + t * (p2[1] - p1[1]);
        break;
      }
    }
    availability = Math.max(0, Math.min(1, availability));
    if (availability > 0.8) return {
      label: "ph_optimal",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      value: availability
    };
    if (availability > 0.4) return {
      label: "ph_sufficient",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      value: availability
    };
    return {
      label: "ph_limited",
      color: "text-red-600",
      bg: "bg-red-100",
      value: availability
    };
  };
  const tip = useMemo(() => {
    if (hoverPH >= 6.0 && hoverPH <= 6.5) {
      return {
        title: t('ph_tip_optimal_title'),
        desc: t('ph_tip_optimal_desc'),
        bg: "bg-emerald-50 border-emerald-200",
        text: "text-emerald-800",
        icon: CheckCircle,
        iconColor: "text-emerald-600"
      };
    }
    const limited = PH_AVAILABILITY_DATA.filter(el => getAvailabilityStatus(el, hoverPH).label === 'ph_limited').map(e => {
      const fullLabel = t('elem_' + e.name);
      return fullLabel.includes(' (') ? fullLabel.split(' (')[0] : fullLabel;
    });
    if (hoverPH < 6.0) {
      const listStr = limited.length > 0 ? limited.slice(0, 3).join(', ') + ' ' + t('ph_others') : t('ph_macros');
      return {
        title: t('ph_tip_acidic_title'),
        desc: t('ph_tip_acidic_desc').replace('{val}', hoverPH).replace('{list}', listStr),
        bg: "bg-orange-50 border-orange-200",
        text: "text-orange-800",
        icon: AlertTriangle,
        iconColor: "text-orange-600"
      };
    } else {
      const listStr = limited.length > 0 ? limited.slice(0, 3).join(', ') + ' ' + t('ph_others') : tv({ zh: '微量元素', en: 'Micronutrients', ms: "Mikronutrien" });
      return {
        title: t('ph_tip_alkaline_title'),
        desc: t('ph_tip_alkaline_desc').replace('{val}', hoverPH).replace('{list}', listStr),
        bg: "bg-blue-50 border-blue-200",
        text: "text-blue-800",
        icon: Info,
        iconColor: "text-blue-600"
      };
    }
  }, [hoverPH, lang]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-10 rounded-[2.5rem] border-2 border-stone-300 shadow-sm animate-slide-up print:hidden relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-100 text-indigo-600 rounded-xl"
  }, /*#__PURE__*/React.createElement(FlaskConical, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 tracking-widest"
  }, t('ph_chart_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-600 font-bold opacity-80"
  }, t('ph_chart_desc')))), /*#__PURE__*/React.createElement("div", {
    className: `mb-6 flex gap-4 p-4 border rounded-xl items-start transition-colors duration-300 min-h-[110px] ${tip.bg}`
  }, /*#__PURE__*/React.createElement(tip.icon, {
    className: `${tip.iconColor} shrink-0 mt-0.5`,
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: `font-bold ${tip.text} text-sm tracking-wide`
  }, tip.title), /*#__PURE__*/React.createElement("p", {
    className: `${tip.text} text-sm mt-1 font-medium leading-relaxed opacity-90`
  }, tip.desc))), /*#__PURE__*/React.createElement("div", {
    className: "relative border-2 border-stone-200 rounded-xl bg-stone-50 touch-pan-y",
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full",
    style: {
      height: `${chartHeight}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 grid grid-cols-10 pointer-events-none opacity-20"
  }, [...Array(10)].map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "border-r border-stone-400 h-full"
  }))), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 1000 ${chartHeight}`,
    className: "w-full h-full absolute inset-0 z-10",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    className: "text-xs font-bold fill-stone-400"
  }, [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((val, i) => {
    const x = (val - 4) / 5 * 1000;
    return /*#__PURE__*/React.createElement("text", {
      key: val,
      x: x,
      y: "20",
      textAnchor: "middle"
    }, val);
  })), PH_AVAILABILITY_DATA.map((el, idx) => {
    const isSelected = selectedEl === el.id;
    const isDimmed = selectedEl && !isSelected;
    const rowY = topPadding + idx * rowHeight;
    const reversedPoints = [...el.points].reverse();
    let d = `M ${(el.points[0][0] - 4) / 5 * 1000} ${rowY} `;
    el.points.forEach(pt => {
      const x = (pt[0] - 4) / 5 * 1000;
      const y = rowY - pt[1] * 16;
      d += `L ${x} ${y} `;
    });
    reversedPoints.forEach(pt => {
      const x = (pt[0] - 4) / 5 * 1000;
      const y = rowY + pt[1] * 16;
      d += `L ${x} ${y} `;
    });
    d += "Z";
    return /*#__PURE__*/React.createElement("g", {
      key: el.id,
      onClick: e => {
        e.stopPropagation();
        handleElClick(el.id);
      },
      className: "cursor-pointer transition-all duration-300",
      style: {
        opacity: isDimmed ? 0.2 : 1
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: rowY - 20,
      width: "1000",
      height: "40",
      fill: "transparent"
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: el.color,
      className: `transition-opacity duration-300 ${isSelected ? 'opacity-100 drop-shadow-md' : 'opacity-80 hover:opacity-100'}`
    }), /*#__PURE__*/React.createElement("text", {
      x: "15",
      y: rowY + 5,
      className: "text-xs font-black uppercase pointer-events-none select-none",
      style: {
        fontSize: isSelected ? '22px' : '13px',
        fill: '#0c0a09',
        stroke: 'rgba(255,255,255,0.85)',
        strokeWidth: '4px',
        paintOrder: 'stroke',
        transition: 'font-size 0.2s ease-out'
      }
    }, t('elem_' + el.name)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 bottom-0 w-16 -ml-8 z-20 cursor-ew-resize group touch-none flex flex-col items-center",
    style: {
      left: `${(hoverPH - 4) / 5 * 100}%`
    },
    onPointerDown: handleLineDown,
    onPointerMove: handleLineMove,
    onPointerUp: handleLineUp,
    onPointerCancel: handleLineUp
  }, /*#__PURE__*/React.createElement("div", {
    className: `sticky top-4 mt-8 bg-white text-red-600 text-sm font-black px-3 py-1.5 rounded-lg shadow-xl border-2 border-red-600 flex items-center justify-center gap-1 transition-transform select-none ${isDraggingLine ? 'scale-110' : 'group-hover:scale-105'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "opacity-75 text-[10px] font-bold"
  }, "pH"), hoverPH), /*#__PURE__*/React.createElement("div", {
    className: `absolute top-0 bottom-0 border-l-2 border-dashed border-red-600/50 transition-opacity pointer-events-none -z-10 ${isDraggingLine ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-10 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-100 text-indigo-600 rounded-xl"
  }, /*#__PURE__*/React.createElement(BarChart3, {
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('ph_breakdown_title'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, ['Macro', 'Secondary', 'Micro', 'Beneficial', 'Biostimulant'].map(category => {
    const categoryElements = PH_AVAILABILITY_DATA.filter(p => {
      const n = NUTRIENTS.find(nut => nut.id === p.id);
      return n && n.type === category;
    });
    if (categoryElements.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: category,
      className: "bg-stone-50 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center px-5 py-4 border-b border-stone-200 bg-stone-100/50"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-black text-sm text-stone-400 uppercase tracking-widest"
    }, t('cat_' + category)), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-black text-red-600 bg-white px-2 py-1 rounded border border-red-100 shadow-sm"
    }, "pH ", hoverPH)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col divide-y divide-stone-100"
    }, categoryElements.map(el => {
      const status = getAvailabilityStatus(el, hoverPH);
      const percent = Math.round(status.value * 100);
      const isSelected = selectedEl === el.id;
      const isDimmed = selectedEl && !isSelected;
      let d = "";
      const height = 30;
      let startX = (el.points[0][0] - 4) / 5 * 100;
      let startY = height - el.points[0][1] * height;
      d += `M ${startX} ${height} L ${startX} ${startY} `;
      el.points.forEach(pt => {
        const x = (pt[0] - 4) / 5 * 100;
        const y = height - pt[1] * height;
        d += `L ${x} ${y} `;
      });
      const lastPt = el.points[el.points.length - 1];
      let endX = (lastPt[0] - 4) / 5 * 100;
      d += `L ${endX} ${height} Z`;
      const meta = ION_META[el.id] || {
        form: el.id,
        leach_desc: "-",
        grip_desc: "-",
        compete: "-"
      };
      return /*#__PURE__*/React.createElement("div", {
        key: el.id,
        onClick: () => handleElClick(el.id),
        className: `relative transition-all duration-200 ${isSelected ? 'bg-white z-10' : 'bg-transparent hover:bg-stone-50'}`,
        style: {
          opacity: isDimmed ? 0.4 : 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: `absolute top-0 bottom-0 border-l-2 border-dashed border-red-600/40 pointer-events-none z-0 transition-opacity duration-75 ${isDraggingLine ? 'opacity-100' : 'opacity-40'}`,
        style: {
          left: `${(hoverPH - 4) / 5 * 100}%`
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "relative z-10 px-5 pt-4 pb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center mb-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: `w-3 h-3 rounded-full shadow-sm ring-1 ring-black/5 transition-transform ${isSelected ? 'scale-125' : ''}`,
        style: {
          backgroundColor: el.color
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-sm transition-colors",
        style: {
          color: isSelected ? 'black' : el.color
        }
      }, t('elem_' + el.name))), /*#__PURE__*/React.createElement("span", {
        className: "font-black text-[10px] px-2 py-0.5 rounded-md border transition-all",
        style: {
          backgroundColor: `${el.color}15`,
          color: el.color,
          borderColor: `${el.color}40`,
          transform: isSelected ? 'scale(1.1)' : 'scale(1)'
        }
      }, percent, "%")), isSelected && /*#__PURE__*/React.createElement("div", {
        className: "mb-4 mt-3 animate-in slide-in-from-top-2 fade-in duration-200"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center p-4 bg-stone-50 rounded-t-xl border-t-2 border-x-2 border-stone-200"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "text-[11px] font-black uppercase tracking-widest text-stone-500 block mb-1"
      }, t('lbl_ionic_form')), /*#__PURE__*/React.createElement("span", {
        className: "text-3xl font-black text-stone-900 tracking-wider"
      }, meta.form)), /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-black shadow-md",
        style: {
          backgroundColor: el.color
        }
      }, el.id)), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col md:grid md:grid-cols-3 gap-0.5 bg-stone-200 border-2 border-stone-200 rounded-b-xl overflow-hidden shadow-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-3 flex flex-row md:flex-col justify-between md:justify-center items-center text-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-black text-stone-900 uppercase tracking-tight flex items-center gap-2 md:gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-1.5 bg-blue-50 rounded-lg text-blue-600 shrink-0 md:bg-transparent md:p-0"
      }, /*#__PURE__*/React.createElement(CloudRain, {
        size: 14
      })), t('lbl_leach_risk')), /*#__PURE__*/React.createElement("span", {
        className: `text-sm md:text-base font-black leading-tight text-right md:text-center ${meta.leachHigh ? 'text-red-600' : 'text-stone-900'}`
      }, tv(meta.leach_desc))), /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-3 flex flex-row md:flex-col justify-between md:justify-center items-center text-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-black text-stone-900 uppercase tracking-tight flex items-center gap-2 md:gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-1.5 bg-stone-100 rounded-lg text-stone-600 shrink-0 md:bg-transparent md:p-0"
      }, /*#__PURE__*/React.createElement(Layers, {
        size: 14
      })), t('lbl_soil_grip')), /*#__PURE__*/React.createElement("span", {
        className: "text-sm md:text-base font-black text-stone-900 leading-tight text-right md:text-center"
      }, tv(meta.grip_desc))), /*#__PURE__*/React.createElement("div", {
        className: "bg-white p-3 flex flex-row md:flex-col justify-between md:justify-center items-center text-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-black text-stone-900 uppercase tracking-tight flex items-center gap-2 md:gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-1.5 bg-amber-50 rounded-lg text-amber-600 shrink-0 md:bg-transparent md:p-0"
      }, /*#__PURE__*/React.createElement(Zap, {
        size: 14
      })), t('lbl_compete')), /*#__PURE__*/React.createElement("span", {
        className: "text-sm md:text-base font-black text-stone-900 leading-tight text-right md:text-center max-w-[60%] md:max-w-full"
      }, tv(meta.compete) === t('lbl_none') || tv(meta.compete) === '无' || tv(meta.compete) === 'None' ? t('lbl_none') : tv(meta.compete)))))), /*#__PURE__*/React.createElement("div", {
        className: "h-8 w-full bg-stone-100 relative border-t border-stone-200 z-10"
      }, /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 100 30",
        preserveAspectRatio: "none",
        className: "w-full h-full absolute inset-0"
      }, /*#__PURE__*/React.createElement("path", {
        d: d,
        fill: el.color,
        fillOpacity: "0.9",
        stroke: "none"
      })), /*#__PURE__*/React.createElement("span", {
        className: "absolute bottom-0 left-1 text-[8px] font-bold text-stone-400 leading-none pointer-events-none"
      }, "4"), /*#__PURE__*/React.createElement("span", {
        className: "absolute bottom-0 right-1 text-[8px] font-bold text-stone-400 leading-none pointer-events-none"
      }, "9")));
    })));
  })));
};
const MixRulesPanel = ({ lang }) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-10 rounded-[2.5rem] border-2 border-stone-300 shadow-sm animate-slide-up space-y-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-red-100 text-red-600 rounded-xl"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('mix_rules'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 rounded-[2rem] border-2 border-red-100 overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-8 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Beaker, {
    size: 200,
    className: "text-red-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-red-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-xl text-red-900 uppercase tracking-widest"
  }, t('mix_protocol_gold'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-lg text-red-800/80 leading-relaxed mb-8"
  }, t('mix_protocol_gold_desc')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 md:p-6 rounded-2xl border-2 border-red-100 shadow-sm flex flex-col md:flex-row md:items-center gap-3 md:gap-5 text-left transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-sky-100 text-sky-600 rounded-xl shrink-0 self-start"
  }, /*#__PURE__*/React.createElement(Wind, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-lg md:text-xl text-stone-900 uppercase tracking-wide"
  }, t('mix_protocol_step1')), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg font-bold text-stone-500 mt-1 leading-relaxed"
  }, t('mix_protocol_step1_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 md:p-6 rounded-2xl border-2 border-red-100 shadow-sm flex flex-col md:flex-row md:items-center gap-3 md:gap-5 text-left transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-amber-100 text-amber-600 rounded-xl shrink-0 self-start"
  }, /*#__PURE__*/React.createElement(Beaker, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-lg md:text-xl text-stone-900 uppercase tracking-wide"
  }, t('mix_protocol_step2')), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg font-bold text-stone-500 mt-1 leading-relaxed"
  }, t('mix_protocol_step2_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 md:p-6 rounded-2xl border-2 border-red-100 shadow-sm flex flex-col md:flex-row md:items-center gap-3 md:gap-5 text-left transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-emerald-100 text-emerald-600 rounded-xl shrink-0 self-start"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-lg md:text-xl text-stone-900 uppercase tracking-wide"
  }, t('mix_protocol_step3')), /*#__PURE__*/React.createElement("p", {
    className: "text-base md:text-lg font-bold text-stone-500 mt-1 leading-relaxed"
  }, t('mix_protocol_step3_desc'))))))), MIX_RULES.map((rule, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-6 md:p-8 bg-stone-50 rounded-[2rem] border-2 border-stone-200 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center transition-all hover:scale-[1.01] hover:shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-4 rounded-2xl ${rule.status === 'status_incompatible' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 32
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-black text-2xl text-stone-900 mb-2"
  }, t(rule.a), " + ", t(rule.b)), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-stone-500 text-xl"
  }, t(rule.reason)))))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.5rem] border-2 border-violet-100 bg-violet-50/50 p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Scale, {
    size: 200,
    className: "text-violet-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-violet-600 text-white rounded-xl shadow-lg"
  }, /*#__PURE__*/React.createElement(Scale, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('unit_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-violet-600 font-bold opacity-80"
  }, t('unit_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-[2rem] border-2 border-violet-100 shadow-sm overflow-hidden relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-violet-100"
  }, [{
    unit: 'unit_row_ratio',
    targets: 'unit_ratio_targets',
    reason: 'unit_ratio_reason'
  }, {
    unit: 'unit_row_percent',
    targets: 'unit_percent_targets',
    reason: 'unit_percent_reason'
  }, {
    unit: 'unit_row_ppm',
    targets: 'unit_ppm_targets',
    reason: 'unit_ppm_reason'
  }].map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-6 md:p-8 flex flex-col gap-6 hover:bg-violet-50/30 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-violet-100 text-violet-700 px-4 py-2 rounded-xl text-2xl font-black min-w-[3.5rem] text-center"
  }, t(item.unit))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black uppercase tracking-widest text-violet-400 block mb-2"
  }, t('unit_col_target')), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-stone-700 leading-snug"
  }, t(item.targets))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black uppercase tracking-widest text-violet-400 block mb-2"
  }, t('unit_col_reason')), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-bold text-stone-500 leading-relaxed"
  }, t(item.reason))))))))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.5rem] border-2 border-indigo-100 bg-indigo-50/50 p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Atom, {
    size: 200,
    className: "text-indigo-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-indigo-600 text-white rounded-xl shadow-lg"
  }, /*#__PURE__*/React.createElement(Atom, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('chel_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-indigo-600 font-bold opacity-80"
  }, t('chel_subtitle')))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-[0.2em] text-indigo-400 block ml-2 mb-2"
  }, t('chel_lbl_synthetic')), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-indigo-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('chel_edta')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-stone-100 px-4 py-2 rounded-xl text-stone-500 border border-stone-200 whitespace-nowrap"
  }, t('chel_badge_ph_low'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-500 leading-relaxed"
  }, t('chel_edta_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-indigo-100 shadow-md transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-indigo-800"
  }, t('chel_deta')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-indigo-50 px-4 py-2 rounded-xl text-indigo-500 border border-indigo-100 whitespace-nowrap"
  }, t('chel_badge_ph_med'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_deta_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-amber-100 shadow-md transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-amber-600"
  }, t('chel_dtpa')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-amber-50 px-4 py-2 rounded-xl text-amber-600 border border-amber-100 whitespace-nowrap"
  }, t('chel_badge_ph_med'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_dtpa_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-indigo-200 shadow-md transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-indigo-900"
  }, t('chel_eddha')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-indigo-100 px-4 py-2 rounded-xl text-indigo-600 border border-indigo-200 whitespace-nowrap"
  }, t('chel_badge_ph_wide'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_eddha_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 mt-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-[0.2em] text-emerald-600 block ml-2 mb-2"
  }, t('chel_lbl_organic')), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50 p-6 md:p-8 rounded-[2rem] border-2 border-emerald-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-emerald-900"
  }, t('chel_amino')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-emerald-200/50 px-4 py-2 rounded-xl text-emerald-800 border border-emerald-200/50 whitespace-nowrap"
  }, t('chel_badge_fast'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_amino_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-sky-50 p-6 md:p-8 rounded-[2rem] border-2 border-sky-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-sky-900"
  }, t('chel_polyol')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-sky-200/50 px-4 py-2 rounded-xl text-sky-800 border border-sky-200/50 whitespace-nowrap"
  }, t('chel_badge_fast'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_polyol_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 p-6 md:p-8 rounded-[2rem] border-2 border-amber-100 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-amber-900"
  }, t('chel_fulvic')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-amber-200/50 px-4 py-2 rounded-xl text-amber-800 border border-amber-200/50 whitespace-nowrap"
  }, t('chel_badge_univ'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_fulvic_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50 p-6 md:p-8 rounded-[2rem] border-2 border-stone-200 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-800"
  }, t('chel_ligno')), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black bg-stone-200/50 px-4 py-2 rounded-xl text-stone-600 border border-stone-300/50 whitespace-nowrap"
  }, t('chel_badge_univ'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('chel_ligno_desc'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-100/50 p-6 md:p-8 rounded-[2rem] border-2 border-stone-200 shadow-sm transition-transform hover:scale-[1.01]"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-700 mb-3"
  }, t('chel_wood_vinegar')), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-500"
  }, t('chel_wood_vinegar_desc')))))), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.5rem] border-2 border-sky-100 bg-sky-50/50 p-6 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
  }, /*#__PURE__*/React.createElement(Droplets, {
    size: 200,
    className: "text-sky-900"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-center gap-3 mb-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-sky-500 text-white rounded-xl shadow-lg"
  }, /*#__PURE__*/React.createElement(Droplets, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-stone-900 uppercase tracking-widest"
  }, t('adj_title')), /*#__PURE__*/React.createElement("p", {
    className: "text-sky-600 font-bold opacity-80"
  }, t('adj_subtitle')))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2rem] border-2 border-sky-100 shadow-sm transition-transform hover:scale-[1.01] flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mb-3"
  }, /*#__PURE__*/React.createElement(ShieldCheck, {
    className: "text-emerald-500",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('adj_nis_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-500 leading-relaxed"
  }, t('adj_nis_desc')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-sky-50 p-6 md:p-8 rounded-[2rem] border-2 border-sky-200 shadow-sm transition-transform hover:scale-[1.01] flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mb-3"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "text-sky-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('adj_si_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed"
  }, t('adj_si_desc'))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-orange-50 p-6 md:p-8 rounded-[2rem] border-2 border-orange-200 shadow-sm transition-transform hover:scale-[1.01] relative z-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center mb-3"
  }, /*#__PURE__*/React.createElement(Flower2, {
    className: "text-orange-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-orange-900"
  }, t('adj_orange_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed mb-4"
  }, t('adj_orange_desc')), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-orange-800 p-4 bg-orange-100/50 rounded-xl border border-orange-200/50 mb-6 leading-relaxed"
  }, t('adj_orange_warn')), /*#__PURE__*/React.createElement("div", {
    className: "bg-yellow-50 rounded-xl p-5 border-l-8 border-yellow-400 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 items-center mb-3"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-yellow-600",
    size: 28
  }), /*#__PURE__*/React.createElement("h5", {
    className: "font-black text-2xl text-yellow-900 uppercase tracking-wide"
  }, t('adj_bee_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-yellow-800 leading-relaxed whitespace-pre-line"
  }, t('adj_bee_desc'))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-stone-900/5 p-6 md:p-8 rounded-[2rem] border-2 border-stone-200 shadow-sm transition-transform hover:scale-[1.01] relative z-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 items-center mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-stone-800 rounded-xl text-white"
  }, /*#__PURE__*/React.createElement(Skull, {
    size: 24
  })), /*#__PURE__*/React.createElement("h4", {
    className: "font-black text-2xl text-stone-900"
  }, t('adj_diy_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xl text-stone-600 leading-relaxed",
    dangerouslySetInnerHTML: {
      __html: t('adj_diy_desc')
    }
  })))));
};
const SmartAdvisorPanel = ({
  advisorState,
  setAdvisorState,
  lang
}) => {
  const [draftState, setDraftState] = useState(advisorState);
  useEffect(() => {
    if (advisorState.weather !== draftState.weather || advisorState.ec !== draftState.ec) {
      setDraftState(prev => ({
        ...prev,
        weather: advisorState.weather,
        ec: advisorState.ec
      }));
    }
  }, [advisorState.weather, advisorState.ec]);
  const handleUpdate = () => {
    setAdvisorState(draftState);
  };
  const handleReset = () => {
    const resetState = {
      ...draftState,
      weather: 'norm',
      ec: 'opt',
      stage: 'bloom',
      symptoms: 'none'
    };
    setDraftState(resetState);
  };
  const recommendation = useMemo(() => getSmartRecommendation(advisorState), [advisorState, lang]);
  const isDirty = JSON.stringify(draftState) !== JSON.stringify(advisorState);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Calculator, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black uppercase tracking-widest text-stone-800"
  }, t('advisor'))), /*#__PURE__*/React.createElement("button", {
    onClick: handleReset,
    className: "p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors",
    title: t('lbl_reset')
  }, /*#__PURE__*/React.createElement(RotateCcw, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_crop_type')), /*#__PURE__*/React.createElement("select", {
    value: draftState.crop,
    onChange: e => setDraftState({
      ...draftState,
      crop: e.target.value
    }),
    className: "w-full p-3 bg-stone-50 border border-stone-100 rounded-xl font-bold text-stone-800 focus:outline-none"
  }, SOIL_OPTIONS.cropType.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), draftState.crop === 'durian' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_variety')), /*#__PURE__*/React.createElement("select", {
    value: draftState.variety,
    onChange: e => setDraftState({
      ...draftState,
      variety: e.target.value
    }),
    className: "w-full p-3 bg-stone-50 border border-stone-100 rounded-xl font-bold text-stone-800 focus:outline-none"
  }, SOIL_OPTIONS.cropVariety.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_tree_age')), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "50",
    value: draftState.age,
    onChange: e => setDraftState({
      ...draftState,
      age: e.target.value
    }),
    className: "w-full p-3 bg-stone-50 border border-stone-100 rounded-xl font-bold text-stone-800 focus:outline-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_weather')), /*#__PURE__*/React.createElement("select", {
    value: draftState.weather,
    onChange: e => setDraftState({
      ...draftState,
      weather: e.target.value
    }),
    className: "w-full p-3 bg-sky-50 border border-sky-100 rounded-xl font-bold text-sky-800 focus:outline-none"
  }, SOIL_OPTIONS.weather.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_ec')), /*#__PURE__*/React.createElement("select", {
    value: draftState.ec,
    onChange: e => setDraftState({
      ...draftState,
      ec: e.target.value
    }),
    className: "w-full p-3 bg-purple-50 border border-purple-100 rounded-xl font-bold text-purple-800 focus:outline-none"
  }, SOIL_OPTIONS.ec.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 md:col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_crop_stage')), /*#__PURE__*/React.createElement("select", {
    value: draftState.stage,
    onChange: e => setDraftState({
      ...draftState,
      stage: e.target.value
    }),
    className: "w-full p-3 bg-emerald-50 border border-emerald-100 rounded-xl font-bold text-emerald-800 focus:outline-none"
  }, SOIL_OPTIONS.cropStage.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label)))), draftState.stage === 'maturation' && draftState.crop === 'durian' && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 p-3 bg-emerald-100/50 border border-emerald-200 rounded-xl flex gap-3 items-start animate-in fade-in slide-in-from-top-1"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 18,
    className: "text-emerald-600 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-emerald-800 leading-snug"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black uppercase tracking-wide text-xs block mb-0.5 opacity-80"
  }, tv({ zh: "\u9884\u8BA1\u6536\u83B7\u7A97\u53E3\u671F", en: "Expected Harvest Window", ms: "Jangkaan Tempoh Tuaian" })), draftState.variety === 'gp' && tv({ zh: '金凤 (D198) 自然落果大约在 90–100 DAA。', en: 'Golden Phoenix (D198) naturally drops around 90–100 DAA.', ms: "Golden Phoenix (D198) gugur secara semula jadi sekitar 90–100 DAA." }), draftState.variety === 'mk' && tv({ zh: '猫山王 (D197) 自然落果大约在 95–105 DAA。', en: 'Musang King (D197) naturally drops around 95–105 DAA.', ms: "Musang King (D197) gugur secara semula jadi sekitar 95–105 DAA." }), draftState.variety === 'rp' && tv({ zh: '红虾 (D175) 自然落果大约在 100–105 DAA。', en: 'Red Prawn (D175) naturally drops around 100–105 DAA.', ms: "Udang Merah (D175) gugur secara semula jadi sekitar 100–105 DAA." }), draftState.variety === 'd101' && tv({ zh: '红肉 (D101) 自然落果大约在 100–105 DAA。', en: 'D101 naturally drops around 100–105 DAA.', ms: "D101 gugur secara semula jadi sekitar 100–105 DAA." }), draftState.variety === 'tekka' && tv({ zh: '竹脚 (D160) 自然落果大约在 100–105 DAA。', en: 'Tekka (D160) naturally drops around 100–105 DAA.', ms: "Tekka (D160) gugur secara semula jadi sekitar 100–105 DAA." }), draftState.variety === 'd24' && tv({ zh: '苏丹王 (D24) 自然落果大约在 105–115 DAA。', en: 'D24 (Sultan) naturally drops around 105–115 DAA.', ms: "D24 (Sultan) gugur secara semula jadi sekitar 105–115 DAA." }), draftState.variety === 'tk' && tv({ zh: '松鼠王 (D214) 自然落果大约在 105–110 DAA。', en: 'Tupai King (D214) naturally drops around 105–110 DAA.', ms: "Tupai King (D214) gugur secara semula jadi sekitar 105–110 DAA." }), draftState.variety === 'bt' && tv({ zh: '黑刺 (D200) 自然落果大约在 110–120 DAA。', en: 'Black Thorn (D200) naturally drops around 110–120 DAA.', ms: "Black Thorn (D200) gugur secara semula jadi sekitar 110–120 DAA." }), draftState.variety === 'ioi' && tv({ zh: 'IOI (D168) 自然落果大约在 110–115 DAA。', en: 'IOI / Hajah Hasmah (D168) naturally drops around 110–115 DAA.', ms: "IOI / Hajah Hasmah (D168) gugur secara semula jadi sekitar 110–115 DAA." }), draftState.variety === 'mt' && tv({ zh: '金枕头 (D159) 自然落果大约在 120–130 DAA。', en: 'Monthong (D159) naturally drops around 120–130 DAA.', ms: "Monthong (D159) gugur secara semula jadi sekitar 120–130 DAA." }), draftState.variety === 'generic' && tv({ zh: '一般甘榜克隆品种通常在 90–110 DAA 左右落果。', en: 'Generic/Kampung clones typically drop around 90–110 DAA.', ms: "Klon Generik/Kampung lazimnya gugur sekitar 90–110 DAA." })))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 md:col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-stone-500 uppercase tracking-wide"
  }, t('lbl_leaf_analysis')), /*#__PURE__*/React.createElement("select", {
    value: draftState.symptoms,
    onChange: e => setDraftState({
      ...draftState,
      symptoms: e.target.value
    }),
    className: "w-full p-3 bg-amber-50 border border-amber-100 rounded-xl font-bold text-amber-800 focus:outline-none"
  }, SOIL_OPTIONS.symptoms.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label)))))), /*#__PURE__*/React.createElement("button", {
    onClick: handleUpdate,
    className: `w-full py-4 mt-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg
        ${isDirty ? 'bg-emerald-600 text-white shadow-emerald-200 hover:bg-emerald-700 animate-pulse' : 'bg-stone-100 text-stone-400 cursor-default'}`
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 24
  }), t('lbl_calculate')), /*#__PURE__*/React.createElement("div", {
    key: JSON.stringify(recommendation),
    className: "mt-6 bg-emerald-50/60 p-6 md:p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl relative overflow-hidden animate-slide-up space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-6 opacity-10"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 120,
    className: "text-emerald-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-emerald-800 text-base font-black uppercase tracking-widest"
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    size: 24
  }), " ", t('lbl_recommendation')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, recommendation.mixIds.map((item, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "bg-white border-2 border-emerald-200 text-emerald-900 px-6 py-3 rounded-2xl font-bold text-xl shadow-sm"
  }, getNutrientLabel(item))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-emerald-800 text-base font-black uppercase tracking-widest"
  }, /*#__PURE__*/React.createElement(Info, {
    size: 24
  }), " ", t('lbl_rationale')), /*#__PURE__*/React.createElement("ul", {
    className: "text-xl font-semibold text-emerald-900 space-y-3 list-disc pl-6 leading-relaxed"
  }, recommendation.rationale.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-3xl border-2 border-emerald-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-stone-400 font-black uppercase tracking-wider mb-2"
  }, t('lbl_rate_timing')), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-black text-stone-800 leading-tight"
  }, recommendation.rate), /*#__PURE__*/React.createElement("div", {
    className: "text-lg text-stone-500 mt-2 font-bold"
  }, recommendation.timing)), /*#__PURE__*/React.createElement("div", {
    className: `p-6 rounded-3xl border-2 shadow-sm ${recommendation.hasWarning ? 'bg-red-50 border-red-100' : 'bg-white border-emerald-100'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `text-sm font-black uppercase tracking-wider mb-2 ${recommendation.hasWarning ? 'text-red-400' : 'text-stone-400'}`
  }, t('lbl_compat_warn')), /*#__PURE__*/React.createElement("div", {
    className: `text-xl font-black leading-snug ${recommendation.hasWarning ? 'text-red-800' : 'text-emerald-700'}`
  }, recommendation.compatibility))))));
};
const SoilControlPanel = ({
  soil,
  setSoil
}) => {
  const [showOmHelp, setShowOmHelp] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_soil_conditions'))), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-medium text-stone-500 -mt-2"
  }, t('lbl_adjust_soil')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 pt-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_ph')), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-10 flex items-center select-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-full h-2 bg-stone-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-gradient-to-r from-red-300 via-green-300 to-blue-300 opacity-50"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 -mt-6 h-12 w-12 bg-white border-[3px] border-stone-800 rounded-full shadow-xl flex items-center justify-center z-10 pointer-events-none transition-all duration-75 ease-out",
    style: {
      left: `${(soil.ph - 4.0) / 5.0 * 100}%`,
      transform: `translateX(-50%)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-sm font-black ${soil.ph < 5.5 ? 'text-red-600' : soil.ph > 7.5 ? 'text-blue-600' : 'text-green-600'}`
  }, soil.ph)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "4.0",
    max: "9.0",
    step: "0.5",
    value: soil.ph,
    onChange: e => setSoil({
      ...soil,
      ph: parseFloat(e.target.value)
    }),
    className: "absolute w-full h-full opacity-0 cursor-pointer z-20",
    style: {
      margin: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[10px] text-stone-400 font-bold uppercase mt-1 px-1"
  }, /*#__PURE__*/React.createElement("span", null, t('lbl_acid')), /*#__PURE__*/React.createElement("span", null, t('lbl_neutral')), /*#__PURE__*/React.createElement("span", null, t('lbl_alkaline')))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_weather')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.weather.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      weather: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border flex items-center justify-center gap-2 ${soil.weather === opt.id ? 'bg-sky-700 text-white border-sky-700 shadow-md' : 'bg-sky-50 text-sky-600 border-sky-100 hover:bg-sky-100'}`
  }, /*#__PURE__*/React.createElement(opt.icon, {
    size: 18
  }), t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_ec')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.ec.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      ec: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border ${soil.ec === opt.id ? 'bg-purple-700 text-white border-purple-700 shadow-md' : 'bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100'}`
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_texture')), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.texture.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      texture: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border ${soil.texture === opt.id ? 'bg-stone-800 text-white border-stone-800 shadow-md' : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'}`
  }, t(opt.label))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_om')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowOmHelp(!showOmHelp),
    className: "text-stone-400 hover:text-emerald-600 transition-colors"
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, SOIL_OPTIONS.om.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setSoil({
      ...soil,
      om: opt.id
    }),
    className: `flex-1 py-3 px-3 rounded-xl text-sm font-bold transition-all border ${soil.om === opt.id ? 'bg-emerald-700 text-white border-emerald-700 shadow-md' : 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100'}`
  }, t(opt.label)))), showOmHelp && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 bg-stone-50 rounded-2xl p-6 border-2 border-stone-200 text-stone-800 space-y-6 animate-in fade-in zoom-in-95 duration-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3 text-stone-700"
  }, /*#__PURE__*/React.createElement(Eye, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black uppercase tracking-widest"
  }, t('lbl_visual'))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-3 text-base font-medium text-stone-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_low')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_visual_low'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_med')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_visual_med'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_high')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_visual_high'))))), /*#__PURE__*/React.createElement("div", {
    className: "border-t-2 border-stone-200 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3 text-stone-700"
  }, /*#__PURE__*/React.createElement(Beaker, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black uppercase tracking-widest"
  }, t('lbl_h2o2'))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-3 text-base font-medium text-stone-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_low')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_h2o2_low'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_med')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_h2o2_med'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-black text-stone-800 text-xs uppercase tracking-wide min-w-[4rem]"
  }, t('opt_high')), /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600"
  }, t('desc_h2o2_high'))))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-base font-bold text-stone-700 block"
  }, t('lbl_cation')), /*#__PURE__*/React.createElement("select", {
    value: soil.cation,
    onChange: e => setSoil({
      ...soil,
      cation: e.target.value
    }),
    className: "w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-base font-bold text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
  }, SOIL_OPTIONS.cation.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.id,
    value: opt.id
  }, t(opt.label))))));
};
// ==========================================
// LANGUAGE ONBOARDING / PICKER
// ==========================================
// Full-screen on first launch (onboarding), modal sheet when opened from the
// header. Copy is shown in all three languages until one is picked, so every
// user can read the prompt.
const ONBOARDING_COPY = {
  zh: { title: '选择您的语言', subtitle: '您可以随时在右上角更改语言。', cta: '继续', close: '关闭' },
  en: { title: 'Choose your language', subtitle: 'You can change this anytime from the top bar.', cta: 'Continue', close: 'Close' },
  ms: { title: 'Pilih bahasa anda', subtitle: 'Anda boleh menukarnya bila-bila masa di bar atas.', cta: 'Teruskan', close: 'Tutup' }
};
const LanguagePicker = ({
  initial,
  onConfirm,
  onClose,
  isOnboarding
}) => {
  const [choice, setChoice] = useState(initial);
  const copy = ONBOARDING_COPY[choice];
  useEffect(() => {
    if (!onClose) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "lang-picker-title",
    className: "fixed inset-0 flex items-center justify-center p-6",
    style: {
      zIndex: 100,
      overflowY: 'auto',
      background: isOnboarding ? 'linear-gradient(180deg, #1c4c2f 0%, #0f301e 100%)' : 'rgba(28, 25, 23, 0.6)'
    },
    onClick: e => {
      if (onClose && e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white w-full rounded-2xl shadow-2xl p-6",
    style: {
      maxWidth: '28rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-900 p-2 rounded-xl text-white shadow-lg shrink-0"
  }, /*#__PURE__*/React.createElement(isOnboarding ? Leaf : Languages, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "lang-picker-title",
    className: "text-xl font-black text-stone-900 leading-snug"
  }, isOnboarding ? 'AgriPro' : copy.title), isOnboarding && /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-stone-400 uppercase tracking-widest"
  }, "选择语言 · Language · Bahasa")), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": copy.close,
    className: "shrink-0 p-2 rounded-xl text-stone-400 hover:bg-stone-50 transition-all"
  }, /*#__PURE__*/React.createElement(XCircle, {
    size: 20
  }))), isOnboarding && /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-bold text-stone-800 mb-2"
  }, copy.title), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": copy.title,
    className: "space-y-3"
  }, LANG_OPTIONS.map(opt => {
    const active = choice === opt.id;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.id,
      role: "radio",
      "aria-checked": active,
      lang: HTML_LANG[opt.id],
      onClick: () => setChoice(opt.id),
      className: `w-full flex items-center justify-between gap-4 p-4 rounded-xl border-2 text-left transition-all active:scale-95 ${active ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200 bg-white hover:bg-stone-50'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: `shrink-0 flex items-center justify-center h-10 rounded-full text-sm font-black ${active ? 'bg-emerald-600 text-white' : 'bg-stone-50 text-stone-600'}`,
      style: {
        width: '2.5rem'
      }
    }, opt.short), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: `block text-lg font-bold ${active ? 'text-emerald-900' : 'text-stone-900'}`
    }, opt.native), /*#__PURE__*/React.createElement("span", {
      className: "block text-sm text-stone-500"
    }, opt.sub))), active && /*#__PURE__*/React.createElement(Check, {
      size: 20,
      className: "text-emerald-600 shrink-0"
    }));
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-stone-500 mt-6 mb-2"
  }, copy.subtitle), /*#__PURE__*/React.createElement("button", {
    onClick: () => onConfirm(choice),
    className: "w-full flex items-center justify-center gap-2 bg-stone-900 text-white font-bold text-lg py-3 rounded-xl shadow-lg transition-all active:scale-95"
  }, copy.cta, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  }))));
};
const App = () => {
  // Active UI language. CURRENT_LANG (module-level) is the source of truth for
  // t()/tv(); this state mirror triggers a re-render of the whole tree on change.
  const [lang, setLang] = useState(() => CURRENT_LANG);
  const switchLang = (next) => {
    setCurrentLang(next);   // persist + update <html lang>/<title> + module var
    setLang(next);          // re-render
  };
  // Language picker: 'onboarding' (first launch, full screen), 'modal' (from
  // the header) or null (hidden).
  const [langPicker, setLangPicker] = useState(() => needsOnboarding() ? 'onboarding' : null);
  useEffect(() => {
    setCurrentLang(CURRENT_LANG); // sync <html lang>/<title> on boot
  }, []);
  const confirmLang = (next) => {
    switchLang(next);
    markOnboarded();
    setLangPicker(null);
  };
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem('agripro_mode_pref');
      return ['wheel', 'advisor', 'mix', 'ph'].includes(saved) ? saved : 'wheel';
    } catch (e) {
      return 'wheel';
    }
  });
  const [selectedNutrient, setSelectedNutrient] = useState(null);
  const [inhibitionOffsets, setInhibitionOffsets] = useState(() => {
    try {
      const saved = localStorage.getItem('agripro_inhibition_offsets');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [soilConditions, setSoilConditions] = useState({
    ph: 6.5,
    texture: 'loam',
    om: 'med',
    cation: 'bal',
    weather: 'norm',
    ec: 'opt'
  });
  const [advisorState, setAdvisorState] = useState(() => {
    const defaults = {
      crop: 'durian',
      variety: 'mk',
      age: 10,
      weather: 'norm',
      ec: 'opt',
      stage: 'bloom',
      symptoms: 'none'
    };
    try {
      const saved = localStorage.getItem('agripro_advisor_state');
      return saved ? {
        ...defaults,
        ...JSON.parse(saved)
      } : defaults;
    } catch (e) {
      return defaults;
    }
  });
  useEffect(() => {
    localStorage.setItem('agripro_mode_pref', mode);
  }, [mode]);
  useEffect(() => {
    localStorage.setItem('agripro_advisor_state', JSON.stringify(advisorState));
  }, [advisorState]);
  useEffect(() => {
    setAdvisorState(prev => ({
      ...prev,
      weather: soilConditions.weather,
      ec: soilConditions.ec
    }));
  }, [soilConditions.weather, soilConditions.ec]);
  useEffect(() => {
    localStorage.setItem('agripro_inhibition_offsets', JSON.stringify(inhibitionOffsets));
  }, [inhibitionOffsets]);
  const handleNutrientSelect = nutrient => {
    setSelectedNutrient(nutrient);
  };
  const soilImpacts = useMemo(() => {
    return analyzeSoilImpact(selectedNutrient?.id, soilConditions);
  }, [selectedNutrient, soilConditions, lang]);
  const recommendedNutrients = useMemo(() => {
    if (mode === 'advisor') {
      const rec = getSmartRecommendation(advisorState);
      return rec.mixIds;
    }
    return [];
  }, [mode, advisorState, lang]);
  return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-[#FDFCFB] font-sans pb-20 pb-safe-bottom"
  }, langPicker && /*#__PURE__*/React.createElement(LanguagePicker, {
    key: langPicker,
    initial: langPicker === 'onboarding' ? (getSavedLang() || detectDeviceLang()) : lang,
    isOnboarding: langPicker === 'onboarding',
    onConfirm: confirmLang,
    onClose: langPicker === 'modal' ? () => setLangPicker(null) : null
  }), /*#__PURE__*/React.createElement("nav", {
    className: "bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 shadow-sm nav-safe-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center w-full md:w-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-900 p-2 rounded-xl text-white shadow-lg"
  }, /*#__PURE__*/React.createElement(Leaf, {
    size: 20
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-bold text-stone-900"
  }, t('app_title'))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLangPicker('modal'),
    "aria-label": ONBOARDING_COPY[lang].title,
    title: ONBOARDING_COPY[lang].title,
    className: "shrink-0 px-3 py-1.5 rounded-lg border border-stone-300 bg-stone-50 hover:bg-stone-100 active:scale-95 transition-all text-sm font-bold text-stone-700 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Languages, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, LANG_OPTIONS.find(o => o.id === lang).label))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar w-full md:w-auto justify-start md:justify-center px-4 -mx-4 py-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('wheel'),
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'wheel' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('knowledge')), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode('advisor');
      setSelectedNutrient(null);
    },
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'advisor' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('advisor')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('mix'),
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'mix' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('mix_rules')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('ph'),
    className: `text-lg font-bold transition-all whitespace-nowrap shrink-0 ${mode === 'ph' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
  }, t('ph_availability'))))), /*#__PURE__*/React.createElement("main", {
    className: "p-6 max-w-6xl mx-auto space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
  }, mode !== 'mix' && mode !== 'ph' && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-6"
  }, /*#__PURE__*/React.createElement(NutrientWheel, {
    selectedId: selectedNutrient?.id,
    onSelect: handleNutrientSelect,
    inhibitionOffsets: inhibitionOffsets,
    onOffsetChange: setInhibitionOffsets,
    recommendedNutrients: recommendedNutrients,
    mode: mode
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4 text-[11px] font-black uppercase tracking-widest text-stone-400 justify-center bg-stone-50/50 p-4 rounded-2xl border border-stone-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm"
  }), " ", t('antagonism')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2.5 h-2.5 bg-orange-500 rounded-full shadow-sm"
  }), " ", t('inhibition')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2.5 h-2.5 bg-emerald-600 rounded-full shadow-sm"
  }), " ", t('synergy'))))), mode === 'mix' ? /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-2"
  }, /*#__PURE__*/React.createElement(MixRulesPanel, { lang: lang })) : mode === 'ph' ? /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 lg:col-span-2"
  }, /*#__PURE__*/React.createElement(PHChart, { lang: lang })) : mode === 'advisor' ? /*#__PURE__*/React.createElement("div", {
    className: "animate-slide-up space-y-6"
  }, /*#__PURE__*/React.createElement(SmartAdvisorPanel, {
    advisorState: advisorState,
    setAdvisorState: setAdvisorState,
    lang: lang
  })) : selectedNutrient ? /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-stone-200 shadow-2xl animate-slide-up space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl md:text-5xl font-black text-stone-900 mb-4"
  }, t('elem_' + selectedNutrient.name)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 bg-stone-100 rounded-full text-xs font-black text-stone-600 uppercase tracking-widest border border-stone-200"
  }, t('cat_' + selectedNutrient.type)), /*#__PURE__*/React.createElement("span", {
    className: `px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${selectedNutrient.mobility === 'Mobile' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-orange-50 text-orange-600 border-orange-100'}`
  }, t('mob_' + selectedNutrient.mobility)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedNutrient(null),
    className: "p-2 hover:bg-stone-100 rounded-full transition-colors"
  }, /*#__PURE__*/React.createElement(XCircle, {
    size: 36,
    className: "text-stone-300 hover:text-stone-900"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50/50 p-6 rounded-3xl border-2 border-stone-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(BookOpen, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_metabolism'))), /*#__PURE__*/React.createElement("p", {
    className: "text-xl md:text-2xl font-semibold italic text-stone-800 leading-relaxed border-l-4 border-stone-200 pl-6"
  }, "\"", t('info_' + selectedNutrient.id + '_func'), "\"")), selectedNutrient.id === 'AA' && /*#__PURE__*/React.createElement("div", {
    className: "bg-pink-50 p-6 rounded-3xl border-2 border-pink-100 space-y-3 shadow-sm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-6 -top-6 opacity-10"
  }, /*#__PURE__*/React.createElement(Atom, {
    size: 120,
    className: "text-pink-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center relative z-10"
  }, /*#__PURE__*/React.createElement(Atom, {
    className: "text-pink-600",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-pink-700"
  }, t('info_AA_zwitterion_title'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-pink-900 leading-relaxed relative z-10 whitespace-pre-line"
  }, t('info_AA_zwitterion_desc'))), selectedNutrient.enzymes && selectedNutrient.enzymes.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-violet-50/60 p-6 rounded-3xl border-2 border-violet-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(FileText, {
    className: "text-violet-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_enzymes'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, selectedNutrient.enzymes.map((enzyme, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-white p-5 rounded-2xl border-2 border-violet-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-black text-violet-900 mb-1"
  }, tv({ zh: enzyme.zh_name, en: enzyme.name, ms: enzyme.ms_name })), /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-medium text-violet-700 opacity-90"
  }, tv({ zh: enzyme.zh_func, en: enzyme.func, ms: enzyme.ms_func })))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50/50 p-6 rounded-3xl border-2 border-blue-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    className: "text-blue-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-blue-800"
  }, t('lbl_market_insight'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-blue-900 leading-relaxed whitespace-pre-line"
  }, t('info_' + selectedNutrient.id + '_comm'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-indigo-50/50 p-6 rounded-3xl border-2 border-indigo-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Target, {
    className: "text-indigo-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-indigo-800"
  }, t('lbl_app_strategy'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-indigo-900 leading-relaxed opacity-90 whitespace-pre-line"
  }, t('info_' + selectedNutrient.id + '_app'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50/50 p-6 rounded-3xl border-2 border-stone-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Sprout, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_common_sources'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, selectedNutrient.sources.map((source, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "bg-white border-2 border-stone-200 text-stone-700 font-bold px-4 py-2.5 rounded-xl text-lg shadow-sm"
  }, t(source))))), selectedNutrient.mobility === 'Immobile' && /*#__PURE__*/React.createElement("div", {
    className: "bg-violet-50 p-6 rounded-3xl border-2 border-violet-100 space-y-4 shadow-sm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-4 -top-4 opacity-10"
  }, /*#__PURE__*/React.createElement(Wind, {
    size: 100,
    className: "text-violet-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center relative z-10"
  }, /*#__PURE__*/React.createElement(Wind, {
    className: "text-violet-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_immobile_insight'))), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-xl text-violet-900 leading-relaxed relative z-10 whitespace-pre-line"
  }, t('msg_immobile_advice'))), t('info_' + selectedNutrient.id + '_bio') !== 'info_' + selectedNutrient.id + '_bio' && /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/60 p-6 rounded-3xl border-2 border-emerald-100 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -right-4 -top-4 opacity-10"
  }, /*#__PURE__*/React.createElement(Flower2, {
    size: 100,
    className: "text-emerald-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center relative z-10"
  }, /*#__PURE__*/React.createElement(Flower2, {
    className: "text-emerald-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-emerald-800"
  }, t('lbl_bio_synergy'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-xl text-emerald-900 leading-relaxed relative z-10"
  }, t('info_' + selectedNutrient.id + '_bio'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50/50 p-6 rounded-3xl border-2 border-red-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "text-red-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-red-800"
  }, t('antagonism'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900 text-xl leading-tight"
  }, selectedNutrient.antagonism.map(id => {
    const nut = NUTRIENTS.find(n => n.id === id);
    return nut ? (t('elem_' + nut.name) !== 'elem_' + nut.name ? t('elem_' + nut.name) : nut.name) : id;
  }).join(', ') || t('lbl_none')), t('info_' + selectedNutrient.id + '_antag') !== 'info_' + selectedNutrient.id + '_antag' && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-4 border-t border-red-200/60 text-xl font-semibold text-red-800 leading-relaxed whitespace-pre-line"
  }, t('info_' + selectedNutrient.id + '_antag'))), /*#__PURE__*/React.createElement("div", {
    className: "bg-orange-50/50 p-6 rounded-3xl border-2 border-orange-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-orange-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-orange-800"
  }, t('lbl_high_conc_inhib'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, selectedNutrient.inhibition && selectedNutrient.inhibition.length > 0 ? selectedNutrient.inhibition.map((item, idx) => {
    const nut = NUTRIENTS.find(n => n.id === item.el);
    const rawName = nut ? nut.name : item.el;
    const translatedName = t('elem_' + rawName) !== 'elem_' + rawName ? t('elem_' + rawName) : rawName;
    const displayVal = t(item.val);
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "flex flex-col sm:flex-row sm:items-center justify-between bg-white/60 p-4 rounded-xl border border-orange-200 shadow-sm gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-stone-700 text-xl flex items-center gap-2"
    }, t('lbl_inhibits'), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-stone-900"
    }, translatedName)), /*#__PURE__*/React.createElement("span", {
      className: "text-lg font-semibold text-orange-900 bg-orange-200 px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap border border-orange-300/50"
    }, t('lbl_when'), " ", displayVal));
  }) : /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900 text-xl leading-tight opacity-50"
  }, t('lbl_none')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-100 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "text-emerald-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-emerald-800"
  }, t('synergy'))), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-stone-900 text-xl leading-tight"
  }, selectedNutrient.synergy?.map(id => {
    const nut = NUTRIENTS.find(n => n.id === id);
    return nut ? (t('elem_' + nut.name) !== 'elem_' + nut.name ? t('elem_' + nut.name) : nut.name) : id;
  }).join(', ') || t('lbl_none')))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 bg-amber-50 rounded-[2.5rem] border-2 border-amber-200 shadow-inner relative overflow-hidden group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    size: 80,
    className: "text-amber-800"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(Thermometer, {
    className: "text-amber-700",
    size: 24
  }), /*#__PURE__*/React.createElement("h4", {
    className: "text-base font-black text-amber-700 uppercase tracking-[0.2em]"
  }, t('lbl_def_signal'))), /*#__PURE__*/React.createElement("p", {
    className: "text-amber-900 font-semibold text-xl leading-relaxed relative z-10"
  }, t('info_' + selectedNutrient.id + '_def'))), /*#__PURE__*/React.createElement(SoilControlPanel, {
    soil: soilConditions,
    setSoil: setSoilConditions
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-stone-50/50 p-6 rounded-3xl border-2 border-stone-200 space-y-4 shadow-sm hover:shadow-md transition-shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /*#__PURE__*/React.createElement(Layers, {
    className: "text-stone-700",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black uppercase tracking-widest text-stone-800"
  }, t('lbl_soil_impact'))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, soilImpacts.length > 0 ? soilImpacts.map((impact, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `flex items-start gap-4 p-4 rounded-2xl border-2 ${impact.level === 'high' ? 'bg-red-50 border-red-200 text-red-900' : impact.level === 'med' ? 'bg-orange-50 border-orange-200 text-orange-900' : impact.level === 'good' ? 'bg-green-50 border-green-200 text-green-900' : 'bg-white border-stone-200 text-stone-700'}`
  }, impact.level === 'high' ? /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "text-red-600 shrink-0 mt-1",
    size: 24
  }) : impact.level === 'good' ? /*#__PURE__*/React.createElement(CheckCircle, {
    className: "text-green-600 shrink-0 mt-1",
    size: 24
  }) : /*#__PURE__*/React.createElement(Info, {
    className: "text-orange-600 shrink-0 mt-1",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold leading-snug"
  }, impact.msg))) : /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 p-4 rounded-2xl bg-green-50 border-2 border-green-200 text-green-800"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "text-green-600 shrink-0",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold leading-snug"
  }, t('msg_soil_ok')))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center border-4 border-dashed border-stone-100 rounded-[2.5rem] h-[600px] text-stone-400 font-bold space-y-6 bg-stone-50/30 animate-pulse"
  }, /*#__PURE__*/React.createElement(Activity, {
    size: 64,
    className: "opacity-10"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xl"
  }, t('tap_element')))))));
};

// === Auto-generated mount (PWA wrapper) ===
(function mountApp() {
  const rootEl = document.getElementById('root');
  if (!rootEl) {
    console.error('AgriPro: #root element not found');
    return;
  }
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(App));

  // Tell the host page (which owns the splash) that React is mounted.
  // The page listens for this event and fades out the splash after the first paint.
  // Two rAFs to be sure the first React commit has actually painted.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('agripro:mounted'));
    });
  });
})();