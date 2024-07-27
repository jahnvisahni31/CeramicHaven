# CeramicHaven

Welcome to CeramicHaven, an online crockery store built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes an admin panel for managing products, orders, and users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)


## Features

- User authentication and authorization
- Product listing and details
- Shopping cart and checkout
- Order management
- Admin panel for managing products, orders, and users
- Responsive design

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/ceramichaven.git
cd ceramichaven
```
## Backend Setup
Navigate to the backend directory

```bash

cd backend
```
### Install dependencies
```bash
npm install
```
### Create a .env file in the backend directory with the following content:

```makefile
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```
### Start the server
```bash
npm start
```
## Technologies
### Frontend:
React.js
Redux
React Router
Axios

### Backend:
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)

## Project Structure
```bash
my-project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   └── ...
│   │   ├── pages/
│   │   │   └── ...
│   │   ├── redux/
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── .env
│   ├── package.json
│   └── ...
```
## Contributing
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
## License
This project is licensed under the MIT License - see the ```LICENSE``` file for details.

