# Neto Motos — Arquivo de Performance

Catálogo editorial cinematográfico para apresentação comercial de motocicletas Shineray e SBM da Neto Motos. O projeto usa React, TypeScript, Vite, Tailwind CSS e uma navegação em formato de livro, com foco em leitura de produto e conversão para WhatsApp.

## O que está incluído

O catálogo contém a capa cinematográfica, modo livro, modo lista, filtros por marca, família e faixa de preço, galerias oficiais com lightbox, seletor de cores quando há variantes verificáveis, copy comercial, ficha técnica, formulário de orçamento e CTAs para o WhatsApp da Neto Motos. O escopo final contém apenas motocicletas a combustão publicadas no catálogo, incluindo linhas Shineray e SBM.

A última revisão visual auditou os 32 capítulos publicados em desktop e mobile. A hero da PHOENIX S EFI foi substituída por uma fotografia oficial cinza em perfil com a motocicleta inteira dentro do quadro. A capa cinematográfica e as galerias foram preservadas.

## Desenvolvimento local

Requisitos: Node.js 22 ou compatível, pnpm e acesso às URLs persistentes de assets usadas pelo projeto.

```bash
pnpm install
pnpm test
pnpm check
pnpm build
pnpm dev
```

O site usa URLs `/manus-storage/` para os assets persistentes do projeto. Portanto, o código baixado pelo GitHub é o código-fonte do catálogo e não é um pacote autônomo de imagens locais. Para operar exatamente como a versão aprovada, o comprador deve manter o projeto no ambiente Manus/WebDev ou substituir as URLs por um storage próprio com autorização para os assets.

## Observações comerciais importantes

Preços, disponibilidade, cores, frete, documentação e condições são referências e precisam ser confirmados com a Neto Motos antes de qualquer anúncio. O site não deve ser apresentado como e-commerce transacional nem como garantia de estoque.

As fotografias de motocicletas foram catalogadas a partir de páginas oficiais da Shineray e devem ser usadas somente quando houver autorização comercial da fabricante ou da revenda. A publicação deste código não transfere automaticamente direitos sobre marcas, fotografias, logotipos, vídeo ou áudio de terceiros. O comprador deve obter ou documentar essas autorizações antes de revender a solução como produto final.

## Verificações executadas

- `pnpm test`: 2 testes aprovados.
- `pnpm check`: TypeScript sem erros.
- `pnpm build`: build de produção aprovado.
- Auditoria visual dos 32 capítulos em 1440 × 900 e 430 × 932.
- Checklist do projeto sem pendências técnicas nesta rodada.

## Estrutura principal

- `client/src/data/motos.ts`: catálogo principal e heroes.
- `client/src/data/officialGalleries.ts`: manifesto das galerias oficiais.
- `client/src/components/BookFrame.tsx`: livro, navegação, galeria e lightbox.
- `client/src/index.css`: tokens, composição editorial e responsividade.
- `research/`: auditorias, fontes e decisões de cobertura.
- `todo.md`: histórico de execução e validações.

## Licença

O código deste repositório pode ser transferido ao comprador conforme o acordo comercial firmado entre as partes. Este repositório não concede licença automática sobre marcas, imagens, vídeo, áudio, textos de terceiros, domínio, hospedagem ou dados comerciais da Neto Motos. Defina esses itens expressamente no contrato de venda.
