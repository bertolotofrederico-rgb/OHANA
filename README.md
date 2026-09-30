# OHANA

**Experimental cognitive architecture for persistent local intelligence, governed learning and supervised self-engineering.**

OHANA is a modular AI architecture built around persistent memory, local/symbolic reasoning, planning, controlled execution, governed learning and software-engineering workflows.

The project intentionally does **not** treat a large language model as the whole intelligence. Neural language models are auxiliary components for natural-language understanding and generation. Memory, reasoning, planning, governance, execution and software engineering belong to the OHANA architecture itself.

> **Status:** active experimental development. OHANA is not presented as a completed AGI.

---

## Why OHANA exists

Most modern AI systems place a large language model at the center and add tools around it. OHANA explores a different design:

```text
Human
  ↓
OHANA
  ├─ interpretation / routing
  ├─ persistent memory
  ├─ contextual continuity
  ├─ local reasoning
  ├─ project design
  ├─ planning
  ├─ governed execution
  ├─ validation
  ├─ autotuning
  └─ software engineering
        ↓
  neural language model (auxiliary)
```

The neural model helps with language. OHANA is intended to remain responsible for state, memory, reasoning, governance and action control.

---

## Current validated capabilities

The following capabilities have been implemented, exercised or integrated in the current architecture:

- persistent memory across sessions;
- governed learning and revision of stored knowledge;
- contextual reasoning and reference resolution;
- local reasoning without mandatory external AI calls;
- selective retrieval of project context;
- **Projetista** for technical project design;
- **Planejador** for planning;
- **Executor** for controlled execution;
- **Autotune** for observation, diagnosis and engineering orchestration;
- human authorization gates;
- contracts and operational safeguards;
- SHA-256 integrity checks;
- isolated candidates before production changes;
- parser validation in Windows PowerShell 5.1;
- rollback-capable changes;
- selective source inspection using code, AST and hashes;
- routing between normal conversation and software engineering;
- local neural language support through Ollama/Qwen;
- production HTTP runtime with technical self-inspection;
- technical requests able to expose real code/AST/hash evidence instead of only generative answers.

---

## Observed performance

A measured local baseline from the current architecture showed approximately:

| Stage | Observed time |
|---|---:|
| Total request | **866.76 ms** |
| Context assembly | **752.55 ms** |
| Local reasoning | **42.56 ms** |
| Interpretation | **16.78 ms** |
| External/neural AI stage in that run | **0 ms** |
| External AI calls | **0** |

This baseline is important because it shows that the dominant cost was not the local reasoning engine itself — it was **context construction and retrieval**.

That finding directly shaped the current optimization strategy:

```text
MEMORY LARGE
   ↓
SELECTIVE RETRIEVAL
   ↓
SMALL ACTIVE CONTEXT
   ↓
FAST LOCAL REASONING
```

The engineering goal is therefore not simply “use a faster model”, but reduce unnecessary context, repeated file reads, duplicated history and reconstruction work.

> These values are an observed project baseline, not a universal benchmark. They depend on the tested request, machine state and current architecture.

---

## Validated engineering milestones

Recent controlled validation has demonstrated:

- **10/10 technical routing tests** reaching the existing software-engineering path;
- **18/18 HTTP validation checks** in a controlled promotion cycle;
- local Qwen/Ollama operation with **Groq calls = 0** in those tests;
- preservation of memory, retification and operational safeguards during routing upgrades;
- deliberate regressions being detected and blocked from promotion;
- technical requests reaching `ENGENHARIA_SOFTWARE` instead of falling directly into the neural conversation fallback;
- human authorization remaining required for production promotion.

Example of the validated technical route:

```text
ultima_rota = ENGENHARIA_SOFTWARE
ultima_intencao = ANALISAR_SOFTWARE
source = code / AST / SHA-256 hashes
autonomous production promotion = false
human authorization = preserved
```

---

## Governed self-engineering

OHANA is being evolved so that it can inspect its own architecture and conduct controlled engineering workflows.

The target flow is:

```text
problem
→ technical self-inspection
→ evidence
→ cause
→ project design
→ plan
→ isolated candidate
→ tests
→ regression analysis
→ judgment
→ ready-for-promotion
→ human authorization
```

A critical design rule is that this is **not allowed**:

```text
GENERATE IDEA
→ MODIFY PRODUCTION
```

The intended rule is:

```text
OBSERVE
→ UNDERSTAND
→ PROVE
→ DESIGN
→ TEST
→ VALIDATE
→ LEARN
```

Production promotion remains governed and requires explicit human authorization in the current phase.

---

## Hardware target: proving intelligence under constraint

