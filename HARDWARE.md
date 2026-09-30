# OHANA Hardware and Local Execution

OHANA is deliberately developed under constrained local hardware.

The purpose is not to prove that every neural workload can run efficiently on old hardware. The purpose is to explore how much capability can come from architecture, memory, routing, structured reasoning and selective neural assistance.

## Current development environment

Known development hardware includes:

```text
GPU: NVIDIA GeForce GTX 750
VRAM: 2 GB
CUDA environment: 12.x available in the system
Operating system: Windows
Shell/runtime: Windows PowerShell 5.1
Local model runtime: Ollama
Auxiliary model: Qwen 2.5 1.5B
```

## What the GTX 750 means for the project

A GTX 750 with 2 GB of VRAM is highly constrained by modern neural-network standards.

OHANA therefore does not assume that intelligence must come from putting a large model fully into GPU memory.

The architecture attempts to move useful work into components such as:

- persistent symbolic/structured memory;
- deterministic routing;
- selective retrieval;
- local reasoning;
- project planning;
- governed execution;
- AST/code inspection;
- cached state;
- incremental context;
- lightweight neural assistance.

## Local neural layer

The current neural-language path uses Ollama with Qwen 2.5 1.5B.

Conceptually:

```text
OHANA
  ↓ local request
Ollama
  ↓ model runtime
Qwen 2.5 1.5B
  ↓ generated interpretation / language
OHANA
  ↓ validation / routing / state / governance
```

The model is not intended to own:

- persistent memory;
- system state;
- governance;
- authorization;
- software-engineering truth;
- production promotion.

## Why not simply use a larger model?

Because that would answer a different research question.

OHANA asks whether system-level intelligence can be improved through **organization** rather than only parameter count.

A constrained machine forces the architecture to care about:

- what context is actually necessary;
- when a neural call is justified;
- what can be answered from local knowledge;
- what can be handled symbolically;
- what can be cached or reused;
- how much state must be active at once.

## Practical implications

On this class of hardware, future work should prefer:

1. CPU-first execution when GPU compatibility or VRAM is limiting.
2. Quantized small models when appropriate.
3. Small context windows unless additional context is demonstrably needed.
4. Selective memory retrieval rather than dumping full history into prompts.
5. On-demand source-code inspection instead of indexing everything repeatedly.
6. Incremental reasoning and state reuse.
7. No mandatory dependency on external AI services for basic operation.

## Possible future OHANA-specific neural model

One research direction is an OHANA-specific Portuguese model focused only on the language tasks the architecture actually needs, such as:

- intent classification;
- reference resolution;
- engineering follow-up detection;
- teaching detection;
- structured extraction;
- natural response generation.

Instead of training a general-purpose model to contain all intelligence, this model would serve as a compact **language cortex** for the larger OHANA architecture.

A future model in the hundreds-of-millions to low-billions parameter range could be evaluated, preferably with quantization and CPU-first execution on the current machine.

This is a research direction, not a currently validated replacement for Qwen.

## Hardware success criterion

The goal is not:

```text
Run the largest possible model.
```

The goal is:

```text
Use the smallest amount of compute necessary
for the architecture to produce the required capability.
```

That distinction is central to the OHANA project.
