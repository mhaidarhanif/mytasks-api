const package = require("../package.json")

const root = {
  get: (req, res) => {
    res.status(200).send({
      name: package.name,
      description: package.description,
      version: package.version,
      keywords: package.keywords,
      endpoints: {
        tasks: "/tasks",
        accounts: "/accounts"
      }
    })
  }
}

module.exports = root
