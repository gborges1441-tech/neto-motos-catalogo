# Varredura de cobertura 360º oficial — 15 de agosto de 2026

## Critério de ativação

Uma página que exibe o texto “em 360º” e o marcador “your 360 images” demonstra que a fabricante publica um configurador. Contudo, o catálogo só ativa o recurso após registrar **todos os URLs angulares ordenados** do widget, sem recorrer a imagens de galeria, hero ou cores estáticas.

## Evidência inicial

| Modelo | Página oficial consultada | Marcador 360º | Frames completos extraídos | Situação no catálogo |
|---|---|---:|---:|---|
| URBAN 150 EFI | `/produto/urban-150-efi/` | Sim | 19 | Ativo com sequência oficial comprovada |
| JET 125 | `/produto/jet-125/` | Sim | 19 | Ativo com sequência oficial persistida fornecida pelo usuário |
| JEF 150 | `/produto/jef-150/` | Sim | Ainda não | Pendente de payload do widget |
| URBAN LITE | `/produto/urban-lite/` | Sim | Ainda não | Pendente de payload do widget |
| SHI 175 | `/produto/shi-175/` | Sim | Ainda não | Pendente de payload do widget |
| SHI 170 | `/produto/shi-170/` | Sim | Ainda não | Pendente de payload do widget |
| SHI 175s EFI | `/produto/shi-175s-efi/` | Sim | Ainda não | Pendente de payload do widget |
| SHI 400sc | `/produto/shi-400sc/` | Sim | Ainda não | Pendente de payload do widget |
| STORM 200 EFI | `/produto/storm-200/` | Sim | Ainda não | Pendente de payload do widget |

## Nota de método

As páginas acima foram consultadas na própria fabricante e o marcador foi confirmado no conteúdo público. A JET 125 também teve uma cópia HTML de 22 de abril de 2026 consultada no arquivo público: o widget declarou `data-main-image-url="NEW-JET-1.webp"`, `data-image-url-format="NEW-JET-x.webp"` e `data-total-frames="24"`. Em 15 de agosto de 2026, o usuário forneceu uma sequência integral de 19 PNGs de 768 × 512. A folha de contato confirmou a mesma JET 125 em acabamento roxo, com ângulos contínuos e sem frame em branco; os 19 arquivos foram publicados no armazenamento persistente e substituíram os links remotos instáveis. A API WordPress não expôs o HTML renderizado dos demais widgets nesta sessão; portanto, nenhum outro modelo é ativado até que sua sequência seja obtida do DOM oficial e validada.

## Fontes

- [URBAN 150 EFI](https://www.shineray.com.br/produto/urban-150-efi/)
- [JET 125](https://www.shineray.com.br/produto/jet-125/)
- [JEF 150](https://www.shineray.com.br/produto/jef-150/)
- [URBAN LITE](https://www.shineray.com.br/produto/urban-lite/)
- [SHI 175](https://www.shineray.com.br/produto/shi-175/)
