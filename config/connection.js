const { connect, connection} = require('mongoose');

const connnectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';

connect(connnectionString);

module.exports = connection;