import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Spendflow API is running!🚀')
})

app.get('/health', (req, res) => {
    res.send('Spendflow server is healthy!')
})

export default app