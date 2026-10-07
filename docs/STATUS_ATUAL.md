# OHANA — Status técnico atual

> Atualizado em 06/10/2026. Este documento separa explicitamente o que está em produção, o que foi validado apenas em LAB e o que permanece planejado.

## Resumo executivo

A OHANA permanece no ciclo 21, com o marco C21.6D concluído e ativo em produção. O desenvolvimento seguinte começou no C22, voltado à reutilização cognitiva: localizar onde memória e conhecimento já existentes deixam de circular entre recuperação, raciocínio, formulação e planejamento.

| Área | Estado |
|---|---|
| Autodesenvolvimento | avançado |
| Cognição integrada / C21 | C21.6D concluído; integração avançada |
| Conhecimento governado | avançado |
| Runtime / resiliência | avançados |
| Segurança pública | candidato certificado em LAB; não promovido |
| Wallet Core | integração em andamento |
| Segurança financeira | arquitetura definida; validações específicas em andamento |
| Enterprise | base/arquitetura consolidada |
| Online multiusuário | futuro próximo |
| Lite | projetada |
| Network | planejada |
| Eficiência computacional/energética | princípio estrutural; C21.6D medido em benchmark comparável |
| Reutilização cognitiva / C22 | ponto de perda localizado; candidato funcional validado; 12/12 casos comportamentais aprovados no R1; certificação final bloqueada por divergência de persistência |

A regra de desenvolvimento continua:

```text
MAPEAR
→ REUTILIZAR
→ LIGAR
→ VALIDAR EM LAB
→ CERTIFICAR
→ PROMOVER SOMENTE COM AUTORIZAÇÃO HUMANA
→ OBSERVAR
→ APRENDER
```

## Autodesenvolvimento

Estimativas internas de maturidade:

```text
Aprender com evolução              ~94–96%
Reutilizar evolução                ~95–97%
Autoconhecimento                   ~89–92%
Autodiagnóstico causal             ~92–95%
Autoprojeto completo               ~89–92%
Modificar via ferramentas          ~92–94%
```

Também já foram comprovados: ciclo ponta a ponta, execução supervisionada, fechamento documental, rollback controlado, diagnóstico→correção→LAB, preservação de produção e criação de candidato isolado.

Os percentuais representam maturidade relativa de capacidades específicas e não significam que a OHANA esteja concluída.

## Integração cognitiva — C21

```text
C21.1  contexto → compreensão                    VALIDADO EM LAB
C21.2  pergunta → conhecimento pertinente        FUNCIONAL EM CASOS COMPROVADOS; GATE HISTÓRICO DESALINHADO
C21.3  pergunta → memória pertinente              VALIDADO EM LAB
C21.4  conhecimento + memória → raciocínio        PARCIALMENTE VALIDADO
C21.5  raciocínio/conhecimento → formulação       VALIDADO E ATIVO EM PRODUÇÃO
C21.6  regressão/eficiência ponta a ponta          C21.6D CONCLUÍDO EM PRODUÇÃO
C21.7  promoção governada ampla                    FUTURO
C22.0  mapa de reutilização cognitiva              CONCLUÍDO / SOMENTE LEITURA
```

### C21.5 em produção

O compositor factual simbólico foi validado e promovido para o escopo governado coberto.

```text
conhecimento governado pertinente
→ estado/confiança/cobertura
→ compositor factual local
→ resposta fiel
→ 0 chamadas neurais quando o caso está coberto
```

### C21.6D concluído — energização do caminho local existente

O C21.6D foi desenvolvido como integração de capacidades existentes, não como substituição de arquitetura.

A certificação estática final confirmou:

```text
LINHAS_LOGICAS_ALTERADAS=2
ALTERACOES_INESPERADAS=0
TODAS_MUDANCAS_DENTRO_DO_HARNESS=True
FUNCOES_PRODUTIVAS_CRITICAS_PRESERVADAS=True
FINANCEIRO_PRESERVADO=True
ARQUITETURA_PRESERVADA=True
C21_6D_CERTIFICADO=True
```

As duas ligações certificadas foram:

1. expiração da avaliação do autotune/harness de 5 para 20 minutos;
2. caminho não sequencial do harness passando de `Interpretar-ChatMedido` para `Interpretar-ChatLocal`, reutilizando o caminho local já existente.

