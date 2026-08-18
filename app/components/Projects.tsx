"use client";

import Image from "next/image";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeader } from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/data/portfolio";

export default function Projects() {
  const { copy } = useLanguage();
  const projects = copy.projects;
  return (
    <section className="site-section projects-section" id="projects"><div className="site-container">
      <SectionHeader index="05" eyebrow={projects.eyebrow} title={projects.title} description={projects.description} />
      <div className="projects-grid">{portfolioData.projects.map((project, index) => {
        const text = projects.items[index];
        return (
          <Reveal className={`project-card ${index === 0 ? "project-card--featured" : ""}`} delay={(index % 2) * 80} key={project.name}>
            <article className="project-card__interactive" data-interactive>
              <a className="project-card__image" href={project.live} target="_blank" rel="noreferrer" aria-label={`${projects.open}: ${text.name}`}><Image alt={`${text.name} — ${projects.preview}`} fill sizes="(max-width: 760px) 100vw, 50vw" src={project.image} unoptimized /><span className="project-card__number">{project.number}</span><span className="project-card__open"><Icon name="external" size={19} /></span></a>
              <div className="project-card__body"><h3>{text.name}</h3><p>{text.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-card__links"><a href={project.live} target="_blank" rel="noreferrer">{projects.live} <Icon name="arrow" size={16} /></a><a href={project.source} target="_blank" rel="noreferrer">{projects.source} <Icon name="github" size={16} /></a></div></div>
            </article>
          </Reveal>
        );
      })}</div>
    </div></section>
  );
}
