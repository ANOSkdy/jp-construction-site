export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-wide">
        About us
      </h1>
      <p className="mb-6 text-sm text-neutral-300">
        建設株式会社は、日本の職人による確かな技術と、安全第一の現場管理を強みとする総合建設会社です。
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="mb-3 text-lg font-semibold">私たちの使命</h2>
          <p className="text-sm text-neutral-300">
            「誠実なものづくりで、街と人の未来を支える」を掲げ、
            オフィスビル・商業施設・公共工事・住宅リノベーションなど、
            幅広いプロジェクトに携わっています。
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold">強み</h2>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>・一級建築士・施工管理技士を中心とした専門チーム</li>
            <li>・安全と品質を最優先した現場マネジメント</li>
            <li>・長期的なメンテナンスを見据えた提案力</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
