# My personnal website

You are visiting the source code of my full stack portfolio website.
I built it with the mindset of it being scalable, readable and easy to deploy / maintain.

## Backend

The backend is built with Go.

I use [GIN](https://github.com/gin-gonic/gin) and [GIN CORS](https://github.com/gin-contrib/cors) libraries to help me create a REST API

[GORM](https://gorm.io/) is used to store data in a SQLite database.

### Structure

```
├── apps        --> Applications
├── config      --> Shared configurations
├── senders     --> API responses
└── server      --> Server configuration
```

Each app have it's own folder conatining 3 files :
```
├── controller.go   --> Defines logic for each route
├── model.go        --> Defines database model
└── routes.go       --> Defines routes
```

## Frontend