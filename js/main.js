const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mobile nav
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const isHidden = mobileNav.hasAttribute("hidden");
    if (isHidden) mobileNav.removeAttribute("hidden");
    else mobileNav.setAttribute("hidden", "");
  });

  // close on link click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""));
  });
}

// Simple i18n (DE/EN)
const dict = {
  de: {
    "topbar.note": "Kein Pflegedienst – wir koordinieren.",
    "brand.tag": "Akut-Stabilisierung nach Entlassung",
    "nav.flow": "Ablauf",
    "nav.packages": "Pakete",
    "nav.usecases": "Use-Cases",
    "nav.trust": "Vertrauen",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "cta.book": "15-Min Scoping Call",
    "cta.how": "So funktioniert’s",

    "hero.kicker": "Soforthilfe nach Krankenhaus-Entlassung",
    "hero.h1": "Wir organisieren die Anschluss-Pflege – schnell, strukturiert, privat.",
    "hero.lead": "Anbieter anfragen, Dokumente ordnen, Startplan erstellen und 7–14 Tage stabilisieren. Kein Pflegedienst – wir koordinieren.",
    "hero.proof1": "Startplan & Provider-Sprint",
    "hero.proof2": "Ansprechpartner statt Telefon-Chaos",
    "hero.proof3": "Plan B/C falls Kapazitäten fehlen",
    "hero.disclaimer": "Notfall? Bei akuter Verschlechterung bitte 112 / Notaufnahme. Wir geben keine medizinische Beratung.",

    "card.h": "Schnell-Check (60 Sek.)",
    "card.p": "Damit wir sofort sagen können, ob ambulant realistisch ist.",
    "card.c1": "Entlassdatum + PLZ",
    "card.c2": "Bedarf (Wunde/Medikation/Hilfsmittel/Betreuung)",
    "card.c3": "1 Kontaktperson erreichbar",
    "card.c4": "Kasse/Versicherung (GKV/PKV)",
    "card.cta": "Jetzt starten",
    "card.call": "Anrufen",
    "note.title": "Wichtig:",
    "note.text": "Wir garantieren keine Kapazitäten – wir koordinieren maximal und transparent.",

    "flow.kicker": "Ablauf",
    "flow.h2": "Schritt für Schritt – vom Erstkontakt bis Stabilisierung",
    "flow.s1t": "10-Min Pre-Check",
    "flow.s1p": "PLZ, Entlassdatum, Bedarf, Kontaktperson, realistischer Pfad.",
    "flow.s2t": "Scoping Call",
    "flow.s2p": "Use-Case zuordnen, Paket & Timebox, Plan A/B/C.",
    "flow.s3t": "Onboarding & sichere Dokumente",
    "flow.s3p": "Einwilligung (DSGVO), optional Vollmacht, Zahlung, Upload.",
    "flow.s4t": "Provider-Sprint",
    "flow.s4p": "Parallel anfragen, nachhaken (24–48h), Alternativen.",
    "flow.s5t": "Start & Stabilisierung (7–14 Tage)",
    "flow.s5p": "Updates, Plan-B-Wechsel, Übergabebericht & Next Steps.",

    "pkg.kicker": "Pakete",
    "pkg.h2": "Klarer Scope. Klare Deliverables. Transparente Timebox.",
    "pkg.private": "privat",
    "pkg.qsub": "Wenn Entlassung sehr kurzfristig ist.",
    "pkg.q1": "Startplan + Prioritäten",
    "pkg.q2": "Provider-Anfragen (Welle 1/2)",
    "pkg.q3": "Dokumenten-Tracker",
    "pkg.q4": "Plan B/C vorbereitet",
    "pkg.best": "Meist gewählt",
    "pkg.stab": "Stabilisierung",
    "pkg.ssub": "Typischer Entlassfall (ambulant).",
    "pkg.s1": "Koordination & Nachhaken",
    "pkg.s2": "Hilfsmittel/Verordnung-Workflow",
    "pkg.s3": "Regelmäßige Status-Updates",
    "pkg.s4": "Übergabebericht + Next Steps",
    "pkg.complex": "Komplex",
    "pkg.csub": "Übergangslösungen & mehrere Stakeholder.",
    "pkg.up": "bis 30 Tage",
    "pkg.c1": "Kurzzeitpflege/Reha-Pfad",
    "pkg.c2": "Pflegegrad-Enabler (organisatorisch)",
    "pkg.c3": "Mehr Intensität + Eskalationen",
    "pkg.c4": "Stabiler Übergabe-Plan",
    "pkg.cta": "Anfragen",
    "pkg.fine": "Hinweis: Keine Pflege-/Behandlungsleistung. Wir koordinieren Anbieter und Prozesse. Preise sind Beispiele – final nach Scoping.",

    "uc.kicker": "Use-Cases",
    "uc.h2": "Wann wir besonders helfen",
    "uc.u1t": "Wundversorgung / Verbandwechsel",
    "uc.u1p": "Koordination HKP/Anbieter + Verordnung-Workflow.",
    "uc.u2t": "Medikamentengabe / Injektionen",
    "uc.u2p": "Plan, Zeitfenster, zuverlässiger Start.",
    "uc.u3t": "Hilfsmittel & Mobilität",
    "uc.u3p": "Pflegebett/Rollator: Verordnung → Lieferung → Aufbau.",
    "uc.u4t": "Demenz & Angehörigen-Entlastung",
    "uc.u4p": "Struktur, passende Angebote (z. B. §45b), Entlastung.",
    "uc.u5t": "Rush-Entlassung (Fr/Feiertag)",
    "uc.u5p": "Schnelles Scoping, Plan A/B/C, transparente Updates.",
    "uc.u6t": "Übergangslösungen",
    "uc.u6p": "Kurzzeitpflege/Reha-Anschluss koordinieren.",

    "trust.kicker": "Vertrauen",
    "trust.h2": "Seriös. Transparent. Datenschutz-klar.",
    "trust.t1": "Datenschutz by Design",
    "trust.p1": "Gesundheitsdaten nur mit Einwilligung, minimaler Zugriff, sichere Übermittlung.",
    "trust.t2": "Klare Abgrenzung",
    "trust.p2": "Wir sind kein Pflegedienst. Wir koordinieren Anbieter und Prozesse.",
    "trust.t3": "Messbare Deliverables",
    "trust.p3": "Startplan, Dokumenten-Tracker, Status-Updates, Übergabebericht.",
    "quote.t": "Beispiel-Feedback (Platzhalter):",
    "quote.p": "„Ohne euch hätten wir das niemals so schnell organisiert. Endlich ein Plan und klare Updates.“",
    "quote.s": "— Angehörige, anonymisiert",

    "faq.h2": "Häufige Fragen",
    "faq.q1": "Seid ihr ein Pflegedienst?",
    "faq.a1": "Nein. Wir koordinieren. Pflege/Behandlung machen zugelassene Anbieter.",
    "faq.q2": "Garantiert ihr einen Platz / einen Pflegedienst?",
    "faq.a2": "Nein. Wir garantieren keine Kapazitäten. Wir koordinieren maximal, parallel und transparent mit Plan B/C.",
    "faq.q3": "Wie schnell könnt ihr starten?",
    "faq.a3": "Typisch innerhalb von 24–48h mit Startplan und ersten Anfragen – je nach Fall und Dokumentenlage.",
    "faq.q4": "Wie läuft die Zahlung?",
    "faq.a4": "Nach Scoping vereinbaren wir Paket/Timebox. Zahlung per Rechnung oder Online-Zahlung (je nach Setup).",

    "contact.kicker": "Kontakt",
    "contact.h2": "Starten wir mit einem 15-Min Scoping Call",
    "contact.leftT": "So erreichst du uns",
    "contact.leftP": "Für schnelle Einschätzung: Entlassdatum, PLZ, Bedarf, Versicherung, Kontaktperson.",
    "contact.call": "Anrufen",
    "contact.mail": "E-Mail",
    "contact.noteT": "Pro-Tipp:",
    "contact.noteP": "Wenn ihr Entlassbrief/Medikationsplan schon habt: haltet ihn bereit – das spart Zeit.",

    "form.h": "Kurzformular (Platzhalter)",
    "form.name": "Name",
    "form.phone": "Telefon",
    "form.plz": "PLZ",
    "form.date": "Entlassdatum",
    "form.need": "Bedarf (kurz)",
    "form.consent": "Ich akzeptiere die Datenschutzhinweise.",
    "form.send": "Anfrage senden",
    "form.fine": "Dieses Formular ist ein Platzhalter. Für produktiv: DSGVO-konformes Formular + sichere Übermittlung.",

    "footer.tag": "Koordination nach Krankenhaus-Entlassung (privat)",
    "footer.disc": "Keine medizinische Beratung. In Notfällen 112.",
    "footer.links": "Links",
    "footer.legal": "Rechtliches"
  },

  en: {
    "topbar.note": "Not a care provider — we coordinate.",
    "brand.tag": "Post-discharge stabilization",
    "nav.flow": "How it works",
    "nav.packages": "Packages",
    "nav.usecases": "Use cases",
    "nav.trust": "Trust",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.book": "Book 15-min scoping call",
    "cta.how": "How it works",

    "hero.kicker": "Help right after hospital discharge",
    "hero.h1": "We coordinate post-discharge care — fast, structured, private.",
    "hero.lead": "We contact providers, organize documents, create a start plan, and stabilize for 7–14 days. Not a care service — coordination only.",
    "hero.proof1": "Start plan & provider sprint",
    "hero.proof2": "One point of contact",
    "hero.proof3": "Plan B/C if capacity is tight",
    "hero.disclaimer": "Emergency? If symptoms worsen, call 112 / emergency care. No medical advice.",

    "card.h": "Quick check (60 sec.)",
    "card.p": "So we can quickly tell if home care is realistic.",
    "card.c1": "Discharge date + ZIP",
    "card.c2": "Needs (wound/meds/equipment/support)",
    "card.c3": "One reachable contact person",
    "card.c4": "Insurance (public/private)",
    "card.cta": "Get started",
    "card.call": "Call now",
    "note.title": "Important:",
    "note.text": "We don’t guarantee capacity — we coordinate transparently with Plan B/C.",

    "flow.kicker": "How it works",
    "flow.h2": "Step-by-step — from first contact to stabilization",
    "flow.s1t": "10-min pre-check",
    "flow.s1p": "ZIP, discharge date, needs, contact person, realistic path.",
    "flow.s2t": "Scoping call",
    "flow.s2p": "Assign use case, choose package & timebox, Plan A/B/C.",
    "flow.s3t": "Onboarding & secure documents",
    "flow.s3p": "Consent (GDPR), optional POA, payment, upload.",
    "flow.s4t": "Provider sprint",
    "flow.s4p": "Parallel outreach, follow-ups (24–48h), alternatives.",
    "flow.s5t": "Start & stabilization (7–14 days)",
    "flow.s5p": "Updates, plan changes, handover report & next steps.",

    "pkg.kicker": "Packages",
    "pkg.h2": "Clear scope. Clear deliverables. Clear timebox.",
    "pkg.private": "private",
    "pkg.qsub": "When discharge is very short-notice.",
    "pkg.q1": "Start plan + priorities",
    "pkg.q2": "Provider outreach (waves 1/2)",
    "pkg.q3": "Document tracker",
    "pkg.q4": "Plan B/C ready",
    "pkg.best": "Most chosen",
    "pkg.stab": "Stabilization",
    "pkg.ssub": "Typical discharge case (home setting).",
    "pkg.s1": "Coordination & follow-ups",
    "pkg.s2": "Equipment/prescription workflow",
    "pkg.s3": "Regular status updates",
    "pkg.s4": "Handover report + next steps",
    "pkg.complex": "Complex",
    "pkg.csub": "Transitions & multiple stakeholders.",
    "pkg.up": "up to 30 days",
    "pkg.c1": "Short-term care / rehab pathway",
    "pkg.c2": "Care grade enablement (admin)",
    "pkg.c3": "Higher intensity & escalations",
    "pkg.c4": "Stable transition plan",
    "pkg.cta": "Request",
    "pkg.fine": "Note: We don’t provide care/treatment. We coordinate providers and processes. Prices are examples — final after scoping.",

    "uc.kicker": "Use cases",
    "uc.h2": "When we’re especially helpful",
    "uc.u1t": "Wound care / dressing changes",
    "uc.u1p": "Coordinate providers + prescriptions workflow.",
    "uc.u2t": "Medication / injections",
    "uc.u2p": "Plan, time windows, reliable start.",
    "uc.u3t": "Equipment & mobility",
    "uc.u3p": "Care bed/walker: prescription → delivery → setup.",
    "uc.u4t": "Dementia & caregiver relief",
    "uc.u4p": "Structure, suitable services, relief options.",
    "uc.u5t": "Rush discharge (Fri/holiday)",
    "uc.u5p": "Fast scoping, Plan A/B/C, transparent updates.",
    "uc.u6t": "Transition solutions",
    "uc.u6p": "Short-term care / rehab coordination.",

    "trust.kicker": "Trust",
    "trust.h2": "Serious. Transparent. Privacy-clear.",
    "trust.t1": "Privacy by design",
    "trust.p1": "Health data only with consent, minimal access, secure transfer.",
    "trust.t2": "Clear boundaries",
    "trust.p2": "We are not a care provider. We coordinate providers and processes.",
    "trust.t3": "Measurable deliverables",
    "trust.p3": "Start plan, document tracker, updates, handover report.",
    "quote.t": "Sample feedback (placeholder):",
    "quote.p": "“We couldn’t have organized this so quickly. Finally a plan and clear updates.”",
    "quote.s": "— Family member, anonymized",

    "faq.h2": "Frequently asked",
    "faq.q1": "Are you a care provider?",
    "faq.a1": "No. We coordinate. Licensed providers deliver care/treatment.",
    "faq.q2": "Do you guarantee a provider/slot?",
    "faq.a2": "No. We don’t guarantee capacity. We coordinate transparently with Plan B/C.",
    "faq.q3": "How fast can you start?",
    "faq.a3": "Typically within 24–48h with a start plan and initial outreach (depends on documents).",
    "faq.q4": "How does payment work?",
    "faq.a4": "After scoping we agree on package/timebox. Payment via invoice or online payment (depending on setup).",

    "contact.kicker": "Contact",
    "contact.h2": "Let’s start with a 15-min scoping call",
    "contact.leftT": "How to reach us",
    "contact.leftP": "For a quick assessment: discharge date, ZIP, needs, insurance, contact person.",
    "contact.call": "Call",
    "contact.mail": "Email",
    "contact.noteT": "Pro tip:",
    "contact.noteP": "If you already have discharge letter/med plan, keep it ready — saves time.",

    "form.h": "Short form (placeholder)",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.plz": "ZIP",
    "form.date": "Discharge date",
    "form.need": "Needs (short)",
    "form.consent": "I accept the privacy notice.",
    "form.send": "Send request",
    "form.fine": "This form is a placeholder. For production: GDPR-compliant form + secure transfer.",

    "footer.tag": "Post-discharge coordination (private)",
    "footer.disc": "No medical advice. In emergencies call 112.",
    "footer.links": "Links",
    "footer.legal": "Legal"
  }
};

let currentLang = "de";

function applyI18n(lang){
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(node => {
    const key = node.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (val) node.textContent = val;
  });

  // special: consent text contains link -> keep HTML
  const consent = document.querySelector("[data-i18n='form.consent']");
  if (consent) {
    consent.innerHTML = (lang === "de")
      ? `Ich akzeptiere die <a href="datenschutz.html">Datenschutzhinweise</a>.`
      : `I accept the <a href="datenschutz.html">privacy notice</a>.`;
  }

  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.textContent = lang.toUpperCase();
  document.documentElement.lang = lang;
}

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = (currentLang === "de") ? "en" : "de";
    applyI18n(currentLang);
  });
}

applyI18n(currentLang);
