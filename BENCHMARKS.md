# OHANA — Benchmarks e Medições

Este documento separa **medições observadas** de objetivos arquiteturais e metas futuras.

A OHANA está em desenvolvimento ativo. Os números abaixo são medições reais do projeto e não devem ser interpretados como benchmarks padronizados da indústria.

## Baseline de execução local

Uma execução local medida produziu aproximadamente:

| Etapa | Tempo |
|---|---:|
| Total | **866,76 ms** |
| Montagem / recuperação de contexto | **752,55 ms** |
| Raciocínio local | **42,56 ms** |
| Interpretação | **16,78 ms** |
| Etapa de IA nesse teste | **0 ms** |
| Chamadas externas de IA | **0** |

### Interpretação

O maior custo naquele teste foi a **construção de contexto**, não o motor de raciocínio estruturado.

```text
memória persistente grande
→ contexto ativo pequeno e seletivo
→ raciocínio local rápido
```

## Validação de engenharia

Resultados acumulados de ciclos controlados:

| Validação | Resultado observado |
|---|---:|
| Suíte de roteamento técnico | **10/10 aprovados** |
| Suíte HTTP em promoção controlada anterior | **18/18 aprovados** |
| Continuidade técnica real em produção | **6/6 turnos** |
| Validação total do ciclo pós-promoção mais recente | **15 turnos** |
| Compatibilidade PowerShell 5.1 | **aprovada** |
| HTTP de produção | **200** |
| Groq indevido nos retornos com runtime | **0** |
| Regressões atribuíveis ao candidato de continuidade | **0** |
| Promoção autônoma | **False** |
| Autorização humana | **preservada** |
| Rollback | **disponível** |

## Continuidade de Engenharia em múltiplos turnos — validada em produção

Uma promoção validada confirmou a continuidade de uma investigação técnica ao longo de seis mensagens consecutivas relacionadas.

Fluxo exercitado:

```text
1. iniciar investigação técnica
2. continuar investigação anterior
3. executar o menor próximo teste identificado
4. reavaliar conclusão inconsistente usando evidência
5. preparar candidato isolado
6. testar regressões e julgar prontidão
```

Resultado:

```text
CONTINUIDADE_ENGENHARIA=OK
TURNOS_TECNICOS=6/6
REAVALIACAO_TECNICA=OK
COERENCIA_JULGAMENTO=OK
SAIDA_CONVERSA_NORMAL=OK
ENSINO=PRESERVADO
OPERACIONAL=PROTEGIDO
MEMORIA=OK
PROMOCAO_AUTONOMA=False
REGRESSOES=0
```

No turno final, a ausência de causa comprovada, candidato preparado e testes completos resultou corretamente em:

```text
CAUSA_COMPROVADA=False
CANDIDATO_PREPARADO=False
TESTES_OBRIGATORIOS_INCOMPLETOS=True
PRONTO_PARA_PROMOCAO=False
```

Isso valida uma regra importante: **prontidão não pode contradizer a evidência disponível**.

## Saída correta da rota técnica

Após os seis turnos técnicos, uma pergunta comum — “Qual é a capital do Brasil?” — saiu da Engenharia e retornou ao caminho conversacional normal com Qwen local.

Um pedido operacional posterior permaneceu protegido e não herdou autorização da investigação técnica anterior.

## Integridade da promoção

Hash antes da promoção:

```text
33225CAE4E1295F3841FED340CA77945A2E1911A2125768FC04587E0C7928A10
```

Hash promovido:

```text
30CABA1496C6314B5EA7B754EE5E789F347F5D4AF4181C582166AE5999D70659
```

Backup reconferido com o hash anterior. O escopo foi limitado a duas funções já existentes no servidor. Módulos monitorados fora do escopo permaneceram idênticos.

## C21.6D — benchmark integral de eficiência e regressão

O C21.6D executou uma comparação controlada de 20 casos entre baseline e candidato, seguida por calibração de instrumentação e certificação estática.

| Métrica | Baseline | Candidato |
|---|---:|---:|
| Casos executados | 20 | 20 |
| Aprovações | 10 | 10 |
| Divergências | 9 | 10 |
| Indisponibilidades | 1 | 0 |
| Chamadas HTTP ao modelo | 20 | 20 |
| Erros HTTP de IA | 1 | 0 |
| Tempo HTTP de IA | 83,43 s | 65,18 s |
| Tempo total | 91,47 s | 73,02 s |
| Variação total observada | — | **−20,18%** |

Não houve perda de aprovação do baseline. A única mudança de status foi um caso que saiu de indisponível para divergência; o domínio financeiro correspondente permaneceu fora do escopo de alteração do ciclo.

Uma calibração adicional executou baseline e candidato pelo mesmo caminho `Interpretar-ChatLocal`: 5/5 ferramentas, intenções e respostas coincidiram, e o total de chamadas de IA foi 6 em ambos. Isso mostrou que a contagem anterior de IA não podia ser comparada diretamente quando os harnesses percorriam caminhos diferentes.

A certificação R3 confirmou exatamente duas linhas lógicas alteradas, ambas dentro de `Invoke-AvaliacaoAutotuneChat`, com zero alterações inesperadas e funções produtivas críticas preservadas.

Após energização e recarga pelo vigia existente, o runtime permaneceu com HTTP 200 e os smokes não financeiros passaram:

```text
10+10x20 → Resultado: 210.
acolhimento → resposta conversacional adequada
```

Esses números são observações do ambiente local e não devem ser generalizados como benchmark universal.

## Integridade e segurança medidas

Validações de engenharia incluem:

- SHA-256 antes/depois;
- validação de parser;
- isolamento de candidato;
- testes HTTP;
- testes de memória;
- testes de retificação;
- proteção operacional;
- testes de regressão;
- rollback disponível;
- autorização humana para promoção.

## O que ainda precisa ser medido de forma padronizada

- distribuição de latência em sessões longas;
- p50 / p95 / p99;
- uso de RAM por rota;
- uso de CPU por rota;
- I/O de disco por rota;
- bytes de contexto por pedido;
- consumo exato de tokens em chamadas locais;
- throughput concorrente;
- cold start vs warm start;
- precisão do raciocínio em suíte fixa;
- retenção de aprendizado ao longo do tempo;
- taxa de sucesso de engenharia em diferentes classes de falha.

## Filosofia de benchmark

A OHANA não está sendo otimizada para vencer benchmarks de linguagem por força bruta.

O projeto está mais interessado em perguntas de sistema:

- É possível raciocinar de forma útil sem chamar um grande modelo neural?
- A memória pode crescer sem obrigar o contexto ativo a crescer junto?
- Engenharia pode ser baseada em evidência e governança?
- O sistema consegue rejeitar as próprias mudanças quando faltam testes?
- Inteligência útil pode continuar prática em hardware modesto?

Atualizações futuras devem continuar distinguindo claramente:

**MEDIDO** — observado diretamente em execução reproduzível.

**VALIDADO** — comportamento confirmado em teste funcional controlado.

**META** — comportamento desejado para o futuro.

**HIPÓTESE** — possibilidade arquitetural ainda não demonstrada.
