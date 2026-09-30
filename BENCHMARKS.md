# OHANA Benchmarks and Measurements

This document separates **observed measurements** from architectural goals and future targets.

OHANA is under active development. The numbers below are project measurements from real development runs and should not be interpreted as standardized industry benchmarks.

## Local execution baseline

A measured local run produced approximately:

| Stage | Time |
|---|---:|
| Total | **866.76 ms** |
| Context assembly / retrieval | **752.55 ms** |
| Local reasoning | **42.56 ms** |
| Interpretation | **16.78 ms** |
| AI stage in that run | **0 ms** |
| External AI calls | **0** |

### Interpretation

The dominant cost in that run was **context construction**, not the structured reasoning engine.

This led to a concrete optimization priority:

```text
Do not optimize reasoning first.
Measure and reduce:
- loaded files
- context bytes
- repeated history
- duplicated evidence
- rebuilt schemas
- unnecessary memory retrieval
- external calls
```

The architectural target is:

```text
large persistent memory
→ small selective active context
→ fast local reasoning
```

## Engineering validation

Controlled engineering cycles have produced results including:

| Validation | Observed result |
|---|---:|
| Technical routing suite | **10/10 passed** |
| HTTP validation suite in controlled promotion | **18/18 passed** |
| PowerShell 5.1 compatibility | **passed** |
| Groq calls during selected local validation | **0** |
| Production HTTP after validated promotion | **200** |
| Deliberate regression detection | **blocked promotion** |

These tests are not all independent benchmarks. They are functional validation results from engineering cycles.

## Self-engineering validation

A validated production route demonstrated that explicit technical requests can enter the existing software-engineering architecture and return evidence from real source code.

Observed route metadata included:

```text
ultima_rota=ENGENHARIA_SOFTWARE
ultima_intencao=ANALISAR_SOFTWARE
source=CODIGO_AST_HASHES
origin=AUTOTUNE_EXISTENTE
autorizacao_operacional=False
```

This means the system can distinguish an engineering investigation from a normal neural conversation path and use source evidence instead of relying only on generated text.

## Integrity and safety measurements

Engineering validation commonly includes:

- SHA-256 before/after checks;
- parser validation;
- candidate isolation;
- HTTP checks;
- memory checks;
- retification checks;
- operational protection checks;
- regression tests;
- rollback availability;
- human promotion authorization.

## What is not yet benchmarked

The following still need standardized measurement:

- long-session latency distribution;
- p50 / p95 / p99 response time;
- RAM usage by route;
- CPU utilization by route;
- disk I/O by route;
- context bytes per request;
- exact token consumption across local model calls;
- throughput under concurrent requests;
- cold-start vs warm-start model latency;
- reasoning accuracy on a fixed benchmark suite;
- learning retention over long periods;
- engineering success rate across multiple bug classes.

## Benchmark philosophy

OHANA is not currently optimized to win raw language-model benchmarks.

The project is more interested in system-level questions such as:

- Can useful reasoning occur without calling a large neural model?
- Can persistent memory stay large while active context stays small?
- Can software-engineering tasks be evidence-driven and governed?
- Can the system reject its own unsafe or insufficiently tested changes?
- Can useful intelligence remain practical on modest consumer hardware?

Future benchmark updates should continue to distinguish clearly between:

**MEASURED** — directly observed in a reproducible run.

**VALIDATED** — behavior confirmed by a controlled functional test.

**TARGET** — desired future behavior.

**HYPOTHESIS** — architectural possibility not yet demonstrated.
