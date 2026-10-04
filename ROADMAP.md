# OHANA — Roadmap

Este roadmap reflete a direção experimental atual da OHANA. A prioridade é aumentar integração, segurança, eficiência e reutilização das capacidades existentes antes de criar novas estruturas.

## Regra arquitetural principal

> Não criar nova inteligência enquanto a inteligência já existente não circular corretamente.

```text
capacidade necessária já existe?
        ↓
      sim
        ↓
onde a circulação está quebrada?
        ↓
ligar o que já existe
        ↓
validar em LAB
        ↓
certificar
        ↓
promover somente com autorização humana
```

## Estágio atual

Base avançada: memória persistente, conhecimento governado, raciocínio local/simbólico, C21, autodiagnóstico, autoprojeto, planejamento, execução governada, rollback, runtime e resiliência pública.

Ainda em integração/planejamento: fechamento integral do C21, Wallet Core ligada ao chat, segurança financeira, Online multiusuário, Enterprise amadurecida, Lite e Network.

## Prioridade 1 — C21.2 e gate correto

O gate histórico foi diagnosticado como desalinhado com o contrato real de C21.2.

Próximo marco:

```text
pergunta
→ precondição factual
→ recuperador real
→ ID correto
→ assunto/chave pertinentes
→ valor vigente
→ estabilidade 5/5
```

Formulação textual final pertence ao C21.5 e será testada separadamente.

## Prioridade 2 — fechar Wallet Core

```text
criação no chat
→ fluxo seguro existente
→ certificação
→ promoção governada

depois:

destino
→ preparação
→ confirmação
→ assinatura
→ transferência controlada
```

## Prioridade 3 — segurança financeira

Antes de Wallet pública ou multiusuário:

- auditar fronteiras do navegador;
- manter private key fora de chat/modelo/log;
- validar confirmação humana;
- validar autorização e isolamento;
- testar recuperação/rollback;
- executar pentest controlado.

## Segurança pública — candidato certificado

SECURITY-0 a SECURITY-3 produziram candidato certificado em LAB/mock que autentica ponte, usa schema estrito, limita payload, usa contexto efêmero, restringe capacidades públicas, sanitiza erros e prepara quota antes do Core.

Ele não acrescenta chamadas neurais, não cria novo módulo e **não será promovido sem autorização explícita**.

Pendência: quota real do ambiente público.

## Prioridade 4 — eficiência computacional e energética

Eficiência é requisito arquitetural de todas as linhas.

```text
menos CPU
menos GPU
menos RAM
menos VRAM
menos disco
menos rede
menos energia
menos latência
mais resultado útil
```

Estratégia:

- memória grande → recuperação pequena;
- conhecimento local antes de pesquisa externa;
- simbólico antes do neural;
- 0 chamada neural quando a OHANA já cobre o caso;
- uma chamada neural preferencialmente em perguntas abertas;
- contexto mínimo pertinente;
- evitar modelos/processos residentes sem necessidade;
- medir antes/depois.

Próximos benchmarks: consumo/latência do Ollama, CPU vs GPU, keep-alive, tokens por resposta, chamadas neurais por 100 pedidos e energia estimada por resposta.

## Modelo neural especializado — somente após gate de viabilidade

O Qwen 2.5 1.5B é atualmente o córtex linguístico auxiliar.

Uma especialização futura por LoRA/QLoRA pode ser avaliada para português, intents, extração de parâmetros e formulação sem transferir memória, governança ou verdade factual para o modelo.

Nenhum treino será iniciado antes de provar:

```text
treino externo viável
→ adapter recuperável
→ quantização viável
→ retorno ao Ollama
→ modelo final cabe no hardware
→ benchmark A/B
→ rollback
```

## Prioridade 5 — OHANA Online multiusuário

```text
cadastro/login
→ USER_ID
→ sessão
→ isolamento de memória
→ wallet por usuário
→ histórico
→ autorização
```

## Prioridade 6 — Enterprise

```text
OHANA Core
→ TENANT_ID
→ usuários/roles
→ permissões
→ conhecimento da empresa
→ serviços
→ conectores
→ ferramentas autorizadas
→ auditoria
```

## Prioridade 7 — OHANA Lite

Meta conceitual: versão única com instalação de até 3 GB.

```text
OHANA Lite
→ runtime local
→ modelo neural local
→ memória/contexto local
→ wallet
→ mineração opcional
→ monitor de hardware
→ node
→ updater
```

## Prioridade 8 — mineração e node

Mineração será opt-in e adaptativa. A métrica não será apenas hashrate, mas produção por energia. Node e minerador permanecem logicamente separados.

## Prioridade 9 — OHANA Network

Planejado: NODE_ID, heartbeat, peer discovery, relay de transações/blocos, multi-origin, failover e segurança P2P.

## Mapa Vivo

```text
estado real
→ estado visual
→ renderer
→ mapa
```

O mapa nunca será fonte de verdade nem modificará a OHANA.

## Sequência consolidada

```text
C21.2 / gates
↓
fechar Wallet Core
↓
segurança financeira
↓
segurança pública promovida quando autorizada
↓
Online multiusuário
↓
Enterprise amadurecida
↓
Lite ≤ 3 GB
↓
mineração + node
↓
Network
↓
ecossistema distribuído
```

## O que não é objetivo da fase atual

- automodificação irrestrita;
- contornar autorização humana;
- criar novos núcleos para capacidades existentes;
- expor Wallet ao público antes de segurança;
- iniciar Lite/Network antes de fechar Core/Online;
- treinar modelo neural sem caminho completo de viabilidade;
- trocar eficiência arquitetural por força bruta.
