// Style reminder: Home composes Arquivo de Performance as a cinematic editorial journey—dark stage, warm paper, vermilion signal and real product imagery.
import { ArrowDown, ArrowRight, BookOpen, Check, ChevronRight, FileText, Grid2X2, Menu, MessageCircle, Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { motos } from "@/data/motos";
import { BrandMark } from "@/components/BrandMark";
import { BookFrame } from "@/components/BookFrame";
import { AssetImage } from "@/components/AssetImage";
import { WhatsAppButton, quoteHref, whatsappHref, type QuoteDetails } from "@/components/WhatsAppButton";
import { catalogFamilies, catalogPriceRanges, familyFromCategory, formatChapter, priceInRange, type CatalogFamily, type PriceRange } from "@/lib/catalog";
import { trackEvent } from "@/lib/analytics";

// Arquivo de Performance: o comercial é a peça principal da capa; texto e CTA conduzem a uma decisão de compra, sem competir com o produto.
const commercialVideo = "/manus-storage/neto-motos-commercial_e09bc38e.mp4";
const commercialPoster = "/manus-storage/neto-motos-commercial-poster_c430828f.jpg";
const coverIndex = 0;

export default function Home() {
  const initialMode = new URLSearchParams(window.location.search).get("mode");
  const [opened, setOpened] = useState(() => initialMode === "book");
  const [activeIndex, setActiveIndex] = useState(coverIndex);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(() => new URLSearchParams(window.location.search).get("quote") === "1");
  const [listMode, setListMode] = useState(() => initialMode === "list");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastUrlMode = useRef(initialMode === "book" || initialMode === "list" ? initialMode : "");

  useEffect(() => {
    const url = new URL(window.location.href);
    const nextMode = listMode ? "list" : opened ? "book" : "";
    if (nextMode === lastUrlMode.current) return;
    if (nextMode) url.searchParams.set("mode", nextMode);
    else url.searchParams.delete("mode");
    window.history.pushState({}, "", url);
    lastUrlMode.current = nextMode;
  }, [listMode, opened]);

  useEffect(() => {
    const onPopState = () => {
      const mode = new URLSearchParams(window.location.search).get("mode");
      const normalizedMode = mode === "book" || mode === "list" ? mode : "";
      lastUrlMode.current = normalizedMode;
      setListMode(normalizedMode === "list");
      setOpened(normalizedMode === "book");
      setIndexOpen(false);
      setAboutOpen(false);
      setQuoteOpen(false);
      setMobileMenuOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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
        setQuoteOpen(false);
        setMobileMenuOpen(false);
        if (listMode) setListMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [listMode]);

  function openCatalog(index = 0) {
    trackEvent("catalog_open", { source: index === 0 ? "cover" : "index", chapter: index + 1 });
    setActiveIndex(index);
    setOpened(true);
    setIndexOpen(false);
    setAboutOpen(false);
    setMobileMenuOpen(false);
    window.setTimeout(() => document.querySelector(".catalog-workspace")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  function openQuote(source: string) {
    trackEvent("quote_open", { source });
    setQuoteOpen(true);
  }

  return (
    <div className={`site-shell ${opened ? "site-shell--opened" : ""}`}>
      <a className="skip-link" href="#catalog-content">Pular para o catálogo</a>
      {listMode ? (
        <ListMode open={listMode} onClose={() => setListMode(false)} onSelect={(index) => { setListMode(false); openCatalog(index); }} onOpenQuote={() => openQuote("list")} />
      ) : !opened ? (
        <Cover total={motos.length} onOpen={() => openCatalog(coverIndex)} onOpenAbout={() => { setAboutOpen(true); setIndexOpen(false); }} onOpenIndex={() => { setIndexOpen(true); setAboutOpen(false); }} onOpenQuote={() => openQuote("cover")} onToggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)} mobileMenuOpen={mobileMenuOpen} />
      ) : (
        <BookFrame motos={motos} activeIndex={activeIndex} onIndexChange={setActiveIndex} onOpenIndex={() => setIndexOpen(true)} onOpenAbout={() => setAboutOpen(true)} onBackToCover={() => { setOpened(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled(!soundEnabled)} onOpenQuote={() => openQuote("book")} />
      )}

      {!listMode && <IndexDrawer open={indexOpen} activeIndex={activeIndex} onClose={() => setIndexOpen(false)} onSelect={(index) => { setIndexOpen(false); openCatalog(index); }} onListMode={() => { setIndexOpen(false); setListMode(true); }} />}
      {!listMode && <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />}
      {!listMode && <QuoteDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />}
      {opened && <a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="Falar com o Neto pelo WhatsApp"><span className="floating-whatsapp__ping" /><span>Falar com o Neto</span></a>}
    </div>
  );
}

function Cover({ total, onOpen, onOpenAbout, onOpenIndex, onOpenQuote, onToggleMenu, mobileMenuOpen }: { total: number; onOpen: () => void; onOpenAbout: () => void; onOpenIndex: () => void; onOpenQuote: () => void; onToggleMenu: () => void; mobileMenuOpen: boolean }) {
  return (
    <main id="catalog-content" className="cover-stage">
      <div className="cover-stage__noise" />
      <div className="cover-stage__grid" aria-hidden="true" />
      <div className="cover-commercial" style={{ backgroundImage: `url(${commercialPoster})` }} aria-hidden="true">
        <video className="cover-commercial__video" autoPlay loop muted playsInline poster={commercialPoster} preload="metadata">
          <source src={commercialVideo} type="video/mp4" />
        </video>
        <span className="cover-commercial__beam" /><span className="cover-commercial__road" /><span className="cover-commercial__grain" />
        <div className="cover-commercial__caption"><span>VÍDEO COMERCIAL / SHI 250</span><b>Veja a linha. Escolha com clareza.</b></div>
      </div>
      <div className="cover-stage__redline" />
      <header className="cover-header">
        <BrandMark light />
        <div className="cover-header__edition">Edição de lançamento <span>•</span> 2026</div>
        <div className={`cover-nav ${mobileMenuOpen ? "cover-nav--open" : ""}`}>
          <button type="button" onClick={onOpenIndex}>Índice</button>
          <button type="button" onClick={onOpenAbout}>Sobre o Neto</button>
          <button type="button" onClick={onOpenQuote}>Orçamento</button>
          <button type="button" className="cover-nav__contact" onClick={onOpen}>Abrir catálogo <ArrowRight size={14} /></button>
        </div>
        <button className="cover-menu-toggle" type="button" onClick={onToggleMenu} aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>
      <div className="cover-vertical">SHINERAY / BRASIL <span>—</span> NETO MOTOS</div>
      <div className="cover-content">
        <div className="cover-copy">
          <div className="cover-kicker"><span className="live-dot" /> catálogo de vendas / {total} modelos Shineray</div>
          <h1><span>Escolha sua</span><em>Shineray.</em><span>Saia com clareza.</span></h1>
          <p>Compare 29 modelos reais, veja preços de referência e fale com o Neto para descobrir qual combina com a sua rotina.</p>
          <button className="open-book-button" type="button" onClick={onOpen}><span className="open-book-button__icon"><BookOpen size={19} strokeWidth={1.4} /></span><span><b>Começar pelo catálogo</b><small>Folheie com orientação do Neto</small></span><span className="open-book-button__arrow"><ArrowRight size={15} /></span></button>
          <a className="cover-sales-cta" href={whatsappHref()} target="_blank" rel="noreferrer"><span>Prefere uma indicação?</span><b>Quero falar com o Neto</b><ArrowRight size={14} /></a>
          <div className="cover-proof" aria-label="Diferenciais do catálogo"><span><b>{total}</b> modelos</span><span><b>fotos</b> oficiais</span><span><b>atendimento</b> direto</span></div>
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
        <div className="about-card__image"><AssetImage src="/manus-storage/neto-portrait-professional_bbafcc75.png" alt="Neto, consultor da Neto Motos" fallbackLabel="Neto Motos" /><span>NETO / CONSULTOR</span></div>
        <div className="about-card__copy"><span className="page-kicker">ATENDIMENTO QUE AJUDA A DECIDIR</span><h2 id="about-title">Escolha com<br /><em>clareza.</em></h2><p>Você fala direto com quem conhece o catálogo, entende sua rotina e ajuda a comparar disponibilidade, condições e o modelo que realmente faz sentido para o seu caminho.</p><div className="about-card__line" /><div className="about-card__contact"><span>Converse agora no WhatsApp</span><b>(11) 97847-3480</b></div><WhatsAppButton label="Quero uma recomendação" /></div>
      </section>
    </div>
  );
}

function ListMode({ open, onClose, onSelect, onOpenQuote }: { open: boolean; onClose: () => void; onSelect: (index: number) => void; onOpenQuote: () => void }) {
  const [family, setFamily] = useState<CatalogFamily>("Todos");
  const [brand, setBrand] = useState("Todas as marcas");
  const [priceRange, setPriceRange] = useState<PriceRange>("Todos");
  const [query, setQuery] = useState("");
  const entries = useMemo(() => motos.map((moto, index) => ({ moto, index })).filter(({ moto }) => {
    const searchable = `${moto.name} ${moto.category} ${moto.description} ${moto.copyLine}`.toLowerCase();
    const matchesQuery = !query.trim() || searchable.includes(query.trim().toLowerCase());
    const matchesFamily = family === "Todos" || familyFromCategory(moto.category) === family;
    const matchesBrand = brand === "Todas as marcas" || brand === "Shineray";
    return matchesQuery && matchesFamily && matchesBrand && priceInRange(moto.price, priceRange);
  }), [brand, family, priceRange, query]);

  function clearFilters() {
    setFamily("Todos");
    setBrand("Todas as marcas");
    setPriceRange("Todos");
    setQuery("");
    trackEvent("catalog_filter_clear");
  }

  return (
    <div className={`list-mode ${open ? "list-mode--open" : ""}`} aria-hidden={!open} inert={!open}>
      <header className="list-mode__header"><BrandMark light compact /><div><span>Modo lista</span><b>Catálogo sem animação</b></div><span className="list-mode__header-note">ARQUIVO / {motos.length} CAPÍTULOS</span><button type="button" className="icon-button" onClick={onClose} aria-label="Fechar modo lista"><X size={18} /></button></header>
      <div className="list-mode__intro"><span className="page-kicker">LEITURA DIRETA / ACESSIBILIDADE</span><h2>Encontre a sua.<br /><em>Compare sem dúvida.</em></h2><p>Veja motos, scooters, elétricas e mobilidade com fotos reais, preços de referência e um caminho direto para confirmar a melhor escolha com o Neto.</p></div>
      <div className="list-mode__filter-panel">
        <label className="list-search"><Search size={16} /><span className="sr-only">Buscar modelo</span><input value={query} onChange={(event) => { setQuery(event.target.value); trackEvent("catalog_search", { has_query: Boolean(event.target.value) }); }} placeholder="Buscar por modelo ou uso" /></label>
        <label className="list-select"><span>Marca</span><select value={brand} onChange={(event) => { setBrand(event.target.value); trackEvent("catalog_filter", { filter: "brand", value: event.target.value }); }}><option>Todas as marcas</option><option>Shineray</option></select></label>
        <label className="list-select"><span>Preço</span><select value={priceRange} onChange={(event) => { setPriceRange(event.target.value as PriceRange); trackEvent("catalog_filter", { filter: "price", value: event.target.value }); }}>{catalogPriceRanges.map((item) => <option key={item}>{item}</option>)}</select></label>
        <span className="list-filter-panel__label"><SlidersHorizontal size={14} /> Estilo</span>
      </div>
      <div className="list-mode__filters" role="tablist" aria-label="Filtrar catálogo por estilo">{catalogFamilies.map((item) => <button key={item} type="button" role="tab" aria-selected={family === item} className={family === item ? "list-filter--active" : ""} onClick={() => { setFamily(item); trackEvent("catalog_filter", { filter: "style", value: item }); }}>{item}</button>)}<span>{entries.length} {entries.length === 1 ? "resultado" : "resultados"}</span><button className="list-filter-clear" type="button" onClick={clearFilters}>Limpar filtros</button></div>
      {entries.length === 0 && <div className="list-empty"><b>Nenhuma moto encontrada.</b><span>Tente outra faixa de preço, estilo ou termo de busca.</span><button type="button" onClick={clearFilters}>Ver o catálogo completo</button></div>}
        <div className="list-mode__grid">{entries.map(({ moto, index }, entryIndex) => <article className="list-card" key={moto.id}><div className="list-card__image"><AssetImage src={moto.images[0].src} alt={moto.images[0].alt} fallbackLabel={moto.name} loading={entryIndex === 0 ? "eager" : "lazy"} /><span>{formatChapter(index, motos.length).split(" /")[0]}</span></div><div className="list-card__body"><span className="page-kicker">{moto.category}</span><h3>{moto.name}</h3><p>{moto.description}</p><div className="list-card__specs">{moto.highlights.slice(0, 3).map((item) => <span key={item}><Check size={12} /> {item}</span>)}</div><div className="list-card__bottom"><b><small>A partir de</small>{moto.price}</b><button type="button" onClick={() => onSelect(index)}>Ver detalhes e condições <ArrowRight size={14} /></button></div></div></article>)}</div>
      <footer className="list-mode__footer"><span>NETO MOTOS / SHINERAY</span><div className="list-mode__footer-actions"><button type="button" className="list-mode__quote" onClick={onOpenQuote}><FileText size={14} /> Pedir orçamento</button><WhatsAppButton compact label="Falar com o Neto" /></div></footer>
    </div>
  );
}

function QuoteDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<QuoteDetails>({ name: "", phone: "", model: "", budget: "", use: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  function updateField(field: keyof QuoteDetails, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(quoteHref(form), "_blank", "noopener,noreferrer");
    trackEvent("quote_submit", { model: form.model || "nao_informado", budget: form.budget || "nao_informado", use: form.use || "nao_informado" });
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  return (
    <div className={`quote-dialog ${open ? "quote-dialog--open" : ""}`} aria-hidden={!open} inert={!open}>
      <button className="overlay-backdrop" type="button" onClick={handleClose} aria-label="Fechar formulário de orçamento" />
      <section className="quote-card" role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <button ref={closeRef} type="button" className="icon-button quote-card__close" onClick={handleClose} aria-label="Fechar formulário"><X size={18} /></button>
        <div className="quote-card__intro">
          <span className="page-kicker">ATENDIMENTO DIRETO / NETO MOTOS</span>
          <h2 id="quote-title">Vamos encontrar<br /><em>a sua moto.</em></h2>
          <p>Preencha o essencial. O Neto recebe seu contexto e responde com disponibilidade, condições e uma recomendação que faça sentido para sua rotina.</p>
          <div className="quote-card__note"><b>(11) 97847-3480</b><span>WhatsApp oficial de atendimento</span></div>
        </div>
        {submitted ? (
          <div className="quote-success">
            <span className="quote-success__mark"><Check size={20} /></span>
            <h3>Solicitação preparada.</h3>
            <p>A conversa foi aberta no WhatsApp com os dados que você informou. Se a nova aba não abriu, use o botão abaixo.</p>
            <a className="whatsapp-button" href={quoteHref(form)} target="_blank" rel="noreferrer">Abrir WhatsApp novamente <ArrowRight size={15} /></a>
            <button className="quote-success__back" type="button" onClick={() => setSubmitted(false)}>Editar informações</button>
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form__row">
              <label><span>Nome</span><input required value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Como podemos chamar você?" /></label>
              <label><span>WhatsApp</span><input required type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="(11) 99999-9999" /></label>
            </div>
            <div className="quote-form__row">
              <label><span>Modelo de interesse</span><select required value={form.model} onChange={(event) => updateField("model", event.target.value)}><option value="">Selecione uma moto</option>{motos.map((moto) => <option key={moto.id} value={moto.name}>{moto.name}</option>)}<option value="Ainda não sei">Ainda não sei — quero indicação</option></select></label>
              <label><span>Faixa de investimento</span><select value={form.budget} onChange={(event) => updateField("budget", event.target.value)}><option value="">Prefiro conversar</option><option>Até R$ 15 mil</option><option>R$ 15 mil a R$ 25 mil</option><option>Acima de R$ 25 mil</option></select></label>
            </div>
            <label><span>Como pretende usar?</span><select value={form.use} onChange={(event) => updateField("use", event.target.value)}><option value="">Escolha uma opção</option><option>Deslocamento na cidade</option><option>Trabalho e entregas</option><option>Viagens e estrada</option><option>Uso misto</option><option>Mobilidade elétrica</option></select></label>
            <label><span>O que você precisa saber?</span><textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Ex.: quero saber entrada, parcelas, cores e prazo de entrega." rows={3} /></label>
            <button className="quote-form__submit" type="submit"><MessageCircle size={17} /> Solicitar orçamento pelo WhatsApp <ArrowRight size={15} /></button>
            <small className="quote-form__privacy">Seus dados serão usados apenas para responder ao seu pedido de atendimento.</small>
          </form>
        )}
      </section>
    </div>
  );
}
