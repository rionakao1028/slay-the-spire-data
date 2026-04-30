// ============================================
// 杀戮尖塔 - 铁甲战士全卡牌数据 + 遗物数据 + 流派数据
// ============================================

// ========== 卡牌数据 (75张) ==========
const cardsData = [
    // 初始卡牌
    { id: 1, name: "打击", type: "攻击", energy: 1, rarity: "初始", description: "造成6点伤害。", upgrade: "造成9点伤害。" },
    { id: 2, name: "防御", type: "技能", energy: 1, rarity: "初始", description: "获得5点格挡。", upgrade: "获得8点格挡。" },
    { id: 3, name: "痛击", type: "攻击", energy: 2, rarity: "初始", description: "造成8点伤害。给予2层易伤。", upgrade: "造成10点伤害。给予3层易伤。" },
    // 普通攻击卡
    { id: 4, name: "愤怒", type: "攻击", energy: 0, rarity: "普通", description: "造成6点伤害。在弃牌堆放入一张此牌的复制。", upgrade: "造成8点伤害。在弃牌堆放入一张此牌的复制。" },
    { id: 5, name: "交锋", type: "攻击", energy: 0, rarity: "普通", description: "造成14点伤害。仅能在你手牌中没有非攻击牌时才能使用。", upgrade: "造成18点伤害。仅能在你手牌中没有非攻击牌时才能使用。" },
    { id: 6, name: "全身撞击", type: "攻击", energy: 1, rarity: "普通", description: "造成等同于你当前格挡值的伤害。", upgrade: "能量消耗为0。" },
    { id: 7, name: "顺劈斩", type: "攻击", energy: 1, rarity: "普通", description: "对所有敌人造成8点伤害。", upgrade: "对所有敌人造成11点伤害。" },
    { id: 8, name: "金刚臂", type: "攻击", energy: 2, rarity: "普通", description: "造成12点伤害。给予2层虚弱。", upgrade: "造成14点伤害。给予3层虚弱。" },
    { id: 9, name: "头槌", type: "攻击", energy: 1, rarity: "普通", description: "造成9点伤害。将弃牌堆中的一张牌放到抽牌堆顶部。", upgrade: "造成12点伤害。将弃牌堆中的一张牌放到抽牌堆顶部。" },
    { id: 10, name: "重刃", type: "攻击", energy: 2, rarity: "普通", description: "造成14点伤害。力量对重刃生效3次。", upgrade: "造成14点伤害。力量对重刃生效5次。" },
    { id: 11, name: "铁斩波", type: "攻击", energy: 1, rarity: "普通", description: "获得5点格挡。造成5点伤害。", upgrade: "获得7点格挡。造成7点伤害。" },
    { id: 12, name: "完美打击", type: "攻击", energy: 2, rarity: "普通", description: "造成6点伤害。你每有一张名称中含有「打击」的牌，伤害增加2点。", upgrade: "造成6点伤害。你每有一张名称中含有「打击」的牌，伤害增加3点。" },
    { id: 13, name: "剑柄打击", type: "攻击", energy: 1, rarity: "普通", description: "造成9点伤害。抽1张牌。", upgrade: "造成10点伤害。抽2张牌。" },
    { id: 14, name: "飞剑回旋镖", type: "攻击", energy: 1, rarity: "普通", description: "随机对敌人造成3点伤害3次。", upgrade: "随机对敌人造成3点伤害4次。" },
    { id: 15, name: "闪电霹雳", type: "攻击", energy: 1, rarity: "普通", description: "对所有敌人造成4点伤害。给予1层易伤。", upgrade: "对所有敌人造成7点伤害。给予1层易伤。" },
    { id: 16, name: "双重打击", type: "攻击", energy: 1, rarity: "普通", description: "造成5点伤害2次。", upgrade: "造成7点伤害2次。" },
    { id: 17, name: "狂野打击", type: "攻击", energy: 1, rarity: "普通", description: "造成12点伤害。将一张伤口洗入你的抽牌堆。", upgrade: "造成17点伤害。将一张伤口洗入你的抽牌堆。" },
    // 普通技能卡
    { id: 18, name: "武装", type: "技能", energy: 1, rarity: "普通", description: "获得5点格挡。在本场战斗中升级手牌中的一张牌。", upgrade: "获得5点格挡。在本场战斗中升级手牌中的所有牌。" },
    { id: 19, name: "活动肌肉", type: "技能", energy: 0, rarity: "普通", description: "获得2点力量。在你的回合结束时，失去2点力量。", upgrade: "获得4点力量。在你的回合结束时，失去4点力量。" },
    { id: 20, name: "破灭", type: "技能", energy: 1, rarity: "普通", description: "打出你抽牌堆顶部的牌并将其消耗。", upgrade: "能量消耗为0。" },
    { id: 21, name: "耸肩无视", type: "技能", energy: 1, rarity: "普通", description: "获得8点格挡。抽1张牌。", upgrade: "获得11点格挡。抽1张牌。" },
    { id: 22, name: "坚毅", type: "技能", energy: 1, rarity: "普通", description: "获得7点格挡。消耗手牌中一张随机的牌。", upgrade: "获得9点格挡。消耗手牌中一张指定的牌。" },
    { id: 23, name: "战吼", type: "技能", energy: 0, rarity: "普通", description: "抽1张牌。将你手牌中的一张牌放到抽牌堆顶部。消耗。", upgrade: "抽2张牌。将你手牌中的一张牌放到抽牌堆顶部。消耗。" },
    // 罕见攻击卡
    { id: 24, name: "飞身踢", type: "攻击", energy: 1, rarity: "罕见", description: "造成5点伤害。如果目标拥有易伤，获得1点能量并抽1张牌。", upgrade: "造成8点伤害。如果目标拥有易伤，获得1点能量并抽1张牌。" },
    { id: 25, name: "御血术", type: "攻击", energy: 1, rarity: "罕见", description: "失去3点生命。造成15点伤害。", upgrade: "失去2点生命。造成20点伤害。" },
    { id: 26, name: "连续拳", type: "攻击", energy: 1, rarity: "罕见", description: "造成2点伤害4次。消耗。", upgrade: "造成2点伤害5次。消耗。" },
    { id: 27, name: "暴走", type: "攻击", energy: 1, rarity: "罕见", description: "造成8点伤害。本场战斗中每打出一次此牌，伤害增加4点。", upgrade: "造成8点伤害。本场战斗中每打出一次此牌，伤害增加8点。" },
    { id: 28, name: "无谋冲锋", type: "攻击", energy: 0, rarity: "罕见", description: "造成7点伤害。将一张眩晕洗入你的抽牌堆。", upgrade: "造成10点伤害。将一张眩晕洗入你的抽牌堆。" },
    { id: 29, name: "灼热攻击", type: "攻击", energy: 2, rarity: "罕见", description: "造成12点伤害。此牌可以在铁匠铺无限次升级。", upgrade: "伤害增加。可在铁匠铺无限升级。" },
    { id: 30, name: "断魂斩", type: "攻击", energy: 2, rarity: "罕见", description: "造成16点伤害。消耗手牌中所有非攻击牌。", upgrade: "造成20点伤害。消耗手牌中所有非攻击牌。" },
    { id: 31, name: "上勾拳", type: "攻击", energy: 2, rarity: "罕见", description: "造成13点伤害。给予1层虚弱。给予1层易伤。", upgrade: "造成13点伤害。给予2层虚弱。给予2层易伤。" },
    { id: 32, name: "以血还血", type: "攻击", energy: 4, rarity: "罕见", description: "造成16点伤害。本场战斗中每失去一次生命，此牌耗能减少1。", upgrade: "造成18点伤害。本场战斗中每失去一次生命，此牌耗能减少1。" },
    { id: 33, name: "旋风斩", type: "攻击", energy: -1, rarity: "罕见", description: "消耗所有能量。对所有敌人造成5点伤害X次。", upgrade: "消耗所有能量。对所有敌人造成8点伤害X次。" },
    { id: 34, name: "残杀", type: "攻击", energy: 2, rarity: "罕见", description: "造成20点伤害。虚无。", upgrade: "造成28点伤害。虚无。" },
    // 罕见技能卡
    { id: 35, name: "缴械", type: "技能", energy: 1, rarity: "罕见", description: "敌人失去2点力量。消耗。", upgrade: "敌人失去3点力量。消耗。" },
    { id: 36, name: "双持", type: "技能", energy: 1, rarity: "罕见", description: "复制手牌中的一张牌。", upgrade: "复制手牌中的一张牌2次。" },
    { id: 37, name: "巩固", type: "技能", energy: 2, rarity: "罕见", description: "将你当前的格挡翻倍。", upgrade: "能量消耗为1。" },
    { id: 38, name: "火焰屏障", type: "技能", energy: 2, rarity: "罕见", description: "获得12点格挡。本回合每受到一次攻击，造成4点反伤。", upgrade: "获得16点格挡。本回合每受到一次攻击，造成6点反伤。" },
    { id: 39, name: "幽灵铠甲", type: "技能", energy: 1, rarity: "罕见", description: "获得10点格挡。虚无。", upgrade: "获得13点格挡。虚无。" },
    { id: 40, name: "地狱之刃", type: "技能", energy: 1, rarity: "罕见", description: "将一张随机攻击牌加入手牌。其本回合耗能为0。消耗。", upgrade: "能量消耗为0。" },
    { id: 41, name: "威吓", type: "技能", energy: 0, rarity: "罕见", description: "对所有敌人给予1层虚弱。消耗。", upgrade: "对所有敌人给予2层虚弱。消耗。" },
    { id: 42, name: "硬撑", type: "技能", energy: 1, rarity: "罕见", description: "获得15点格挡。将2张伤口加入手牌。", upgrade: "获得20点格挡。将2张伤口加入手牌。" },
    { id: 43, name: "狂怒", type: "技能", energy: 0, rarity: "罕见", description: "本回合每打出一张攻击牌，获得3点格挡。", upgrade: "本回合每打出一张攻击牌，获得5点格挡。" },
    { id: 44, name: "战斗专注", type: "技能", energy: 0, rarity: "罕见", description: "抽3张牌。本回合不能再抽牌。", upgrade: "抽4张牌。本回合不能再抽牌。" },
    { id: 45, name: "重振精神", type: "技能", energy: 1, rarity: "罕见", description: "消耗手牌中所有非攻击牌。每消耗一张获得5点格挡。", upgrade: "每消耗一张获得7点格挡。" },
    { id: 46, name: "盛怒", type: "技能", energy: 1, rarity: "罕见", description: "获得2点能量。消耗。", upgrade: "能量消耗为0。" },
    { id: 47, name: "哨卫", type: "技能", energy: 1, rarity: "罕见", description: "获得8点格挡。如果此牌被消耗，获得3点能量。", upgrade: "获得11点格挡。如果此牌被消耗，获得4点能量。" },
    { id: 48, name: "震荡波", type: "技能", energy: 2, rarity: "罕见", description: "对所有敌人给予3层虚弱和3层易伤。消耗。", upgrade: "对所有敌人给予5层虚弱和5层易伤。消耗。" },
    { id: 49, name: "观察弱点", type: "技能", energy: 1, rarity: "罕见", description: "如果敌人意图攻击，获得3点力量。", upgrade: "如果敌人意图攻击，获得4点力量。" },
    { id: 50, name: "放血", type: "技能", energy: 0, rarity: "罕见", description: "失去3点生命。获得1点能量。", upgrade: "失去3点生命。获得2点能量。" },
    { id: 51, name: "燃烧契约", type: "技能", energy: 1, rarity: "罕见", description: "消耗1张牌。抽2张牌。", upgrade: "消耗1张牌。抽3张牌。" },
    // 罕见能力卡
    { id: 52, name: "进化", type: "能力", energy: 1, rarity: "罕见", description: "每当你抽到一张状态牌，抽1张牌。", upgrade: "每当你抽到一张状态牌，抽2张牌。" },
    { id: 53, name: "无惧疼痛", type: "能力", energy: 1, rarity: "罕见", description: "每当一张牌被消耗，获得3点格挡。", upgrade: "每当一张牌被消耗，获得4点格挡。" },
    { id: 54, name: "火焰吐息", type: "能力", energy: 1, rarity: "罕见", description: "回合结束时，本回合每打出一张攻击牌，对所有敌人造成1点伤害。", upgrade: "能量消耗为0。" },
    { id: 55, name: "燃烧", type: "能力", energy: 1, rarity: "罕见", description: "获得2点力量。", upgrade: "获得3点力量。" },
    { id: 56, name: "金属化", type: "能力", energy: 1, rarity: "罕见", description: "回合结束时，获得3点格挡。", upgrade: "回合结束时，获得4点格挡。" },
    { id: 57, name: "撕裂", type: "能力", energy: 1, rarity: "罕见", description: "每当你通过卡牌失去生命，获得1点力量。", upgrade: "能量消耗为0。" },
    { id: 58, name: "自燃", type: "能力", energy: 1, rarity: "罕见", description: "回合结束时，失去1点生命并对所有敌人造成5点伤害。", upgrade: "回合结束时，失去1点生命并对所有敌人造成7点伤害。" },
    // 稀有攻击卡
    { id: 59, name: "狂宴", type: "攻击", energy: 1, rarity: "稀有", description: "造成10点伤害。如果此牌击杀敌人，永久提升3点最大生命。消耗。", upgrade: "造成12点伤害。如果此牌击杀敌人，永久提升4点最大生命。消耗。" },
    { id: 60, name: "恶魔之焰", type: "攻击", energy: 2, rarity: "稀有", description: "消耗手牌。每消耗一张牌造成7点伤害。消耗。", upgrade: "每消耗一张牌造成10点伤害。消耗。" },
    { id: 61, name: "燔祭", type: "攻击", energy: 2, rarity: "稀有", description: "对所有敌人造成21点伤害。将一张灼伤放入弃牌堆。", upgrade: "对所有敌人造成28点伤害。将一张灼伤放入弃牌堆。" },
    { id: 62, name: "死亡收割", type: "攻击", energy: 2, rarity: "稀有", description: "对所有敌人造成4点伤害。未被格挡的伤害使你恢复等量生命。消耗。", upgrade: "对所有敌人造成5点伤害。未被格挡的伤害使你恢复等量生命。消耗。" },
    { id: 63, name: "重锤", type: "攻击", energy: 3, rarity: "稀有", description: "造成32点伤害。", upgrade: "造成42点伤害。" },
    // 稀有技能卡
    { id: 64, name: "双发", type: "技能", energy: 1, rarity: "稀有", description: "本回合你打出的下一张攻击牌会打出2次。", upgrade: "本回合你打出的下2张攻击牌会打出2次。" },
    { id: 65, name: "发掘", type: "技能", energy: 1, rarity: "稀有", description: "选择一张被消耗的牌放回手牌。消耗。", upgrade: "能量消耗为0。" },
    { id: 66, name: "岿然不动", type: "技能", energy: 2, rarity: "稀有", description: "获得30点格挡。消耗。", upgrade: "获得40点格挡。消耗。" },
    { id: 67, name: "突破极限", type: "技能", energy: 1, rarity: "稀有", description: "将你的力量翻倍。消耗。", upgrade: "不消耗。" },
    { id: 68, name: "祭品", type: "技能", energy: 0, rarity: "稀有", description: "失去6点生命。获得2点能量。抽5张牌。消耗。", upgrade: "失去6点生命。获得2点能量。抽5张牌。消耗。" },
    // 稀有能力卡
    { id: 69, name: "恶魔形态", type: "能力", energy: 3, rarity: "稀有", description: "每回合开始时，获得2点力量。", upgrade: "每回合开始时，获得3点力量。" },
    { id: 70, name: "势不可当", type: "能力", energy: 2, rarity: "稀有", description: "每当你获得格挡，对所有敌人造成5点伤害。", upgrade: "每当你获得格挡，对所有敌人造成7点伤害。" },
    { id: 71, name: "壁垒", type: "能力", energy: 3, rarity: "稀有", description: "格挡不再在你的回合开始时消失。", upgrade: "能量消耗为2。" },
    { id: 72, name: "狂暴", type: "能力", energy: 1, rarity: "稀有", description: "如果你的生命低于50%，每回合开始时获得1点能量。", upgrade: "能量消耗为0。" },
    { id: 73, name: "残暴", type: "能力", energy: 0, rarity: "稀有", description: "先攻。每回合开始时，失去1点生命并抽1张牌。", upgrade: "先攻。每回合开始时，失去1点生命并抽1张牌。" },
    { id: 74, name: "腐化", type: "能力", energy: 3, rarity: "稀有", description: "技能牌耗能为0。每当你打出一张技能牌，将其消耗。", upgrade: "能量消耗为2。" },
    { id: 75, name: "黑暗之拥", type: "能力", energy: 2, rarity: "稀有", description: "每当一张牌被消耗，抽1张牌。", upgrade: "能量消耗为1。" }
];

