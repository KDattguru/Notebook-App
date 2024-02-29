
const mongoose = require('mongoose');
const  mongoURI="mongodb://localhost:27017/notebook"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connection Established");
});
    
}


module.exports = connectToMongo;

