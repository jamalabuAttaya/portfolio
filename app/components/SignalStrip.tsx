"use client";

import { Icon } from "@/app/components/Icon";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function SignalStrip() {
  const { copy } = useLanguage();
  const signals = copy.signals;
  return (
    <div className="signal-strip" aria-label={copy.signalsLabel}>
      <div className="signal-strip__rail">{[...signals, ...signals].map((signal, index) => (
        <span aria-hidden={index >= signals.length} key={`${signal}-${index}`}><Icon name={index % 2 === 0 ? "shield" : "code"} size={15} />{signal}</span>
      ))}</div>
    </div>
  );
}
