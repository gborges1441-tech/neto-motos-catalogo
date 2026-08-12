// Style reminder: Home composes Arquivo de Performance as a cinematic editorial journey—dark stage, warm paper, vermilion signal and real product imagery.
import { ArrowDown, ArrowLeft, ArrowRight, Check, ChevronRight, ExternalLink, Instagram, Menu, ShieldCheck, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { coverMoto, motos } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { BookFrame } from "@/components/BookFrame";
import { WhatsAppButton, whatsappHref } from "@/components/WhatsAppButton";

const heroAtmosphere = "/manus-storage/neto-motos-hero-atmosphere_488dc940.jpg";
const paperGrain = "/manus-storage/neto-motos-paper-grain_d1ac5370.jpg";
const pageEdge = "/manus-storage/neto-motos-page-edge_1d61e2b4.jpg";
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
    if (!opened) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIndexOpen(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [opened]);

  function openCatalog(index = 0) {
    setActiveIndex(index);
    setOpened(true);
    setMobileMenuOpen(false);
    window.setTimeout(() => document.querySelector(".catalog-workspace")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  return (
    <div className={`site-shell ${opened ? "site-shell--opened" : ""}`}>
      {listMode ? (
        <ListMode open={listMode} onClose={() => setListMode(false)} onSelect={(index) => { setListMode(false); openCatalog(index); }} />
      ) : !opened ? (
        <Cover onOpen={() => openCatalog(coverIndex)} onOpenAbout={() => setAboutOpen(true)} onOpenIndex={() => { setIndexOpen(true); }} onToggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)} mobileMenuOpen={mobileMenuOpen} />
      ) : (
        <BookFrame motos={motos} activeIndex={activeIndex} onIndexChange={setActiveIndex} onOpenIndex={() => setIndexOpen(true)} onOpenAbout={() => setAboutOpen(true)} soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled(!soundEnabled)} />
      )}

      {!listMode && <IndexDrawer open={indexOpen} activeIndex={activeIndex} onClose={() => setIndexOpen(false)} onSelect={(index) => { setIndexOpen(false); openCatalog(index); }} onListMode={() => { setIndexOpen(false); setListMode(true); }} />}
      {!listMode && <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />}
      {opened && <a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="Falar com o Neto pelo WhatsApp"><span className="floating-whatsapp__ping" /><span>Falar com o Neto</span></a>}
    </div>
  );
}

