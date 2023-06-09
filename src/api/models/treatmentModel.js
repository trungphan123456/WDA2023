const mongoose = require('mongoose')

const treatmentSchema = mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        treatmentDay: {
            type: Date,
            required: true,
        },
        symptom: {
            type: String,
            required: true,
        },
        diagnosis: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: false
        },
        // patientRecordID: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "PatientRecord"
        // },
    },
    {
        timestamps: true
    }
)

const Treatment = mongoose.model('Treatment', treatmentSchema)

module.exports = Treatment