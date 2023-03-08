# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### Cadastro

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.

### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"

### Cadastrar produto

POST /products

#### Corpo do produto

    {
        "name": "GOD OF WAR",
        "categories": [4, 11, 9, 7],
        "publisher": "PlayStation PC LLC",
        "image": "https://img.hype.games/cdn/8c8c766d-7b9e-4599-94c8-89d1970e29c5040122_Cover_%20[Nexway]%20Gof%20of%20War-600.jpg",
        "price": 200,
        "description": "Após sua vingança contra os Deuses do Olimpo anos atrás, Kratos agora vive como um homem no reino dos deuses e monstros nórdicos.",
        "trailer": "https://www.youtube.com/watch?v=HqQMh_tij0c&t=1s",
        "sistem": "Windows",
        "classificacao": 18,
        "userId": 2
        }

#### Resposta

    {
        "name": "GOD OF WAR",
        "categories": [
            4,
            11,
            9,
            7
        ],
        "publisher": "PlayStation PC LLC",
        "image": "https://img.hype.games/cdn/8c8c766d-7b9e-4599-94c8-89d1970e29c5040122_Cover_%20[Nexway]%20Gof%20of%20War-600.jpg",
        "price": 200,
        "description": "Após sua vingança contra os Deuses do Olimpo anos atrás, Kratos agora vive como um homem no reino dos deuses e monstros nórdicos.",
        "trailer": "https://www.youtube.com/watch?v=HqQMh_tij0c&t=1s",
        "sistem": "Windows",
        "classificacao": 18,
        "userId": 2,
        "id": 8
    }

### Buscar produtos

GET /products

#### Resposta

[
{
"id": 1,
"name": "GOD OF WAR",
"categories": [
4,
11,
9,
7
],
"publisher": "PlayStation PC LLC",
"image": "https://img.hype.games/cdn/8c8c766d-7b9e-4599-94c8-89d1970e29c5040122_Cover_%20[Nexway]%20Gof%20of%20War-600.jpg",
"price": 200,
"description": "Após sua vingança contra os Deuses do Olimpo anos atrás, Kratos agora vive como um homem no reino dos deuses e monstros nórdicos.",
"trailer": "https://www.youtube.com/watch?v=HqQMh_tij0c&t=1s",
"sistem": "Windows",
"classificacao": 18
},...]

GET /products/:id

#### Resposta

{
"id": 1,
"name": "GOD OF WAR",
"categories": [
4,
11,
9,
7
],
"publisher": "PlayStation PC LLC",
"image": "https://img.hype.games/cdn/8c8c766d-7b9e-4599-94c8-89d1970e29c5040122_Cover_%20[Nexway]%20Gof%20of%20War-600.jpg",
"price": 200,
"description": "Após sua vingança contra os Deuses do Olimpo anos atrás, Kratos agora vive como um homem no reino dos deuses e monstros nórdicos.",
"trailer": "https://www.youtube.com/watch?v=HqQMh_tij0c&t=1s",
"sistem": "Windows",
"classificacao": 18
}

### Deletar produto

DELETE /products/:id

### Deleter user

DELETE /users/:id
