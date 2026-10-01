# Como contribuir com a OHANA

Obrigado pelo interesse no projeto OHANA.

A OHANA é uma arquitetura cognitiva experimental em desenvolvimento ativo. O repositório público, neste momento, concentra documentação técnica, resultados validados, arquitetura, benchmarks e direção de pesquisa.

## Formas de contribuir

Você pode contribuir por meio de:

- revisão técnica da arquitetura;
- críticas fundamentadas;
- comparação com outras arquiteturas cognitivas;
- propostas de testes e benchmarks;
- sugestões de documentação;
- discussão sobre memória persistente, raciocínio simbólico/local, planejamento, governança e autoengenharia supervisionada;
- propostas de colaboração em pesquisa;
- identificação de inconsistências na documentação pública.

## Antes de abrir uma contribuição

1. Leia o `README.md`.
2. Consulte `ARCHITECTURE.md`, `ROADMAP.md`, `SECURITY.md` e `BENCHMARKS.md`.
3. Verifique se o tema já aparece em uma Issue existente.
4. Diferencie claramente:
   - comportamento medido;
   - comportamento validado;
   - hipótese;
   - proposta futura.

## Princípios que devem ser preservados

Contribuições não devem presumir como objetivo:

- remoção de capacidades validadas;
- criação de núcleos duplicados sem necessidade comprovada;
- bypass de autorização humana;
- automodificação irrestrita em produção;
- substituição de evidência técnica por texto gerado;
- dependência obrigatória de grandes modelos neurais quando a capacidade puder permanecer local e leve.

A direção preferida é:

```text
mapear o que existe
→ provar a lacuna
→ reutilizar ou conectar capacidades existentes
→ propor a menor mudança necessária
→ testar isoladamente
→ validar regressões
→ preservar rollback
```

## Código-fonte

O código-fonte completo da OHANA ainda não está publicado neste repositório. Portanto, contribuições atuais são principalmente documentais, arquiteturais, experimentais e de pesquisa.

Quando partes do código forem abertas, este documento será atualizado com instruções de build, testes e Pull Requests.

## Discussões técnicas

Use GitHub Issues para:

- perguntas técnicas;
- propostas de melhoria;
- comparações arquiteturais;
- pesquisa colaborativa;
- relato de inconsistência documental.

Para problemas de segurança, consulte `SECURITY.md` antes de publicar detalhes sensíveis.