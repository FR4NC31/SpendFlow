import express from 'express'
import cors from 'cors'
import authRouter from './routes/user.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Spendflow API is running!🚀')
})

app.get('/health', (req, res) => {
    res.send('Spendflow server is healthy!')
})

//routes
app.use('/api/auth', authRouter)

export default app