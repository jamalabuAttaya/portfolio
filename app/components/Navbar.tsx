"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio";

const ids = ["home", "about", "security", "skills", "education", "projects"] as const;

export default function Navbar() {
  const { copy, locale, toggleLanguage } = useLanguage();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const labels = [copy.nav.home, copy.nav.about, copy.nav.security, copy.nav.skills, copy.nav.education, copy.nav.projects];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-32% 0px -58%", threshold: [0.01, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <a className="brand" href="#home" aria-label={copy.nav.homeLabel}>
          <span className="brand__mark">{portfolioData.initials}</span>
          <span className="brand__text">
            <strong>{locale === "ar" ? "جمال أبو عطايا" : portfolioData.shortName}</strong>
            <small>{copy.nav.brand}</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label={copy.nav.brand}>
          {ids.map((id, index) => (
            <a className={active === id ? "is-active" : ""} href={`#${id}`} key={id} onClick={() => setOpen(false)}>{labels[index]}</a>
          ))}
          <a className="nav-links__contact" href="#contact" onClick={() => setOpen(false)}>{copy.nav.contact} <Icon name="arrow" size={16} /></a>
        </nav>

        <div className="nav-actions">
          <button className="language-toggle" onClick={toggleLanguage} type="button" aria-label={copy.language.switchLabel} data-interactive>
            <span className="language-toggle__globe" aria-hidden="true">◎</span><b>{copy.language.short}</b>
          </button>
          <button aria-expanded={open} aria-label={open ? copy.nav.close : copy.nav.open} className="nav-toggle" onClick={() => setOpen((value) => !value)} type="button">
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
