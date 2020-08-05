import dotenv from 'dotenv-safe'
dotenv.config({
  path: `${__dirname}/.env.test`,
  sample: `${__dirname}/.env.example`,
  allowEmptyValues: true
})
