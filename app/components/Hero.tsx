"use client";

import type { CSSProperties } from "react";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { portfolioData } from "@/app/data/portfolio";

export default function Hero() {
  const { copy, locale } = useLanguage();
  const hero = copy.hero;

  return (
    <section className="hero engineering-grid" id="home">
      <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" />
      <div className="hero__data-stream" aria-hidden="true"><span>01001101</span><span>AUTH / VERIFIED</span><span>OWASP / API1</span><span>SECURE BY DESIGN</span></div>
      <div className="site-container hero__layout">
        <Reveal className="hero__copy">
          <div className="availability"><span className="availability__dot" />{hero.availability}</div>
          <p className="hero__kicker">{hero.kicker}</p>
          <h1>{hero.title}<span>{hero.titleAccent}</span></h1>
          <p className="hero__intro">{hero.bio}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#security" data-interactive>{hero.explore} <Icon name="arrow" size={18} /></a>
            <a className="button button--secondary" href="#contact" data-interactive>{hero.contact}</a>
          </div>
          <div className="hero__identity"><span>{locale === "ar" ? "جمال حسان أبو عطايا" : portfolioData.name}</span><span>{hero.role}</span></div>
        </Reveal>

        <Reveal className="system-panel" delay={140} variant="scale">
          <div className="system-panel__interactive" data-interactive>
            <div className="system-panel__scan" aria-hidden="true" />
            <div className="system-panel__top"><span>{hero.profile}</span><span className="system-panel__status"><i /> {hero.verified}</span></div>
            <div className="system-panel__visual" aria-hidden="true">
              <div className="system-panel__radar"><i /><i /><i /><span /></div>
              <div className="system-panel__icon"><Icon name="shield" size={34} /></div>
              <div className="security-orbit">{hero.orbit.map((label, index) => <span key={label} style={{ "--orbit-index": index } as CSSProperties}>{label}</span>)}</div>
            </div>
            <p className="system-panel__label">{hero.direction}</p>
            <h2>{hero.role}</h2>
            <p className="system-panel__description">{hero.directionDescription}</p>
            <div className="system-panel__stats">{portfolioData.stats.map((stat, index) => <div key={stat.value + index}><strong>{stat.value}</strong><span>{hero.stats[index]}</span></div>)}</div>
            <div className="system-panel__footer"><span><Icon name="code" size={17} /> {hero.software}</span><span><Icon name="network" size={17} /> {hero.systems}</span><span><Icon name="shield" size={17} /> {hero.security}</span></div>
          </div>
        </Reveal>
      </div>
      <a className="scroll-cue" href="#about" aria-label={hero.scrollLabel}><span>{hero.scroll}</span><i /></a>
    </section>
  );
}
