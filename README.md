# Frontend - Gerenciador de Tarefas ⚛️

Interface de usuário (UI) desenvolvida com React para consumir a API do Gerenciador de Tarefas. Esta aplicação permite aos usuários interagir com sua lista de tarefas de forma visual e intuitiva, realizando todas as operações de gerenciamento necessárias.

Este projeto foi inicializado utilizando [Vite](https://vitejs.dev/), garantindo uma experiência de desenvolvimento rápida e moderna.

## ✨ Funcionalidades

-   **Visualizar** a lista completa de tarefas.
-   **Adicionar** novas tarefas através de um formulário.
-   **Marcar/Desmarcar** tarefas como concluídas.
-   **Excluir** tarefas da lista.

## 🚀 Tecnologias Utilizadas

-   [React](https://react.dev/) - Biblioteca para construir interfaces de usuário.
-   [Vite](https://vitejs.dev/) - Ferramenta de build de nova geração para desenvolvimento web.
-   [Axios](https://axios-http.com/) - Cliente HTTP baseado em Promises para fazer requisições à API do backend.
-   **CSS** - Para estilização básica dos componentes.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente já vem instalado com o Node.js)

### Dependência Essencial

⚠️ **Importante:** Esta aplicação (frontend) **precisa que o [servidor do backend](https://github.com/seu-usuario/tarefas-backend.git) esteja em execução**, pois ela consome a API fornecida por ele para funcionar. Certifique-se de que o backend está rodando em `http://localhost:3001` antes de iniciar o frontend.

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/tarefas-frontend.git](https://github.com/seu-usuario/tarefas-frontend.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd tarefas-frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
O Vite irá iniciar a aplicação e fornecer uma URL local para acesso (geralmente `http://localhost:5173`). Abra esta URL em seu navegador para ver o aplicativo funcionando.

## 🏗️ Estrutura do Projeto

A estrutura de pastas foi organizada para separar as responsabilidades:

```
/src/
|-- /components/      # Componentes React reutilizáveis (TaskForm, TaskList, etc.)
|-- /services/        # Lógica de comunicação com a API (configuração do Axios)
|-- App.jsx           # Componente principal que une a aplicação
|-- index.css         # Estilos globais
|-- main.jsx          # Ponto de entrada da aplicação React
