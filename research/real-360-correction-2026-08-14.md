# Correção de integridade — visualizador 360º

## Fato verificado

A página oficial do URBAN 150 EFI informa a existência da seção **“URBAN 150 EFI em 360º”**, mas o extrator textual não expõe o payload, a ordem angular nem os URLs dos frames desse configurador. O navegador automatizado e os endpoints WordPress públicos retornaram verificação de bot, impedindo a inspeção do DOM e dos scripts em tempo real.

## Erro corrigido

A implementação anterior alimentava o componente com os dez primeiros arquivos de galeria oficial. Essas imagens são fotografias editoriais de detalhes e diferentes enquadramentos; portanto, não constituem uma sequência de giro e não devem ser apresentadas como 360º.

O manifesto `official360Frames.ts` foi esvaziado e os conjuntos de cor do URBAN 150 EFI deixaram de enviar imagens ao visualizador. Assim, o botão de 360º fica oculto até que haja uma sequência oficial completa, ordenada e verificável.

## Critério obrigatório para reativação

O recurso só volta ao catálogo quando houver, para cada modelo e acabamento, uma lista de frames oficiais com fonte, ordem angular e continuidade visual conferidas. A interação está preparada para giro direto por arraste, com mouse, toque, setas e sem autoplay; ela não será ligada com galerias, imagens geradas ou ângulos inferidos.
