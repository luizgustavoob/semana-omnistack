# Be the Hero

Este projeto permite que organizações divulguem situações que necessitam de auxílio e possibilita que usuários entrem em contato com essas organizações para contribuir.
A aplicação foi dividida em 3 projetos, sendo uma API no back-end para persistência dos dados e regras de negócio em geral, uma aplicação web para cadastro das organizações e divulgação dos casos que necessitam de ajuda e uma aplicação mobile para que os usuários acompanhem esses casos.

## Tecnologias
* [Node.js](https://nodejs.org/en/)
* [Nodemon](https://nodemon.io/)
* [Express](https://expressjs.com/pt-br/)
* [Knex.js](http://knexjs.org/)
* [Celebrate](https://github.com/arb/celebrate)
* [React](https://pt-br.reactjs.org/)
* [React Router Dom](https://github.com/ReactTraining/react-router)
* [Axios](https://github.com/axios/axios)
* [React Toastify](https://github.com/fkhadra/react-toastify)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)

## Pré-requisitos
* [Node.js](https://nodejs.org/en/)

## Execução
Após baixar/clonar o repositório, acesse as pastas do projeto separadamente via terminal e execute 
```
  npm install
```
para que as dependências sejam baixadas. 

### Execução API
Deve-se acessar o diretório *be-the-hero-api* via terminal e executar
```
  npm start
```
e o servidor estará disponível na porta 3333.

### Execução front-end
Acesse o diretório *be-the-hero-front* via terminal e execute
```
  npm start
```
e a aplicação será aberta no navegador.

### Execução mobile
Inicialmente, deve-se realizar o download do aplicativo **Expo** na loja virtual do aparelho celular (app store, play store, etc).
Com o aplicativo instalado, no PC deve-se acessar o diretório *be-the-hero-mobile* via terminal e executar
```
  npm start
```
e uma página será aberta no navegador. Nessa página ficará disponível um QR-code, que deverá ser scaneado pela câmera do aparelho celular. Feito isso, o Expo abrirá a aplicação.
