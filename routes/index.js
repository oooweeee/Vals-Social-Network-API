const router = require('express').Router(); //this is importing the router funsction from express to create a new router object
const apiRoutes = require('./api'); //this is importing the api routes from the api folder
router.use('/api', apiRoutes); // middleware to use the imported API routes for any request that uses the /api.

router.use((req, res) => { // Middlewarr for handling request that dont match any routes defined above
  return res.send('Wrong route!'); // this will send a response indicationg the request route is incorrect
});

module.exports = router;
