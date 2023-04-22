# 1. FAVS API with JS

This script generates a list of songs which can be selected by users in their favorites lists.


## Prerequisites

- Node.js
- Prisma
- Faker

## Setup and creating

1. Clone the repository

2. Install the required dependencies:

    ```bash
    npm init -y
    npm i express cors morgan @prisma/client
    npm i -D @types/express @types/cors @types/morgan @types/node prisma typescript ts-node-dev
    Create script  package.json file
    npx tsc --init
    Create src/
    Create src/app.ts
    Create src/config/express.ts
    Create src/api/
    Create endpoint healthcheck
    ```

### Prisma

npx prisma init
Change environment variable in .env file
Review data from the .gitignore file
Create the models in prisma/schema.prisma
npx prisma migrate dev
npx prisma studio


# 2. ANSWER THE QUESTIONS

1. Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

    The parts of the URL are:

    Protocol: https://
    Subdomain: backend
    Domain name: mega-app.com.co
    Port: :8080
    Path: /api/articles/search
    Query parameters: ?docid=1020&hl=en
    Fragment identifier: #dayone

2. Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-

    HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

    Informational responses (100 – 199)
    Successful responses (200 – 299)
    Redirection messages (300 – 399)
    Client error responses (400 – 499)
    Server error responses (500 – 599)

    200 OK
    The request succeeded. The result meaning of "success" depends on the HTTP method:

    GET: The resource has been fetched and transmitted in the message body.
    HEAD: The representation headers are included in the response without any message body.
    PUT or POST: The resource describing the result of the action is transmitted in the message body.
    TRACE: The message body contains the request message as received by the server.

    400 Bad Request
    The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

    500 Internal Server Error
    The server has encountered a situation it does not know how to handle.

3. When we talk about CRUD, what does it mean?
    It is a set of basic operations that can be performed on data stored in a database.

    Create: This operation creates new data in the system. 

    Read: This operation reads and retrieves data from the system. 

    Update: This operation modifies existing data in the system. 

    Delete: This operation removes existing data from the system. 



## License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
