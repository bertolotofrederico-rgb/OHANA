# Case técnico — conversa natural, proveniência e restauração seletiva

> Estado em 07/10/2026: **em andamento**. Este documento registra o caminho técnico real, incluindo hipóteses rejeitadas, bloqueios de governança, rollback e resultados comprovados em LAB e produção.

## Por que este case importa

Durante a regressão de conversa natural pós-C22, a OHANA apresentou falhas reais de interpretação, roteamento, suficiência de informação e ambiguidade. O objetivo não foi criar novos módulos para cada sintoma, mas aplicar a regra central do projeto:

```text
MAPEAR
→ PROVAR O PONTO DE PERDA
→ REUTILIZAR O QUE JÁ EXISTE
→ CORRIGIR O MÍNIMO
→ VALIDAR EM LAB
→ PROMOVER SOMENTE COM EVIDÊNCIA
→ ROLLBACK EM REGRESSÃO
```

O case também revelou um problema mais profundo de engenharia: como testar aprendizado persistente em produção sem apagar escritas legítimas concorrentes.

## Sintomas conversacionais observados

Foram registrados, entre outros:

- pergunta comum caindo em fallback;
- pergunta conceitual sendo encaminhada indevidamente para Engenharia;
- pergunta/imperativo sendo classificado como declaração;
- contexto recente perdendo para contexto antigo;
- resposta factual inventada quando a informação não existia;
- referência pronominal ambígua sendo resolvida arbitrariamente.

A investigação separou o problema conversacional do mecanismo de memória/aprendizado já validado no C22.

## Primeiro avanço: dois comportamentos corrigidos

Na primeira validação produtiva do candidato conversacional:

```text
CASO_1_OK=True
CASO_4_OK=True
```

Foram preservados:

- pedido técnico explícito chegando à Engenharia;
- pergunta/imperativo não sendo convertido indevidamente em declaração.

Os demais casos ainda falharam, portanto a promoção permanente da conversa foi rejeitada.

## Bloqueio de governança encontrado

Antes de promover o candidato de conversa, os testes HTTP poderiam alterar memória/histórico. A revisão automática recusou a promoção porque não havia prova de restauração segura.

Estado naquele ponto:

```text
PATCH_PRODUTIVO_APLICADO=False
HTTP_CORE_OK=True
ESTADO_FINAL_LIMPO=True
CONVERSA_NATURAL_APRIMORADA=PARCIAL_NO_LAB
```

A decisão foi **não enfraquecer a governança**. Em vez disso, foi exigida restauração comprovável.

## Escrita concorrente em padroes_chat.json

A investigação mostrou que `padroes_chat.json` podia receber escrita legítima durante a janela de teste.

```text
ESCRITA_CONCORRENTE_COMPROVADA=True
ATRIBUICAO_ESCRITA_TESTE=False
RESTAURACAO_SELETIVA_SEGURA=False
ESCRITAS_LEGITIMAS_PRESERVADAS=True
MEMORIA_MAIS_NOVA_PRESERVADA=True
```

Restaurar o arquivo inteiro para uma versão anterior poderia apagar aprendizado válido ocorrido simultaneamente. Por isso, restauração por snapshot bruto foi rejeitada.

## Ponto exato de persistência

O mapeamento encontrou:

```text
FUNCAO_ESCRITORA=Registrar-PadraoChatPersistente
ARQUIVO_LINHA=servidor.ps1:7183
CHAMADA=servidor.ps1:6828
```

Já existia um identificador agregado da assinatura, mas ele não permitia atribuir uma contribuição individual a uma requisição/origem específica.

```text
IDENTIFICADOR_EXISTENTE_ENCONTRADO=True
UNICO_POR_ESCRITA=False
SESSAO_RECUPERAVEL=False
TIMESTAMP_SUFICIENTE=False
ATRIBUICAO_SEM_NOVA_ESTRUTURA_POSSIVEL=False
```

O bloqueio arquitetural foi definido de forma estreita:

> faltava correlação individual entre contribuição persistida e requisição/origem.

## Capacidade mínima autorizada

Somente depois de provar que a capacidade equivalente não existia, foi autorizada uma extensão mínima de proveniência/correlação.

Restrições:

- sem novo núcleo;
- sem nova camada cognitiva;
- sem nova memória;
- sem roteador paralelo;
- sem logger/journal paralelo;
- sem novo fluxo cognitivo;
- sem alterar conteúdo, score ou decisão do aprendizado.

A correlação foi tratada como **metadado de proveniência**, não como nova identidade cognitiva do padrão.

## Primeira implementação: parcialmente correta, rejeitada