// ========== 遗物数据 ==========
const relicsData = [
    // 普通遗物
    { id: 1001, name: "燃烧之血", type: "遗物", rarity: "初始", description: "战斗结束时，回复6点生命。", flavor: "铁甲战士的初始遗物。鲜血在血管中燃烧，给予你继续战斗的力量。" },
    { id: 1002, name: "绷带", type: "遗物", rarity: "普通", description: "每当你获得格挡时，回复1点生命。", flavor: "用干净的绷带包扎伤口，能让你在战斗中生存更久。" },
    { id: 1003, name: "青铜鳞片", type: "遗物", rarity: "普通", description: "每当你受到攻击时，造成3点反伤。", flavor: "古老的青铜护甲，表面覆盖着锋利的鳞片。" },
    { id: 1004, name: "快乐小花", type: "遗物", rarity: "普通", description: "每3回合获得1点能量。", flavor: "一朵总是面向太阳的小花，带给你愉悦的心情。" },
    { id: 1005, name: "数据磁盘", type: "遗物", rarity: "普通", description: "回合结束时，如果你没有打出攻击牌，获得1点格挡。", flavor: "刻满古代文字的石板，记录着失落的智慧。" },
    { id: 1006, name: "锚", type: "遗物", rarity: "普通", description: "每场战斗开始获得10点格挡。", flavor: "沉重的船锚，给予你稳定的立足点。" },
    { id: 1007, name: "神器", type: "遗物", rarity: "普通", description: "战斗开始时获得1层人工制品。", flavor: "古老的雕像，能抵御一次负面效果。" },
    { id: 1008, name: "草莓", type: "遗物", rarity: "普通", description: "最大生命+4。", flavor: "甜蜜多汁的草莓，能增强体质。" },
    { id: 1009, name: "梨子", type: "遗物", rarity: "普通", description: "最大生命+10。", flavor: "香甜的梨子，富含营养。" },
    { id: 1010, name: "芒果", type: "遗物", rarity: "普通", description: "最大生命+14。", flavor: "热带水果，能大幅增强体质。" },
    // 罕见遗物
    { id: 2001, name: "黑血", type: "遗物", rarity: "罕见", description: "战斗结束时，回复10点生命。替换燃烧之血。", flavor: "被诅咒的血液，给予你更强的再生能力。" },
    { id: 2002, name: "魔法花", type: "遗物", rarity: "罕见", description: "将回复效果从50%提升。", flavor: "散发着神秘光芒的花朵，能增强治疗魔法。" },
    { id: 2003, name: "腰带", type: "遗物", rarity: "罕见", description: "获得1个额外的药水栏位。", flavor: "宽厚的皮革腰带，能挂载更多药剂。" },
    { id: 2004, name: "香炉", type: "遗物", rarity: "罕见", description: "每6回合获得1层无实体。", flavor: "冒着烟的香炉，能让你短暂地虚化。" },
    { id: 2005, name: "双节棍", type: "遗物", rarity: "罕见", description: "每打出10张牌，获得1点能量。", flavor: "武术家的武器，流畅的动作能产生能量。" },
    { id: 2006, name: "苦无", type: "遗物", rarity: "罕见", description: "每回合打出3张攻击牌，获得1点敏捷。", flavor: "锋利的投掷武器，连续的攻击让你更加灵活。" },
    { id: 2007, name: "手里剑", type: "遗物", rarity: "罕见", description: "每回合打出3张攻击牌，获得1点力量。", flavor: "忍者使用的暗器，连续的投掷增强你的力量。" },
    { id: 2008, name: "红头骨", type: "遗物", rarity: "罕见", description: "如果你的生命低于50%，获得3点力量。", flavor: "沾满鲜血的头骨，绝望中激发斗志。" },
    // 稀有遗物
    { id: 3001, name: "死灵书", type: "遗物", rarity: "稀有", description: "每回合打出的第一张耗能≥2的攻击牌，将打出2次。", flavor: "禁忌的知识之书，蕴含着邪恶的力量。" },
    { id: 3002, name: "冰淇淋", type: "遗物", rarity: "稀有", description: "未使用的能量可以保留到下一回合。", flavor: "冰凉的甜品，让你的能量不因回合结束而流失。" },
    { id: 3003, name: "鸟面瓮", type: "遗物", rarity: "稀有", description: "每打出一张能力牌，回复2点生命。", flavor: "奇怪的面具，能汲取能量的同时治疗你。" },
    { id: 3004, name: "树枝", type: "遗物", rarity: "稀有", description: "每消耗一张牌，将一张随机牌加入手牌。", flavor: "会自我分裂的魔法树枝。" },
    // Boss遗物
    { id: 4001, name: "符文圆顶", type: "遗物", rarity: "Boss", description: "获得1点能量。你无法看到敌人的意图。", flavor: "古老的符文石，提供能量但遮蔽视野。" },
    { id: 4002, name: "黑星", type: "遗物", rarity: "Boss", description: "击败精英敌人后，额外掉落一个遗物。", flavor: "黑暗的星星，指引你夺取更多宝藏。" },
    { id: 4003, name: "圣水", type: "遗物", rarity: "Boss", description: "获得2点能量。每回合结束失去1点生命。", flavor: "神圣的液体，燃烧生命换取能量。" },
    { id: 4004, name: "蛇眼", type: "遗物", rarity: "Boss", description: "开局抽牌+2。每回合首张牌耗能随机变化。", flavor: "蛇的眼睛，混乱中寻求力量。" }
];

