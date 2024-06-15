const { Schema, Types } = require('mongoose');
const newDate = require('../utils/dateFormat')

// Reaction Schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => newDate(timestamp)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    versionKey: false
  }
);

module.exports = reactionSchema;
