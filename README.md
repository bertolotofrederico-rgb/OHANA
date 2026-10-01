# OHANA

**Arquitetura cognitiva experimental para inteligência local persistente, aprendizado governado e autoengenharia supervisionada.**

OHANA é uma arquitetura modular de IA construída em torno de memória persistente, raciocínio local/simbólico, planejamento, execução controlada, aprendizado governado e fluxos de Engenharia de Software.

O projeto propositalmente **não trata um grande modelo de linguagem como toda a inteligência**. Modelos neurais são componentes auxiliares para compreensão e geração de linguagem. Memória, raciocínio, planejamento, governança, execução e engenharia pertencem à própria arquitetura OHANA.

> **Status:** desenvolvimento experimental ativo. A OHANA não é apresentada aqui como uma AGI concluída.

---

## Estado técnico atual;

A continuidade da Engenharia de Software em múltiplos turnos foi **promovida e validada em produção**.

O teste real confirmou que uma investigação técnica consegue permanecer na rota `ENGENHARIA_SOFTWARE` por seis turnos relacionados, incluindo continuidade, próximo teste, reavaliação por evidência, preparação de candidato e julgamento de prontidão.

```text
CONTINUIDADE_ENGENHARIA = OK
TURNOS_TECNICOS = 6/6
REAVALIACAO_TECNICA = OK
COERENCIA_JULGAMENTO = OK
SAIDA_CONVERSA_NORMAL = OK
ENSINO = PRESERVADO
OPERACIONAL = PROTEGIDO
MEMORIA = OK
AUTORIZACAO_HUMANA = PRESERVADA
PROMOCAO_AUTONOMA = FALSE
GROQ_INDEVIDO = 0
REGRESSOES = 0
ROLLBACK = DISPONIVEL
ESTADO = PROMOVIDO_VALIDADO
```

A mudança foi limitada a duas funções já existentes em `Servidor/servidor.ps1`, preservando os demais módulos comparados. O hash de produção passou do candidato anterior validado para o novo candidato autorizado:

```text
HASH_ANTES  = 33225CAE4E1295F3841FED340CA77945A2E1911A2125768FC04587E0C7928A10
HASH_DEPOIS = 30CABA1496C6314B5EA7B754EE5E789F347F5D4AF4181C582166AE5999D70659
HASH_BACKUP = 33225CAE4E1295F3841FED340CA77945A2E1911A2125768FC04587E0C7928A10
```

[Leia o relatório público deste marco](docs/MARCO_CONTINUIDADE_ENGENHARIA_2026-09-30.md).

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
- **continuidade técnica validada em múltiplos turnos**;
- **reavaliação técnica baseada em evidência**;
- **coerência obrigatória entre evidência, candidato, testes e prontidão para promoção**;
- saída correta da rota técnica quando o assunto deixa de ser Engenharia;
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

Esse baseline mostrou que o maior custo estava na **montagem e recuperação de contexto**, não no motor de raciocínio local.

```text
MEMÓRIA GRANDE
   ↓
RECUPERAÇÃO SELETIVA
   ↓
CONTEXTO ATIVO PEQUENO
   ↓
RACIOCÍNIO LOCAL RÁPIDO
```

> Esses números são um baseline observado do projeto, não um benchmark universal.

---

## Marcos de engenharia já validados

Validações controladas demonstraram:

- **10/10 testes de roteamento técnico** chegando à Engenharia existente;
- **18/18 verificações HTTP** em um ciclo de promoção controlada anterior;
- **6/6 turnos técnicos consecutivos** preservando a investigação atual em produção;
- **15 turnos totais** no conjunto pós-promoção descrito no relatório mais recente;
- operação local Qwen/Ollama com **Groq indevido = 0** nos retornos com runtime;
- preservação de memória, retificação básica e proteção operacional;
- regressões deliberadas ou condições incompletas bloqueando prontidão para promoção;
- pergunta comum saindo da Engenharia e retornando à conversa neural normal;
- pedido operacional permanecendo protegido;
- autorização humana obrigatória para produção.

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

A promoção para produção continua governada e exige autorização humana explícita.

---

## Hardware-alvo: provar capacidade sob restrição

A OHANA é desenvolvida propositalmente em hardware local modesto.

```text
GPU: NVIDIA GeForce GTX 750
VRAM: 2 GB
CUDA: disponível
Sistema: Windows
Runtime/Shell: Windows PowerShell 5.1
Runtime de modelo local: Ollama
Modelo neural auxiliar atual: Qwen 2.5 1.5B
```

A GTX 750 não é apresentada como hardware adequado para treino pesado de grandes redes neurais. Ela faz parte da filosofia do projeto: inteligência arquitetural não deve depender exclusivamente de escala de GPU.

A OHANA busca capacidade por meio de raciocínio local, memória persistente, contexto seletivo, planejamento estruturado, execução governada, conhecimento reutilizável e pequenos modelos neurais auxiliares.

---

## Papel do modelo neural

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

Uma direção futura é avaliar um modelo neural próprio da OHANA, especializado em português e focado nas tarefas linguísticas realmente necessárias à arquitetura.

---

## O que torna o projeto interessante

A OHANA não tenta competir com modelos de fronteira por número bruto de parâmetros.

> **Quanta inteligência útil, persistente e governável pode surgir de uma arquitetura cognitiva modular quando modelos neurais são componentes, e não a mente inteira?**

A arquitetura reúne ideias de arquiteturas cognitivas, raciocínio simbólico, memória persistente, assistentes locais, planejamento por agentes, Engenharia de Software por agentes, autoconsulta e automodificação supervisionada.

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

## Pendências conhecidas

As pendências atuais permanecem separadas dos marcos já validados:

- retificação com histórico completo;
- limite de 400 tokens no caminho atual do Qwen em determinados casos;
- TESTE F de aprendizado de regra;
- consulta de arquitetura de restaurante.

Essas pendências foram registradas como preexistentes no último ciclo e não foram atribuídas à promoção da continuidade da Engenharia.

---

## Documentação

- [Arquitetura](ARCHITECTURE.md)
- [Benchmarks e medições](BENCHMARKS.md)
- [Hardware e execução local](HARDWARE.md)
- [Roadmap](ROADMAP.md)
- [Segurança e governança](SECURITY.md)
- [Visão geral](docs/overview.md)
- [Marco: continuidade da Engenharia — 30/09/2026](docs/MARCO_CONTINUIDADE_ENGENHARIA_2026-09-30.md)

---

## Para leitores internacionais

**English summary:** OHANA is an experimental modular cognitive architecture focused on persistent local intelligence, governed learning and supervised self-engineering. Multi-turn software-engineering continuity has been validated in production while preserving human authorization and rollback. Full documentation is primarily maintained in Brazilian Portuguese.

---

## Objetivo deste repositório

Este repositório é a apresentação pública e documentação técnica da OHANA. A publicação do código-fonte será decidida separadamente conforme a arquitetura, os limites de segurança e a documentação amadureçam.
