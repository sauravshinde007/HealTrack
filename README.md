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

![Dashboard Overview](https://github.com/user-attachments/assets/a7fa3556-9cef-4090-9994-6a1d06d1de5f)

![Patient Interface](https://github.com/user-attachments/assets/4ad6771a-5a59-4140-a3be-4699dcf4f565)

![Appointment Booking](https://github.com/user-attachments/assets/3b209acb-e310-4019-a77e-2aa3becc8c48)

![Appointment Management](https://github.com/user-attachments/assets/a8815b79-b96f-419e-b233-08ce0af2ae81)

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
