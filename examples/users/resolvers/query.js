module.exports = {
  me(parent, args, { me }) {
    return me;
  },
  user(parent, { id }, { models }) {
    return models.users[id];
  },
  users(parent, args, { models }) {
    return Object.values(models.users);
  },
  messages(parent, args, { models }) {
    return Object.values(models.messages);
  },
  message(parent, { id }, { models }) {
    return models.messages[id];
  }
};
