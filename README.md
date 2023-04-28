# ASSESMENT BACKEND

This project is a mission designed in order to evaluate the knowledge acquired during the program. The technologies covered by this evaluation are:

    - NodeJs
    - ExpressJs
    - CORS
    - Prisma
    - Render
    - JWS


# **TASK #1**

## **What is this project?**

&nbsp;&nbsp;&nbsp;&nbsp;This is a small restful API Withe the following prompt:
  - Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

  - The CEO of Favs hired you to develop the initial version of his product. It’s worth mentioning that she does not have any technical background. However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.
<br />

## **Usability**

### **Tools used**

    - NodeJs
    - ExpressJs
    - CORS
    - Prisma
    - Render
    - JSON Web Token
    - & more
 <br />

 
### **Basic Commands**

      npm run dev
      npx prisma studio
      npm run prisma:seed
 <br />

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

- npx prisma init
- Change environment variable in .env file
- Review data from the .gitignore file
- Create the models in prisma/schema.prisma
- npx prisma migrate dev
- npx prisma studio



### **Endpoints**

| Route                 | HTTP Verb | Route Middleware | Description                          |
|-----------------------|-----------|------------------|--------------------------------------|
| /api/healthcheck      | GET       |                  | Get the server status                |
| /api/favs             | GET       | isAuthenticated | Get all list of favorites            |
| /api/favs             | POST      | isAuthenticated | Creates a new list of favorites      |
| /api/favs/:id         | GET       | isAuthenticated | Get a single list of favorites       |
| /api/favs/:id         | DELETE    | isAuthenticated | Deletes a list of favorites          |
| /api/user            | GET       | isAuthenticated | Get a list of all users              |
| /api/user/:id        | GET       | isAuthenticated | Get the info of a certain user       |
| /auth/local/signup    | POST      |                  | Creates a new user by email/password |
| /auth/local/login     | POST      |                  | Login user by email/password         |

### **Endpoint notes**
&nbsp;&nbsp;&nbsp;&nbsp;For certain petitions it is necessary to add headers including the current user Token created on login and/or a body containing specific information. They are the following:

- **Header:** The token provided on user login.
- **Body:** 
  - login / signup: 
        {
        "email": "oscar@email.com",
        "password": "test1234"
        }
  - Create new list: 
        {
            "listName": "newList"
        }


# **TASK #2**
### ANSWER THE QUESTIONS

1. Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

    The parts of the URL are:

      > Protocol=>              https
      > Subdomain=>             backend
      > Domain=>                mega-app.com.co
      > Port=>                  8080
      > Path=>                  /api/articles/search
      > Query Parameters=>      docid=1020&hl=en
      > Fragment Identifier=>   dayone

 <br />

2. Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-

#### Web API
&nbsp;&nbsp;&nbsp;A web API or web services API is an application processing interface between a web server and a web browser. All web services are APIs, but not all APIs are web services. The REST API is a special type of web API that uses the standard architectural style explained above.

Different terms related to APIs, such as Java API or Service API, exist because APIs historically were created before the World Wide Web. Modern web APIs are REST APIs, and the terms can be used interchangeably.

#### Restful
&nbsp;&nbsp;&nbsp;The RESTful API is an interface that two computer systems use to exchange information securely over the Internet. Most enterprise apps need to communicate with other internal or third-party apps to perform various tasks. For example, to generate monthly payslips, your internal accounting system must share data with your client's banking system to automate billing and communicate with an internal timesheets application. RESTful APIs support this exchange of information because they follow secure, reliable, and efficient software communication standards.

#### Status Code
&nbsp;&nbsp;&nbsp;HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

    - Informational responses (100 – 199)
    - Successful responses (200 – 299)
    - Redirection messages (300 – 399)
    - Client error responses (400 – 499)
    - Server error responses (500 – 599)

- **200 OK**
    The request succeeded. The result meaning of "success" depends on the HTTP method:

    GET: The resource has been fetched and transmitted in the message body.
    HEAD: The representation headers are included in the response without any message body.
    PUT or POST: The resource describing the result of the action is transmitted in the message body.
    TRACE: The message body contains the request message as received by the server.

- **400 Bad Request**
    The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

- **500 Internal Server Error**
    The server has encountered a situation it does not know how to handle.

3. When we talk about CRUD, what does it mean?
    It is a set of basic operations that can be performed on data stored in a database.

    - Create: This operation creates new data in the system. 

    - Read: This operation reads and retrieves data from the system. 

    - Update: This operation modifies existing data in the system. 

    - Delete: This operation removes existing data from the system. 



## License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## *Autor: _Oscar Nuñez_*
