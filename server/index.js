const express = require('express')
const app = express()
const port = 3000
const dotenv= ('dotenv')
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
  })

}

console.log(`connected to momgodb`)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})