// ========== 流派数据（修改关键卡牌和关键遗物格式） ==========
const buildsData = [
    {
        id: 1,
        name: "力量战",
        icon: "💪",
        difficulty: "★★★☆☆",
        style: "攻击型",
        category: "核心流派",
        coreIdea: "堆叠力量属性，用多段攻击牌打出爆炸伤害。力量是铁甲战士最重要的输出属性，每点力量让每次攻击伤害+1。",
        advantages: "输出天花板极高，中后期可以秒杀大多数敌人；死亡收割配合高力量能提供强大的续航能力；爽感十足，体验一刀999的快乐。",
        disadvantages: "启动较慢，需要时间叠力量；前期卡组未成型时容易暴毙；对关键卡牌(突破极限、恶魔形态)依赖度较高。",
        keyCards: "突破极限,恶魔形态,燃烧,撕裂,观察弱点,飞剑回旋镖,旋风斩,双重打击,死亡收割",
        keyRelics: "金刚杵,弹珠袋,残破头盔,勇气吊坠,手里剑",
        tips: "1.先叠能力再输出，不要着急打伤害。2.死亡收割是力量战的核心续航，尽量升级它。3.突破极限升级后不消耗，可以实现力量指数级增长。4.多段攻击牌(飞剑回旋镖、旋风斩)能让力量收益翻倍。"
    },
    {
        id: 2,
        name: "防战/肚皮流",
        icon: "🛡️",
        difficulty: "★★☆☆☆",
        style: "防御型",
        category: "核心流派",
        coreIdea: "叠最高的格挡，用全身撞击把格挡转化为伤害。这是最稳健的玩法，有句名言：一切流派转防战。",
        advantages: "生存能力极强，很难暴毙；成型后非常稳定，几乎不会翻车；对发牌员的依赖相对较小，容易成型。",
        disadvantages: "输出依赖格挡值，BOSS战需要时间叠甲；节奏偏慢，每场战斗时间较长；怕多段攻击和高额伤害的敌人。",
        keyCards: "全身撞击,壁垒,岿然不动,巩固,重振精神,硬撑,耸肩无视,无惧疼痛",
        keyRelics: "外卡钳,锚,意外光滑的石头,卡戎之灰,绷带",
        tips: "1.全身撞击一定要升级，升级后变为0费。2.壁垒是质变卡，有了壁垒才能永久保留格挡。3.硬撑+重振精神是经典Combo，2费获得大量格挡还能净化手牌。4.无惧疼痛能让消耗牌时获得额外格挡。"
    },
    {
        id: 3,
        name: "烧牌战/消耗流",
        icon: "🔥",
        difficulty: "★★★★☆",
        style: "组合技型",
        category: "核心流派",
        coreIdea: "通过消耗牌库精简卡组，利用消耗机制获取增益，最终达成无限循环。上限极高，是铁甲战士最华丽的玩法。",
        advantages: "运转效率极高，一回合可以打穿整个牌库；上限惊人，理论上可以无限连；烧掉基础牌后卡组非常纯净。",
        disadvantages: "需要理解消耗机制，操作复杂；成型难度较高，需要多张关键卡牌配合；前期可能因为烧掉关键牌而翻车。",
        keyCards: "腐化,黑暗之拥,无惧疼痛,恶魔之焰,燃烧契约,重振精神,坚毅",
        keyRelics: "死灵之书,医药箱,干瘪之手,卡戎之灰,树枝",
        tips: "1.腐化是烧牌流的核心，有了它技能牌免费打还能触发消耗。2.腐化+黑暗之拥是无限发动机，可以一回合抽完整个牌库。3.消耗不是损失，烧掉基础牌反而让卡组更纯净。4.拥有医药箱后可以消耗状态牌，更稳定。"
    },
    {
        id: 4,
        name: "完美打击战",
        icon: "⚡",
        difficulty: "★★☆☆☆",
        style: "攻击型",
        category: "变体流派",
        coreIdea: "所有名称中含有「打击」的卡牌互相增益，完美打击的伤害越来越高。简单粗暴，适合新手尝试。",
        advantages: "思路简单，无脑拿打击牌即可；完美打击升级后伤害可观；前期过渡平滑。",
        disadvantages: "后期伤害上限有限，不如其他流派；打击牌数量有限制，上限固定；容易卡手。",
        keyCards: "完美打击,剑柄打击,双重打击,打击,痛击",
        keyRelics: "金刚杵,弹珠袋,双节棍",
        tips: "1.优先升级完美打击。2.可以拿多张完美打击。3.注意打击牌之间的联动，剑柄打击能抽牌很重要。"
    },
    {
        id: 5,
        name: "灼热攻击战",
        icon: "🌋",
        difficulty: "★★★☆☆",
        style: "攻击型",
        category: "变体流派",
        coreIdea: "只强化一张灼热攻击，反复在铁匠铺升级，直到它能秒天秒地。极致的单核玩法。",
        advantages: "极度简单，只需要强化一张牌；升级到+6以上后伤害爆炸；无视格挡卡牌数量。",
        disadvantages: "需要牺牲休息点去铁匠铺升级；如果灼热攻击沉底会非常尴尬；遇到反伤敌人容易翻车。",
        keyCards: "灼热攻击,双持,剑柄打击",
        keyRelics: "死灵之书,手里剑,苦无",
        tips: "1.优先走问号房间找铁匠铺。2.尽量不要拿太多牌，保证灼热攻击能快速抽到。3.双持可以复制灼热攻击，打出多张。4.升级到+6以上后伤害已经很可观。"
    },
    {
        id: 6,
        name: "日晷无限流",
        icon: "⏰",
        difficulty: "★★★★★",
        style: "组合技型",
        category: "无限流派",
        coreIdea: "利用日晷遗物和过牌卡达成无限能量+无限抽牌，最终实现无限连击。是铁甲战士的最高端玩法。",
        advantages: "一旦成型就能打出无限，理论无敌；观赏性极高，成就感强；可以解决任何敌人。",
        disadvantages: "成型条件苛刻，需要特定遗物和卡牌组合；操作复杂，需要计算能量和抽牌数；对新手不友好。",
        keyCards: "剑柄打击,愤怒,盛怒,祭品,燃烧契约",
        keyRelics: "日晷,冰淇淋,双节棍",
        tips: "1.日晷的效果是每洗牌3次获得2点能量。2.剑柄打击+愤怒可以实现小循环。3.计算好能量和抽牌数量。4.需要足够的过牌能力。"
    },
    {
        id: 7,
        name: "暴走单核",
        icon: "💢",
        difficulty: "★★★☆☆",
        style: "攻击型",
        category: "变体流派",
        coreIdea: "反复打出暴走，每次打出增加后续伤害，形成单卡无限循环。一张卡Carry全场。",
        advantages: "一张牌就能解决大部分战斗；伤害成长不受卡组厚度影响；操作简单。",
        disadvantages: "暴走需要多次打出才能成型；如果没有足够的过牌会很慢；遇到洗牌效果会重置加成。",
        keyCards: "暴走,剑柄打击,头槌",
        keyRelics: "双节棍,手里剑,日晷",
        tips: "1.头槌可以把暴走从弃牌堆放回抽牌堆顶部，实现每回合都打暴走。2.配合剑柄打击过牌。3.暴走的加成每场战斗独立计算。"
    },
    {
        id: 8,
        name: "疲劳战",
        icon: "💀",
        difficulty: "★★★☆☆",
        style: "防御型",
        category: "变体流派",
        coreIdea: "通过让敌人陷入易伤+虚弱状态，削弱敌人输出，然后用慢性伤害磨死敌人。适合高难度爬塔。",
        advantages: "生存能力强，控制能力出色；对高攻击敌人效果显著；稳定性好。",
        disadvantages: "输出偏慢，战斗时间长；需要多个Debuff卡配合；对不吃状态的敌人效果差。",
        keyCards: "痛击,金刚臂,上勾拳,震荡波,闪电霹雳,威吓,缴械",
        keyRelics: "弹珠袋,红头骨,绷带",
        tips: "1.震荡波是神卡，一次性给所有敌人易伤+虚弱。2.缴械可以永久降低敌人攻击力。3.威吓升级后给2层虚弱，非常好用。"
    }
];

