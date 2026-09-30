# OHANA — Roadmap

Este roadmap reflete a direção experimental atual do projeto. Ele é propositalmente conservador: capacidades validadas são preservadas e novas capacidades devem ser conectadas aos componentes existentes sempre que possível.

## Estágio atual

A OHANA possui atualmente um caminho integrado para:

```text
pedido técnico
→ roteamento de engenharia
→ inspeção de código / AST / hashes
→ análise pelo Autotune
→ projeto técnico / planejamento
→ execução e validação governadas
```

A autorização humana continua obrigatória para promoção de mudanças em produção.

## Marco concluído — continuidade técnica em múltiplos turnos

Em 30/09/2026, a continuidade de Engenharia foi promovida e validada em produção.

Foi comprovado que uma investigação técnica pode permanecer na rota `ENGENHARIA_SOFTWARE` por seis turnos relacionados, incluindo:

- continuidade da investigação;
- execução do próximo teste sob governança;
- reavaliação por evidência;
- preparação de candidato quando houver especificação suficiente;
- teste de regressões;
- julgamento coerente de prontidão.

Também foi validado que:

- conversa comum sai corretamente da rota técnica;
- ensino não é capturado indevidamente pela Engenharia;
- pedidos operacionais permanecem protegidos;
- ausência de causa/candidato/testes completos força `PRONTO_PARA_PROMOCAO=False`;
- promoção autônoma continua desabilitada;
- autorização humana permanece obrigatória;
- rollback continua disponível.

## Próximas prioridades

### 1. Robustez da rota de aprendizado

Melhorar ensino explícito e aprendizado de regras procedurais sem enfraquecer as proteções operacionais. Conteúdo ensinado que contém verbos operacionais deve ser tratado como dado quando a moldura externa da mensagem for claramente de ensino.

Pendência conhecida: `TESTE_F_APRENDIZADO`.

### 2. Retificação com histórico completo

A retificação básica está funcional, mas o uso de histórico completo permanece como pendência preexistente já reproduzida antes da promoção de continuidade.

Objetivo: corrigir essa camada sem regredir memória, continuidade ou rota técnica.

### 3. Contexto incremental e seletivo

Evoluir para:

```text
MEMÓRIA GRANDE → RECUPERAÇÃO PEQUENA E RELEVANTE
```

Objetivos:

- menor latência de contexto;
- menos arquivos carregados;
- menos histórico repetido;
- melhor continuidade;
- menor uso de RAM/CPU por consulta;
- menos reconstruções desnecessárias.

### 4. Limite atual do Qwen

Investigar separadamente o limite conhecido de resposta no caminho atual do Qwen em determinados casos (`QWEN_400_TOKENS`).

Esse item deve permanecer separado da Engenharia simbólica/local para não misturar uma limitação do modelo auxiliar com a arquitetura cognitiva principal.

### 5. Medição sistemática de desempenho

Criar baselines reproduzíveis para:

- p50 / p95 / p99 de latência;
- RAM por rota;
- CPU por rota;
- bytes de contexto;
- cold start / warm start do modelo local;
- custo de Engenharia versus conversa;
- crescimento de memória ao longo do tempo.

### 6. Integração neural local-first

Continuar usando inferência neural local como camada auxiliar. Avaliar futuramente se um modelo menor e especializado em português pode substituir o modelo genérico atual nas tarefas específicas da OHANA.

## Direção de médio prazo

- contratos de Engenharia mais reutilizáveis;
- suítes de regressão isoladas mais amplas;
- melhor indexação estrutural de projeto/código;
- autoconsulta e mapeamento de dependências mais fortes;
- geração governada de candidatos de patch;
- rejeição automática de candidatos que introduzam regressões;
- baselines de desempenho antes/depois de mudanças;
- maior reutilização de conhecimento técnico já comprovado.

## Direção de pesquisa de longo prazo

A OHANA investiga se uma arquitetura cognitiva modular pode melhorar ao longo do tempo mantendo modelos neurais de linguagem como componentes auxiliares, em vez de tratá-los como todo o sistema cognitivo.

Áreas de pesquisa incluem:

- conhecimento persistente e governado;
- raciocínio incremental;
- autoconsulta arquitetural;
- autoengenharia supervisionada;
- operação local leve;
- suporte neural especializado por domínio;
- continuidade mais forte em projetos e sessões longas.

## O que não é objetivo da fase atual

A OHANA não busca atualmente:

- automodificação autônoma irrestrita;
- contornar autorização humana;
- substituir governança por decisões geradas pelo modelo;
- modelos locais pesados incompatíveis com o hardware disponível;
- criar núcleos cognitivos duplicados quando componentes existentes podem ser evoluídos.
