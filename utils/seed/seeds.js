const mongoose = require('mongoose');
const { User, Thought} = require('../../models');

mongoose.connect('mongodb://127.0.0.1:27017/SocialNetworkdb') 
.then( () => {
    console.log('Mongo Connection Open');
}).catch((err) => {
    console.log(err)
});

const seedThoughts = [
    {
        "thoughtText": "why is this so hard? I am so confused.",
        "username": "2swiftfortaylor"
    },
    {
        "thoughtText": "im so excited for the new season of the bachelor! I hope he finds love this time!",
        "username": "thebachelorfan"
    },
    {
        "thoughtText": "how do you make a grilled cheese sandwich? I am so hungry!",
        "username": "cheeselover"
    },
    {
        "thoughtText": "what did you think i would do at this moment? when you're standing before me with tears in your eyes trying to tell me that you found you another...and you just don't love me no more?",
        "username": "TheRealBrianGriffin"
    }
    ]
const seedUsers = [
    {
        "username": "2swiftfortaylor",
        "email": "2Swift@swifty.com"
    },
    {
        "username": "MR.poopy",
        "email": "meseeks@gmail.com"
    },
    {
        "username": "PiratesOfThePancreas",
        "email": "KingFlippyNips@gmail.com"
    },
    {
        "username": "galacticfederation",
        "email": "TheGFeds@gmail.com"
    }
    ]

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    console.log('Users Seeded');
    await Thought.deleteMany({});
    await Thought.insertMany(seedThoughts);
    console.log('Thoughts Seeded');
};

seedDB().then(() => {
    mongoose.connection.close()
})