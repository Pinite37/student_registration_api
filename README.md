# Student Registration API
## Description
This API manages student admissions and course registrations for universities. It provides endpoints for creating admissions, updating admission statuses, and registering students for courses upon admission approval.  

## Technologies Used
- Node.js  
- Express.js  
- PostgreSQL  
- Sequelize ORM  
- JWT Authentication  
- Multer for file uploads  
## Features
- Admissions Management:
    - Create new admissions
    - Update admission statuses (Approved, Rejected, Pending)  
- Course Registration:
    - Register students for courses upon admission approval
- Authentication and Authorization:
    - JWT-based authentication
    - Role-based access control (Admin, Student)
- File Uploads:
    - Upload student ID cards using Multer middleware
- Error Handling:
    - Centralized error handling middleware
- Database Integration:
    - PostgreSQL database with Sequelize ORM
    - Migrations and seeders for database management
## Installation
1. Clone the repository:

    - Copier le codegit clone   
    ``https://github.com/Pinite37/student_registration_api.git``  
    ``cd votreprojet``  
2. Install dependencies:

    Copier le code  
    ``npm install``  
3. Set up environment variables:

    - Create a `.env` file based on `.env`.example and configure database credentials, JWT secret, etc.

4. Start the server:  
    Copier le code
    ``npm start``  
    The server will start running at http://localhost:3000.

## API Documentation
- API endpoints are documented using Postman.
- Link to Postman Collection
## Usage
- Use Postman or any API client to interact with the endpoints.
- Authenticate using JWT tokens for authorized actions.
