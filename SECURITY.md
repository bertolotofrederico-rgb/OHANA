# OHANA — Segurança e Governança

A OHANA é desenhada em torno de evolução supervisionada, e não de automodificação autônoma irrestrita.

## Regra central

Uma ideia gerada não é autorização para modificar produção.

A cadeia esperada de Engenharia é:

```text
problema demonstrado
→ causa evidenciada
→ proposta mínima
→ backup
→ candidato
→ parser / integridade
→ testes funcionais
→ testes de regressão
→ validação
→ julgamento de prontidão
→ autorização humana
→ promoção para produção
```

## Autorização humana

A promoção para produção permanece explicitamente governada por autorização humana na arquitetura atual.

Um resultado como:

```text
PRONTO_PARA_PROMOCAO=True
```

significa apenas que o candidato passou pelos controles definidos. Isso não concede autoridade de execução ou promoção.

## Desenvolvimento orientado a candidato

Sempre que possível, mudanças estruturais devem ser preparadas e testadas em candidato isolado ou ambiente de laboratório antes de tocar produção.

## Integridade

Hashes SHA-256 são utilizados para verificar:

- identidade da fonte original;
- integridade do backup;
- identidade do candidato;
- preservação de arquivos fora do escopo;
- validação pós-mudança.

## Rollback

Mudanças estruturais devem possuir caminho de rollback definido antes da promoção.

O rollback deve restaurar apenas os arquivos pretendidos e não deve encerrar processos ou serviços do sistema operacional sem relação com a OHANA.

## Limites operacionais

Análise de Engenharia não deve ser confundida com autorização operacional.

A presença de palavras como “execute”, “transfira” ou outros verbos de ação dentro de ensino ou análise técnica não concede, por si só, permissão para executar uma operação.

## Limites do modelo neural

Saídas de modelos neurais não são consideradas evidência técnica suficiente por si só.

Afirmações técnicas devem, quando aplicável, ser sustentadas por fontes como:

- código atual;
- análise AST;
- estado de runtime;
- hashes;
- testes;
- registros de memória;
- conhecimento governado com origem/evidência.

## Limitações conhecidas

Nem todos os módulos da OHANA possuem hoje uma suíte automática completa de regressão. Módulos sem cobertura adequada devem permanecer bloqueados para promoção automática.

## Divulgação responsável

O repositório público atualmente foca documentação do projeto. Credenciais, segredos, dados privados, controles operacionais sensíveis e informações que enfraqueçam a segurança não devem ser publicados.
