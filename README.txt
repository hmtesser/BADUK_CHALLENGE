[Projeto PS Baduk Backend]

.env example
DB_USER="yourUser"
DB_PASSWORD="YourPassword"
DB_NAME="Baduk"

Essa será uma REST API que deve permitir a criação de clientes, produtos e pedidos, onde o cliente pode gerar novos pedidos de compra de certos produtos, como um pequeno e-commerce.

### Funcionalidades:

A sua API deve ter no minimo as seguinte rotas:

- **`POST /customers`**: A rota deve receber `name` , `email` e `telefone` dentro do corpo da requisição, sendo o `name` o nome do cliente a ser cadastrado. Ao cadastrar um novo cliente, ele deve ser armazenado dentro do seu banco de dados e deve ser retornado o cliente criado. Com esses dados devem ser criado no banco de dados um novo cliente com os seguintes campos `id`, `name`, `email`,`telefone`, `createdAt`, `updatedAt`.
    
    *OBS: É necessário validar que os campos email e telefone seguem o formato correto*. 
    
- **`POST /products`**: Essa rota deve receber `name`, `price` e `quantity` dentro do corpo da requisição, sendo o `name` o nome do produto a ser cadastrado, `price` o valor unitário e `quantity` a quantidade existente em estoque do produto. Com esses dados devem ser criados no banco de dados um novo produto com os seguintes campos: `id`, `name`, `price`, `quantity`, `createdAt`, `updatedAt`.
- **`POST /orders`**: Nessa rota você deve receber no corpo da requisição o `customerId` e um array de products, contendo o `id` e a `quantity` . Com esses dados você deve cadastrar um novo pedido, que estará relacionado ao `customerId`, amazenando os seguintes campos `id`,`costumerId`, `totalPrice` , `createdAt`  , `updatedAt` e `products` que é um array de `id` e a `quantity` dos produtos.
    
    *OBS: Ao criar uma nova ordem é necessário atualizar a quantidade de produtos no estoque*. 
    
- **`GET /customers`**: Lista todas os usuários no banco de dados.
- **`GET /products`**: Lista todas os produtos no banco de dados.
- **`GET /orders`**: Lista todas as ordens no banco de dados.
    
    *OBS1: Ao listar as ordens é necessário páginar o resutado e também ordenar por meio do campo* `totalPrice`. 
    
    *OBS2: Adicionar filtragens ao listar os pedidos:*
    
    1. Listar pedidos acima ou abaixo de certo valor total. 
    2. Lista pedidos feitos em um intervalo de data:
        1. Você deve receber as datas no formato `yyyy-mm-dd` e implementar uma query no banco de dados para retornar somente os pedidos nesse intervalo. 
    3. Listar pedidos que tenham determinados produtos.
        1. Você deve receber um array de `id` dos produtos e fazer  uma query para buscar todos os pedidos que possuem esses produtos no seu campo `products`


Filtros : "lt" para menores que
"gt" para maiores que
"start" para pesquisar a partir da data enviada 
"end" para pesquisas até a data enviada
"start" e "end" para procurar entre as datas
"ordersId" para procurar Orders que contenham os produtos(passado por ID)
OBS: para perguntar sobre N+1 produtos, utilize && ex: /Orders?ordersId=61a3eb1990cfadef69f7d7fa&ordersId=61a3eb1e90cfadef69f7d7fb

### Restrições:

- Uso de NodeJS com Typescript e MongoDB.
- REST API
- Código bem comentado

*OBS: A estrutura escolhida para a API é livre contato que siga as regras funcionais.*

### Opcionais:

- Testes automatizados utilizando JEST.

## Links:

- [Node.JS Documentation](https://nodejs.org/en/docs/guides/)
- [Typescript Documentation](https://www.typescriptlang.org/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/manual/tutorial/getting-started/)