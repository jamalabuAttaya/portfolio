"use client";

import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeader } from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/data/portfolio";

export default function Education() {
  const { copy } = useLanguage();
  const education = copy.education;
  return (
    <section className="site-section education-section" id="education"><div className="site-container">
      <SectionHeader index="04" eyebrow={education.eyebrow} title={education.title} description={education.description} />
      <div className="education-layout education-layout--wide">
        <div className="education-timeline">{portfolioData.education.map((item, index) => {
          const text = education.items[index];
          return (
            <Reveal className="education-item" delay={index * 100} key={item.institution}>
              <div className="education-item__marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="education-item__body" data-interactive><span className="education-item__period">{text.period}</span><a href={item.institutionUrl} target="_blank" rel="noopener noreferrer"><h3>{text.institution}</h3><Icon name="external" size={17} /></a><p className="education-item__degree">{text.degree}</p><span className="education-item__progress">{text.progress}</span><p>{text.description}</p></div>
            </Reveal>
          );
        })}</div>
      </div>
    </div></section>
  );
}
