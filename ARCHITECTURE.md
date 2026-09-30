# OHANA Architecture

OHANA is organized as a modular cognitive system. The architecture is intentionally designed so that a neural language model is not the sole owner of intelligence, memory or action.

## High-level flow

```text
User
→ Interpretation / routing
→ Context
→ Reasoning
→ Proposal
→ Projetista
→ Planejador
→ Human authorization
→ Contract
→ Executor
→ Validation
→ Memory / continuity
```

This flow is evolved incrementally rather than replaced wholesale.

## Major components

### Memory

Persistent state stores facts, learning records, operational state and continuity information. The architectural direction is to retrieve only the information needed for the current task instead of rebuilding the entire memory into every prompt.

### Reasoning

Local structured reasoning is intended to operate independently of the neural model when possible. Neural inference can assist language, but reasoning and evidence handling remain architectural responsibilities.

### Projetista

The Projetista transforms a proven or sufficiently evidenced problem into a technical proposal: affected files/functions, scope, risks, constraints, tests and expected results.

### Planejador

The Planejador turns a proposal into an executable and governed plan, including backup, integrity checks, test stages, constraints and rollback requirements.

### Executor

The Executor performs only actions allowed by the current contract and authorization model. Candidate-first execution and isolated testing are preferred over direct production modification.

### Autotune

Autotune observes system behavior, analyzes evidence and coordinates engineering capabilities. Its intended evolution is from:

```text
OBSERVE → ANALYZE → PROPOSE
```

into a governed orchestration flow:

```text
OBSERVE
→ EVIDENCE
→ CAUSE
→ DESIGN
→ PLAN
→ CANDIDATE
→ TEST
→ VALIDATE
→ JUDGMENT
→ HUMAN PROMOTION
```

### Governance

Governance includes human authorization, contracts, integrity checks, isolation, regression testing and rollback.

## Technical self-inspection

OHANA can route explicit engineering requests to a software-engineering path that inspects real source code, AST structure and SHA-256 hashes.

The engineering route is intended to prefer evidence over generated speculation.

## Language-model integration

Current language support uses Ollama and a local Qwen model. The desired responsibility split is:

```text
Language model:
- understand language
- generate language
- assist classification

OHANA:
- memory
- system state
- reasoning
- engineering
- planning
- execution
- governance
- authorization
```

## Continuity

A current engineering goal is to keep technical investigations active across multiple conversational turns, so follow-up instructions can continue the same engineering state without falling back to unrelated conversational generation.

## Evolution rule

Before creating a new module, OHANA development should first prove that an existing component cannot be connected or evolved to satisfy the requirement.
