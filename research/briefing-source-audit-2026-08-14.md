# Auditoria do briefing e das fontes oficiais — 2026-08-14

## Restrições do briefing

- A capa está aprovada e não deve ser alterada.
- O catálogo interno deve incluir somente motocicletas a combustão efetivamente comercializadas pelo Neto.
- Produtos elétricos, patinetes, cicloelétricos, triciclos, quadriciclos e outros itens de mobilidade devem ser excluídos.
- Não usar contagem fixa de modelos na comunicação principal.
- A linha SBM deve ser tratada separadamente da linha Shineray quando houver modelos confirmados.

## Fontes oficiais consultadas

- `https://www.shineray.com.br/` abriu em verificação de robô/captcha; não foi possível auditar a página visualmente nesta sessão.
- `https://www.shineray.com.br/sbm/` retornou conteúdo textual apesar do bloqueio visual e listou os caminhos oficiais: `SBM 150`, `SBM 250s` e `SBM 400s`.
- As páginas oficiais específicas identificadas foram `https://www.shineray.com.br/produto/sbm-150/`, `https://www.shineray.com.br/produto/sbm-250s/` e `https://www.shineray.com.br/produto/sbm-400/`.

## Inventário local auditado

O arquivo `client/src/data/motos.ts` contém 29 objetos ordenados com `SHI 250` primeiro. Os modelos `SE1`, `SE2`, `SHE-S`, `PTXS`, `PT-STAND`, `PT4-PRO`, `PTXR`, `PT1S` e `PT2XS` estão explicitamente classificados como elétricos ou mobilidade elétrica e devem sair do catálogo interno desta rodada. Os demais objetos atuais são Shineray a combustão, mas a disponibilidade real do Neto ainda precisa ser tratada como sob consulta, sem afirmar estoque.

## Decisão de segurança de conteúdo

Não adicionar os modelos SBM ao inventário sem confirmar que o Neto efetivamente os comercializa e sem obter os dados/fotografias oficiais correspondentes. A linha será preparada como estrutura de dados separada quando houver fonte e confirmação suficientes.

## Dados oficiais incorporados

Após a extração das páginas oficiais específicas, foram confirmados e incorporados três modelos SBM a combustão: **SBM 150S**, com 149,05 cc, 12,34 CV, câmbio de 5 marchas e ABS dianteiro; **SBM 250S**, com 249 cc, 27,5 CV, câmbio de 6 marchas, garfo invertido e ABS de duplo canal; e **SBM 400S**, com 399,73 cc, 41 CV, motor bicilíndrico, câmbio de 6 marchas e ABS de duplo canal. Os preços foram mantidos como referência pública — R$ 16.290,00, R$ 23.490,00 e R$ 33.490,00 — com a orientação de confirmar condições e disponibilidade com o Neto.

Foram baixadas e publicadas nove fotografias oficiais, três por modelo, em `/manus-storage/`. A extração também confirmou que as páginas oficiais oferecem experiência 360º, mas nenhum asset 360º autorizado foi integrado nesta rodada; o catálogo não simula uma rotação inexistente.

## Auditoria adicional do catálogo oficial em 14/08/2026

A página oficial `/produtos/` lista, entre outros itens, JEF 170, SHI 400sc, SHI 175, SHI 170, JET 50, JET 125, SHI 250, SH4, SH3, URBAN 150 EFI, 250F e SHI 175s EFI, além de veículos automotivos, ATVs, karts e mobilidade elétrica. O inventário do Neto deve ser cruzado com essa lista, mas o recorte do projeto exclui TLUX, DTRUCK, CGE Rover/Nomad, ATVs, KARTs, PTs e qualquer item elétrico ou automotivo. A página oficial também expõe links e imagens individuais por modelo, que serão usados como fonte de nomes, preços de referência e galerias — nunca como autorização implícita de uso comercial.

A segunda página oficial acrescenta, entre outros, FREE 150 EFI, JEF 150S EFI, RIO 125 EFI, PHOENIX S EFI, JET 125 EFI, JEF 150 e PHOENIX S. Também lista CGE8, PTXS, PT-STAND, PT4-PRO, PTXR, PT3/3S, PT2, PT1, ATV 200, SE1, SE2 e SHE-S, classificados como veículos, mobilidade elétrica, triciclo ou outros produtos fora do recorte. A lista oficial confirma que o inventário elegível deve ser definido por tipo de produto e confirmação comercial, não pelo total bruto de itens da página.

### Fichas oficiais extraídas nesta rodada

