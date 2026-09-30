# OHANA

**Experimental cognitive architecture for persistent local intelligence and governed self-engineering.**

OHANA is an experimental modular AI architecture designed around persistent memory, local/symbolic reasoning, governed learning, planning, controlled execution and supervised self-engineering.

The project does **not** treat a large language model as the whole intelligence. Neural language models are auxiliary components for natural-language understanding and generation. Memory, reasoning, planning, governance, execution and software-engineering workflows belong to the OHANA architecture itself.

> Status: active experimental development. OHANA is not presented here as a completed AGI.

## Core idea

Most contemporary AI systems place a language model at the center and build tools around it. OHANA explores a different direction:

```text
Human
  ↓
OHANA
  ├─ interpretation / routing
  ├─ persistent memory
  ├─ reasoning
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

## Current architecture

Validated or actively integrated components include:

- persistent memory and learned knowledge;
- local reasoning;
- conversational context and continuity;
- **Projetista** (technical project design);
- **Planejador** (planning);
- **Executor** (controlled execution);
- **Autotune** (observation, analysis and engineering orchestration);
- governance and human authorization;
- contracts and operational safeguards;
- SHA-256 integrity checks;
- candidate-based changes;
- validation and rollback;
- selective source-code inspection using code, AST and hashes;
- routing between normal conversation and software-engineering analysis;
- local neural language support through Ollama/Qwen.

## Governed self-engineering

OHANA is being evolved so that it can inspect its own architecture and conduct controlled engineering workflows.

The intended flow is:

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

A critical design rule is:

```text
GENERATE IDEA → MODIFY PRODUCTION
```

is **not** allowed.

Instead:

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

## Recent validated milestone

A technical-routing upgrade was validated in production so that explicit engineering requests can be routed to the existing software-engineering system instead of being answered only by the local language model.

For technical requests, the system can now expose evidence from real source files, AST inspection and SHA-256 hashes, while preserving operational authorization controls.

A production validation confirmed:

```text
ultima_rota = ENGENHARIA_SOFTWARE
ultima_intencao = ANALISAR_SOFTWARE
source = code / AST / hashes
autonomous production promotion = false
human authorization = preserved
```

The project is currently improving **multi-turn engineering continuity**, so an investigation can remain in the engineering workflow across follow-up messages such as “continue the investigation”, “run the next test” or “re-evaluate the previous conclusion”.

## Neural model role

Current local language support uses:

- **Ollama** as the local model runtime;
- **Qwen 2.5 1.5B** as a language model;
- loopback/local inference when available.

The architectural objective is for the model to remain an auxiliary language layer rather than the owner of memory, governance or system state.

Future work may evaluate a smaller OHANA-specific Portuguese language model specialized for routing, intent recognition, context references and response generation.

## Engineering principles

OHANA development follows several permanent principles:

1. **Do not regress validated capabilities.**
2. **Reuse and connect existing components before creating new ones.**
3. **Do not create duplicate cores, memories, executors or governance layers without demonstrated necessity.**
4. **Diagnose read-only before modifying.**
5. **Use backup, hashes, candidates, tests and rollback for structural changes.**
6. **Keep production changes governed by human authorization.**
7. **Prefer local valid knowledge before external calls.**
8. **External knowledge should be persisted with provenance, evidence and validity when appropriate.**
9. **Keep the architecture lightweight enough to run on constrained local hardware.**

## Hardware philosophy

OHANA is intentionally developed under constrained local hardware. This encourages architectural efficiency rather than solving every problem by increasing model size.

The project prioritizes:

- selective context;
- incremental reasoning;
- memory retrieval instead of full-history injection;
- local execution;
- small auxiliary neural models;
- code and state inspection on demand;
- low-resource operation.

## Current limitations

Known limitations remain part of the research process. Examples include:

- some multi-turn engineering continuations are still being hardened;
- some teaching/learning formulations are not yet routed correctly;
- the current Qwen elaboration path has known response-length limits in some cases;
- not every module has a complete automated regression suite;
- self-engineering is supervised, not unrestricted autonomous self-modification.

## Repository purpose

This repository currently serves as the public technical presentation and documentation home for OHANA.

Source-code publication will be decided separately as the architecture, security boundaries and documentation mature.

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Roadmap](ROADMAP.md)
- [Security and governance](SECURITY.md)
- [Project overview](docs/overview.md)

## Language

The project is primarily developed in Portuguese (Brazil), while public documentation may also be written in English to facilitate international technical discussion.

---

## Português

**OHANA é uma arquitetura cognitiva experimental voltada a inteligência local persistente e autoengenharia governada.**

A proposta central é não tratar o modelo neural como toda a inteligência. O modelo de linguagem auxilia na compreensão e geração de linguagem, enquanto memória, raciocínio, planejamento, execução, governança, aprendizado e engenharia permanecem sob responsabilidade da arquitetura OHANA.

O projeto está em desenvolvimento experimental ativo e não é apresentado neste repositório como uma AGI concluída.
