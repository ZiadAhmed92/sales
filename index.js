import express from 'express'

import authRouter from './src/modules/auth/auth.router.js'
import dbConnection from './database/dbConnection.js'
import { globalError } from './src/utils/globalError.js'
import productRouter from './src/modules/product/product.router.js'
const app = express()
const port = 3000

dbConnection()
// app.use(express.static("uploads"))
app.use(express.json())
app.use("/user", authRouter)
app.use("/product", productRouter)


app.all("*", (req, res) => res.json({ message: `Can't Find This Route : ${req.originalUrl}` }))
app.use(globalError)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

process.on('unhandledRejection', (err) => {
  console.log("unhandledRejection :- " + err)
})