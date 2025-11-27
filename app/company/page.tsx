export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-wide">
        Company
      </h1>
      <div className="overflow-x-auto rounded border border-neutral-800 bg-neutral-950/60">
        <table className="min-w-full text-sm">
          <tbody>
            <tr className="border-b border-neutral-800">
              <th className="w-40 bg-neutral-900 px-4 py-3 text-left text-xs font-semibold text-neutral-300">
                会社名
              </th>
              <td className="px-4 py-3 text-neutral-100">建設株式会社</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="bg-neutral-900 px-4 py-3 text-left text-xs font-semibold text-neutral-300">
                所在地
              </th>
              <td className="px-4 py-3 text-neutral-100">
                〒000-0000 東京都○○区○○0-0-0
              </td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="bg-neutral-900 px-4 py-3 text-left text-xs font-semibold text-neutral-300">
                設立
              </th>
              <td className="px-4 py-3 text-neutral-100">20XX年X月X日</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="bg-neutral-900 px-4 py-3 text-left text-xs font-semibold text-neutral-300">
                資本金
              </th>
              <td className="px-4 py-3 text-neutral-100">XX,000,000円</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <th className="bg-neutral-900 px-4 py-3 text-left text-xs font-semibold text-neutral-300">
                事業内容
              </th>
              <td className="px-4 py-3 text-neutral-100">
                建築工事業 / 土木工事業 / 内装リフォーム工事 ほか
              </td>
            </tr>
            <tr>
              <th className="bg-neutral-900 px-4 py-3 text-left text-xs font-semibold text-neutral-300">
                許可
              </th>
              <td className="px-4 py-3 text-neutral-100">
                建設業許可 ○○県知事 許可（特-第00000号） ほか
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
