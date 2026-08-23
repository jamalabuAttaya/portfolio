"use client";

import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio";

export default function Footer() {
  const { copy, locale } = useLanguage();
  return (
    <footer className="site-footer"><div className="site-container site-footer__inner">
      <div className="site-footer__brand"><span className="brand__mark">{portfolioData.initials}</span><div><strong>{locale === "ar" ? portfolioData.nameArabic : portfolioData.name}</strong><small>{copy.footer.purpose}</small></div></div>
      <div className="site-footer__links"><a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={19} />GitHub</a><a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={19} />LinkedIn</a><a href={`mailto:${portfolioData.email}`}><Icon name="mail" size={19} />{copy.contact.email}</a></div>
      <a className="back-to-top" href="#home"><Icon name="chevron" size={20} /><span>{copy.footer.back}</span></a>
    </div><div className="site-container site-footer__legal"><span>© 2026 {locale === "ar" ? portfolioData.nameArabic : portfolioData.name}</span><span>{copy.footer.stack}</span></div></footer>
  );
}
