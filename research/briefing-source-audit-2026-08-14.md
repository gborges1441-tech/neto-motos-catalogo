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
