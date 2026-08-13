# Auditoria de mercado e plano de otimização

## Resumo executivo

O catálogo foi comparado conceitualmente com padrões de sites automotivos e CTAs de conversa. A consulta SimilarWeb a `shineray.com.br` e `webmotors.com.br` foi tentada, mas a API interrompeu as chamadas por insuficiência de créditos antes de retornar métricas. Portanto, nenhum número de tráfego, ranking ou taxa de rejeição foi fabricado.

| Frente | Evidência disponível | Decisão aplicada |
|---|---|---|
| Conversa comercial | WhatsApp Business recomenda levar o visitante para uma conversa 1:1 e suporte guiado. | CTA de WhatsApp mais claro, formulário qualificando modelo, investimento e uso. |
| Headline | Referências automotivas recomendam promessa direta, verdadeira e ligada ao próximo passo. | “Escolha sua Shineray. Saia com clareza.” |
| Mobile | CTAs precisam ficar visíveis, grandes o suficiente para toque e com baixo atrito. | Rodapé fixo do livro, página da moto antes da ficha, galeria visível e formulário empilhado. |
| Medição | SimilarWeb não mede os leads privados deste preview. | Eventos de primeira parte: abertura do catálogo, capítulo, galeria, filtros, orçamento e WhatsApp. |

## Eventos preparados

O catálogo agora expõe eventos compatíveis com o analytics já presente no projeto: `catalog_open`, `chapter_change`, `gallery_view`, `catalog_search`, `catalog_filter`, `catalog_filter_clear`, `quote_open`, `quote_submit` e `whatsapp_click`. Os eventos não enviam nome ou telefone; o formulário continua abrindo a conversa qualificada no WhatsApp oficial.

## Referências

1. [WhatsApp Business — Ads that click to WhatsApp](https://whatsappbusiness.com/resources/resource-library/ads-that-click-to-whatsapp-best-practices/)
2. [Landingi — 20 Best CTA on Landing Page Examples](https://landingi.com/blog/cta-on-landing-pages-playbook-examples/)
3. [GetResponse — The definitive guide to automotive landing page](https://www.getresponse.com/blog/automotive-landing-page)
