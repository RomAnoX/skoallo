module.exports = {
  createMessage(parent, { text }, { me, models }) {
    const id = Object.values(models.messages).length + 1;
    const message = { id, text, userId: me.id };

    models.messages[id] = message;
    models.users[me.id].messageIds.push(id);

    return message;
  },

  deleteMessage(parent, { id }, { models }) {
    const { [id]: message, ...otherMessages } = models.messages;

    if (!message) {
      return false;
    }

    models.messages = otherMessages;

    return true;
  }
};