function Cover({ onOpen, onOpenAbout, onOpenIndex, onToggleMenu, mobileMenuOpen }: { onOpen: () => void; onOpenAbout: () => void; onOpenIndex: () => void; onToggleMenu: () => void; mobileMenuOpen: boolean }) {
  return (
    <main className="cover-stage" style={{ backgroundImage: `url(${heroAtmosphere})` }}>
      <div className="cover-stage__noise" />
      <div className="cover-stage__grid" aria-hidden="true" />
      <div className="cover-stage__redline" />
      <header className="cover-header">
        <BrandMark light />
        <div className="cover-header__edition">Edição de lançamento <span>•</span> 2026</div>
        <div className={`cover-nav ${mobileMenuOpen ? "cover-nav--open" : ""}`}>
          <button type="button" onClick={onOpenIndex}>Índice</button>
          <button type="button" onClick={onOpenAbout}>Sobre o Neto</button>
          <button type="button" className="cover-nav__contact" onClick={onOpen}>Abrir catálogo <ArrowRight size={14} /></button>
        </div>
        <button className="cover-menu-toggle" type="button" onClick={onToggleMenu} aria-label="Abrir menu">{mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>
      <div className="cover-vertical">SHINERAY / BRASIL <span>—</span> NETO MOTOS</div>
      <div className="cover-content">
        <div className="cover-copy">
          <div className="cover-kicker"><span className="live-dot" /> catálogo digital premium</div>
          <h1><span>Seu próximo</span><em>capítulo</em><span>começa aqui.</span></h1>
          <p>Uma curadoria de motocicletas reais, atendimento direto e escolhas feitas para seguir em frente.</p>
          <button className="open-book-button" type="button" onClick={onOpen}><span className="open-book-button__icon"><ArrowRight size={19} /></span><span><b>Abrir catálogo</b><small>Folhear a edição 2026</small></span><span className="open-book-button__arrow"><ArrowRight size={15} /></span></button>
        </div>
        <div className="cover-object" aria-hidden="true">
          <div className="cover-object__shadow" />
          <div className="cover-object__folio"><span>NETO MOTOS / PLACA 01</span><img src={coverMoto.images[0].src} alt={`${coverMoto.name} em fotografia oficial`} /><b>{coverMoto.name} <i>{coverMoto.category}</i></b></div>
          <div className="cover-object__meta"><span>ARQUIVO</span><b>01—04</b></div>
          <div className="cover-object__line" />
          <div className="cover-object__hint"><ArrowDown size={14} /> deslize para explorar</div>
        </div>
      </div>
      <footer className="cover-footer"><span>NETO MOTOS / SHINERAY</span><span>ATENDIMENTO DIRETO — (11) 97847-3480</span><span>SCROLL <ArrowDown size={12} /></span></footer>
    </main>
  );
}

function IndexDrawer({ open, activeIndex, onClose, onSelect, onListMode }: { open: boolean; activeIndex: number; onClose: () => void; onSelect: (index: number) => void; onListMode: () => void }) {
  return (
    <div className={`overlay-panel ${open ? "overlay-panel--open" : ""}`} aria-hidden={!open}>
      <button className="overlay-backdrop" type="button" onClick={onClose} aria-label="Fechar índice" />
      <aside className="index-panel" aria-label="Índice do catálogo">
        <div className="index-panel__top"><span className="page-kicker">ÍNDICE / 2026</span><button type="button" className="icon-button" onClick={onClose} aria-label="Fechar"><X size={18} /></button></div>
        <div className="index-panel__heading"><h2>Escolha<br /><em>seu capítulo.</em></h2><p>Folheie por proposta, descubra os detalhes e fale diretamente com o Neto quando encontrar a sua.</p></div>
        <div className="index-list">
          {motos.map((moto, index) => <button key={moto.id} type="button" className={`index-item ${activeIndex === index ? "index-item--active" : ""}`} onClick={() => onSelect(index)}><span className="index-item__num">0{index + 1}</span><img src={moto.images[0].src} alt="" /><span className="index-item__copy"><b>{moto.name}</b><small>{moto.category}</small></span><ChevronRight size={16} /></button>)}
        </div>
        <button type="button" className="index-list-mode" onClick={onListMode}><GridIcon /> Abrir modo lista <span>acessível</span></button>
      </aside>
    </div>
  );
}

function GridIcon() { return <span className="grid-icon" aria-hidden="true"><i /><i /><i /><i /></span>; }

function AboutDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`about-dialog ${open ? "about-dialog--open" : ""}`} aria-hidden={!open}>
      <button className="overlay-backdrop" type="button" onClick={onClose} aria-label="Fechar apresentação" />
      <section className="about-card" role="dialog" aria-modal="true" aria-label="Sobre o Neto">
        <button type="button" className="icon-button about-card__close" onClick={onClose} aria-label="Fechar"><X size={18} /></button>
        <div className="about-card__image"><img src="/manus-storage/neto-portrait_06c154c2.jpg" alt="Neto, da Neto Motos" /><span>NETO / 2026</span></div>
        <div className="about-card__copy"><span className="page-kicker">POR TRÁS DA ESCOLHA</span><h2>Quem é<br /><em>o Neto?</em></h2><p>Atendimento próximo, transparência e compromisso para ajudar cada cliente a encontrar a moto ideal — da primeira pergunta até a entrega.</p><div className="about-card__line" /><div className="about-card__contact"><span>WhatsApp direto</span><b>(11) 97847-3480</b></div><WhatsAppButton label="Falar com o Neto" /></div>
      </section>
    </div>
  );
}

function ListMode({ open, onClose, onSelect }: { open: boolean; onClose: () => void; onSelect: (index: number) => void }) {
  return (
    <div className={`list-mode ${open ? "list-mode--open" : ""}`} aria-hidden={!open}>
      <header className="list-mode__header"><BrandMark light compact /><div><span>Modo lista</span><b>Catálogo sem animação</b></div><button type="button" className="icon-button" onClick={onClose} aria-label="Fechar modo lista"><X size={18} /></button></header>
      <div className="list-mode__intro"><span className="page-kicker">LEITURA DIRETA / ACESSIBILIDADE</span><h2>Todas as motos.<br /><em>Sem pressa.</em></h2><p>Uma alternativa acessível à experiência de folhear. As mesmas fotos, os mesmos dados e um caminho direto para conversar.</p></div>
      <div className="list-mode__grid">{motos.map((moto, index) => <article className="list-card" key={moto.id}><div className="list-card__image"><img src={moto.images[0].src} alt={moto.images[0].alt} /><span>0{index + 1}</span></div><div className="list-card__body"><span className="page-kicker">{moto.category}</span><h3>{moto.name}</h3><p>{moto.description}</p><div className="list-card__specs">{moto.highlights.slice(0, 3).map((item) => <span key={item}><Check size={12} /> {item}</span>)}</div><div className="list-card__bottom"><b><small>A partir de</small>{moto.price}</b><button type="button" onClick={() => onSelect(index)}>Ver capítulo <ArrowRight size={14} /></button></div></div></article>)}</div>
      <footer className="list-mode__footer"><span>NETO MOTOS / SHINERAY</span><WhatsAppButton compact label="Falar com o Neto" /></footer>
    </div>
  );
}
