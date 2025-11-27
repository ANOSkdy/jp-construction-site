export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* 背景動画 */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* TODO: public/videos 配下に craftsman.mp4 を配置してください */}
        <source src="/videos/craftsman.mp4" type="video/mp4" />
      </video>

      {/* 黒グラデーションのオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/95" />

      {/* コンテンツ */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-10">
        <p className="mb-4 text-xs tracking-[0.3em] text-neutral-300">
          JAPANESE CRAFTSMANSHIP / GENERAL CONTRACTOR
        </p>
        <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-tight tracking-wide text-white md:text-5xl">
          誠実なものづくりで、
          <br />
          都市と暮らしを支える建設会社。
        </h1>
        <p className="mb-10 max-w-xl text-sm text-neutral-300">
          オフィスビル・商業施設・公共工事・住宅リノベーションまで。
          日本の職人による高品質な施工と、安全第一の現場管理で、
          クライアントの信頼に応えます。
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold tracking-wide text-black hover:bg-yellow-300 transition"
          >
            お問い合わせ
          </a>
          <a
            href="/company"
            className="rounded-full border border-neutral-500 px-8 py-3 text-sm font-semibold tracking-wide text-neutral-100 hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            会社概要を見る
          </a>
        </div>
      </section>
    </div>
  );
}
