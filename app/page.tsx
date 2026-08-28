import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Fence,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Shovel,
} from "lucide-react";
import { DemoPopup } from "@/components/demo-popup";

const phoneHref = "tel:+33752631238";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const emailHref =
  "mailto:sarlhebert50@gmail.com?subject=Demande%20de%20devis%20-%20am%C3%A9nagement%20ext%C3%A9rieur";

const services = [
  {
    icon: Mountain,
    title: "Terrassement",
    text: "Préparation de terrain, mise à niveau et travaux préparatoires pour partir sur des bases solides.",
  },
  {
    icon: Shovel,
    title: "Cours & allées",
    text: "Création et rénovation de vos accès, entrées et stationnements pour un extérieur pratique et soigné.",
  },
  {
    icon: Fence,
    title: "Clôtures & portails",
    text: "Des solutions durables pour délimiter, sécuriser et mettre en valeur votre propriété.",
  },
  {
    icon: Leaf,
    title: "Aménagement paysager",
    text: "Une composition complète de vos extérieurs, pensée selon vos envies, votre terrain et vos usages.",
  },
];

const projects = [
  {
    src: `${basePath}/images/cour-enrobe-gravier.webp`,
    alt: "Cour et entrée de maison aménagées par la SARL HEBERT près de Lessay",
    title: "Cour & accès",
    detail: "Enrobé et finition minérale",
    wide: true,
  },
  {
    src: `${basePath}/images/cloture-portail.webp`,
    alt: "Clôture et portail posés par la SARL HEBERT dans la Manche",
    title: "Clôture & portail",
    detail: "Intimité et caractère",
  },
  {
    src: `${basePath}/images/amenagement-palmiers.webp`,
    alt: "Aménagement paysager avec palmiers réalisé dans la Manche",
    title: "Aménagement paysager",
    detail: "Un extérieur qui change tout",
  },
  {
    src: `${basePath}/images/jardin-paysager.webp`,
    alt: "Jardin paysager minéral avec plantations réalisé par la SARL HEBERT",
    title: "Création sur mesure",
    detail: "Chaque projet est unique",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "SARL HEBERT",
    description:
      "Entreprise d'aménagement extérieur et de terrassement à Lessay dans la Manche.",
    telephone: "+33752631238",
    email: "sarlhebert50@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "446 ZA de Gaslondes",
      postalCode: "50430",
      addressLocality: "Lessay",
      addressRegion: "Manche",
      addressCountry: "FR",
    },
    areaServed: ["Lessay", "Côte des Isles", "Manche"],
    sameAs: ["https://www.facebook.com/profile.php?id=61590000898550"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#accueil" aria-label="SARL HEBERT - Accueil">
            <Image
              src={`${basePath}/images/logo-hebert.png`}
              alt="SARL HEBERT"
              width={450}
              height={500}
              className="brand-logo"
              priority
              unoptimized
            />
            <span className="brand-copy">
              <strong>SARL HEBERT</strong>
              <small>Aménagement extérieur · Lessay</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#prestations">Prestations</a>
            <a href="#realisations">Réalisations</a>
            <a href="#entreprise">L&apos;entreprise</a>
          </nav>
          <a className="header-call" href={phoneHref}>
            <Phone size={17} strokeWidth={2.2} />
            <span>07 52 63 12 38</span>
          </a>
        </div>
      </header>

      <section className="hero" id="accueil">
        <Image
          src={`${basePath}/images/amenagement-cour-lessay.webp`}
          alt="Aménagement complet d'une cour et d'une entrée réalisé par la SARL HEBERT"
          fill
          priority
          sizes="100vw"
          className="hero-image"
          unoptimized
        />
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <MapPin size={15} />
              Entreprise locale à Lessay
            </div>
            <h1>
              Votre extérieur,
              <span> notre savoir-faire.</span>
            </h1>
            <p>
              Terrassement, cours, allées, clôtures et aménagement paysager :
              nous donnons forme à votre projet, de la préparation aux finitions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}>
                <Phone size={19} />
                Parler de mon projet
              </a>
              <a className="button button-ghost" href="#realisations">
                Voir nos réalisations
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Demande de devis">
            <span className="hero-card-kicker">Un projet en tête ?</span>
            <h2>Parlons de votre extérieur.</h2>
            <p>
              Décrivez-nous votre besoin. Nous étudions votre projet et vous
              proposons une solution adaptée à votre terrain.
            </p>
            <a href={emailHref}>
              Demander un devis
              <ChevronRight size={18} />
            </a>
          </aside>
        </div>
      </section>

      <section className="trust-strip" aria-label="Nos engagements">
        <div className="shell trust-grid">
          <div>
            <MapPin />
            <span><strong>Entreprise locale</strong><small>Basée à Lessay</small></span>
          </div>
          <div>
            <Hammer />
            <span><strong>Projet complet</strong><small>Du terrain aux finitions</small></span>
          </div>
          <div>
            <Clock3 />
            <span><strong>Contact direct</strong><small>Une réponse personnalisée</small></span>
          </div>
        </div>
      </section>

      <section className="section services" id="prestations">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <span className="overline">Nos prestations</span>
              <h2>Un seul interlocuteur pour transformer vos extérieurs</h2>
            </div>
            <p>
              Nous réalisons des aménagements cohérents, utiles et durables,
              adaptés au style de votre habitation comme à la réalité de votre terrain.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <span className="service-number">0{index + 1}</span>
                <Icon className="service-icon" size={30} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={emailHref}>
                  Étudier mon projet <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="realisations">
        <div className="shell">
          <div className="section-heading projects-heading">
            <span className="overline overline-light">Nos réalisations</span>
            <h2>Des extérieurs pensés pour être vécus</h2>
            <p>Découvrez quelques projets réalisés dans la Manche.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <figure
                className={`project-card${project.wide ? " project-card-wide" : ""}`}
                key={project.src}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes={project.wide ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}
                  className="project-image"
                  unoptimized
                />
                <figcaption>
                  <strong>{project.title}</strong>
                  <span>{project.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="entreprise">
        <div className="shell about-grid">
          <div className="about-visual">
            <Image
              src={`${basePath}/images/amenagement-cour-lessay.webp`}
              alt="Cour terminée par la SARL HEBERT à Lessay"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-image"
              unoptimized
            />
            <div className="about-badge">
              <MapPin />
              <span><strong>Lessay</strong><small>Manche · Normandie</small></span>
            </div>
          </div>
          <div className="about-copy">
            <span className="overline">SARL HEBERT</span>
            <h2>Votre projet, suivi avec simplicité</h2>
            <p className="about-lead">
              Implantée à Lessay, la SARL HEBERT accompagne chaque client dans
              la création d&apos;un extérieur pratique, harmonieux et adapté à ses envies.
            </p>
            <ul>
              <li><Check /> Un échange direct pour comprendre votre besoin</li>
              <li><Check /> Une solution adaptée au terrain et à vos usages</li>
              <li><Check /> Un projet suivi de la préparation aux finitions</li>
            </ul>
            <a className="text-link" href={phoneHref}>
              Échanger avec nous <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="shell contact-panel">
          <div className="contact-copy">
            <span className="overline overline-light">Votre projet commence ici</span>
            <h2>Envie de transformer votre extérieur ?</h2>
            <p>
              Appelez-nous ou envoyez-nous quelques informations sur votre projet.
              Nous reviendrons vers vous pour en discuter.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-main" href={phoneHref}>
              <span><Phone /></span>
              <small>Appelez-nous</small>
              <strong>07 52 63 12 38</strong>
            </a>
            <a className="contact-secondary" href={emailHref}>
              <Mail size={20} />
              Écrire un e-mail
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Image
              src={`${basePath}/images/logo-hebert.png`}
              alt="SARL HEBERT"
              width={450}
              height={500}
              className="footer-logo"
              unoptimized
            />
            <p>Aménagement extérieur & terrassement à Lessay.</p>
          </div>
          <div>
            <h3>Nous contacter</h3>
            <a href={phoneHref}><Phone size={16} /> 07 52 63 12 38</a>
            <a href="mailto:sarlhebert50@gmail.com"><Mail size={16} /> sarlhebert50@gmail.com</a>
          </div>
          <div>
            <h3>Nous trouver</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=446+ZA+de+Gaslondes+50430+Lessay"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} /> 446 ZA de Gaslondes<br />50430 Lessay
            </a>
          </div>
          <div>
            <h3>Suivez-nous</h3>
            <a
              href="https://www.facebook.com/profile.php?id=61590000898550"
              target="_blank"
              rel="noreferrer"
            >
              <Leaf size={16} /> Facebook
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 SARL HEBERT — Tous droits réservés</span>
          <span>SIRET 105 745 475 00019 · RCS Coutances</span>
        </div>
      </footer>

      <div className="mobile-action-bar">
        <a href={phoneHref}><Phone size={19} /> Appeler</a>
        <a href={emailHref}><Mail size={19} /> Demander un devis</a>
      </div>
      <DemoPopup />
    </main>
  );
}
