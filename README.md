This repository provides a full-stack application setup using PostgreSQL, a Node.js API and a Vite frontend.

The Database is orchestrated with Docker Compose.

## Screenshots
<img width="3835" height="2313" alt="Screenshot from 2025-09-16 10-24-01" src="https://github.com/user-attachments/assets/c16ba52b-8b99-40de-a36d-fe23e0a4ed8a" />
<img width="3835" height="2313" alt="Screenshot from 2025-09-16 10-24-18" src="https://github.com/user-attachments/assets/1cfc2c1f-dec1-459c-bb24-ee1042fccf59" />
<img width="3835" height="2313" alt="Screenshot from 2025-09-16 10-25-15" src="https://github.com/user-attachments/assets/08eec096-9896-4a1b-b572-e7b195f2cb4e" />


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
cd docker
docker-compose -f docker-compose-db.yml up -d
```

3. Run frontend

```bash
cd full-stack-task/client
npm i
npm run dev
```

4. Run frontend test

```bash
cd full-stack-task/client
npm i
npm run test
```

 5. Create .env file in api
```
 cd api
```
`
DATABASE_URL=postgres://postgres:postgres@localhost:15432/postgres
JWT_SECRET=topsecret
`

6. Run migration in api
```
cd api
npm run db:migrate
```

7. Run frontend api

```bash
cd full-stack-task/api
npm i
npm run dev
```

8. Run api unit test

```bash
cd full-stack-task/api
npm i
npm run test:unit
```

9. Run api unit test

```bash
cd full-stack-task/api
npm i
npm run test:integration
```

10. Access the services:

- API: http://localhost:3000
- Frontend: http://localhost:5173
