
## Achados visuais desta rodada

A auditoria comparou a capa, o modo lista e capítulos representativos da SHI 175S EFI, SBM 150S, SHI 250 e JET 125 em desktop 1440×900, além de capa, lista, SHI 175S EFI e SBM 150S em mobile 430×932. A capa permaneceu intacta. Os heroes amostrados mostram a motocicleta inteira em fotografias isoladas, sem corte do produto; SHI 175S EFI e SBM 150S seguem agora o padrão lateral/isolado. O modo lista exibiu 32 resultados de combustão.

A otimização aplicada reduziu o pré-carregamento de três capítulos e múltiplas fotos para a hero dos capítulos vizinhos e as duas imagens visíveis do capítulo atual. Imagens secundárias passaram a usar carregamento lazy; a galeria, lightbox e a hero visível continuam funcionais. `pnpm check` e `pnpm build` passaram, com bundle principal de aproximadamente 697 KB antes de gzip. Os logs recentes não mostram erro novo de execução; o registro antigo de `dotenv` pertence à configuração acidental anterior e não reapareceu após o rollback.
