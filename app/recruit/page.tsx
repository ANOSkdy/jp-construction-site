import { getRecruitJobs } from "@/lib/airtable";

export const revalidate = 60;

export default async function RecruitPage() {
  const jobs = await getRecruitJobs();

  const records = jobs.records ?? [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-wide">Recruit</h1>
      <p className="mb-8 text-sm text-neutral-300">
        次世代の街づくりに一緒に取り組む仲間を募集しています。経験者はもちろん、
        ものづくりが好きな未経験の方も歓迎します。
      </p>

      {records.length === 0 ? (
        <p className="text-sm text-neutral-400">
          現在募集はありません。募集開始の際は本ページにてお知らせいたします。
        </p>
      ) : (
        <section className="space-y-6">
          {records.map((record) => {
            const f = record.fields as any;
            return (
              <article
                key={record.id}
                className="rounded border border-neutral-800 bg-neutral-900/80 px-6 py-5"
              >
                <h2 className="mb-2 text-lg font-semibold">
                  {f.Title ?? "職種名未設定"}
                </h2>
                {f.Description && (
                  <p className="mb-3 text-sm text-neutral-200">
                    {f.Description as string}
                  </p>
                )}
                <p className="text-xs text-neutral-400">
                  {f.Location && <>勤務地: {f.Location as string} / </>}
                  {f.EmploymentType && (
                    <>雇用形態: {f.EmploymentType as string} / </>
                  )}
                  {f.Status && <>募集状況: {f.Status as string}</>}
                </p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}
