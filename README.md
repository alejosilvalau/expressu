# ExpressU

![ExpressU](register.gif)
![ExpressU](write.gif)
![ExpressU](log_out.gif)

## Summary

This is a blog app that let you post daily updates of your life, your stories, or everything that you would like to share with others:

- Share an interesting story
- A fan fiction adventure
- A cooking recipe
  And more...

The back end is deployed on Heroku, and the front end is on Netlify, and uses the PERN stack.

- [ExpressU](#ExpressU)
  - [Summary](#summary)
- [Usage](#usage)
  - [Scripts](#scripts)
  - [Front end](#front-end)
  - [Testing](#testing)
- [License](#license)

## Prerequisites

Please install or have installed the following:

- [nodejs and npm](https://nodejs.org/en/download/)
- [postgresql](https://postgresapp.com/)

# Usage

## Extra steps

1. First, complete all the ".env" variables available and decide to run the project wheater on "development" or "production"
2. Create the tables on the database. Opening "psql" on the terminal and copying the commands from the ".sql" file

## Back end

3. ```bash
   cd server
   npm start
   ```

## Front end

4. ```bash
   cd client
   yarn start
   ```

# License

This project is licensed under the [MIT license](LICENSE).
