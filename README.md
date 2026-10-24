# HealTrack: Clinic Appointment System

![Dashboard Overview](https://github.com/user-attachments/assets/a7fa3556-9cef-4090-9994-6a1d06d1de5f)

A secure and intuitive clinic appointment platform designed to streamline booking workflows and enhance efficiency for patients, doctors, and administrators.

## Overview

HealTrack is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and offers a modern, responsive interface for managing clinic appointments. The system provides three dedicated panels — patient-facing frontend, doctor panel, and admin dashboard — making appointment management seamless and efficient.

## Features

- **Secure User Authentication**: JWT-based authentication for patients, doctors, and administrators
- **Three Dedicated Panels**: Separate interfaces for patients, doctors, and admins
- **Appointment Booking**: Patients can browse doctors, view available slots, and book appointments
- **Doctor Management**: Admins can add, delete, and manage doctors
- **Payment Integration**: Razorpay payment gateway for online appointment payments
- **Image Uploads**: Cloudinary-based image storage for doctor and user profile photos
- **Responsive UI**: Tailwind CSS with Framer Motion animations, optimized for all devices
- **Docker Support**: Docker Compose setup for containerized deployment
- **CI/CD Pipeline**: GitHub Actions workflow for automated deployment

## Technology Stack

### Frontend & Admin Panel
- React.js 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- React Router v6
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- JSON Web Tokens (JWT)
- bcrypt
- Multer (file uploads)
- Cloudinary
- Razorpay SDK

### Database
- MongoDB

## Screenshots

![Patient Interface](https://github.com/user-attachments/assets/4ad6771a-5a59-4140-a3be-4699dcf4f565)

![Appointment Booking](https://github.com/user-attachments/assets/3b209acb-e310-4019-a77e-2aa3becc8c48)

![Appointment Management](https://github.com/user-attachments/assets/a8815b79-b96f-419e-b233-08ce0af2ae81)

## Project Structure

```
HealTrack/
├── backend/          # Express.js API server
│   ├── config/       # MongoDB, Cloudinary, Razorpay config
│   ├── controllers/  # Route handlers
│   ├── middleware/    # Auth middleware (admin, doctor, user)
│   ├── models/       # Mongoose schemas
│   └── routes/       # API route definitions
├── frontend/         # Patient-facing React app
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       └── pages/
├── admin/            # Admin & Doctor panel React app
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       └── pages/
│           ├── Admin/
│           └── Doctor/
├── docker-compose.yml
└── .github/workflows/deploy.yml
```

## Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account
- Razorpay account (for payments)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sauravshinde007/HealTrack.git
   cd HealTrack
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your actual credentials
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Edit .env — set VITE_BACKEND_URL to your backend URL
   ```

4. **Set up the admin panel**
   ```bash
   cd ../admin
   npm install
   cp .env.example .env
   # Edit .env — set VITE_BACKEND_URL to your backend URL
   ```

5. **Run the application**

   Backend (from `backend/`):
   ```bash
   npm start          # production
   npm run server     # development with nodemon
   ```

   Frontend (from `frontend/`):
   ```bash
   npm run dev
   ```

   Admin (from `admin/`):
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: `http://localhost:5173`
   - Admin Panel: `http://localhost:5174`
   - Backend API: `http://localhost:4000`

### Docker Setup

```bash
# Make sure backend/.env is configured
docker-compose up -d
```

This starts all services: backend (port 4000), frontend (port 5173), admin (port 5174), and MongoDB (port 27017).

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT token signing |
| `CLOUDINARY_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_SECRET_KEY` | Cloudinary API secret |
| `RAZORPAY_KEY_ID` | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Admin login password |
| `CURRENCY` | Currency code (e.g., `INR`) |

### Frontend & Admin (`frontend/.env`, `admin/.env`)

| Variable | Description |
|---|---|
| `VITE_BACKEND_URL` | Backend API URL (e.g., `http://localhost:4000`) |
| `VITE_CURRENCY` | Currency symbol (admin only, e.g., `₹`) |

## Deploying to Vercel

The frontend and admin panels can be deployed to Vercel. The backend needs a Node.js hosting platform (Render, Railway, or similar).

### Step 1: Deploy the Backend

Since Vercel is serverless and this backend uses WebSocket-like persistent connections with MongoDB, deploy the backend on **Render**, **Railway**, or **Fly.io**:

1. Push your code to GitHub
2. On [Render](https://render.com): Create a **Web Service**, connect your repo, set root directory to `backend/`
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add all environment variables from `backend/.env`
6. Note the deployed URL (e.g., `https://healtrack-backend.onrender.com`)

### Step 2: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Set **Root Directory** to `frontend`
3. Framework Preset: **Vite**
4. Add environment variable:
   - `VITE_BACKEND_URL` = your deployed backend URL (from Step 1)
5. Click **Deploy**

### Step 3: Deploy Admin Panel to Vercel

1. On Vercel, click **Add New Project** and import the same repository again
2. Set **Root Directory** to `admin`
3. Framework Preset: **Vite**
4. Add environment variables:
   - `VITE_BACKEND_URL` = your deployed backend URL
   - `VITE_CURRENCY` = `₹`
5. Click **Deploy**

### Step 4: Update Backend CORS

After deploying, update `backend/server.js` to restrict CORS to your deployed frontend URLs:

```js
app.use(cors({
  origin: [
    'https://your-frontend.vercel.app',
    'https://your-admin.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174'
  ]
}))
```

## API Endpoints

### User Routes (`/api/user`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/register` | No | Register new patient |
| POST | `/login` | No | Patient login |
| GET | `/get-profile` | User | Get user profile |
| POST | `/update-profile` | User | Update user profile (with image) |
| POST | `/book-appointment` | User | Book an appointment |
| GET | `/appointments` | User | List user's appointments |
| POST | `/cancel-appointment` | User | Cancel an appointment |
| POST | `/payment-razorpay` | User | Create Razorpay order |
| POST | `/verify-razorpay` | User | Verify Razorpay payment |

### Admin Routes (`/api/admin`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/login` | No | Admin login |
| POST | `/add-doctor` | Admin | Add a new doctor (with image) |
| POST | `/delete-doctor` | Admin | Delete a doctor |
| GET | `/all-doctors` | Admin | List all doctors |
| GET | `/appointments` | Admin | List all appointments |
| POST | `/cancel-appointment` | Admin | Cancel any appointment |
| POST | `/change-availability` | Admin | Toggle doctor availability |
| GET | `/dashboard` | Admin | Get dashboard stats |

### Doctor Routes (`/api/doctor`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/login` | No | Doctor login |
| GET | `/list` | No | List all doctors (public) |
| GET | `/appointments` | Doctor | Get doctor's appointments |
| POST | `/cancel-appointment` | Doctor | Cancel an appointment |
| POST | `/complete-appointment` | Doctor | Mark appointment complete |
| POST | `/change-availability` | Doctor | Toggle own availability |
| GET | `/dashboard` | Doctor | Get dashboard stats |
| GET | `/profile` | Doctor | Get doctor profile |
| POST | `/update-profile` | Doctor | Update doctor profile |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