// ========== 页面元素 ==========
const cardContainer = document.getElementById('cardList');
const searchInput = document.getElementById('searchInput');
const statsBar = document.getElementById('statsBar');
const searchContainer = document.getElementById('searchContainer');

// 模态框元素
const cardModal = document.getElementById('cardModal');
const relicModal = document.getElementById('relicModal');
const buildModal = document.getElementById('buildModal');
const cardModalContent = document.querySelector('#cardModal .modal-content');
const relicModalContent = document.querySelector('#relicModal .modal-content');
const buildModalContent = document.querySelector('#buildModal .modal-content');
const closeBtns = document.querySelectorAll('.close, .close-relic, .close-build');

// 当前激活的标签页
let currentTab = 'cards'; // 'cards', 'relics', 'builds'

// ========== 渲染函数 ==========
function renderCards(cards) {
    if (!cards || cards.length === 0) {
        cardContainer.innerHTML = '<div class="no-results">[ ERROR: 未找到匹配卡牌 ]</div>';
        return;
    }

    let html = '';
    for (let card of cards) {
        let typeClass = '';
        if (card.type === '攻击') typeClass = 'attack';
        else if (card.type === '技能') typeClass = 'skill';
        else if (card.type === '能力') typeClass = 'power';
        
        let rarityBadge = '';
        if (card.rarity === '稀有') rarityBadge = '🔴';
        else if (card.rarity === '罕见') rarityBadge = '🟡';
        else if (card.rarity === '普通') rarityBadge = '⚪';
        else if (card.rarity === '初始') rarityBadge = '🔵';
        
        let energyDisplay = card.energy === -1 ? 'X' : card.energy;
        
        html += `
            <div class="card ${typeClass}" onclick="showCardDetail(${card.id})">
                <h3>${rarityBadge} ${card.name}</h3>
                <div class="type">[${card.type}] · [${card.rarity}]</div>
                <div class="energy">⚡ 能量: ${energyDisplay}</div>
                <div class="description">> ${card.description.substring(0, 40)}${card.description.length > 40 ? '...' : ''}</div>
                <div class="description" style="margin-top: 8px; color: #00ffff; font-size: 0.7rem;">✨ 升级: ${card.upgrade.substring(0, 35)}${card.upgrade.length > 35 ? '...' : ''}</div>
            </div>
        `;
    }
    cardContainer.innerHTML = html;
}

