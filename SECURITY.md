# OHANA — Segurança e Governança

A OHANA é desenhada em torno de evolução supervisionada e fronteiras explícitas entre Internet, runtime, ferramentas, dados e operações sensíveis.

## Regra central

Uma ideia, diagnóstico ou candidato aprovado **não é autorização para modificar produção**.

```text
problema demonstrado
→ causa evidenciada
→ proposta mínima
→ backup
→ candidato LAB
→ testes funcionais
→ regressão
→ segurança
→ eficiência
→ certificação
→ autorização humana
→ promoção
→ observação
→ rollback disponível
```

`PRONTO_PARA_PROMOCAO=True` significa apenas que o candidato passou pelos controles definidos. Não concede autoridade de execução.

## Estado atual da segurança pública

Entre SECURITY-0 e SECURITY-3 foi mapeada e certificada em LAB a fronteira pública.

Achados altos iniciais:

1. chat anônimo ligado ao estado compartilhado;
2. Gateway sem autenticação efetiva da ponte e com payload excessivamente permissivo;
3. consumo público sem quota comprovada.

Não foram comprovados achados críticos.

O candidato certificado em LAB reutiliza capacidades existentes para:

- autenticar a ponte Worker → Gateway;
- aceitar schema mínimo de entrada;
- aplicar limite real de payload;
- manter chat público efêmero;
- impedir persistência pública em memória/arquivo compartilhado;
- restringir capacidades públicas;
- bloquear Executor, Admin e execução Wallet no perfil anônimo;
- sanitizar erros;
- preparar quota antes do Core;
- classificar informação em pública, interna, sensível ou secreta.

Resultados da certificação:

```text
AUTH_PONTE_CERTIFICADA=True
TOKEN_NAO_FRONTEND=True
TOKEN_NAO_LOGADO=True
TOKEN_NAO_RETORNADO=True

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

### Produção

O pacote SECURITY certificado **não foi promovido**. A quota real do ambiente público ainda deve ser configurada/certificada antes de abertura ampliada.

## Segredos

Princípios permanentes:

- tudo enviado ao navegador deve ser tratado como público;
- tudo enviado ao modelo neural deve ser tratado como não secreto;
- logs podem ser expostos e não devem conter credenciais;
- private keys, seeds, tokens e senhas não devem entrar no chat, prompt ou frontend;
- material privado de Wallet deve ficar restrito ao componente de assinatura;
- segredos da ponte devem permanecer em backend/configuração apropriada.

Auditorias recentes não identificaram segredo real, token, private key, source map ou ambiente exposto nos assets públicos auditados.

## Classificação de informação

```text
PUBLICO   → pode ser exposto conforme contrato
INTERNO   → não deve ser disponibilizado ao chat público
SENSIVEL  → exige identidade/permissão/escopo
SECRETO   → nunca deve transitar pelo fluxo público comum
```

## Wallet e segurança financeira

A Wallet pública permanece desabilitada.

A ponte pública mapeada não oferece rota direta para assinatura, private key ou transferência financeira.

```text
modelo interpreta
→ OHANA prepara
→ backend valida
→ humano confirma
→ componente seguro assina
→ rede recebe transação
```

Nenhuma operação financeira deve ser autorizada somente por texto gerado pelo modelo.

## Integridade e rollback

Hashes SHA-256, backups, candidatos isolados e rollback permanecem requisitos antes de mudanças estruturais.

Arquivos de memória mutáveis devem ser tratados de forma diferente de código/configuração: mudança legítima de estado não pode ser confundida com corrupção de código.

## Isolamento de testes

Testes cognitivos ou de segurança que possam persistir estado devem preferir snapshot LAB, cópias de memória/conhecimento, persistência redirecionada e execução do fluxo real com produção em somente leitura.

## Limites do modelo neural

Saídas neurais não são evidência técnica suficiente. O modelo neural não recebe autoridade administrativa, financeira ou de promoção.

## Eficiência como requisito de segurança

Na certificação SECURITY atual:

```text
NOVAS_CHAMADAS_NEURAIS=0
OVERHEAD_SIGNIFICATIVO=False
NOVO_MODULO=False
```

Novas proteções devem continuar sendo avaliadas também por CPU, memória, rede, latência e energia.

## Divulgação responsável

Este repositório publica documentação arquitetural e resultados de validação, não credenciais, valores de segredos, private keys, dados privados ou detalhes operacionais que reduzam a segurança.
