import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy di RicercAI S.r.l. ai sensi del GDPR. Finalita del trattamento, base giuridica, diritti degli interessati.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://ricercai.it/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://ricercai.it" },
          { name: "Privacy Policy", url: "https://ricercai.it/privacy" },
        ]}
      />

      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose-custom">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-8">
            Ultimo aggiornamento: 9 aprile 2026
          </p>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              1. Titolare del trattamento
            </h2>
            <p className="text-muted leading-relaxed">
              Il titolare del trattamento dei dati personali e RicercAI S.r.l.,
              con sede operativa a Padova, Italia.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Email di contatto:</strong>{" "}
              <a
                href="mailto:info@ricercai.it"
                className="text-accent hover:underline"
              >
                info@ricercai.it
              </a>
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              2. Dati raccolti e finalita del trattamento
            </h2>
            <p className="text-muted leading-relaxed">
              Raccogliamo i seguenti dati personali esclusivamente per le
              finalita indicate:
            </p>
            <ul className="space-y-2 ml-6 text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Dati di contatto (nome, cognome, email, azienda, sito web):
                </strong>{" "}
                raccolti tramite il modulo di contatto per rispondere alle
                richieste e fornire i servizi richiesti.
              </li>
              <li>
                <strong className="text-foreground">
                  Dati di navigazione (indirizzo IP, browser, pagine visitate):
                </strong>{" "}
                raccolti automaticamente tramite cookie tecnici per garantire il
                funzionamento del sito.
              </li>
              <li>
                <strong className="text-foreground">
                  Dati analytics aggregati:
                </strong>{" "}
                se presenti, utilizzati per analizzare le performance del sito in
                forma anonima e aggregata.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              3. Base giuridica del trattamento
            </h2>
            <p className="text-muted leading-relaxed">
              Il trattamento dei dati personali si basa sulle seguenti basi
              giuridiche ai sensi dell&apos;art. 6 del GDPR:
            </p>
            <ul className="space-y-2 ml-6 text-muted leading-relaxed">
              <li>
                <strong className="text-foreground">Consenso</strong> (art. 6,
                par. 1, lett. a): per l&apos;invio di comunicazioni di marketing,
                ove applicabile.
              </li>
              <li>
                <strong className="text-foreground">
                  Esecuzione di un contratto o misure precontrattuali
                </strong>{" "}
                (art. 6, par. 1, lett. b): per rispondere alle richieste di
                contatto e fornire i servizi richiesti.
              </li>
              <li>
                <strong className="text-foreground">Interesse legittimo</strong>{" "}
                (art. 6, par. 1, lett. f): per il funzionamento tecnico del sito
                e la prevenzione di abusi.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              4. Conservazione dei dati
            </h2>
            <p className="text-muted leading-relaxed">
              I dati personali sono conservati per il tempo strettamente
              necessario al raggiungimento delle finalita per cui sono stati
              raccolti, e comunque non oltre 24 mesi dall&apos;ultimo contatto, salvo
              obblighi di legge che ne richiedano una conservazione piu
              prolungata.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              5. Condivisione dei dati
            </h2>
            <p className="text-muted leading-relaxed">
              I dati personali non vengono venduti a terzi. Possono essere
              condivisi con:
            </p>
            <ul className="space-y-2 ml-6 text-muted leading-relaxed">
              <li>
                Fornitori di servizi tecnici (hosting, email) che agiscono come
                responsabili del trattamento, vincolati da accordi contrattuali
                conformi al GDPR.
              </li>
              <li>
                Autorita competenti, ove richiesto dalla legge.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              6. Diritti degli interessati
            </h2>
            <p className="text-muted leading-relaxed">
              Ai sensi degli articoli 15-22 del GDPR, l&apos;interessato ha il
              diritto di:
            </p>
            <ul className="space-y-2 ml-6 text-muted leading-relaxed">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica di dati inesatti</li>
              <li>
                Richiedere la cancellazione dei dati (diritto all&apos;oblio)
              </li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Richiedere la portabilita dei dati</li>
              <li>Opporsi al trattamento</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>
                Proporre reclamo al Garante per la protezione dei dati personali
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              Per esercitare i propri diritti, scrivere a{" "}
              <a
                href="mailto:info@ricercai.it"
                className="text-accent hover:underline"
              >
                info@ricercai.it
              </a>
              .
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              7. Cookie
            </h2>
            <p className="text-muted leading-relaxed">
              Per informazioni dettagliate sull&apos;utilizzo dei cookie, consultare
              la nostra{" "}
              <a href="/cookie" className="text-accent hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              8. Modifiche alla presente informativa
            </h2>
            <p className="text-muted leading-relaxed">
              RicercAI si riserva il diritto di aggiornare la presente
              informativa in qualsiasi momento. Le modifiche saranno pubblicate
              su questa pagina con indicazione della data di ultimo
              aggiornamento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold mt-8 mb-3">
              9. Contatto DPO
            </h2>
            <p className="text-muted leading-relaxed">
              Per qualsiasi questione relativa alla protezione dei dati
              personali, e possibile contattare il responsabile della protezione
              dei dati all&apos;indirizzo{" "}
              <a
                href="mailto:info@ricercai.it"
                className="text-accent hover:underline"
              >
                info@ricercai.it
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
