import type { IconName } from "@/app/data/portfolio";

type IconProps = {
  name: IconName | "arrow" | "external" | "download" | "mail" | "github" | "linkedin" | "message" | "send" | "menu" | "close" | "chevron" | "check";
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className = "" }: IconProps) {
  const content = (() => {
    switch (name) {
      case "shield":
        return <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>;
      case "code":
        return <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>;
      case "database":
        return <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>;
      case "network":
        return <><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></>;
      case "mobile":
        return <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>;
      case "layers":
        return <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>;
      case "terminal":
        return <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m6 9 3 3-3 3M13 15h5"/></>;
      case "users":
        return <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>;
      case "book":
        return <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>;
      case "award":
        return <><circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/></>;
      case "arrow":
        return <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>;
      case "external":
        return <><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>;
      case "download":
        return <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>;
      case "mail":
        return <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>;
      case "github":
        return <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></>;
      case "linkedin":
        return <><rect x="3" y="9" width="4" height="12"/><path d="M5 3v.01"/><path d="M11 21V9h4v2c1-2 6-2 6 3v7h-4v-6c0-2-2-2-2 0v6h-4Z"/></>;
      case "message":
        return <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/></>;
      case "send":
        return <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>;
      case "menu":
        return <><path d="M4 7h16M4 12h16M4 17h16"/></>;
      case "close":
        return <><path d="m6 6 12 12M18 6 6 18"/></>;
      case "chevron":
        return <path d="m18 15-6-6-6 6"/>;
      case "check":
        return <path d="m5 12 4 4L19 6"/>;
    }
  })();

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {content}
    </svg>
  );
}
