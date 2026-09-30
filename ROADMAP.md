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

## Prioridades de curto prazo

### 1. Continuidade de engenharia em múltiplos turnos

Manter uma investigação técnica ativa dentro da rota de Engenharia ao longo de mensagens de continuidade como:

- continue a investigação;
- execute o próximo teste;
- reavalie a evidência;
- prepare o candidato;
- teste regressões;
- determine se está pronto para promoção.

O mesmo mecanismo deve permitir que conversa comum, ensino e pedidos operacionais saiam da rota de Engenharia quando apropriado.

### 2. Julgamento técnico baseado em evidência

Impedir conclusões contraditórias como:

```text
CAUSA_COMPROVADA=False
PRONTO_PARA_PROMOCAO=True
```

A prontidão deve depender de evidência, existência de candidato, parser, testes obrigatórios e regressões.

### 3. Robustez da rota de aprendizado

Melhorar ensino explícito e aprendizado de regras procedurais sem enfraquecer as proteções operacionais. Conteúdo ensinado que contém verbos operacionais deve ser tratado como dado quando a moldura externa da mensagem for claramente de ensino.

### 4. Contexto incremental e seletivo

Evoluir para:

```text
MEMÓRIA GRANDE → RECUPERAÇÃO PEQUENA E RELEVANTE
```

Objetivos: menor latência de contexto, menos arquivos carregados, menos histórico repetido e melhor continuidade.

### 5. Integração neural local-first

Continuar usando inferência neural local como camada auxiliar. Avaliar futuramente se um modelo menor e especializado em português pode substituir o modelo genérico atual nas tarefas específicas da OHANA.

## Direção de médio prazo

- contratos de Engenharia mais reutilizáveis;
- suítes de regressão isoladas mais amplas;
- melhor indexação estrutural de projeto/código;
- autoconsulta e mapeamento de dependências mais fortes;
- geração governada de candidatos de patch;
- rejeição automática de candidatos que introduzam regressões;
- baselines de desempenho mensuráveis antes/depois de mudanças.

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
