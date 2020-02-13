# LAB: OAuth with LinkedIn (12a)

## Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Mongo database for storage.

### Authors: Shubham Majumdar and Earl Jay Caoile

### Links and Resources

- [submission PR](https://github.com/js-401n15-eoc/lab-12a/pull/1)
- [GitHub Actions](https://github.com/js-401n15-eoc/lab-12a/actions)

#### Documentation

- [Auth0 Docs for Adding LinkedIn](https://auth0.com/docs/connections/social/linkedin)
- [LinkedIn Developers](https://www.linkedin.com/developers/)
- [MS Docs Authorization Code Flow](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow#step-2-request-an-authorization-code)

### Setup

#### Configuring MongoDB

- create an .env file on the top level of this repo defining the following variables:

```
PORT=3000
CLIENT_ID=<insert client id here>
CLIENT_SECRET=<insert client secret here>
MONGODB_URI=mongodb://localhost:27017/lab-12a
```

- start your database with the path of the DB along with the folder location for your DB files (`mongod --dbpath=/Users/path/to/data/db`: i.e. `"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="D:\db"`)

#### Tests

- Testing command: `npm test` from root directory
