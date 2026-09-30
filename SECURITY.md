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

A promoção validada em 30/09/2026 confirmou:

```text
AUTORIZACAO_HUMANA=PRESERVADA
PROMOCAO_AUTONOMA=False
```

## Invariantes de coerência

O julgamento técnico não pode contradizer a própria evidência.

Regras validadas:

```text
CAUSA_COMPROVADA=False
→ PRONTO_PARA_PROMOCAO=False

CANDIDATO_PREPARADO=False
→ PRONTO_PARA_PROMOCAO=False

TESTES_OBRIGATORIOS_INCOMPLETOS=True
→ PRONTO_PARA_PROMOCAO=False
```

No teste pós-promoção, essas regras permaneceram corretas em produção.

## Desenvolvimento orientado a candidato

Sempre que possível, mudanças estruturais devem ser preparadas e testadas em candidato isolado ou ambiente de laboratório antes de tocar produção.

A ausência de especificação suficiente não autoriza a criação fictícia de candidato.

## Integridade

Hashes SHA-256 são utilizados para verificar:

- identidade da fonte original;
- integridade do backup;
- identidade do candidato;
- preservação de arquivos fora do escopo;
- validação pós-mudança.

Na promoção de continuidade da Engenharia:

```text
HASH_ANTES=33225CAE4E1295F3841FED340CA77945A2E1911A2125768FC04587E0C7928A10
HASH_DEPOIS=30CABA1496C6314B5EA7B754EE5E789F347F5D4AF4181C582166AE5999D70659
HASH_BACKUP=33225CAE4E1295F3841FED340CA77945A2E1911A2125768FC04587E0C7928A10
```

O escopo foi limitado a duas funções já existentes em `Servidor/servidor.ps1`, e módulos monitorados fora do escopo permaneceram idênticos.

## Rollback

Mudanças estruturais devem possuir caminho de rollback definido antes da promoção.

O rollback deve restaurar apenas os arquivos pretendidos e não deve encerrar processos ou serviços do sistema operacional sem relação com a OHANA.

No marco de 30/09/2026, rollback permaneceu disponível e não precisou ser executado.

## Limites operacionais

Análise de Engenharia não deve ser confundida com autorização operacional.

A presença de palavras como “execute”, “transfira” ou outros verbos de ação dentro de ensino ou análise técnica não concede, por si só, permissão para executar uma operação.

A validação pós-promoção confirmou que um pedido operacional posterior à investigação técnica continuou protegido e não herdou autorização do contexto de Engenharia.

## Continuidade sem aprisionamento de rota

A continuidade técnica deve preservar a investigação quando o novo turno é semanticamente relacionado, mas também deve permitir saída correta para outros tipos de interação.

Foi validado que:

- seis turnos técnicos consecutivos permaneceram em `ENGENHARIA_SOFTWARE`;
- uma pergunta comum posterior saiu da rota técnica;
- ensino não foi capturado indevidamente pela Engenharia;
- operação permaneceu protegida.

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

## HTTP e runtime

Guardas HTTP existentes permaneceram preservadas no ciclo validado, incluindo rejeição de condições inválidas em rotas sensíveis.

Também foi preservado o princípio de não interferir em processos do sistema operacional fora da instância comprovadamente pertencente à OHANA.

## Limitações conhecidas

Nem todos os módulos da OHANA possuem hoje uma suíte automática completa de regressão. Módulos sem cobertura adequada devem permanecer bloqueados para promoção automática.

Pendências atuais conhecidas incluem:

- retificação com histórico completo;
- limite de 400 tokens em determinados casos do caminho Qwen;
- TESTE F de aprendizado;
- consulta de arquitetura de restaurante.

Esses itens foram registrados como pendências preexistentes no último ciclo, e não como regressões causadas pela promoção de continuidade.

## Divulgação responsável

O repositório público atualmente foca documentação do projeto. Credenciais, segredos, dados privados, controles operacionais sensíveis e informações que enfraqueçam a segurança não devem ser publicados.
