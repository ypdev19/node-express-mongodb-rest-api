# Restful API with Node and Express

A basic Restful API just as a practical purpose to get familiar with how node and express work.

## Technologies Used

- NPM 
- NodeJS 
- Express 
- Mongoose
- Mongoose paginate v2
- MongoDB

## Installation

### Install dependencies

To install dependencies got to root directory and execute

```bash
npm install
```

### Database and port configuration

In root directory create a ```.env``` file and add the property ```DATABASE_URL```

You could also add ```PORT``` (only if you need it to run on a specific port)

You can check the configuration for this on ```db.config.js``` in ```config``` folder, if a port is not specified, it will run on 8080 by default.

If you don't want/need to use the ```.env``` file then just edit the ```db.config.js``` as you need.

### To run the API execute

```bash
npm start
```

### To run the tests

On test folder execute

```bash
npm test
```

## Insides

- A basic CRUD based on a single entity called "Article"
- The attributes defined for this "Article" entity are: title (String, required), description (String, optional) and published (Boolean, optional)
- Project structure is:
    - entity (where the entity/object is located)
    - service (all the business logic)
    - controller (the actual API routing) 
  
## Endpoints

### /article

Path | Method | Description
---|---|---
/article | POST | Add a new article
/article/:id | GET | Get article detail
/article/:id | PUT | Update article
/article/:id | DELETE | Delete an article
/articles | GET | get all articles (Allows to filter by title, paging included: page= 0, size=5 as default)
/articles/published | GET | get all published articles

## Tests

Technologies used: ```mocha```, ```chai``` and ```sinon```

Just 3 basic tests added just to get familiar about how tests are done:

- Add an article
- Get Article detail info based on the given ID
- Return an error if there is no article found with provided ID

## License

[MIT](https://choosealicense.com/licenses/mit/)
