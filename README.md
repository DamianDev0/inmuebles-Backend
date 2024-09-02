# NestJS Application

This is a backend project developed with NestJS, using Swagger for API documentation, Class Validator for data validation, and TypeORM as the ORM to manage databases. It also integrates Cloudinary for media file management.

## Description

The project is designed to interact with a database and provide a robust backend with various features, including file uploads to Cloudinary. Below is an outline of the technologies used, dependencies, project setup, and environment configuration.

## Technologies Used

- **NestJS**: A framework for building efficient, reliable, and scalable server-side applications.
- **Swagger**: A tool for API documentation.
- **Class Validator**: A library for data validation using decorators.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5) that supports various databases.
- **Cloudinary**: A service for managing media assets.

## Dependencies

- `@nestjs/common`
- `@nestjs/core`
- `@nestjs/swagger`
- `@nestjs/typeorm`
- `class-validator`
- `typeorm`
- `cloudinary`

## Project Setup

### Requirements

- **Node.js**: Version 14 or higher.
- **npm**: Version 6 or higher.
- **Database**: Compatible with TypeORM (e.g., PostgreSQL, MySQL, MongoDB).

### Step-by-Step Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   npm install
Configure Environment Variables

Create a .env file at the root of the project and add the following variables:

```bash
    # Database Host
    DB_HOST=

    # Database Port
    DB_PORT=

    # Database Username
    DB_USERNAME=

    # Database Password
    DB_PASSWORD=

    # Database Name
    DB_NAME=

    # Cloudinary Name
    CLOUDINARY_NAME=

    # Cloudinary API Key
    CLOUDINARY_API_KEY=

    # Cloudinary API Secret
    CLOUDINARY_API_SECRET=

```

### Start the Project

```bash
npm start run:dev
```

### Accessing API Documentation
```bash
Swagger Documentation http://localhost:5000/api/docs
```











