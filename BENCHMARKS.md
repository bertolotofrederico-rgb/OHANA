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

Isso levou a uma prioridade concreta de otimização:

```text
Não otimizar primeiro o raciocínio.
Medir e reduzir:
- arquivos carregados
- bytes de contexto
- histórico repetido
- evidência duplicada
- schemas reconstruídos
- recuperação de memória desnecessária
- chamadas externas
```

A meta arquitetural é:

```text
memória persistente grande
→ contexto ativo pequeno e seletivo
→ raciocínio local rápido
```

## Validação de engenharia

Ciclos controlados de engenharia produziram resultados como:

| Validação | Resultado observado |
|---|---:|
| Suíte de roteamento técnico | **10/10 aprovados** |
| Suíte HTTP em promoção controlada | **18/18 aprovados** |
| Compatibilidade PowerShell 5.1 | **aprovada** |
| Chamadas Groq em validação local selecionada | **0** |
| HTTP de produção após promoção validada | **200** |
| Detecção de regressão deliberada | **promoção bloqueada** |

Esses testes não são todos benchmarks independentes. São resultados funcionais de ciclos reais de engenharia.

## Validação de autoengenharia

Uma rota validada em produção demonstrou que pedidos técnicos explícitos podem entrar na Engenharia de Software existente e retornar evidência baseada em código real.

Metadados observados incluíram:

```text
ultima_rota=ENGENHARIA_SOFTWARE
ultima_intencao=ANALISAR_SOFTWARE
fonte=CODIGO_AST_HASHES
origem=AUTOTUNE_EXISTENTE
autorizacao_operacional=False
```

Isso demonstra que o sistema pode distinguir investigação técnica de conversa neural comum e usar evidência de fonte em vez de depender apenas de texto gerado.

## Integridade e segurança medidas

Validações de engenharia normalmente incluem:

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
- latência de cold start vs warm start;
- precisão do raciocínio em suíte fixa;
- retenção de aprendizado ao longo do tempo;
- taxa de sucesso de engenharia em diferentes classes de falha.

## Filosofia de benchmark

A OHANA não está sendo otimizada para vencer benchmarks de linguagem por força bruta.

O projeto está mais interessado em perguntas de sistema, como:

- É possível raciocinar de forma útil sem chamar um grande modelo neural?
- A memória pode crescer sem obrigar o contexto ativo a crescer junto?
- Engenharia de Software pode ser baseada em evidência e governança?
- O sistema consegue rejeitar as próprias mudanças quando faltam testes?
- Inteligência útil pode continuar prática em hardware modesto?

Atualizações futuras devem continuar distinguindo claramente:

**MEDIDO** — observado diretamente em execução reproduzível.

**VALIDADO** — comportamento confirmado em teste funcional controlado.

**META** — comportamento desejado para o futuro.

**HIPÓTESE** — possibilidade arquitetural ainda não demonstrada.
