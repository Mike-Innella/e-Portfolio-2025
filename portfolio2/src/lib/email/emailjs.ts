"use client";

import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_mygmail";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_hsjxk1d";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "cePFoU8dvsaDAlAyz";

export async function sendContactEmail(payload: ContactPayload) {
  // Map to your EmailJS template variable names
  const templateParams = {
    from_name: payload.name,
    reply_to: payload.email,
    message: payload.message,
  };

  const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });

  return res; // { status, text }
}
