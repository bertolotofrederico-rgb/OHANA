# OHANA

**Arquitetura cognitiva experimental para inteligência local persistente, aprendizado governado e autoengenharia supervisionada.**

OHANA é uma arquitetura modular de IA construída em torno de memória persistente, raciocínio local/simbólico, planejamento, execução controlada, aprendizado governado e fluxos de Engenharia de Software.

O projeto propositalmente **não trata um grande modelo de linguagem como toda a inteligência**. Modelos neurais são componentes auxiliares para compreensão e geração de linguagem. Memória, raciocínio, planejamento, governança, execução e engenharia pertencem à própria arquitetura OHANA.

> **Status:** desenvolvimento experimental ativo. A OHANA não é apresentada aqui como uma AGI concluída.

---

## Por que a OHANA existe

A maioria dos sistemas modernos de IA coloca um grande modelo de linguagem no centro e adiciona ferramentas ao redor dele. A OHANA explora outra direção:

```text
Humano
  ↓
OHANA
  ├─ interpretação / roteamento
  ├─ memória persistente
  ├─ continuidade contextual
  ├─ raciocínio local
  ├─ projetista
  ├─ planejamento
  ├─ execução governada
  ├─ validação
  ├─ autotuning
  └─ engenharia de software
        ↓
  modelo neural de linguagem (auxiliar)
```

O modelo neural ajuda com linguagem. A OHANA permanece responsável por estado, memória, raciocínio, governança e controle de ações.

---

## Capacidades atualmente validadas

As seguintes capacidades já foram implementadas, exercitadas ou integradas na arquitetura atual:

- memória persistente entre sessões;
- aprendizado governado e revisão de conhecimento armazenado;
- raciocínio contextual e resolução de referências;
- raciocínio local sem dependência obrigatória de IA externa;
- recuperação seletiva de contexto do projeto;
- **Projetista** para desenho técnico;
- **Planejador** para planejamento;
- **Executor** para execução controlada;
- **Autotune** para observação, diagnóstico e orquestração de engenharia;
- autorização humana;
- contratos e salvaguardas operacionais;
- verificação de integridade por SHA-256;
- candidatos isolados antes de alterações em produção;
- validação de parser em Windows PowerShell 5.1;
- alterações com rollback;
- inspeção seletiva de código usando código, AST e hashes;
- roteamento entre conversa comum e Engenharia de Software;
- suporte neural local via Ollama/Qwen;
- runtime HTTP de produção com autoconsulta técnica;
- pedidos técnicos capazes de retornar evidência real de código/AST/hash, e não apenas texto gerado.

---

## Desempenho observado

Um baseline local medido na arquitetura atual mostrou aproximadamente:

| Etapa | Tempo observado |
|---|---:|
| Requisição total | **866,76 ms** |
| Montagem/recuperação de contexto | **752,55 ms** |
| Raciocínio local | **42,56 ms** |
| Interpretação | **16,78 ms** |
| Etapa de IA externa/neural nesse teste | **0 ms** |
| Chamadas externas de IA | **0** |

Esse baseline é importante porque mostrou que o maior custo não estava no motor de raciocínio local, mas na **montagem e recuperação de contexto**.

Isso definiu a prioridade atual de otimização:

```text
MEMÓRIA GRANDE
   ↓
RECUPERAÇÃO SELETIVA
   ↓
CONTEXTO ATIVO PEQUENO
   ↓
RACIOCÍNIO LOCAL RÁPIDO
```

A meta não é apenas “usar um modelo mais rápido”, mas reduzir contexto desnecessário, leituras repetidas de arquivos, histórico duplicado e reconstruções que não agregam valor.

> Esses números são um baseline observado do projeto, não um benchmark universal. Variam conforme pedido, estado da máquina e versão da arquitetura.

---

## Marcos de engenharia já validados

Validações controladas recentes demonstraram:

- **10/10 testes de roteamento técnico** chegando à Engenharia existente;
- **18/18 verificações HTTP** em um ciclo de promoção controlada;
- operação local Qwen/Ollama com **Groq = 0** nesses testes;
- preservação de memória, retificação e proteção operacional durante upgrades de roteamento;
- regressões deliberadas sendo detectadas e bloqueando promoção;
- pedidos técnicos chegando à rota `ENGENHARIA_SOFTWARE` em vez de cair diretamente no fallback neural;
- autorização humana permanecendo obrigatória para promoção em produção.

Exemplo da rota técnica validada:

```text
ultima_rota = ENGENHARIA_SOFTWARE
ultima_intencao = ANALISAR_SOFTWARE
fonte = código / AST / hashes SHA-256
promoção autônoma em produção = false
autorização humana = preservada
```

---

## Autoengenharia governada

A OHANA está sendo evoluída para inspecionar a própria arquitetura e conduzir fluxos controlados de engenharia.

O fluxo desejado é:

```text
problema
→ autoconsulta técnica
→ evidência
→ causa
→ projeto técnico
→ plano
→ candidato isolado
→ testes
→ análise de regressão
→ julgamento
→ pronto para promoção
→ autorização humana
```

Uma regra crítica é que isto **não é permitido**:

```text
GERAR IDEIA
→ ALTERAR PRODUÇÃO
```

A regra desejada é:

