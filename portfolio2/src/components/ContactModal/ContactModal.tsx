"use client";

import { useState } from "react";
import Modal from "../Modal/Modal";
import { sendContactEmail, ContactPayload } from "@/lib/email/emailjs";
import s from "./ContactModal.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

type UiState = "idle" | "loading" | "success" | "error";

export default function ContactModal({ open, onClose }: Props) {
  const [ui, setUi] = useState<UiState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    message: "",
  });

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValid =
    form.name.trim().length >= 1 &&
    validEmail(form.email.trim()) &&
    form.message.trim().length >= 5;


  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setUi("loading");
    setError(null);
    try {
      await sendContactEmail(form);
      setUi("success");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setUi("error");
    }
  }

  function resetAndClose() {
    setUi("idle");
    setError(null);
    setForm({ name: "", email: "", message: "" });
    onClose();
  }

  return (
    <Modal open={open} onClose={resetAndClose} labelledBy="contactTitle">
      <h2 id="contactTitle" className={s.title}>Let&apos;s connect</h2>
      <p className={s.lead}>
        Fill this out and I&apos;ll get back to you shortly.
      </p>

      {ui === "success" ? (
        <div className={s.stateWrap} role="status" aria-live="polite">
          <p className={s.success}>
            ✅ Message sent. Thanks for reaching out!
          </p>
          <button className={s.btn} onClick={resetAndClose}>Close</button>
        </div>
      ) : (
        <form className={s.form} onSubmit={onSubmit} aria-describedby="contactHelp">
          <label className={s.label}>
            <span>Name</span>
            <input
              className={s.input}
              type="text"
              name="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>

          <label className={s.label}>
            <span>Email</span>
            <input
              className={s.input}
              type="email"
              name="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          <label className={s.label}>
            <span>Message</span>
            <textarea
              className={s.textarea}
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          <div id="contactHelp" className={s.help}>
            Please include any relevant links or timelines.
          </div>

          {ui === "error" && <p className={s.error}>❌ {error}</p>}

          <div className={s.actions}>
            <button
              type="button"
              className={`${s.btn} ${s.secondary}`}
              onClick={resetAndClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={s.btn}
              disabled={!isValid || ui === "loading"}
              aria-busy={ui === "loading"}
            >
              {ui === "loading" ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
