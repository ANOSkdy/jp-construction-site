"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setDone(false);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      message: formData.get("message") as string,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSending(false);

    if (res.ok) {
      setDone(true);
      e.currentTarget.reset();
    } else {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-wide">
        Contact us
      </h1>
      <p className="mb-8 text-sm text-neutral-300">
        工事のご相談・お見積りのご依頼など、お気軽にお問い合わせください。
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-1 block text-sm" htmlFor="name">
            お名前 *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="email">
            メールアドレス *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="phone">
            お電話番号
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="message">
            ご相談内容 *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-sm focus:border-yellow-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold tracking-wide text-black disabled:opacity-60"
        >
          {sending ? "送信中..." : "送信する"}
        </button>
        {done && (
          <p className="mt-2 text-xs text-green-400">
            送信が完了しました。担当者よりご連絡いたします。
          </p>
        )}
      </form>
    </div>
  );
}
