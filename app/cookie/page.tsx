import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy di RicercAI S.r.l. Informazioni sui cookie tecnici e analytics utilizzati sul sito ricercai.it.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ricercai.it/cookie" },
};

export default function CookiePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://ricercai.it" },
          { name: "Cookie Policy", url: "https://ricercai.it/cookie" },
        ]}
      />

      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose-custom">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Cookie Policy
          </h1>
          <p className="text-sm text-muted mb-8">
            Ultimo aggiornamento: 9 aprile 2026
          </p>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              1. Cosa sono i cookie
            </h2>
            <p className="text-muted leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul
              dispositivo dell&apos;utente quando visita un sito web. Servono a
              migliorare l&apos;esperienza di navigazione e a fornire informazioni
              utili al gestore del sito.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              2. Cookie utilizzati su questo sito
            </h2>

            <h3 className="text-lg font-medium mt-6 mb-2">
              Cookie tecnici (necessari)
            </h3>
            <p className="text-muted leading-relaxed">
              Questi cookie sono essenziali per il funzionamento del sito e non
              possono essere disattivati. Includono:
            </p>
            <ul className="space-y-2 ml-6 text-muted leading-relaxed">
              <li>
                Cookie di sessione per il corretto funzionamento della
                navigazione
              </li>
              <li>
                Cookie di preferenza per memorizzare le impostazioni dell&apos;utente
              </li>
              <li>
                Cookie di sicurezza per prevenire attivita fraudolente
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Base giuridica:</strong>{" "}
              interesse legittimo (art. 6, par. 1, lett. f, GDPR). Non
              richiedono consenso in quanto strettamente necessari.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">
              Cookie analytics (se attivi)
            </h3>
            <p className="text-muted leading-relaxed">
              Qualora attivati, questi cookie raccolgono dati in forma aggregata
              e anonima sulle modalita di utilizzo del sito, al fine di
              migliorarne le prestazioni. Attualmente il sito potrebbe
              utilizzare servizi di analytics di terze parti (es. Vercel
              Analytics) che raccolgono dati anonimi senza identificare i
              singoli utenti.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Base giuridica:</strong>{" "}
              consenso dell&apos;utente o, nel caso di analytics anonimizzati,
              interesse legittimo.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              3. Cookie di terze parti
            </h2>
            <p className="text-muted leading-relaxed">
              Il sito non utilizza cookie di profilazione o di marketing di terze
              parti. Non vengono installati cookie per finalita pubblicitarie.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              4. Come gestire i cookie
            </h2>
            <p className="text-muted leading-relaxed">
              L&apos;utente puo gestire le preferenze sui cookie attraverso le
              impostazioni del proprio browser. Di seguito i link alle guide dei
              principali browser:
            </p>
            <ul className="space-y-2 ml-6 text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">Chrome:</strong>{" "}
                Impostazioni &gt; Privacy e sicurezza &gt; Cookie
              </li>
              <li>
                <strong className="text-foreground">Firefox:</strong>{" "}
                Impostazioni &gt; Privacy e sicurezza &gt; Cookie
              </li>
              <li>
                <strong className="text-foreground">Safari:</strong>{" "}
                Preferenze &gt; Privacy
              </li>
              <li>
                <strong className="text-foreground">Edge:</strong>{" "}
                Impostazioni &gt; Cookie e autorizzazioni sito
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              La disattivazione dei cookie tecnici potrebbe compromettere il
              corretto funzionamento del sito.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              5. Aggiornamenti
            </h2>
            <p className="text-muted leading-relaxed">
              La presente Cookie Policy puo essere aggiornata periodicamente.
              Invitiamo gli utenti a consultare questa pagina per eventuali
              modifiche.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              6. Contatti
            </h2>
            <p className="text-muted leading-relaxed">
              Per informazioni sui cookie o sulla privacy, contattare{" "}
              <a
                href="mailto:info@ricercai.it"
                className="text-accent hover:underline"
              >
                info@ricercai.it
              </a>
              . Per la privacy policy completa, consultare la{" "}
              <a href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
