import mongoose from "mongoose"
let dbConnection = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Sales").then(() => {
    console.log("database connection ...")
  }).catch((err) => {
    console.log(err)
  })
}
export default dbConnection