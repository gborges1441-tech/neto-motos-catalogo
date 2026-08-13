# Auditoria baseada no arquivo do usuário

## O que já funciona

O projeto já possui capa cinematográfica com vídeo comercial real, catálogo de 29 modelos, índice, modo lista, filtros por família/preço/marca, formulário de orçamento, CTA contextualizado para WhatsApp, dados técnicos verificados, fallback de imagens, analytics de primeira parte e navegação por teclado, arraste e swipe.

## Gaps observados

No desktop, a experiência é visualmente consistente e a capa comunica que o produto é um catálogo Shineray da Neto Motos. O livro apresenta foto real, preço, texto de uso, ficha resumida, galeria e CTA. Ainda há uma camada editorial atmosférica sobre o vídeo que pode competir com a leitura do comercial; o arquivo do usuário pede que o vídeo funcione como desejo sem excesso de elementos concorrentes.

No mobile, a renderização já é de uma página por vez, mas a arquitetura ainda usa páginas empilhadas no mesmo spread: a página visual aparece antes e a página textual continua abaixo. Os controles ficam fixos no viewport. Isso atende parte da orientação, mas não é um catálogo de uma página por swipe no sentido estrito e pode gerar sensação de que a parte inferior está “sumida” até rolar.

O CSS usa `100svh`, alturas mínimas fixas de 560–680 px e `overflow: hidden` em páginas e capa. Essas escolhas precisam ser confrontadas com `100dvh`, safe areas, rolagem interna e orientação. O swipe atual mede apenas `clientX`, sem comparar o deslocamento vertical; portanto, um gesto diagonal/vertical pode trocar de capítulo quando deveria rolar o conteúdo.

Os filtros são úteis, mas a marca é estática porque todos os modelos são Shineray. A implementação deve apresentar isso como filtro de marca disponível, não como promessa de múltiplas marcas. Os preços são referências e o texto já informa confirmação com o Neto.

## Direção de correção

Preservar a estética de arquivo impresso, dados oficiais, fotos reais, CTA contextualizado e ausência de depoimentos inventados. Priorizar a arquitetura mobile single-page real, rolagem vertical sem conflito com swipe, `dvh` com safe areas, preloading apenas da página atual e próxima, e uma sequência de conteúdo que leve de desejo a benefício, prova, preço e conversa.

## Validação após a primeira correção

O celular passou a renderizar uma única página de catálogo com foto grande, galeria horizontal, nome, descrição, benefício e fluxo vertical, sem a segunda página textual empilhada no mesmo spread. O tablet portrait também passou a usar a mesma arquitetura de uma página; o modo lista permanece legível e empilhado.

O preço e o CTA ficam mais abaixo no fluxo, após a copy, e podem ser alcançados por rolagem sem cortar conteúdo. A barra fixa continua reservada para navegação e WhatsApp. O hint “Deslize para folhear” aparece apenas antes da primeira interação. Ainda é necessário testar a sequência de swipe e a rolagem manual em runtime, além de validar desktop landscape após o override de tablet portrait.

Em 360×800, a capa mantém headline, CTA e início do comercial sem overflow horizontal; o livro mostra foto, galeria e início da copy em uma página vertical; o modo lista mantém filtros em duas colunas e cartões empilhados; o formulário usa rolagem interna. Em 430×932, há mais respiro e a ficha mostra a promessa e o início do benefício antes da barra fixa. Em 1440×900, o desktop preserva o spread de duas páginas, preço, controles e CTAs sem alteração estrutural.

O console recente contém apenas mensagens de inicialização/Vite/React DevTools; as requisições de rede auditadas não apresentam falhas 4xx/5xx. O build de produção e o TypeScript passaram após as alterações.

Na captura final, a página única mobile permanece estável após o preloading reduzido: a imagem ativa carrega, a galeria mantém estado visual estável e as miniaturas não ativas podem carregar sob demanda. No desktop, a capa, o spread, o modo lista e o formulário mantêm a composição original. O CTA fixo continua acessível e a copy/metadata não contém o termo “clareza”.
