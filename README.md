## Organizador de Tarefas 📋
Projeto criado usando `ReactJS`, utilizar `npm install` para instalar o React no projeto.<br/>
As linguagens utilizadas foram: HTML, CSS, JavaScript/JSX.<br/>
Link para esse projeto no Vercel: <a href="https://lista-tarefas-nine-phi.vercel.app" target="_blank">https://lista-tarefas-nine-phi.vercel.app</a><br/>

### Como funciona?
A ideia dessa página é armazenar uma lista de tarefas, por padrão já são carregadas 10 tarefas diferentes. Cada tarefa tem nome, descrição e um status (concluído ou não).<br/>
As opções básicas são: Criar uma nova tarefa ou Editar/Excluir as existentes por meio dos botões da coluna **Opções**. Qualquer alteração na tarefa deve ser feito através das opções, a coluna **Status** apenas mostra se a tarefa está concluída ou não.

#### Changelog
0. Versão 1
   1. Criação do projeto inicial de acordo com o Figma;
0. Versão 1.1
   1. Utilização de DefaultValue para permitir edição do input;
   2. Melhoria no feedback visual ao selecionar os ícones do CRUD e botões da Modal;
0. Versão 1.2
   1. Criada as functions para renderizar a lista de tarefas quando ocorre alterações no array;
   2. Melhoria no feedback visual ao selecionar o ícone de exclusão;
0. Versão 1.3
   1. Substituição de `window.alert` pela `React-Toastify`;


---
Documentação oficial React abaixo:
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
