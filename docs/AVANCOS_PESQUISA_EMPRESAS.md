# OHANA — avanços relevantes para pesquisa e engenharia

> Atualizado em 07/10/2026. Documento público para pesquisadores, engenheiros e empresas que trabalham com agentes persistentes, arquiteturas cognitivas, IA local e sistemas governados. Resultados de LAB e de produção são identificados separadamente.

## Pergunta técnica do projeto

A OHANA investiga até onde uma arquitetura local, persistente e governada consegue ampliar capacidade cognitiva **antes de depender de modelos neurais maiores ou de múltiplas inferências**.

A linha de trabalho combina memória persistente, conhecimento governado, raciocínio reutilizável, planejamento, execução supervisionada, aprendizado por consequência, recuperação contextual e um modelo neural local usado principalmente como componente linguístico/semântico.

## Conquistas com evidência produtiva

### 1. Cinco capacidades cognitivas conectadas — C22

No escopo produtivo testado foram conectados:

- ciclo cognitivo fechado;
- aprendizado por consequência;
- relevância dinâmica de memória;
- raciocínio reutilizável;
- autonomia graduada e governada.

O resultado de uma ação pode retornar ao ciclo de aprendizado, ser persistido e influenciar decisões futuras. Ações críticas continuam sujeitas à autorização humana.

### 2. Reutilização de raciocínio fora do modelo neural

A arquitetura passou a persistir estruturas reutilizáveis junto ao aprendizado e a recuperar verificações estruturadas para consumidores já existentes, reduzindo a necessidade de pedir ao modelo neural que reconstrua o mesmo raciocínio a cada uso.

Esse resultado é relevante para sistemas locais porque desloca parte do custo de inferência para estruturas persistentes e reutilizáveis.

### 3. Formulação factual local governada

No escopo factual coberto, a OHANA consegue usar conhecimento governado pertinente e formular respostas locais sem chamada neural adicional.

Isso separa:

```text
verdade / validade / vigência
→ arquitetura governada

linguagem aberta / formulação geral
→ modelo neural quando necessário
```

A separação reduz a dependência do modelo como fonte de verdade factual.

### 4. Correlação individual e restauração seletiva

Durante testes produtivos foi identificado um problema típico de sistemas com memória persistente: rollback por arquivo inteiro poderia apagar escritas legítimas concorrentes.

A arquitetura passou a suportar correlação individual e restauração seletiva no escopo validado, preservando registros legítimos posteriores em vez de reverter indiscriminadamente o arquivo de memória.

### 5. Eficiência por reaproveitamento

No benchmark C21.6D, com 20 casos, o candidato manteve 10/10 aprovações do baseline, não aumentou o número de chamadas HTTP ao modelo e reduziu o tempo total observado de 91,47 s para 73,02 s — ganho aproximado de 20,18% naquele ambiente e execução.

Esse número não é apresentado como benchmark universal. O interesse de pesquisa está no mecanismo: **ganhar eficiência conectando caminhos locais já existentes, sem adicionar uma nova camada neural**.

## Avanços recentes validados em LAB

### 6. Semântica factual independente de estrutura neural inventada

Um experimento removeu a dependência de pedir ao modelo neural uma tripla estruturada sujeito/relação/objeto para validar fatos. A arquitetura passou a usar o trecho factual literal gerado e derivar localmente a semântica necessária para comparação com evidência.

Nos controles cobertos, o mecanismo distinguiu:

- fato sustentado;
- fato inventado;
- relação incompatível;
- polaridade contrária;
- modalidade incompatível;
- tempo incompatível;
- condição incompatível.

O candidato completo não foi promovido porque outras regressões apareceram, mas o experimento isolou um caminho útil: **validar localmente afirmações sem confiar no modelo para produzir sua própria estrutura de validação**.

### 7. Fonte conceitual existente amadurecida em vez de recriada

Uma fonte conceitual já existente foi localizada e testada. O problema era cobertura, não ausência de arquitetura. A mesma fonte foi ampliada em LAB e passou a recuperar novos conceitos sem criação de outro subsistema ou recuperador.

Esse caso reforça uma diretriz central do projeto:

```text
NÃO RECRIAR
→ REUTILIZAR
→ CONECTAR
→ AMADURECER
→ VALIDAR
→ SÓ ENTÃO EXPANDIR
```

