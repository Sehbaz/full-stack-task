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

2. Start all services

```bash
docker compose up -d
```

3. Run frontend tst

```bash
cd full-stack-task/client
npm i
npm run test
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

## Services

- db – PostgreSQL for development (port 15432)
- db_test – PostgreSQL for testing (port 25432)
- migrations – Runs database migrations against the development DB
- api – Node.js backend API (port 3000)
- frontend – Vite React (or similar) frontend (port 5173)
