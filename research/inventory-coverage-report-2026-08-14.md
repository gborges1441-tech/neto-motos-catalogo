# Relatório de cobertura do inventário oficial — 14 de agosto de 2026

## Escopo

Esta auditoria reconcilia a linha oficial publicada pela Shineray do Brasil com o catálogo comercial da Neto Motos. O recorte aplicado é **motocicletas a combustão**, incluindo os modelos SBM publicados como linha premium, e exclui elétricos, mobilidade pessoal, automóveis, utilitários, ATVs, karts e demais categorias fora de duas rodas a combustão. As páginas individuais foram usadas como fonte principal para galerias, componentes, preços de referência e fichas técnicas [1] [2] [3].

O catálogo passou de 21 para **32 modelos publicados**. A fonte persistente reúne **316 fotografias oficiais de galeria em 32 modelos**; alguns modelos também receberam um hero oficial adicional de apresentação porque a primeira fotografia da galeria era um close, cockpit ou cena inadequada para a abertura do capítulo.

## Inventário publicado

| Marca | Modelo | Categoria editorial | Galeria oficial | Hero promovido | Fonte |
|---|---|---|---:|---|---|
| SHINERAY | JEF 170 | Street | 10 | Sim | [2] |
| SHINERAY | SHI 400SC | Scrambler | 10 | Sim | [2] |
| SHINERAY | SHI 175 | Trail | 10 | Vista lateral oficial | [2] |
| SHINERAY | SHI 170 | Trail | 10 | Sim | [2] |
| SHINERAY | URBAN LITE | Scooter | 10 | Sim | [2] |
| SHINERAY | JET 50 | Ciclomotor | 10 | Sim | [2] |
| SHINERAY | JET 125 | Scooter | 10 | Sim | [2] |
| SHINERAY | SHI 250 | Trail | 10 | Sim | [2] |
| SHINERAY | URBAN 150 EFI | Scooter | 10 | Sim | [2] |
| SHINERAY | 250F | Street sport | 10 | Sim | [2] |
| SHINERAY | SHI 175S EFI | Trail | 10 | Sim | [2] |
| SHINERAY | FREE 150 EFI | Street | 10 | Sim | [2] |
| SHINERAY | JEF 150S EFI | Street | 8 | Sim | [2] |
| SHINERAY | RIO 125 EFI | Street | 10 | Sim | [2] |
| SHINERAY | PHOENIX S EFI | Ciclomotor | 10 | Sim | [2] |
| SHINERAY | JET 125 EFI | Scooter | 10 | Hero corrigido | [4] |
| SHINERAY | JEF 150 | Street | 10 | Sim | [2] |
| SHINERAY | PHOENIX S | Ciclomotor | 10 | Sim | [2] |
| SHINERAY | STORM 200 EFI | Crossover | 10 | Moto inteira oficial | [5] |
| SBM | SBM 150S | Street | 8 | Sim | [3] |
| SBM | SBM 250S | Sport | 10 | Sim | [3] |
| SBM | SBM 400S | Naked | 10 | Moto inteira oficial | [3] |
| SBM | SBM 400SS | Trail | 10 | Estúdio oficial | [6] |
| SBM | SBM 600V | Cruiser | 10 | Lateral de estúdio | [7] |
| SBM | SBM 250T | Trail | 10 | Lateral de estúdio | [8] |
| SBM | DENVER | Cruiser | 10 | Moto inteira em contexto | [9] |
| SBM | SBM 600 | Cruiser | 10 | Lateral de estúdio | [10] |
| SBM | SBM 600T | Trail | 10 | Hero oficial de apresentação | [11] |
| SBM | SBM 600RC | Sport | 10 | Lateral de estúdio | [12] |
| SBM | SBM 400RR | Sport | 10 | Recorte lateral oficial | [13] |
| SBM | IRON | Cruiser | 10 | Moto inteira oficial | [14] |
| SBM | TITANIUM | Cruiser | 10 | Moto inteira em contexto | [15] |

## Critérios de integração

Cada modelo novo usa o mesmo contrato de dados do livro: marca, categoria, cilindrada, preço de referência, copy de conversão, benefícios, detalhes editoriais alternados, ficha técnica, origem oficial e galeria persistente. A fotografia promovida a hero é uma imagem publicada pela fabricante; nenhuma moto foi gerada, retocada ou reconstruída artificialmente.

Quando a galeria oficial começa com close, cockpit ou componente, o hero foi promovido a partir de outro asset oficial da própria página ou da imagem de apresentação associada ao produto. As imagens secundárias continuam disponíveis no lightbox, mantendo a ordem original da galeria e a resolução persistente usada para zoom.

## Validação

O TypeScript e o build de produção passaram após a integração. A lista passou a exibir **32 resultados** e mantém os filtros SHINERAY/SBM, estilo, preço e busca. A capa permanece sem alteração. O book, o modo lista, o contain das motos, o lightbox e o mobile continuam usando os componentes existentes.

## Pendências honestas

As páginas oficiais indicam cores e frames 360º em alguns modelos, mas esses recursos permanecem registrados como fonte de auditoria e não foram transformados em uma experiência 360 falsa. A próxima evolução pode integrar cores e 360º somente depois de receber os frames completos e confirmar o comportamento comercial do Neto para cada variação.

## References

[1]: https://www.shineray.com.br/produtos/ "Shineray do Brasil — listagem oficial de produtos"
[2]: https://www.shineray.com.br/produto/shi-250/ "Shineray do Brasil — páginas individuais de produtos a combustão"
[3]: https://www.shineray.com.br/sbm/produtos-sbm/ "Shineray do Brasil — linha SBM"
[4]: https://www.shineray.com.br/produto/jet-125ss-efi/ "Shineray do Brasil — JET 125 EFI"
[5]: https://www.shineray.com.br/produto/storm-200/ "Shineray do Brasil — STORM 200"
[6]: https://www.shineray.com.br/produto/sbm-400ss-2/ "Shineray do Brasil — SBM 400SS"
[7]: https://www.shineray.com.br/produto/sbm-600v/ "Shineray do Brasil — SBM 600V"
[8]: https://www.shineray.com.br/produto/sbm-250t/ "Shineray do Brasil — SBM 250T"
[9]: https://www.shineray.com.br/produto/denver/ "Shineray do Brasil — DENVER"
[10]: https://www.shineray.com.br/produto/sbm-600/ "Shineray do Brasil — SBM 600"
[11]: https://www.shineray.com.br/produto/sbm-600t/ "Shineray do Brasil — SBM 600T"
[12]: https://www.shineray.com.br/produto/sbm-600rc/ "Shineray do Brasil — SBM 600RC"
[13]: https://www.shineray.com.br/produto/sbm-400rr/ "Shineray do Brasil — SBM 400RR"
[14]: https://www.shineray.com.br/produto/iron/ "Shineray do Brasil — IRON"
[15]: https://www.shineray.com.br/produto/titanium/ "Shineray do Brasil — TITANIUM"
