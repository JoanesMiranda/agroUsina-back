# AgroUsina-api - API com Nodejs e sequelize

Operações HTTP atendidas: **GET, POST PUT e DELETE.**

#### CRUD 
ACTION | RESULT | STATUS CODE
----- | ---- | ----
`GET /mills` | Retorna uma lista com todos as usinas |200, 404
`GET /mills/:id` | Retorna umas usina especifica  |200, 404
`POST /mills` | Insere um nova usina  |200
`DELETE /mills/:id` | Remove uma usina| 200
`GET /harvests` | Retorna uma lista com toda as colheitas|200, 404
`GET /harvests/:id` | Retorna uma colheita especifica|200, 404
`POST /harvests/id` | Insere um nova colheita  | 200
`DELETE /harvests/:id` | Remove uma colheita| 200
`GET /farms` | Retorna uma lista com toda as fazenda| 200, 404
`GET /farms/:id` | Retorna uma fazenda especifica| 200, 404
`POST /farms/:id` | Insere um nova fazenda  | 200
`DELETE /farms/:id` | Remove uma fazenda| 200, 404
`GET /fields` | Retorna uma lista com toda os campos das fazendas| 200, 404
`POST /fields/:id` | Insere um novo campo  | 200
`DELETE /fields/:id` | Remove um campo| 200, 404

<br/>

> Os dados são retornados no formato json.
Exemplo do formato retornado:

```json
{
  "id": 3,
  "code": "colheita 1",
  "start_date_harvest": "2020-09-02",
  "finish_date_harvest": "2020-09-16",
  "createdAt": "2020-09-13T23:27:08.341Z",
  "updatedAt": "2020-09-13T23:27:08.341Z",
  "mill_id": 5,
  "farms": [
    {
      "id": 4,
      "code": "Fazenda 1",
      "name": "fazenda carnauba",
      "createdAt": "2020-09-13T23:29:06.719Z",
      "updatedAt": "2020-09-13T23:29:06.719Z"
    },
    {
      "id": 5,
      "code": "fazenda 2",
      "name": "fazenda pernanbuco",
      "createdAt": "2020-09-13T23:29:28.694Z",
      "updatedAt": "2020-09-13T23:29:28.694Z"
    }
  ]
}
```

## Obs: API ainda em desenvolvimento.