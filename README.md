# HealTrack: Clinic Appointment System

A secure and intuitive clinic appointment platform designed to streamline booking workflows and enhance efficiency for both patients and administrators.

## Overview

HealTrack is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and offers a modern, responsive interface for managing clinic appointments. The system provides dedicated dashboards for patients and administrators, making appointment management seamless and efficient.

## Features

- **Secure User Authentication**: JWT-based authentication system for patients and administrators
- **RESTful API Architecture**: Well-defined REST APIs for managing users, appointments, and clinic data
- **Responsive Dashboards**: User-friendly interfaces optimized for all devices
- **Streamlined Booking**: Simplified appointment scheduling process for patients
- **Administrative Tools**: Comprehensive management features for clinic staff
- **Real-time Updates**: Instant appointment status updates and notifications

## Technology Stack

### Frontend
- React.js
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT (JSON Web Token)

## Screenshots

![Dashboard Overview](https://github.com/user-attachments/assets/6e02d8bb-ae32-4bf0-aced-5e1684b32fe8)

![Patient Interface](https://github.com/user-attachments/assets/9931e425-da66-4893-baed-fde53553c826)

![Appointment Booking](https://github.com/user-attachments/assets/db50ec8f-5a56-439b-8ed3-6e55079d8645)

![Admin Dashboard](https://github.com/user-attachments/assets/eb621b30-673f-4640-99bb-2a5dd3696351)

![Appointment Management](https://github.com/user-attachments/assets/96ff45ad-b468-438a-a8a4-27cd28fdf730)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healtrack.git
   cd healtrack
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start MongoDB**
   ```bash
   mongod
   ```

6. **Run the application**
   
   Backend (from backend directory):
   ```bash
   npm start
   ```
   
   Frontend (from frontend directory):
   ```bash
   npm start
   ```

7. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## Usage

### For Patients
1. Register for a new account or log in
2. Browse available appointment slots
3. Book appointments with preferred doctors
4. View and manage your appointments
5. Receive appointment confirmations

### For Administrators
1. Log in with admin credentials
2. Manage patient appointments
3. View clinic schedule and availability
4. Update appointment statuses
5. Generate reports and analytics

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub or contact the maintainers.

## Acknowledgments

- Thanks to all contributors who have helped shape HealTrack
- Built with modern web technologies and best practices
- Designed with user experience and security as top priorities
