# Conformidade com o protocolo 360º/3D — 15/08/2026

## Decisão aplicada

O catálogo não possui, neste momento, arquivo **GLB/GLTF/USDZ** autorizado nem sequência angular completa, consecutiva e verificada de frames oficiais para nenhum modelo. Por isso, não há botão **“Explorar em 360º”**, modal, autoplay, loop ou slideshow ativo no produto.

As galerias permanecem exclusivamente como galerias. Não são usadas como fallback, não são passadas ao visualizador e não podem reativar um giro pela troca de acabamento.

## Salvaguardas técnicas

O `BookFrame` agora lê somente `official360Sequences`, um manifesto explícito de sequências fotográficas reais, vazio até que uma sequência autorizada seja fornecida. A galeria do modelo, hero e `MotoColorVariant.frames` não participam mais da decisão de renderizar o visualizador.

Foram preparados os contratos `Official3DModel` e `MotoThreeDAsset` para receber no futuro `modelUrl`, `poster`, `environment`, `initialOrbit` e `cameraTarget`. Esses campos ainda não têm valores. Quando houver um asset 3D oficial, o componente poderá ser conectado a um visualizador WebGL com lazy loading, poster, controles de câmera, drag e pinch, sem reconstruir o livro.

## Critério de ativação futuro

| Tipo de asset | Condição para ativar | Comportamento permitido |
|---|---|---|
| Modelo 3D real | GLB/GLTF autorizado, origem identificada e visualmente validada | Giro, zoom e controles de câmera carregados sob demanda |
| 360º fotográfico | Frames oficiais consecutivos da mesma moto e acabamento, com ordem angular verificada | Arraste horizontal e teclado; sem autoplay |
| Galeria convencional | Fotos individuais, detalhes ou vistas não contínuas | Somente galeria e lightbox; nenhum botão 360º |

## Fonte e coleta

As requisições ao domínio da fabricante permanecem suspensas enquanto a fonte retorna erros de bloqueio ou indisponibilidade. A próxima ativação depende de um asset já persistido ou explicitamente fornecido/autorizado, conforme o protocolo recebido em `pasted_content.txt`.
