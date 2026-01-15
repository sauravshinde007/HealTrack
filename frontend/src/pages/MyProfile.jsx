import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return userData ? (
        <div className='max-w-4xl flex flex-col gap-6 text-sm pt-20 mb-20 mt-10'>
            
            {/* --- Profile Card Section --- */}
            <div className='bg-white/70 backdrop-blur-md border border-indigo-50 p-8 rounded-[2.5rem] shadow-xl shadow-indigo-100/50 flex flex-col md:flex-row gap-8 items-start'>
                
                {/* Image Section */}
                <div className='flex flex-col items-center gap-4'>
                    {isEdit
                        ? <label htmlFor='image' className='relative cursor-pointer group'>
                            <div className='w-40 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-md'>
                                <img className='w-full h-full object-cover opacity-75 group-hover:opacity-50 transition-opacity' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                                <img className='w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity' src={assets.upload_icon} alt="" />
                            </div>
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                        </label>
                        : <div className='w-40 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-md'>
                            <img className='w-full h-full object-cover' src={userData.image} alt="" />
                          </div>
                    }
                </div>

                {/* Content Section */}
                <div className='flex-1 w-full'>
                    {isEdit
                        ? <input className='bg-indigo-50/50 text-4xl font-bold rounded-2xl px-4 py-2 w-full outline-primary border border-indigo-100' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                        : <h1 className='font-bold text-4xl text-dark mb-2'>{userData.name}</h1>
                    }
                    
                    <div className='w-20 h-1.5 bg-gradient-brand rounded-full mt-4 mb-8'></div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8'>
                        
                        {/* Contact Info */}
                        <div>
                            <p className='text-primary font-bold tracking-widest text-xs uppercase mb-4'>Contact Information</p>
                            <div className='space-y-4'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-400 font-medium'>Email Address</p>
                                    <p className='text-dark font-semibold'>{userData.email}</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-400 font-medium'>Phone Number</p>
                                    {isEdit
                                        ? <input className='bg-indigo-50/50 rounded-xl px-3 py-2 outline-primary border border-indigo-100' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                                        : <p className='text-dark font-semibold'>{userData.phone || "Not Added"}</p>
                                    }
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-400 font-medium'>Address</p>
                                    {isEdit
                                        ? <div className='space-y-2'>
                                            <input className='bg-indigo-50/50 rounded-xl px-3 py-2 w-full outline-primary border border-indigo-100' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                                            <input className='bg-indigo-50/50 rounded-xl px-3 py-2 w-full outline-primary border border-indigo-100' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} />
                                          </div>
                                        : <p className='text-dark font-semibold'>{userData.address.line1} <br /> {userData.address.line2}</p>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div>
                            <p className='text-primary font-bold tracking-widest text-xs uppercase mb-4'>Basic Information</p>
                            <div className='space-y-4'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-400 font-medium'>Gender</p>
                                    {isEdit
                                        ? <select className='bg-indigo-50/50 rounded-xl px-3 py-2 outline-primary border border-indigo-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        : <p className='text-dark font-semibold'>{userData.gender || "Not Selected"}</p>
                                    }
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-400 font-medium'>Birthday</p>
                                    {isEdit
                                        ? <input className='bg-indigo-50/50 rounded-xl px-3 py-2 outline-primary border border-indigo-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                                        : <p className='text-dark font-semibold'>{userData.dob || "Not Selected"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='mt-12 flex gap-4'>
                        {isEdit
                            ? <button onClick={updateUserProfileData} className='bg-gradient-brand text-white px-10 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all'>Save Changes</button>
                            : <button onClick={() => setIsEdit(true)} className='border-2 border-primary text-primary px-10 py-3 rounded-2xl font-bold hover:bg-indigo-50 transition-all'>Edit Profile</button>
                        }
                        {isEdit && <button onClick={() => setIsEdit(false)} className='bg-gray-100 text-gray-600 px-10 py-3 rounded-2xl font-bold hover:bg-gray-200 transition-all'>Cancel</button>}
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default MyProfile