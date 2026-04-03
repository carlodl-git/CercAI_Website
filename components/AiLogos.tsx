import React from "react";

type LogoProps = { className?: string; style?: React.CSSProperties };

export function OpenAILogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="ChatGPT">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

export function GeminiLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Google Gemini">
      <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
    </svg>
  );
}

export function ClaudeLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Claude by Anthropic">
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
    </svg>
  );
}

export function PerplexityLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-label="Perplexity">
      <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
    </svg>
  );
}

// Microsoft Copilot — ribbon SVG con gradient ufficiali
export function CopilotLogo({ className = "w-8 h-8", style }: LogoProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" aria-label="Microsoft Copilot" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cL" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%"   stopColor="#00B4F0"/>
          <stop offset="35%"  stopColor="#7ED321"/>
          <stop offset="70%"  stopColor="#F5C518"/>
          <stop offset="100%" stopColor="#F06A1E"/>
        </linearGradient>
        <linearGradient id="cR" x1="0.9" y1="0" x2="0.1" y2="1">
          <stop offset="0%"   stopColor="#9B5DD4"/>
          <stop offset="45%"  stopColor="#FF6FB0"/>
          <stop offset="100%" stopColor="#F06A1E"/>
        </linearGradient>
      </defs>
      {/* Pezzo BLU→VERDE→GIALLO→ARANCIONE */}
      <path
        d="M 18 8 Q 8 8 8 18 L 8 58 Q 8 68 18 68 L 48 68 Q 58 68 58 58 L 58 48 Q 58 42 52 42 L 32 42 Q 22 42 22 32 L 22 22 Q 22 14 30 14 L 82 14 Q 92 14 92 24 L 92 28 Q 92 38 82 38 L 52 38"
        fill="none" stroke="url(#cL)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Pezzo VIOLA→ROSA→ARANCIONE */}
      <path
        d="M 82 92 Q 92 92 92 82 L 92 42 Q 92 32 82 32 L 52 32 Q 42 32 42 42 L 42 52 Q 42 58 48 58 L 68 58 Q 78 58 78 68 L 78 78 Q 78 86 70 86 L 18 86 Q 8 86 8 76 L 8 72 Q 8 62 18 62 L 48 62"
        fill="none" stroke="url(#cR)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"
      />
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
  { name: "Claude",    Icon: ClaudeLogo,    color: "#D97757", bg: "#fff8f5" },
  { name: "Gemini",    Icon: GeminiLogo,    color: "#4285f4", bg: "#eff6ff" },
  { name: "Perplexity",Icon: PerplexityLogo,color: "#20808D", bg: "#f0fafa" },
  { name: "Copilot",   Icon: CopilotLogo,   color: "transparent", bg: "#f5f0ff" },
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
