# Documentação do Backend - Gráfica MVP

Este arquivo explica como a API do backend foi construída e o que você (ou qualquer membro da equipe) precisa fazer para executá-la no seu computador.

## Tecnologias Utilizadas

O backend foi construído visando simplicidade, velocidade e facilidade de configuração:

- **Python 3.11+**: Linguagem base do servidor.
- **FastAPI**: Framework web moderno e de altíssimo desempenho para construir APIs em Python. Ele automaticamente gera a documentação interativa para testes (Swagger UI).
- **SQLite**: Banco de dados relacional leve que salva tudo em um único arquivo local (`sql_app.db`). Excelente para um MVP pois dispensa instalações complexas.
- **SQLAlchemy**: ORM (Object Relational Mapper) usado para interagir com o SQLite escrevendo código Python ao invés de comandos SQL crus.
- **Pydantic**: Biblioteca para validação de dados. Garante que as informações enviadas (como a criação de um usuário ou um item no carrinho) tenham o formato correto.
- **JWT (JSON Web Tokens)**: Padrão usado para a segurança e autenticação (login de usuários).
- **Docker & Docker Compose**: Ferramentas de containerização para isolar o ambiente. Garantem que o código rode perfeitamente em qualquer máquina.

---

## Como Rodar o Backend Passo a Passo

Graças ao Docker, você **não precisa** instalar o Python, configurar ambientes virtuais (venv) ou instalar bibliotecas manualmente na sua máquina. O Docker faz tudo isso de forma isolada.

### Pré-requisitos
1. Ter o **Docker Desktop** instalado e rodando no seu computador (o ícone da baleia deve estar ativo e verde).
2. Ter o código do projeto baixado na sua máquina (via `git clone` ou `git pull`).

### Passo 1: Abrir o terminal
Abra o seu terminal (Prompt de Comando, PowerShell ou o terminal embutido no VS Code).

### Passo 2: Navegar até a pasta raiz
Certifique-se de que você está na pasta principal do projeto, chamada `MVP-grafica` (a pasta onde está o arquivo `docker-compose.yml`).
```bash
cd caminho/para/o/MVP-grafica
```

### Passo 3: Subir o contêiner
Execute o seguinte comando para construir a imagem e iniciar o servidor em segundo plano:
```bash
docker compose up --build -d
```
> **Nota**: A primeira vez que você rodar isso pode demorar alguns minutos, pois o Docker vai baixar o Python e instalar todas as dependências (FastAPI, SQLAlchemy, etc). Nas próximas vezes, será instantâneo!

### Passo 4: Acessar a API e testar
Com o Docker rodando, o servidor do backend já estará ativo na porta `8000`.

Abra o seu navegador de internet e acesse:
👉 **[http://localhost:8000/docs](http://localhost:8000/docs)**

Esta é a interface iterativa (Swagger). Nela você pode ver e testar todas as rotas criadas:
- **`POST /users/`**: Para criar uma nova conta.
- **`POST /token`**: Para fazer login e pegar o Token JWT.
- **`POST /products/`**: Para cadastrar produtos (ex: Camisetas, Canecas).
- **`GET /products/`**: Para listar os produtos.
- **`POST /cart/`**: Para adicionar um item e suas personalizações ao carrinho (é preciso estar logado / usar o cadeado no topo da tela para inserir o Token).

### Parando o Servidor
Quando terminar de trabalhar e quiser desligar o backend, basta rodar no terminal (na mesma pasta):
```bash
docker compose down
```
Isso desligará os contêineres e liberará os recursos da sua máquina de forma limpa.
