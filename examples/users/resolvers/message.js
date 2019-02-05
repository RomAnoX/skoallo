module.exports = {
  user(message, args, { models }) {
    return models.users[message.userId];
  }
};
