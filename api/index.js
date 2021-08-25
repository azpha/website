const app = require('express')();
const { static } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const puppeteer = require('puppeteer');
const dom = require('jsdom');
const NodeCache = require('node-cache');
const math = require('mathjs')
require('dotenv').config();

const cache = new NodeCache();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
  })); 

  timer = false;
  global = {}

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

app.get('/browser/medal', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
  socket.on('event', msg => {
    io.emit('event', msg);
  });
});

app.post(`/browser/medal/alert`, async (req, res) => {
    const header = req.header(`secret`)

    if(header === `${process.env.access}`) {
        timer = true;
        res.send({ "status": 200, "message": "Started listening to Medal's API." })

        interval = setInterval(async function() {
            var medalApiData = await fetch(`${process.env.medalapi}/24378`, {
                method: 'GET',
                headers: { 'x-authentication': `${process.env.medalauth}` }
            }).then(response => response.json());
    
        try {
            if(cache.has('uniqueKey')) {
                if (medalApiData.followers === cache.get('uniqueKey')) {
                    return console.log(`User hasn't gained followers, not firing.` + `\nCache: ${cache.get('uniqueKey')} & Medal API: ${medalApiData.followers}.`);
                } else if (medalApiData.followers > cache.get('uniqueKey')) {
                    console.log(`More followers than before`, `${medalApiData.followers} vs ${cache.get('uniqueKey')}`)
                    var arrayNum = math.subtract(medalApiData.followers, 13)
                    obj = Object.keys(medalApiData.userFollowers)[arrayNum]
                    await getFollowerInfo(obj)
                    io.emit('event', global.follower);
                    return cache.set('uniqueKey', medalApiData.followers)
                } else if (medalApiData.followers < cache.get('uniqueKey')) {
                    console.log(`User lost followers.`, `Cache: ${cache.get('uniqueKey')} & Medal API: ${medalApiData.followers}.`)
                    return cache.set('uniqueKey', medalApiData.followers)
                }
            } else {
                console.log(`User wasn't cached at all.`)
                return cache.set(`uniqueKey`, medalApiData.followers)
            }
        }
        catch(err) {
            console.log(err)
        }
    }, 10*60000)
    } else {
        return res.status(401).send({ "status": 401, "message": "401 Not Authorized. Access Token Header missing" })
    }
})

app.get(`/browser/medal/test`, (req, res) => {
    var header = req.query.secret

    if(header === `${process.env.access}`) {
        const follower = `poggers`
        io.emit('event', follower);
    
        return res.send({ "status": 200, "message": "Event successfully emitted" })
    } else {
        return res.status(401).send({ "status": 401, "message": "401 Not Authorized. Access Token Header missing" })
    }
})

app.get(`/browser/medal/stop`, (req, res) => {
    var header = req.header(`secret`)
    if(header === `${process.env.access}`) {
        clearInterval(interval)
        return res.send({ "status": 200, "message": "Interval successfully cleared" })
    } else {
        return res.status(401).send({ "status": 401, "message": "401 Not Authorized. Access Token Header missing" })
    }
})

app.get('/browser/medal/activity', (req, res) => {
    if (timer === true) {
        return res.status(200).send({ "status": 200, "active": true, "message": "The Medal API Check Timer is ACTIVE." })
    } else if (timer === false) {
        return res.status(200).send({ "status": 200, "active": false, "message": "The Medal API Check Timer is NOT ACTIVE."})
    }
})

async function getFollowerInfo(follower) {

    var follower = await fetch(`${process.env.medalapi}/${follower}`, {
        method: 'GET',
        headers: { 'x-authentication': `${process.env.medalauth}` }
    }).then(response => response.json());

    global.follower = follower.userName
}

http.listen(process.env.PORT, () => {
    console.log(`Socket.IO server running at https://api.awexxx.xyz`);
  });
