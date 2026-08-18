import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("portfolio identity and security direction are present", async () => {
  const data = await read("app/data/portfolio.ts");
  assert.match(data, /Jamal Hassan Abu Attaya/);
  assert.match(data, /Software & Application Security/);
  assert.match(data, /106/);
  assert.match(data, /37/);
});

test("icons are local SVG components and motion has an accessible fallback", async () => {
  const [icons, styles, motionStyles, experience] = await Promise.all([
    read("app/components/Icon.tsx"),
    read("app/globals.css"),
    read("app/motion.css"),
    read("app/components/ExperienceLayer.tsx"),
  ]);
  assert.match(icons, /<svg/);
  assert.doesNotMatch(icons, /material-symbols/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(motionStyles, /prefers-reduced-motion/);
  assert.match(experience, /requestAnimationFrame/);
  assert.match(experience, /visibilitychange/);
  assert.match(experience, /Math\.min\(58/);
  assert.match(experience, /devicePixelRatio/);
});

test("the motion experience is composed from local code", async () => {
  const [page, strip, interaction] = await Promise.all([
    read("app/page.tsx"),
    read("app/components/SignalStrip.tsx"),
    read("app/components/InteractionLayer.tsx"),
  ]);
  assert.match(page, /<ExperienceLayer \/>/);
  assert.match(page, /<SignalStrip \/>/);
  assert.match(strip, /aria-hidden/);
  assert.doesNotMatch(strip, /https?:\/\//);
  assert.match(interaction, /prefers-reduced-motion/);
  assert.match(interaction, /pointer: coarse/);
  assert.match(interaction, /animationend/);
});

test("Arabic and English UI content is complete and direction-aware", async () => {
  const [content, provider, layout] = await Promise.all([
    read("app/i18n/content.ts"),
    read("app/components/LanguageProvider.tsx"),
    read("app/layout.tsx"),
  ]);
  assert.match(content, /Software engineered/);
  assert.match(content, /أُهندس البرمجيات/);
  assert.match(content, /أمن البرمجيات والتطبيقات/);
  assert.match(provider, /document\.documentElement\.dir/);
  assert.match(provider, /localStorage/);
  assert.match(layout, /LanguageProvider/);
});

test("contact endpoint validates and escapes input", async () => {
  const [route, contact] = await Promise.all([
    read("app/api/contact/route.ts"),
    read("app/lib/contact.ts"),
  ]);
  assert.match(route, /CONTACT_LIMITS/);
  assert.match(route, /Request origin is not allowed/);
  assert.match(contact, /escapeHtml/);
  assert.match(contact, /honeypotFilled/);
});

test("required portfolio assets are included", async () => {
  const assets = [
    "public/My-Photo.webp",
    "public/Jamal-Hassan-Abu-Attaya-Formal-CV-2026.pdf",
    "public/projects/portfolio.webp",
    "public/projects/academic-library.webp",
    "public/projects/weather-app.webp",
    "public/projects/educational-platform.webp",
    "public/projects/dashboard.webp",
  ];
  await Promise.all(assets.map((asset) => access(new URL(`../${asset}`, import.meta.url))));
});
