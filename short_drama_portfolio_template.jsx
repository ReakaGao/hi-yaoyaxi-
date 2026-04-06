export default function ShortDramaPortfolioTemplate() {
  const qr = "/mnt/data/image.png";

  const works = [
    {
      title: "《贵女重生：谋权倾天下》",
      tag: "权谋情绪",
      value: "强冲突开局 / 情绪压缩 / 爆点节奏",
    },
    {
      title: "《诡秘之猫》",
      tag: "悬疑设定",
      value: "高概念钩子 / 氛围叙事 / 连续追更",
    },
    {
      title: "《北纬30°的诅咒》",
      tag: "都市奇幻",
      value: "世界观可视化 / AI镜头适配",
    },
    {
      title: "《再见，明》",
      tag: "情感叙事",
      value: "情绪留存 / 人物弧线 / 共鸣结构",
    },
  ];

  return (
    <div className="min-h-screen bg-[#06070c] text-white overflow-x-hidden">

      {/* 背景氛围 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 overflow-hidden">

        {/* 人物视觉背景 */}
        <div className="absolute right-0 top-0 h-full w-[60%] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(6,7,12,0.95),transparent)]" />
          {/* 占位人物块（后续可替换真人/AI图） */}
          <div className="absolute right-10 bottom-0 w-[420px] h-[620px] bg-white/5 border border-white/10 backdrop-blur-xl" />
        </div>

        <div className="max-w-[1100px] relative z-10">

          <div className="text-[11px] tracking-[0.5em] text-white/40 uppercase">
            YAO YAXI / AI STORY SYSTEM
          </div>

          <h1 className="mt-8 text-[14vw] md:text-[100px] lg:text-[120px] font-serif leading-[0.85]">
            把 AI 内容
            <br />
            写成会成交的
            <br />
            短剧项目
          </h1>

          <p className="mt-8 max-w-[720px] text-white/70 text-lg leading-8">
            用短剧结构 + AI生产逻辑，把创意直接转化为可执行、可传播、可成交的内容方案。
          </p>

          <div className="mt-10 flex gap-4">
            <button className="border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition">
              查看案例
            </button>
            <button className="bg-white text-black px-6 py-3">
              发起合作
            </button>
          </div>
        </div>
      </section>

      {/* 中间断层视觉 */}
      <div className="h-[200px] flex items-center justify-center">
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      {/* 能力模块 */}
      <section className="px-6 md:px-10 lg:px-16 py-20">
        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
          不是展示作品
          <br />
          是展示“内容模型”
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {["开场钩子", "节奏压缩", "情绪转化"].map((t) => (
            <div key={t} className="relative border border-white/10 p-8 bg-white/[0.02] backdrop-blur">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-30" />
              <div className="relative text-2xl font-serif">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 作品 */}
      <section className="px-6 md:px-10 lg:px-16 py-20">
        <h3 className="text-4xl md:text-5xl font-serif mb-10">
          作品 / Case System
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {works.map((w) => (
            <div key={w.title} className="group relative border border-white/10 p-6 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="h-[160px] bg-white/5 mb-5" />

              <div className="text-xs text-white/40 uppercase tracking-[0.3em]">
                {w.tag}
              </div>

              <div className="mt-2 text-xl font-serif">{w.title}</div>

              <div className="mt-3 text-white/60 text-sm leading-6">
                {w.value}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-16 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">
              让内容
              <br />
              从创意直接进入成交
            </h3>

            <p className="mt-6 text-white/70 leading-8">
              从剧本到AI成片，我提供完整内容结构，让项目一开始就具备传播能力。
            </p>
          </div>

          <div className="relative border border-white/10 p-8 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_60%)] opacity-30" />

            <img src={qr} className="w-32 h-32 mx-auto mb-4" />

            <div className="text-white/80">扫码合作</div>
            <div className="text-white/50 text-sm mt-2">立即沟通项目</div>

            <button className="mt-6 border border-white px-6 py-3 hover:bg-white hover:text-black transition">
              发起合作
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