function renderRelics(relics) {
    if (!relics || relics.length === 0) {
        cardContainer.innerHTML = '<div class="no-results">[ ERROR: 未找到匹配遗物 ]</div>';
        return;
    }

    let html = '';
    for (let relic of relics) {
        let rarityClass = '';
        if (relic.rarity === '普通') rarityClass = 'relic-common';
        else if (relic.rarity === '罕见') rarityClass = 'relic-uncommon';
        else if (relic.rarity === '稀有') rarityClass = 'relic-rare';
        else if (relic.rarity === 'Boss') rarityClass = 'relic-boss';
        
        let raritySymbol = '';
        if (relic.rarity === '普通') raritySymbol = '⚪';
        else if (relic.rarity === '罕见') raritySymbol = '🟢';
        else if (relic.rarity === '稀有') raritySymbol = '🟡';
        else if (relic.rarity === 'Boss') raritySymbol = '🟣';
        else if (relic.rarity === '初始') raritySymbol = '🔴';
        
        html += `
            <div class="card relic ${rarityClass}" onclick="showRelicDetail(${relic.id})">
                <h3>${raritySymbol} ${relic.name}</h3>
                <div class="type">[遗物] · [${relic.rarity}]</div>
                <div class="energy">🔮 效果: ${relic.description.substring(0, 40)}${relic.description.length > 40 ? '...' : ''}</div>
            </div>
        `;
    }
    cardContainer.innerHTML = html;
}

