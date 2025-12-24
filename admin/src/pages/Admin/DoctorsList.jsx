import React, { useContext, useEffect } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, changeAvailability, aToken, getAllDoctors } =
    useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  // 🆕 DELETE DOCTOR FUNCTION
  const deleteDoctor = async (doctorId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    )

    if (!confirmDelete) return

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/delete-doctor`,
        { doctorId },
        {
          headers: {
            atoken: localStorage.getItem("atoken"),
          },
        }
      )

      if (data.success) {
        toast.success("Doctor deleted successfully")
        getAllDoctors()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to delete doctor")
    }
  }

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll pt-20">
      <h1 className="text-lg font-medium">All Doctors</h1>

      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="border border-[#C9D8FF] rounded-xl w-56 overflow-hidden cursor-pointer group bg-white"
          >
            {/* FIXED IMAGE CONTAINER */}
            <div className="h-40 w-full bg-[#EAEFFF] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4">
              <p className="text-[#262626] text-lg font-medium">
                {item.name}
              </p>
              <p className="text-[#5C5C5C] text-sm">
                {item.speciality}
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={item.available}
                  onChange={() => changeAvailability(item._id)}
                />
                <p>Available</p>
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteDoctor(item._id)}
                className="mt-3 w-full bg-red-500 text-white text-sm py-1.5 rounded hover:bg-red-600 transition"
              >
                Delete Doctor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
