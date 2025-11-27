const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;

if (!AIRTABLE_API_TOKEN || !AIRTABLE_BASE_ID) {
  throw new Error("Airtable env vars are not set");
}

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;

async function airtableRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${AIRTABLE_API_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Airtable error", res.status, await res.text());
    throw new Error(`Airtable request failed: ${res.status}`);
  }

  return (await res.json()) as T;
}

export async function getNewsList() {
  const table = process.env.AIRTABLE_NEWS_TABLE ?? "News";

  // 公開フラグ付き & 公開日順
  return airtableRequest<{
    records: { id: string; fields: Record<string, unknown> }[];
  }>(
    `/${encodeURIComponent(
      table,
    )}?filterByFormula={IsPublished}=TRUE()&sort[0][field]=PublishedAt&sort[0][direction]=desc`,
  );
}

export async function createContactRecord(input: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const table = process.env.AIRTABLE_CONTACT_TABLE ?? "Contact";

  return airtableRequest(`/${encodeURIComponent(table)}`, {
    method: "POST",
    body: JSON.stringify({
      records: [
        {
          fields: {
            Name: input.name,
            Email: input.email,
            Phone: input.phone,
            Message: input.message,
          },
        },
      ],
    }),
  });
}

// ★ Recruit ページ用：Airtable「Recruit」テーブルから募集情報を取得
export async function getRecruitJobs() {
  const table = process.env.AIRTABLE_JOBS_TABLE ?? "Recruit";

  return airtableRequest<{
    records: {
      id: string;
      fields: {
        Title?: string;
        Location?: string;
        Description?: string;
        Status?: string;
        EmploymentType?: string;
        Order?: number;
        PublishedAt?: string;
        IsPublished?: boolean;
      };
    }[];
  }>(
    `/${encodeURIComponent(
      table,
    )}?filterByFormula={IsPublished}=TRUE()&sort[0][field]=Order&sort[0][direction]=asc`,
  );
}
