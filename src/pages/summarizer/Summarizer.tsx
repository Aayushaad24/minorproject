import React, { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Summary = {
  title: string;
};
const testMutation = async (data: { title: string }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

const Summarizer = () => {
  const [newsLink, setNewsLink] = useState("");
  const [summary, setSummary] = useState<Summary | null>(null);
  const [language, setLanguage] = useState("en");

  const mutation = useMutation({
    mutationFn: testMutation,
    onSuccess: (data) => {
      setSummary({ title: data.title });
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsLink) return;
    mutation.mutate({ title: newsLink });
  };

  return (
    <main className="min-h-screen bg-[#547792] pt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">News Summarizer</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#94B4C1] p-6 rounded-lg shadow-md mb-8"
        >
          <Input
            label="Paste News Article Link"
            // type="url"
            placeholder="https://example.com/news-article"
            value={newsLink}
            onChange={(e) => setNewsLink(e.target.value)}
          />
          <Button type="submit" variant="primary">
            Summarize
          </Button>
        </form>

        <div className="bg-[#94B4C1] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Summarized News</h2>
          <p className="text-gray-700 leading-relaxed">{summary?.title}</p>
          {summary && (
            <div className="mt-6 border-t pt-4">
              <div className="flex items-center gap-4">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="px-4 py-2 rounded border text-gray-700"
                >
                  <option value="en">English</option>
                  <option value="ne">Nepali</option>
                </select>

                <Button variant="secondary">Translate</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Summarizer;
