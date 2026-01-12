import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true }, // Format: "DD_MM_YYYY"
    slotTime: { type: String, required: true },
    userData: { 
        name: { type: String, default: "Unknown Patient" }, 
        email: { type: String, default: "" }, 
        dob: { type: String, default: "" }, 
        gender: { type: String, default: "Not Selected" },
        image: { type: String, default: "" }
    },
    docData: { 
        name: { type: String, default: "Unknown Doctor" }, 
        email: { type: String, default: "" }, 
        image: { type: String, default: "" }
    },
    amount: { type: Number, required: true },
    date: { type: Number, required: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    paymentId: { type: String, default: "" },
    isCompleted: { type: Boolean, default: false }
})

const appointmentModel = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema)
export default appointmentModel