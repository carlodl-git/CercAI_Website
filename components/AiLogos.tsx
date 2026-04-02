import React from "react";

type LogoProps = { className?: string; style?: React.CSSProperties };

export function OpenAILogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="OpenAI / ChatGPT">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

export function GeminiLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Google Gemini">
      <path d="M12 24A14.232 14.232 0 0 1 0 12 14.232 14.232 0 0 1 12 0a14.232 14.232 0 0 1 12 12 14.232 14.232 0 0 1-12 12zm0-2.256A11.97 11.97 0 0 0 23.744 12 11.97 11.97 0 0 0 12 .256 11.97 11.97 0 0 0 .256 12 11.97 11.97 0 0 0 12 21.744z"/>
      <path d="M12 18.375c-.207-2.625-1.95-5.55-5.85-6.375C9.9 11.175 11.793 8.4 12 5.625c.207 2.775 1.95 5.55 5.85 6.375-3.75.825-5.643 3.75-5.85 6.375z"/>
    </svg>
  );
}

export function ClaudeLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Claude by Anthropic">
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128-4.72.08v2.925zm14.674-6.15a3.47 3.47 0 0 0-.51-.69 3.47 3.47 0 0 0-.69-.51c-.62-.38-1.35-.59-2.09-.59H8.87c-.74 0-1.47.21-2.09.59a3.47 3.47 0 0 0-.69.51 3.47 3.47 0 0 0-.51.69c-.38.62-.59 1.35-.59 2.09v.3c0 .74.21 1.47.59 2.09.38.62.89 1.13 1.5 1.5h.01c.62.38 1.35.59 2.09.59h7.22c.74 0 1.47-.21 2.09-.59.62-.38 1.13-.89 1.5-1.5.38-.62.59-1.35.59-2.09v-.3c0-.74-.21-1.47-.59-2.09zm-2.87 5.47H8.87a1.87 1.87 0 0 1-1.87-1.87v-.3c0-1.03.84-1.87 1.87-1.87h7.64c1.03 0 1.87.84 1.87 1.87v.3a1.87 1.87 0 0 1-1.87 1.87z"/>
    </svg>
  );
}

export function PerplexityLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Perplexity">
      <path d="M22.197 0H1.803C.807 0 0 .807 0 1.803v20.394C0 23.193.807 24 1.803 24h20.394C23.193 24 24 23.193 24 22.197V1.803C24 .807 23.193 0 22.197 0zM18.75 7.5h-6v9h6v1.5h-7.5V6H18.75v1.5zm-9 0h-4.5v9h4.5V6H6v10.5H4.5V6h-.75V4.5h6v1.5z"/>
    </svg>
  );
}

// Microsoft Copilot — 4-pointed sparkle (clean & recognisable AI-assistant icon)
export function CopilotLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Microsoft Copilot">
      <path d="M12 2.25 10.25 9H3.5l5.625 4.125L7.25 20 12 16.125 16.75 20l-1.875-6.875L20.5 9h-6.75Z"/>
    </svg>
  );
}

interface AiLogoItem {
  name: string;
  Icon: React.ComponentType<LogoProps>;
  color: string;
  bg: string;
}

const aiPlatforms: AiLogoItem[] = [
  { name: "ChatGPT",   Icon: OpenAILogo,    color: "#10a37f", bg: "#f0fdf9" },
  { name: "Gemini",    Icon: GeminiLogo,    color: "#4285f4", bg: "#eff6ff" },
  { name: "Claude",    Icon: ClaudeLogo,    color: "#d97706", bg: "#fffbeb" },
  { name: "Perplexity",Icon: PerplexityLogo,color: "#6366f1", bg: "#f5f3ff" },
  { name: "Copilot",   Icon: CopilotLogo,   color: "#0078d4", bg: "#eff6ff" },
];

export default function AiLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {aiPlatforms.map(({ name, Icon, color, bg }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-3 group cursor-default"
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
            style={{ backgroundColor: bg }}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color }} />
          </div>
          <span className="text-sm font-semibold tracking-tight" style={{ color }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
