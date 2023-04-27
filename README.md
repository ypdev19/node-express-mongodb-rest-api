# Restful API with Node and Express

A basic Restful API just as a practical purpose to get familiar with how node and express work.

## Technologies Used

- NPM 
- NodeJS 
- Express 
- Mongoose
- MongoDB

## Installation

In root directory go with

```bash
npm install
```
and then

```bash
npm start
```

## Insides

- A basic CRUD based on a single entity called "Article"
- The attributes defined for this "Article" entity are: title (String, required), description (String, optional) and published (Boolean, optional)
- A basic unit testing added using Mocha, Sinon and Chai
  
# Endpoints

#### /article
Path | Method | Description
---|---|---
/article | POST | Add a new article
/article/:id | GET | Get article detail
/article/:id | PUT | Update article
/article/:id | DELETE | Delete an article
/articles | GET | get all articles (Allows to filter by title, paging included: page= 0, size=5 as default)
/articles/published | GET | get all published articles

## Contributions

Pull requests are welcome but please open an issue first since i would like to get some inside about what change you're introducing and why.

## License

[MIT](https://choosealicense.com/licenses/mit/)
