"use client";

import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeader } from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/data/portfolio";

export default function SecurityWork() {
  const { copy } = useLanguage();
  const security = copy.security;
  return (
    <section className="site-section security-section" id="security"><div className="site-container">
      <SectionHeader index="02" eyebrow={security.eyebrow} title={security.title} description={security.description} />
      <div className="security-grid">{portfolioData.practicalWork.map((item, index) => {
        const text = security.items[index];
        return (
          <Reveal className="security-card" delay={index * 80} key={item.code}>
            <article className="interactive-card" data-interactive>
              <div className="security-card__header"><span className="icon-box"><Icon name={item.icon} size={24} /></span><span className="security-card__code">{item.code}</span></div>
              <h3>{text.title}</h3><p>{text.description}</p>
              <div className="tag-list">{text.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="security-card__line"><i /></div>
            </article>
          </Reveal>
        );
      })}</div>
      <Reveal className="security-note" delay={180}><Icon name="check" size={20} /><p>{security.note}</p></Reveal>
    </div></section>
  );
}
