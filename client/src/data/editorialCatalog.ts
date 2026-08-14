// Direção visual: arquivo de performance editorial — fatos oficiais organizados em blocos de benefício, com ritmo assimétrico de livro premium e sem texto sobre fotografias.
import type { MotoDetail } from "@/data/motos";
import { officialGallerySources } from "@/data/officialGalleries";
import { additionalEditorialDetails, additionalOfficialSpecs } from "@/data/candidateCatalog";

const shineray = "https://www.shineray.com.br/produto";

export { officialGallerySources };

const detail = (model: string, title: string, headline: string, description: string, index: string): MotoDetail => ({
  title,
  headline,
  description,
  source: `${shineray}/${index}/`,
});

export const editorialDetails: Record<string, MotoDetail[]> = {
  "jef-170": [
    detail("JEF 170", "PAINEL 100% DIGITAL", "A rotina fica mais simples quando a informação está no lugar certo.", "Velocidade, combustível e indicadores essenciais aparecem em uma leitura direta, para você se concentrar no caminho e não em procurar dados.", "jef-170"),
    detail("JEF 170", "RODAS E FREIO", "Mais segurança para atravessar a cidade com decisão.", "As rodas de liga leve aro 17 e o disco dianteiro entregam um conjunto pensado para estabilidade e frenagens mais eficientes nos deslocamentos diários.", "jef-170"),
    detail("JEF 170", "SUSPENSÃO E LED", "Conforto e visibilidade que acompanham o seu ritmo.", "O monoshock traseiro ajuda a absorver irregularidades, enquanto a iluminação Full LED melhora a presença da moto em diferentes horários.", "jef-170"),
  ],
  "shi-400sc": [
    detail("SHI 400SC", "PAINEL TFT", "A scrambler que entrega informação com presença.", "O painel TFT moderniza a experiência de pilotagem e mantém as informações essenciais mais fáceis de consultar na cidade ou na estrada.", "shi-400sc"),
    detail("SHI 400SC", "ABS DE DUPLO CANAL", "Mais controle para mudar o destino sem hesitar.", "Os freios a disco com ABS de duplo canal foram feitos para oferecer frenagens mais precisas e seguras em diferentes percursos.", "shi-400sc"),
    detail("SHI 400SC", "RODAS 19/18", "Estabilidade para explorar mais do que o trajeto de sempre.", "A combinação de roda dianteira aro 19 e traseira aro 18 amplia a versatilidade da scrambler, com conforto apoiado por dois amortecedores traseiros.", "shi-400sc"),
  ],
  "shi-175": [
    detail("SHI 175", "PAINEL DIGITAL", "Tudo o que importa, sem tirar o foco da estrada.", "O painel atualizado reúne as informações principais em uma leitura clara para acompanhar cada trecho com mais tranquilidade.", "shi-175"),
    detail("SHI 175", "RODAS RAIADAS 19/17", "A cidade é só o começo do caminho.", "As rodas raiadas e a configuração 19/17 favorecem resistência, aderência e estabilidade quando a rota deixa de ser previsível.", "shi-175"),
    detail("SHI 175", "DISCOS + MONOSHOCK", "Mais confiança para pilotar em diferentes terrenos.", "O disco nas duas rodas e o monoshock traseiro trabalham para entregar controle, conforto e frenagens mais precisas.", "shi-175"),
  ],
  "shi-170": [
    detail("SHI 170", "PAINEL 100% DIGITAL", "A informação certa acompanha todos os seus dias.", "O painel digital deixa a leitura dos indicadores mais objetiva e ajuda a transformar a rotina em uma pilotagem mais simples.", "shi-170"),
    detail("SHI 170", "RODAS ARO 18", "Mais estabilidade para fazer a cidade render.", "As rodas aro 18 e o disco dianteiro formam um conjunto equilibrado para deslocamentos urbanos com mais controle.", "shi-170"),
    detail("SHI 170", "FULL LED + USB", "Praticidade que permanece quando o dia termina.", "A iluminação Full LED amplia a visibilidade, enquanto USB e USB-C deixam a moto mais preparada para a rotina real.", "shi-170"),
  ],
  "urban-lite": [
    detail("URBAN LITE", "CVT AUTOMÁTICO", "Ganhe tempo sem transformar a rotina em esforço.", "O câmbio automático CVT torna as saídas e paradas da cidade mais fáceis, com uma experiência acessível para quem prioriza praticidade.", "urban-lite"),
    detail("URBAN LITE", "GUARDA-VOLUMES", "Os pequenos itens do dia encontram o seu lugar.", "O espaço funcional mantém documentos, celular e objetos essenciais ao alcance, deixando os deslocamentos mais organizados.", "urban-lite"),
    detail("URBAN LITE", "FULL LED + CBS", "Mais visibilidade para circular com confiança.", "A iluminação Full LED e o sistema CBS complementam a proposta urbana com mais presença visual e controle nas frenagens.", "urban-lite"),
  ],
  "jet-50": [
    detail("JET 50", "PAINEL DIGITAL", "Sua primeira autonomia começa com informação.", "Gasolina, marcha, velocidade e odômetro ficam visíveis em um painel pensado para facilitar a adaptação de quem está começando.", "jet-50"),
    detail("JET 50", "FULL LED", "Mais presença em cada deslocamento.", "Farol, setas e lanterna em LED ampliam a visibilidade e dão à JET 50 uma assinatura atual para circular pela cidade.", "jet-50"),
    detail("JET 50", "GUARDA-VOLUMES", "Praticidade para sair sem carregar a rotina nas mãos.", "O espaço interno acomoda itens essenciais e até um capacete, oferecendo mais liberdade para resolver o dia.", "jet-50"),
  ],
  "jet-125": [
    detail("JET 125", "PAINEL DIGITAL", "A cidade fica mais previsível quando você enxerga tudo.", "Os indicadores principais permanecem ao alcance dos olhos, ajudando a pilotar com mais naturalidade e menos distração.", "jet-125"),
    detail("JET 125", "FULL LED + RODAS DE LIGA", "Uma escolha urbana com mais estabilidade e presença.", "Rodas de liga leve e iluminação Full LED combinam praticidade, visibilidade e um acabamento que acompanha o seu ritmo.", "jet-125"),
    detail("JET 125", "GUARDA-VOLUMES + USB", "Resolva mais sem abrir mão da leveza.", "O compartimento para itens pessoais e a porta USB fazem a scooter conversar diretamente com a rotina de quem vive em movimento.", "jet-125"),
  ],
  "shi-250": [
    detail("SHI 250", "PAINEL 100% DIGITAL", "A aventura começa quando você sabe o que tem nas mãos.", "Combustível, marcha, conta-giros e velocidade aparecem em uma leitura completa para decidir cada trecho com mais segurança.", "shi-250"),
    detail("SHI 250", "GARFO INVERTIDO + MONOSHOCK", "Controle para deixar o asfalto para trás.", "A suspensão dianteira invertida e o monoshock traseiro ajudam a absorver impactos e manter a moto estável em percursos exigentes.", "shi-250"),
    detail("SHI 250", "RODAS RAIADAS + CBS", "Robustez para ampliar o mapa.", "Com rodas 21/18 e discos nas duas rodas, a SHI 250 foi configurada para entregar aderência, frenagem e confiança em diferentes terrenos.", "shi-250"),
  ],
  "urban-150-efi": [
    detail("URBAN 150 EFI", "PAINEL COM ESPELHAMENTO", "Tecnologia que se adapta à sua vida urbana.", "O painel reúne indicadores e permite espelhamento da tela do celular, trazendo mais praticidade e ergonomia para o dia a dia.", "urban-150-efi"),
    detail("URBAN 150 EFI", "START/STOP", "Menos desperdício entre uma parada e outra.", "O sistema desliga o motor em paradas e religa ao acelerar, favorecendo uma experiência mais confortável e eficiente no trânsito.", "urban-150-efi"),
    detail("URBAN 150 EFI", "ABS DE DOIS CANAIS", "Conforto de scooter com controle de categoria superior.", "O ABS atua nos dois canais e as rodas 14/13 com pneus de uso misto ajudam a manter equilíbrio e confiança em pisos variados.", "urban-150-efi"),
  ],
  "250f": [
    detail("250F", "INJEÇÃO ELETRÔNICA", "Resposta esportiva para quem quer mais da cidade.", "A injeção eletrônica acompanha o motor de 248,92 cc com uma proposta de desempenho e agilidade para quem não quer uma street genérica.", "250f"),
    detail("250F", "ABS DE DUPLO CANAL", "Acelere a escolha, não o risco.", "Os discos nas duas rodas com ABS de dois canais ajudam a preservar o controle quando uma frenagem mais forte aparece no caminho.", "250f"),
    detail("250F", "GARFO INVERTIDO + FULL LED", "Presença que se percebe antes de ligar o motor.", "A suspensão dianteira invertida dá mais rigidez ao conjunto, enquanto Full LED e DRL reforçam a leitura visual do modelo.", "250f"),
  ],
  "shi-175s-efi": [
    detail("SHI 175S EFI", "INJEÇÃO ELETRÔNICA", "Uma trail pronta para a rua e para a estrada rural.", "A injeção eletrônica combina praticidade no uso diário com a liberdade de seguir por trajetos que pedem mais versatilidade.", "shi-175s-efi"),
    detail("SHI 175S EFI", "RODAS 19/17 + DISCOS", "Mais aderência para não encerrar o passeio no asfalto.", "As rodas raiadas e os discos nas duas rodas favorecem estabilidade, resistência e frenagens precisas em diferentes condições.", "shi-175s-efi"),
    detail("SHI 175S EFI", "MONOSHOCK + FULL LED", "Conforto e visibilidade para ampliar a rota.", "O monoshock traseiro ajuda a lidar com irregularidades, enquanto Full LED e DRL mantêm a moto mais visível no caminho.", "shi-175s-efi"),
  ],
  "free-150-efi": [
    detail("FREE 150 EFI", "INJEÇÃO ELETRÔNICA", "Uma porta de entrada para mais autonomia.", "A injeção eletrônica e o motor de 149 cc apoiam uma rotina urbana mais independente sem transformar a compra em um salto no escuro.", "free-150-efi"),
    detail("FREE 150 EFI", "PAINEL DIGITAL", "Decida melhor quando a informação aparece inteira.", "Combustível, marcha, neutro e conta-giros ficam em uma leitura direta para acompanhar o dia com mais tranquilidade.", "free-150-efi"),
    detail("FREE 150 EFI", "DRL + DISCO DIANTEIRO", "Mais confiança para começar a rodar todos os dias.", "O conjunto de luzes em LED, DRL e freio dianteiro a disco entrega presença e controle para o uso urbano.", "free-150-efi"),
  ],
  "jef-150s-efi": [
    detail("JEF 150S EFI", "INJEÇÃO + PAINEL DIGITAL", "O design agressivo agora conversa com a rotina.", "A atualização preserva a personalidade da JEF e acrescenta injeção eletrônica e leitura digital para uma experiência mais atual.", "jef-150s-efi"),
    detail("JEF 150S EFI", "RODAS ARO 17", "Mais estabilidade para manter o seu ritmo.", "As rodas de liga leve aro 17 ajudam a compor uma condução firme e aderente em diferentes terrenos urbanos.", "jef-150s-efi"),
    detail("JEF 150S EFI", "MONOSHOCK + USB", "Praticidade com uma postura que não passa despercebida.", "O monoshock traseiro favorece o equilíbrio, enquanto a porta USB acompanha a rotina conectada sem diluir o caráter street.", "jef-150s-efi"),
  ],
  "rio-125-efi": [
    detail("RIO 125 EFI", "INJEÇÃO ELETRÔNICA", "Equilíbrio para a cidade real.", "A injeção eletrônica combina com 125 cc para entregar uma escolha direta a quem quer mobilidade com leitura simples de custos e uso.", "rio-125-efi"),
    detail("RIO 125 EFI", "RODAS 17/14 + DISCO", "Estabilidade para fazer o trajeto render.", "As rodas de liga leve e o disco dianteiro trabalham para uma condução mais firme nas saídas, paradas e mudanças de direção.", "rio-125-efi"),
    detail("RIO 125 EFI", "FULL LED + GUARDA-VOLUMES", "A rotina ganha espaço para acontecer.", "A iluminação Full LED/DRL melhora a presença, enquanto o guarda-volumes e a porta USB ajudam a resolver o dia com mais praticidade.", "rio-125-efi"),
  ],
  "phoenix-s-efi": [
    detail("PHOENIX S EFI", "INJEÇÃO ELETRÔNICA", "Mais eficiência para transformar vontade em movimento.", "O ciclomotor combina injeção eletrônica e 47,6 cc em uma proposta acessível para quem quer começar a rodar com mais autonomia.", "phoenix-s-efi"),
    detail("PHOENIX S EFI", "PAINEL DIGITAL", "Uma primeira escolha que não esconde o essencial.", "Gasolina, marcha, velocidade e odômetro ficam visíveis em uma leitura pensada para facilitar cada deslocamento.", "phoenix-s-efi"),
    detail("PHOENIX S EFI", "FULL LED + BI-SHOCK", "Mais visibilidade para viver a cidade por inteiro.", "A iluminação Full LED e a suspensão traseira bi-shock completam o conjunto com presença e estabilidade para a rotina.", "phoenix-s-efi"),
  ],
  "jet-125-efi": [
    detail("JET 125 EFI", "INJEÇÃO ELETRÔNICA", "Praticidade urbana com uma resposta mais atual.", "A injeção eletrônica atualiza a scooter para quem quer ganhar tempo na cidade sem abrir mão de uma compra bem explicada.", "jet-125-efi"),
    detail("JET 125 EFI", "PAINEL DIGITAL + LED", "Tudo no seu campo de visão, todos os dias.", "O painel digital e o conjunto óptico foram pensados para manter indicadores e iluminação essenciais mais fáceis de acompanhar.", "jet-125-efi"),
    detail("JET 125 EFI", "GUARDA-VOLUMES + USB", "A cidade fica mais leve quando a moto resolve junto.", "O compartimento para itens pessoais, a porta USB e os dois cavaletes entregam conveniência para a rotina.", "jet-125-efi"),
  ],
  "jef-150": [
    detail("JEF 150", "PAINEL DIGITAL", "Uma street direta para a vida que não para.", "O painel digital mais intuitivo deixa as informações essenciais no alcance dos olhos, com menos distração e mais fluidez.", "jef-150"),
    detail("JEF 150", "RODAS ARO 17 + DISCO", "Controle que combina com a cidade.", "As rodas de liga leve aro 17 e o disco dianteiro entregam estabilidade e frenagens mais eficientes para o uso cotidiano.", "jef-150"),
    detail("JEF 150", "MONOSHOCK + FULL LED", "Uma escolha urbana com acabamento de verdade.", "O monoshock favorece a estabilidade e a iluminação Full LED reforça visibilidade, durabilidade e a presença do modelo.", "jef-150"),
  ],
  "phoenix-s": [
    detail("PHOENIX S", "PAINEL DIGITAL", "Começar a rodar fica mais simples quando você enxerga o essencial.", "O painel reúne gasolina, marcha, velocidade e odômetro em uma leitura objetiva para a rotina urbana.", "phoenix-s"),
    detail("PHOENIX S", "RODAS RAIADAS + DISCO", "Economia não precisa significar abrir mão de controle.", "As rodas raiadas aro 17 e o disco dianteiro combinam resistência, aderência e frenagens mais eficientes.", "phoenix-s"),
    detail("PHOENIX S", "FULL LED + BI-SHOCK", "Mais presença para viver a cidade do seu jeito.", "A iluminação Full LED e a suspensão traseira bi-shock ajudam a manter visibilidade, estabilidade e conforto nos trajetos diários.", "phoenix-s"),
  ],
  "sbm-150s": [
    detail("SBM 150S", "PAINEL DIGITAL", "Tudo o que importa, em um único olhar.", "O painel 100% digital reúne as informações essenciais com leitura clara para acompanhar a rotina com mais praticidade.", "sbm-150"),
    detail("SBM 150S", "ABS DIANTEIRO", "Controle para seguir com mais confiança.", "Os freios a disco nas duas rodas, com ABS na dianteira, formam um conjunto voltado a estabilidade e controle.", "sbm-150"),
    detail("SBM 150S", "MONOSHOCK", "Mais equilíbrio para a rotina.", "O garfo telescópico dianteiro e o monoshock traseiro trabalham para absorver irregularidades e manter a moto estável.", "sbm-150"),
  ],
  "sbm-250s": [
    detail("SBM 250S", "ABS DE DUPLO CANAL", "Frenagem com mais controle.", "O sistema ABS atua nos dois canais para reduzir o risco de travamento e preservar a estabilidade em frenagens exigentes.", "sbm-250s"),
    detail("SBM 250S", "GARFO INVERTIDO", "Resposta precisa para a pilotagem.", "O garfo invertido dianteiro e o monoshock traseiro combinam rigidez, absorção e estabilidade para o uso esportivo.", "sbm-250s"),
    detail("SBM 250S", "PAINEL DIGITAL", "Informação rápida com espírito esportivo.", "O display digital reúne velocidade, rotações e combustível em uma leitura direta para você manter o foco na pilotagem.", "sbm-250s"),
  ],
  "sbm-400s": [
    detail("SBM 400S", "MOTOR BICILÍNDRICO", "Resposta para quem quer subir de categoria.", "Com 399,73 cc, 41 CV e câmbio de seis marchas, o motor bicilíndrico entrega uma proposta mais forte para cidade e estrada.", "sbm-400"),
    detail("SBM 400S", "ABS DE DUPLO CANAL", "Potência acompanhada de controle.", "O ABS de duplo canal ajuda a evitar travamentos em frenagens inesperadas e preserva a estabilidade do conjunto.", "sbm-400"),
    detail("SBM 400S", "PAINEL TFT", "Alta nitidez para manter o controle.", "O painel TFT oferece leitura rápida das informações e permite acompanhar a pilotagem com mais precisão, inclusive sob sol forte.", "sbm-400"),
  ],
};

