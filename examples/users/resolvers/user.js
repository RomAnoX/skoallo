module.exports = {
  messages(user, args, { models }) {
    return Object.values(models.messages).filter(
      message => message.userId === user.id
    );
  }
};
