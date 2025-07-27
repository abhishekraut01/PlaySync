# Turborepo Monorepo Deployment Practice

This repository is a practice project for deploying a Turborepo monorepo using CI/CD pipelines and AWS. It demonstrates how to structure, configure, and prepare a monorepo for modern deployment workflows.

## Getting Started

If you want to copy or use this Turborepo project, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine.

### 2. Set Up the Database Package (`packages/db`)

1. **Create a `.env` file in `packages/db/`**

   Add the following line to `packages/db/.env`:
   ```env
   DATABASE_URL="<your-database-connection-url>"
   ```
   Replace `<your-database-connection-url>` with your actual database connection string (e.g., for PostgreSQL).

2. **Generate the Prisma client**

   Run the following command from the root of the repository:
   ```sh
   pnpm prisma generate --filter @repo/db
   ```
   This will generate the Prisma client for the database package.

## About This Project

- **Monorepo:** Uses Turborepo to manage multiple packages and apps.
- **CI/CD:** Intended for practicing automated deployment pipelines.
- **AWS:** Deployment target is AWS (e.g., using services like ECS, Lambda, or EC2).

## Useful Links

- [Turborepo Documentation](https://turborepo.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [AWS Getting Started](https://aws.amazon.com/getting-started/)
