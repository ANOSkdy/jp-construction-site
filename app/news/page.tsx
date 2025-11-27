import { getNewsList } from "@/lib/airtable";

export const revalidate = 60;

type NewsFields = {
  Title?: string;
  Body?: string;
  PublishedAt?: string;
};

export default async function NewsPage() {
  const news = await getNewsList();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-neutral-100">
      <h1 className="mb-8 text-3xl font-semibold tracking-wide text-white">News</h1>
      {news.records.length === 0 ? (
        <p className="text-sm text-neutral-200">
          現在お知らせはありません。
        </p>
      ) : (
        <div className="space-y-8">
          {news.records.map((record) => {
            const f = record.fields as NewsFields;
            return (
              <article
                key={record.id}
                className="border-b border-neutral-800 pb-6"
              >
                {f.PublishedAt && (
                  <p className="mb-1 text-xs text-neutral-300">
                    {f.PublishedAt}
                  </p>
                )}
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {f.Title}
                </h2>
                {f.Body && (
                  <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-200">
                    {f.Body}
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
