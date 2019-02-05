module.exports = `
type Query {
  users: [User!]
  user(id: ID!): User
  me: User

  messages: [Message!]!
  message(id: ID!): Message!
}
`;
