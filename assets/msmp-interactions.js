const data = [
    {
        name: 'ping',
        description: 'Replies with bot/Discord API ping.',
    },
    {
        name: 'status',
        description: 'Replies with server status.',
    },
    {
        name: 'modpack',
        description: 'Sends a link to the modpack download.'
    },
    {
        name: 'clip',
        description: 'Sends a random clip from the Medal #medalsmp tag.'
    },
    {
        name: 'demi',
        description: 'Sends Demi a random message.. if you even are demi..'
    },
    {
        name: 'help',
        description: 'Get help from the bot!',
        options: [{
            name: 'embed',
            type: 'STRING',
            description: 'The type of embed you need',
            required: true,
            choices: [
                {
                    name: 'General Bot Help',
                    value: 'help_vanilla',
                },
                {
                    name: 'Server Commands',
                    value: 'help_modded',
                },
            ],
        }],
    },
    {
        name: 'coinflip',
        description: 'Get a random response of heads or tails!'
    },
    {
        name: '8ball',
        description: 'Get a random 8-ball response!'
    }
];