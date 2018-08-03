const express = require("express")
const bodyParser = require("body-parser")
const os = require("os")

// -----------------------------------------------------------------------------

const root = require("./root")
const tasks = require("./tasks")

// -----------------------------------------------------------------------------

const app = express()
const HOST = process.env.HOST || os.hostname()
const PORT = process.env.PORT || 3000

// -----------------------------------------------------------------------------

app.use(bodyParser.json())

// -----------------------------------------------------------------------------

app.get(`/`, root.get)

app.get(`/tasks`, tasks.get)
app.get(`/tasks/:id`, tasks.getOneById)
app.post(`/tasks`, tasks.createOne)

// -----------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`MyTasks API is listening on ${HOST}:${PORT}`)
})
