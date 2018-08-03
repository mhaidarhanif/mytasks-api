const root = {
    get: (req, res) => {
        res.status(200).send({
            message: "MyTasks API",
            endpoints: {
                tasks: "/tasks"
            }
        })
    }
}

module.exports = root