"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_q5r499h",
        "template_ifqokza",
        form.current,
        "wGb62tRkMuVhOEUdD"
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        form.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 max-w-2xl"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800"
        />

        <button
          type="submit"
          disabled={loading}
          className="
            bg-cyan-500
            text-black
            px-8
            py-4
            rounded-full
            font-bold
            hover:scale-105
            transition
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500 text-green-400">
          {success}
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-500/20 border border-red-500 text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}