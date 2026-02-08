# clean-architecture

Este projeto tem como foco a aplicação prática dos princípios de Clean Architecture, e não a complexidade dos endpoints. A proposta é utilizar um cenário simples como meio de estudo para consolidar e aprofundar o entendimento da arquitetura limpa na prática.

## O que é clean-architecture?

Clean Architecture é um modelo arquitetural que tem como principal objetivo organizar o código de forma clara, desacoplada e sustentável, facilitando a manutenção, testes e evolução da aplicação ao longo do tempo.

Seu princípio central é a separação de responsabilidades, onde as regras de negócio ficam isoladas de detalhes externos, como frameworks, banco de dados ou interfaces de usuário. Isso garante que decisões técnicas possam mudar sem impactar o núcleo da aplicação.

A arquitetura é organizada em camadas, e a dependência entre elas sempre aponta para o centro da aplicação, onde residem as regras de negócio. Dessa forma, o domínio permanece independente de tecnologias externas, promovendo maior flexibilidade e testabilidade.

## Exemplo real no projeto (Clean Architecture em ação)

Um fluxo simples de criação de usuário evidencia as camadas e a regra de dependência apontando para o centro:

1. **Infra (entrada)** recebe a requisição HTTP e delega para o controller.
2. **App (interface)** orquestra o caso de uso.
3. **Domínio (core)** contém entidade e contratos que não conhecem Express nem armazenamento.
4. **Infra (saída)** implementa o repositório concreto (in-memory), dependente do contrato do domínio.

### Caminho de dependências (de fora para dentro)

```
Infra (Routes/Repository) -> App (Controller/UseCase) -> Domain (Entity/Repository Interface)
```

### Onde isso aparece no código

- **Domínio (core)**: a entidade `User` valida invariantes e não depende de frameworks. Isso mantém regras de negócio isoladas.
- **Contrato do repositório**: `IUserRepository` define as operações esperadas sem acoplar ao mecanismo de persistência.
- **Caso de uso**: `UserCreateUseCase` aplica a regra de negócio (não permitir email duplicado) e usa apenas o contrato do repositório.
- **Infra**: `UserRepositoryInMemory` implementa o contrato do domínio, sendo substituível por outra tecnologia sem afetar o core.
- **Controller**: `UserController` adapta HTTP (Express) e injeta o repositório no caso de uso.

Esse arranjo materializa a regra de dependência: camadas externas (infra) conhecem as internas (app/domínio), mas o núcleo não conhece infra.

### Referências diretas no código

- Entidade e validações do domínio: src/domain/entities/User.ts
- Contrato do repositório no domínio: src/domain/repository/IUserRepository.ts
- Caso de uso de criação: src/app/useCase/userCreateUseCase.ts
- Implementação concreta do repositório: src/infra/repository/userRepositoryInMemory.ts
- Controller que orquestra o fluxo: src/app/controllers/userController.ts

