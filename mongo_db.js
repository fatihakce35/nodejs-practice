import mongoose from "mongoose"

const connection = () => {
    mongoose.connect(process.env.mongo_key, {
        dbName: "fatihbey",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Has been connected to db fatihbey")
    }).catch(err => console.log(err))
}

export default connection