Object.assign(editorialDetails, additionalEditorialDetails);

export const officialSpecs: Record<string, Array<{ label: string; value: string }>> = {
  "jef-170": [{ label: "Cilindrada", value: "169,30 cc" }, { label: "Potência", value: "13,59 CV / 8.000 RPM" }, { label: "Torque", value: "15 N.M / 6.000 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "12 L" }, { label: "Rodas", value: "90/90–17” · 120/80–17”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "shi-400sc": [{ label: "Cilindrada", value: "399,7 cc" }, { label: "Potência", value: "26,5 CV / 7.000 RPM" }, { label: "Torque", value: "30 N.M / 5.500 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "14 L" }, { label: "Rodas", value: "110/90–19” · 130/70–18”" }, { label: "Freios", value: "ABS de duplo canal" }, { label: "Carga máxima", value: "150 kg" }],
  "shi-175": [{ label: "Cilindrada", value: "175,11 cc" }, { label: "Potência", value: "15,63 CV / 8.500 RPM" }, { label: "Torque", value: "14 N.M / 6.500 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "14,5 L" }, { label: "Rodas", value: "90/90–19” · 110/90–17”" }, { label: "Freios", value: "Disco dianteiro e traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "shi-170": [{ label: "Cilindrada", value: "169,30 cc" }, { label: "Potência", value: "13,59 CV / 8.000 RPM" }, { label: "Torque", value: "11,45 N.M / 7.200 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "12,5 L" }, { label: "Rodas", value: "2.75–18” · 3.00–18”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "urban-lite": [{ label: "Cilindrada", value: "149,48 cc" }, { label: "Potência", value: "13,5 cv / 7.500 RPM" }, { label: "Torque", value: "11 N.m / 5.000 RPM" }, { label: "Câmbio", value: "Automático CVT" }, { label: "Tanque", value: "8 L" }, { label: "Rodas", value: "130/60–13” dianteira e traseira" }, { label: "Freios", value: "CBS · disco / tambor" }, { label: "Carga máxima", value: "155 kg" }],
  "jet-50": [{ label: "Cilindrada", value: "49,4 cc" }, { label: "Potência", value: "2,71 CV / 5.000 RPM" }, { label: "Torque", value: "2,6 N.M / 6.000 RPM" }, { label: "Câmbio", value: "4 marchas" }, { label: "Tanque", value: "3 L" }, { label: "Rodas", value: "2.50–17” · 80/100–14”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "jet-125": [{ label: "Cilindrada", value: "123,67 cc" }, { label: "Potência", value: "8,15 CV / 7.500 RPM" }, { label: "Torque", value: "8,0 N.M / 6.000 RPM" }, { label: "Câmbio", value: "4 marchas" }, { label: "Tanque", value: "3 L" }, { label: "Rodas", value: "2.50–17” · 80/100–14”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "shi-250": [{ label: "Cilindrada", value: "249,9 cc" }, { label: "Potência", value: "19,3 CV / 8.000 RPM" }, { label: "Torque", value: "18 N.M / 6.000 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "18 L" }, { label: "Rodas", value: "90/90–21” · 120/80–18”" }, { label: "Freios", value: "CBS · disco dianteiro e traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "urban-150-efi": [{ label: "Cilindrada", value: "149 cc" }, { label: "Potência", value: "12,9 cv / 8.500 RPM" }, { label: "Torque", value: "13 N.m / 5.000 RPM" }, { label: "Câmbio", value: "Automático" }, { label: "Tanque", value: "13,5 L" }, { label: "Rodas", value: "100/80–14” · 130/70–13”" }, { label: "Freios", value: "ABS dianteiro e traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "250f": [{ label: "Cilindrada", value: "248,92 cc" }, { label: "Potência", value: "27,9 CV / 9.500 RPM" }, { label: "Torque", value: "22,5 N.M / 7.250 RPM" }, { label: "Câmbio", value: "6 marchas" }, { label: "Tanque", value: "13,5 L" }, { label: "Rodas", value: "100/80–17” · 130/70–17”" }, { label: "Freios", value: "ABS de duplo canal" }, { label: "Refrigeração", value: "Líquida" }],
  "shi-175s-efi": [{ label: "Cilindrada", value: "175,11 cc" }, { label: "Potência", value: "15,63 CV / 8.500 RPM" }, { label: "Torque", value: "14 N.M / 6.500 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "14,5 L" }, { label: "Rodas", value: "90/90–19” · 110/90–17”" }, { label: "Freios", value: "Disco dianteiro e traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "free-150-efi": [{ label: "Cilindrada", value: "149 cc" }, { label: "Potência", value: "11,96 cv / 8.500 RPM" }, { label: "Torque", value: "9,8 N.m / 7.500 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "12 L" }, { label: "Rodas", value: "80/100–18” · 90/90–18”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "jef-150s-efi": [{ label: "Cilindrada", value: "149 cc" }, { label: "Potência", value: "13,5 CV / 7.500 RPM" }, { label: "Torque", value: "14 N.M / 6.000 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "12 L" }, { label: "Rodas", value: "90/90–17” · 120/80–17”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "rio-125-efi": [{ label: "Cilindrada", value: "123,67 cc" }, { label: "Potência", value: "8 CV / 8.000 RPM" }, { label: "Torque", value: "9,0 N.M / 6.000 RPM" }, { label: "Câmbio", value: "4 marchas" }, { label: "Tanque", value: "4,2 L" }, { label: "Rodas", value: "2.50–17” · 80/100–14”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "phoenix-s-efi": [{ label: "Cilindrada", value: "47,6 cc" }, { label: "Potência", value: "6,79 CV / 8.000 RPM" }, { label: "Torque", value: "6,7 N.M / 6.000 RPM" }, { label: "Câmbio", value: "4 marchas rotativo" }, { label: "Tanque", value: "3,5 L" }, { label: "Rodas", value: "2.50–17” · 2.75–17”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "jet-125-efi": [{ label: "Cilindrada", value: "123,67 cc" }, { label: "Potência", value: "8 CV / 7.500 RPM" }, { label: "Torque", value: "9,0 N.M / 5.500 RPM" }, { label: "Câmbio", value: "4 marchas" }, { label: "Tanque", value: "3 L" }, { label: "Rodas", value: "2.50–17” · 80/100–14”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "jef-150": [{ label: "Cilindrada", value: "149,48 cc" }, { label: "Potência", value: "13,5 CV / 7.500 RPM" }, { label: "Torque", value: "14 N.M / 6.000 RPM" }, { label: "Câmbio", value: "5 marchas" }, { label: "Tanque", value: "12 L" }, { label: "Rodas", value: "90/90–17” · 120/80–17”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
  "phoenix-s": [{ label: "Cilindrada", value: "47,9 cc" }, { label: "Potência", value: "5,6 CV / 8.500 RPM" }, { label: "Torque", value: "6,6 N.M / 6.000 RPM" }, { label: "Câmbio", value: "4 marchas" }, { label: "Tanque", value: "3,5 L" }, { label: "Rodas", value: "2.50–17” · 2.75–17”" }, { label: "Freios", value: "Disco dianteiro / tambor traseiro" }, { label: "Carga máxima", value: "150 kg" }],
};

Object.assign(officialSpecs, additionalOfficialSpecs);
