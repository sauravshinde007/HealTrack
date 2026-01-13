import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-6 my-20 px-4 md:mx-10'>
            <div className="text-center space-y-2">
                <h1 className='text-4xl md:text-5xl font-bold text-dark tracking-tight'>
                    Top Doctors to <span className="text-transparent bg-clip-text bg-gradient-brand">Book</span>
                </h1>
                <p className='sm:w-2/3 mx-auto text-gray-500 text-lg'>
                    Browse through our verified professionals and schedule your visit instantly.
                </p>
            </div>

            {/* Adjusted Grid: grid-cols-auto or better responsive columns */}
            <div className='w-full grid grid-cols-auto gap-8 pt-10 px-3 sm:px-0'>
                {doctors.slice(0, 8).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }}
                        /* Added max-w-[350px] and mx-auto to prevent over-stretching on mobile */
                        className='group relative bg-white/70 backdrop-blur-md border border-indigo-50 rounded-[2.5rem] p-4 cursor-pointer hover:shadow-2xl hover:shadow-indigo-200/50 hover:-translate-y-2 transition-all duration-500 w-full max-w-[350px] mx-auto'
                    >
                        {/* Doctor Image Container */}
                        <div className="relative h-64 w-full bg-indigo-50 rounded-[2rem] overflow-hidden">
                            <img
                                src={item.image || assets.doctor_icon}
                                alt={item.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Availability Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase backdrop-blur-md shadow-sm ${item.available ? 'bg-green-100/80 text-green-600' : 'bg-gray-100/80 text-gray-500'}`}>
                                <span className="flex items-center gap-1.5">
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                    {item.available ? 'Available' : 'Unavailable'}
                                </span>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className='mt-5 px-2 pb-2'>
                            <p className='text-xs font-bold text-primary uppercase tracking-widest mb-1'>
                                {item.speciality || "General Physician"}
                            </p>
                            <h3 className='text-xl font-bold text-dark group-hover:text-primary transition-colors'>
                                {item.name || "Unknown Doctor"}
                            </h3>
                            <div className="flex items-center gap-2 mt-3">
                                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-lg">
                                    {item.degree || "MBBS"}
                                </span>
                                <span className="text-gray-400 text-xs">
                                    {item.experience || "N/A"}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => { navigate('/doctors'); window.scrollTo(0, 0) }}
                className='mt-12 bg-dark text-white font-bold px-12 py-4 rounded-2xl hover:bg-primary hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300'
            >
                View All Doctors
            </button>
        </div>
    )
}

export default TopDoctors