# Auditoria do seletor de cores — 14/08/2026

## Escopo

Esta auditoria verifica quais informações oficiais podem sustentar um seletor de cores que altere imagens do modelo e a sequência exibida no visualizador 360º. A fonte primária é a página individual de cada produto no site da [Shineray Brasil](https://www.shineray.com.br/).

## Evidências oficiais encontradas

| Modelo | Página oficial | Cores explicitamente publicadas | 360º oficial | Estado dos assets persistidos |
|---|---|---:|---:|---|
| JET 125 | `/produto/jet-125/` | 7 entradas nomeadas como “Cor JET 125 (1–7)” | Sim | Galeria oficial persistida, mas sem agrupamento por cor |
| JEF 150 | `/produto/jef-150/` | 5 entradas, incluindo “Cor-JEF 150” e identificadores numerados | Sim | Galeria oficial persistida, mas sem agrupamento por cor |
| URBAN 150 EFI | `/produto/urban-150-efi/` | Vermelha, Preta, Azul e Roxa | Sim | Galeria oficial persistida, mas sem agrupamento por cor |
| SBM 400S | `/produto/sbm-400/` | 3 entradas identificadas como “Cor-SBM-400s-3/4/5” | Sim | Galeria oficial persistida, mas sem agrupamento por cor |

As páginas extraídas confirmam a existência de uma seção “Nossas Cores” e de uma seção “em 360º” para os quatro modelos auditados. Entretanto, a extração textual não relaciona cada swatch a um conjunto independente de dez frames. O navegador também encontrou verificação de robô ao abrir a página oficial diretamente; por isso, não é seguro inferir a ordem, a cor ou a correspondência visual dos assets sem persistência verificável.

Uma busca visual também retornou imagens oficiais completas do URBAN 150 em acabamentos distintos, incluindo vermelho, preto, azul/turquesa e roxo. Esses resultados podem sustentar variantes de hero/galeria quando forem persistidos com URL e origem confirmadas, mas não comprovam, por si só, uma sequência 360º completa para cada acabamento.

As duas imagens vermelhas oficiais revisadas nesta rodada são visualmente duplicadas da mesma vista lateral. Elas podem representar uma amostra de cor/hero, mas não devem ser contadas como dois frames 360º.

A galeria persistida atual do URBAN 150 inclui pelo menos um detalhe preto e um detalhe turquesa. Isso comprova que a galeria plana reúne acabamentos distintos, mas não fornece a ordem ou a integridade de um conjunto 360º por cor; esses arquivos não serão reclassificados automaticamente.

## Decisão de implementação

Não serão criadas variantes fictícias nem será reutilizada a mesma sequência 360º para representar cores diferentes. A arquitetura deve aceitar um manifesto por variante, contendo nome, amostra, hero, galeria, frames e fonte oficial. O seletor só deverá aparecer quando houver pelo menos duas variantes com imagens oficiais persistidas e correspondência comprovada; nos demais modelos, o catálogo continuará sem controle de cor.

## Resultado da primeira rodada

O URBAN 150 EFI recebeu duas variantes persistidas: **Preta** e **Vermelha**. Cada variante tem hero próprio, galeria própria e um conjunto próprio de imagens oficiais enviado ao storage persistente; a troca atualiza o hero, thumbnails, lightbox, lente desktop e a sequência recebida pelo visualizador 360º. O seletor também pode ser aberto diretamente com `?mode=book&model=urban-150-efi&color=urban-150-vermelha`.

O restante do catálogo permanece sem seletor até que existam conjuntos por acabamento suficientemente comprovados. A implementação não reaproveita frames de outra cor para os modelos que ainda não têm manifesto de variantes.

## Referência

1. [Páginas oficiais de produto Shineray Brasil](https://www.shineray.com.br/produto/jet-125/), [JEF 150](https://www.shineray.com.br/produto/jef-150/), [URBAN 150 EFI](https://www.shineray.com.br/produto/urban-150-efi/) e [SBM 400S](https://www.shineray.com.br/produto/sbm-400/).
