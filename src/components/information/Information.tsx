import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <section className="min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 items-center">

        <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-left">
            Summarize & Translate News Instantly
          </h1>

          <p className="mb-8 text-lg sm:text-xl text-left max-w-xl">
            Read smarter, not longer. Get concise summaries and translate news
            articles into any language in seconds.
          </p>

          <div className="flex justify-start">
            <Link
              to="/summarizer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-64 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
          <img
            src="/images/sample-image.jpg"
            alt="Newspaper illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Information;
