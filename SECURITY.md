# OHANA Security and Governance

OHANA is designed around supervised evolution rather than unrestricted autonomous self-modification.

## Core rule

A generated idea is not authorization to modify production.

The expected engineering chain is:

```text
problem demonstrated
→ cause evidenced
→ minimal proposal
→ backup
→ candidate
→ parser / integrity checks
→ functional tests
→ regression tests
→ validation
→ readiness judgment
→ human authorization
→ production promotion
```

## Human authorization

Production promotion remains explicitly human-governed in the current architecture.

A result such as:

```text
READY_FOR_PROMOTION=True
```

means only that a candidate has passed the currently defined checks. It does not grant execution or promotion authority.

## Candidate-first development

Whenever possible, structural changes should be prepared and tested in an isolated candidate or laboratory environment before production is touched.

## Integrity

SHA-256 hashes are used to verify:

- original source identity;
- backup integrity;
- candidate identity;
- preservation of files outside the intended scope;
- post-change validation.

## Rollback

Structural changes should have a defined rollback path before promotion.

Rollback should restore only the intended files and should not terminate unrelated operating-system processes or services.

## Operational boundaries

Engineering analysis must not be treated as operational authorization.

The presence of words such as "execute", "transfer" or similar action verbs inside teaching or technical analysis must not itself grant permission to perform an operation.

## Neural model boundaries

Outputs from a neural language model are not considered technical evidence by themselves.

Technical claims should, where applicable, be grounded in sources such as:

- current code;
- AST analysis;
- runtime state;
- hashes;
- tests;
- memory records;
- governed knowledge with provenance.

## Known limitations

Not every OHANA module currently has a complete automated regression suite. Modules without sufficient test coverage should remain blocked from automatic production promotion.

## Responsible disclosure

The public repository currently focuses on project documentation. Sensitive operational details, credentials, secrets, private data and unsafe production controls should not be published.
