const users = {
  1: {
    id: '1',
    username: 'Pedro Infante'
  },
  2: {
    id: '2',
    username: 'Sylvia Pinal'
  }
};

const me = users[1];

module.exports = {
  me() {
    return me;
  },
  user(parent, { id }) {
    return users[id];
  },
  users() {
    return Object.values(users);
  }
};
