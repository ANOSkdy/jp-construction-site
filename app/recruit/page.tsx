import { getRecruitJobs } from "@/lib/airtable";

export const revalidate = 60;

type RecruitFields = {
  Title?: string;
  Description?: string;
  Location?: string;
  EmploymentType?: string;
  Status?: string;
};

export default async function RecruitPage() {
  const jobs = await getRecruitJobs();

  const records = jobs.records ?? [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-neutral-100">
      <h1 className="mb-6 text-3xl font-semibold tracking-wide text-white">Recruit</h1>
      <p className="mb-8 text-base text-neutral-200">
        次世代の街づくりに一緒に取り組む仲間を募集しています。経験者はもちろん、
        ものづくりが好きな未経験の方も歓迎します。
      </p>

      {records.length === 0 ? (
        <p className="text-sm text-neutral-200">
          現在募集はありません。募集開始の際は本ページにてお知らせいたします。
        </p>
      ) : (
        <section className="space-y-6">
          {records.map((record) => {
            const f = record.fields as RecruitFields;
            return (
              <article
                key={record.id}
                className="rounded-lg border border-neutral-700 bg-neutral-900/90 px-6 py-5 shadow-lg transition hover:border-yellow-400/60"
              >
                <h2 className="mb-2 text-lg font-semibold text-white">
                  {f.Title ?? "職種名未設定"}
                </h2>
                {f.Description && (
                  <p className="mb-3 text-sm leading-relaxed text-neutral-200">
                    {f.Description}
                  </p>
                )}
                <p className="text-xs text-neutral-300">
                  {f.Location && (
                    <>
                      勤務地: {f.Location}
                      {f.EmploymentType || f.Status ? " / " : ""}
                    </>
                  )}
                  {f.EmploymentType && (
                    <>
                      雇用形態: {f.EmploymentType}
                      {f.Status ? " / " : ""}
                    </>
                  )}
                  {f.Status && <>募集状況: {f.Status}</>}
                </p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}
