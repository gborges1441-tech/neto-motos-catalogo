// Style reminder: Home composes Arquivo de Performance as a cinematic editorial journey—dark stage, warm paper, vermilion signal and real product imagery.
import { ArrowDown, ArrowRight, BookOpen, Check, ChevronRight, Grid2X2, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { coverMoto, motos } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { BookFrame } from "@/components/BookFrame";
import { AssetImage } from "@/components/AssetImage";
import { WhatsAppButton, whatsappHref } from "@/components/WhatsAppButton";
import { catalogFamilies, familyFromCategory, formatChapter, type CatalogFamily } from "@/lib/catalog";

const heroAtmosphere = "/manus-storage/neto-motos-hero-atmosphere_488dc940.jpg";
const coverIndex = 0;

export default function Home() {
  const [opened, setOpened] = useState(() => new URLSearchParams(window.location.search).get("mode") === "book");
  const [activeIndex, setActiveIndex] = useState(coverIndex);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [listMode, setListMode] = useState(() => new URLSearchParams(window.location.search).get("mode") === "list");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (listMode) url.searchParams.set("mode", "list");
    else if (opened) url.searchParams.set("mode", "book");
    else url.searchParams.delete("mode");
    window.history.replaceState({}, "", url);
  }, [listMode, opened]);

  useEffect(() => {
    document.title = listMode
      ? "Neto Motos — Modo lista | Catálogo 2026"
      : opened
        ? `${motos[activeIndex]?.name ?? "Catálogo"} — Neto Motos | Edição 2026`
        : "Neto Motos — Shineray | Catálogo 2026";
  }, [activeIndex, listMode, opened]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIndexOpen(false);
        setAboutOpen(false);
        setMobileMenuOpen(false);
        if (listMode) setListMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [listMode]);

  function openCatalog(index = 0) {
    setActiveIndex(index);
    setOpened(true);
    setIndexOpen(false);
    setAboutOpen(false);
    setMobileMenuOpen(false);
    window.setTimeout(() => document.querySelector(".catalog-workspace")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  return (
    <div className={`site-shell ${opened ? "site-shell--opened" : ""}`}>
      <a className="skip-link" href="#catalog-content">Pular para o catálogo</a>
      {listMode ? (
        <ListMode open={listMode} onClose={() => setListMode(false)} onSelect={(index) => { setListMode(false); openCatalog(index); }} />
      ) : !opened ? (
        <Cover total={motos.length} onOpen={() => openCatalog(coverIndex)} onOpenAbout={() => { setAboutOpen(true); setIndexOpen(false); }} onOpenIndex={() => { setIndexOpen(true); setAboutOpen(false); }} onToggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)} mobileMenuOpen={mobileMenuOpen} />
      ) : (
        <BookFrame motos={motos} activeIndex={activeIndex} onIndexChange={setActiveIndex} onOpenIndex={() => setIndexOpen(true)} onOpenAbout={() => setAboutOpen(true)} soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled(!soundEnabled)} />
      )}

      {!listMode && <IndexDrawer open={indexOpen} activeIndex={activeIndex} onClose={() => setIndexOpen(false)} onSelect={(index) => { setIndexOpen(false); openCatalog(index); }} onListMode={() => { setIndexOpen(false); setListMode(true); }} />}
      {!listMode && <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />}
      {opened && <a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="Falar com o Neto pelo WhatsApp"><span className="floating-whatsapp__ping" /><span>Falar com o Neto</span></a>}
    </div>
  );
}

