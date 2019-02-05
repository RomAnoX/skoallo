module.exports = `
type Mutation {
  createMessage(text: String!): Message!
  deleteMessage(id: ID!): Boolean!
}
`;
