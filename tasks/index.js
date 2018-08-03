const fs = require("fs")

const DATA_JSON = "../data/index.json"

const file = {
  read: () => {
    const DATA = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"))
    return DATA
  },

  write: NEW_DATA => {
    const DATA_STRING = JSON.stringify(NEW_DATA, null, 2)
    fs.writeFileSync(DATA_JSON, DATA_STRING, "utf8")
  }
}

const tasks = {
  // ---------------------------------------------------------------------------
  // GET /tasks
  get: (req, res) => {
    const DATA = file.read()

    if (DATA) res.status(200).send(DATA.tasks)
    else
      res.status(404).send({
        action: `Get All`,
        message: `Tasks not found`
      })
  },

  // ---------------------------------------------------------------------------
  // GET /tasks/:id
  getOneById: (req, res) => {
    const DATA = file.read()
    const task = DATA.tasks.find(item => {
      return item.id === Number(req.params.id)
    })

    if (task) res.status(200).send(task)
    else
      res.status(404).send({
        action: `Get One`,
        message: `Task not found by id ${req.params.id}`
      })
  },

  // ---------------------------------------------------------------------------
  // POST /tasks
  createOne: (req, res) => {
    const DATA = file.read()
    DATA.counter += 1

    const newTask = {
      id: DATA.counter,
      text: req.body.text
    }

    DATA.tasks.push(newTask)
    file.write(DATA)

    if (newTask) res.status(201).send(newTask)
    else
      res.status(500).send({
        action: `Create One`,
        message: `Error cannot create new task`
      })
  },

  // ---------------------------------------------------------------------------
  // GET /tasks/search?text=first
  searchWithQuery: (req, res) => {
    const DATA = file.read()
    const text = req.query.text
    const data = DATA.tasks.filter(item => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    })

    if (data) res.status(200).send(data)
    else
      res.status(404).send({
        action: `Search`,
        message: `Query is unavailable or task is not found`
      })
  },

  // ---------------------------------------------------------------------------
  // POST /tasks/search
  searchWithBody: (req, res) => {
    const DATA = file.read()
    const text = req.body.text
    const data = DATA.tasks.filter(item => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    })

    if (data) res.status(200).send(data)
    else
      res.status(404).send({
        action: `Search`,
        message: `Task is not found`
      })
  }
}

module.exports = tasks