| Modelo | Componentes destacados oficialmente | Dados técnicos capturados |
|---|---|---|
| JEF 170 | Painel 100% digital; rodas de liga leve aro 17; freio dianteiro a disco; monoshock; full LED; USB, cavalete central e descanso lateral | 169,30 cc; 13,59 CV; 15 N.M; 5 marchas; tanque 12 L; carga máxima 150 kg |
| SHI 400SC | Painel TFT; rodas 19/18; ABS de duplo canal; garfo telescópico; dois amortecedores; full LED; USB e sensor de cavalete | 399,7 cc; 26,5 CV; 30 N.M; 5 marchas; tanque 14 L; carga máxima 150 kg |
| SHI 175 | Painel digital; rodas raiadas 19/17; discos nas duas rodas; monoshock; full LED com DRL; USB/USB-C, alarme e partida remota | 175,11 cc; 15,63 CV; 14 N.M; 5 marchas; tanque 14,5 L; carga máxima 150 kg |
| SHI 170 | Painel 100% digital; rodas aro 18; disco dianteiro; suspensão telescópica e traseira convencional; full LED; USB/USB-C e cavalete central | 169,30 cc; 13,59 CV; 11,45 N.M; 5 marchas; tanque 12,5 L; carga máxima 150 kg |

As quatro páginas oficiais também exibem galerias de múltiplas fotografias e, para SHI 400SC, SHI 175 e SHI 170, uma seção oficial “em 360º”. O catálogo não deve inventar uma rotação sem que os frames autorizados possam ser baixados e usados.

### Segunda leva de fichas oficiais

| Modelo | Componentes destacados oficialmente | Dados técnicos capturados |
|---|---|---|
| URBAN LITE | Painel 100% digital; rodas de liga leve; guarda-volumes; full LED; USB/USB-C; cavalete central | 149,48 cc; 13,5 cv; 11 N.m; CVT automático; tanque 8 L; CBS; rodas 13” |
| JET 50 | Painel digital com gasolina/marcha/velocidade; rodas de liga leve; full LED; guarda-volumes; USB e ganchos | 49,4 cc; 2,71 CV; 2,6 N.M; 4 marchas; tanque 3 L; carga máxima 150 kg |
| JET 125 | Painel digital; rodas de liga leve 17/14; full LED; guarda-volumes; USB e acessórios urbanos | 123,67 cc; 8,15 CV; 8,0 N.M; 4 marchas; tanque 3 L; carga máxima 150 kg |
| SHI 250 | Painel digital; rodas raiadas; discos nas duas rodas; garfo invertido; monoshock; Full LED/DRL; USB | 249,9 cc; 19,3 CV; 18 N.M; 6 marchas; tanque 18 L; CBS; rodas 21/18 |

### Terceira leva de fichas oficiais

| Modelo | Componentes destacados oficialmente | Dados técnicos capturados |
|---|---|---|
| SH4 | Painel digital; rodas de liga leve; bateria; motor elétrico Brushless | Classificado como elétrico e excluído do catálogo, apesar da nomenclatura de scooter |
| SH3 | Painel digital; rodas de liga leve; bateria; motor elétrico Brushless | Classificado como elétrico e excluído do catálogo |
| URBAN 150 EFI | Painel digital com espelhamento; Start/Stop; ABS de dois canais; Full LED/DRL; para-brisa ajustável | 149 cc; 12,9 cv; 13 N.m; automático; tanque 13,5 L; carga máxima 150 kg |
| 250F | Painel digital; ABS de dois canais; injeção eletrônica; garfo invertido; monoshock; Full LED/DRL | 248,92 cc; 27,9 CV; 22,5 N.M; 6 marchas; refrigeração líquida; tanque 13,5 L |

### Quarta leva de fichas oficiais

| Modelo | Componentes destacados oficialmente | Dados técnicos capturados |
|---|---|---|
| SHI 175S EFI | Painel digital; rodas raiadas 19/17; discos nas duas rodas; monoshock; Full LED/DRL; USB/USB-C; alarme e partida remota | 175,11 cc; 15,63 CV; 14 N.M; 5 marchas; tanque 14,5 L; carga máxima 150 kg |
| FREE 150 EFI | Painel digital; rodas de liga leve 18; disco dianteiro; suspensão telescópica; DRL e LED; suporte para celular | 149 cc; 11,96 cv; 9,8 N.m; 5 marchas; tanque 12 L; carga máxima 150 kg |
| JEF 150S EFI | Painel digital; rodas aro 17; disco dianteiro; monoshock; lanternas Full LED; porta USB | 149 cc; 13,5 CV; 14 N.M; 5 marchas; tanque 12 L; carga máxima 150 kg |
| RIO 125 EFI | Painel digital; rodas de liga leve 17/14; disco dianteiro; bi-shock; Full LED/DRL; guarda-volumes e USB | 123,67 cc; 8 CV; 9,0 N.M; 4 marchas; tanque 4,2 L; carga máxima 150 kg |

### Correção de inventário identificada na auditoria final

Embora o banco local ainda trouxesse SH4 e SH3 com a categoria genérica “Scooter / urbana”, as páginas oficiais descrevem ambos como veículos elétricos, com bateria de 48 V e motor Brushless. Portanto, os dois devem ser excluídos do recorte “somente motocicletas a combustão”; o filtro não pode depender apenas do texto da categoria local.

