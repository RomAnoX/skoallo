module.exports = {
  hello() {
    return 'Hello World!';
  },
  hi(_, args) {
    return `Hi, ${args.name}`;
  }
};
