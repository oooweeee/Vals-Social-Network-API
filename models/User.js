const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
{
    username: {
      type: String, // Specifies the data type for username as String.
      unique: true, // Ensures username values are unique across documents.
      required: true, // Makes the username field mandatory.
      trim: true, // Trims whitespace from the username value.
    },
    email: {
      type: String, // Specifies the data type for email as String.
      required: true, // Makes the email field mandatory.
      unique: true, // Ensures email values are unique across documents.
      trim: true, // Trims whitespace from the email value.
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] // Validates the email address against a regular expression pattern.
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }], // Defines a relation to the Thought model, allowing an array of Thought document IDs.
    friends : [{ type: Schema.Types.ObjectId, ref: 'user' }], // Defines a relation to the User model itself, allowing an array of User document IDs for friends.
  },
  {
    toJSON: {
      getters: true, // Enables the use of getters.
      virtuals: true, // Ensures virtual fields are included in the output when converting the document to JSON.
    },
    versionKey: false // Disables the __v field that Mongoose uses to track document revisions.
  }
);

userSchema.virtual('friendCount').get(function () { // Defines a virtual property 'friendCount' that is not stored in MongoDB but calculated on the fly.
      return this.friends.length;
    });
    
  
  const User = model('user', userSchema);
  
  module.exports = User;