A energização foi aplicada pontualmente em produção. O runtime foi recarregado pelo vigia existente, sem criar novo mecanismo de recuperação. Após a ativação foram confirmados hash certificado, HTTP 200, instância única do servidor, PID 4/HTTP.sys preservado e estabilidade curta sem falhas.

O P5A validou funcionalmente dois casos não financeiros: cálculo local (`Resultado: 210.`) e acolhimento conversacional. O 403 visto no primeiro smoke foi diagnosticado como cliente de teste sem o `Origin` exigido pela rota; com o contrato HTTP correto, ambos os testes retornaram 200.

O ciclo terminou com:

```text
C21_6D_P5_VALIDADO=True
C21_6D_CONCLUIDO=True
ROLLBACK_NECESSARIO=False
FINANCEIRO_ALTERADO=False
```

### C22 — circulação e reutilização cognitiva

O C22 avançou do mapeamento inicial para a localização de um ponto concreto de perda e para a validação de um candidato mínimo em LAB.

```text
C22.0   capacidades existentes mapeadas                  CONCLUÍDO
memória → formulação                                    COMPROVADO
conhecimento → formulação                               COMPROVADO
conhecimento persistente                                REUTILIZADO
caso factual 8092                                       PONTA A PONTA
caso factual 559AD                                      RECUPERÁVEL
perda factual geral                                     NÃO COMPROVADA
conflito engenharia × conhecimento                      COMPROVADO
ponto de perda                                          LOCALIZADO
```
```text
ponto localizado
engenharia podia responder antes
→ consulta factual posterior deixava de participar
→ conhecimento suficiente podia ficar fora da resposta
```
```text
C22.3E — contrafactual
consulta factual antes da engenharia                    TESTADA
paráfrase natural com cobertura 0.545                   RECUPERADA
paráfrase curta com cobertura 0.429                     NÃO INTERCEPTADA
limiar factual reduzido                                 NÃO
engenharia explícita                                    PRESERVADA
novo módulo                                             NÃO
nova memória                                            NÃO
novo conhecimento                                       NÃO
reuso de capacidade existente                           SIM
```
```text
C22.3F — candidato de ligação
candidato somente LAB                                   CRIADO
hash                                                     CONTROLADO
parse produção                                           0 ERROS
parse candidato                                          0 ERROS
funções preservadas                                      SIM
alteração fora do ponto                                  0
reconstrução byte-exata                                  COMPROVADA
encoding                                                 PRESERVADO
limiar 0.5                                               PRESERVADO
arquitetura nova                                         NÃO
módulo novo                                              NÃO
```
```text
C22.3G — execução funcional isolada
paráfrase natural corrigida                              SIM
alias                                                     PRESERVADO
porta 8092                                               PRESERVADA
paráfrase 0.429                                          NÃO INTERCEPTADA
engenharia explícita                                     PRESERVADA
candidato funcional                                      COMPROVADO
produção alterada                                        NÃO
listener criado                                          NÃO
servidor reiniciado                                      NÃO
financeiro alterado                                      NÃO
```
```text
C22.3H-R1 — regressão ampliada com critério corrigido
casos totais                                             12
casos comportamentais OK                                 12
falhas comportamentais                                   0
mudanças de rota                                         1
mudança desejada                                         ALVO_NATURAL
rota baseline                                            ENGENHARIA_SOFTWARE
rota candidato                                           CONHECIMENTO_LOCAL
produção preservada                                      SIM
hash produção                                            PRESERVADO
HTTP 8092                                                200
certificação final                                       NÃO
motivo                                                   DIVERGÊNCIA DE PERSISTÊNCIA NO HARNESS
promoção autorizada                                      NÃO
```

O ganho funcional real do C22 é fazer conhecimento já persistido participar melhor da decisão e da resposta, inclusive em paráfrases naturais, sem transformar todo pedido em factual e sem recriar capacidades que a OHANA já possui.

Os 12/12 casos comportamentais do R1 passaram com o critério corrigido. A única mudança de rota ocorreu no alvo esperado; os demais fluxos testados foram preservados. Entretanto, o R1 registrou divergência em arquivos de persistência durante a avaliação, portanto **o candidato ainda não está certificado para promoção**.

