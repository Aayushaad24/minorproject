import React, { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useMutation } from "@tanstack/react-query";

type Summary = {
  text: string;
};

const summarizeNews = async (data: {
  url: string;
  language: string;
}) => {
  const res = await fetch("http://192.168.1.65:5000/summarizer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: data.url,
      language: data.language, // english | nepali | hindi
      num_sentences: 5,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to summarize");
  }

  return res.json();
};

const Summarizer = () => {
  const [newsLink, setNewsLink] = useState("");
  const [summary, setSummary] = useState<Summary | null>(null);
  const [language, setLanguage] = useState("english");

  const mutation = useMutation({
    mutationFn: summarizeNews,
    onSuccess: (data) => {
      if (data.success) {
        setSummary({ text: data.summary });
      }
    },
    onError: (error) => {
      console.error("Summarization failed:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsLink) return;

    mutation.mutate({
      url: newsLink,
      language,
    });
  };

  return (
    <main className="min-h-screen bg-[#547792] pt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          News Summarizer
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#94B4C1] p-6 rounded-lg shadow-md mb-8"
        >
          <Input
            label="Paste News Article Link"
            placeholder="https://example.com/news-article"
            value={newsLink}
            onChange={(e) => setNewsLink(e.target.value)}
          />

          <div className="flex items-center gap-4 mt-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 rounded border text-gray-700"
            >
              <option value="english">English</option>
              <option value="nepali">Nepali</option>
              <option value="hindi">Hindi</option>
            </select>

            <Button type="submit" variant="primary" disabled={mutation.isPending}>
              {mutation.isPending ? "Summarizing..." : "Summarize"}
            </Button>
          </div>
        </form>

        <div className="bg-[#94B4C1] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Summarized News</h2>

          {mutation.isPending && (
            <p className="text-gray-700">Generating summary...</p>
          )}

          {summary && (
            <p className="text-gray-700 leading-relaxed">{summary.text}</p>
          )}

          {mutation.isError && (
            <p className="text-red-600 mt-2">
              Failed to summarize the article.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Summarizer;
