# MyTasks API

<p align="center">
    <a href="https://mytasks-api.mhaidarhanif.com">
        <img src="./images/mytasks-logo.png" alt="MyTasks logo" height="80">
        <h3 align="center">MyTasks API</h3>
    </a>
    <p align="center">A simple task management API
        <br>
        <a href="https://mytasks-api.mhaidarhanif.com">
            <strong>Try MyTasks API version »</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/mhaidarh/mytasks-api/issues/new?template=bug.md">Report bug</a> ·
        <a href="https://github.com/mhaidarh/mytasks-api/issues/new?template=feature.md&labels=feature">Request feature</a> ·
        <a href="https://mhaidarhanif.com">Author</a> ·
        <a href="https://impactbyte.com">Company</a>
    </p>
</p>

## Features

- Get all tasks
- Get one task by id
- Create new task
- Search existing task
  - with query
  - with request body

---

## REST API Specification

| Endpoint        | HTTP     | Description            |
| --------------- | -------- | ---------------------- |
| `/tasks`        | `GET`    | Get all tasks          |
| `/tasks/:id`    | `GET`    | Get one task           |
| `/tasks`        | `POST`   | Create new task        |
| `/tasks`        | `DELETE` | Destroy all tasks      |
| `/tasks/:id`    | `DELETE` | Destroy one task       |
| `/tasks/:id`    | `PUT`    | Update one task        |
| `/tasks/search` | `GET`    | Search task with query |

---

## Development

### Node.js

```sh
npm install
npm run dev
```

```sh
> mytasks-api@x.y.z dev /home/username/path/to/mytasks-api
> node-dev index

MyTasks API is listening on localhost:3000
```

Access the app on `localhost:3000` via:

- `curl`: <https://curl.haxx.se>
- `httpie`: <https://httpie.org>
- `postman`: <https://getpostman.com>
- `insomnia`: <https://insomnia.rest>

---

## Production

```sh
npm install
npm start
```

---

## Deployment

### Heroku

```sh
heroku create
git push heroku master
heroku open
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

---

## Meta

### License

[MIT License](./LICENSE)

### Code of Conduct

[Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md)
