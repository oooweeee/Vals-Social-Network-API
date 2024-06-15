const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
// Get all Users
async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

// Get a single User
async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No student with that ID' })
      }

      res.json({
        user
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


// Create a new User
async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },


// Update a User's info
async updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      {_id: req.params.userId},
      { $set: req.body},
      { new: true, runValidators: true}
    );
    
    if (!user) {
      return res.status(404).json({ message: 'No such student exists' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},

// Delete a User and remove from other user's freinds list
async deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });

    if (!user) {
      return res.status(404).json({ message: 'No such user exists' });
    }

    const userFriends = await User.findOneAndUpdate(
      { friends: req.params.userId },
      { $pull: { friends: req.params.userId } },
      { new: true, runValidators: true}
    );

    if (!userFriends) {
      return res.status(404).json({
        message: 'User deleted, no friends found',
      });
    }

    res.json({ message: 'User successfully deleted and removed from friends list' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},




// Add User to User's friends list 
async addFriend(req, res) {
  console.log('You are adding a friend :)');
  console.log(req.body);

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { new: true, runValidators: true}
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: 'No user found with that ID :(' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},

// Delete User from User's friend's list
async removeFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends:  req.params.friendId } },
      { new: true, runValidators: true}
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: 'No user found with that ID :(' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},
}