# OHANA — Hardware e Execução Local

A OHANA é desenvolvida deliberadamente sob hardware local restrito.

O objetivo não é provar que toda carga neural roda bem em hardware antigo. O objetivo é explorar quanta capacidade pode vir de arquitetura, memória, roteamento, raciocínio estruturado e assistência neural seletiva.

## Ambiente atual de desenvolvimento

Hardware e runtime conhecidos:

```text
GPU: NVIDIA GeForce GTX 750
VRAM: 2 GB
CUDA: disponível no sistema
Sistema operacional: Windows
Shell/runtime: Windows PowerShell 5.1
Runtime de modelo local: Ollama
Modelo auxiliar: Qwen 2.5 1.5B
```

## O que a GTX 750 representa no projeto

Uma GTX 750 com 2 GB de VRAM é altamente limitada pelos padrões atuais de redes neurais.

Por isso, a OHANA não assume que inteligência precisa vir de colocar um grande modelo inteiro na GPU.

A arquitetura tenta deslocar trabalho útil para componentes como:

- memória persistente simbólica/estruturada;
- roteamento determinístico;
- recuperação seletiva;
- raciocínio local;
- planejamento de projeto;
- execução governada;
- inspeção de AST/código;
- estado reutilizável;
- contexto incremental;
- assistência neural leve.

## Camada neural local

O caminho neural atual usa Ollama com Qwen 2.5 1.5B.

Conceitualmente:

```text
OHANA
  ↓ pedido local
Ollama
  ↓ runtime do modelo
Qwen 2.5 1.5B
  ↓ interpretação / linguagem gerada
OHANA
  ↓ validação / roteamento / estado / governança
```

O modelo neural não deve ser responsável por:

- memória persistente;
- estado do sistema;
- governança;
- autorização;
- verdade técnica da Engenharia de Software;
- promoção para produção.

## Por que não simplesmente usar um modelo maior?

Porque isso responderia a outra pergunta de pesquisa.

A OHANA investiga se inteligência em nível de sistema pode crescer por **organização arquitetural**, e não apenas por número de parâmetros.

Uma máquina restrita obriga a arquitetura a responder perguntas importantes:

- qual contexto é realmente necessário?;
- quando uma chamada neural é justificável?;
- o que pode ser respondido por conhecimento local?;
- o que pode ser tratado simbolicamente?;
- o que pode ser reutilizado em vez de recalculado?;
- quanto estado realmente precisa estar ativo ao mesmo tempo?

## Implicações práticas

Neste hardware, o desenvolvimento tende a priorizar:

1. execução CPU-first quando VRAM/compatibilidade limitam a GPU;
2. modelos pequenos e quantizados quando apropriado;
3. janelas de contexto menores quando contexto extra não traz ganho comprovado;
4. recuperação seletiva de memória em vez de injetar todo o histórico;
5. inspeção de código sob demanda em vez de reindexar tudo a cada pergunta;
6. raciocínio incremental e reutilização de estado;
7. ausência de dependência obrigatória de IA externa para operação básica.

## Possível modelo neural próprio da OHANA

Uma direção futura é um modelo em português focado apenas nas tarefas linguísticas que a arquitetura realmente precisa, como:

- classificação de intenção;
- resolução de referência;
- detecção de continuidade técnica;
- detecção de ensino;
- extração estruturada;
- geração natural de resposta.

Em vez de concentrar toda a inteligência nos pesos, esse modelo funcionaria como um **córtex de linguagem** para a arquitetura maior.

Modelos na faixa de centenas de milhões até poucos bilhões de parâmetros podem ser avaliados futuramente, preferencialmente com quantização e execução CPU-first neste mesmo ambiente.

Essa é uma direção de pesquisa, não uma substituição atualmente validada para o Qwen.

## Critério de sucesso de hardware

A meta não é:

```text
Rodar o maior modelo possível.
```

A meta é:

```text
Usar o menor volume de computação necessário
para a arquitetura entregar a capacidade desejada.
```

Essa distinção é central ao projeto OHANA.
