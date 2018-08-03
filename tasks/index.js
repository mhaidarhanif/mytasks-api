const DATA = {
  counter: 2,
  tasks: [
    {
      id: 1,
      text: "Write first task"
    },
    {
      id: 2,
      text: "Schedule task action"
    },
    {
      id: 3,
      text: "Eat dinner"
    }
  ]
}

const tasks = {
  // GET /tasks
  get: (req, res) => {
    res.status(200).send(DATA.tasks)
  },

  // GET /tasks/:id
  getOneById: (req, res) => {
    const task = DATA.tasks.find(item => {
      return item.id === Number(req.params.id)
    })
    if (task) res.status(200).send(task)
    else
      res.status(404).send({
        message: `Task not found by id ${req.params.id}`
      })
  },

  // POST /tasks
  createOne: (req, res) => {
    DATA.counter += 1

    const newTask = {
      id: DATA.counter,
      text: req.body.text
    }

    DATA.tasks.push(newTask)

    if (newTask) res.status(201).send(newTask)
    else
      res.status(500).send({
        message: `Error cannot create new task`
      })
  },

  // GET /tasks/search?text=first
  search: (req, res) => {
    const text = req.query.text
    const data = DATA.tasks.filter(item => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    })

    if (data) res.status(200).send(data)
    else
      res.status(404).send({
        message: `Search task is not found`
      })
  }
}

module.exports = tasks
