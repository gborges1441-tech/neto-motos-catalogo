# Auditoria profunda — catálogo Neto Motos

## Escopo auditado

Foram revisados a capa, o livro aberto, o modo lista, o índice, os diálogos, o CTA de WhatsApp, o teclado, o arraste, a galeria, o sound toggle, a responsividade e os logs recentes do frontend. O catálogo renderiza atualmente 29 capítulos de produto: 23 motocicletas/scooters/elétricas e 6 produtos de mobilidade elétrica individual.

## Achados prioritários

| Área | Achado | Impacto | Decisão de melhoria |
|---|---|---|---|
| Paginação | Alguns números estão hardcoded como `01`, `01—04` ou `0{index + 1}`. | Em capítulos 10–29, a leitura editorial fica incorreta. | Criar formatador único de capítulo e exibir `01 / 29` de forma consistente. |
| Estado do livro | A virada usa `setTimeout` sem cleanup e captura teclas/setas mesmo quando uma camada está aberta. | Pode haver navegação por trás de modal e atualização após desmontagem. | Introduzir cleanup, pausa de interação e foco coerente. |
| Gestos | O arraste é capturado pelo spread inteiro, inclusive sobre botões e miniaturas. | Cliques podem virar página por acidente em touch. | Ignorar gestos iniciados em elementos interativos e tratar cancelamento/pointer capture. |
| Imagens | Não há estado de erro ou fallback visual para assets externos. | Uma imagem indisponível deixa uma área vazia ou um broken image. | Adicionar fallback visual, `decoding`, lazy loading e prioridade apenas na capa. |
| Acessibilidade | Drawers/dialogs usam `aria-hidden`, mas não têm foco inicial, retorno de foco ou bloqueio de scroll. | Leitores de tela e teclado podem alcançar conteúdo atrás da camada aberta. | Implementar gerenciamento de foco, `inert` e `aria-labelledby`. |
| Conversão | O CTA é bom, mas o catálogo não oferece filtros por intenção na leitura direta e não explicita a divisão de produtos. | A lista de 29 itens exige varredura excessiva. | Adicionar filtros por família e microcopy de decisão. |
| Capa | A composição está forte, mas a contagem/arquivo ainda sugere uma paginação antiga e a fotografia de movimento não tem prioridade de carregamento definida. | A promessa visual e o conteúdo podem divergir. | Sincronizar contagem, melhorar `fetchPriority`/fallback e reforçar o objeto-catalogo. |
| Logs | Não foram encontrados erros recentes de console ou requests 4xx/5xx nos trechos auditados. | A base técnica está estável, mas há warnings de build para assets externos e bundle grande. | Tratar como otimização posterior sem sacrificar a direção visual. |

## Fontes oficiais

O inventário foi confrontado novamente com as páginas de produtos da Shineray Brasil. A vitrine atual mistura motos, scooters, elétricas, patinetes, triciclos, ATVs, karts, utilitários e automóveis. Por isso, os seis produtos PTXS, PT-STAND, PT4-PRO, PTXR, PT1S e PT2XS permanecem em uma família separada de mobilidade elétrica, sem serem apresentados como motocicletas convencionais.

## Validação visual da primeira rodada

No desktop, a capa comunica o objeto-livro e a abertura mantém a fotografia como assunto principal. O modo lista ganhou uma leitura própria, com filtros e contagem de capítulos. No mobile, a hierarquia permanece legível e o preço não cobre a narrativa; a capa continua densa, porém reconhecível como catálogo. A próxima rodada deve preservar essa estrutura e concentrar-se em foco, estados de carregamento, refinamento de microinterações e otimização do bundle.

Durante a revisão independente, uma captura isolada abriu o miolo antes de as imagens oficiais terminarem de chegar, deixando o painel de foto momentaneamente vazio. O componente `AssetImage` já cobria falhas definitivas; a correção adicional passou a pré-carregar a galeria do capítulo ativo e elevou as miniaturas do capítulo corrente para `loading="eager"`. A recaptura confirmou a fotografia SHI 250 e as miniaturas visíveis.

Na validação final, desktop e mobile mantiveram a leitura da capa, o livro continuou com a fotografia dominante e o modo lista ficou claramente separado como leitura direta. O WhatsApp foi recuado para um verde quase-neutro de serviço, enquanto vermelho, papel e carvão seguem comandando a identidade. Os filtros e o marcador `ARQUIVO / 29 CAPÍTULOS` não comprimiram o cabeçalho mobile.
