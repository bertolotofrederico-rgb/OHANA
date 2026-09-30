# OHANA Roadmap

This roadmap reflects the current experimental direction of the project. It is intentionally conservative: validated capabilities are preserved and new capabilities should be connected to existing components whenever possible.

## Current stage

OHANA currently has an integrated path for:

```text
technical request
→ engineering routing
→ source-code / AST / hash inspection
→ Autotune analysis
→ project design / planning
→ governed execution and validation
```

Human authorization remains required for promotion of production changes.

## Near-term priorities

### 1. Multi-turn engineering continuity

Keep an active engineering investigation in the engineering route across follow-up messages such as:

- continue the investigation;
- run the next test;
- re-evaluate the evidence;
- prepare the candidate;
- test regressions;
- determine readiness for promotion.

The same mechanism must still allow normal conversation, teaching and operational requests to leave the engineering route when appropriate.

### 2. Evidence-backed engineering judgment

Prevent contradictory conclusions such as:

```text
CAUSE_PROVEN=False
READY_FOR_PROMOTION=True
```

Readiness must depend on evidence, candidate existence, parser checks, required tests and regression status.

### 3. Learning-route robustness

Improve explicit teaching and procedural-rule learning without weakening operational safeguards. Teaching content that contains operational verbs should be treated as data when the outer message frame is clearly instructional.

### 4. Incremental and selective context

Move toward:

```text
LARGE MEMORY → SMALL RELEVANT RETRIEVAL
```

Goals include lower context latency, fewer loaded files, less repeated history and better continuity.

### 5. Local-first language integration

Continue using local neural inference as an auxiliary layer. Evaluate whether a smaller Portuguese-specialized model could eventually replace the current generic language model for OHANA-specific interpretation and generation.

## Medium-term direction

- stronger reusable software-engineering contracts;
- broader isolated regression suites;
- better project/code structural indexing;
- improved self-audit and architectural dependency mapping;
- governed generation of candidate patches;
- automatic rejection of candidates that introduce regressions;
- measurable performance baselines before and after changes.

## Long-term research direction

OHANA explores whether a modular cognitive architecture can improve over time while keeping neural language models as auxiliary components rather than the entire cognitive system.

Long-term research areas include:

- persistent governed knowledge;
- incremental reasoning;
- architectural self-inspection;
- supervised self-engineering;
- lightweight local operation;
- domain-specific neural language support;
- stronger continuity across long-running projects and sessions.

## Non-goals for the current phase

OHANA is not currently targeting:

- unrestricted autonomous self-modification;
- bypassing human authorization;
- replacing governance with model-generated decisions;
- heavy local models that exceed available hardware;
- creating duplicate cognitive cores when existing components can be evolved.
