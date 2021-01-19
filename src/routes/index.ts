import express from 'express'
import commentsRoutes from './comments'

const app = express.Router()

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use(commentsRoutes)

export default app
