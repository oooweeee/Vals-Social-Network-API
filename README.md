# Vals-Social-Network-API
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Useing Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)
- [Links](#links)
- [Acknowledgements](#acknowledgements)

## Features

Users: Create, read, update, and delete user profiles.
Thoughts: Create, read, update, and delete user thoughts.
Reactions: Add and remove reactions to thoughts.
Friends: Add and remove friends for a user.

## Requirements

Node.js
Express.js
MongoDB
Mongoose
Nodemon(optional)

## Installation
### Clone the repository:

`git clone git@github.com:oooweeee/Vals-Social-Network-API.git`
`cd Vals-Social-Network-API`

### Install dependencies:

`npm install`
### Set up environment variables:

Create a .env file in the root directory and add your MongoDB connection string:

`MONGODB_URI=your_mongodb_connection_string`

### Start the server:

`npm run start`
The server will start on http://localhost:3001

### API Endpoints
Users
Create a new user:

POST /api/users
Request body:
```
    {
    "username": "SampleUser", 
    "email": "user@example.com"
    }
 ```


Get all users:

GET /api/users
Get a single user by ID:

GET /api/users/:userId 
Update a user by ID:

PUT /api/users/:userId
Request body:

```
    {
     "username": "newUsername",
     "email": "newEmail@example.com"
    }
```
Delete a user by ID:

DELETE /api/users/:userId
Thoughts
Create a new thought:

POST /api/thoughts
Request body:
```
    {
     "thoughtText": "This is a thought",
     "username": "exampleUser",
    }
```
Get all thoughts:

GET /api/thoughts
Get a single thought by ID:

GET /api/thoughts/:thoughtId
Update a thought by ID:

PUT /api/thoughts/:thoughtId
Request body:

```
   {
    "thoughtText": "Updated thought text"
   }
```
Delete a thought by ID:

DELETE /api/thoughts/:thoughtId
Reactions
Add a reaction to a thought:

POST /api/thoughts/:thoughtId/reactions
Request body:

```
    {
     "reactionBody": "This is a reaction",
     "username": "exampleUser"
    }
```

Delete a reaction from a thought:

DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Friends
Add a friend to a user:

POST /api/users/:userId/friends/:friendId
Remove a friend from a user:

DELETE /api/users/:userId/friends/:friendId
Using Insomnia
To test the API using Insomnia:

Import the API specification:

Download the Insomnia.json file from the repository or manually configure the endpoints as described above.
Set the base URL:

Make sure the base URL is set to http://localhost:3001.
Create requests:

Use the endpoints and request bodies provided in the "API Endpoints" section to create and test various requests.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss potential changes.

## License
MIT License

Copyright (c) 2024 oooweeee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Acknowledgements
I want to acknowledge my tutor, classmates and the TA's for working with me to help get this assignement completed. I am incredibly thankful to them for spending the time and effort to make this back-end work.

## Contact
For any questions or concerns, please contact

My github repository: 
https://github.com/oooweeee/Vals-Social-Network-API

Walkthrough Video:
coming soon