OHANA is intentionally developed on modest local hardware.

Current development environment includes:

```text
GPU: NVIDIA GeForce GTX 750
VRAM: 2 GB
CUDA environment: available
OS/runtime: Windows + PowerShell 5.1
Local model runtime: Ollama
Current auxiliary model: Qwen 2.5 1.5B
```

The GTX 750 is **not** used as an argument that large neural training is practical on this machine. Instead, it is part of the project philosophy: architectural intelligence should not depend entirely on expensive GPU scale.

The project focuses on obtaining useful behavior through:

- symbolic/local reasoning;
- persistent memory;
- selective context;
- incremental reasoning;
- structured planning;
- reusable knowledge;
- local execution;
- small neural helpers;
- evidence-driven engineering.

This makes OHANA an experiment in how far a cognitive architecture can go when compute is constrained and intelligence is distributed across specialized mechanisms instead of concentrated only inside a very large neural model.

---

## Neural model role

Current local language support uses:

- **Ollama** as the local model runtime;
- **Qwen 2.5 1.5B** as an auxiliary language model;
- local loopback inference when available.

The intended responsibility split is:

```text
Qwen / future neural model
→ language understanding
→ language generation
→ semantic assistance

OHANA
→ memory
→ state
→ reasoning
→ learning
→ planning
→ tools
→ engineering
→ governance
→ authorization
```

Future work may evaluate a smaller OHANA-specific Portuguese neural model specialized for routing, intent recognition, contextual references and natural-language response generation.

---

## What makes the project interesting

OHANA is not trying to compete with frontier LLMs on raw parameter count.

Its research question is different:

> **How much useful, persistent and governable intelligence can emerge from a modular cognitive architecture when neural models are treated as components rather than the entire mind?**

The architecture combines ideas commonly explored separately:

- cognitive architectures;
- symbolic reasoning;
- persistent memory;
- local assistants;
- agent planning;
- software-engineering agents;
- self-inspection;
- supervised self-modification;
- lightweight local inference.

---

## Engineering principles

OHANA development follows permanent principles:

1. **Do not regress validated capabilities.**
2. **Reuse and connect existing components before creating new ones.**
3. **Do not create duplicate cores, memories, executors or governance layers without demonstrated necessity.**
4. **Diagnose read-only before modifying.**
5. **Use backup, hashes, candidates, tests and rollback for structural changes.**
6. **Keep production changes governed by human authorization.**
7. **Prefer valid local knowledge before external calls.**
8. **Persist useful external knowledge with provenance/evidence when appropriate.**
9. **Keep the architecture practical on constrained local hardware.**
10. **Do not confuse generated text with verified technical evidence.**

---

## Current research frontier

The current frontier is not basic chatbot capability. The project is focusing on:

- multi-turn software-engineering continuity;
- stronger evidence-based self-diagnosis;
- consistency between technical evidence and promotion judgments;
- better selective context retrieval;
- governed learning of procedural rules;
- further reduction of unnecessary neural/external calls;
- making Autotune capable of coordinating more of the existing engineering pipeline.

---

## Current limitations

Known limitations remain part of the research process:

- some multi-turn engineering continuations are still being hardened;
- some teaching/learning formulations are not yet routed correctly;
- the current Qwen elaboration path has known response-length limits in some cases;
- not every module has a complete automated regression suite;
- self-engineering is supervised, not unrestricted autonomous self-modification;
- current performance measurements are project baselines, not standardized benchmark results.

---

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Benchmarks and measurements](BENCHMARKS.md)
- [Hardware and local execution](HARDWARE.md)
- [Roadmap](ROADMAP.md)
- [Security and governance](SECURITY.md)
- [Project overview](docs/overview.md)

---

## Repository purpose

This repository is currently the public technical presentation and documentation home for OHANA.

Source-code publication will be decided separately as the architecture, security boundaries and documentation mature.

---

## Português

**OHANA é uma arquitetura cognitiva experimental voltada a inteligência local persistente, aprendizado governado e autoengenharia supervisionada.**

A proposta central é não tratar o modelo neural como toda a inteligência. O modelo de linguagem auxilia na compreensão e geração de linguagem, enquanto memória, raciocínio, planejamento, execução, governança, aprendizado e engenharia permanecem sob responsabilidade da arquitetura OHANA.

Um dos objetivos do projeto é demonstrar que uma arquitetura bem organizada pode produzir capacidades úteis mesmo sob hardware modesto, incluindo uma GTX 750 de 2 GB, priorizando eficiência arquitetural em vez de depender exclusivamente de escala neural.

O projeto está em desenvolvimento experimental ativo e não é apresentado neste repositório como uma AGI concluída.
