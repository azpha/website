const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const chalk = require('chalk');
const discord = require('discord.js');

const app = express();

// .use statements
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// GET Endpoints
app.get('/', (req, res) => {
    return res.send({ "status": 200 })
})

// POST Endpoints
app.post('/splitstat/webhook', async (req, res) => {
    if(req.headers['authorization'] === `${process.env.auth}`) {
        try {
            if(req.body.user) {
                const webhookClient = new discord.WebhookClient({ id: process.env.webhookId, token: process.env.webhookToken });

                const user = await axios.get(`https://discord.com/api/users/${req.body.user}`, {
                    method: 'GET',
                    headers: { 'authorization': `Bot ${process.env.token}` }
                })

                await webhookClient.send({
                    content: `Thanks **${user.data.username}#${user.data.discriminator}** for [voting for SplitStat](https://top.gg/bot/868689248218411050/vote) on **Top.gg**!`,
                    username: `SplitStat - Voting!`,
                    avatarURL: `https://cdn.discordapp.com/app-icons/868689248218411050/cfb8eb37a8dcacefc9228d0949667ff1.png`
                })
            } else {
                res.status(500).send({ "stauts": 500, "message": "Incorrect payload sent" })
            }
    
        } catch(err) {
            console.log(chalk.redBright.bold(`API error!`), err)
            return res.status(500).send({ "status": 500, "errors": err.message })
        }
    
        return res.status(200).send({ "status": 200, "message": "Event successfully emitted to Discord" })
    } else {
        res.status(401).send({ "status": 401, "message": "Only top.gg is authorized to post here. Go away." })
    }
})

  app.use(function (req, res, next) {
    res.status(404).send({ "status": 404, "message": `Sorry, that endpoint (${req.path}) does not exist.` })
  })

  app.use(function (error, req, res, next) {
    res.status(500).send({ "status": 500, "message": "Something broke! Looking into it :)" })
  })

app.listen(process.env.PORT, () => {
    console.log(`Started`)
})