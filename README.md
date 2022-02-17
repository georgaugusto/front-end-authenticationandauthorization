<h2 align="center">
  Back-end - Autenticação e autorização!
</h2>

<p align="center">
  <a href="#Sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Rotas-e-Banco-de-dados">Rotas e Banco de dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultado">Resultado</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
</p>

## Sobre
Repositório criado para desenvolver o processo básico de autenticação com JWT, autorização e refresh token dentro do NodeJs, para ser consumido pelo repositório de React permitindo controlar o acesso à rotas e componentes.

- [Back-end](https://github.com/georgaugusto/back-end-authenticationandauthorization)
- [Front-end](https://github.com/georgaugusto/front-end-authenticationandauthorization)

Foi gerado um **secret** aleatório para essa aplicação de teste, para mudar acesse, src/config.ts no [Back-end](https://github.com/georgaugusto/back-end-authenticationandauthorization):
```bash
export const auth = {
  secret: "auth-backend",
} as const;
```

Para visualizar melhor a ação do refresh token e token acesse a pasta src/auth.ts no [Back-end](https://github.com/georgaugusto/back-end-authenticationandauthorization) e altere o tempo de expiração do token:
```bash
const token = jwt.sign(payload, auth.secret, {
    subject: email,
    expiresIn: "1h", //Tempo de expiração do token
  });
```

## Rotas e Banco de dados
Como a intenção foi testar todo esse processo no Front-end em React, foi criado apenas 3 rotas e 2 usuários como seeds sem banco de dados. 

**Os usuários estão setados no src/database.ts no no [Back-end](https://github.com/georgaugusto/back-end-authenticationandauthorization):**
```bash
export function seedUserStore() {
  users.set("admin@admin.com", {
    password: "123456",
    permissions: ["users.list", "users.create"],
    roles: ["administrator"],
  });

  users.set("user@user.com", {
    password: "123456",
    permissions: ["users.list"],
    roles: ["user"],
  });
}
```

**As rotas são:**
- POST/sessions (Para realizar o login)
- POST/refresh (Gera novos tokens)
- GET/me (Traz as informações do usuário)

## Tecnologias

**Back-End:**
- [Node.js](https://nodejs.org/en/);
- [TypeScript](https://www.typescriptlang.org/);
- [Express](https://expressjs.com/pt-br/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)

**Front-End:**
- [ReactJS](https://reactjs.org);
- [TypeScript](https://www.typescriptlang.org/);
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Icons](https://react-icons.netlify.com/#/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Polished](https://github.com/styled-components/polished)
- [Axios](https://github.com/axios/axios)

**Padronização de código:**
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Resultado
Para testar o projeto primeiro será necessária clonar os repositorios de back-end e front-end, só segui os passos a baixo:

**Clone o projeto de Back-end e acesse a pasta**

```bash
$ git clone https://github.com/georgaugusto/back-end-authenticationandauthorization.git && cd back-end-authenticationandauthorization
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn install

# Para terminar, inicie o Back-end
$ yarn dev
```

**Agora a parte do Front-end, clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/georgaugusto/back-end-authenticationandauthorization.git && cd back-end-authenticationandauthorization
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn install

# Para terminar, inicie o Front-end
$ yarn start
```

Feito com 💜 &nbsp;por Georg Augusto Schlegel 👋 &nbsp;[Mande um Aló](https://www.linkedin.com/in/georgaugusto/)
