/* eslint-env node */
const users = require('./users.json');
const posts = require('./posts.json');

module.exports = () => ({
  users,
  posts
});