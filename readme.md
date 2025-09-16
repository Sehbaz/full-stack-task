Check out [Live](http://172.237.110.66:5173/login)

This repository provides a full-stack application setup using PostgreSQL, a Node.js API and a Vite frontend.

The environment is orchestrated with Docker Compose.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node](https://nodejs.org/en)

## Setup Instructions

Follow these steps to run the project locally:

1. Clone the repository

```bash
git clone git@github.com:Sehbaz/full-stack-task.git
cd full-stack-task
```

2. Start DB services

```bash
docker compose -f docker-compose-db.yml up -d
```

3. Run frontend

```bash
cd full-stack-task/client
npm i
npm run dev
```

5. Run frontend test

```bash
cd full-stack-task/client
npm i
npm run test
```

3. Run frontend api

```bash
cd full-stack-task/api
npm i
npm run dev
```

5. Run api unit test

```bash
cd full-stack-task/api
npm i
npm run test:unit
```

6. Run api unit test

```bash
cd full-stack-task/api
npm i
npm run test:integration
```

5. Access the services:

- API: http://localhost:3000
- Frontend: http://localhost:5173
