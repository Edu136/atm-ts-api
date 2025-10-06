# API de Caixa Eletrônico - Desafio Técnico

Esta é uma API RESTful desenvolvida em Node.js e TypeScript que simula as operações de um caixa eletrônico. O objetivo principal é, dado um valor de saque, retornar a combinação de cédulas que totaliza esse valor utilizando a menor quantidade de notas possível.

As cédulas disponíveis para saque são: **R$ 100, R$ 50, R$ 20, R$ 10, R$ 5 e R$ 2**.

## 🛠️ Tecnologias Utilizadas

-   **Node.js**
-   **Express**
-   **TypeScript**
-   **Jest**

## 🚀 Como Executar o Projeto

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:8000`.

## ✅ Executando os Testes

Para garantir a qualidade e o correto funcionamento da lógica de negócio, execute o seguinte comando:

```bash
npm test
```

## 📚 Documentação da API

### Sacar um Valor

Este endpoint calcula e retorna a distribuição de cédulas para um valor de saque solicitado.

-   **URL:** `/api/saque`
-   **Método:** `POST`
-   **Headers:** `Content-Type: application/json`

#### Corpo da Requisição (Request)

```json
{
  "valor": 438
}
```

| Campo   | Tipo    | Descrição                        | Obrigatório |
| :------ | :------ | :------------------------------- | :---------- |
| `valor` | `integer` | O valor que se deseja sacar. | Sim         |

---

#### Respostas Possíveis (Responses)

-   **`200 OK` - Sucesso:**
    ```json
    {
      "100": 4,
      "50": 0,
      "20": 1,
      "10": 1,
      "5": 0,
      "2": 4
    }
    ```

-   **`400 Bad Request` - Erro de Validação:**
    Ocorre quando o valor é inválido ou não pode ser sacado com as notas disponíveis.
    ```json
    {
      "mensagem": "Não é possível sacar esse valor com as notas disponíveis."
    }
    ```
    Outros exemplos de mensagens de erro:
    - `"O campo 'valor' é obrigatório."`
    - `"Valor inválido, deve ser um número inteiro."`
    - `"Valor inválido, deve ser maior que zero."`

#### Principais desafios

O principal desafio foi criar a lógica de distribuição de notas, já que, em alguns casos, escolher uma nota de valor maior poderia impossibilitar alcançar o valor desejado, que seria possível apenas com notas menores. Outro desafio foi a utilização do TypeScript como linguagem na solução, pois tenho menos familiaridade com ela. No entanto, como é a linguagem utilizada pela equipe, fez mais sentido desenvolver a solução nesse contexto.
