const router = require('express').Router(); // Importing Router function from express to create a new router object.

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controllers');// Importing controller functions for thought operations.

// Route for getting all thoughts and creating a new thought.

// /api/thoughts
router.route('/')
.get(getThoughts) //GET request to retrieve all thoughts.
.post(createThought); // POST request to create a new thought.

// /api/thoughts/:thoughtId
// Route for operations on a single thought identified by thoughtId.
router
  .route('/:thoughtId') // Using route parameter 'thoughtId' to identify a specific thought.
  .get(getSingleThought) // GET request to retrieve a single thought by its ID.
  .put(updateThought) // PUT request to update a thought by its ID.
  .delete(deleteThought); // DELETE request to remove a thought by its ID.

  // Route for adding a reaction to a thought.
  router.route('/:thoughtId/reactions')
  .post(addReaction); // POST request to add a reaction to a thought identified by thoughtId.

// Route for deleting a reaction from a thought.
  router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction); // DELETE request to remove a reaction identified by reactionId from a thought identified by thoughtId.

module.exports = router; // Exporting the router object for use in other parts of the application.