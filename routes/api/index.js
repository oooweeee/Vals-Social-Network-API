const router = require('express').Router(); // Importing Router function from express to create a new router object.
const userRoutes = require('./user-routes'); // Importing user routes from the 'user-routes.js' file.
const thoughtRoutes = require('./thought-routes'); // Importing thought routes from the 'thought-routes.js' file.

router.use('/users', userRoutes); // Assigning the userRoutes to handle any requests that start with '/users'.
router.use('/thoughts', thoughtRoutes); // Assigning the thoughtRoutes to handle any requests that start with '/thoughts'.

module.exports = router; // Exporting the router object so it can be used in other parts of the application.