const express = require('express')
const app = express()
const port = 3000

const axios = require('axios')

const api_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/:region/summoner/:summonerName', (req, res) => {
    const region = req.params.region
    const summonerName = req.params.summonerName

    const url = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + api_key

    axios.get(url)
        .then((response) => {
            res.send(response.data)
        })
        .catch((error) => {
            console.log(error)
            res.send('error')
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
