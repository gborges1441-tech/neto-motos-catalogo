# Critérios de aceitação — 360º e 3D dos modelos Shineray

## Decisão de produto

O catálogo deve apresentar uma motocicleta como **360º oficial** somente quando houver uma sequência angular completa, ordenada e vinculada ao widget da fabricante. Ele pode apresentar um modelo como **3D** somente quando houver um arquivo GLB/GLTF utilizável, com origem e licença verificáveis, cuja identidade visual seja aprovada contra referências oficiais multivista.

> Um vídeo gerado, uma galeria editorial, imagens isoladas de catálogo ou uma malha inferida a partir de uma única vista não são equivalentes a uma rotação real. Esses materiais não acionam controles 360º/3D no catálogo.

| Material disponível | Pode ativar giro 360º? | Pode ativar 3D? | Decisão |
|---|---:|---:|---|
| Widget oficial com frames consecutivos documentados | Sim | Não automaticamente | Integrar no `official360Sequences` |
| GLB/GLTF oficial, identificável e licenciado | Não automaticamente | Sim | Integrar no `official3DModels` |
| Frames parciais, imagem de hero ou galeria | Não | Não | Manter oculto |
| Vídeo ou renderização generativa baseada em fotos | Não | Não | Pode servir apenas como referência interna, nunca como recurso anunciado ao cliente |
| Múltiplas vistas oficiais consistentes + saída GLB verificável | Não automaticamente | Condicional | Comparar visualmente, registrar fonte e então aprovar |

## Cobertura no momento

| Modelo | Material comprovado | Estado permitido |
|---|---|---|
| URBAN 150 EFI | Widget oficial com 19 frames `URBAN-150_01` a `URBAN-150_19` | 360º ativo |
| JET 125 | Widget oficial com contrato `NEW-JET-x.webp` e 24 frames | 360º ativo |
| JEF 150, URBAN LITE, SHI 175, SHI 170, SHI 175s EFI, SHI 400sc, STORM 200 EFI | Marcador público 360º confirmado, mas payload de frames ainda indisponível nesta sessão | Controle oculto até extração completa |

## Próxima rota autônoma

Priorizar captura de contratos do widget através de fonte pública estável (HTML arquivado ou retorno do site). A geração 3D somente volta a ser considerada depois de reunir, por modelo, referências de vários ângulos e um serviço que entregue GLB/GLTF com licença verificável.

## Estado das rotas de geração 3D

As rotas autônomas já testadas no projeto — Tripo AI, Hunyuan3D-2.0, Hunyuan3D-2.1, TRELLIS.2 e Stable Fast 3D — não retornaram um GLB válido: a integração comercial não tinha créditos e os serviços públicos finalizaram sem arquivo de saída. Além disso, os demais modelos não têm nesta sessão referências multivista completas recuperáveis. Portanto, não há base técnica ou de fidelidade para fabricar modelos 3D “perfeitos” a partir de hero, galeria ou vídeo.

Enquanto a fonte oficial estiver intermitente, a rota segura é manter ativos apenas os giros de **URBAN 150 EFI** e **JET 125**, que têm contrato de frames comprovado. Os demais mantêm o controle oculto, preservando a honestidade do catálogo.

## Teste auxiliar de identidade — URBAN 150 EFI

Foi iniciado um lote controlado de cinco ângulos auxiliares usando uma referência oficial persistida da URBAN 150 EFI. O lote tem finalidade exclusiva de avaliação de identidade e consistência; seus resultados não entram no manifesto 360º, não substituem os 19 frames oficiais e não serão apresentados como material da fabricante. A aprovação exigiria correspondência visual rigorosa de carenagem, rodas, espelhos, escapamento, proporções e acabamento em todos os ângulos, além de transparência explícita sobre a origem.
