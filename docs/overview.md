# OHANA — Visão Geral do Projeto

## Propósito

A OHANA é uma arquitetura cognitiva local experimental que busca combinar memória persistente, raciocínio estruturado, aprendizado governado, planejamento, execução controlada e Engenharia de Software supervisionada.

O projeto explora um desenho híbrido em que modelos neurais de linguagem são úteis, mas não soberanos. Um modelo pode auxiliar na interpretação ou geração de linguagem, enquanto o sistema maior permanece responsável por memória, estado, raciocínio, governança e ação.

## Por que essa arquitetura

Grandes modelos de linguagem são componentes gerais poderosos, mas um sistema local persistente também precisa de mecanismos para:

- memória que sobreviva entre sessões;
- estado explícito;
- origem e validade do conhecimento;
- execução controlada;
- autoconsulta técnica;
- validação e rollback;
- continuidade em projetos longos;
- separação entre sugestão e autoridade.

A OHANA trata esses pontos como responsabilidades arquiteturais.

## Direção atualmente validada

O projeto já demonstrou ou integrou:

- memória persistente e registros governados de aprendizado;
- conversa local e caminhos de raciocínio;
- roteamento técnico explícito para pedidos de Engenharia de Software;
- inspeção de fonte usando código, AST e hashes;
- Projetista, Planejador e Executor;
- coordenação pelo Autotune;
- teste de candidatos isolados;
- autorização humana para promoção em produção;
- rollback e preservação por hashes;
- inferência local Qwen via Ollama;
- preservação de conversa comum e salvaguardas operacionais enquanto o roteamento técnico evolui.

## Filosofia de autoengenharia

Autoengenharia na OHANA não significa automodificação irrestrita.

Significa que o sistema deve ser cada vez mais capaz de:

1. inspecionar a própria implementação;
2. identificar um problema sustentado por evidência;
3. localizar código e dependências relevantes;
4. formar e testar uma hipótese;
5. desenhar a menor mudança candidata possível;
6. testar esse candidato em isolamento;
7. medir regressões;
8. determinar se o candidato está tecnicamente pronto;
9. solicitar autorização humana antes de promover em produção.

## Fronteira atual de pesquisa

Um marco recente conectou pedidos técnicos conversacionais à rota existente de Engenharia de Software. O desafio seguinte é a continuidade confiável entre turnos: preservar uma investigação técnica ao longo de mensagens subsequentes sem capturar por engano conversas sem relação ou ações operacionais.

## Posicionamento

Hoje, a OHANA é melhor descrita como uma **arquitetura cognitiva modular experimental e sistema local de IA governada**.

Ela não deve ser apresentada como uma AGI concluída. O projeto explora ideias relevantes para inteligência persistente, modularidade cognitiva, agentes de Engenharia de Software e autoaperfeiçoamento supervisionado.

## Princípio de desenvolvimento

O padrão preferido de evolução é:

```text
mapear o que já existe
→ conectar capacidades existentes
→ comprovar a lacuna
→ fazer a menor mudança segura
→ validar
→ preservar rollback
```

Novos núcleos ou subsistemas duplicados só devem ser criados quando os componentes existentes forem comprovadamente insuficientes.
