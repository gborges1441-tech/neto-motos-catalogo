/**
 * Direção visual: Arquivo de Performance / neo-editorial automotivo.
 * Dados: somente modelos e componentes confirmados nas páginas oficiais; sem placeholders de produto.
 */
import type { MotoDetail } from "@/data/motos";

const source = (slug: string) => `https://www.shineray.com.br/produto/${slug}/`;
const detail = (title: string, headline: string, description: string, slug: string): MotoDetail => ({ title, headline, description, source: source(slug) });

export const additionalGalleryIds = [
  "sbm-400ss", "sbm-600v", "sbm-250t", "denver", "sbm-600", "sbm-600t", "sbm-600rc", "sbm-400rr", "iron", "titanium", "storm-200-efi",
] as const;

export const additionalHeroImages: Record<string, string> = {
  "sbm-400ss": "/manus-storage/02-Galeria-SBM-400ss-1-1_a45c41bf.webp",
  "sbm-600v": "/manus-storage/10-Galeria-SBM-600V_959c0344.webp",
  "sbm-250t": "/manus-storage/07-05-1_83529590.webp",
  denver: "/manus-storage/03-Galeria-Denver-2-6_5647d28c.webp",
  "sbm-600": "/manus-storage/09-Galeria-05-SBM-600C_ee811fe6.webp",
  "sbm-600t": "/manus-storage/00-SBM-600T-official-hero_f20236e0.webp",
  "sbm-600rc": "/manus-storage/05-Galeria-SBM-600R-5-scaled_9a2ac64b.webp",
  "sbm-400rr": "/manus-storage/00-SBM-400RR-official-hero_7252ff7d.webp",
  iron: "/manus-storage/02-Galeria-Iron-10-3_f971c541.webp",
  titanium: "/manus-storage/02-Galeria-Titanium-1-3_5a9b00c8.webp",
  "storm-200-efi": "/manus-storage/04-02_d8c81183.webp",
};