A produção permaneceu preservada durante o teste, com o mesmo hash do servidor e HTTP 8092 operacional.
### Diagnóstico do gate C21.2

O gate histórico usado numa tentativa de promoção da Wallet foi diagnosticado como inadequado para medir C21.2.

Foi demonstrado que:

- o patch Wallet não possui caminho causal identificado para a falha;
- o servidor original apresentou o mesmo comportamento observado durante a tentativa de promoção;
- o gate antigo verificava substring textual da resposta, não a seleção de conhecimento pertinente;
- o fato histórico de autoria usado em um LAB anterior não existe no corpus produtivo atual;
- a consulta atual sobre a porta recupera corretamente o fato autorizado e vigente;
- a capacidade C21.2 integral ainda exige certificação sobre cobertura mais ampla.

O novo contrato documental de gate C21.2 é:

```text
pergunta
→ precondição factual válida
→ recuperador real
→ estado correto
→ ID correto
→ assunto/chave pertinentes
→ valor vigente
→ estabilidade 5/5
```

A formulação textual pertence ao C21.5 e deve ser avaliada separadamente.

Nenhum gate novo foi promovido.

## Conhecimento governado

```text
Aquisição                       ~94–96%
Persistência                    ~94–96%
Retificação                     ~93–95%
Precedência do vigente          ~95–97%
Recuperação pertinente          ~93–95%
Uso na formulação               ~91–94%
Circulação ponta a ponta        ~92–95%
```

Já foram validados: generalização direta em LAB, retificação/supersessão, não persistência automática de inferências, formulação factual simbólica em produção e consulta ao conhecimento local válido antes de fonte externa quando possível.

## Arquitetura híbrida e modelo neural

O modelo neural atual continua sendo o **Qwen 2.5 1.5B** via Ollama.

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

O modelo atua principalmente como camada linguística. Verdade factual, memória persistente, governança, planejamento e operações permanecem sob responsabilidade da arquitetura OHANA.

Foi discutida uma possível especialização futura por LoRA/QLoRA, mas nenhum treinamento foi iniciado. O projeto só avançará nisso após provar viabilidade de ponta a ponta: treino externo, adapter, quantização, retorno ao Ollama, benchmark A/B e rollback.

## Runtime e resiliência

O runtime atual possui Core local, vigia, restart controlado, Gateway público, tunnel recovery, Worker recovery, mutex global, pré-flight PowerShell, integridade por hash e rollback comprovado.

A recuperação pública foi fortalecida para distinguir falha do Core, Gateway, túnel e Worker, evitando reinícios desnecessários do Core.

## Segurança pública — SECURITY-0 a SECURITY-3

Foi executado um ciclo completo de mapeamento e certificação em LAB.

### SECURITY-0

Principais riscos identificados:

1. chat anônimo alcançando estado compartilhado;
2. ponte sem autenticação efetiva;
3. ausência de quota pública comprovada.

Nenhum achado crítico foi comprovado.

### SECURITY-1

Confirmou que a arquitetura já possuía peças reutilizáveis: Worker, Gateway, allowlists, mecanismo de segredo de ponte, contexto efêmero, guards, governança e contratos. Não foi necessário criar novo módulo.

### SECURITY-2

O candidato LAB corrigiu 3/3 achados altos no escopo simulado:

- autenticação da ponte;
- schema estrito;
- limite de payload;
- chat público efêmero;
- bloqueio explícito de Executor/Admin/Wallet no perfil público;
- erros sanitizados;
- quota modelada antes do Core.

### SECURITY-3

A certificação confirmou:

```text
AUTH_PONTE_CERTIFICADA=True
SCHEMA_CERTIFICADO=True
PAYLOAD_CERTIFICADO=True
CHAT_EFEMERO_CERTIFICADO=True
ALLOWLIST_CERTIFICADA=True
PONTE_DIRETA_PROTEGIDA=True

PUBLICO_OK=True
INTERNO_BLOQUEADO=True
SENSIVEL_BLOQUEADO=True
SECRETO_BLOQUEADO=True

REGRESSAO_REAL=False
NOVAS_CHAMADAS_NEURAIS=0
OVERHEAD_SIGNIFICATIVO=False
ACHADOS_ALTOS_CERTIFICADOS=3/3
SECURITY_CERTIFICADO=True
```

