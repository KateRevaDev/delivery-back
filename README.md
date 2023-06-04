This is the back-end part of the delivery project.
For the properly work of the roject you need to setup front-end part as well.

<!-- FOR UBUNTU -->

You need to do next steps for starting back-end:
1. Clone project
2. Install mongo db localy
3. Install packages - in the root folder run command "npm install"
4. Run the project  - in the root folder run command "npm run start"
5. Enjoy the project on address "http://localhost:3333/"

Query examples for adding into db:
1. Add shop:

POST http://localhost:3333/shops
Content-Type: application/json

{
  "name": "FORA"
}

2. Add good (use shopId from the previous query result):

POST http://localhost:3333/goods
Content-Type: application/json

{
  "name": "apple",
  "price": 80,
  "shopId": "6479dc36b5fbb35def5625f9"
}
