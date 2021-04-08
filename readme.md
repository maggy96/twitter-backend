# Twitter backend

This is a twitter clone; aimed to showcase a nodejs backend.

Check out the [frontend](https://github.com/maggy96/twitter-frontend).

## Prerequisites
You need a running mongodb instance for persistance. You can change the configuration under `src/util/mongodb.ts` and change the connection details in `.env`.

## Available Scripts
In the project directory, you can run: 
- `yarn start` to run a development server
- `yarn build` to create a production build
- `yarn lint` to run eslint
- `yarn seed` to seed the database

## Technologies
- MongoDB
- TypeScript
- express
