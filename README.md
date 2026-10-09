# OHANA

**Arquitetura cognitiva experimental para inteligência local persistente, aprendizado governado e autoengenharia supervisionada.**

[![Experimentar OHANA](https://img.shields.io/badge/Experimentar_OHANA-Acessar_interface-2ea44f?style=for-the-badge)](https://ohana.bertolotofrederico.workers.dev/#demo)
[![GitHub Sponsors](https://img.shields.io/badge/Apoiar_o_projeto-GitHub_Sponsors-ea4aaa?style=for-the-badge)](https://github.com/sponsors/bertolotofrederico-rgb)

> **Demonstração pública:** a interface permite conversar com uma instância pública limitada da OHANA. Recursos administrativos, arquivos privados, Executor, Governança, carteira e operações sensíveis permanecem bloqueados.

OHANA é uma arquitetura modular de IA construída em torno de memória persistente, raciocínio local/simbólico, planejamento, execução controlada, aprendizado governado e fluxos de Engenharia de Software.

O projeto propositalmente **não trata um grande modelo de linguagem como toda a inteligência**. Modelos neurais são componentes auxiliares para compreensão e geração de linguagem. Memória, raciocínio, planejamento, governança, execução e engenharia pertencem à própria arquitetura OHANA.

> **Status:** desenvolvimento experimental ativo, com capacidades em diferentes estágios de validação e promoção.


## Visite o escritório virtual da OHANA

**Conheça a OHANA no ambiente virtual SoWork.** A integração experimental conecta a arquitetura cognitiva da OHANA a um NPC no escritório, permitindo interações em um canal autorizado e reações visuais durante a conversa.

🏢 **[Acessar o escritório virtual da OHANA no SoWork](https://app.sowork.com/s/9rY0sIzw5UIGzlLqF2Zk/join/8HOzmmYAVdmUKNK6HNUD/z4iUDAIyfMB2676DltvD?user=neMGFMYM5ihUbytF7Hca5vN3C0H2&ts=1791519088287)**

> **Sobre o acesso:** link de entrada fornecido pelo responsável pelo projeto. O tipo de convite, as permissões efetivas e eventual necessidade de aprovação são definidos pelo SoWork e pela configuração do escritório. A visita não concede, por si só, permissões administrativas. A disponibilidade da OHANA depende de sua instância local e do adaptador estarem ativos. Não é uma demonstração com disponibilidade garantida.

### Integração OHANA ↔ SoWork — marco de outubro de 2026

- **Integração operacional:** mensagem recebida em canal autorizado do SoWork, encaminhada à OHANA local e resposta apresentada pelo NPC; ciclo real completo validado.
- **Operação contínua supervisionada:** adaptador ativo na sessão validada, com prevenção de duplicidade, leitura de novas mensagens e diagnóstico de falhas; sem inicialização automática.
- **Expressividade visual:** animação de pensamento `reactThink` e reações após fala confirmada, com alternância entre `nodEmojiMeeting`, `happyEmojiMeeting`, `clapEmojiMeeting` e `likeEmojiMeeting`. A primeira reação real da alternância foi confirmada.
- **Preservação arquitetural:** núcleo, memória, aprendizado, raciocínio e mecanismo de fala não foram modificados para essa integração; backups, verificações de integridade e rollback utilizados.
- **Limitação atual:** a interface MCP disponível para o NPC não comprovou caminhada livre, descoberta de mesas/zonas ou capacidade de sentar em mesas independentes. Mobilidade autônoma permanece em investigação e não deve ser anunciada como implementada.

A integração opera como experiência de presença digital; **não implica autonomia espacial irrestrita nem acesso dos visitantes a funções administrativas da OHANA**.

---

## International research positioning

**OHANA is an experimental local-first cognitive architecture for persistent, stateful AI systems.** Its research direction combines persistent memory, governed learning, reusable reasoning, planning, controlled execution, agent governance and lightweight local neural models.

Relevant research and engineering terms:

`persistent memory` · `stateful agents` · `cognitive architecture` · `local-first AI` · `symbolic reasoning` · `continual learning` · `agent governance` · `human-in-the-loop` · `reusable reasoning` · `resource-efficient AI`

OHANA is an experimental architecture under active development. The project investigates a focused technical question:

> **How much persistent, reusable and governed cognitive capability can be produced by architecture before requiring larger neural models?**

The current development path focuses on five connected capabilities, preferably by integrating mechanisms that already exist instead of creating duplicate subsystems:

1. **Closed cognitive loop** — understand → retrieve → reason → formulate → act/respond → observe → learn.
2. **Learning from consequences** — distinguish success, failure, partial success and insufficient evidence.
3. **Dynamic memory relevance** — prioritize knowledge using context, validity, evidence and usefulness.
4. **Reusable reasoning** — preserve transferable solution structures instead of storing only final answers.
5. **Graduated autonomy** — progress from reasoning and suggestion to simulation, preparation and governed execution.

Future comparative evaluation is intended to emphasize not only answer quality, but also persistence across sessions, reuse of learned knowledge, external-model calls, latency, RAM/VRAM use, offline capability and the amount of functionality preserved when the neural model is unavailable.

---

## Estado técnico atual

Em **07/10/2026**, a OHANA concluiu em produção o marco **C22 — cinco capacidades cognitivas conectadas**, preservando o princípio de reutilizar capacidades existentes antes de criar novos subsistemas.

```text
C22 / CINCO CAPACIDADES — VALIDADAS EM RUNTIME PRODUTIVO

1. CICLO COGNITIVO FECHADO
→ composição preserva definições necessárias
→ erros do calculador chegam à resposta
→ observação/resultado permanecem no ciclo

2. APRENDIZADO POR CONSEQUÊNCIA
→ aprendizado real persistido é recuperado
→ aprendizado influencia decisão futura
→ teste-base é preservado
→ resultado retorna ao aprendizado

3. RELEVÂNCIA DINÂMICA DE MEMÓRIA
→ contexto altera a prioridade das memórias recuperadas
→ ordenação por pertinência/score preservada após deduplicação

4. RACIOCÍNIO REUTILIZÁVEL
→ estrutura reutilizável é persistida junto ao aprendizado
→ recuperação entrega verificações estruturadas ao consumidor existente
→ estratégia candidata muda sem reconstrução neural
→ generalização ampla em produção ainda será ampliada por benchmark

5. AUTONOMIA GRADUADA
→ observar
→ analisar
→ sugerir
→ preparar/simular
→ executar ação reversível autorizada
→ bloquear ação não autorizada
→ observar resultado
→ registrar/aprender

MODELO NEURAL LOCAL
→ apoio linguístico e semântico
→ não é o repositório principal de memória, decisão ou governança

GOVERNANÇA
→ autorização humana preservada
→ ações críticas/não autorizadas permanecem bloqueadas
→ backup, hashes, rollback e validação de runtime preservados
```

O Ponto 5 foi validado com execução reversível real, resultado observado e retorno ao ciclo de aprendizado. Os cinco pontos foram concluídos no escopo testado, com os limites e evidências de cada capacidade documentados separadamente.

A produção continua governada por autorização humana, backup, hashes, candidatos isolados e rollback.

> **Princípio atual:** aumentar capacidade por integração, reutilização e estrutura local — não por força bruta de parâmetros.

[Leia o mapa evolutivo consolidado](docs/MAPA_EVOLUTIVO_2026-10-07.md).

[Avanços relevantes para pesquisa e engenharia](docs/AVANCOS_PESQUISA_EMPRESAS.md).

[Leia o status técnico atual completo](docs/STATUS_ATUAL.md).

[Leia também o marco de continuidade da Engenharia](docs/MARCO_CONTINUIDADE_ENGENHARIA.md).

[Leia o case técnico de proveniência, restauração seletiva e conversa natural](docs/CASE_CONVERSA_APRENDIZADO_GOVERNADO.md).

### Marco atual — proveniência e restauração seletiva em produção

Durante a regressão conversacional pós-C22, a OHANA precisou resolver um problema adicional de governança: testes produtivos podiam escrever em memória enquanto outras escritas legítimas aconteciam em paralelo. Restaurar o arquivo inteiro poderia apagar aprendizado válido.

O ciclo comprovou e promoveu em produção uma capacidade mínima de **correlação individual + restauração seletiva**, preservando a agregação existente e os registros antigos:

```text
CORRELACAO_PROMOVIDA=True
CORRELACAO_PRODUCAO_OK=True
RESTAURACAO_SELETIVA_PRODUCAO_OK=True
ESCRITA_CONCORRENTE_PRESERVADA=True
EFEITOS_TESTE_REMOVIDOS=True
MEMORIA_MAIS_NOVA_PRESERVADA=True
```

A melhoria ampla da conversa natural **ainda não foi promovida**. Na validação produtiva atual, 2 de 6 casos-alvo passaram e 4 permanecem em correção; o candidato conversacional foi revertido sem remover a capacidade de proveniência já validada.

A investigação de generalização também descartou truncamento como causa principal dos pedidos longos: o texto chegou íntegro. O ponto restante comprovado está na qualificação da intenção técnica quando a instrução aparece depois de contexto/introdução. Esse ajuste segue apenas em LAB; a produção permanece inalterada.

Esse case documenta também candidatos rejeitados e rollbacks, para separar claramente resultado comprovado de hipótese de pesquisa.

---

### Marco C21.5 — raciocínio → formulação factual

O C21.5 foi **validado, promovido e ativado em produção** no escopo factual governado e coberto. O trabalho confirmou que a OHANA já possuía um compositor factual local capaz de preservar o conteúdo governado sem paráfrase neural; o gargalo estava na precedência do fluxo.

```text
conhecimento governado pertinente
→ sinais existentes de estado / confiança / cobertura
→ Compor-ConhecimentoFactualNaturalV12
→ resposta factual local fiel
→ 0 chamadas neurais no caso coberto
```

Resultados do marco:

- **6/6 casos positivos** e **6/6 casos negativos** validados em laboratório antes da promoção;
- patch isolado certificado contra o estado atual da OHANA;
- promoção controlada concluída com restart coordenado do servidor;
- uma única instância do servidor permaneceu ativa após a promoção;
- vigia reativado sem reinício indevido;
- cálculo e referência contextual preservados;
- fallback neural preservado para casos não cobertos;
- nenhuma interceptação indevida observada;
- C21.1–C21.4 preservados;
- sem novo módulo, novo formulador ou resposta hardcoded;
- gateway público preservado;
- nenhuma alteração inesperada observada.

Caso factual confirmado em produção:

```text
Pergunta:
Qual é a porta do servidor OHANA?

Resposta:
O servidor da OHANA usa a porta 8092.

COMPOSITOR_CHAMADO=True
CHAMADAS_NEURAIS_QUANTIDADE=0
```

Benefícios conquistados: maior fidelidade de fatos governados, redução de chamadas neurais em casos cobertos, menor carga desnecessária sobre o modelo local e separação mais clara entre formulação simbólica e fallback neural.

> **Não criar nova inteligência enquanto a inteligência já existente não circular corretamente.**

[Leia o status técnico atual completo](docs/STATUS_ATUAL.md).

[Leia também o marco de continuidade da Engenharia](docs/MARCO_CONTINUIDADE_ENGENHARIA.md).

---

### Marco C21.6D — energização do caminho local existente

O C21.6D foi concluído com a regra de **ligar o que já existe**, sem recriar núcleo, memória, raciocínio ou arquitetura.

O ciclo confirmou duas alterações pontuais dentro do harness/autotune existente:

```text
expiração da avaliação: 5 → 20 minutos
caminho não sequencial do harness: Interpretar-ChatMedido → Interpretar-ChatLocal
```

A certificação R3 confirmou exatamente duas linhas lógicas alteradas, zero alterações inesperadas, arquitetura preservada, financeiro preservado e hashes idênticos das funções produtivas `Interpretar-ChatLocal` e `Interpretar-ChatMedido`.

A energização foi aplicada de forma pontual, o runtime foi recarregado pelo **vigia existente**, sem criação de novo mecanismo de recuperação. O servidor voltou com HTTP 200, hash certificado ativo, PID 4/HTTP.sys preservado e observação curta sem falhas.

Validação funcional pós-energização:

- cálculo local: `10+10x20 → Resultado: 210.`;
- acolhimento conversacional: resposta adequada via caminho local existente;
- runtime estável após os testes;
- rollback não necessário;
- financeiro não testado nem alterado no ciclo.

O benchmark integral de 20 casos observou:

| Métrica | Baseline | Candidato |
|---|---:|---:|
| Casos executados | 20 | 20 |
| Aprovações | 10 | 10 |
| Aprovações perdidas | — | 0 |
| Chamadas HTTP ao modelo | 20 | 20 |
| Erros HTTP de IA | 1 | 0 |
| Indisponibilidades | 1 | 0 |
| Tempo total | 91,47 s | 73,02 s |

O ganho de tempo observado foi de aproximadamente **20,18%** naquele ambiente e execução. Não é apresentado como benchmark universal.

### C22 — cinco capacidades cognitivas conectadas em produção

O C22 avançou do mapeamento para integração produtiva. O trabalho confirmou que memória, contexto, conhecimento, planejamento, execução, governança e aprendizado já existiam em grande parte; os principais ganhos vieram de **corrigir pontos de perda e conectar capacidades existentes**.

Resultados validados no runtime produtivo:

- **ciclo cognitivo fechado:** definições necessárias deixaram de ser omitidas silenciosamente e erros reais do calculador passaram a chegar à resposta;
- **aprendizado por consequência:** aprendizado persistido foi recuperado e alterou a seleção de validações/decisões futuras;
- **relevância dinâmica de memória:** o contexto passou a preservar a prioridade correta das memórias pertinentes;
- **raciocínio reutilizável:** a OHANA passou a persistir uma `estrutura_reutilizavel` no momento do aprendizado e a entregar verificações estruturadas diretamente ao consumidor existente, sem pedir ao modelo neural para reconstruir o raciocínio posteriormente;
- **autonomia graduada:** observação, análise, sugestão, preparação, execução reversível autorizada, bloqueio de ação não autorizada e retorno do resultado ao aprendizado foram validados no fluxo produtivo.

Durante o fechamento do Ponto 5 também foram corrigidos problemas operacionais que impediam o runtime real de seguir o caminho já existente, incluindo compatibilidade de SHA-256, leitura UTF-8 explícita e seleção correta do processo no reload.

O próximo foco técnico não é criar um novo núcleo: é medir qualidade conversacional ponta a ponta, ampliar a generalização do raciocínio reutilizável e publicar benchmarks reproduzíveis que comparem persistência, chamadas neurais, latência, memória e autonomia governada.

---

## Características arquiteturais

A OHANA foi desenhada para distribuir responsabilidades entre componentes persistentes e locais, usando o modelo neural principalmente como componente linguístico e semântico.

- **Memória entre sessões:** persistência e recuperação fazem parte da arquitetura.
- **Aprendizado por resultado:** o resultado pode retornar ao ciclo de aprendizado governado.
- **Reuso de raciocínio:** estruturas reutilizáveis podem ser persistidas e entregues diretamente aos consumidores existentes.
- **Planejamento:** Planejador e Projetista são componentes explícitos.
- **Execução:** o Executor é separado e opera sob autorização e contratos.
- **Governança:** autorização humana e bloqueio de ações críticas fazem parte do fluxo.
- **Modelo neural:** usado principalmente para linguagem e assistência semântica.
- **Operação local:** é um objetivo explícito, inclusive em hardware modesto.
- **Continuidade local:** funções locais e simbólicas permanecem disponíveis nos escopos cobertos.

A avaliação pública do projeto deve se apoiar em evidências, benchmarks reproduzíveis e métricas equivalentes.

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
- circulação de conhecimento factual ATIVO até o calculador existente;
- formulação factual simbólica validada em laboratório para conhecimento governado coberto;
- precedência factual controlada capaz de evitar chamada neural quando o compositor local já cobre o caso;
- fallback neural preservado para perguntas fora do escopo factual coberto;
- precedência governada de conhecimento vigente sobre relato antigo não validado;
- distinção entre resultado calculado e fato persistente;
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
- C21.5 validado, promovido e ativo em produção no escopo factual coberto;
- resposta factual local confirmada em produção com 0 chamadas neurais nos casos cobertos e fallback preservado;
- restart controlado de ativação concluído com instância única do servidor e vigia reativado sem reinício indevido;
- circulação de conhecimento ATIVO promovida e validada em produção;
- precedência governada validada sem apagar histórico antigo;
- generalização direta de regra persistida validada sem reensino;
- derivados calculados preservados como não-fatos e sem aprendizado automático;
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
11. **Tratar eficiência computacional e energética como requisito arquitetural: mais capacidade não deve significar mais consumo por padrão.**

---

## Pendências conhecidas

As pendências atuais permanecem separadas dos marcos já validados:

- executar uma regressão conversacional ponta a ponta após o fechamento dos cinco pontos, comparando compreensão, contexto, memória, formulação e qualidade de resposta;
- ampliar a **generalização produtiva** do raciocínio reutilizável com mais de um domínio/caso e benchmark reproduzível;
- publicar uma bateria comparativa pública que meça persistência, reutilização, chamadas neurais, latência, RAM/VRAM, operação offline e autonomia governada;
- manter os contratos financeiros existentes preservados enquanto o escopo cognitivo é trabalhado;
- manter o candidato SECURITY certificado congelado até autorização explícita;
- configurar/certificar quota real antes de abertura pública ampliada;
- fechar segurança financeira antes de Wallet pública;
- benchmark de eficiência do Ollama/Qwen: CPU, GPU, RAM/VRAM, keep-alive, tokens, latência e energia estimada por resposta;
- amadurecer identidade/isolamento para Online multiusuário e Enterprise;
- iniciar Lite e Network somente depois dos gates anteriores.

A OHANA não trata “pronto para promoção” como autorização para promover.

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
- [Case: conversa, proveniência e restauração seletiva](docs/CASE_CONVERSA_APRENDIZADO_GOVERNADO.md)

---

## Para leitores internacionais

**English summary:** OHANA is an experimental local-first cognitive architecture for persistent, stateful AI systems. It combines persistent memory, governed learning, contextual and symbolic reasoning, planning, controlled execution, software-engineering workflows and human authorization, while using lightweight neural models mainly as language and semantic components.

As of **2026-10-07**, the C22 development path has validated five connected capabilities in the production runtime: a closed cognitive loop, learning from consequences, dynamic memory relevance, reusable reasoning structures, and graduated autonomy with governed reversible execution. Reusable reasoning is persisted as structure at learning time instead of being reconstructed later from free-form text by the neural model.

OHANA is an experimental persistent cognitive architecture under active development. Its research question is whether architecture can deliver useful, reusable and governed capabilities with modest hardware, fewer unnecessary neural calls and stronger continuity across sessions. The next public-evidence step is broader reproducible benchmarking, including conversational regression and generalization across multiple task domains.

---

## Objetivo deste repositório

Este repositório é a apresentação pública e documentação técnica da OHANA. A publicação do código-fonte será decidida separadamente conforme a arquitetura, os limites de segurança e a documentação amadureçam.
