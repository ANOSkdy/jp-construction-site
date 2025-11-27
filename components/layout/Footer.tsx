export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-800 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-neutral-400 md:flex-row md:items-center">
        <p>© {year} 建設株式会社. All rights reserved.</p>
        <p className="text-[10px]">
          日本の職人による高品質な建築・土木工事を通じて、安全で豊かな街づくりに貢献します。
        </p>
      </div>
    </footer>
  );
}
