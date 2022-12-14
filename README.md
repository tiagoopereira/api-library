# API Library
### Necessário
    - node v18.10.0
    - npm v8.19.2
    - make
### Execução
    - make run
    - preencher a variável MONGO_DB_URL no arquivo .env

### Rotas:
  - <b>Autores:</b> <br/>
    ```/authors [POST] => Adicionar um autor.``` <br/>
    - Payload:
      ```json 
          {
              "name": "string",
              "nationality": "string"
          }
      ```
      ```/authors [GET] => Listar todos os autores.``` <br/>
      ```/authors/{id} [GET] => Visualizar um autor.``` <br/>
      ```/authors/{id} [PUT] => Atualizar os dados de um autor.``` <br/>
      - Payload:
      ```json 
          { 
              "name": "string",
              "nationality": "string"
          }
      ```
      ```/authors/{id} [DELETE] => Deletar um autor.``` <br/>
      
  - <b>Livros:</b> <br/>
    ```/books [POST] => Adicionar um livro.``` <br/>
    - Payload:
      ```json 
          {
              "title": "string",
              "author": "string|id de autor",
              "publishingCompany": "string",
              "pages": "int"
          }
      ```
      ```/books [GET] => Listar todos os livros.``` <br/>
      ```/books/{id} [GET] => Visualizar um livro.``` <br/>
      ```/books/{id} [PUT] => Atualizar os dados de um livro.``` <br/>
      - Payload:
      ```json 
          {
              "title": "string",
              "author": "string|id de autor",
              "publishingCompany": "string",
              "pages": "int"
          }
      ```
      ```/books/{id} [DELETE] => Deletar um livro.``` <br/>
