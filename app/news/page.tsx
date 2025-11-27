import { getNewsList } from "@/lib/airtable";

export const revalidate = 60;

export default async function NewsPage() {
  const news = await getNewsList();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-wide">News</h1>
      {news.records.length === 0 ? (
        <p className="text-sm text-neutral-400">
          現在お知らせはありません。
        </p>
      ) : (
        <div className="space-y-8">
          {news.records.map((record) => {
            const f = record.fields as any;
            return (
              <article
                key={record.id}
                className="border-b border-neutral-800 pb-6"
              >
                {f.PublishedAt && (
                  <p className="mb-1 text-xs text-neutral-400">
                    {f.PublishedAt as string}
                  </p>
                )}
                <h2 className="mb-2 text-xl font-semibold">
                  {f.Title as string}
                </h2>
                {f.Body && (
                  <p className="whitespace-pre-line text-sm text-neutral-200">
                    {f.Body as string}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
