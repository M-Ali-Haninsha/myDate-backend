const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstTime: {
        type: Boolean,
        value: true,
        required: true
    },
    preferences:[
        {
            sport: {
                type: String,
            },
            movie: {
                type: String
            },
            music: {
                type: String
            },
            Hobby: {
                type: String
            }
        }
    ],
    About: {
        type: String
    }
})


const userData = mongoose.model('userData', userSchema)
module.exports = userData