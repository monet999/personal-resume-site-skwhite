import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    title: "双汇学院奖优秀奖",
    category: "软性广告拍摄剪辑",
    desc: "故事聚焦于当代年轻人的普遍痛点——职场高压与创作瓶颈。主角作为一名疲惫的“社畜”，在一次偶然吃下双汇火腿肠的瞬间，味觉化作了穿越时空的钥匙，引发了强烈的普鲁斯特效应。",
    videoSrc: "/assets/videos/short-video/short-01.mp4",
    coverSrc: "/assets/images/v1.png",
    detailVideo: "本片是一支时长60秒的剧情向软性商业广告。故事聚焦于当代年轻人的普遍痛点——职场高压与创作瓶颈。主角作为一名疲惫的“社畜”，在一次偶然吃下双汇火腿肠的瞬间，味觉化作了穿越时空的钥匙，引发了强烈的普鲁斯特效应。伴随一次次的闪回，主角在沉闷的办公桌与充满阳光的高中教室之间不断穿梭。那种纯粹、热烈的青春活力，最终打破了现实的焦虑，为其带来了破局的创作灵感。全片以“双汇，青春肠在”（巧妙利用“常”与“肠”的谐音）为核心诉求，将国民级快消品重塑为连接成年世界与青春记忆的介质。",
    detailInsight: "最大的挑战在于如何在短短一分钟内，完成“现实压抑-情绪唤醒-灵感爆发”的完整叙事弧光。在前期视听语言的设计上，我刻意制造了强烈的对比：现实时空采用冷色调与逼仄的构图，而高中时期则运用大面积的暖光与主观感极强的运动镜头，在后期达芬奇调色中也进一步强化了这种视觉上的“破壁感”。",
    detailMarket: "目标受众精准锚定了初入职场的年轻群体（Z世代）。在这个内卷加剧的时代，“社畜”们最缺失的是安全感和纯粹的快乐。双汇火腿肠作为伴随这代人长大的国民零食，天然携带着童年/学生时代的记忆锚点。影片没有生硬地推销产品功效，而是提供了一种“情绪抚慰”。"
  },
  {
    title: "企业内部新年贺岁口播",
    category: "口播拍摄剪辑",
    desc: "一张有温度的企业电子名片",
    videoSrc: "/assets/videos/short-video/short-02.mp4",
    coverSrc: "/assets/images/v2.png",
    detailVideo: "本片为彩虹集团总经理的新年贺岁致辞，首发于微信视频号。项目兼顾“对内提振士气”与“对外传递品牌温度”双重使命，通过平易近人的影像表达，展现了国民老品牌在新一年的稳健底气与社会责任感。",
    detailInsight: "采用柔和平光源与暖色轮廓光，摒弃复杂炫技，打造通透沉稳的画面质感，凸显企业高管的亲和力与公信力。 针对非职业演员，兼任现场导演，通过情绪引导与提词节奏控场，捕捉最自然、真诚的沟通语态。剪辑精修气口与语感，并运用 AE 制作严格符合集团 VI 视觉规范的动态包装，确保输出标准化的企业公关级物料。",
    detailMarket: "私域社交裂变： 精准卡位微信视频号，将其打造为易于转发的“动态名片”，极大降低了员工朋友圈及合作伙伴的传播门槛。To B/C 双向沟通： 对内打破层级壁垒凝聚向心力；对外由最高管理者出镜背书，直观宣告品牌的硬实力与长期主义。节日情感借势： 踩准“新年”高情感节点，用温情问候软化严肃的商业宣发，实现了一次低成本、高认同的企业形象曝光。"
  },
  {
    title: "wing!说唱MV",
    category: "MV拍摄剪辑",
    desc: "一支融合先锋粉色光影与高燃 AE 特效的 Z 世代潮流说唱 MV。",
    videoSrc: "/assets/videos/micro-film/micro-01.mp4",
    coverSrc: "/assets/images/v3.png",
    detailVideo: "本片在纯白无影棚内置景，以先锋粉色环境光为基调，深度融合 AE 动态特效，为独立说唱歌手打造了一支极具视觉张力的音乐录影带，精准契合年轻圈层的潮流审美。",
    detailInsight: "利用白棚“零干扰”特性，大面积铺设高饱和粉色光，营造迷幻前卫氛围，极致突出歌手的肢体表达。运用 AE 制作高燃动态特效，做到“画面卡点、动效踩拍”，将视觉化作说唱鼓点与 Flow 的延伸。",
    detailMarket: "凭借强感官刺激的色彩与动效，有效提升短视频时代“黄金三秒”的留存率与完播率。帮助歌手建立鲜明的个人 IP 视觉标签，打造易于在社交平台引爆话题的核心宣发物料。"
  },
  {
    title: "决胜巅峰星广游戏剪辑",
    category: "星广素材制作剪辑",
    desc: "突破次元壁：结合“打破第四面墙”反转的《决胜巅峰》创意混剪。",
    videoSrc: "/assets/videos/micro-film/micro-02.mp4",
    coverSrc: "/assets/images/v4.png",
    detailVideo: "本片为纯后期剪辑作品。高潮处运用“打破第四面墙”的元媒介手法，将高燃游戏画面瞬间撕裂，反转切入真实的剪辑工程界面，制造极致视觉冲击。",
    detailInsight: "精准拆解音频，将高光操作与鼓点逐帧匹配，极速推高视听张力。设计屏幕撕裂特效，将观众从游戏时空瞬间剥离，硬核切入工作流界面。",
    detailMarket: "高燃紧凑的节奏精准迎合玩家偏好，有效保障基础完播率。在短视频平台获得较高转化"
  },
  {
    title: "海外AI真人短剧",
    category: "AIGC真人短剧作品",
    desc: "万圣节疯狂之夜，当所有人都在装神弄鬼，我却在急诊室接诊了一个奇怪的男人",
    videoSrc: "/assets/videos/aigc-animation/aigc-01.mp4",
    coverSrc: "/assets/images/v5.png",
    isVertical: true,
    detailVideo: "在万圣节狂欢的深夜，急诊室里到处是画着鬼妆的酒鬼。但当那个男人推开大门时，女主意识到，这不是化妆——他的呼吸带着寒气，睫毛上挂着万年不化的碎冰。当心电监护仪显示出一条平滑的直线，而他却睁开那双幽蓝色的眼眸时，这场急诊室的万圣夜才真正开始……",
    detailInsight: "充分利用 Seedance 2.0 的 一致性控制，将男女主的形象保持一致，利用 Seedance 2.0 强大的相机控制功能，营造出美剧式的快节奏",
    detailMarket: "万圣节主题“急诊室+超自然人物”的配置在海外市场（尤其是北美和东南亚）具有长尾效应。海外观众对 AI 生成的视觉新鲜感度高，这能显著提高视频在前 3 秒的留存率"
  },
  {
    title: "末世丧尸澡堂AI动画",
    category: "AIGC动画作品",
    desc: "当末世废土遇上东北洗浴：多模型协同跑通的高概念 AIGC 竖屏喜剧。",
    videoSrc: "/assets/videos/aigc-animation/aigc-02.mp4",
    coverSrc: "/assets/images/v6.png",
    detailVideo: "高反差 AIGC 竖屏微短剧本片讲述末日废土下东北人开澡堂的荒诞故事。深度融合赛博科幻与市井文化，是一次 AIGC 技术在微短剧工业化管线中的前沿实战。",
    detailInsight: "多模型协同： 以 Nano Banana 2 精准生成人设，控制一致性，结合 Seedance 2.0 赋予动态，跑通高质量 AI 视频流。提示词深度绑定废土丧尸与东北高端洗浴的金碧辉煌，制造极致的视觉冲突。",
    detailMarket: "验证了 AIGC 能以极低成本跨越拍摄门槛，拓宽短剧题材边界。“末世+东北澡堂”的极致脑洞所带来的猎奇属性，极易引发病毒式传播。"
  }
];

