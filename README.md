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
                {
                    "categoryId": 4,
                    "label": "Ação",
                    "slug": "acao"
                },
                {
                    "categoryId": 11,
                    "label": "Terceira Pessoa",
                    "slug": "terceira-pessoa"
                },
                {
                    "categoryId": 9,
                    "label": "RPG",
                    "slug": "rpg"
                },
                {
                    "categoryId": 7,
                    "label": "Sangue",
                    "slug": "sangue"
                }
            ],
            "publisher": "PlayStation PC LLC",
            "image": "https://img.hype.games/cdn/8c8c766d-7b9e-4599-94c8-89d1970e29c5040122_Cover_%20[Nexway]%20Gof%20of%20War-600.jpg",
            "price": 200,
            "description": "Após sua vingança contra os Deuses do Olimpo anos atrás, Kratos agora vive como um homem no reino dos deuses e monstros nórdicos.",
            "trailer": "https://www.youtube.com/watch?v=HqQMh_tij0c&t=1s",
            "sistem": "Windows",
            "classificacao": 18
        },
        {
            "id": 2,
            "name": "Tom Clancy's Rainbow Six: Extraction - Standard Edition",
            "categories": [
                {
                    "categoryId": 1,
                    "label": "Tiro",
                    "slug": "tiro"
                },
                {
                    "categoryId": 3,
                    "label": "Estratégia",
                    "slug": "estrategia"
                }
            ],
            "publisher": "Ubisoft Connect",
            "image": "https://img.hype.games/cdn/52fa7755-d5c0-4d68-a2c6-2778206a85c8[Ubisoft]-Rainbow-Six-Extraction---Standard-Edition-600.png",
            "price": 25,
            "description": "Por décadas, a equipe Rainbow tem sido um escudo contra as piores ameaças mundiais. Agora, vem aí o maior perigo de todos: um alienígena letal em mutação.",
            "trailer": "https://www.youtube.com/watch?v=xy15gT9d-co",
            "sistem": "Windows",
            "classificacao": 16
        },...
    ]

GET /products/:id

#### Resposta

    {
        "id": 1,
        "name": "GOD OF WAR",
        "categories": [
            {
                "categoryId": 4,
                "label": "Ação",
                "slug": "acao"
            },
            {
                "categoryId": 11,
                "label": "Terceira Pessoa",
                "slug": "terceira-pessoa"
            },
            {
                "categoryId": 9,
                "label": "RPG",
                "slug": "rpg"
            },
            {
                "categoryId": 7,
                "label": "Sangue",
                "slug": "sangue"
            }
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

    Precisa ser admin

### Buscar usuário

    POST /user/:id

    Precisa da autenticação (Token)

### Deleter user

    DELETE /users/:id

    Precisa da autenticação (Token)

### Buscar categories

    GET /categories


    [
            {
            "id": 1,
            "label": "Tiro",
            "slug": "tiro"
            },
            {
            "id": 2,
            "label": "Guerra",
            "slug": "guerra"
            },
            {
            "id": 3,
            "label": "Estratégia",
            "slug": "estrategia"
            },
            {
            "id": 4,
            "label": "Ação",
            "slug": "acao"
            },
            {
            "id": 5,
            "label": "Violento",
            "slug": "violento"
            },
            {
            "id": 6,
            "label": "Luta",
            "slug": "luta"
            },
            {
            "id": 7,
            "label": "Sangue",
            "slug": "sangue"
            },
            {
            "id": 8,
            "label": "Exploração",
            "slug": "exploracao"
            },
            {
            "id": 9,
            "label": "RPG",
            "slug": "rpg"
            },
            {
            "id": 10,
            "label": "Mitologia",
            "slug": "mitologia"
            },
            {
            "id": 11,
            "label": "Terceira Pessoa",
            "slug": "terceira-pessoa"
            },
            {
            "id": 12,
            "label": "Um Jogador",
            "slug": "um-jogador"
            },
            {
            "id": 13,
            "label": "Super Herói",
            "slug": "super-heroi"
            },
            {
            "id": 14,
            "label": "Engraçado",
            "slug": "engraçado"
            },
            {
            "id": 15,
            "label": "Sobrevivência",
            "slug": "sobrevivencia"
            },
            {
            "id": 16,
            "label": "FPS",
            "slug": "fps"
            },
            {
            "id": 17,
            "label": "Multijogador",
            "slug": "multijogador"
            },
            {
            "id": 18,
            "label": "MMORPG",
            "slug": "mmorpg"
            },
            {
            "id": 19,
            "label": "PVP",
            "slug": "pvp"
            }
    ]