function renderBuilds(builds) {
    if (!builds || builds.length === 0) {
        cardContainer.innerHTML = '<div class="no-results">[ ERROR: 未找到匹配流派 ]</div>';
        return;
    }

    let html = '';
    for (let build of builds) {
        let styleClass = '';
        if (build.style === '攻击型') styleClass = 'style-offensive';
        else if (build.style === '防御型') styleClass = 'style-defensive';
        else if (build.style === '组合技型') styleClass = 'style-combo';
        
        html += `
            <div class="card build" onclick="showBuildDetail(${build.id})">
                <h3>${build.icon} ${build.name}</h3>
                <div class="type">
                    <span class="style-tag ${styleClass}">${build.style}</span>
                    <span>难度: ${build.difficulty}</span>
                </div>
                <div class="energy">📖 ${build.category}</div>
                <div class="build-description">> ${build.coreIdea.substring(0, 60)}${build.coreIdea.length > 60 ? '...' : ''}</div>
            </div>
        `;
    }
    cardContainer.innerHTML = html;
}

function updateStatsBar() {
    if (currentTab === 'cards') {
        const attackCount = cardsData.filter(c => c.type === '攻击').length;
        const skillCount = cardsData.filter(c => c.type === '技能').length;
        const powerCount = cardsData.filter(c => c.type === '能力').length;
        statsBar.innerHTML = `
            <span class="stat">📊 卡牌总数: ${cardsData.length}</span>
            <span class="stat">⚔️ 攻击: ${attackCount}</span>
            <span class="stat">🛡️ 技能: ${skillCount}</span>
            <span class="stat">🌀 能力: ${powerCount}</span>
        `;
        searchInput.placeholder = "> 搜索卡牌名称 / 类型 / 稀有度...";
    } else if (currentTab === 'relics') {
        const commonCount = relicsData.filter(r => r.rarity === '普通').length;
        const uncommonCount = relicsData.filter(r => r.rarity === '罕见').length;
        const rareCount = relicsData.filter(r => r.rarity === '稀有').length;
        statsBar.innerHTML = `
            <span class="stat">🔮 遗物总数: ${relicsData.length}</span>
            <span class="stat">⚪ 普通: ${commonCount}</span>
            <span class="stat">🟢 罕见: ${uncommonCount}</span>
            <span class="stat">🟡 稀有: ${rareCount}</span>
        `;
        searchInput.placeholder = "> 搜索遗物名称 / 稀有度...";
    } else {
        statsBar.innerHTML = `
            <span class="stat">🌀 流派总数: ${buildsData.length}</span>
            <span class="stat">⚔️ 攻击型: ${buildsData.filter(b => b.style === '攻击型').length}</span>
            <span class="stat">🛡️ 防御型: ${buildsData.filter(b => b.style === '防御型').length}</span>
            <span class="stat">💫 组合技: ${buildsData.filter(b => b.style === '组合技型').length}</span>
        `;
        searchInput.placeholder = "> 搜索流派名称 / 类型...";
    }
}

