const mongoose = require("mongoose")
const connectDatabase = () => { 
    const url = process.env.DB_URL 
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then( (con) => {
        console.log('mongeDB connected to host:' +con.connection.host )
    })
}  ;

module.exports = connectDatabase ;
