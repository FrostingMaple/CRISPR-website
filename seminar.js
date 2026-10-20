'use strict';
const references = [
  {title:'NCBI RefSeq · HBB 与珠蛋白基因簇', url:'https://www.ncbi.nlm.nih.gov/gene/3043', note:'基因位置、HbA 组成，以及 β⁰ / β⁺ 的定义。'},
  {title:'FDA · Casgevy 说明书，第 11 / 12 节', url:'https://www.fda.gov/media/174615/download?attachment=', note:'细胞产品、GATA1 位点编辑及疾病相关作用机制。'},
  {title:'FDA · TDT 审评依据（2024）', url:'https://www.fda.gov/media/175842/download', note:'未配对 α-链、无效红细胞生成，以及制造与植入流程。'},
  {title:'Wu et al. · Nature Medicine（2019）', url:'https://www.nature.com/articles/s41591-019-0401-y', note:'BCL11A +58 红系增强子中 GATA1 结合基序的编辑研究。'},
  {title:'Martyn et al. · Nature Genetics（2018）', url:'https://www.nature.com/articles/s41588-018-0085-0', note:'BCL11A 与 ZBTB7A/LRF 对 γ-珠蛋白启动子的直接抑制证据。'},
  {title:'Frangoul et al. · NEJM（2021）', url:'https://www.nejm.org/doi/full/10.1056/NEJMoa2031054', note:'最初两名患者的早期随访报告；发表于 2020 年底，卷期为 2021 年。'},
  {title:'Phthalides 与 HbF 诱导 · 原始研究（2019）', url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6517670/', note:'HbF、HbA 与 2,3-BPG 相互作用差异的分子背景。'}
];
// One teaching step connects a defined molecular event to its downstream effect.
const S=(tab,title,body,chain,detail,caption,scene,ref=1)=>({tab,title,body,chain,detail,caption,scene,ref});
const diseaseSteps={
  scd:[
    S('HBB 变异','一个残基变化，改变分子表面',
      ['经典 HbS 变异改变 HBB 编码序列：编码链密码子 <strong>GAG → GTG</strong>，使成熟 β-链第 6 位由谷氨酸（Glu）变为缬氨酸（Val）。','Glu 的侧链带负电；Val 是疏水残基。变化发生在蛋白质表面，产生了可参与异常分子间接触的疏水“突起”。'],
      ['HBB 变异','β⁶ Glu → Val','表面疏水性质改变'],
      'β⁶ 使用传统成熟珠蛋白链编号；含起始甲硫氨酸的 HGVS 蛋白编号为 p.Glu7Val。镰状细胞病包含不同基因型；这里以典型 HbS 分子机制说明，携带一个 HbS 等位基因不等于一定患重症镰状细胞病。',
      '观察 DNA 密码子、氨基酸侧链和血红蛋白表面之间的对应关系。','mutation',0),
    S('脱氧与聚合','脱氧 HbS 形成异常聚合物',
      ['在脱氧条件下，βˢ 链的 Val6 可与另一 HbS 分子的疏水区域接触，使多个 HbS 分子相互连接，形成长纤维。','这种变化是<strong>分子间聚合</strong>，不是单个血红蛋白先变成“镰刀形”。点击下方氧合状态，比较分散分子与纤维。'],
      ['脱氧 HbS','疏水相互作用','成核与纤维生长'],
      '是否在红细胞通过微循环前形成聚合物，受脱氧程度、细胞内 HbS 浓度、HbF 分布和聚合延迟时间等影响。示意图没有模拟真实动力学；氧合也不保证已受损的细胞完全恢复。',
      '聚合发生于脱氧 HbS；按钮演示的是分子状态，不代表患者症状的即时开关。','polymer'),
    S('细胞损伤','纤维使红细胞变硬、变形',
      ['HbS 纤维形成束状结构，对红细胞产生机械影响。反复镰变与复氧循环损伤细胞膜，并可促进脱水和脆性增加。','细胞内血红蛋白浓度上升又可能促进聚合，形成放大环节。细胞变形能力下降，难以顺畅通过狭窄微血管。'],
      ['HbS 纤维','膜与细胞损伤','变形能力 ↓'],
      '红细胞镰变与膜损伤不是同一过程；反复损伤可以导致不可逆改变。膜通透性、离子与水分变化在此用反馈箭头概括。',
      '由分子聚合跨到细胞力学：内部纤维，而非 DNA 本身，直接改变红细胞形态。','sickleCell'),
    S('疾病表型','溶血与血管阻塞共同致病',
      ['受损红细胞寿命缩短，造成溶血性贫血；变形能力下降、细胞黏附和炎症等共同参与血管阻塞。','组织灌注不足可引发缺血性疼痛与器官损伤。<strong>不是把这些结果归因于 β-链“生成太少”</strong>，而是从异常 HbS 的聚合性质出发。'],
      ['红细胞损伤','溶血 / 黏附与阻塞','贫血与组织缺血'],
      '血管阻塞涉及红细胞、白细胞、血小板、内皮与炎症的相互作用。图中仅突出与本课基因干预相关的 HbS—红细胞环节。',
      '同一突变通过蛋白质相互作用和细胞性质，最终影响组织供血。','vessel')
  ],
  tdt:[
    S('表达异常','HBB 变异使 β-链生成不足',
      ['β-地中海贫血可由启动子、剪接位点、编码区或其他调控相关变异引起；不同变异通过不同路径减少 β-珠蛋白产量。','<strong>β⁺</strong> 表示受影响等位基因仍有残余 β-链生成；<strong>β⁰</strong> 表示该等位基因的 β-链生成缺失。用选择器比较两个概念。'],
      ['HBB 变异','转录 / RNA 加工 / 翻译受损','β-链 ↓ 或缺失'],
      'β⁺、β⁰ 是等位基因的功能类别，不能单凭其中一个标签判定个体是否输血依赖。临床严重程度还受双等位基因组合和其他修饰因素影响。',
      '这里演示“产量”问题；β⁺ 的残余表达量只是示意，不代表所有 β⁺ 变异。','thalGene',0),
    S('链比例失衡','α-链没有足够的配对伙伴',
      ['正常情况下，α-链与非 α-链配对并组装血红蛋白。当 β-链不足时，α-链相对过剩，未配对 α-链更容易不稳定、聚集和沉淀。','因此，问题不仅是 HbA 总量下降，还包括<strong>游离 α-链带来的细胞毒性</strong>。'],
      ['β-链不足','未配对 α-链 ↑','聚集 / 沉淀'],
      '珠蛋白链平衡是比“β-链少”更关键的病理概念。α-链生成量、γ-链生成量等修饰因素可影响严重程度。',
      '左右显示配对与未配对状态；数量用于说明链失衡，不是临床比例。','imbalance',2),
    S('前体细胞损伤','损伤发生在红系成熟过程中',
      ['过剩 α-链及相关氧化损伤可损害红系前体，许多细胞在成熟前死亡，形成<strong>无效红细胞生成</strong>。','进入外周血的红细胞也可能因损伤而较早被清除，进一步加重贫血。'],
      ['α-链沉淀与氧化损伤','红系前体死亡','有效红细胞产出 ↓'],
      '“无效红细胞生成”强调骨髓已启动红系生成，但不能有效产生成熟红细胞；它与外周红细胞溶血应当区分。',
      '图示停留在有核红系前体，随后才是外周成熟红细胞。','precursor',2),
    S('疾病表型','链失衡最终造成严重贫血',
      ['无效红细胞生成与外周溶血使有效携氧红细胞不足。输血依赖型患者需要持续输血支持。','因此，提高能够与 α-链配对的 γ-链，有机会从<strong>珠蛋白链平衡</strong>这一上游病理环节改善红系细胞生存。'],
      ['无效生成 + 溶血','贫血','输血依赖型表型'],
      '镰状细胞病与 β-地贫都涉及 HBB，但一个以 HbS 的异常聚合性质为核心，另一个以珠蛋白合成失衡为核心，不能混为同一种机制。',
      '下一章比较：同样是提高 γ-链，为什么对两种疾病有不同的保护逻辑？','thalOutcome',2)
  ]
};
const chapters=[
  {nav:'正常参照',title:'从基因表达，到血红蛋白组装',tag:'01 / 基因 → RNA → 蛋白质',scale:'DNA / 转录 / 蛋白质',steps:[
    S('珠蛋白基因','先区分基因、珠蛋白链和血红蛋白',
      ['HBA1/HBA2 编码 α-链，HBB 编码 β-链；HBG1/HBG2 编码 γ-链。<strong>这些基因不是同一条蛋白链的不同部件</strong>，而是分别提供不同珠蛋白亚基。','α-珠蛋白基因簇位于 16 号染色体；β-样珠蛋白基因簇位于 11 号染色体，其中包含 γ、δ、β 等基因。'],
      ['珠蛋白基因','对应 mRNA','珠蛋白链'],
      '通常二倍体基因组共有 4 个 α-链基因拷贝（HBA1、HBA2 各两份）和 2 个 HBB 拷贝。拷贝数不等于四聚体中的亚基数；正常 HbA 仍是 2 条 α 与 2 条 β。',
      '染色体轨道为简化示意，只保留本课相关基因；不是物理距离比例图。','genes',0),
    S('转录与翻译','表达量决定可用于组装的亚基数量',
      ['在有核红系细胞中，珠蛋白基因先转录为 RNA，再经历 RNA 加工并产生 mRNA；mRNA 随后在胞质中翻译成珠蛋白链。','转录减少、异常剪接或翻译受损都可能降低某种珠蛋白的产量。这为理解 β-地贫的合成量异常提供参照。'],
      ['DNA','转录与 RNA 加工','mRNA','翻译','珠蛋白链'],
      '基因表达和蛋白质功能是不同维度：一种变异可能改变链的氨基酸序列，也可能主要减少链的产量。成熟人红细胞没有细胞核；本图的转录过程发生在红系前体。',
      '逐层展开表达流程，注意基因并不直接“变成”血红蛋白。','expression',0),
    S('四聚体组装','HbA 与 HbF 使用不同的非 α 亚基',
      ['成人主要血红蛋白 HbA 由 <strong>α₂β₂</strong> 组成；胎儿血红蛋白 HbF 由 <strong>α₂γ₂</strong> 组成。','两者都需要 α-链。γ-链的作用不是修改 β-链，而是作为另一种亚基，与 α-链组成具有不同性质的血红蛋白。'],
      ['2 条 α + 2 条 β → HbA','2 条 α + 2 条 γ → HbF'],
      '成人还存在少量 HbA₂（α₂δ₂）等组分。图中球形代表珠蛋白亚基，不是真实原子结构；表达变化需经过翻译与组装才影响 HbF。',
      '点击下方 HbA / HbF，对照亚基替换；α-链在两种四聚体中都保留。','assembly',0),
    S('携氧功能','每条珠蛋白链配有一个血红素',
      ['血红蛋白的每个亚基含一个血红素，血红素中心的 Fe²⁺ 可与氧结合。四聚体最多可结合 4 个 O₂，并具有协同结合与变构调控。','因此，理解疾病需要同时看<strong>蛋白质组成、分子相互作用和有效红细胞数量</strong>，而不只是看 DNA 是否发生变异。'],
      ['珠蛋白 + 血红素','四聚体','可逆结合氧','组织氧输送'],
      '铁离子、血红素和珠蛋白链不是同一概念。图示不含真实原子尺度或结合常数，也未展开 Bohr 效应等全部变构因素。',
      '小圆表示血红素中的铁结合位点；氧结合是可逆过程。','heme',0)
  ]},
  {nav:'疾病发生',title:'HBB 异常如何产生疾病？',tag:'02 / 从致病变异到细胞表型',scale:'基因 / 分子 / 红细胞',steps:[]},
  {nav:'γ-链的作用',title:'为什么重新产生 γ-珠蛋白？',tag:'03 / 同一个 HbF，两种保护逻辑',scale:'珠蛋白配对 / 分子间聚合',steps:[
    S('重新配对','γ-链与 α-链组装为 HbF',
      ['HBG1/HBG2 表达提高后，γ-珠蛋白链增加，与 α-链配对并组装为 HbF（α₂γ₂）。','<strong>HbF 不含 βˢ 链。</strong>提高 HbF 改变细胞内血红蛋白的组成，使保护机制有机会发挥作用；HBB 中原来的变异依然存在。'],
      ['HBG1 / HBG2 表达 ↑','γ-链 ↑','α₂γ₂（HbF）↑'],
      '不能把“γ-链取代 β-链”理解成在已形成的 HbS 分子上拆换亚基。这里强调细胞合成与组装的总体组成发生变化。',
      '新的 γ-链进入新合成的 HbF；不把原有 HBB 序列改回正常。','gammaAssembly'),
    S('疾病特异的保护','从分子相互作用解释保护效应',
      ['镰状细胞病中，HbF 不易参与 HbS 聚合；提高其含量可抑制 HbS 纤维形成、延缓聚合并减少镰变。','β-地贫中，γ-链提供 α-链的配对伙伴，减少未配对 α-链负担，缓解无效红细胞生成。切换疾病并移动滑杆，观察这两条机制。'],
      ['SCD：HbF ↑ → HbS 聚合受抑','TDT：γ-链 ↑ → α-链失衡缓解'],
      'HbF 的抗镰变效应不能简单解释为“氧亲和力高”。细胞内 HbF 含量与分布、HbS 浓度及聚合动力学都重要。滑杆只改变定性示意，不预测疗效。',
      '滑杆表示相对 γ-链供给；图中分子数没有浓度、比例或疗效单位。','rescue'),
    S('前后对照','上游调控改变，沿两条病理链传递',
      ['对镰状细胞病：HbF 增加 → HbS 聚合受抑 → 红细胞镰变倾向下降。','对 β-地贫：γ-链增加 → α-链配对改善 → 前体损伤减轻 → 有效红细胞生成改善。<strong>两者共同点是提高 HbF，但被纠正的病理环节不同。</strong>'],
      ['分子组成改变','聚合 / 链平衡改变','红细胞表型改善'],
      '前后两栏是机制比较，不代表细胞完全恢复正常，也不代表所有患者获得相同结果。临床改善程度须由随访证据判断。',
      '同屏比较干预前后；两栏始终使用相同疾病背景。','comparison')
  ]},
  {nav:'发育与调控',title:'出生后，γ-珠蛋白为什么下降？',tag:'04 / 发育性表达切换与转录抑制',scale:'氧亲和力 / DNA 顺式元件 / 反式因子',steps:[
    S('胎儿与成人','HbF → HbA 是发育性表达切换',
      ['胎儿期 γ-珠蛋白表达较高；出生前后，表达程序逐渐转向 β-珠蛋白，HbA 成为成人主要组分。','这是随发育建立的基因调控程序，<strong>不是呼吸到空气后 γ 基因立刻关闭</strong>。出生后 HbF 逐渐降低，使某些 HBB 相关病理更显著。'],
      ['发育进程','γ 表达下降 / β 表达上升','HbF → HbA'],
      'α-链在胎儿与成人阶段均参与主要血红蛋白的构成。切换为渐进过程；图不提供年龄或表达百分比的定量刻度。',
      '选择胎儿期或成人期，观察 γ 与 β 的相对表达方向。','development',0),
    S('氧亲和力','HbF 的高氧亲和力有分子基础',
      ['2,3-BPG 是血红蛋白的变构调节物，可稳定脱氧低亲和力构象。HbF 与 2,3-BPG 的相互作用比 HbA 弱，因此在可比条件下对氧的亲和力较高。','这一性质有助于胎盘氧转移；成人 HbA 的性质适合组织供氧。但<strong>胎盘氧交换由氧分压梯度等多因素共同决定</strong>，“抢氧”只是比喻。'],
      ['γ / β 亚基差异','2,3-BPG 相互作用不同','氧亲和力不同'],
      '氧亲和力和有效组织供氧不能直接画等号。HbF 用于改善 β-血红蛋白病，主要应联系抗 HbS 聚合与链失衡缓解，而非声称更高亲和力就必然供氧更好。',
      '虚线粗细仅表示相互作用差异，没有 Kd、P50 或实验拟合曲线。','affinity',6),
    S('BCL11A 抑制','BCL11A 是 γ-珠蛋白的关键抑制因子',
      ['BCL11A 编码转录调控蛋白。该蛋白可结合 γ-珠蛋白基因启动子相关位点，参与抑制 HBG1/HBG2 的表达。','要区分：<strong>BCL11A 基因是 DNA，BCL11A 蛋白是反式调控因子，HBG1/HBG2 是被调控的另一组基因。</strong>'],
      ['BCL11A 蛋白','作用于 HBG 启动子','γ 转录受抑'],
      'BCL11A 可参与共抑制与染色质调控网络。LRF/ZBTB7A 等也能抑制 γ-珠蛋白，BCL11A 不是唯一的发育切换调控因子。',
      '钝头线表示抑制；这一步展示蛋白质跨基因座调控，而非 DNA 被切割。','repression',4),
    S('增强子入口','红系增强子调节 BCL11A 的表达',
      ['BCL11A 红系特异性增强子是一段顺式调控 DNA。GATA1 等红系转录因子在这里结合，有助于驱动红系细胞中的 BCL11A 表达。','降低这段增强子的功能，就能沿着“BCL11A 减少 → γ 基因去抑制”的方向干预，同时尽量保留 BCL11A 在其他谱系中的功能。'],
      ['GATA1 结合增强子','红系 BCL11A 表达','HBG1 / HBG2 受抑'],
      '增强子不是 BCL11A 蛋白，也不是 HBG 的启动子。图中 BCL11A 与 β-样珠蛋白基因簇分别画在 2 号和 11 号染色体，强调调控因子跨基因座作用；图不按基因组距离绘制。',
      '红框是将被编辑的调控区域；编码区与 HBB 位点保持独立。','enhancer',3)
  ]},
  {nav:'CRISPR 干预',title:'从一个切口，到 HbF 再激活',tag:'05 / 靶向增强子，而非直接修复 HBB',scale:'体外编辑 / DNA 修复 / 转录调控',steps:[
    S('编辑的细胞','先把编辑对象定位到有核 HSPC',
      ['Casgevy 使用患者自身 CD34⁺ 富集的造血干/祖细胞（HSPC）。Cas9 与 sgRNA 形成 RNP 复合物，通过电转导入体外细胞。','RNP 进入有核细胞后才可接触靶 DNA。<strong>不是编辑外周成熟红细胞，也不是直接向体内注射 Cas9。</strong>'],
      ['自体 CD34⁺ HSPC','体外 RNP 递送','靶 DNA 可及'],
      'CD34⁺ 群体包含不同干/祖细胞；长期作用需要具有长期重建能力的细胞被有效编辑并植入。RNP 是蛋白质—RNA 复合物，不是一个长期表达 Cas9 的新基因。',
      '小点表示 RNP；编辑对象位于有核的细胞群体。','hspc'),
    S('靶点识别','sgRNA 配对定位，Cas9 识别 PAM',
      ['sgRNA 的引导区与靶 DNA 序列互补配对；Cas9 结合合适的 PAM 后形成可切割的靶标复合物。','这里靶向 BCL11A <strong>+58 红系增强子中的关键 GATA1 结合位点</strong>，而不是 HBB 或 HBG1/HBG2 的编码区。'],
      ['PAM 识别 + RNA–DNA 配对','增强子靶位点定位'],
      '+58 是该增强子在相关研究中的区域命名。图中的 DNA、PAM 和配对关系为结构示意，不是实际临床 sgRNA 或靶序列；也不表示只靠一段短配对就能保证无脱靶。',
      'DNA 框只作元件定位示意，不提供实际靶序列。','target',3),
    S('双链切割','Cas9 在靶位点造成 DNA 双链断裂',
      ['Cas9 的核酸酶活性切割靶 DNA 两条链，形成双链断裂（DSB）。','<strong>切开 DNA 本身不等于治疗结果。</strong>后续修复是否改变关键调控位点，才决定增强子功能如何受到影响。'],
      ['Cas9 切割两条链','DSB','细胞 DNA 修复启动'],
      'Cas9 的 HNH 与 RuvC 核酸酶结构域分别参与两条 DNA 链的切割。这个疗法使用核酸酶切割策略，并非碱基编辑或引导编辑。',
      '两条 DNA 轨道同时出现断口；尚未形成最终编辑等位基因。','break',3),
    S('NHEJ 修复','修复结果可留下插入或缺失',
      ['细胞通过以末端连接为主的 DNA 修复过程重新连接断口；其中一部分结果包含短片段插入或缺失（indel）。','不同细胞和等位基因可产生不同修复结果。<strong>本策略利用能破坏关键结合基序的结果，而不依赖供体模板把 HBB 精确改回。</strong>'],
      ['断端连接','部分产生 indel','结合基序可能受扰'],
      'NHEJ 并不必然每次都“修错”，也可能恢复原序列。图中三个选项是教学分类，不能理解成等概率结果；有 indel 也不能自动证明增强子功能完全丧失。',
      '选择“原样连接 / 缺失 / 插入”，观察结合位点示意如何变化。','repair',3),
    S('增强子功能下降','GATA1 结合受扰，红系 BCL11A 下降',
      ['关键结合基序被改变后，GATA1 的正常结合可受扰，增强子驱动 BCL11A 表达的能力降低。','这是<strong>调控元件功能改变</strong>；没有把整个 BCL11A 编码区删除，也没有把 GATA1 蛋白本身破坏。'],
      ['关键 indel','GATA1 结合受扰','增强子活性 ↓','红系 BCL11A ↓'],
      '红系选择性来自被编辑增强子的谱系作用，而非 Cas9 只进入红细胞。DNA 改变可存在于造血后代中，功能影响主要体现于依赖此增强子的红系细胞。',
      '关闭的连接表示此位点结合受扰；其他谱系中的 BCL11A 调控没有在图中被整体关闭。','gataLost'),
    S('HBG 去抑制','BCL11A 减少，γ-基因转录增加',
      ['红系细胞中的 BCL11A 减少后，对 HBG1/HBG2 的抑制减弱，γ-珠蛋白转录获得再激活机会。','<strong>Cas9 的直接作用点与最终上调的基因不是同一个位置。</strong>从增强子到 γ-基因之间，需要经过 BCL11A 蛋白这一中间环节。'],
      ['红系 BCL11A ↓','HBG1 / HBG2 去抑制','γ mRNA ↑'],
      '“去抑制”不表示只移走一个蛋白就能忽略全部染色质与转录网络。这里突出已验证的治疗主通路，未把所有辅因子画成唯一线性反应。',
      '上方是 BCL11A 位点；下方是另一染色体上的 HBG 位点。','derepress',4),
    S('翻译与组装','γ mRNA 增加，产生更多 HbF',
      ['更多 γ-珠蛋白 mRNA 经翻译产生 γ-链，随后与 α-链及血红素组装，形成更多 HbF。','到这一步，DNA 调控改变才转化为<strong>血红蛋白分子组成改变</strong>。这个过程发生在分化中的红系细胞，不能把干细胞直接画成已充满 HbF。'],
      ['γ mRNA ↑','γ-链 ↑','α₂γ₂ 组装','HbF ↑'],
      '转录、翻译与组装需要不同的细胞过程。HbF 的增加受细胞分化、表达与组装等因素共同影响，图不提供时间尺度或 HbF 预测值。',
      '依次呈现 RNA、蛋白链和四聚体，保持因果顺序。','gammaProtein'),
    S('闭合因果链','分子干预回到两种疾病的病理环节',
      ['镰状细胞病中，HbF 抑制 HbS 聚合，减少红细胞镰变倾向。β-地贫中，γ-链增加缓解 α/非 α 链失衡，改善红系生成。','因此，“一次增强子编辑”通过<strong>转录调控—蛋白组装—细胞性质</strong>这一串中间事件发挥作用；它没有直接修复 HBB。'],
      ['增强子编辑','BCL11A ↓','γ-链 / HbF ↑','病理环节缓解'],
      '这是一种补偿性再编程策略。功能改善与突变纠正不是同一回事，观察到临床改善也不等于消除了原有 HBB 致病等位基因。',
      '切换疾病，回看同一上游编辑如何产生两条下游保护路径。','comparison')
  ]},
  {nav:'植入与持续性',title:'为什么编辑效果可能持续？',tag:'06 / 编辑细胞与其红系后代',scale:'细胞制造 / 骨髓植入 / 谱系分化',steps:[
    S('采集与质控','患者细胞进入体外制造流程',
      ['采集患者自体造血干/祖细胞，富集 CD34⁺ 细胞，并进行体外编辑、制备和质控。','最终回输的是经过制造的<strong>活细胞产品</strong>。细胞身份、活性、编辑情况和产品质量共同影响治疗流程。'],
      ['自体采集','CD34⁺ 富集','编辑与质控','细胞产品'],
      'Casgevy 是自体细胞疗法；它不是普通小分子药物。图示为流程概括，不提供临床操作方案。',
      '体外编辑与质控在回输之前完成。','collection',2),
    S('白消安预处理','清髓性预处理为植入创造条件',
      ['回输前使用白消安进行清髓性预处理，减少原有造血细胞，为编辑细胞在骨髓中的植入创造条件。','该环节并不改变靶 DNA，却是造血重建流程的重要组成部分，并伴随骨髓抑制等重要风险。'],
      ['清髓性预处理','骨髓生态位与造血环境改变','支持后续植入'],
      '“清除原有干细胞”是简化说法，不应理解为精准、无副作用地只清除某一类细胞。治疗和长期随访须由专业临床团队开展。',
      '空出的生态位是概念示意；不代表所有原有细胞均被清除。','conditioning'),
    S('回输与归巢','编辑细胞进入骨髓并建立造血',
      ['细胞回输后，经循环到达骨髓，能够归巢并在适合的微环境中植入。','只有在体内形成有效、持续的造血贡献，体外观察到的编辑才可能转化为持久的红细胞输出。'],
      ['回输','骨髓归巢','植入','造血重建'],
      '回输、归巢和植入不是同义词。编辑比例也不能单独保证长期植入，必须结合骨髓及外周血随访。',
      '移动的细胞表示归巢方向；图中运动速度不是临床时间。','engraft'),
    S('自我更新与分化','持久性来自长期造血细胞的后代',
      ['具有长期重建能力的造血干细胞可自我更新，并持续产生分化后代。红系后代继承 DNA 编辑，在发育过程中体现增强子调控改变。','<strong>成熟红细胞会更新；不是某一批回输细胞变成红细胞后永远留在体内。</strong>'],
      ['长期 HSC 植入','自我更新','红系祖细胞','多代红细胞'],
      'HSPC 是异质群体，不是所有 CD34⁺ 细胞都有同等长期重建能力。造血干细胞还可产生其他谱系；本图以红系为重点。',
      '自我更新回环与红系分化分支分开绘制，避免把两者混为一谈。','lineage',5),
    S('成熟与脱核','编辑与表达改变发生于不同阶段',
      ['编辑发生于有核 HSPC；其红系后代经历转录、翻译和 HbF 组装后，逐步成熟并脱核。','成熟红细胞没有细胞核，保留已合成的血红蛋白。持续的 HbF 较高红细胞供给，依赖上游已植入细胞持续产生后代。'],
      ['已编辑 HSPC','有核红系前体：γ 表达 ↑','成熟脱核红细胞：HbF 较高'],
      '可以在有核细胞中测编辑等位基因，也可以在红细胞中测 HbF 和 F-cells。这些读数处于不同层级，不能当成同一个百分比。',
      '下一章用随访指标检验：DNA 改变、蛋白表达和临床表型是否相互支持。','maturation',5)
  ]},
  {nav:'证据如何读',title:'用随访指标检验机制链',tag:'07 / DNA、蛋白质与表型的不同读数',scale:'机制证据 / 指标解释',steps:[
    S('编辑留存','编辑等位基因比例回答“DNA 改变是否留存”',
      ['外周血有核细胞与骨髓细胞中的编辑等位基因比例，可用于观察携带编辑的造血细胞贡献是否持续。','分母是所分析位点的<strong>等位基因</strong>，不是 HbF 蛋白总量，也不直接等于被编辑细胞的百分比。'],
      ['测序靶位点','编辑等位基因比例','造血贡献的持久性证据'],
      '一个二倍体细胞可有 0、1 或 2 个被编辑等位基因；不同细胞组成和取样方式还会影响读数。不能由一个总体比例直接推断所有细胞的双等位基因编辑状态。',
      '展示测量对象与分母，不使用未经核对的患者曲线。','alleles',5),
    S('HbF 含量','HbF 浓度与 HbF 占比不是同一个量',
      ['HbF 浓度（例如 g/dL）描述单位血液体积中的 HbF 量；HbF 占比（%）描述它在总血红蛋白中所占的比例。','提高 HbF 既要联系总体蛋白含量，也要关注它是否分布于足够多的红细胞中；这就引出 F-cell 指标。'],
      ['蛋白检测','绝对量 / 相对比例','连接转录变化与蛋白产物'],
      '总血红蛋白变化、输血支持和取样时间都会影响解释。不同指标、不同患者、不同随访时点的数据不能拼成同一条曲线。',
      '三种读数分栏呈现，提醒“单位、分母、时间点”必须一起读。','hbMetrics',5),
    S('F-cells','F-cell 比例描述 HbF 在红细胞间的分布',
      ['F-cells 是可检出 HbF 的红细胞。F-cell 比例是<strong>HbF 阳性红细胞数 / 总红细胞数</strong>，不等于每个红细胞内的 HbF 占比。','对于抗镰变保护，细胞内 HbF 的含量及其分布都重要；“大部分红细胞阳性”不能独自证明每个细胞含量完全相同。'],
      ['单细胞检测 HbF','F-cell 比例','观察细胞间分布'],
      '阳性阈值取决于检测方法。图中细胞数量只帮助解释分母，不代表原始研究的 F-cell 百分比。',
      '紫色标识表示 HbF 可检出；深浅差异提醒阳性细胞也可含量不同。','fcells',5),
    S('临床验证','两名早期患者提供了跨层级证据',
      ['Frangoul 等的早期报告包括 1 名输血依赖型 β-地贫患者和 1 名镰状细胞病患者。随访超过一年时，报告了持续编辑、HbF 增加和广泛的红细胞内分布。','报告观察到输血独立，并在镰状细胞病患者中未再观察到血管闭塞发作。这支持机制链的可行性；<strong>两例早期结果不是全体患者的疗效概率，也不能推断终身结局。</strong>'],
      ['持续编辑','HbF 与分布变化','输血 / 血管闭塞事件随访'],
      '原文：NEJM 2021;384:252–260，DOI:10.1056/NEJMoa2031054。完整病例曲线应在原文中按患者、指标、分母和时间点阅读；本页没有根据视频口述补画数据。',
      '用相互支持的多个层级建立证据，不能用一张临床结果图替代分子机制。','evidence',5)
  ]}
];

const state={chapter:0,step:0,disease:'scd',oxygen:'deoxy',beta:'plus',hb:'a',gamma:2,age:'adult',repair:'deletion',timer:null};
const $=id=>document.getElementById(id);
const currentSteps=()=>state.chapter===1?diseaseSteps[state.disease]:chapters[state.chapter].steps;
const color={a:'#bb603e',b:'#477ac6',g:'#8780bb',n:'#343777',line:'#b6bfd5',rust:'#ba583c'};
const text=(x,y,value,cls='',anchor='middle')=>'<text x="'+x+'" y="'+y+'" text-anchor="'+anchor+'" class="'+cls+'">'+value+'</text>';
const box=(x,y,w,h,fill='#fff',stroke='#dbe1ed',r=8)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+fill+'" stroke="'+stroke+'"/>';
const arrow=(x1,y1,x2,y2,kind='arrow',stroke=color.line)=>'<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" fill="none" stroke="'+stroke+'" stroke-width="2.5" marker-end="url(#'+kind+')"/>';
const labelBox=(x,y,w,title,sub,fill='#fff')=>box(x,y,w,74,fill)+text(x+w/2,y+29,title,'svg-label')+text(x+w/2,y+54,sub,'svg-small');
function circle(x,y,r,c,label='',cls=''){return '<g class="'+cls+'"><circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+c+'"/>'+text(x,y+6,label,'svg-white')+'</g>'}
function hb(x,y,type='a',scale=1,heme=false){
  const c=type==='f'?color.g:color.b, sym=type==='f'?'γ':type==='s'?'βˢ':'β';
  return '<g transform="translate('+x+' '+y+') scale('+scale+')">'+circle(-24,-23,32,color.a,'α')+circle(24,-23,32,c,sym)+circle(-24,24,32,c,sym)+circle(24,24,32,color.a,'α')+(heme?[-1,1].map(i=>[-1,1].map(j=>circle(i*24+8,j*23-9,5,'#f4dc9b')).join('')).join(''):'')+'</g>';
}
function rbc(x,y,sick=false,pale=false,scale=1,f=false){
  return '<g transform="translate('+x+' '+y+') scale('+scale+')">'+(sick?'<path d="M-57 14 Q-24 -46 57 -19 Q5 -19 -25 28 Q-45 45 -57 14Z" fill="#ba583c"/>':'<ellipse rx="42" ry="32" fill="'+(pale?'#e5bda9':'#c9745b')+'"/><ellipse rx="22" ry="16" fill="'+(pale?'#f8ece3':'#e5ad99')+'"/>')+(f?circle(20,-20,10,color.g,''):'')+'</g>';
}
function wrap(content){
  return '<svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="#9ba9c6"/></marker><marker id="stop" viewBox="0 0 10 14" refX="9" refY="7" markerWidth="7" markerHeight="9" orient="auto"><path d="M9 0V14" stroke="#ba583c" stroke-width="3"/></marker></defs><g class="animate-in">'+content+'</g></svg>';
}
function chromosome(y,items,label){
  return text(48,y-29,label,'svg-small','start')+'<path d="M48 '+y+' H752" stroke="#cbd2e2" stroke-width="7" stroke-linecap="round"/>'+items.map(([x,w,t,c])=>box(x,y-14,w,28,c,c,3)+text(x+w/2,y+46,t,'svg-gene')).join('');
}
function genesScene(){
  return chromosome(115,[[186,125,'HBA2',color.a],[438,125,'HBA1',color.a]],'16 号染色体 · α-珠蛋白基因簇')+
  chromosome(280,[[115,87,'HBG2',color.g],[235,87,'HBG1',color.g],[465,75,'HBD','#b8bed0'],[603,95,'HBB',color.b]],'11 号染色体 · β-样珠蛋白基因簇（局部）')+
  text(400,405,'基因 → 转录产物 → 珠蛋白亚基','svg-label');
}
function expressionScene(){
  return box(42,58,300,330,'#eef0f7','#d6dced',150)+text(192,97,'有核红系前体：细胞核','svg-small')+
    labelBox(83,142,215,'珠蛋白 DNA','转录 → RNA 加工')+arrow(191,227,191,280)+text(191,317,'成熟 mRNA','svg-label')+
    arrow(304,300,456,300)+text(390,279,'出核','svg-small')+
    '<path d="M466 306q20-20 40 0t40 0t40 0" stroke="'+color.b+'" stroke-width="4" fill="none"/>'+
    text(538,349,'核糖体翻译','svg-small')+arrow(616,299,662,299)+circle(709,300,33,color.b,'β')+text(695,362,'珠蛋白链','svg-small');
}
function assemblyScene(type=state.hb,heme=false){
  return text(192,77,'组装所需亚基','svg-label')+circle(140,162,34,color.a,'α')+circle(240,162,34,color.a,'α')+
    circle(140,272,34,type==='f'?color.g:color.b,type==='f'?'γ':'β')+circle(240,272,34,type==='f'?color.g:color.b,type==='f'?'γ':'β')+
    arrow(330,218,444,218)+hb(583,218,type,1.48,heme)+text(583,355,type==='f'?'HbF = α₂γ₂':'HbA = α₂β₂','svg-big')+
    (heme?text(400,415,'每个亚基含 1 个血红素 · 最多结合 4 个 O₂','svg-small'):text(400,415,'α-链保留，非 α 亚基改变','svg-small'));
}
function mutationScene(){
  return labelBox(62,75,267,'正常 HBB 编码链','GAG → Glu（谷氨酸）')+labelBox(472,75,267,'HbS 变异','GTG → Val（缬氨酸）','#fbefe8')+
    arrow(344,110,452,110)+hb(190,275,'a',1.1)+hb(605,275,'s',1.1)+
    '<circle cx="651" cy="251" r="11" fill="'+color.rust+'" class="pulse"/>'+
    text(190,375,'带负电侧链','svg-small')+text(605,375,'疏水表面接触点','svg-rust')+
    text(400,433,'β⁶ Glu → Val：改变相互作用，而非使 β-链消失','svg-label');
}
function polymerScene(rescue=false){
  const low=state.oxygen==='deoxy', n=rescue?Math.round(state.gamma/2):0;
  let out=text(400,48,low?'脱氧条件：HbS 更易聚合':'氧合条件：此处以分散状态示意','svg-label');
  for(let i=0;i<8;i++){
    const f=rescue&&i<n, x=low&&!f?108+i*81:100+(i%4)*190, y=low&&!f?218+(i%2)*27:150+Math.floor(i/4)*145;
    if(low&&!f&&i>0&&i>=n+1)out+='<line x1="'+(x-81)+'" y1="'+(218+((i-1)%2)*27)+'" x2="'+x+'" y2="'+y+'" stroke="#ba583c" stroke-width="6" class="draw"/>';
    out+=hb(x,y,f?'f':'s',.53);
  }
  out+=text(400,398,low?(n?'HbF 增加：可形成的 HbS 接触链减少':'HbS 分子间接触 → 纤维形成'):'分子间聚合倾向随氧合状态改变','svg-small');
  return out;
}
function sickleCellScene(){
  return rbc(165,224,false,false,1.7)+arrow(270,224,378,224)+'<path d="M427 260 Q478 90 730 191 Q570 180 493 316 Q441 353 427 260Z" fill="#d88b70" stroke="#bb603e" stroke-width="4"/>'+
    Array.from({length:5},(_,i)=>'<path d="M470 '+(242+i*10)+' Q540 '+(157+i*9)+' 670 '+(188+i*6)+'" stroke="#824c4e" stroke-width="4" fill="none" class="draw"/>').join('')+
    text(163,357,'柔软、可变形','svg-small')+text(571,357,'聚合纤维 → 变硬、镰变','svg-rust')+text(400,65,'从蛋白质聚合到细胞力学','svg-label');
}
function vesselScene(){
  return text(400,57,'红细胞表型 → 微循环影响','svg-label')+'<path d="M45 160H295 Q340 160 365 196H750M45 324H295 Q340 324 365 285H750" stroke="#dba58d" stroke-width="16" fill="none"/>'+
    rbc(125,235,false,false,.85)+rbc(263,228,true,false,.9)+rbc(391,243,true,false,.9)+rbc(452,246,true,false,.8)+
    arrow(555,239,673,239)+text(635,282,'灌注受影响','svg-small')+
    text(231,390,'溶血：红细胞寿命缩短','svg-small')+text(565,390,'阻塞：变形能力、黏附与炎症','svg-small');
}
function thalGeneScene(){
  const residual=state.beta==='plus';
  return labelBox(50,69,222,'HBB 等位基因',residual?'β⁺：残余合成':'β⁰：合成缺失')+
    arrow(287,105,378,105)+labelBox(399,69,345,'基因表达过程','转录 / 剪接 / 翻译受损','#fbefe8')+
    text(145,223,'α-链供给','svg-label')+text(565,223,'β-链供给','svg-label')+
    Array.from({length:6},(_,i)=>circle(90+(i%3)*62,285+Math.floor(i/3)*67,23,color.a,'α')).join('')+
    (residual?circle(534,285,23,color.b,'β')+circle(596,285,23,color.b,'β'):text(565,312,'无 β-链产出','svg-rust'))+
    text(400,422,'相对供给失衡；图中数量不是表达比例','svg-small');
}
function imbalanceScene(rescue=false){
  const g=rescue?Math.round(state.gamma/2):0, paired=2+g;
  let out=text(195,55,'α-链','svg-label')+text(590,55,rescue?'非 α-链：β + γ':'非 α-链：β 不足','svg-label');
  for(let i=0;i<6;i++){
    const y=109+i*48;
    out+=circle(207,y,19,color.a,'α');
    if(i<paired)out+=circle(586,y,19,i<2?color.b:color.g,i<2?'β':'γ')+arrow(242,y,551,y);
    else out+=text(530,y+5,'未配对 α-链 → 不稳定 / 沉淀','svg-rust');
  }
  return out+text(400,443,rescue?'γ-链提供配对伙伴，减轻游离 α-链负担':'α-链相对过剩，造成额外细胞毒性','svg-small');
}
function precursorScene(){
  return '<circle cx="234" cy="225" r="111" fill="#eee3df" stroke="#d9b4a4" stroke-width="3"/><circle cx="234" cy="225" r="45" fill="#8c83b4"/>'+
    [0,1,2,3,4,5].map(i=>circle(154+(i%3)*77,151+Math.floor(i/3)*143,12,color.a)).join('')+
    text(234,383,'有核红系前体','svg-small')+arrow(371,225,450,225)+
    labelBox(469,129,278,'α-链聚集与氧化损伤','前体成熟 / 生存受损','#fbefe8')+
    labelBox(469,263,278,'有效成熟红细胞 ↓','无效红细胞生成')+text(400,50,'骨髓中启动生成，却未能有效产出','svg-label');
}
function thalOutcomeScene(){
  return labelBox(46,89,300,'骨髓内：无效生成','许多前体不能完成成熟','#fbefe8')+
    labelBox(455,89,300,'外周血：溶血增加','部分红细胞较早被清除','#fbefe8')+
    arrow(196,182,320,265)+arrow(605,182,480,265)+labelBox(251,278,300,'有效红细胞不足','贫血 / 输血依赖型表型')+
    text(400,415,'γ-链的价值：从配对平衡这一上游环节干预','svg-label');
}
function comparisonScene(){
  const scd=state.disease==='scd';
  let out=box(25,45,360,350,'#fbefe8')+box(414,45,360,350,'#eeedf7')+text(205,83,'干预前','svg-label')+text(594,83,'HbF 再激活后','svg-label');
  if(scd){
    out+=hb(129,173,'s',.5)+hb(205,173,'s',.5)+hb(280,173,'s',.5)+'<path d="M129 173H280" stroke="#ba583c" stroke-width="5" opacity=".5"/>'+
      hb(520,173,'f',.5)+hb(594,173,'s',.5)+hb(669,173,'f',.5)+rbc(205,271,true,false,1.3)+rbc(594,271,false,false,1.3,true)+
      text(205,354,'HbS 聚合 / 镰变倾向','svg-small')+text(594,354,'聚合受抑 / 镰变倾向下降','svg-small');
  }else{
    out+=circle(105,169,23,color.a,'α')+circle(182,169,23,color.a,'α')+circle(260,169,23,color.a,'α')+
      text(205,231,'配对伙伴不足','svg-rust')+hb(594,184,'f',.9)+
      text(594,291,'γ-链参与配对','svg-label')+text(205,354,'未配对 α-链负担','svg-small')+text(594,354,'链失衡缓解 / 红系生存改善','svg-small');
  }
  return out+text(400,441,'HBB 致病变异仍存在；两栏为定性机制对照','svg-small');
}
function developmentScene(){
  const fetal=state.age==='fetal';
  return text(400,60,fetal?'胎儿期：HbF 为主的表达程序':'成人期：HbA 为主的表达程序','svg-label')+
    labelBox(45,116,260,'HBG1 / HBG2',fetal?'γ 转录相对较高':'γ 转录相对较低',fetal?'#ebe8f4':'#fff')+
    labelBox(45,269,260,'HBB',fetal?'β 转录相对较低':'β 转录相对较高',fetal?'#fff':'#e8eef9')+
    arrow(324,fetal?153:306,466,230)+hb(598,230,fetal?'f':'a',1.22)+text(598,364,fetal?'HbF：α₂γ₂':'HbA：α₂β₂','svg-big')+
    text(400,433,'发育性调控逐步切换；不是空气直接关闭 γ 基因','svg-small');
}
function affinityScene(){
  return text(202,60,'HbA：α₂β₂','svg-label')+text(599,60,'HbF：α₂γ₂','svg-label')+hb(202,198,'a',1.08)+hb(599,198,'f',1.08)+
    box(139,316,126,45,'#fff')+text(202,345,'2,3-BPG','svg-small')+box(536,316,126,45,'#fff')+text(599,345,'2,3-BPG','svg-small')+
    '<path d="M202 302V265" stroke="#343777" stroke-width="4"/><path d="M599 302V265" stroke="#343777" stroke-width="2" stroke-dasharray="5 6"/>'+
    text(202,409,'较强的 BPG 相互作用','svg-small')+text(599,409,'较弱的 BPG 相互作用','svg-small');
}
function regulationScene(mode='enhancer'){
  const edited=['gataLost','derepress'].includes(mode);
  const repressed=!edited;
  let out=chromosome(108,[[91,160,'红系增强子',edited?'#d8bfaf':color.g],[537,144,'BCL11A',color.n]],'2 号染色体 · BCL11A 位点')+
    '<path d="M171 88Q379 -8 609 88" stroke="'+(edited?'#c7cbd7':color.n)+'" stroke-width="2" stroke-dasharray="6 5" fill="none"/>'+
    box(120,30,103,33,edited?'#eee':'#343777',edited?'#ccd1dd':'#343777')+text(171,52,edited?'结合受扰':'GATA1',edited?'svg-small':'svg-white')+
    text(381,67,'增强子调控','svg-small');
  out+=arrow(610,164,610,203)+circle(610,240,29,edited?'#b7b9cb':color.n,'B')+text(699,245,edited?'BCL11A ↓':'BCL11A','svg-small');
  out+=chromosome(350,[[131,128,'HBG2',color.g],[325,128,'HBG1',color.g],[605,109,'HBB',color.b]],'11 号染色体 · β-样珠蛋白基因簇')+
    '<path d="M580 245Q491 232 388 325" stroke="'+(edited?'#b8bdd0':'#ba583c')+'" stroke-width="3" fill="none" '+(repressed?'marker-end="url(#stop)"':'stroke-dasharray="6 6"')+'/>'+
    text(400,283,edited?'抑制减弱 → γ 转录增加':'BCL11A 蛋白参与抑制','svg-small')+
    text(400,445,edited?'增强子受扰 → 红系 BCL11A 下降 → HBG 去抑制':'顺式调控 DNA → 反式调控蛋白 → 另一基因座','svg-small');
  return out;
}
function dnaScene(mode){
  const cut=mode==='break', repair=mode==='repair', lost=repair&&state.repair!=='precise';
  const bases=['A','C','T','G','A','T','A','G','C','T','A','C'],comp={A:'T',T:'A',G:'C',C:'G'};
  let out=text(400,47,'BCL11A +58 红系增强子 · 关键 GATA1 位点','svg-label')+
    box(262,122,247,190,lost?'#fbefe8':'#eceaf6',lost?'#c28265':'#bbb5d5',10)+text(384,344,'GATA1 结合区域（示意）','svg-small');
  for(let row=0;row<2;row++){
    const y=185+row*57;
    if(cut)out+='<path d="M52 '+y+'H382M410 '+y+'H745" stroke="#929fc0" stroke-width="4"/>';
    else out+='<path d="M52 '+y+'H745" stroke="#929fc0" stroke-width="4"/>';
    bases.forEach((b,i)=>{
      const x=64+i*55, deleted=repair&&state.repair==='deletion'&&i>=5&&i<=6;
      if(!deleted)out+=box(x,y-15,33,30,(lost&&i>=5&&i<=6)?'#e6aa86':'#fff','#cbd2e1',3)+text(x+16,y+6,row?comp[b]:b,'svg-small');
      else out+='<path d="M'+(x+3)+' '+y+'h27" stroke="#ba583c" stroke-width="3" stroke-dasharray="4 3"/>';
    });
  }
  if(mode==='target')out+=box(147,71,365,39,'#343777')+text(330,97,'Cas9–sgRNA：配对识别 + PAM','svg-white')+arrow(329,111,329,150);
  if(cut)out+='<path d="M394 147v122" stroke="#ba583c" stroke-width="5" stroke-dasharray="7 7" class="pulse"/>'+text(570,100,'DSB：双链断裂','svg-rust');
  if(repair)out+=text(400,93,lost?(state.repair==='deletion'?'示意结果：缺失':'示意结果：插入'):'示意结果：原样连接','svg-rust');
  if(repair&&state.repair==='insertion')out+=circle(393,181,13,color.rust,'+')+circle(393,245,13,color.rust,'+');
  return out+text(400,417,'字母为教学用示意序列；不是临床靶序列','svg-small');
}
function hspcScene(){
  return '<ellipse cx="400" cy="231" rx="158" ry="143" fill="#eceaf5" stroke="#a8a1c8" stroke-width="3"/><circle cx="400" cy="231" r="72" fill="#c8c1df"/>'+
    text(400,232,'细胞核','svg-label')+text(400,390,'自体 CD34⁺ 造血干 / 祖细胞','svg-label')+
    labelBox(25,70,195,'Cas9 + sgRNA','体外 RNP 递送')+arrow(230,119,319,174)+
    [0,1,2,3].map(i=>circle(282+i*24,134+i*15,8,color.n,'','moving')).join('')+
    text(626,125,'增强子 DNA','svg-small')+arrow(620,140,465,207);
}
function gammaProteinScene(){
  return labelBox(35,60,210,'HBG1 / HBG2','去抑制后转录 ↑','#eeedf7')+arrow(260,98,351,98)+
    labelBox(372,60,183,'γ mRNA','翻译产生 γ-链')+arrow(572,98,655,98)+circle(709,100,30,color.g,'γ')+
    arrow(707,145,607,239)+circle(402,218,30,color.a,'α')+arrow(444,224,494,258)+hb(563,307,'f',1.06)+
    text(285,289,'α-链 + 血红素','svg-small')+text(563,422,'HbF = α₂γ₂ ↑','svg-big');
}
function transplantScene(mode){
  if(mode==='lineage'||mode==='maturation'){
    return circle(123,210,52,'#d4d0e5','')+circle(123,210,26,color.n,'')+text(123,319,'已编辑 HSC','svg-label')+
      '<path d="M79 156C34 85 173 81 168 148" stroke="#8f88b6" stroke-width="3" fill="none" marker-end="url(#arrow)" class="draw"/>'+text(126,73,'自我更新','svg-small')+
      arrow(184,210,331,210)+circle(401,210,65,'#e8d3c7','')+circle(401,210,30,color.g,'')+
      text(400,319,'有核红系前体','svg-label')+text(400,353,'γ 转录 / HbF 合成','svg-small')+
      arrow(473,210,607,210)+rbc(682,210,false,false,1.18,true)+text(681,319,'成熟红细胞','svg-label')+text(681,353,'脱核 · 保留 HbF','svg-small')+
      text(400,435,'编辑的 DNA 在有核后代中传递；成熟红细胞不再转录','svg-small');
  }
  if(mode==='collection')return labelBox(35,160,185,'患者自体采集','HSPC')+arrow(232,198,294,198)+labelBox(309,160,185,'CD34⁺ 富集','编辑 / 制造 / 质控')+arrow(507,198,566,198)+labelBox(580,160,185,'活细胞产品','准备回输')+text(400,338,'体外制造阶段','svg-label');
  const conditioning=mode==='conditioning';
  let out=text(400,53,conditioning?'预处理：为后续植入创造条件':'回输 → 归巢 → 植入','svg-label')+
    box(360,104,377,274,'#f1e6dc','#c79a7c',85)+text(551,140,'骨髓微环境','svg-label');
  for(let i=0;i<5;i++)out+='<ellipse cx="'+(425+i*60)+'" cy="'+(221+(i%2)*74)+'" rx="25" ry="22" fill="'+(conditioning?'#eadbce':'#c4bdd8')+'" stroke="#d1b8a6" stroke-dasharray="'+(conditioning?'4 5':'0')+'"/>';
  if(!conditioning)out+=circle(123,235,29,color.n,'')+arrow(170,235,384,235)+circle(427,224,20,color.n,'','pulse')+text(148,304,'已编辑 HSPC','svg-small');
  else out+=labelBox(36,177,237,'白消安预处理','清髓性化疗')+arrow(285,213,354,213);
  return out+text(400,427,conditioning?'不是选择性“修理”DNA；它改变造血环境':'长期细胞贡献需要成功植入，而非仅完成回输','svg-small');
}
function evidenceScene(mode){
  if(mode==='alleles'){
    return text(400,52,'编辑等位基因 ≠ 编辑细胞数','svg-label')+[0,1,2].map(i=>box(75+i*245,105,185,210,'#fff')+circle(133+i*245,183,17,i>0?color.g:'#cbd1df')+circle(207+i*245,183,17,i>1?color.g:'#cbd1df')+text(168+i*245,249,i+' 个编辑等位基因','svg-small')).join('')+
      text(400,381,'每个二倍体细胞在该位点有两个等位基因','svg-label')+text(400,421,'此处为三种细胞状态，不表示患者分布','svg-small');
  }
  if(mode==='fcells'){
    return text(400,51,'阳性细胞比例 ≠ 细胞内 HbF 比例','svg-label')+[0,1,2,3,4,5,6,7].map(i=>rbc(130+(i%4)*178,158+Math.floor(i/4)*128,false,false,.95,i!==3)).join('')+
      text(400,391,'F-cell：可检出 HbF 的红细胞','svg-label')+text(400,430,'标记仅解释阳性 / 阴性，不代表研究百分比','svg-small');
  }
  if(mode==='hbMetrics'){
    return labelBox(50,135,213,'HbF 浓度','g/dL：每单位血量')+labelBox(294,135,213,'HbF 占比','HbF / 总 Hb')+labelBox(538,135,213,'F-cell 比例','HbF⁺ RBC / 总 RBC')+
      arrow(155,235,155,288)+arrow(400,235,400,288)+arrow(645,235,645,288)+text(155,329,'蛋白绝对量','svg-small')+text(400,329,'蛋白相对量','svg-small')+text(645,329,'细胞间分布','svg-small');
  }
  return text(400,50,'早期报告：2 名患者，随访超过一年','svg-label')+
    labelBox(49,112,309,'TDT：1 名患者','报告输血独立','#f0edf7')+labelBox(441,112,309,'SCD：1 名患者','报告未再发生 VOC','#edf1fa')+
    labelBox(134,272,532,'持续编辑 + HbF 增加 + 广泛分布','跨 DNA、蛋白质与表型的支持证据')+
    text(400,415,'Frangoul et al. · NEJM 2021 · 不是总体疗效估计','svg-small');
}
const sceneRenderers={
  genes:genesScene,expression:expressionScene,assembly:()=>assemblyScene(),heme:()=>assemblyScene('a',true),
  mutation:mutationScene,polymer:()=>polymerScene(),sickleCell:sickleCellScene,vessel:vesselScene,
  thalGene:thalGeneScene,imbalance:()=>imbalanceScene(),precursor:precursorScene,thalOutcome:thalOutcomeScene,
  gammaAssembly:()=>assemblyScene('f'),rescue:()=>state.disease==='scd'?polymerScene(true):imbalanceScene(true),comparison:comparisonScene,
  development:developmentScene,affinity:affinityScene,repression:()=>regulationScene('repression'),enhancer:()=>regulationScene('enhancer'),
  hspc:hspcScene,target:()=>dnaScene('target'),break:()=>dnaScene('break'),repair:()=>dnaScene('repair'),
  gataLost:()=>regulationScene('gataLost'),derepress:()=>regulationScene('derepress'),gammaProtein:gammaProteinScene,
  collection:()=>transplantScene('collection'),conditioning:()=>transplantScene('conditioning'),engraft:()=>transplantScene('engraft'),
  lineage:()=>transplantScene('lineage'),maturation:()=>transplantScene('maturation'),
  alleles:()=>evidenceScene('alleles'),hbMetrics:()=>evidenceScene('hbMetrics'),fcells:()=>evidenceScene('fcells'),evidence:()=>evidenceScene('evidence')
};
function diseaseButtons(){return '<div class="control-group" role="group" aria-label="选择疾病"><button data-disease="scd" aria-pressed="'+(state.disease==='scd')+'" class="'+(state.disease==='scd'?'selected':'')+'">镰状细胞病</button><button data-disease="tdt" aria-pressed="'+(state.disease==='tdt')+'" class="'+(state.disease==='tdt'?'selected':'')+'">β-地中海贫血</button></div>'}
function controls(scene){
  let html='';
  if([1,2].includes(state.chapter)||scene==='comparison')html+=diseaseButtons();
  if(scene==='polymer'||(scene==='rescue'&&state.disease==='scd'))html+='<div class="control-group" role="group" aria-label="氧合状态"><button data-oxygen="oxy" aria-pressed="'+(state.oxygen==='oxy')+'" class="'+(state.oxygen==='oxy'?'selected':'')+'">氧合</button><button data-oxygen="deoxy" aria-pressed="'+(state.oxygen==='deoxy')+'" class="'+(state.oxygen==='deoxy'?'selected':'')+'">脱氧</button></div>';
  if(scene==='thalGene')html+='<label for="betaSelect">等位基因类别</label><select id="betaSelect"><option value="plus" '+(state.beta==='plus'?'selected':'')+'>β⁺：残余 β-链生成</option><option value="zero" '+(state.beta==='zero'?'selected':'')+'>β⁰：β-链生成缺失</option></select>';
  if(scene==='assembly')html+='<div class="control-group" role="group" aria-label="血红蛋白组装"><button data-hb="a" class="'+(state.hb==='a'?'selected':'')+'">HbA：α₂β₂</button><button data-hb="f" class="'+(state.hb==='f'?'selected':'')+'">HbF：α₂γ₂</button></div>';
  if(scene==='rescue')html+='<label class="range-control" for="gammaRange"><span>γ-链供给较低</span><input id="gammaRange" type="range" min="0" max="8" value="'+state.gamma+'" aria-label="相对 γ-珠蛋白供给"><span>γ-链供给较高</span></label>';
  if(scene==='development')html+='<div class="control-group" role="group" aria-label="发育阶段"><button data-age="fetal" class="'+(state.age==='fetal'?'selected':'')+'">胎儿期</button><button data-age="adult" class="'+(state.age==='adult'?'selected':'')+'">成人期</button></div>';
  if(scene==='repair')html+='<label for="repairSelect">比较修复结果</label><select id="repairSelect"><option value="precise" '+(state.repair==='precise'?'selected':'')+'>原样连接：位点保留</option><option value="deletion" '+(state.repair==='deletion'?'selected':'')+'>缺失：位点可能受扰</option><option value="insertion" '+(state.repair==='insertion'?'selected':'')+'>插入：位点可能受扰</option></select>';
  $('interactiveControls').innerHTML=html;
}
function renderDiagram(){
  const data=currentSteps()[state.step];
  $('diagram').innerHTML=wrap(sceneRenderers[data.scene]());
  $('diagram').setAttribute('aria-label',data.title+'。'+data.caption);
}
function render(){
  const ch=chapters[state.chapter],steps=currentSteps(),data=steps[state.step],ref=references[data.ref];
  $('chapterNav').innerHTML=chapters.map((c,i)=>'<button data-chapter="'+i+'" class="'+(i===state.chapter?'active':'')+'" aria-current="'+(i===state.chapter?'step':'false')+'"><span>0'+(i+1)+'</span>'+c.nav+'</button>').join('');
  $('chapterIndex').textContent='0'+(state.chapter+1);$('chapterTag').textContent=ch.tag;$('chapterTitle').textContent=ch.title;
  $('stepTabs').innerHTML=steps.map((s,i)=>'<button data-step="'+i+'" class="'+(i===state.step?'active':'')+'" aria-pressed="'+(i===state.step)+'"><small>'+String(i+1).padStart(2,'0')+'</small>'+s.tab+'</button>').join('');
  $('diagramScale').textContent=ch.scale;$('diagramCaption').textContent=data.caption;
  $('stepCount').textContent='机制步骤 '+(state.step+1)+' / '+steps.length;
  $('stepTitle').textContent=data.title;$('explanation').innerHTML=data.body.map(p=>'<p>'+p+'</p>').join('');
  $('causalChain').innerHTML='<div class="causal-chain">'+data.chain.map((c,i)=>(i?'<i>→</i>':'')+'<b>'+c+'</b>').join('')+'</div>';
  $('molecularDetail').innerHTML='<p>'+data.detail+'</p>';$('stepSource').textContent='依据：'+ref.title+' ↗';$('stepSource').href=ref.url;
  $('previous').disabled=state.chapter===0&&state.step===0;
  const last=state.chapter===chapters.length-1&&state.step===steps.length-1;
  $('next').textContent=last?'回到起点 ↻':state.step===steps.length-1?'下一章 →':'下一步 →';
  $('progressText').textContent='第 '+(state.chapter+1)+' / '+chapters.length+' 章 · 可用 ← → 逐步讲解';
  const countBefore=chapters.slice(0,state.chapter).reduce((sum,c,i)=>sum+(i===1?diseaseSteps[state.disease].length:c.steps.length),0);
  const total=chapters.reduce((sum,c,i)=>sum+(i===1?diseaseSteps[state.disease].length:c.steps.length),0);
  $('progressFill').style.width=((countBefore+state.step+1)/total*100)+'%';
  controls(data.scene);renderDiagram();
}
function pause(){if(state.timer){clearInterval(state.timer);state.timer=null}$('play').setAttribute('aria-pressed','false');$('play').textContent='▷ 连续演示'}
function start(){state.timer=setInterval(()=>go(1,false),8500);$('play').setAttribute('aria-pressed','true');$('play').textContent='Ⅱ 暂停演示'}
function go(direction,manual=true){
  if(manual)pause();
  if(direction>0){
    if(state.step<currentSteps().length-1)state.step++;
    else if(state.chapter<chapters.length-1){state.chapter++;state.step=0}
    else{state.chapter=0;state.step=0;pause()}
  }else if(state.step>0)state.step--;
  else if(state.chapter>0){state.chapter--;state.step=currentSteps().length-1}
  render();
}
$('chapterNav').addEventListener('click',e=>{const b=e.target.closest('[data-chapter]');if(!b)return;pause();state.chapter=+b.dataset.chapter;state.step=0;render();$('explorer').scrollIntoView({behavior:'smooth',block:'start'})});
$('stepTabs').addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(!b)return;pause();state.step=+b.dataset.step;render()});
$('interactiveControls').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;pause();
  ['disease','oxygen','hb','age'].forEach(key=>{if(b.dataset[key])state[key]=b.dataset[key]});
  render();
});
$('interactiveControls').addEventListener('change',e=>{
  if(e.target.id==='betaSelect'){state.beta=e.target.value;renderDiagram()}
  if(e.target.id==='repairSelect'){state.repair=e.target.value;renderDiagram()}
});
$('interactiveControls').addEventListener('input',e=>{if(e.target.id==='gammaRange'){pause();state.gamma=+e.target.value;renderDiagram()}});
$('previous').addEventListener('click',()=>go(-1));$('next').addEventListener('click',()=>go(1));
$('replay').addEventListener('click',()=>{pause();renderDiagram()});
$('play').addEventListener('click',()=>{
  if(state.timer){pause();return}
  start();
});
function setClassroom(on){document.body.classList.toggle('classroom',on);$('presentMode').setAttribute('aria-pressed',String(on));$('presentMode').textContent=on?'⛶ 退出课堂':'⛶ 课堂视图';window.scrollTo({top:0,behavior:'smooth'})}
$('presentMode').addEventListener('click',()=>setClassroom(!document.body.classList.contains('classroom')));
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){pause();if(document.body.classList.contains('classroom'))setClassroom(false);return}
  if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.target.closest('input,select,textarea,summary,button,a'))return;
  if(e.key==='ArrowRight'){e.preventDefault();go(1)}if(e.key==='ArrowLeft'){e.preventDefault();go(-1)}
});
let wasPlaying=false;
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){wasPlaying=state.timer!==null;pause();}
  else if(wasPlaying){wasPlaying=false;start();}
});
$('referenceList').innerHTML=references.map(r=>'<li><a href="'+r.url+'" target="_blank" rel="noopener noreferrer">'+r.title+' ↗</a><small>'+r.note+'</small></li>').join('');
render();
