# Teste 3D da SHI 250 — auditoria de referências

## Referências oficiais locais verificadas

Foram inspecionadas as dez fotografias oficiais persistidas da galeria da SHI 250 e uma referência isolada de produto. Elas mostram o mesmo acabamento preto/cinza da SHI 250, mas a galeria é editorial: há um piloto em algumas imagens, detalhes aproximados e cenários externos.

| Referência local | Vista observada | Uso no pipeline |
|---|---|---|
| `01-GALERIA-SHI-250-1.webp` / `shi-250-01.webp` | 3/4 frontal esquerdo, moto inteira | Referência principal e poster candidato |
| `10-GALERIA-SHI-250-10.webp` | 3/4 frontal esquerdo, moto inteira | Referência secundária de geometria lateral/frontal |
| `06-GALERIA-SHI-250-6.webp` | traseira aproximada | Referência de lanterna, suporte e escape; não é vista traseira completa |
| Demais imagens | piloto, farol, carenagem, roda ou contra-luz | Não apropriadas como faces angulares de multi-view |

## Limitação de geração

O endpoint `multiview_to_model` do Tripo exige quatro vistas coerentes em ordem frontal, esquerda, traseira e direita. O acervo local não contém essas quatro vistas ortogonais completas. Enviá-lo como multi-view quebraria a exigência de consistência e produziria geometria pouco confiável.

O teste seguirá pela rota **image-to-model com a referência 3/4 oficial mais limpa**, mantendo textura e PBR ativados, seguida de validação rigorosa. O resultado só será integrado se preservar visualmente a identidade da motocicleta e for um GLB 3D real; caso contrário, será descartado.

## Referência isolada adicional

O acervo também contém `catalog/shi-250.webp` e `shi-250-reference-16x9.jpg`, ambas com uma SHI 250 em acabamento preto/cinza/vermelho, moto inteira e sem piloto. Esta versão é visualmente distinta do conjunto preto/cinza da galeria de campanha. Para não misturar pinturas, o teste usará **somente essa referência isolada como fonte da geração**, e o poster do eventual viewer deverá ser a mesma imagem de acabamento vermelho.

## Fonte técnica

