# OHANA — Arquitetura

A OHANA é organizada como um sistema cognitivo modular. A arquitetura foi desenhada para que um modelo neural de linguagem não seja o único responsável por inteligência, memória ou ação.

## Fluxo de alto nível

```text
Usuário
→ Interpretação / roteamento
→ Contexto
→ Raciocínio
→ Proposta
→ Projetista
→ Planejador
→ Autorização humana
→ Contrato
→ Executor
→ Validação
→ Memória / continuidade
```

Esse fluxo é evoluído de forma incremental, e não substituído por completo a cada fase.

## Componentes principais

### Memória

O estado persistente armazena fatos, aprendizados, estado operacional e informações de continuidade. A direção arquitetural é recuperar apenas o que a tarefa atual precisa, em vez de reconstruir toda a memória em cada prompt.

### Raciocínio

O raciocínio estruturado local deve operar de forma independente do modelo neural sempre que possível. Inferência neural pode ajudar na linguagem, mas raciocínio e tratamento de evidência continuam sendo responsabilidades da arquitetura.

### Projetista

O Projetista transforma um problema comprovado ou suficientemente evidenciado em proposta técnica: arquivos/funções afetados, escopo, riscos, restrições, testes e resultado esperado.

### Planejador

O Planejador transforma a proposta em plano executável e governado, incluindo backup, integridade, etapas de teste, restrições e requisitos de rollback.

### Executor

O Executor realiza apenas ações permitidas pelo contrato e pelo modelo de autorização vigente. Candidato isolado e teste antes de produção são preferidos a alterações diretas.

### Autotune

O Autotune observa o comportamento do sistema, analisa evidências e coordena capacidades de engenharia. Sua evolução desejada parte de:

```text
OBSERVAR → ANALISAR → PROPOR
```

para um fluxo governado:

```text
OBSERVAR
→ EVIDÊNCIA
→ CAUSA
→ PROJETO
→ PLANO
→ CANDIDATO
→ TESTE
→ VALIDAÇÃO
→ JULGAMENTO
→ PROMOÇÃO HUMANA
```

### Governança

A governança inclui autorização humana, contratos, verificações de integridade, isolamento, testes de regressão e rollback.

## Autoconsulta técnica

A OHANA pode rotear pedidos técnicos explícitos para um caminho de Engenharia de Software que inspeciona código real, estrutura AST e hashes SHA-256.

A rota de engenharia deve priorizar evidência sobre especulação gerada.

## Integração com modelo de linguagem

O suporte atual usa Ollama e um Qwen local. A divisão desejada é:

```text
Modelo de linguagem:
- compreender linguagem
- gerar linguagem
- auxiliar classificação

OHANA:
- memória
- estado do sistema
- raciocínio
- engenharia
- planejamento
- execução
- governança
- autorização
```

## Continuidade

Um objetivo atual é manter investigações técnicas ativas por vários turnos da conversa, para que instruções subsequentes possam continuar o mesmo estado de engenharia sem cair em geração conversacional sem relação.

## Regra de evolução

Antes de criar um novo módulo, o desenvolvimento da OHANA deve primeiro provar que nenhum componente existente pode ser conectado ou evoluído para atender à necessidade.
