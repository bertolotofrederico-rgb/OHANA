# OHANA Project Overview

## Purpose

OHANA is an experimental local cognitive architecture intended to combine persistent memory, structured reasoning, governed learning, planning, controlled execution and supervised software engineering.

The project explores a hybrid design in which neural language models are useful but not sovereign. A language model may help interpret or generate language, while the broader system remains responsible for memory, state, reasoning, governance and action.

## Why this architecture

Large language models are powerful general-purpose components, but a persistent local system also needs mechanisms for:

- memory that survives sessions;
- explicit state;
- provenance and validity of knowledge;
- controlled execution;
- technical self-inspection;
- validation and rollback;
- continuity across long-running projects;
- separation between suggestion and authority.

OHANA treats these as architectural responsibilities.

## Current validated direction

The project has demonstrated or integrated:

- persistent memory and governed learning records;
- local conversation and reasoning paths;
- explicit technical routing for software-engineering requests;
- source inspection using code, AST and hashes;
- Projetista, Planejador and Executor components;
- Autotune coordination;
- isolated candidate testing;
- human authorization for production promotion;
- rollback and hash-preservation workflows;
- local Qwen inference through Ollama;
- preservation of normal conversation and operational safeguards while technical routing evolves.

## Self-engineering philosophy

Self-engineering in OHANA does not mean unrestricted self-modification.

It means that the system should increasingly be able to:

1. inspect its own implementation;
2. identify an evidenced problem;
3. locate relevant code and dependencies;
4. form and test a hypothesis;
5. design a minimal candidate change;
6. test that candidate in isolation;
7. measure regressions;
8. decide whether the candidate is technically ready;
9. request human authorization before production promotion.

## Current research frontier

A recent milestone connected conversational technical requests to the existing Engineering Software route. The next challenge is reliable multi-turn continuation: preserving the technical investigation across follow-up instructions without accidentally capturing unrelated conversation or operational actions.

## Positioning

OHANA is best described today as an **experimental modular cognitive architecture and governed local AI system**.

It should not be represented as a completed AGI. The project is exploring architectural ideas relevant to persistent intelligence, cognitive modularity, software-engineering agents and supervised self-improvement.

## Development principle

The preferred evolution pattern is:

```text
map what already exists
→ connect existing capabilities
→ prove the gap
→ make the smallest safe change
→ validate
→ preserve rollback
```

New cores or duplicate subsystems should only be created when existing components are demonstrably insufficient.
