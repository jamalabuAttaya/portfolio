"use client";

import Image from "next/image";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeader } from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/data/portfolio";

export default function About() {
  const { copy } = useLanguage();
  const about = copy.about;
  return (
    <section className="site-section about" id="about"><div className="site-container">
      <SectionHeader index="01" eyebrow={about.eyebrow} title={about.title} description={about.description} />
      <div className="about__layout">
        <Reveal className="portrait-frame" variant="left"><div className="portrait-frame__interactive" data-interactive>
          <div className="portrait-frame__rail"><span>JHA / 2026</span><span>PROFESSIONAL PROFILE</span></div>
          <div className="portrait-frame__image"><Image alt={about.portraitAlt} fill priority={false} sizes="(max-width: 760px) 100vw, 42vw" src="/My-Photo.webp" unoptimized /></div>
          <div className="portrait-frame__caption"><span>{copy.hero.role}</span><Icon name="shield" size={18} /></div>
        </div></Reveal>
        <Reveal className="about__content" delay={100} variant="right">
          <p className="about__lead">{about.lead}</p><p>{about.body}</p>
          <div className="about__principles">{about.principles.map(([title, description], index) => (
            <article data-interactive key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>
          ))}</div>
          <div className="about__actions"><a className="button button--primary" download href={portfolioData.cv} data-interactive><Icon name="download" size={18} /> {about.download}</a><a className="text-link" href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer">{about.linkedin} <Icon name="external" size={16} /></a></div>
        </Reveal>
      </div>
    </div></section>
  );
}
