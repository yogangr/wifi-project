const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const port = 5000
const baseUrl = `http://localhost:${port}`

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.listen(port, () => {
    console.log(`Server running on ${baseUrl}`)
})