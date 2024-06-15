const { Thought, User } = require('../models');
const { $where } = require('../models/User');

module.exports = {
// Get all thoughts
async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      const thoughtObj = {
        thoughts
      }

      res.json(thoughtObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },


// Get a single thought by Id 
async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


// Post a new thought
async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


// Update a thought 
async updateThought(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      { $set: req.body},
      { new: true, runValidators: true}
    );
    
    if (!thought) {
      return res.status(404).json({ message: 'No thought exists with that ID' });
    }
    res.status(200).json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},

// Delete a thought and remove it from the users thoughts
async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      await User.findOneAndUpdate(
        { _id: req.params.userId },
        {$pull: {thoughts: {thoughtId: req.params.thoughtId}}},
        {new: true, runValidators: true}
    );
      res.json({ message: 'Thought Deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

// Add reaction to thought 
async addReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true}
    );
    
    if (!thought) {
      return res.status(404).json({ message: 'No thought exists with that ID' });
    }
    res.status(200).json({message: 'Reaction Added'});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},

// Delete reaction to thought
async deleteReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {$pull: {reactions: {_id: req.params.reactionId } } },
      { new: true, runValidators: true },
    );

    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json({ message: 'Reaction Deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
},
}