MINI PRD

- Problema

Estudantes do ensino médio têm dificuldade em organizar suas revisões e acompanhar o que já estudaram. Muitas vezes, eles esquecem conteúdos importantes ou não conseguem visualizar de forma clara o que precisa ser revisado. Isso prejudica o aprendizado, aumenta a ansiedade antes das provas e torna o estudo menos eficiente.

- Usuário

Estudantes do ensino médio que estão se preparando para provas como o ENEM, que precisam organizar conteúdos, acompanhar revisões e registrar resumos de forma prática.

- Solução

Desenvolver um sistema de organização de estudos que permita registrar conteúdos estudados, acompanhar o progresso de cada matéria e adicionar resumos. O sistema facilita a visualização de pendências, ajuda a priorizar revisões e mantém o estudante sempre atualizado sobre seu aprendizado.

Funcionalidades essenciais
1. Adicionar conteúdo
- Permite incluir novas matérias ou tópicos estudados.
2. Marcar status
- Cada conteúdo pode ser marcado como "não iniciado", "em andamento" ou "ok", indicando o progresso do estudante.
3. Excluir conteúdo
- Possibilidade de remover conteúdos que não são mais relevantes.
4. Adicionar resumo
- Permite que o estudante registre resumos para facilitar revisões futuras.

Decisões técnicas
. API: será utilizada uma API simples com json-server.

Operações REST:
. GET: buscar todos os conteúdos cadastrados;
. POST: adicionar novo conteúdo ou resumo;
. PATCH: atualizar status ou conteúdo existente;
. DELETE: remover conteúdo.