export const additionalEditorialDetails: Record<string, MotoDetail[]> = {
  "sbm-400ss": [
    detail("PAINEL TFT", "Informação clara para mudar o ritmo.", "O painel TFT organiza os dados essenciais em uma leitura moderna, ajudando você a manter o foco quando a estrada pede mais atenção.", "sbm-400ss"),
    detail("ABS DE DUPLO CANAL", "Controle que acompanha a potência.", "O ABS de duplo canal e o duplo disco dianteiro entregam mais previsibilidade nas frenagens, especialmente quando o percurso muda de repente.", "sbm-400ss"),
    detail("TRÊS BAÚS DE FÁBRICA", "Mais liberdade para ir sem deixar o necessário para trás.", "Os três baús, a bolha ajustável e os protetores ampliam a praticidade para viagens e para uma rotina que exige espaço.", "sbm-400ss"),
  ],
  "sbm-600v": [
    detail("MOTOR V4", "Uma entrega de força que se sente na resposta.", "O motor de quatro cilindros em V foi feito para quem quer presença, suavidade e desempenho em uma pilotagem de categoria superior.", "sbm-600v"),
    detail("CONTROLE DE TRAÇÃO", "Mais confiança quando a aderência muda.", "O controle de tração trabalha junto da entrega de torque para ajudar a manter a moto equilibrada em diferentes condições de piso.", "sbm-600v"),
    detail("DUPLO DISCO + ABS", "Frenagens fortes sem perder o domínio.", "O duplo disco dianteiro e o ABS de duplo canal reforçam o controle para a cidade, a estrada e as decisões rápidas do caminho.", "sbm-600v"),
  ],
  "sbm-250t": [
    detail("MOTOR 249 CC", "Força na medida para ampliar a rota.", "O motor de 249 cc e o câmbio de seis marchas entregam uma faixa de uso versátil para a cidade e para os trajetos que pedem mais fôlego.", "sbm-250t"),
    detail("ABS DE DUPLO CANAL", "Segurança para escolher caminhos diferentes.", "O ABS nos dois canais ajuda a preservar o controle nas frenagens e deixa a pilotagem mais confiante em diferentes superfícies.", "sbm-250t"),
    detail("SUSPENSÃO INVERTIDA", "Mais estabilidade quando o piso deixa de ser perfeito.", "O garfo invertido e o monoshock traseiro ajudam a absorver irregularidades sem tirar a precisão da condução.", "sbm-250t"),
  ],
  denver: [
    detail("MOTOR BICILÍNDRICO EM V", "Presença clássica com resposta para a estrada.", "O motor em V de 248,92 cc entrega uma experiência encorpada para quem quer viajar com conforto e personalidade.", "denver"),
    detail("ABS DE DOIS CANAIS", "Mais tranquilidade para aproveitar o caminho.", "Os freios a disco com ABS de dois canais foram pensados para reforçar a precisão das frenagens em diferentes condições.", "denver"),
    detail("PAINEL DUPLO", "O essencial aparece do jeito que você espera.", "A combinação de painel digital e analógico mantém combustível, marcha, conta-giros e alertas sempre acessíveis.", "denver"),
  ],
  "sbm-600": [
    detail("MOTOR BICILÍNDRICO", "Força constante para percorrer mais.", "O motor de 554 cc entrega uma resposta encorpada para quem quer conforto e presença em viagens e deslocamentos longos.", "sbm-600"),
    detail("TRANSMISSÃO POR CORREIA", "Uma experiência mais suave no dia a dia.", "A correia reduz vibrações e ruídos e pede menos manutenção, deixando a condução mais confortável e previsível.", "sbm-600"),
    detail("ABS + CONTROLE DE TRAÇÃO", "Mais domínio para pilotar com personalidade.", "O ABS de duplo canal e o controle de tração trabalham para trazer segurança sem diluir a proposta cruiser do modelo.", "sbm-600"),
  ],
  "sbm-600t": [
    detail("SUSPENSÃO MARZOCCHI", "Conforto para ultrapassar o fim do asfalto.", "A suspensão Marzocchi, com garfo invertido e monoshock, ajuda a absorver impactos e manter a moto firme em diferentes terrenos.", "sbm-600t"),
    detail("PAINEL TFT DE 7\"", "A rota inteira sob controle.", "O painel TFT colorido concentra informações, espelhamento de tela e modos de condução em uma interface pronta para viagens.", "sbm-600t"),
    detail("FREIOS BREMBO + ABS", "Resposta forte para escolher o próximo trecho.", "O duplo disco dianteiro com freios Brembo e ABS de duplo canal amplia a confiança quando a pilotagem exige precisão.", "sbm-600t"),
  ],
  "sbm-600rc": [
    detail("QUATRO CILINDROS", "Resposta esportiva para quem quer mais intensidade.", "O motor de 600 cc e quatro cilindros entrega uma aceleração linear para quem procura desempenho com controle.", "sbm-600rc"),
    detail("DUPLO DISCO + ABS", "Precisão quando a velocidade pede decisão.", "O sistema de freios com duplo disco dianteiro e ABS de duplo canal ajuda a manter o controle em frenagens mais exigentes.", "sbm-600rc"),
    detail("PAINEL TFT + ESPELHAMENTO", "Tecnologia que mantém o foco na pista.", "O painel TFT reúne leitura, conectividade e ajuste de brilho para deixar a experiência esportiva mais completa.", "sbm-600rc"),
  ],
  "sbm-400rr": [
    detail("QUATRO CILINDROS", "Uma esportiva feita para acelerar a vontade.", "O conjunto de quatro cilindros e 400 cc coloca a 400RR em uma proposta de desempenho para quem quer pilotar com mais intensidade.", "sbm-400rr"),
    detail("ABS DE DUPLO CANAL", "Mais controle para frear no momento certo.", "O ABS e o duplo disco dianteiro reforçam a previsibilidade das frenagens e ajudam a preservar a estabilidade.", "sbm-400rr"),
    detail("GARFO INVERTIDO + MONOSHOCK", "Precisão para transformar intenção em trajetória.", "A suspensão dianteira invertida e o amortecedor traseiro trabalham para manter a esportiva firme e responsiva.", "sbm-400rr"),
  ],
  iron: [
    detail("MOTOR 249,60 CC", "Estilo cruiser com presença para a estrada.", "O motor de 249,60 cc combina com a proposta encorpada da IRON para quem quer viajar com personalidade.", "iron"),
    detail("ABS DE DOIS CANAIS", "Mais confiança em cada frenagem.", "Os freios a disco com ABS de dois canais ajudam a trazer mais precisão e segurança para a pilotagem.", "iron"),
    detail("PAINEL DIGITAL + ANALÓGICO", "Leitura clássica para uma escolha atual.", "A instrumentação mantém combustível, marcha, neutro e conta-giros visíveis sem perder a linguagem clássica do modelo.", "iron"),
  ],
  titanium: [
    detail("MOTOR EM V", "A estrada ganha uma assinatura própria.", "O motor bicilíndrico em V de 248,92 cc entrega uma condução encorpada para quem valoriza estilo e presença.", "titanium"),
    detail("ABS DE DOIS CANAIS", "Desempenho com uma camada extra de controle.", "Os freios a disco com ABS de dois canais ajudam a manter estabilidade e confiança em diferentes situações.", "titanium"),
    detail("FULL LED + PAINEL DIGITAL", "Tecnologia que combina com o desenho.", "A iluminação Full LED e o painel digital deixam a experiência mais atual sem apagar a personalidade cruiser.", "titanium"),
  ],
  "storm-200-efi": [
    detail("INJEÇÃO ELETRÔNICA", "Mais resposta para o trajeto que muda de direção.", "A injeção eletrônica acompanha o motor de 198,1 cc em uma proposta crossover pronta para cidade e estrada.", "storm-200"),
    detail("ABS DE DOIS CANAIS", "Segurança para explorar diferentes percursos.", "Os discos nas duas rodas com ABS de dois canais ajudam a preservar o controle em frenagens mais fortes.", "storm-200"),
    detail("GARFO INVERTIDO + MONOSHOCK", "Conforto para sair da rota comum.", "A suspensão invertida dianteira e o monoshock traseiro ajudam a absorver impactos e manter a moto estável.", "storm-200"),
  ],
};

