import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.set('port', process.env.PORT || 8000)

export default app