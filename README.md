# TCC da Kaspper: Sistema de Orçamentos

**TCC da Kaspper** é um sistema desenvolvido como parte de um Trabalho de Conclusão de Curso, voltado para o gerenciamento de orçamentos e clientes. Este projeto possui duas aplicações principais:

- **Frontend**: Desenvolvido em Angular (este repositório).
- **Backend**: Desenvolvido em Java e hospedado em [outro repositório](https://github.com/jmoraes-92/TCC_final).

---

## 📋 Funcionalidades Principais
- **Frontend (Angular)**
  - Cadastro e edição de clientes e orçamentos.
  - Validação de formulários com feedback em tempo real.
  - Integração com uma API REST para persistência de dados.
  - Navegação estruturada por rotas.

- **Backend (Java)**
  - Gerenciamento de dados no servidor.
  - Conexão com banco de dados para armazenamento e consulta.
  - Endpoints RESTful para comunicação com o frontend.

---

## 🛠️ Instalação do Frontend

### Requisitos
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Angular CLI](https://angular.io/cli)

### Passos para Configurar o Frontend
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/orcamento-system.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd orcamento-system
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure a URL da API no arquivo de ambiente `environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api' // Atualize para a URL do backend
   };
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
6. Acesse a aplicação no navegador em [http://localhost:4200](http://localhost:4200).

---

## 🛠️ Instalação do Backend
O backend do sistema está disponível no repositório [TCC_final](https://github.com/jmoraes-92/TCC_final). Siga as instruções no README daquele repositório para configurá-lo e iniciá-lo.

---

## 📂 Estrutura do Projeto Frontend

```plaintext
src/
├── app/
│   ├── client-list/          # Listagem de clientes
│   ├── client-form/          # Formulário de cadastro/edição de clientes
│   ├── cadastro-sucesso/     # Página de sucesso após cadastro
│   ├── pagina-inicial/       # Página inicial
│   ├── navbar/               # Barra de navegação
│   └── app-routing.module.ts # Gerenciamento de rotas
├── assets/                   # Recursos estáticos (imagens, fontes, etc.)
├── environments/             # Configurações para diferentes ambientes
└── styles.css                # Estilos globais
```

---

## 🌐 Rotas Principais

| Rota               | Componente                | Descrição                       |
|--------------------|--------------------------|----------------------------------|
| `/`                | `PaginaInicialComponent` | Página inicial da aplicação.    |
| `/clientes/novo`   | `ClientFormComponent`    | Formulário para novo cliente.   |
| `/cadastro-sucesso`| `CadastroSucessoComponent`| Página de sucesso após cadastro.|

---

## 📋 Funcionalidades de Formulários
O formulário de cadastro/edição de clientes possui os seguintes campos:
- **Nome**: Obrigatório.
- **Email**: Obrigatório, com validação de formato.
- **Telefone**: Obrigatório, com máscara para números brasileiros.
- **Empresa**: Opcional.
- **Solicitação**: Campo de texto para descrição adicional.

---

## 🤝 Contribuidores
Este projeto foi desenvolvido por:
- [@jmoraes-92](https://github.com/jmoraes-92)
- [@Isaacboniii](https://github.com/Isaacboniii)
- [@Idalvo](https://github.com/Idalvo)

---

## 🖋️ Autor e Finalidade
Este sistema foi desenvolvido como parte do Trabalho de Conclusão de Curso da equipe **Kaspper**, com o objetivo de aplicar práticas modernas de desenvolvimento web e resolver um problema de gerenciamento de orçamentos.

---

## 🛠️ Licença
© Kaspper, 2025. Todos os direitos reservados.
Este software é proprietário e seu uso está sujeito às condições expressas no contrato de licença.


