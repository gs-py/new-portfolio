"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck } from "react-icons/fi";
import emailjs from "emailjs-com";
import { profile } from "@/lib/data";
import { track } from "@/lib/analytics";

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Mobile App Development",
  "Backend & API Development",
  "SEO & Performance",
  "AI & Machine Learning",
  "Other",
];

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const data = new FormData(formRef.current);
    track("contact_form_submit", { service: data.get("service") });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_my_service_id,
        process.env.NEXT_PUBLIC_my_template,
        formRef.current,
        process.env.NEXT_PUBLIC_public_key
      )
      .then(() => {
        setStatus("sent");
        track("generate_lead", { service: data.get("service"), form_location: "contact_page" });
        formRef.current?.reset();

        // Acknowledgement to the sender — failure here must not flip the visible status.
        emailjs
          .send(
            process.env.NEXT_PUBLIC_my_service_id,
            process.env.NEXT_PUBLIC_customer_template,
            {
              to_email: data.get("email"),
              from_name: `${data.get("firstname")} ${data.get("lastname")}`.trim(),
              service: data.get("service"),
              message: data.get("message"),
            },
            process.env.NEXT_PUBLIC_public_key
          )
          .catch(() => {});
      })
      .catch((error) => {
        setStatus("error");
        track("contact_form_error", { message: error?.text ?? "send_failed" });
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="rounded-[34px] bg-surface p-7 shadow-neu sm:p-10">
      <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight">Let&apos;s work together</h2>
      <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-muted">
        Open to new opportunities and collaborations. Tell me what you&apos;re building and I&apos;ll reply within a
        day.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="firstname">First name</label>
        <input id="firstname" className="field" name="firstname" type="text" placeholder="First name" required />

        <label className="sr-only" htmlFor="lastname">Last name</label>
        <input id="lastname" className="field" name="lastname" type="text" placeholder="Last name" />

        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" className="field" name="email" type="email" placeholder="Email address" required />

        <label className="sr-only" htmlFor="phone">Phone number</label>
        <input id="phone" className="field" name="phone" type="tel" placeholder="Phone number" />
      </div>

      <label className="sr-only" htmlFor="service">What do you need?</label>
      <select id="service" name="service" defaultValue="" className="field mt-4 appearance-none" required>
        <option value="" disabled>
          What do you need?
        </option>
        {SERVICES.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <label className="sr-only" htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        className="field mt-4 resize-none"
        placeholder="A couple of lines about the project"
        required
      />

      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sent" ? <FiCheck className="text-base" /> : <FiSend className="text-base" />}
          {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
        </button>

        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="text-[14px] text-accent"
          >
            Thanks — I&apos;ll get back to you shortly.
          </motion.p>
        )}
        {status === "error" && (
          <p role="alert" className="text-[14px] text-[#b8283a]">
            That didn&apos;t send. Email me directly at{" "}
            <a className="underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
