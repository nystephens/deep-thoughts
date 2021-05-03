// import the gql tagged template function
const { gql } = require('apollo-server-express');
// const { User, Thought } = require ('../models');


// create our TypeDefs
const typeDefs = gql`

type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}

type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}

type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    frineds: [User]
}

type Query {
    users: [User]
    user(username: String!): User
    thought(username: String): [Thought]
    thought(_id: ID!): Thought
}`;

// export the TypeDefs
module.exports = typeDefs;