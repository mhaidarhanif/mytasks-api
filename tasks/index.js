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
    ]
}

const tasks = {
    get: (req, res) => {
        res.status(200).send(DATA)
    }
}

module.exports = tasks