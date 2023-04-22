# FAVS API with JS

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


## Usage



## License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
