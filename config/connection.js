const { connect, connection} = require('mongoose');

const connnectionString = 'mongodb://localhost:27017/SocialNetworkdb';

connect(connnectionString);

module.exports = connection;