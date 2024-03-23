const request = require('request-promise')

const getJoke = async () => {
    const res = await request('https://icanhazdadjoke.com', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "User-agent": 'github action test'
        },
        json: true,
    })
    return res.joke
}

module.exports = getJoke