function Cover({ total, onOpen, onOpenAbout, onOpenIndex, onToggleMenu, mobileMenuOpen }: { total: number; onOpen: () => void; onOpenAbout: () => void; onOpenIndex: () => void; onToggleMenu: () => void; mobileMenuOpen: boolean }) {
  return (
    <main id="catalog-content" className="cover-stage" style={{ backgroundImage: `url(${heroAtmosphere})` }}>
      <div className="cover-stage__noise" />
      <div className="cover-stage__grid" aria-hidden="true" />
      <div className="cover-motion" aria-hidden="true"><AssetImage src={coverMoto.images[1]?.src ?? coverMoto.images[0].src} alt="" fallbackLabel={coverMoto.name} fetchPriority="high" /><span className="cover-motion__beam" /><span className="cover-motion__grain" /></div>
      <div className="cover-stage__redline" />
      <header className="cover-header">
        <BrandMark light />
        <div className="cover-header__edition">Edição de lançamento <span>•</span> 2026</div>
        <div className={`cover-nav ${mobileMenuOpen ? "cover-nav--open" : ""}`}>
          <button type="button" onClick={onOpenIndex}>Índice</button>
          <button type="button" onClick={onOpenAbout}>Sobre o Neto</button>
          <button type="button" className="cover-nav__contact" onClick={onOpen}>Abrir catálogo <ArrowRight size={14} /></button>
        </div>
        <button className="cover-menu-toggle" type="button" onClick={onToggleMenu} aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>
      <div className="cover-vertical">SHINERAY / BRASIL <span>—</span> NETO MOTOS</div>
      <div className="cover-content">
        <div className="cover-copy">
          <div className="cover-kicker"><span className="live-dot" /> catálogo digital premium / {total} capítulos</div>
          <h1><span>Seu próximo</span><em>capítulo</em><span>começa aqui.</span></h1>
          <p>Uma curadoria de motocicletas reais, atendimento direto e escolhas feitas para seguir em frente.</p>
          <button className="open-book-button" type="button" onClick={onOpen}><span className="open-book-button__icon"><BookOpen size={19} strokeWidth={1.4} /></span><span><b>Abrir catálogo</b><small>Folhear a edição 2026</small></span><span className="open-book-button__arrow"><ArrowRight size={15} /></span></button>
          <div className="cover-proof" aria-label="Diferenciais do catálogo"><span><b>{total}</b> capítulos</span><span><b>100%</b> fotos oficiais</span><span><b>direto</b> no WhatsApp</span></div>
        </div>
        <div className="cover-object" aria-hidden="true">
          <div className="cover-object__shadow" />
          <div className="cover-object__page-stack" />
          <div className="cover-object__folio"><span>NETO MOTOS / PLACA 01</span><AssetImage src={coverMoto.images[0].src} alt="" fallbackLabel={coverMoto.name} /><b>{coverMoto.name} <i>{coverMoto.category}</i></b></div>
          <div className="cover-object__meta"><span>ARQUIVO / CAPÍTULOS</span><b>{formatChapter(0, total)}</b></div>
          <div className="cover-object__line" />
          <div className="cover-object__hint"><ArrowDown size={14} /> deslize para explorar</div>
        </div>
      </div>
      <footer className="cover-footer"><span>NETO MOTOS / SHINERAY</span><span>ATENDIMENTO DIRETO — (11) 97847-3480</span><span>SCROLL <ArrowDown size={12} /></span></footer>
    </main>
  );
}

function IndexDrawer({ open, activeIndex, onClose, onSelect, onListMode }: { open: boolean; activeIndex: number; onClose: () => void; onSelect: (index: number) => void; onListMode: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => previousFocus.current?.focus());
    };
  }, [open]);

  return (
    <div className={`overlay-panel ${open ? "overlay-panel--open" : ""}`} aria-hidden={!open} inert={!open}>
      <button className="overlay-backdrop" type="button" onClick={onClose} aria-label="Fechar índice" />
      <aside className="index-panel" role="dialog" aria-modal="true" aria-labelledby="index-title">
        <div className="index-panel__top"><span className="page-kicker">ÍNDICE / 2026</span><button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Fechar índice"><X size={18} /></button></div>
        <div className="index-panel__heading"><h2 id="index-title">Escolha<br /><em>seu capítulo.</em></h2><p>Folheie por proposta, descubra os detalhes e fale diretamente com o Neto quando encontrar a sua.</p></div>
        <div className="index-list">
          {motos.map((moto, index) => <button key={moto.id} type="button" className={`index-item ${activeIndex === index ? "index-item--active" : ""}`} onClick={() => onSelect(index)} aria-current={activeIndex === index ? "page" : undefined}><span className="index-item__num">{formatChapter(index, motos.length).split(" /")[0]}</span><AssetImage className="index-item__image" src={moto.images[0].src} alt="" fallbackLabel={moto.name} loading="lazy" /><span className="index-item__copy"><b>{moto.name}</b><small>{moto.category}</small></span><ChevronRight size={16} /></button>)}
        </div>
        <button type="button" className="index-list-mode" onClick={onListMode}><Grid2X2 size={15} /> Abrir modo lista <span>acessível</span></button>
      </aside>
    </div>
  );
}

function AboutDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => previousFocus.current?.focus());
    };
  }, [open]);

  return (
    <div className={`about-dialog ${open ? "about-dialog--open" : ""}`} aria-hidden={!open} inert={!open}>
      <button className="overlay-backdrop" type="button" onClick={onClose} aria-label="Fechar apresentação" />
      <section className="about-card" role="dialog" aria-modal="true" aria-labelledby="about-title">
        <button ref={closeRef} type="button" className="icon-button about-card__close" onClick={onClose} aria-label="Fechar apresentação"><X size={18} /></button>
        <div className="about-card__image"><AssetImage src="/manus-storage/neto-portrait_06c154c2.jpg" alt="Neto, da Neto Motos" fallbackLabel="Neto Motos" /><span>NETO / 2026</span></div>
        <div className="about-card__copy"><span className="page-kicker">POR TRÁS DA ESCOLHA</span><h2 id="about-title">Quem é<br /><em>o Neto?</em></h2><p>Atendimento próximo, transparência e compromisso para ajudar cada cliente a encontrar a moto ideal — da primeira pergunta até a entrega.</p><div className="about-card__line" /><div className="about-card__contact"><span>WhatsApp direto</span><b>(11) 97847-3480</b></div><WhatsAppButton label="Falar com o Neto" /></div>
      </section>
    </div>
  );
}

function ListMode({ open, onClose, onSelect }: { open: boolean; onClose: () => void; onSelect: (index: number) => void }) {
  const [family, setFamily] = useState<CatalogFamily>("Todos");
  const entries = motos.map((moto, index) => ({ moto, index })).filter(({ moto }) => family === "Todos" || familyFromCategory(moto.category) === family);

  return (
    <div className={`list-mode ${open ? "list-mode--open" : ""}`} aria-hidden={!open} inert={!open}>
      <header className="list-mode__header"><BrandMark light compact /><div><span>Modo lista</span><b>Catálogo sem animação</b></div><span className="list-mode__header-note">ARQUIVO / {motos.length} CAPÍTULOS</span><button type="button" className="icon-button" onClick={onClose} aria-label="Fechar modo lista"><X size={18} /></button></header>
      <div className="list-mode__intro"><span className="page-kicker">LEITURA DIRETA / ACESSIBILIDADE</span><h2>Toda a linha.<br /><em>Sem pressa.</em></h2><p>Uma alternativa acessível à experiência de folhear. Motos, scooters, elétricas e mobilidade com fotos reais, dados claros e um caminho direto para conversar.</p></div>
      <div className="list-mode__filters" role="tablist" aria-label="Filtrar catálogo por família">{catalogFamilies.map((item) => <button key={item} type="button" role="tab" aria-selected={family === item} className={family === item ? "list-filter--active" : ""} onClick={() => setFamily(item)}>{item}</button>)}<span>{entries.length} capítulos</span></div>
      <div className="list-mode__grid">{entries.map(({ moto, index }) => <article className="list-card" key={moto.id}><div className="list-card__image"><AssetImage src={moto.images[0].src} alt={moto.images[0].alt} fallbackLabel={moto.name} loading="lazy" /><span>{formatChapter(index, motos.length).split(" /")[0]}</span></div><div className="list-card__body"><span className="page-kicker">{moto.category}</span><h3>{moto.name}</h3><p>{moto.description}</p><div className="list-card__specs">{moto.highlights.slice(0, 3).map((item) => <span key={item}><Check size={12} /> {item}</span>)}</div><div className="list-card__bottom"><b><small>A partir de</small>{moto.price}</b><button type="button" onClick={() => onSelect(index)}>Ver capítulo <ArrowRight size={14} /></button></div></div></article>)}</div>
      <footer className="list-mode__footer"><span>NETO MOTOS / SHINERAY</span><WhatsAppButton compact label="Falar com o Neto" /></footer>
    </div>
  );
}
