# URBAN 150 EFI — investigação do configurador oficial 360º

## Evidência de recurso oficial

Uma extração cacheada da página oficial da Shineray confirmou o bloco **“URBAN 150 EFI em 360º”**, seguido pelo marcador **“your 360 images”**. A mesma fonte lista quatro acabamentos: **URBAN-150-VERMELHA**, **URBAN-150-PRETA**, **URBAN-150-AZUL** e **URBAN-150-ROXA**. Isso confirma que a fabricante publica um configurador de rotação associado ao modelo e às cores, mas o conteúdo textual não expõe suas URLs de frames ou modelo.

## Estado de acesso na sessão

| Rota | Resultado | Consequência |
|---|---|---|
| Navegador na URL oficial | `408 Request Time-out` | Não foi possível observar o DOM/canvas em execução nesta sessão |
| Endpoints públicos REST do WordPress | `408` em três variações de tipo de post | Metadados não puderam ser consultados diretamente |
| Internet Archive — índice CDX | Capturas HTML disponíveis de 2024 a 2026 | Fonte alternativa para inspecionar HTML histórico |
| Captura arquivada de 2025 | HTML baixado, mas sem o marcador atual do configurador | Não serve para integrar assets atuais |

## Payload confirmado no HTML fornecido

O HTML copiado pelo usuário diretamente do navegador revelou o widget `elementor-widget-360-javascript-viewer` com a seguinte configuração oficial:

| Campo no widget | Valor encontrado | Uso no catálogo |
|---|---|---|
| Imagem inicial | `URBAN-150_01.webp` | Primeiro ângulo da sequência |
| Formato | `URBAN-150_xx.webp` | Geração determinística dos 19 URLs consecutivos |
| Quantidade | `data-total-frames="19"` | Limite real de ângulos, sem interpolação |
| Origem | `/wp-content/uploads/2026/04/` no domínio Shineray | Fonte preservada no manifesto |
| Cor | Nenhum atributo de cor no widget | Sequência mantida no nível do modelo, não atribuída artificialmente aos swatches estáticos |

O manifesto `official360Sequences["urban-150-efi"]` passou a referenciar exclusivamente esses 19 frames. A galeria editorial, as fotos de hero e as variantes de acabamento continuam separadas e nunca são usadas como fallback.

## Limitação de persistência nesta sessão

O host da Shineray respondeu `408` às tentativas de download feitas a partir do ambiente de desenvolvimento, apesar de o HTML fornecido confirmar que os frames foram carregados pelo navegador do usuário. Por isso, os URLs oficiais foram integrados diretamente, tal como o widget da fabricante os entrega; não foi criada cópia, imagem substituta ou sequência sintética.

## Fonte

[Página oficial da URBAN 150 EFI](https://www.shineray.com.br/produto/urban-150-efi/)
