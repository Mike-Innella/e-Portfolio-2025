import { useState } from "react";
import emailjs from "@emailjs/browser";
import emailjsConfig from "../email/emailjs.config";
import { MdSend } from "react-icons/md";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className="flex flex-col items-center">
      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="
    bg-dark-bg/30
    backdrop-blur-md
    w-[36rem] max-lg:w-[40rem] max-md:w-full max-sm:w-full mb-4
    flex flex-col gap-4
    border border-[#242323]/20 rounded-lg p-4 sm:p-6
    shadow-[0_0_32px_0_rgba(58,160,234,0.15)]
dark:shadow-[0_0_48px_0_rgba(58,160,234,0.18)]
    min-h-[24rem]
    max-sm:ml-8 max-sm:mr-0 max:max-sm:mx-auto
  "
      >
        <h2 className="text-3xl font-bold mb-6 tracking-wide flex items-center max-sm:justify-center max-sm:w-full  max-sm:mx-auto gap-2">
          <span className="material-icons text-4xl contact__header max-sm:w-full">
            Send me a message.
          </span>
        </h2>
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          {/* Left: Inputs */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="
    bg-[#f8fafc] dark:bg-[#181a1b]
    text-[#181a1b] dark:text-[#f8fafc]
    placeholder:text-[#181a1b]/70 dark:placeholder:text-[#f8fafc]/70
    border border-[#E2E8F0] dark:border-[#3c3c3c]
    hover:border-[#242323]/30
    rounded py-3 px-4
    focus:outline-none focus:ring-2 focus:ring-[#3AA0EA]
    transition
  "
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="
    bg-[#f8fafc] dark:bg-[#181a1b]
    text-[#181a1b] dark:text-[#f8fafc]
    placeholder:text-[#181a1b]/70 dark:placeholder:text-[#f8fafc]/70
    border border-[#E2E8F0] dark:border-[#3c3c3c]
    hover:border-[#242323]/30
    rounded py-3 px-4
    focus:outline-none focus:ring-2 focus:ring-[#3AA0EA]
    transition
  "
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="
    bg-[#f8fafc] dark:bg-[#181a1b]
    text-[#181a1b] dark:text-[#f8fafc]
    placeholder:text-[#181a1b]/70 dark:placeholder:text-[#f8fafc]/70
    border border-[#E2E8F0] dark:border-[#3c3c3c]
    hover:border-[#242323]/30
    rounded py-3 px-4
    focus:outline-none focus:ring-2 focus:ring-[#3AA0EA]
    transition
    resize-none
    h-[8rem]
  "
              required
            />
          </div>
          {/* Right: Circular Submit Button */}
          <div className="flex md:flex-col justify-end items-center mt-4 md:mt-auto mr-0 sm:mr-[.5rem] pb-2">
            <button
              type="submit"
              className="send-btn
    flex items-center justify-center
    w-16 h-16 rounded-full
    bg-[#f8fafc]
    text-[#181a1b]
    hover:bg-[#3AA0EA]
    hover:text-[#f8fafc]
    
    dark:bg-[#181A1B]
    dark:text-[#F8FAFC]
    dark:hover:bg-[#3AA0EA]
    dark:hover:text-[#3c3c3c]

    text-3xl
    shadow-lg transition
    disabled:opacity-70 disabled:cursor-not-allowed
    md:ml-4 mt-4 md:mt-0 mx-auto
    border border-[#181A1B]/30
    dark:border-[#F8FAFC]/30
    cursor-pointer
    shadow-[#111315]/50
    dark:shadow-md dark:shadow-[#3AA0EA]/50
  "
              disabled={status === "sending"}
              aria-label="Send Message"
            >
              {status === "sending" ? (
                <svg
                  className="animate-spin w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              ) : (
                <MdSend />
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Feedback messages - displayed below the form */}
      {status === "success" && (
        <div className="w-full max-w-[90vw] sm:max-w-lg mb-8">
          <div className="text-green-500 text-center py-2 px-4 rounded-md bg-primary-blue/10 backdrop-blur-sm">
            Message sent successfully!
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="w-full max-w-[90vw] sm:max-w-lg mb-8">
          <div className="text-red-400 text-center py-2 px-4 rounded-md bg-red-400/10 backdrop-blur-sm">
            Please fill out all fields or try again.
          </div>
        </div>
      )}
    </div>
  );
}
