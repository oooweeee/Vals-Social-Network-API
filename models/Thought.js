const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

// schema for Thought
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: [1, 'this is interesting is it not?'], 
            maxlength: 280, 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(new Date(timestamp))
        },
        username: {
            type: String,
            required: true,
            maxLength: 80,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        versionKey: false,
    }
);
// get total count of reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
// create the Thought model using the ThoughtSchema
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
