# Relatório de cobertura do acervo oficial — 14 de agosto de 2026

## Escopo

Este relatório registra a rodada de auditoria e coleta orientada pelo documento enviado pelo usuário. A capa, a copy, o design geral, a navegação, a virada de página, o WhatsApp e o zoom foram preservados. O recorte publicado continua limitado às motocicletas a combustão que já fazem parte do catálogo do Neto; produtos elétricos, mobilidade, veículos e candidatos comerciais não confirmados não foram adicionados.

## Resultado objetivo

Foram recuperadas **196 fotografias oficiais** a partir das páginas individuais da fabricante e publicadas em caminhos persistentes do projeto. O acervo foi separado por marca e modelo, mantendo a ordem da galeria oficial, com o primeiro asset da interface continuando reservado ao hero lateral/isolado quando a fabricante disponibiliza esse recorte.

| Marca | Modelo | Imagens oficiais novas | Estado no catálogo |
|---|---|---:|---|
| SHINERAY | JEF 170 | 10 | Integrado |
| SHINERAY | SHI 400SC | 10 | Integrado |
| SHINERAY | SHI 175 | 10 | Integrado |
| SHINERAY | SHI 170 | 10 | Integrado |
| SHINERAY | URBAN LITE | 10 | Integrado |
| SHINERAY | JET 50 | 10 | Integrado |
| SHINERAY | JET 125 | 10 | Integrado |
| SHINERAY | SHI 250 | 10 | Integrado |
| SHINERAY | URBAN 150 EFI | 10 | Integrado |
| SHINERAY | 250F | 10 | Integrado |
| SHINERAY | SHI 175S EFI | 10 | Integrado |
| SHINERAY | FREE 150 EFI | 10 | Integrado |
| SHINERAY | JEF 150S EFI | 8 | Integrado |
| SHINERAY | RIO 125 EFI | 10 | Integrado |
| SHINERAY | PHOENIX S EFI | 10 | Integrado |
| SHINERAY | JET 125 EFI | — | **Pendente: página oficial não extraída; galeria anterior preservada** |
| SHINERAY | JEF 150 | 10 | Integrado |
| SHINERAY | PHOENIX S | 10 | Integrado |
| SBM | SBM 150S | 8 | Integrado |
| SBM | SBM 250S | 10 | Integrado |
| SBM | SBM 400S | 10 | Integrado |

## Tratamento de hero e galeria

Os recortes oficiais de catálogo em vista lateral/isolada continuam sendo usados como hero principal da página direita e dos cards quando existem. As galerias oficiais de campanha entram como imagens secundárias, com miniaturas abaixo da fotografia, troca em `contain`, lightbox, zoom, lente desktop e carregamento sob demanda. A linha SBM permanece com suas fotografias oficiais de campanha, pois a fonte não disponibilizou um conjunto transparente equivalente para esses três modelos.

O JET 125 EFI foi tratado com transparência: a página individual retornou falha de extração em duas tentativas, portanto não foi assumida ausência nem foi inventada uma nova galeria. A fonte permanece registrada para uma futura coleta autorizada.

## Validação

O projeto passou por TypeScript e build de produção. Foram conferidos capa, spread em 1440×900 e 1920×1080, modo lista, página única mobile em 430×932, rolagem editorial, galeria extensa, CTA e preservação do enquadramento completo da SHI 250. Os únicos avisos de build continuam sendo referências runtime de textura de papel e borda de página em `/manus-storage/`; não há erro de TypeScript.

## Referências

[1]: https://www.shineray.com.br/produtos/ "Shineray Brasil — produtos"
[2]: https://www.shineray.com.br/sbm/produtos-sbm/ "Shineray Brasil — produtos SBM"
[3]: https://www.shineray.com.br/produto/shi-250/ "Shineray Brasil — SHI 250"
[4]: https://www.shineray.com.br/produto/shi-400sc/ "Shineray Brasil — SHI 400SC"
[5]: https://www.shineray.com.br/produto/sbm-150/ "Shineray Brasil — SBM 150S"
[6]: https://www.shineray.com.br/produto/jet-125-efi/ "Shineray Brasil — JET 125 EFI"