export const additionalOfficialSpecs: Record<string, Array<{ label: string; value: string }>> = {
  "sbm-400ss": [{ label: "Cilindrada", value: "378 cc" }, { label: "Potência", value: "45,5 CV / 9.500 RPM" }, { label: "Torque", value: "36,5 N.M / 7.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "19 L" }, { label: "Rodas", value: "110/70–17” · 160/60–17”" }, { label: "Freios", value: "Duplo disco / disco; ABS de duplo canal" }],
  "sbm-600v": [{ label: "Cilindrada", value: "561,9 cc" }, { label: "Potência", value: "68,7 CV / 10.500 RPM" }, { label: "Torque", value: "53 N.M / 8.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "16,5 L" }, { label: "Rodas", value: "130/90–16” · 180/65–16”" }, { label: "Freios", value: "Duplo disco / disco; ABS de duplo canal" }],
  "sbm-250t": [{ label: "Cilindrada", value: "249 cc" }, { label: "Potência", value: "30,8 CV / 9.000 RPM" }, { label: "Torque", value: "25,5 N.M / 7.000 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "13 L" }, { label: "Rodas", value: "90/90 R19 · 130/80 R17" }, { label: "Freios", value: "Disco; ABS de duplo canal" }],
  denver: [{ label: "Cilindrada", value: "248,92 cc" }, { label: "Potência", value: "19 CV / 8.000 RPM" }, { label: "Torque", value: "18,5 N.M / 6.000 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "17 L" }, { label: "Rodas", value: "110/90–18” · 130/90–15”" }, { label: "Freios", value: "Disco dianteiro e traseiro; ABS de dois canais" }],
  "sbm-600": [{ label: "Cilindrada", value: "554 cc" }, { label: "Potência", value: "56,1 CV / 10.500 RPM" }, { label: "Torque", value: "54 N.M / 5.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "15 L" }, { label: "Rodas", value: "130/90–16” · 150/80–16”" }, { label: "Freios", value: "Disco; ABS de duplo canal" }],
  "sbm-600t": [{ label: "Cilindrada", value: "554 cc" }, { label: "Potência", value: "56 CV / 8.250 RPM" }, { label: "Torque", value: "54 N.M / 5.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "20 L" }, { label: "Rodas", value: "110/80 R19 · 150/70 R17" }, { label: "Freios", value: "Duplo disco / disco; ABS de duplo canal" }],
  "sbm-600rc": [{ label: "Cilindrada", value: "600 cc" }, { label: "Potência", value: "88,4 CV / 11.500 RPM" }, { label: "Torque", value: "56 N.M / 10.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "18 L" }, { label: "Rodas", value: "120/70 ZR17 · 180/55 ZR17" }, { label: "Freios", value: "Duplo disco / disco; ABS de duplo canal" }],
  "sbm-400rr": [{ label: "Cilindrada", value: "400 cc" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "16 L" }, { label: "Rodas", value: "120/70–R17” · 160/60–R17”" }, { label: "Freios", value: "Duplo disco / disco; ABS de duplo canal" }, { label: "Partida", value: "Elétrica" }],
  iron: [{ label: "Cilindrada", value: "249,60 cc" }, { label: "Potência", value: "27,67 CV / 9.000 RPM" }, { label: "Torque", value: "23 N.M / 7.000 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "14 L" }, { label: "Rodas", value: "110/90–16” · 130/90–15”" }, { label: "Freios", value: "Disco; ABS de dois canais" }],
  titanium: [{ label: "Cilindrada", value: "248,92 cc" }, { label: "Potência", value: "19 CV / 8.000 RPM" }, { label: "Torque", value: "18,5 N.M / 6.000 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "13 L" }, { label: "Rodas", value: "90/90–18” · 130/90–15”" }, { label: "Freios", value: "Disco; ABS de dois canais" }],
  "storm-200-efi": [{ label: "Cilindrada", value: "198,1 cc" }, { label: "Potência", value: "20,4 CV / 9.000 RPM" }, { label: "Torque", value: "18 N.M / 7.500 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "13 L" }, { label: "Rodas", value: "100/80–17” · 130/70–17”" }, { label: "Freios", value: "Disco; ABS de duplo canal" }],
};
