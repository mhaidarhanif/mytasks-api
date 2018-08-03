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
        message: `Task not found`
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
  }
}

module.exports = tasks