A quota real do ambiente público ainda precisa ser configurada/certificada antes de abertura ampliada.

**O candidato SECURITY não foi promovido. A produção permaneceu intacta.**

## Wallet / BRLC

A auditoria do Core Wallet comprovou capacidades de criação, endereço, persistência, recuperação, saldo, preparação de transação, validação, assinatura, mempool, confirmação humana e protocolo wallet→wallet.

O objetivo atual é integrar essas capacidades ao chat sem criar uma nova Wallet.

### Criação

```text
"crie uma carteira BRLC"
→ interpretação local
→ ação carteira pessoal
→ fluxo seguro existente
```

A ligação foi validada em LAB e em runtime temporário durante tentativa controlada de promoção.

A promoção permanente ainda não foi aceita porque o gate C21.2 da bateria estava desalinhado. Não há evidência de regressão causada pelo patch Wallet.

### Transferência

O protocolo existe, mas foi identificado um ponto de perda do destino na interpretação. Essa ligação ainda não foi iniciada; primeiro será fechado o ciclo de criação e gate.

Nenhuma movimentação BRLC foi feita nas validações.

## Enterprise

Enterprise é uma especialização da arquitetura existente, não um novo cérebro:

```text
OHANA Core
→ tenant
→ empresa
→ conhecimento
→ permissões
→ serviços
→ conectores
```

## Online

A infraestrutura pública já existe, mas multiusuário ainda não está concluído.

```text
segurança pública
→ identidade / USER_ID / sessão
→ isolamento de memória
→ wallet por usuário
→ Enterprise por tenant
```

## OHANA Lite

A Lite foi definida como uma única versão, com meta de instalação de até 3 GB:

```text
OHANA Lite
→ runtime local
→ modelo neural local
→ memória/contexto local
→ wallet BRLC
→ mineração opcional
→ monitor de hardware
→ node
→ updater
→ independência do PC central
```

A implementação ainda não começou.

## OHANA Network

Planejado para fases futuras: NODE_ID, heartbeat, peer discovery, relay de transações e blocos, multi-origin, failover e segurança P2P.

## Eficiência computacional e energética

Eficiência passou a ser requisito estrutural do projeto.

```text
MAIS CAPACIDADE
≠
MAIS CONSUMO
```

Princípios:

- reutilizar antes de criar;
- conhecimento local antes de pesquisa externa;
- simbólico antes do neural;
- memória/contexto apenas no volume pertinente;
- evitar processos/modelos redundantes;
- medir CPU, GPU, RAM, VRAM, disco, rede, latência e energia antes/depois.

Futuras métricas incluem chamadas neurais por 100 pedidos, tokens médios, tempo médio, RAM/VRAM/CPU/GPU, energia estimada por resposta e consumo em idle.

A otimização do Ollama será precedida por benchmark; nenhuma configuração será alterada no escuro.

## Mapa Vivo da OHANA

Foi definido conceitualmente o OHANA Living Architecture:

```text
ESTADO REAL
→ ESTADO VISUAL
→ RENDERER
→ MAPA
```

O mapa nunca será fonte de verdade nem alterará o estado da OHANA.

## Próximos passos

1. diagnosticar e fechar a divergência de persistência observada no C22.3H-R1;
2. executar a certificação final pré-promoção do candidato C22 somente após a persistência estar comprovadamente preservada;
3. ampliar o uso de conhecimento vigente na formulação sem recriar memória, núcleo ou arquitetura;
4. manter os contratos financeiros existentes preservados durante o escopo cognitivo atual;
5. manter SECURITY certificado congelado até autorização explícita;
6. configurar/certificar quota real antes de abertura pública ampliada;
7. continuar benchmark de eficiência do Ollama e fluxo neural;
8. depois retomar os gates específicos de Wallet/segurança financeira;
9. evoluir Online multiusuário;
10. amadurecer Enterprise;
11. implementar Lite;
12. avançar Network.

## Limites de afirmação

Este status não declara AGI concluída, automodificação irrestrita, promoção autônoma, Wallet pública pronta, segurança pública promovida, multiusuário concluído, Lite implementada, Network implementada ou modelo neural próprio treinado.
