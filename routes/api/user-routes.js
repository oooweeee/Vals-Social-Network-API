const router = require('express').Router(); // Importing Router function from express to create a new router object.
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controllers'); // Importing controller functions for user operations.
 // /api/users
// Route for getting all users and creating a new user.
router.route('/')
  .get(getUsers) // GET request to retrieve all users.
  .post(createUser); // POST request to create a new user.
// /api/users/:userId
// Route for operations on a single user identified by userId.
router.route('/:userId')
  .get(getSingleUser) // GET request to retrieve a single user by their ID.
  .put(updateUser) // PUT request to update a user by their ID.
  .delete(deleteUser); // DELETE request to remove a user by their ID.
// /api/users/:userId/friends
// Route for adding a friend to a user's friend list.
router.route('/:userId/friends')
  .post(addFriend); // POST request to add a friend to the user identified by userId.
// /api/users/:userId/friends/:friendId
// Route for removing a friend from a user's friend list.
router.route('/:userId/friends/:friendId')
  .delete(removeFriend); // DELETE request to remove a friend from the user identified by userId.

module.exports = router; // Exporting the router object for use in other parts of the application.
