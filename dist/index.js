const {join} = require('path')
const express = require('express')
const app = express()
app.use(express.static('public'));

app.get('/help', (_, res) => {
    res.status(200).send("I'm alive~")
})

app.all('*', (_, res) => {
    res.status(404).sendFile(join(__dirname, '404.html'))
})

app.listen(process.env.PORT || 3000, () => console.log('EasyQR is running'))