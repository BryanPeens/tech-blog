# Tech Blog

A modern and responsive tech blog application built with Node.js, Express, Sequelize, and PostgreSQL.

## Table of Contents

- [Tech Blog](#tech-blog)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Database Setup](#database-setup)
    - [Environment Variables](#environment-variables)
    - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Features

- User authentication and authorization
- Create, edit, and delete blog posts
- Comment on posts
- Responsive design
- Easy to extend and customize

## Demo

Check out the live demo [here](https://tech-blog-kqh7.onrender.com/).

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later)

### Clone the Repository

```sh
git clone https://github.com/BryanPeens/tech-blog.git
cd tech-blog
```

### Install Dependencies

```sh
npm install
```

### Database Setup
Make sure PostgreSQL is running and create a database for the application. 
You can create a database using the following command:

```sh
\i db/schema.sql
```

### Environment Variables
Create a .env file in the root directory of the project and add the following variables:

```sh
DB_NAME='devblog_db'
DB_USER='usename'
DB_PASSWORD='password'
```

### Running the Application
Run the migrations to set up the database schema:

```sh
npm start
```

The application should now be running on http://localhost:3000.

### Usage
Sign up for a new account or log in with an existing one.
Create new blog posts, edit, and delete your own posts.
Comment on posts and engage with the community.

### Contributing
We welcome contributions! Please see our CONTRIBUTING.md for details on how to contribute.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
If you have any questions or suggestions, feel free to reach out:

Bryan Peens - GitHub