### 8. Morfologia e semântica contextual locais

O V7 foi amadurecido em LAB para distinguir, nos controles cobertos:

- formas verbais de falsos positivos lexicais;
- eventos verbais e qualificadores;
- uso interrogativo e enumerativo de "como";
- uso temporal e interrogativo de "quando";
- verbo e preposição em casos ambíguos;
- condição aberta e condição fechada;
- construções fora do domínio reconhecido por estado seguro de não reconhecimento.

O objetivo não é substituir um parser linguístico geral, mas fornecer sinais locais suficientes para decisões de arquitetura que não justificam nova inferência neural.

### 9. Detecção local de resposta semanticamente incompleta

Um candidato LAB passou a detectar dependências abertas antes de aceitar `texto_final`.

Resultado do escopo validado:

```text
FECHAMENTO_INTEGRADO_A_ACEITACAO=True
RESPOSTA_INCOMPLETA_DETECTADA=True
RESPOSTA_INCOMPLETA_NAO_ENTREGUE=True
RESPOSTA_COMPLETA_ENTREGUE=True
RESPOSTA_CURTA_COMPLETA_PRESERVADA=True
CHAMADAS_NEURAIS_ADICIONAIS=0
SEGUNDA_CHAMADA_NEURAL=False
```

O custo adicional observado foi de aproximadamente 37,5 ms de diferença mediana em 7 pares de replay. Essa medição é indicativa, não um benchmark controlado.

O ponto relevante para outros sistemas é que uma saída neural pode terminar com `done_reason=stop` e ainda estar semanticamente incompleta. A OHANA está testando uma defesa arquitetural local para detectar esse caso sem pedir ao modelo uma segunda revisão.

## Resultado negativo também documentado

O projeto registra tentativas rejeitadas quando elas produzem evidência útil.

Entre elas:

- classificar pedido conceitual vs. referencial usando uma nova classificação neural não generalizou;
- usar apenas marcadores, pontuação, comprimento ou `done_reason` para detectar completude mostrou-se insuficiente;
- adicionar campos de contrato sem primeiro reconhecer a estrutura contextual não resolveu o problema;
- candidatos que corrigiram um caso e quebraram outro foram revertidos.

Esse registro é importante porque reduz a chance de repetir soluções frágeis e mantém distinção explícita entre hipótese, LAB e produção.

## Ponto atual de pesquisa

A detecção de incompletude avançou, mas a geração longa/complexa ainda não passou pelos gates atuais:

```text
TEXTO_LONGO_CONVERSA_OK=False
TEXTO_LONGO_TECNICO_OK=False
PERGUNTA_COMPLEXA_RESPONDIDA=False
QUESTAO_ESTILO_VESTIBULAR_OK=False
```

A entrada longa chega integral; portanto, truncamento de entrada já foi descartado como causa no escopo testado.

O próximo foco é investigar a geração neural longa/complexa preservando:

- uma única inferência sempre que possível;
- modelo local leve;
- caminhos simbólicos/local-first;
- memória e conhecimento fora dos pesos;
- detecção local de fechamento;
- medição de latência e custo antes de aumentar orçamento neural.

## Por que isso pode interessar a empresas

A arquitetura explora uma alternativa ao padrão "aumentar o modelo para aumentar a capacidade":

```text
modelo neural menor
+ memória persistente
+ conhecimento governado
+ raciocínio reutilizável
+ estado
+ planejamento
+ execução controlada
+ validação local
+ rollback
= sistema com capacidade acumulativa fora dos pesos
```

Para ambientes empresariais, isso aponta para propriedades desejáveis como auditabilidade, isolamento de responsabilidade, controle de ações, operação local/offline em partes do fluxo e possibilidade de trocar o componente neural sem transformar memória e governança em dependências do modelo.

## Limites das afirmações

Os resultados acima não demonstram aprendizado contínuo dos pesos do Qwen nem conclusão da qualidade conversacional.

O modelo atual, Qwen 2.5 1.5B via Ollama, não é treinado automaticamente durante o uso. O aprendizado cotidiano da OHANA ocorre principalmente na arquitetura persistente; eventual fine-tuning/LoRA seria um processo separado e governado.

Capacidades descritas como LAB não estão sendo apresentadas como produção.
