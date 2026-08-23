"use client";

import Image from "next/image";
import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeader } from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/data/portfolio";

export default function Certificates() {
  const { copy, locale } = useLanguage();
  const section = copy.certificates;

  return (
    <section className="site-section certificates-section" id="certificates">
      <div className="site-container">
        <SectionHeader
          index="05"
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="certificates-grid">
          {portfolioData.certifications.map((certificate, index) => {
            const text = section.items[index];
            return (
              <Reveal
                className="credential-card"
                delay={(index % 3) * 70}
                key={certificate.code}
              >
                <a
                  className="credential-card__interactive"
                  data-interactive
                  href={locale === "ar" ? certificate.fileAr : certificate.fileEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${section.view}: ${text.title}`}
                >
                  <div className="credential-card__top">
                    <span className="credential-card__code">{certificate.code}</span>
                    <span className="credential-card__status">
                      <i /> {section.verified}
                    </span>
                  </div>
                  <div className="credential-card__preview">
                    <Image
                      alt=""
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 900px) 50vw, 33vw"
                      src={certificate.image}
                      unoptimized
                    />
                    <span><Icon name="award" size={16} /> {certificate.tag}</span>
                  </div>
                  <h3>{text.title}</h3>
                  <p>{text.issuer}</p>
                  <div className="credential-card__footer">
                    <time>{text.date}</time>
                    <span>{section.view} <Icon name="external" size={16} /></span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
