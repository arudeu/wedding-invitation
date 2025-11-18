"use client";

import React from "react";

const InvitationHome = () => {
  return (
    <div className="relative max-w-3xl mx-auto p-1 rounded-3xl bg-gradient-to-br from-rose-100 via-rose-50 to-pink-50">
      {/* Inner card */}
      <div className="relative bg-white rounded-2xl shadow-xl p-10 md:p-14">
        {/* Thin elegant inside border */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-rose-200/50" />

        {/* 4 Corner Roses */}
        {/* Top-left */}
        <Rose className="absolute -left-6 -top-6 w-20 h-20 md:w-28 md:h-28" />

        {/* Top-right */}
        <Rose className="absolute -right-6 -top-6 w-20 h-20 md:w-28 md:h-28 rotate-90" />

        {/* Bottom-right */}
        <Rose className="absolute -right-6 -bottom-6 w-20 h-20 md:w-28 md:h-28 rotate-180" />

        {/* Bottom-left */}
        <Rose className="absolute -left-6 -bottom-6 w-20 h-20 md:w-28 md:h-28 -rotate-90" />

        {/* Content */}
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-serif text-rose-700">
            You are warmly invited
          </h1>
          <p className="mt-2 text-rose-500/80">
            Celebrate with us — an evening of joy & roses
          </p>
        </header>

        <main className="text-center space-y-6">
          <p>
            Please join <strong>Emma & Mateo</strong> for a garden-style
            reception.
          </p>

          <p className="text-sm leading-relaxed">
            Saturday, December 13, 2025 · 5:00 PM <br />
            Rosewood Hall, Manila
          </p>

          <div className="flex gap-3 justify-center mt-8">
            <button className="px-6 py-2 rounded-full bg-rose-600 text-white shadow hover:scale-105 transition">
              RSVP
            </button>
            <button className="px-6 py-2 rounded-full border border-rose-200">
              Details
            </button>
          </div>
        </main>

        <footer className="mt-8 text-xs text-rose-400 text-center">
          Dress code: Smart casual · No children under 12
        </footer>
      </div>
    </div>
  );
};
function Rose({ className }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <g fill="#E11D48">
        <path d="M32 4c6 0 10 4 12 8 3 6-1 14-9 18-8 4-18 3-21-3-3-6 0-16 10-23C26 4 29 4 32 4z" />
        <path fill="#FECACA" d="M27 22c3 0 6-2 8-4-1 5-5 9-8 9-2 0-3-3 0-5z" />
      </g>
    </svg>
  );
}

export default InvitationHome;