// 全局过滤函数
function filterData() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (currentTab === 'cards') {
        if (searchTerm === '') {
            renderCards(cardsData);
        } else {
            const filtered = cardsData.filter(card => 
                card.name.toLowerCase().includes(searchTerm) ||
                card.type.toLowerCase().includes(searchTerm) ||
                card.rarity.toLowerCase().includes(searchTerm)
            );
            renderCards(filtered);
        }
    } else if (currentTab === 'relics') {
        if (searchTerm === '') {
            renderRelics(relicsData);
        } else {
            const filtered = relicsData.filter(relic => 
                relic.name.toLowerCase().includes(searchTerm) ||
                relic.rarity.toLowerCase().includes(searchTerm) ||
                relic.description.toLowerCase().includes(searchTerm)
            );
            renderRelics(filtered);
        }
    } else {
        if (searchTerm === '') {
            renderBuilds(buildsData);
        } else {
            const filtered = buildsData.filter(build => 
                build.name.toLowerCase().includes(searchTerm) ||
                build.style.toLowerCase().includes(searchTerm) ||
                build.category.toLowerCase().includes(searchTerm) ||
                build.coreIdea.toLowerCase().includes(searchTerm)
            );
            renderBuilds(filtered);
        }
    }
}

// ========== 模态框函数 ==========
function showCardDetail(cardId) {
    const card = cardsData.find(c => c.id === cardId);
    if (!card) return;
    
    document.getElementById('modalCardName').textContent = `[ ${card.name} ]`;
    document.getElementById('modalCardType').querySelector('.stat-value').textContent = card.type;
    document.getElementById('modalCardRarity').querySelector('.stat-value').textContent = card.rarity;
    let energyDisplay = card.energy === -1 ? 'X' : card.energy;
    document.getElementById('modalCardEnergy').querySelector('.stat-value').textContent = energyDisplay;
    
    document.getElementById('modalCardDesc').textContent = card.description;
    document.getElementById('modalCardUpgrade').textContent = card.upgrade;
    
    let typeClass = '';
    if (card.type === '攻击') typeClass = 'attack-border';
    else if (card.type === '技能') typeClass = 'skill-border';
    else if (card.type === '能力') typeClass = 'power-border';
    
    cardModalContent.classList.remove('attack-border', 'skill-border', 'power-border');
    cardModalContent.classList.add(typeClass);
    
    cardModal.style.display = 'block';
}

function showRelicDetail(relicId) {
    const relic = relicsData.find(r => r.id === relicId);
    if (!relic) return;
    
    document.getElementById('relicModalName').textContent = `[ ${relic.name} ]`;
    document.getElementById('relicModalRarity').querySelector('.stat-value').textContent = relic.rarity;
    document.getElementById('relicModalDesc').textContent = relic.description;
    document.getElementById('relicModalFlavor').textContent = relic.flavor || '古老的遗物，蕴含着未知的力量。';
    
    relicModal.style.display = 'block';
}

function showBuildDetail(buildId) {
    const build = buildsData.find(b => b.id === buildId);
    if (!build) return;
    
    document.getElementById('buildModalName').textContent = `[ ${build.name} ]`;
    document.getElementById('buildModalDifficulty').querySelector('.stat-value').textContent = build.difficulty;
    document.getElementById('buildModalStyle').querySelector('.stat-value').textContent = build.style;
    document.getElementById('buildIcon').textContent = build.icon;
    document.getElementById('buildModalIdea').textContent = build.coreIdea;
    document.getElementById('buildModalAdv').textContent = build.advantages;
    document.getElementById('buildModalDis').textContent = build.disadvantages;
    document.getElementById('buildModalCards').textContent = build.keyCards;
    document.getElementById('buildModalRelics').textContent = build.keyRelics;
    document.getElementById('buildModalTips').textContent = build.tips;
    
    buildModal.style.display = 'block';
}

function closeModals() {
    if (cardModal) cardModal.style.display = 'none';
    if (relicModal) relicModal.style.display = 'none';
    if (buildModal) buildModal.style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    if (event.target === cardModal) closeModals();
    if (event.target === relicModal) closeModals();
    if (event.target === buildModal) closeModals();
}

// 按ESC键关闭
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModals();
});

// ========== 标签页切换 ==========
function switchTab(tab) {
    currentTab = tab;
    
    // 更新按钮样式
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
    
    // 清空搜索框
    searchInput.value = '';
    
    // 更新统计栏
    updateStatsBar();
    
    // 渲染对应数据
    if (tab === 'cards') {
        renderCards(cardsData);
    } else if (tab === 'relics') {
        renderRelics(relicsData);
    } else {
        renderBuilds(buildsData);
    }
}