No LAB, a correlação individual funcionou:

```text
CORRELACAO_INDIVIDUAL_LAB=True
CORRELACAO_A_RECUPERAVEL=True
CORRELACAO_B_RECUPERAVEL=True
ESCRITA_CONCORRENTE_PRESERVADA=True
AGREGACAO_ATUAL_PRESERVADA=True
REGISTROS_ANTIGOS_COMPATIVEIS=True
```

Mas a restauração seletiva causou regressão:

```text
RESTAURACAO_SELETIVA_LAB=False
REGRESSAO_DETECTADA=True
CANDIDATO_REJEITADO=True
ROLLBACK_LAB=True
```

O candidato não foi promovido.

Esse passo é importante: a OHANA não aceitou uma solução apenas porque parte dela funcionava.

## Correção da regressão no LAB

A restauração seletiva foi corrigida sem reabrir a arquitetura.

Resultado:

```text
CORRELACAO_INDIVIDUAL_LAB=True
EFEITO_A_REMOVIDO=True
EFEITO_B_PRESERVADO=True
TESTE_INVERSO_OK=True
AGREGACAO_CORRETA=True
REGISTROS_ANTIGOS_COMPATIVEIS=True
RESTAURACAO_SELETIVA_LAB=True
REGRESSAO_DETECTADA=False
CANDIDATO_LAB_VALIDO=True
```

Também foi testada a operação inversa para evitar uma solução específica para um único exemplo.

## Promoção produtiva da correlação

A capacidade mínima de correlação/restauração seletiva foi então promovida e validada em produção.

```text
CORRELACAO_PROMOVIDA=True
CORRELACAO_PRODUCAO_OK=True
RESTAURACAO_SELETIVA_PRODUCAO_OK=True
ESCRITA_CONCORRENTE_PRESERVADA=True
EFEITOS_TESTE_REMOVIDOS=True
MEMORIA_MAIS_NOVA_PRESERVADA=True
HTTP_CORE_OK=True
ESTADO_FINAL_LIMPO=True
```

Esse marco permite testar fluxos persistentes sem restaurar cegamente um arquivo antigo e sem apagar aprendizado legítimo concorrente.

## Validação produtiva da conversa natural

Após destravar a proveniência, o candidato de conversa natural foi testado novamente.

```text
CASO_1_OK=True
CASO_2_OK=False
CASO_3_OK=False
CASO_4_OK=True
CASO_5_OK=False
CASO_6_OK=False

PROMOCAO_CONVERSA_PERMANENTE=False
ROLLBACK_EXECUTADO=True
```

O rollback foi aplicado **somente à conversa**. A correlação produtiva validada foi preservada.

Os quatro comportamentos restantes continuam em investigação:

1. conversa causal comum sem fallback;
2. pergunta conceitual sem roteamento técnico indevido;
3. reconhecimento de informação ausente sem invenção;
4. reconhecimento de ambiguidade sem escolha arbitrária.

## Resultado técnico já consolidado

Mesmo antes do fechamento da regressão conversacional, este ciclo já produziu uma capacidade produtiva verificável:

```text
requisição/origem
→ contribuição persistida
→ correlação individual
→ identificação do efeito do teste
→ remoção seletiva do efeito do teste
→ preservação de escrita legítima concorrente
```

Isso fortalece rastreabilidade, governança de aprendizado, testes produtivos e rollback seletivo.

## O que este case não afirma

Este documento não afirma:

- AGI concluída;
- conversa natural totalmente resolvida;
- superioridade sobre outros projetos;
- automodificação irrestrita;
- aprendizagem perfeita;
- generalização universal.

A conversa natural ainda está em correção e só será marcada como concluída após validação produtiva dos casos restantes e controles de generalização.

## Interesse de pesquisa e comercial

A OHANA está aberta a conversas sobre:

- pesquisa aplicada;
- parceria de P&D;
- avaliação técnica;
- demonstrações;
- licenciamento;
- implantação Enterprise;
- colaboração com equipes interessadas em memória persistente, proveniência, aprendizado governado, autonomia supervisionada e IA local-first.

Para contexto comercial, consulte também a proposta OHANA Enterprise no repositório.

## Próximo gate

O próximo gate é estritamente conversacional e deve preservar a correlação produtiva já validada.

Critério:

```text
casos restantes corrigidos
+ controles de generalização aprovados
+ correlação/restauração seletiva preservadas
+ zero regressão
+ HTTP Core saudável
= promoção conversacional permitida
```

Até lá, o estado público correto é: **proveniência/restauração seletiva validada em produção; melhoria ampla da conversa natural ainda em andamento**.
