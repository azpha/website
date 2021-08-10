const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  })); 

app.get('/', (req, res) => {
    res.send({ "status": 200 })
})

app.get('/demi', (req, res) => {
    res.send(`go away`)
})

app.get(`/tools/discord`, (req, res) => {
    res.send({ "status": "404", "message": "not a get endpoint. shoo."})
})

app.post(`/tools/discord`, (req, res) => {
    try {
    const data = {
        username: `${req.body.disuser}`,
        avatar_url: `${req.body.avimage}`,
        embeds: [
            {
                color: `${req.body.color}`,
                title: `${req.body.title}`,
                description: `${req.body.description}`,
                image: {
                    url: `${req.body.image}`
                }
            }
        ]
    }

    fetch(req.body.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    res.redirect(`https://awexxx.xyz/tools/discord?callback=success`)
    }
    catch(err) {
        res.redirect(`https://awexxx.xyz/tools/discord?callback=fail`)
    }
})

app.get(`/mcw`, (req, res) => {
    res.redirect(`https://mcw.awexxx.xyz/`)
})

app.post(`/tools/mcw/clip`, async (req, res) => {
    var clipLink = req.body.clipLink || 'none';
    var user = req.body.medalUsername || 'none';
    var webhook = req.body.webhook || 'none';
    var caption = req.body.caption || 'none';

    if(clipLink && user && webhook && caption === 'none') {
        console.log(`something wasn't supplied uh oh uwu :3`)
        return res.status(500).send({ "status": 500, "message": 'Your request was invalid! Please make sure all values were filled in!' })
    }

    const data = {
        "username": 'Medal Clip Webhook by Awex',
        "avatar_url": 'https://avatars.githubusercontent.com/u/68027680?v=4',
        "content": `${user} shared via Medal Clip Webhook by Awex!`,
        "embeds": [
            {
                "author": {
                    "name": `Credits to ${user} (https://medal.tv/${user})`,
                    "url": `https://medal.tv/${user}`
                },
                "title": `${caption}`,
                "url": `${clipLink}`,
                "description": "This clip was shared via the [Medal Clip Webhook](https://mcw.awexxx.xyz)",
                "color": "15258703"
            },
        ],
    }

    var resp = await fetch(`${webhook}`, {
        method: `POST`,
        headers: { 'Content-type': `application/json` },
        body: JSON.stringify(data)
    }).then(response => response.json)

        res.status(200).send({ "status": 200, "message": "Clip successfully sent!" })

})

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 3000, () => {
    console.log('on!')
})
