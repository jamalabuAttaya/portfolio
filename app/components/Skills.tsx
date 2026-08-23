"use client";

import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeader } from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/data/portfolio";

export default function Skills() {
  const { copy } = useLanguage();
  const skills = copy.skills;
  return (
    <section className="site-section" id="skills"><div className="site-container">
      <SectionHeader index="03" eyebrow={skills.eyebrow} title={skills.title} description={skills.description} />
      <div className="skills-grid">{portfolioData.skillGroups.map((group, index) => {
        const text = skills.groups[index];
        return (
          <Reveal className="skill-panel" delay={index * 70} key={group.title}>
            <article className="interactive-card" data-interactive>
              <div className="skill-panel__heading"><span className="icon-box"><Icon name={group.icon} size={23} /></span><div><span>{text.eyebrow}</span><h3>{text.title}</h3></div></div>
              <ul>{text.items.map((item) => <li key={item}><i />{item}</li>)}</ul>
            </article>
          </Reveal>
        );
      })}</div>
      <Reveal className="strengths" delay={160}>
        <div className="strengths__interactive" data-interactive>
          <div className="strengths__heading"><Icon name="users" size={24} /><div><span>{skills.strengthsEyebrow}</span><h3>{skills.strengthsTitle}</h3></div></div>
          <div className="strengths__list">{skills.strengths.map((strength, index) => <span key={strength}><b>{String(index + 1).padStart(2, "0")}</b>{strength}</span>)}</div>
        </div>
      </Reveal>
      <Reveal className="languages-panel" delay={200}>
        <div><span>{skills.languages}</span><Icon name="book" size={20} /></div>
        <ul>{skills.languageItems.map((language) => <li key={language}>{language}</li>)}</ul>
      </Reveal>
    </div></section>
  );
}
