const mongoose = require("mongoose")


const  connectdb = async() => {
    try {
        const connect = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/Reactdb?retryWrites=true&w=majority")
        console.log("congratulations, your database is well connected")
    }
        
     catch (error) {
        console.log(error)
        
    }
}

module.exports = connectdb