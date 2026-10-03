# OHANA

**Arquitetura cognitiva experimental para inteligência local persistente, aprendizado governado e autoengenharia supervisionada.**

[![Experimentar OHANA](https://img.shields.io/badge/Experimentar_OHANA-Acessar_interface-2ea44f?style=for-the-badge)](https://ohana.bertolotofrederico.workers.dev/#demo)
[![GitHub Sponsors](https://img.shields.io/badge/Apoiar_o_projeto-GitHub_Sponsors-ea4aaa?style=for-the-badge)](https://github.com/sponsors/bertolotofrederico-rgb)

> **Demonstração pública:** a interface permite conversar com uma instância pública limitada da OHANA. Recursos administrativos, arquivos privados, Executor, Governança, carteira e operações sensíveis permanecem bloqueados.

OHANA é uma arquitetura modular de IA construída em torno de memória persistente, raciocínio local/simbólico, planejamento, execução controlada, aprendizado governado e fluxos de Engenharia de Software.

O projeto propositalmente **não trata um grande modelo de linguagem como toda a inteligência**. Modelos neurais são componentes auxiliares para compreensão e geração de linguagem. Memória, raciocínio, planejamento, governança, execução e engenharia pertencem à própria arquitetura OHANA.

> **Status:** desenvolvimento experimental ativo. A OHANA não é apresentada aqui como uma AGI concluída.

---

## Estado técnico atual

A OHANA encerrou o **ciclo 20** e avançou para o **ciclo 21** após validar em produção uma nova ligação de autoconhecimento e um fechamento documental governado no controlador de ciclo existente.

```text
CICLO_ATUAL = 21
ESTADO = PRONTO_PARA_NOVA_EVOLUCAO
ULTIMO_RESULTADO = CICLO_PROMOVIDO_COM_SUCESSO

MEMORIA = OK
RACIOCINIO_LOCAL = OK
ENGENHARIA = OK
AUTOTUNE = OK
AUTOCONHECIMENTO_LOCAL = VALIDADO
FECHAMENTO_DOCUMENTAL_GOVERNADO = VALIDADO

AUTORIZACAO_HUMANA = PRESERVADA
AUTORIZACAO_OPERACIONAL_AUTOMATICA = FALSE
PROMOCAO_AUTONOMA = FALSE
ROLLBACK = DISPONIVEL
```

O marco do C20 comprovou seis consultas de autoconhecimento em produção — ciclo, estado, último resultado, objetivo, próxima ação e aprendizado anterior — respondidas via `MEMORIA_LOCAL`, sem autorização operacional.

Também foi validado que o mesmo controlador de ciclo já existente pode reconhecer dois caminhos legítimos de encerramento:

```text
controlador existente
   ├─ fechamento supervisionado
   │    └─ plano + contrato + execução real
   │
   └─ fechamento documental governado
        └─ promoção comprovada + evidência + hashes + regressão + rollback
```

O caminho documental **não inventa execução, contrato ou autorização**. Quando não houve execução supervisionada, a última execução real anterior permanece preservada.

Nenhum novo núcleo, memória ou motor cognitivo foi criado para atingir esse comportamento. O trabalho continua seguindo a regra:

> **Não criar nova inteligência enquanto a inteligência já existente não circular corretamente.**

[Leia o status técnico atual completo](docs/STATUS_ATUAL.md).

[Leia também o marco de continuidade da Engenharia](docs/MARCO_CONTINUIDADE_ENGENHARIA.md).

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
  ├─ autoconhecimento
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
- autoconhecimento local de ciclo, estado, objetivo, resultado e próxima ação;
- reutilização de aprendizados governados de ciclos anteriores;
- **Projetista** para desenho técnico;
- **Planejador** para planejamento;
- **Executor** para execução controlada;
- **Autotune** para observação, diagnóstico e orquestração de engenharia;
- autorização humana;
- contratos e salvaguardas operacionais;
- fechamento supervisionado de ciclos;
- fechamento documental governado de evolução já promovida;
- verificação de integridade por SHA-256;
- candidatos isolados antes de alterações em produção;
- validação de parser em Windows PowerShell 5.1;
- alterações com backup e rollback;
- inspeção seletiva de código usando código, AST e hashes;
- roteamento entre conversa comum e Engenharia de Software;
- continuidade técnica em múltiplos turnos;
- continuidade contextual com preservação de resultado e próximo passo;
- reavaliação técnica baseada em evidência;
- coerência obrigatória entre evidência, candidato, testes e prontidão para promoção;
- suporte neural local via Ollama/Qwen;
- runtime HTTP de produção com autoconsulta técnica.

---

## Desempenho observado

Um baseline local anterior medido na arquitetura mostrou aproximadamente:

| Etapa | Tempo observado |
|---|---:|
| Requisição total | **866,76 ms** |
| Montagem/recuperação de contexto | **752,55 ms** |
| Raciocínio local | **42,56 ms** |
| Interpretação | **16,78 ms** |
| Etapa de IA externa/neural nesse teste | **0 ms** |
| Chamadas externas de IA | **0** |

Em uma comparação controlada posterior, envolvendo 20 pedidos que deveriam usar capacidades locais, foi observado:

| Métrica | Antes | Depois |
|---|---:|---:|
| Fallback desnecessário | 18/20 | **0/20** |
| Chamadas de IA | 44 | **0** |
| Mediana TOTAL_MS | ~9194 ms | **~289 ms** |
| Maior TOTAL_MS local depois | — | **~1945 ms** |

Esses valores são medições do ambiente local do projeto, não benchmarks universais.

---

## Marcos de engenharia já validados

Validações controladas demonstraram:

- **10/10 testes de roteamento técnico** chegando à Engenharia existente;
- **18/18 verificações HTTP** em um ciclo de promoção controlada anterior;
- **6/6 turnos técnicos consecutivos** preservando a investigação atual em produção;
- **52/52 turnos** em uma validação ponta a ponta da evolução semântica em laboratório;
- **8/8 testes** de continuidade contextual em candidato e promoção controlada;
- **5/5 testes** de distinção entre resultado, continuação, recomendação, justificativa e saída de contexto;
- **6/6 consultas de autoconhecimento do C20** respondidas via memória local;
- fechamento do C20 com evidência documental governada, histórico, aprendizado e rollback;
- avanço controlado para o ciclo 21;
- operação local Qwen/Ollama preservada quando realmente necessária;
- regressões deliberadas ou condições incompletas bloqueando prontidão para promoção;
- pedidos operacionais permanecendo protegidos;
- autorização humana obrigatória para produção.

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
→ promoção
→ observação
→ aprendizado
→ novo estado
```

Uma regra crítica é que isto **não é permitido**:

```text
GERAR IDEIA
→ ALTERAR PRODUÇÃO
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

---

## Papel do modelo neural

O modelo neural auxiliar utilizado atualmente pela OHANA é o **Qwen 2.5 1.5B**, executado localmente por meio do Ollama.

```text
Qwen 2.5 1.5B
→ compreensão de linguagem
→ geração de linguagem
→ assistência semântica
→ apoio à interpretação de pedidos

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

O modelo neural atua principalmente na camada linguística. O estado persistente, a memória, o raciocínio, o aprendizado, o planejamento, o uso governado de ferramentas, a engenharia e as autorizações permanecem sob responsabilidade da arquitetura OHANA.

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
- ampliar a circulação ponta a ponta entre autodiagnóstico, projeto, planejamento, ferramentas e aprendizado sem criar estruturas paralelas;
- ampliar baselines de desempenho e regressão do ciclo evolutivo.

---

## Projeto OHANA Enterprise

A **OHANA Enterprise** é a camada de especialização da arquitetura OHANA para ambientes organizacionais.

Uma implantação pode combinar identidade e contexto da organização, serviços e regras específicos, conhecimento e documentos autorizados, permissões e governança, integrações com sistemas e dados, planejamento e execução controlada e evolução incremental da solução.

📄 **[Conheça a proposta de projeto OHANA Enterprise](comercial/PROPOSTA_OHANA_ENTERPRISE.md)**

---

## Apoio e patrocínio

Quer apoiar o desenvolvimento independente da OHANA ou conversar sobre patrocínio e parceria?

❤️ **[Apoiar / Patrocinar a OHANA](SPONSORSHIP.md)**


---

## Documentação

- [Status técnico atual](docs/STATUS_ATUAL.md)
- [Arquitetura](ARCHITECTURE.md)
- [Benchmarks e medições](BENCHMARKS.md)
- [Hardware e execução local](HARDWARE.md)
- [Roadmap](ROADMAP.md)
- [Segurança e governança](SECURITY.md)
- [Visão geral](docs/overview.md)
- [Marco: continuidade da Engenharia](docs/MARCO_CONTINUIDADE_ENGENHARIA.md)

---

## Para leitores internacionais

**English summary:** OHANA is an experimental modular cognitive architecture focused on persistent local intelligence, governed learning and supervised self-engineering. Cycle 20 validated local self-knowledge and a governed documentary closing path inside the existing cycle controller, preserving human authorization, rollback and the distinction between documented promotion and real supervised execution. The project is now on cycle 21.

---

## Objetivo deste repositório

Este repositório é a apresentação pública e documentação técnica da OHANA. A publicação do código-fonte será decidida separadamente conforme a arquitetura, os limites de segurança e a documentação amadureçam.
