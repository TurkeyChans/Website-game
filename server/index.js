const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) =>{
    res.json({info: 'test'})
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})