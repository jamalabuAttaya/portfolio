"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { portfolioData } from "@/app/data/portfolio";

export default function Contact() {
  const { copy, locale } = useLanguage();
  const contact = copy.contact;
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <section className="site-section contact-section" id="contact">
      <div className="site-container contact-layout">
        <Reveal className="contact-copy" variant="left">
          <div className="section-heading__meta"><span>07</span><span>{contact.eyebrow}</span></div>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
          <div className="contact-methods">
            <a href={`mailto:${portfolioData.email}`} data-interactive>
              <span className="icon-box"><Icon name="mail" size={21} /></span>
              <div><small>{contact.email}</small><strong>{portfolioData.email}</strong></div>
              <Icon name="arrow" size={18} />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" data-interactive>
              <span className="icon-box"><Icon name="linkedin" size={21} /></span>
              <div><small>LinkedIn</small><strong>{locale === "ar" ? "جمال أبو عطايا" : "Jamal Abuattaya"}</strong></div>
              <Icon name="external" size={18} />
            </a>
            <a href={portfolioData.socials.whatsapp} target="_blank" rel="noopener noreferrer" data-interactive>
              <span className="icon-box"><Icon name="message" size={21} /></span>
              <div><small>{contact.whatsapp}</small><strong>{contact.messageMe}</strong></div>
              <Icon name="external" size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={120} variant="right">
          <div className="contact-form-wrap__interactive" data-interactive>
            <div className="contact-form-wrap__header">
              <div><span>{contact.secureChannel}</span><h3>{contact.formTitle}</h3></div>
              <span className="contact-form-wrap__signal"><i /><i /><i /></span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label><span>{contact.fullName}</span><input autoComplete="name" maxLength={80} name="name" placeholder={contact.namePlaceholder} required /></label>
                <label><span>{contact.emailAddress}</span><input autoComplete="email" maxLength={254} name="email" placeholder="name@example.com" required type="email" /></label>
              </div>
              <label><span>{contact.message}</span><textarea maxLength={4000} minLength={10} name="message" placeholder={contact.messagePlaceholder} required rows={6} /></label>
              <button className="button button--primary contact-submit" type="submit" data-interactive>{contact.send}<Icon name="send" size={18} /></button>
              <p className="form-privacy"><Icon name="shield" size={15} />{contact.privacy}</p>
              <p className="form-status form-status--success" aria-live="polite">{opened ? contact.success : ""}</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
