# Auditoria de entrega portátil — 2026-08-16

## Diagnóstico inicial

O endereço `https://gborges1441-tech.github.io/neto-motos-catalogo/` estava ativo, mas servia o `README.md` do repositório em vez da aplicação compilada. Isso confirma que o GitHub Pages não havia recebido uma distribuição estática na branch/pasta configurada.

Foram inventariadas 442 referências a `/manus-storage/` e todas foram copiadas com sucesso para uma pasta local de entrega, somando 80.510.477 bytes e zero falhas de download. A primeira abertura da build portátil comprovou que o HTML e a aplicação carregam sem o servidor Manus, mas revelou uma mídia visual não resolvida na capa. A próxima etapa é verificar os caminhos gerados e corrigir essa referência antes de publicar a distribuição.

## Correção e validação

O primeiro pacote tinha uma pasta `assets/assets/` criada por uma cópia de diretório em vez de conteúdo; por isso, logo, pôster e vídeo não eram localizados. A distribuição foi reconstruída com os 442 arquivos diretamente em `assets/`. A capa passou a carregar a logo local e o capítulo PHOENIX S EFI abriu diretamente com suas imagens de galeria resolvidas em URLs locais `assets/`, sem referência restante a `/manus-storage/` na build final.

## Auditoria do GitHub Pages

Após a publicação da branch estática em `main`, o HTML público passou a responder 200 com o `index.html` do catálogo. Logo, pôster, vídeo, hero isolada da PHOENIX S EFI e uma imagem da sua galeria também responderam 200 no domínio público. A comparação entre o manifesto local e a branch publicada confirmou os 442 assets esperados, sem ausências; a branch contém 446 arquivos em `assets/` porque também inclui os bundles CSS e JavaScript do Vite. O `.nojekyll`, `404.html` e `vercel.json` também foram confirmados na raiz publicada.
