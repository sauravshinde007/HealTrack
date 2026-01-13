import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className="mx-4 sm:mx-[10%]">
      <p className='text-gray-600 mt-20 pt-10 font-medium'>Browse through the doctors specialist.</p>
      
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 mb-20'>
        
        {/* Filter Sidebar */}
        <button 
          onClick={() => setShowFilter(!showFilter)} 
          className={`py-1 px-3 border rounded-xl text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white border-primary' : 'bg-white border-indigo-100 text-gray-600'}`}
        >
          Filters
        </button>

        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} min-w-max`}>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => (
            <p 
              key={spec}
              onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)} 
              className={`w-[94vw] sm:w-60 pl-4 py-2.5 pr-16 border border-indigo-50 rounded-2xl transition-all cursor-pointer hover:bg-indigo-50 ${speciality === spec ? 'bg-indigo-100 text-primary font-bold border-indigo-100' : 'bg-white/50'}`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Revamped Card Grid */}
        <div className='w-full grid grid-cols-auto gap-8 gap-y-10'>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }}
              /* Added max-w-[350px] and mx-auto to prevent stretching on mobile */
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
                  {item.speciality}
                </p>
                <h3 className='text-xl font-bold text-dark group-hover:text-primary transition-colors'>
                  {item.name}
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

      </div>
    </div>
  )
}

export default Doctors