Com essa correção, o inventário elegível passa a conter 18 modelos Shineray a combustão e 3 modelos SBM, totalizando 21 capítulos de produto. O número é usado apenas para auditoria interna; a interface do livro continuará sem contador total nas páginas internas, conforme o briefing.

### Validação visual intermediária

Em 1440 × 900, o spread passou a apresentar a página direita como hero dominante, com marca, categoria e cilindrada antes da fotografia, galeria oficial abaixo e lente circular preservada. A página esquerda mantém a abertura de copy e começa a leitura “O que muda na prática”; a ficha técnica permanece no mesmo papel editorial por rolagem interna, sem alterar a capa.

Em 390 × 844, a página única apresenta a fotografia completa em `contain`, miniaturas horizontais, copy, preço, três blocos alternados de imagem e benefício e, ao final, a ficha técnica em painel escuro. A leitura permanece vertical e não houve corte da motocicleta.

Após retirar a faixa fixa do rodapé interno desktop, o primeiro bloco editorial passou a aparecer no fluxo natural da página. O rodapé de preço e atendimento segue depois da ficha técnica; a navegação inferior do livro continua sendo o CTA principal de WhatsApp e os botões de capítulo.

Na revisão final, a capa permaneceu exatamente na composição aprovada. O CTA interno do livro passou a usar o Vermelho Lombada como superfície de ação, mantendo o círculo verde do WhatsApp apenas como reconhecimento de serviço. A captura mobile pós-revisão manteve a moto inteira, a galeria oficial, o conteúdo editorial e a ficha técnica no mesmo fluxo vertical.

### Nova auditoria de enquadramento

A fotografia atualmente escolhida como primeira imagem da SHI 250 é um enquadramento contextual 16:9, frontal e baixo, em que a roda dianteira e o farol ocupam grande parte da área visual. Ela é oficial e adequada como fotografia narrativa, mas não como hero principal de um catálogo de produto quando a intenção é reconhecer a moto inteira de imediato. A ordem dos assets precisa separar a imagem de produto lateral/estúdio da imagem de campanha contextual, e o CSS precisa permitir que o hero use a área disponível sem recortes laterais ou verticais.

Os assets em `webdev-static-assets/shineray/catalog/` confirmam a solução solicitada: são recortes oficiais de 500 × 500 px, com fundo transparente e a motocicleta inteira em ângulo lateral/3⁄4. A SHI 250 e a JEF 170, por exemplo, aparecem completas nesses recortes. Eles devem ser usados como `images[0]`/hero de produto, sem `object-fit: cover`, e as galerias 1920 × 1080 de estrada ou campanha devem permanecer abaixo como contexto.

Para a linha SBM, os arquivos oficiais publicados nesta rodada são fotografias 1920 × 1080 de campanha; não há um recorte transparente lateral equivalente disponível no asset local. Eles continuarão em `contain`, sem cortes, até que exista uma imagem oficial de estúdio autorizada — não será criada ou simulada uma vista que a fonte não oferece.

### Primeira iteração autônoma aplicada

O hero da SHI 250 passou a usar o recorte oficial lateral sem fundo de catálogo, e as galerias contextuais foram mantidas como thumbnails secundários. Em 1440 × 900, a moto aparece inteira e reconhecível na página direita. Em 1280 × 720, a escala foi recalculada com a altura real do shell e a reserva inferior foi reduzida: o book ocupa praticamente toda a área útil, a navegação inferior continua visível e o CTA não fica cortado.

No mobile, a mesma imagem lateral aparece completa em `contain`, sem o farol isolado. O WhatsApp flutuante duplicado, que ficava sobre a copy, foi removido do catálogo aberto; permanece somente o CTA inferior fixo, com o ícone reconhecível e a mensagem contextual do modelo.

Em 1366 × 768, o book manteve páginas grandes e o CTA inferior visível. Em 1920 × 1080, a remoção do `max-width: 1320px` do shell e do limite de escala 1× permitiu que o spread crescesse proporcionalmente até a área útil real, sem o grande vazio preto lateral/inferior observado antes.

As capturas seguintes confirmaram o efeito em 1920 × 1080 e 1440 × 900: as páginas passaram a ocupar o palco com margens editoriais controladas, a SHI 250 aparece como recorte lateral sem fundo e o modo lista reutiliza os mesmos assets oficiais de produto nos cards de SHI 250 e JEF 170.

Em 430 × 932 no mobile, a página única mantém a moto inteira e maior, miniaturas abaixo, copy legível, preço, blocos alternados e ficha técnica sem corte. A remoção do botão flutuante duplicado evita a sobreposição que havia sido observada na captura viewport curta.

Após reiniciar o servidor, a captura 1440 × 900 confirmou o spread ampliado, o hero lateral sem fundo e o CTA visível. A captura 430 × 932 confirmou o mesmo asset inteiro, a ausência do botão flutuante redundante e a leitura vertical completa até a ficha técnica. O único aviso do servidor é informativo, relacionado à atualização futura de `baseline-browser-mapping`; não há erro de TypeScript, build ou rede não-2xx.
