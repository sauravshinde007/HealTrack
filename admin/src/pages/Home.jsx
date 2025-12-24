import React from 'react'

const Home = () => {
  return (
    <div className="pt-20 px-6 w-full">
      <div className="max-w-4xl mx-auto">
        
        <div className="rounded-3xl border bg-white/70 backdrop-blur-lg shadow-sm p-10">
          <h1 className="text-3xl font-semibold mb-2">
            Welcome to HealTrack
          </h1>

          <p className="text-gray-600 mb-8">
            A centralized system to manage appointments, schedules, and clinical workflows efficiently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6 hover:shadow-md transition">
              <h2 className="text-lg font-medium mb-1">Dashboards</h2>
              <p className="text-sm text-gray-500">
                View insights, appointments, and daily activity from your dashboard.
              </p>
            </div>

            <div className="rounded-2xl border p-6 hover:shadow-md transition">
              <h2 className="text-lg font-medium mb-1">Appointments</h2>
              <p className="text-sm text-gray-500">
                Manage bookings, schedules, and patient interactions.
              </p>
            </div>

            <div className="rounded-2xl border p-6 hover:shadow-md transition">
              <h2 className="text-lg font-medium mb-1">Doctors</h2>
              <p className="text-sm text-gray-500">
                Access doctor profiles, availability, and performance.
              </p>
            </div>

            <div className="rounded-2xl border p-6 hover:shadow-md transition">
              <h2 className="text-lg font-medium mb-1">Profile</h2>
              <p className="text-sm text-gray-500">
                Keep your professional information up to date.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
