import React from 'react';
import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");
  const [health, setHealth] = useState("Checking...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not connect to backend"));

    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth("down"));
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
            Full Stack App
          </p>
          <h1 className="mb-4 text-4xl font-bold">Vite + React + Tailwind</h1>
          <p className="mb-8 text-gray-300">
            This frontend is served by Nginx, proxied to an Express backend, and
            exposed through Cloudflare Tunnel.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl bg-gray-800 p-4">
              <p className="text-sm text-gray-400">Backend message</p>
              <p className="mt-1 text-lg font-semibold">{message}</p>
            </div>

            <div className="rounded-xl bg-gray-800 p-4">
              <p className="text-sm text-gray-400">Backend health</p>
              <p className="mt-1 text-lg font-semibold">{health}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}