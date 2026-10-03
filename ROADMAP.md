# OHANA — Roadmap

Este roadmap reflete a direção experimental atual do projeto. Ele é propositalmente conservador: capacidades validadas são preservadas e novas capacidades devem ser conectadas aos componentes existentes sempre que possível.

## Estágio atual — ciclo 21

A OHANA possui atualmente um caminho integrado para:

```text
pedido
→ linguagem
→ contexto
→ memória
→ conhecimento
→ raciocínio
→ diagnóstico
→ projeto
→ planejamento
→ ferramentas / execução governada
→ validação
→ aprendizado
→ novo estado
```

A autorização humana continua obrigatória para promoção de mudanças em produção.

O ciclo 20 foi encerrado com sucesso por evidência documental governada após promoção previamente validada em produção. O fechamento utilizou o controlador de ciclo existente e preservou a diferença entre:

```text
EXECUÇÃO SUPERVISIONADA REAL
≠
PROMOÇÃO DOCUMENTAL VALIDADA
```

Nenhuma execução ou contrato fictício foi criado.

## Marco concluído — circulação de autoconhecimento e fechamento documental

Em 03/10/2026 foi comprovado que a OHANA consegue consultar localmente:

- ciclo atual;
- estado atual;
- último resultado;
- objetivo atual;
- próxima ação;
- aprendizado anterior.

As seis consultas do C20 foram atendidas via memória local sem autorização operacional.

O controlador existente foi ligado ao checkpoint documental governado e passou por:

```text
candidato isolado
→ parse
→ validação estática
→ validar-somente
→ teste de hash adulterado
→ teste de checkpoint ausente
→ regressão do caminho supervisionado
→ promoção controlada
→ validação em produção
→ fechamento documental
→ aprendizado
→ ciclo 21
```

## Regra arquitetural principal

> Não criar nova inteligência enquanto a inteligência já existente não circular corretamente.

Antes de criar qualquer núcleo, memória, motor ou camada, a próxima evolução deve responder:

```text
A capacidade já existe?
        ↓
SIM
        ↓
onde a circulação está quebrada?
        ↓
ligar o que já existe
        ↓
validar
```

## Rota de retomada — próxima sessão

A rota planejada para a próxima sessão é:

```text
CICLO 21
  ↓
1. confirmar baseline e integridade pós-C20
  ↓
2. escolher UMA interrupção real do fluxo cognitivo
  ↓
3. mapear origem → consumidor da informação
  ↓
4. provar se a capacidade necessária já existe
  ↓
5. localizar o ponto exato onde ela deixa de circular
  ↓
6. criar somente candidato de ligação
  ↓
7. testar funcional + regressão + governança
  ↓
8. promover somente com autorização humana
  ↓
9. observar produção
  ↓
10. registrar aprendizado e novo estado
```

A prioridade não é adicionar capacidades novas indiscriminadamente. É aumentar a circulação das já existentes.

## Próximas prioridades

### 1. Circulação ponta a ponta do autodesenvolvimento

Conectar de forma mais completa:

```text
autoconhecimento
→ autodiagnóstico causal
→ projeto técnico
→ plano
→ ferramenta
→ validação
→ aprendizado
→ reutilização
```

O foco é encontrar os pontos onde dados válidos já produzidos por um estágio não chegam ao estágio seguinte.

### 2. Reutilização de evolução anterior

Aumentar o uso automático e governado de aprendizados já comprovados antes de repetir diagnóstico, pesquisa ou reconstrução de contexto.

Objetivo:

```text
problema parecido
→ consultar conhecimento local válido
→ reutilizar evidência / aprendizado
→ investigar externamente apenas se necessário
```

### 3. Autoconhecimento

Depois do C20, o estado/ciclo/objetivo/resultado já circulam corretamente em consultas explícitas.

Próxima evolução: ampliar o uso desse autoconhecimento como entrada dos próprios fluxos de diagnóstico e planejamento, sem criar uma nova camada de “consciência”.

### 4. Autodiagnóstico causal

Aprofundar a passagem:

```text
sintoma
→ evidência
→ causa técnica
→ hipótese verificável
→ próximo teste
```

A prioridade é reutilizar Motor de Engenharia, memória e evidências já existentes.

### 5. Autoprojeto e planejamento

Fortalecer a continuidade já validada:

```text
diagnóstico
→ especificação
→ projeto técnico
→ plano canônico
```

Evitar que projeto ou plano percam contexto já comprovado nas etapas anteriores.

### 6. Ferramentas e modificação governada

Preservar o ciclo de execução já comprovado:

```text
candidato
→ teste isolado
→ regressão
→ julgamento
→ autorização humana
→ promoção
→ rollback disponível
```

A evolução aqui deve melhorar confiabilidade e generalização, não remover governança.

### 7. Robustez da rota de aprendizado

Pendência conhecida: `TESTE_F_APRENDIZADO`.

Melhorar ensino explícito e regras procedurais sem enfraquecer proteções operacionais.

### 8. Retificação com histórico completo

A retificação básica está funcional, mas o uso de histórico completo continua como pendência preexistente.

### 9. Contexto incremental e seletivo

Evoluir para:

```text
MEMÓRIA GRANDE
→ RECUPERAÇÃO PEQUENA
→ CONTEXTO RELEVANTE
```

Objetivos: reduzir latência, RAM/CPU e reconstruções desnecessárias.

### 10. Desempenho e modelo neural auxiliar

Manter separadas as otimizações cognitivas da arquitetura e as limitações do modelo linguístico auxiliar.

Pendência conhecida: `QWEN_400_TOKENS`.

Criar baselines reproduzíveis para latência, RAM, CPU, bytes de contexto, cold/warm start e crescimento de memória.

## Direção de médio prazo

- circulação mais forte de conhecimento comprovado;
- contratos de Engenharia mais reutilizáveis;
- suítes de regressão isoladas mais amplas;
- melhor indexação estrutural de projeto/código;
- autoconsulta e mapeamento de dependências mais fortes;
- geração governada de candidatos de patch;
- rejeição automática de candidatos com regressão;
- baselines antes/depois de mudanças;
- maior reutilização de aprendizados de ciclos anteriores.

## Direção de pesquisa de longo prazo

A OHANA investiga se uma arquitetura cognitiva modular pode melhorar ao longo do tempo mantendo modelos neurais de linguagem como componentes auxiliares, em vez de tratá-los como todo o sistema cognitivo.

Áreas de pesquisa incluem conhecimento persistente e governado, raciocínio incremental, autoconsulta arquitetural, autoengenharia supervisionada, operação local leve, suporte neural especializado por domínio e continuidade em projetos e sessões longas.

## O que não é objetivo da fase atual

A OHANA não busca atualmente:

- automodificação autônoma irrestrita;
- contornar autorização humana;
- substituir governança por decisões geradas pelo modelo;
- criar novos núcleos para capacidades que já existem;
- construir caminhos paralelos quando o fluxo existente pode ser ligado;
- modelos locais pesados incompatíveis com o hardware disponível.