```text
OBSERVAR
→ COMPREENDER
→ PROVAR
→ PROJETAR
→ TESTAR
→ VALIDAR
→ APRENDER
```

A promoção para produção continua governada e exige autorização humana explícita na fase atual.

---

## Hardware-alvo: provar capacidade sob restrição

A OHANA é desenvolvida propositalmente em hardware local modesto.

Ambiente atual conhecido:

```text
GPU: NVIDIA GeForce GTX 750
VRAM: 2 GB
CUDA: disponível
Sistema: Windows
Runtime/Shell: Windows PowerShell 5.1
Runtime de modelo local: Ollama
Modelo neural auxiliar atual: Qwen 2.5 1.5B
```

A GTX 750 **não é apresentada como hardware adequado para treino pesado de grandes redes neurais**. Ela faz parte da filosofia do projeto: inteligência arquitetural não deve depender exclusivamente de escala de GPU.

A OHANA busca capacidade por meio de:

- raciocínio simbólico/local;
- memória persistente;
- contexto seletivo;
- raciocínio incremental;
- planejamento estruturado;
- conhecimento reutilizável;
- execução local;
- pequenos modelos neurais auxiliares;
- engenharia baseada em evidência.

Isso transforma a OHANA em um experimento sobre até onde uma arquitetura cognitiva pode chegar quando o poder computacional é limitado e a inteligência é distribuída entre mecanismos especializados.

---

## Papel do modelo neural

O suporte de linguagem local atualmente usa:

- **Ollama** como runtime local;
- **Qwen 2.5 1.5B** como modelo neural auxiliar;
- inferência local por loopback quando disponível.

A divisão de responsabilidades desejada é:

```text
Qwen / futuro modelo neural
→ compreensão de linguagem
→ geração de linguagem
→ assistência semântica

OHANA
→ memória
→ estado
→ raciocínio
→ aprendizado
→ planejamento
→ ferramentas
→ engenharia
→ governança
→ autorização
```

Uma direção futura é avaliar um modelo neural próprio da OHANA, especializado em português e focado em roteamento, intenção, referências contextuais e geração natural.

---

## O que torna o projeto interessante

A OHANA não tenta competir com modelos de fronteira por número bruto de parâmetros.

A pergunta de pesquisa é outra:

> **Quanta inteligência útil, persistente e governável pode surgir de uma arquitetura cognitiva modular quando modelos neurais são componentes, e não a mente inteira?**

A arquitetura reúne ideias normalmente exploradas separadamente:

- arquiteturas cognitivas;
- raciocínio simbólico;
- memória persistente;
- assistentes locais;
- planejamento por agentes;
- agentes de Engenharia de Software;
- autoconsulta;
- automodificação supervisionada;
- inferência neural local leve.

---

## Princípios de engenharia

1. **Não regredir capacidades já validadas.**
2. **Reutilizar e conectar componentes existentes antes de criar novos.**
3. **Não duplicar núcleos, memórias, executores ou governança sem necessidade comprovada.**
4. **Diagnosticar em modo somente leitura antes de modificar.**
5. **Usar backup, hashes, candidatos, testes e rollback em mudanças estruturais.**
6. **Manter mudanças de produção sob autorização humana.**
7. **Consultar conhecimento local válido antes de chamadas externas.**
8. **Persistir conhecimento externo útil com origem/evidência quando apropriado.**
9. **Manter a arquitetura prática em hardware restrito.**
10. **Não confundir texto gerado com evidência técnica validada.**

---

## Fronteira atual de pesquisa

O foco atual não é chatbot básico. O projeto trabalha em:

- continuidade de Engenharia de Software em múltiplos turnos;
- autodiagnóstico mais fortemente baseado em evidência;
- coerência entre evidência técnica e julgamento de promoção;
- recuperação seletiva de contexto;
- aprendizado governado de regras procedurais;
- redução de chamadas neurais/externas desnecessárias;
- evolução do Autotune como coordenador da Engenharia já existente.

---

## Limitações atuais

- algumas continuações técnicas ainda estão sendo endurecidas;
- algumas formulações de ensino/aprendizado ainda não são roteadas corretamente;
- o caminho atual de elaboração Qwen possui limite conhecido de resposta em alguns casos;
- nem todos os módulos possuem suíte completa de regressão automática;
- a autoengenharia é supervisionada, não automodificação autônoma irrestrita;
- as medições atuais são baselines do projeto, não benchmarks padronizados da indústria.

---

## Documentação

- [Arquitetura](ARCHITECTURE.md)
- [Benchmarks e medições](BENCHMARKS.md)
- [Hardware e execução local](HARDWARE.md)
- [Roadmap](ROADMAP.md)
- [Segurança e governança](SECURITY.md)
- [Visão geral](docs/overview.md)

---

## Para leitores internacionais

**English summary:** OHANA is an experimental modular cognitive architecture focused on persistent local intelligence, governed learning and supervised self-engineering. Neural language models are auxiliary components rather than the sole cognitive core. Full documentation is primarily maintained in Brazilian Portuguese.

---

## Objetivo deste repositório

Este repositório é a apresentação pública e documentação técnica da OHANA.

A publicação do código-fonte será decidida separadamente conforme a arquitetura, os limites de segurança e a documentação amadureçam.
