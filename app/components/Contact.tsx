"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { portfolioData } from "@/app/data/portfolio";

type FormStatus = { type: "idle" | "loading" | "success" | "error"; message: string };

export default function Contact() {
  const { copy, locale } = useLanguage();
  const contact = copy.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  useEffect(() => { startedAt.current = Date.now(); }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.type === "loading") return;
    const form = new FormData(event.currentTarget);
    const payload = { name: String(form.get("name") ?? ""), email: String(form.get("email") ?? ""), message: String(form.get("message") ?? ""), company: String(form.get("company") ?? ""), startedAt: startedAt.current };
    setStatus({ type: "loading", message: contact.sendingStatus });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("contact_failed");
      formRef.current?.reset();
      startedAt.current = Date.now();
      setStatus({ type: "success", message: contact.success });
    } catch {
      setStatus({ type: "error", message: contact.error });
    }
  }

  return (
    <section className="site-section contact-section" id="contact"><div className="site-container contact-layout">
      <Reveal className="contact-copy" variant="left"><div className="section-heading__meta"><span>06</span><span>{contact.eyebrow}</span></div><h2>{contact.title}</h2><p>{contact.description}</p>
        <div className="contact-methods">
          <a href={`mailto:${portfolioData.email}`} data-interactive><span className="icon-box"><Icon name="mail" size={21} /></span><div><small>{contact.email}</small><strong>{portfolioData.email}</strong></div><Icon name="arrow" size={18} /></a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" data-interactive><span className="icon-box"><Icon name="linkedin" size={21} /></span><div><small>LinkedIn</small><strong>{locale === "ar" ? "جمال أبو عطايا" : "Jamal Abu Attaya"}</strong></div><Icon name="external" size={18} /></a>
          <a href={portfolioData.socials.whatsapp} target="_blank" rel="noreferrer" data-interactive><span className="icon-box"><Icon name="message" size={21} /></span><div><small>{contact.whatsapp}</small><strong>{contact.messageMe}</strong></div><Icon name="external" size={18} /></a>
        </div>
      </Reveal>
      <Reveal className="contact-form-wrap" delay={120} variant="right"><div className="contact-form-wrap__interactive" data-interactive>
        <div className="contact-form-wrap__header"><div><span>{contact.secureChannel}</span><h3>{contact.formTitle}</h3></div><span className="contact-form-wrap__signal"><i /><i /><i /></span></div>
        <form ref={formRef} onSubmit={handleSubmit}><div className="form-row"><label><span>{contact.fullName}</span><input autoComplete="name" maxLength={80} name="name" placeholder={contact.namePlaceholder} required /></label><label><span>{contact.emailAddress}</span><input autoComplete="email" maxLength={254} name="email" placeholder="name@example.com" required type="email" /></label></div><label><span>{contact.message}</span><textarea maxLength={4000} minLength={10} name="message" placeholder={contact.messagePlaceholder} required rows={6} /></label><label className="honeypot" aria-hidden="true">{contact.company}<input autoComplete="off" name="company" tabIndex={-1} /></label><button className="button button--primary contact-submit" disabled={status.type === "loading"} type="submit" data-interactive>{status.type === "loading" ? contact.sending : contact.send}<Icon name="send" size={18} /></button><p className={`form-status form-status--${status.type}`} aria-live="polite">{status.message}</p></form>
      </div></Reveal>
    </div></section>
  );
}
