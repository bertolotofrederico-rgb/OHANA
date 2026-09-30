# Marco Técnico — Continuidade da Engenharia em múltiplos turnos

**Data:** 30/09/2026  
**Estado:** `PROMOVIDO_VALIDADO`

Este documento registra publicamente o marco que validou a continuidade da Engenharia de Software da OHANA entre múltiplos turnos relacionados.

## Resultado resumido

```text
CONTINUIDADE_ENGENHARIA=OK
TURNOS_TECNICOS=6/6
REAVALIACAO_TECNICA=OK
COERENCIA_JULGAMENTO=OK
SAIDA_CONVERSA_NORMAL=OK
ENSINO=PRESERVADO
OPERACIONAL=PROTEGIDO
MEMORIA=OK
AUTORIZACAO_HUMANA=PRESERVADA
PROMOCAO_AUTONOMA=False
GROQ_INDEVIDO=0
REGRESSOES=0
ROLLBACK_DISPONIVEL=True
ESTADO_FINAL=PROMOVIDO_VALIDADO
```

## O que foi validado

Uma investigação técnica permaneceu corretamente na rota `ENGENHARIA_SOFTWARE` por seis turnos consecutivos relacionados.

O fluxo validado incluiu:

1. iniciar uma investigação técnica;
2. continuar a investigação anterior;
3. executar o menor próximo teste identificado sob governança;
4. reavaliar uma conclusão usando evidência;
5. preparar candidato apenas quando houver especificação suficiente;
6. testar regressões e julgar prontidão de forma coerente.

## Coerência de julgamento

A OHANA manteve a regra de que prontidão depende de evidência real.

Quando causa, candidato ou testes obrigatórios estavam incompletos, o resultado permaneceu:

```text
PRONTO_PARA_PROMOCAO=False
```

Isso evita que o sistema declare uma mudança pronta com base apenas em texto gerado ou em conclusão sem suporte técnico suficiente.

## Saída correta da Engenharia

Também foi validado que o contexto técnico não aprisiona a conversa.

Após a investigação, uma pergunta comum saiu corretamente da rota de Engenharia e voltou ao caminho conversacional normal.

Pedidos operacionais permaneceram protegidos e não herdaram autorização da investigação técnica anterior.

O ensino também permaneceu separado da rota de Engenharia.

## Memória e governança

A memória factual e a retificação básica permaneceram funcionais após a promoção.

A autorização humana continua obrigatória para promoção em produção.

A promoção autônoma permaneceu desabilitada.

Rollback permaneceu disponível durante todo o ciclo.

## Pendências preexistentes

As seguintes pendências continuam separadas deste marco:

- retificação com histórico completo;
- limite de resposta do caminho atual do Qwen em determinados casos;
- TESTE F de aprendizado;
- consulta de arquitetura de restaurante.

Esses itens não foram classificados como regressões causadas pela promoção de continuidade.

## Significado arquitetural

Antes deste marco, a OHANA já conseguia entrar na Engenharia a partir de um pedido técnico explícito. O ponto ainda frágil era manter a mesma investigação em turnos seguintes.

Após a validação, o comportamento demonstrado é:

```text
PEDIDO TÉCNICO
→ ENGENHARIA
→ CONTEXTO TÉCNICO
→ CONTINUAÇÃO
→ REAVALIAÇÃO
→ TESTE
→ CANDIDATO / JULGAMENTO
→ GOVERNANÇA
```

Quando o assunto muda:

```text
PERGUNTA NÃO RELACIONADA
→ SAÍDA DA ENGENHARIA
→ CONVERSA NORMAL
```

Esse marco fortalece a proposta central da OHANA: memória, raciocínio, Engenharia de Software, governança e autorização pertencem à arquitetura do sistema, enquanto o modelo neural permanece como componente auxiliar de linguagem.
