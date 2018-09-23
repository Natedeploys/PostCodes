# PostCodes

A full stack web single page application, using MERN stack but with MySQL.

## Built With

- [React](https://reactjs.org/) - Front-End Framework
- [Redux](https://redux.js.org/) - Front-End Framework State Container
- [Node.js](https://nodejs.org/en/) - Back-End
- [Express](https://expressjs.com/) - Back-End Framework
- [MySQL](https://www.mysql.com/) - Database
- [Docker](https://www.docker.com/) - Running and Deployment

## Requirements

```
1. You will need Docker to run this application
2. You will need a Google Developer API key with Javascripts Map API and Geocoding API enabled
3. Build with schema that matches dataset
4. Upon initial build of application (Next section, step 3) connect to the SQL database and populate with csv data found in the csv folder using your preferred SQL Client or method
```

## Run

```
1. Git Clone Repository.
2. Inside client/src/config/keys.js add your Google API key
3. Run docker-compose up --build at the root folder
4. Exit docker-compose (ctrl-d) once built
5. Run docker-compose up again
6. Access at localhost:3050 
```