const contacts = [
  { label: "邮箱", value: "425077748@qq.com" },
  { label: "微信", value: "SINKKKWHITE" },
  { label: "手机号", value: "13551306064" }
];

const otherDesignRows = [
  [
    { id: "d1", title: "AIGC视觉设计", image: "/assets/images/d1.png", height: "h-56", grow: 1.45 },
    { id: "d2", title: "AI LOGO设计", image: "/assets/images/d2.png", height: "h-56", grow: 0.95 },
    { id: "d3", title: "AI 海报设计", image: "/assets/images/d3.png", height: "h-56", grow: 1.2 }
  ],
  [
    { id: "d4", title: "AI 原画设计", image: "/assets/images/d4.png", height: "h-72", grow: 1.1 },
    { id: "d5", title: "AI 活动策划设计", image: "/assets/images/d5.png", height: "h-72", grow: 1.6 }
  ]
];

function CloseXButton({ onClick, className = "" }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.08, rotate: 90 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative h-11 w-11 rounded-full border border-white/30 bg-black/35 backdrop-blur-md ${className}`}
      aria-label="Close"
    >
      <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white transition group-hover:bg-neonBlue" />
      <span className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white transition group-hover:bg-neonBlue" />
    </motion.button>
  );
}

function App() {
  const [copiedText, setCopiedText] = useState("");
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredDesign, setHoveredDesign] = useState("");
  const [activeDesignImage, setActiveDesignImage] = useState(null);

  const profileRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const titleOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.16], [0, -70]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.16], [0, 14]);
  const titleScale = useTransform(scrollYProgress, [0, 0.16], [1, 1.08]);

  const word1X = useTransform(scrollYProgress, [0, 0.16], [0, -120]);
  const word1Y = useTransform(scrollYProgress, [0, 0.16], [0, -55]);
  const word2X = useTransform(scrollYProgress, [0, 0.16], [0, 90]);
  const word2Y = useTransform(scrollYProgress, [0, 0.16], [0, -80]);
  const word3X = useTransform(scrollYProgress, [0, 0.16], [0, -85]);
  const word3Y = useTransform(scrollYProgress, [0, 0.16], [0, 65]);
  const word4X = useTransform(scrollYProgress, [0, 0.16], [0, 130]);
  const word4Y = useTransform(scrollYProgress, [0, 0.16], [0, 50]);

  const titleFilter = useMotionTemplate`blur(${titleBlur}px)`;

  const { scrollYProgress: profileProgress } = useScroll({
    target: profileRef,
    offset: ["start end", "end start"]
  });

  const photoOpacity = useTransform(profileProgress, [0.08, 0.45], [0, 1]);
  const photoY = useTransform(profileProgress, [0.08, 0.45], [58, 0]);
  const photoScale = useTransform(profileProgress, [0.08, 0.45], [0.93, 1]);
  const photoRotateY = useTransform(profileProgress, [0.08, 0.45], [34, 0]);

  const emblemOpacity = useTransform(profileProgress, [0.14, 0.5], [0, 1]);
  const emblemY = useTransform(profileProgress, [0.14, 0.5], [42, 0]);
  const emblemRotateX = useTransform(profileProgress, [0.14, 0.5], [-28, 0]);

  const introOpacity = useTransform(profileProgress, [0.12, 0.55], [0, 1]);
  const introY = useTransform(profileProgress, [0.12, 0.55], [48, 0]);
  const introRotateY = useTransform(profileProgress, [0.12, 0.55], [-24, 0]);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 180, damping: 20, mass: 0.45 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 180, damping: 20, mass: 0.45 });

  const isHighlightMode = activeHighlight !== null;

  async function copyValue(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      window.setTimeout(() => setCopiedText(""), 1800);
    } catch {
      const input = document.createElement("textarea");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopiedText(text);
      window.setTimeout(() => setCopiedText(""), 1800);
    }
  }

  function handleNavClick(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleHighlight(id) {
    setActiveHighlight((prev) => (prev === id ? null : id));
  }

  function closeHighlight() {
    setActiveHighlight(null);
  }

  function getFocusClass(id) {
    if (!isHighlightMode) return "relative z-10";
    return activeHighlight === id ? "relative z-[70]" : "relative z-10";
  }

  function openDesignImage(item) {
    setActiveDesignImage(item);
    tiltX.set(0);
    tiltY.set(0);
  }

  function closeDesignImage() {
    setActiveDesignImage(null);
    tiltX.set(0);
    tiltY.set(0);
  }

  function handleDesignMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const nextY = (px - 0.5) * 14;
    const nextX = (0.5 - py) * 14;
    tiltX.set(nextX);
    tiltY.set(nextY);
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0" />

        <motion.div
          className="absolute -left-36 top-0 h-[38rem] w-[38rem] rounded-full bg-neonRed/65 blur-[155px]"
          animate={{
            x: [0, 64, -50, 38, -22, 54, -34, 0],
            y: [0, -42, 20, -30, 14, -24, 18, 0],
            scale: [1, 1.26, 0.84, 1.2, 0.88, 1.18, 0.92, 1],
            rotate: [0, -8, 7, -5, 4, -3, 2, 0],
            opacity: [0.35, 0.82, 0.4, 0.9, 0.46, 0.86, 0.42, 0.35]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-1/2 top-0 h-[38rem] w-[36rem] -translate-x-1/2 rounded-full bg-neonPurple/50 blur-[175px]"
          animate={{
            x: [0, -42, 28, -54, 34, -22, 18, 0],
            y: [0, 26, -34, 18, -22, 20, -12, 0],
            scale: [1, 0.86, 1.22, 0.9, 1.12, 0.92, 1.16, 1],
            rotate: [0, 6, -8, 4, -5, 3, -2, 0],
            opacity: [0.3, 0.62, 0.36, 0.72, 0.4, 0.66, 0.34, 0.3]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-28 bottom-0 h-[40rem] w-[40rem] rounded-full bg-neonBlue/70 blur-[165px]"
          animate={{
            x: [0, -38, 52, -30, 18, -44, 26, 0],
            y: [0, 30, -24, 22, -30, 16, -18, 0],
            scale: [1, 1.24, 0.82, 1.18, 0.9, 1.2, 0.86, 1],
            rotate: [0, -7, 6, -5, 4, -4, 2, 0],
            opacity: [0.38, 0.86, 0.42, 0.92, 0.48, 0.88, 0.44, 0.38]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="bg-grain relative">
        <nav className="mx-auto mt-7 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.ul
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card flex items-center justify-center gap-7 rounded-3xl px-6 py-5 text-base tracking-wide text-slate-200/90 sm:gap-14 sm:text-lg"
          >
            <li>
              <motion.button type="button" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }} onClick={() => handleNavClick("home")} className="nav-link">
                首页
              </motion.button>
            </li>
            <li>
              <motion.button type="button" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }} onClick={() => handleNavClick("work")} className="nav-link">
                作品
              </motion.button>
            </li>
            <li>
              <motion.button type="button" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }} onClick={() => handleNavClick("contact")} className="nav-link">
                联系
              </motion.button>
            </li>
          </motion.ul>
        </nav>

        <main className="relative">
          <section id="home" className="relative flex min-h-screen items-center justify-center px-4 text-center">
            <motion.div className="-translate-y-8 sm:-translate-y-10" style={{ opacity: titleOpacity, y: titleY, scale: titleScale, filter: titleFilter }}>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-sm uppercase tracking-[0.28em] text-slate-100/90"
              >
                AIGC Director Portfolio
              </motion.p>
              <h1 className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-3 font-display text-5xl font-bold leading-tight sm:text-7xl">
                <motion.span style={{ x: word1X, y: word1Y }}>影像导演</motion.span>
                <motion.span style={{ x: word2X, y: word2Y }}>与</motion.span>
                <motion.span style={{ x: word3X, y: word3Y }}>AIGC</motion.span>
                <motion.span style={{ x: word4X, y: word4Y }}>设计师作品集</motion.span>
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-200/90 sm:text-xl">“用镜头记录真实，用 AI 拓展边界。”</p>
            </motion.div>

            <a href="#profile" className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center text-sm tracking-[0.18em] text-slate-300">
              <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block">
                向下探索
              </motion.span>
              <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="mt-1 block text-xl">
                ↓
              </motion.span>
            </a>
          </section>

          <section id="profile" ref={profileRef} className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-6 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-sm">
              <motion.div
                onClick={() => toggleHighlight("photo")}
                whileHover={{ scale: 1.02 }}
                animate={activeHighlight === "photo" ? { scale: 1.06 } : { scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ opacity: photoOpacity, y: photoY, scale: photoScale, rotateY: photoRotateY, transformPerspective: 1100 }}
                className={`cursor-pointer overflow-hidden rounded-2xl shadow-neon ${getFocusClass("photo")}`}
              >
                <img src="/assets/images/profile-photo.jpg" alt="个人照片" className="aspect-[4/5] h-full w-full object-cover" />
              </motion.div>
            </div>

            <motion.img
              onClick={() => toggleHighlight("emblem")}
              whileHover={{ scale: 1.04 }}
              animate={activeHighlight === "emblem" ? { scale: 1.14 } : { scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ opacity: emblemOpacity, y: emblemY, rotateX: emblemRotateX, transformPerspective: 1100 }}
              src="/assets/images/school-emblem.png"
              alt="学校校徽"
              className={`h-auto w-[186px] max-w-full cursor-pointer object-contain ${getFocusClass("emblem")}`}
            />

            <motion.div
              onClick={() => toggleHighlight("intro")}
              whileHover={{ scale: 1.01 }}
              animate={activeHighlight === "intro" ? { scale: 1.03 } : { scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ opacity: introOpacity, y: introY, rotateY: introRotateY, transformPerspective: 1100 }}
              className={`glass-card w-full cursor-pointer rounded-3xl p-7 text-left sm:p-10 ${getFocusClass("intro")}`}
            >
              <h2 className="font-display text-4xl font-bold sm:text-5xl">赵佳</h2>
              <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-300 sm:text-[17px]">
                {`📍 教育背景： 四川音乐学院27届毕业生
🎬 核心技能： 独立编导与摄制 (自有设备 A7M4) / 后期全链路 (PR, AE, 达芬奇, PS) / AIGC 影像独立创作
💼 实战经验：
电影/短剧执行制片统筹经验
成都彩虹集团有限公司 视频专员
AIGC 短片及微电影全流程独立创作
🏆 荣誉奖项： 2023 中国大学生广告艺术节 优秀奖`}
              </p>
            </motion.div>
          </section>

          <section id="work" className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-center font-display text-4xl font-bold sm:text-5xl"
            >
              作品
            </motion.h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-slate-300">悬停卡片展开预览，深入了解每个项目。</p>

            <div className="mt-8 space-y-4">
              {projects.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="group mx-auto w-full max-w-5xl rounded-2xl border border-white/15 bg-black/30 px-7 py-6 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl font-semibold">{item.title}</h3>
                    <span className="rounded-full border border-white/25 px-3 py-1 text-sm text-slate-200">{item.category}</span>
                  </div>

                  <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-4 group-hover:max-h-[700px] group-hover:opacity-100">
                    <div className="mb-3 flex items-start justify-between gap-4 pr-1">
                      <p className="text-base leading-8 text-slate-300">{item.desc}</p>
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveProject(item)}
                        className="group shrink-0 overflow-visible rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                      >
                        <span className="inline-flex items-center gap-2">
                          查看详情
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </motion.button>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/15 bg-black/40">
                      <video muted loop autoPlay playsInline preload="metadata" className="aspect-video h-full w-full object-cover">
                        <source src={item.videoSrc} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-display text-3xl font-bold sm:text-4xl">其他项目</h3>
            <p className="mx-auto mt-2 max-w-2xl text-center text-base text-slate-300">图片设计与视觉探索项目</p>

            <div className="mt-8 space-y-4">
              {otherDesignRows.map((row, rowIdx) => (
                <div key={`row-${rowIdx}`} className="flex gap-4">
                  {row.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      onClick={() => openDesignImage(item)}
                      onHoverStart={() => setHoveredDesign(item.id)}
                      onHoverEnd={() => setHoveredDesign("")}
                      animate={{
                        flexGrow: hoveredDesign === "" ? item.grow : hoveredDesign === item.id ? item.grow + 1.15 : Math.max(0.62, item.grow - 0.45)
                      }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="group min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#0c111f]/90 shadow-[0_18px_38px_rgba(0,0,0,0.32)]"
                    >
                      <div className={`relative ${item.height}`}>
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/24 to-transparent" />
                        <p className="absolute bottom-3 left-3 text-sm font-medium text-white">{item.title}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-28 w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              期待能有机会向贵团队学习，
              <span className="bg-gradient-to-r from-neonBlue via-neonPurple to-neonRed bg-clip-text text-transparent">并用我的专业能力为项目创造价值。</span>
            </h2>
          </section>

          <section id="contact" className="mx-auto mt-12 w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
            <motion.div
              className="glass-card rounded-3xl p-7 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-4xl font-bold">联系</h2>
              <p className="mt-2 text-lg text-slate-300">欢迎合作与交流，影视创作、AIGC 联合项目与品牌内容均可沟通。</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {contacts.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => copyValue(item.value)}
                    className="rounded-xl border border-white/15 bg-white/[0.02] p-5 text-left transition hover:border-white/35 hover:bg-white/[0.06]"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-lg text-slate-100">{item.value}</p>
                    <p className="mt-2 text-sm text-neonBlue">{copiedText === item.value ? "已复制到剪切板" : "点击复制"}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </section>
        </main>
      </div>

      <AnimatePresence>
        {isHighlightMode ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeHighlight} className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-xl" />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isHighlightMode ? (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="fixed right-6 top-6 z-[80] sm:right-10 sm:top-10">
            <CloseXButton onClick={closeHighlight} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeDesignImage ? (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[88] flex items-center justify-center p-4">
            <button type="button" onClick={closeDesignImage} className="absolute inset-0 bg-black/60 backdrop-blur-xl" aria-label="Close design preview" />

            <motion.div
              onMouseMove={handleDesignMouseMove}
              onMouseLeave={() => {
                tiltX.set(0);
                tiltY.set(0);
              }}
              style={{ rotateX: smoothTiltX, rotateY: smoothTiltY, transformPerspective: 1500 }}
              className="relative z-[90] flex items-center justify-center"
            >
              <img
                src={activeDesignImage.image}
                alt={activeDesignImage.title}
                className="block h-auto w-auto max-h-[88vh] max-w-[92vw] rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
              />
            </motion.div>

            <div className="pointer-events-auto fixed right-6 top-6 z-[95] sm:right-10 sm:top-10">
              <CloseXButton onClick={closeDesignImage} />
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject ? (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex items-center justify-center p-2 sm:p-4">
            <button type="button" onClick={() => setActiveProject(null)} className="absolute inset-0 bg-black/65 backdrop-blur-xl" aria-label="Close project details" />

            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.98 }}
              className="no-scrollbar relative h-[95vh] w-[98vw] overflow-y-auto rounded-3xl border border-white/20 bg-white/[0.08] backdrop-blur-2xl"
            >
              <div className="relative h-[25vh] min-h-[180px] w-full overflow-hidden border-b border-white/15">
                <img src={activeProject.coverSrc} alt={`${activeProject.title} cover`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/65" />
              </div>

              <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
                <h3 className="font-display text-4xl font-bold sm:text-5xl">{activeProject.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-300">{activeProject.category}</p>
                <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">{activeProject.desc}</p>

                {activeProject.isVertical ? (
                  <div className="mt-6 grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/15 bg-black/35">
                      <video controls preload="metadata" className="vertical-player aspect-[9/16] h-auto w-full object-contain bg-black">
                        <source src={activeProject.videoSrc} type="video/mp4" />
                      </video>
                    </div>

                    <div className="grid gap-4">
                      <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                        <h4 className="font-display text-2xl font-semibold">拍摄与制作心得</h4>
                        <p className="mt-2 text-base leading-8 text-slate-200">{activeProject.detailInsight}</p>
                      </article>
                      <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                        <h4 className="font-display text-2xl font-semibold">市场分析</h4>
                        <p className="mt-2 text-base leading-8 text-slate-200">{activeProject.detailMarket}</p>
                      </article>
                      <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                        <h4 className="font-display text-2xl font-semibold">视频介绍补充</h4>
                        <p className="mt-2 text-base leading-8 text-slate-200">{activeProject.detailVideo}</p>
                      </article>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-black/35">
                      <video controls preload="metadata" className="aspect-video h-full w-full object-cover">
                        <source src={activeProject.videoSrc} type="video/mp4" />
                      </video>
                    </div>

                    <div className="mt-6 grid gap-4">
                      <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                        <h4 className="font-display text-2xl font-semibold">拍摄与制作心得</h4>
                        <p className="mt-2 text-base leading-8 text-slate-200">{activeProject.detailInsight}</p>
                      </article>
                      <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                        <h4 className="font-display text-2xl font-semibold">市场分析</h4>
                        <p className="mt-2 text-base leading-8 text-slate-200">{activeProject.detailMarket}</p>
                      </article>
                      <article className="rounded-2xl border border-white/15 bg-black/20 p-5">
                        <h4 className="font-display text-2xl font-semibold">视频介绍补充</h4>
                        <p className="mt-2 text-base leading-8 text-slate-200">{activeProject.detailVideo}</p>
                      </article>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            <div className="pointer-events-auto fixed right-[calc(1vw+0.9rem)] top-[calc(2.5vh+0.85rem)] z-[110] sm:right-[calc(1vw+1.2rem)] sm:top-[calc(2.5vh+1.1rem)]">
              <CloseXButton onClick={() => setActiveProject(null)} />
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
