# OHANA — Status técnico atual — 01/10/2026

Este documento registra o estado público atual da OHANA após uma sequência de evoluções controladas em produção.

> A OHANA continua sendo apresentada como uma **arquitetura cognitiva experimental em desenvolvimento ativo**, não como uma AGI concluída.

## Estado atual

```text
ESTADO = PROMOVIDO_VALIDADO
HTTP_8092 = 200
MEMORIA = OK
RACIOCINIO_LOCAL = OK
ENGENHARIA = OK
AUTOTUNE = OK
ENSINO = OK
OPERACIONAL_PROTEGIDO = OK
QWEN_QUANDO_NECESSARIO = OK
REGRESSOES = 0 nos testes executados
PROMOCAO_AUTONOMA = False
AUTORIZACAO_HUMANA = preservada
ROLLBACK = disponivel
```

Hash do estado funcional validado atual:

```text
16275EFD2772B1B9383BAD14BD45A2F11EE0E30C4783B6ABE696D1EDCA4660B9
```

Backup validado imediatamente anterior:

```text
E0B1D3634C86C943130CEBD1B938DD1C63BB26997048D989340BFC73125E82CE
```

## O que mudou nesta etapa

A evolução mais recente concentrou-se na ligação entre linguagem natural, contexto, continuidade de investigação e capacidades já existentes da OHANA.

A arquitetura passou a preservar e reutilizar, em contexto técnico controlado:

- assunto e intenção ativos;
- rota técnica atual;
- resumo do resultado anterior;
- etapa técnica;
- menor próximo teste identificado;
- próximo passo;
- IDs de resultado e plano quando existentes;
- distinção entre consulta de resultado, continuação, recomendação, justificativa e saída de contexto.

Nenhum novo núcleo, memória ou motor cognitivo foi criado para obter esse comportamento. A evolução reutilizou mecanismos já existentes de contexto, resolução, Engenharia e governança.

## Exemplo de continuidade técnica

O comportamento desejado e validado nesta etapa diferencia semanticamente pedidos como:

```text
"o que você encontrou?"
→ recuperar e resumir achados anteriores

"continue"
→ retomar o próximo passo da investigação

"o que você faria agora?"
→ formular uma recomendação concreta baseada no estado atual

"por que?"
→ justificar a recomendação anterior

"mudando de assunto..."
→ sair do contexto técnico anterior
```

Etapas sujeitas a contratos, execução ou promoção continuam sem autorização implícita. Contexto ajuda a interpretar; contexto não concede autoridade.

## Validação da evolução semântica

Uma comparação controlada anterior da mesma frente avaliou 52 turnos de comportamento ponta a ponta, cobrindo compreensão, continuidade, mudança de assunto, referências, memória, ensino, retificação básica, Engenharia, cálculo local, fallback neural e proteção operacional.

Resultado observado naquele ciclo:

```text
52/52 turnos aprovados
ENGENHARIA = 6/6
REGRESSOES = 0 nos casos comparados
```

Em um conjunto de 20 pedidos que deveriam usar capacidades locais, foi observada a seguinte diferença entre estado anterior e candidato validado:

```text
Fallback desnecessário: 18/20 → 0/20
Chamadas de IA:          44    → 0
Mediana TOTAL_MS:        ~9194 → ~289 ms
Maior TOTAL_MS local depois: ~1945 ms
```

Esses números são observações do ambiente local do projeto e **não constituem benchmark estatístico universal**.

## Princípio de preservação funcional

Uma evolução da OHANA só é aceita quando mantém o sistema ponta a ponta funcional.

A regra operacional adotada é:

> **A OHANA pode reiniciar; ela não pode voltar menor.**

Não basta HTTP 200. Promoções devem preservar, conforme o escopo testado:

```text
SERVIDOR
→ INTERPRETACAO
→ ROTEAMENTO
→ CONTEXTO
→ REFERENCIAS
→ MEMORIA
→ RACIOCINIO
→ ENSINO/APRENDIZADO
→ ENGENHARIA
→ AUTOTUNE
→ PROJETISTA
→ PLANEJADOR
→ EXECUTOR
→ VALIDACAO
→ GOVERNANCA
→ AUTORIZACAO_HUMANA
→ QWEN/FALLBACK quando necessario
```

## Autoengenharia supervisionada

O fluxo de engenharia permanece governado:

```text
problema
→ observação
→ evidência
→ causa
→ projeto
→ plano
→ candidato isolado
→ teste
→ regressão
→ julgamento
→ autorização humana
→ promoção
→ monitoramento
```

A OHANA não recebe permissão para promover mudanças autonomamente em produção.

## Pendências conhecidas

Continuam separadas desta evolução:

- TESTE F / aprendizado de regra;
- limite de 400 tokens no caminho atual do Qwen em determinados casos;
- retificação com histórico completo;
- consulta de arquitetura de restaurante.

Essas pendências não foram consideradas regressões desta etapa.

## Próximas frentes

Com a base de compreensão e continuidade mais estável, próximas frentes de pesquisa incluem:

- validar e consolidar aprendizado de regras;
- ampliar testes de linguagem natural fora das frases usadas em desenvolvimento;
- medir retenção de aprendizado e generalização;
- confirmar a integração BRLC ponta a ponta;
- evoluir eventos reais da BRLC para uma fonte estruturada de experiência do Autotune;
- manter o princípio de reutilizar e conectar capacidades existentes antes de criar novos mecanismos.

## Nota para colaboradores e apoiadores

Este repositório público documenta arquitetura, resultados, limites, marcos e direção de pesquisa. O código-fonte completo permanece separado da documentação pública neste estágio.

Contribuições técnicas, revisão arquitetural, propostas de testes e discussões de pesquisa podem ser abertas por GitHub Issues.