// 监听关闭按钮
closeBtns.forEach(btn => {
    btn.onclick = closeModals;
});

// 监听标签页按钮
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
});

// ========== 索引跳转功能 ==========

// 存储需要高亮的元素ID
let highlightTargetId = null;

// 跳转到卡牌图鉴并高亮指定卡牌
function jumpToCard(cardName) {
    // 关闭当前弹窗
    closeModals();
    
    // 切换到卡牌标签页
    switchTab('cards');
    
    // 清空搜索框
    searchInput.value = '';
    
    // 延迟一下，等待DOM渲染完成
    setTimeout(() => {
        // 查找匹配的卡牌元素
        const cards = document.querySelectorAll('.card');
        let targetCard = null;
        
        for (let card of cards) {
            const titleElem = card.querySelector('h3');
            if (titleElem && titleElem.textContent.includes(cardName)) {
                targetCard = card;
                break;
            }
        }
        
        if (targetCard) {
            // 移除其他高亮
            document.querySelectorAll('.highlight-card').forEach(el => {
                el.classList.remove('highlight-card');
            });
            
            // 添加高亮类
            targetCard.classList.add('highlight-card');
            
            // 滚动到目标元素
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // 5秒后移除高亮
            setTimeout(() => {
                targetCard.classList.remove('highlight-card');
            }, 5000);
        } else {
            // 如果没找到，尝试用搜索功能
            searchInput.value = cardName;
            filterData();
            
            // 再次尝试查找
            setTimeout(() => {
                const newCards = document.querySelectorAll('.card');
                for (let card of newCards) {
                    const titleElem = card.querySelector('h3');
                    if (titleElem && titleElem.textContent.includes(cardName)) {
                        card.classList.add('highlight-card');
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        setTimeout(() => {
                            card.classList.remove('highlight-card');
                        }, 5000);
                        break;
                    }
                }
            }, 300);
        }
    }, 100);
}

// 跳转到遗物图鉴并高亮指定遗物
function jumpToRelic(relicName) {
    // 关闭当前弹窗
    closeModals();
    
    // 切换到遗物标签页
    switchTab('relics');
    
    // 清空搜索框
    searchInput.value = '';
    
    // 延迟一下，等待DOM渲染完成
    setTimeout(() => {
        // 查找匹配的遗物元素
        const relics = document.querySelectorAll('.card.relic');
        let targetRelic = null;
        
        for (let relic of relics) {
            const titleElem = relic.querySelector('h3');
            if (titleElem && titleElem.textContent.includes(relicName)) {
                targetRelic = relic;
                break;
            }
        }
        
        if (targetRelic) {
            // 移除其他高亮
            document.querySelectorAll('.highlight-card').forEach(el => {
                el.classList.remove('highlight-card');
            });
            
            // 添加高亮类
            targetRelic.classList.add('highlight-card');
            
            // 滚动到目标元素
            targetRelic.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // 5秒后移除高亮
            setTimeout(() => {
                targetRelic.classList.remove('highlight-card');
            }, 5000);
        } else {
            // 如果没找到，尝试用搜索功能
            searchInput.value = relicName;
            filterData();
            
            // 再次尝试查找
            setTimeout(() => {
                const newRelics = document.querySelectorAll('.card.relic');
                for (let relic of newRelics) {
                    const titleElem = relic.querySelector('h3');
                    if (titleElem && titleElem.textContent.includes(relicName)) {
                        relic.classList.add('highlight-card');
                        relic.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        setTimeout(() => {
                            relic.classList.remove('highlight-card');
                        }, 5000);
                        break;
                    }
                }
            }, 300);
        }
    }, 100);
}

// 渲染可点击的卡牌/遗物列表
function renderClickableList(items, type) {
    if (!items) return '';
    
    const itemArray = items.split(',').map(item => item.trim());
    let html = '<div class="clickable-list">';
    
    for (let item of itemArray) {
        const linkClass = type === 'card' ? 'card-link' : 'relic-link';
        const onclickFunc = type === 'card' ? `jumpToCard('${item.replace(/'/g, "\\'")}')` : `jumpToRelic('${item.replace(/'/g, "\\'")}')`;
        
        html += `<span class="clickable-item ${linkClass}" onclick="${onclickFunc}">
                    ${type === 'card' ? '🃏' : '🔮'} ${item}
                </span>`;
    }
    
    html += '</div>';
    return html;
}

// 修改 showBuildDetail 函数，使用可点击列表
const originalShowBuildDetail = showBuildDetail;
window.showBuildDetail = function(buildId) {
    const build = buildsData.find(b => b.id === buildId);
    if (!build) return;
    
    document.getElementById('buildModalName').textContent = `[ ${build.name} ]`;
    document.getElementById('buildModalDifficulty').querySelector('.stat-value').textContent = build.difficulty;
    document.getElementById('buildModalStyle').querySelector('.stat-value').textContent = build.style;
    document.getElementById('buildIcon').textContent = build.icon;
    document.getElementById('buildModalIdea').textContent = build.coreIdea;
    document.getElementById('buildModalAdv').textContent = build.advantages;
    document.getElementById('buildModalDis').textContent = build.disadvantages;
    
    // 使用可点击列表渲染关键卡牌和关键遗物
    document.getElementById('buildModalCards').innerHTML = renderClickableList(build.keyCards, 'card');
    document.getElementById('buildModalRelics').innerHTML = renderClickableList(build.keyRelics, 'relic');
    
    document.getElementById('buildModalTips').textContent = build.tips;
    
    buildModal.style.display = 'block';
};

// 页面加载时初始化
// 在 document.addEventListener 中确保函数被正确注册
document.addEventListener('DOMContentLoaded', () => {
    renderCards(cardsData);
    updateStatsBar();
    window.filterData = filterData;
    window.showCardDetail = showCardDetail;
    window.showRelicDetail = showRelicDetail;
    window.showBuildDetail = showBuildDetail;
    window.jumpToCard = jumpToCard;
    window.jumpToRelic = jumpToRelic;
});