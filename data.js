const contacts = [
    {
        'name': 'Violet Hamilton',
        'image': 'https://randomuser.me/api/portraits/women/85.jpg',
        'last_chat': [
            {
                'date': '8:45 PM',
                'message': '7127 Hickory Creek Dr'
            }
        ]
    },

    {
        'name': 'Isaiah Wade',
        'image': 'https://randomuser.me/api/portraits/men/39.jpg',
        'last_chat': [
            {
                'date': '8:00 PM',
                'message': '5538 Avondale Ave'
            }
        ]
    },

    {
        'name': 'Minnie Fisher',
        'image': 'https://randomuser.me/api/portraits/women/8.jpg',
        'last_chat': [
            {
                'date': '1:27 PM',
                'message': '5482 Oak Ridge Ln'
            }
        ]
    }
]

const chats = [
    [
        {
            'user': {
                'name': 'Violet Hamilton',
                'image': 'https://randomuser.me/api/portraits/women/85.jpg'
            },
            'chat': {
                'date': '8:45 PM',
                'message': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, corrupti suscipit? Id, eum. Culpa, deleniti placeat distinctio officiis ex veniam quibusdam modi vitae velit quod odio porro nisi. Corrupti, excepturi?'
            }
        },
    
        {
            'user': {
                'name': 'Isaiah Wade',
                'image': 'https://randomuser.me/api/portraits/men/39.jpg'
            },
            'chat': {
                'date': '8:00 PM',
                'message': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, corrupti suscipit? Id, eum. Culpa, deleniti placeat distinctio officiis ex veniam quibusdam modi vitae velit quod odio porro nisi. Corrupti, excepturi?'
            }
        }
    ],

    [
    ],

    [
        {
            'user': {
                'name': 'Minnie Fisher',
                'image': 'https://randomuser.me/api/portraits/women/8.jpg'
            },
            'chat': {
                'date': '1:27 PM',
                'message': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, corrupti suscipit? Id, eum. Culpa, deleniti placeat distinctio officiis ex veniam quibusdam modi vitae velit quod odio porro nisi. Corrupti, excepturi?'
                }
        }
    ]
]

module.exports.contacts = contacts;
module.exports.chats = chats;