A documentação oficial do Tripo descreve o fluxo `image_to_model` e exige exatamente quatro faces coerentes para `multiview_to_model`: [Generation — Tripo API](https://platform.tripo3d.ai/docs/generation).

## Execução automática das integrações disponíveis

O conector **Tripo AI** existente foi habilitado e recebeu uma submissão `image_to_model` com a referência oficial isolada em JPEG, textura, PBR, alinhamento à referência e qualidade detalhada. A API devolveu `HTTP 403`, código `2010`: **não há créditos suficientes para iniciar a tarefa**. Nenhum modelo foi gerado e nenhum crédito foi consumido pela tarefa recusada.

Como alternativa, foi inspecionado o conector **Comfy Cloud**, que declara suporte a assets 3D. Ele exige autorização e sua ativação não foi aprovada na sessão; por isso nenhum workflow foi executado.

Sem GLB devolvido por uma integração autorizada com créditos, a SHI 250 continua sem botão **“Explorar em 3D”**. Esta é uma decisão deliberada para não publicar uma falsa experiência 3D.

## Rota autônoma investigada

Foi identificado o Space público oficial `tencent/Hunyuan3D-2.1`, anunciado como capaz de criar uma malha 3D a partir de imagem e disponibilizar download. A página abriu sem login, mas o app embutido permaneceu em estado **“Carregando…”** durante a primeira inspeção. A próxima etapa é consultar sua API pública de Gradio, se exposta, para determinar se aceita geração autônoma e retorna um GLB sem credencial.

## Resultado das rotas autônomas

Foram tentadas, sem solicitar credenciais, pagamentos ou intervenção manual:

| Rota | Resultado | Decisão |
|---|---|---|
| Tripo AI já configurado | API retornou `403 / 2010`: créditos insuficientes | Não gerou tarefa ou GLB |
| Hunyuan3D-2.1 Space oficial | Aceitou upload e criou evento, mas finalizou em `event: error` sem arquivo de saída | Resultado descartado |
| Hunyuan3D-2.0 Space oficial | Aceitou upload e criou evento, mas finalizou em `event: error`; o cliente Gradio também expirou no handshake TLS | Resultado descartado |

O ambiente local não possui GPU e dispõe de aproximadamente 3,8 GB de memória, enquanto o Hunyuan3D-2 requer pelo menos 6 GB de VRAM para forma e 16 GB de VRAM para forma com textura. Assim, a execução local não é viável neste ambiente.

Nenhuma rota autônoma disponível devolveu um GLB. Para manter a regra do projeto, não houve integração de modelo, botão 3D, vídeo ou qualquer simulação de rotação.

## Alternativa TRELLIS.2

Foi identificada uma nova rota pública: [microsoft/TRELLIS.2](https://huggingface.co/spaces/microsoft/TRELLIS.2). A página descreve geração 3D a partir de imagem, prévia interativa e extração de GLB. O Space roda em modalidade Zero e sua instância pública indicada é `https://microsoft-trellis-2.hf.space/`; a disponibilidade será testada sem autenticação e a saída será submetida aos mesmos critérios de fidelidade da SHI 250.

O pré-processamento do TRELLIS.2 foi executado em duas referências oficiais. A imagem panorâmica cortou parcialmente a roda dianteira e foi rejeitada. Já a referência quadrada retornou a SHI 250 vermelha integralmente visível, com rodas, farol, carenagem, motor, banco e rabeta reconhecíveis. Este recorte quadrado foi aprovado como entrada da geração 3D; ele preserva a versão e o acabamento usados no poster futuro.

## Repetição controlada do TRELLIS.2

A chamada `start_session` do TRELLIS.2 foi concluída antes de repetir a geração `image_to_3d` com o mesmo recorte quadrado aprovado. Mesmo com a sessão inicializada, o evento retornou `event: error` e `data: null`, sem URL de arquivo nem GLB. A falha, portanto, não foi causada pela ausência da etapa de sessão.

## Alternativa Stable Fast 3D

Foi testado o Space público [stabilityai/stable-fast-3d](https://huggingface.co/spaces/stabilityai/stable-fast-3d), cuja página descreve a criação de uma malha 3D texturizada a partir de imagem e a visualização direta do resultado. A referência oficial completa `catalog/shi-250.webp` foi enviada com remoção de fundo interna, remalhagem triangular, meta de 12.000 vértices e textura de 2.048 px.

| Etapa | Evidência | Resultado |
|---|---|---|
| Upload da referência | Rota pública legada respondeu `200` e devolveu um caminho temporário Gradio | Entrada aceita pelo Space |
| Entrada na fila | Evento com posição `0` e estimativa de 3,5 s | Execução iniciada |
| Processamento | Mensagem final `process_completed` com `success: false` e sem detalhe de erro | Nenhum GLB ou prévia retornado |

O endpoint do Stable Fast 3D exige uso da fila e não aceita POST direto; essa condição foi atendida. Como a falha aconteceu depois de `process_starts`, não há base para atribuí-la ao contrato da chamada. O resultado foi descartado e **nenhum botão de 3D foi ativado**.

## Estado consolidado

As quatro rotas autônomas tentadas — Hunyuan3D-2.0, Hunyuan3D-2.1, TRELLIS.2 e Stable Fast 3D — aceitaram ao menos parte do fluxo de entrada, mas nenhuma retornou um GLB válido. A única integração comercial autorizada, Tripo AI, não iniciou por insuficiência de créditos. A conclusão operacional é manter o catálogo estritamente fiel: o caminho de 3D continua reservado a um modelo GLB verificável e não emprega galerias, fotos, vídeos ou transições como substitutos.

## Referências

[1] [TRELLIS.2 — Microsoft no Hugging Face](https://huggingface.co/spaces/microsoft/TRELLIS.2)

[2] [Stable Fast 3D — Stability AI no Hugging Face](https://huggingface.co/spaces/stabilityai/stable-fast-3d)
