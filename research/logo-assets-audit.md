# Auditoria visual dos logos

## Logo horizontal atual

O arquivo `neto-motos-horizontal-logo_2b900683.png` mede 474×206 px e contém uma composição horizontal com fundo preto, símbolo vermelho, wordmark metálico “NETO MOTOS”, linha “SHINERAY” e slogan. Em um header escuro, o retângulo preto e a moldura aplicada pelo CSS fazem o asset parecer uma imagem colada, especialmente quando há bordas laterais e padding contrastando com o restante da navegação.

## Avatar atual

O arquivo `neto-motos-avatar_26af6218.png` mede 230×205 px e contém um emblema circular com fundo preto, símbolo vermelho e letras “NM”. Ele funciona melhor como marca compacta, mas ainda precisa de um tratamento de container que elimine a sensação de bloco isolado.

## Decisão para a implementação

O header deve usar o asset horizontal dentro de uma moldura sem bordas laterais aparentes, com respiro óptico e escala proporcional; o avatar pode continuar reservado para favicon e contextos compactos. O ajuste deve ser de composição e encaixe, não de redesenho do logotipo.
