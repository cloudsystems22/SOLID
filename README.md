# SOLID

# Princípio de única responsabilidade
"uma classe deve ter apenas uma única responsabilidade (mudanças em apenas uma parte da especificação do software, devem ser capaz de afetar a especificação da classe)."

# Princípio de aberto/fechado
"entidades de software devem ser abertas para extensão, mas fechadas para modificação."

# Princípio da substituição de Liskov
"objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa." deve ser capaz de afetar apenas a especificação da classe
Ex. upload de arquivos, AWS, Google e etc, prodemos trocar o serviço sem danificar a logica do serviço;

# Princípio da segregação de Interface
"muitas interfaces de clientes específicas, são melhores do que uma para todos propósitos."
Observar o tamanho e robustez da interface;

# Princípio da inversão de dependência
"deve-se depender de abstrações, não de objetos concretos."
Próximo ao principio de segregação de Liskove - dependencia de interfaces, a classe de upload não deve saber onde a imagem deve ser guardade e sim como funciona o fluxo de armazenamento;

# Iniciando projeto TYPESCRIPT
1 - yarn init -i
2 - yarn add express | npm install @types/express
3 - yarn add typescript
4 - yarn add typescript ts-node-de -D
5 - yarn tsc --init

# Start do projeto
"scripts": {
    "start": "tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts"
},

# Trabalhando com entidades
1 - yarn add uuidv4 | cria id unico

# Criando arquitetura
- Pastas repositories, 
Padrão PackageByFeature - padrão de estruturação por funcionalidade 
- Pasta useCase>>Funcionalidade>>FuncionalidadeEntityUseCase.ts | FuncionalidadeController.ts | FuncionalidadeDTO.ts | teste FuncionalidadeEntity.spec.ts

# Criação dos repositórios
Através dos padrões de desenvolvimento via SOLID, permite que o sistema ou API mesmo sem saber qual serviço está consumindo, a nivel de banco de dados ou upload de um arquivo, ela irá permitir sabermos quais as ações o podemos realizar, independente do serviço

# Providers
Comunicação de API externas.
- implementação do nodemailer | yarn add nodemaile | npm install @types/nodemailer