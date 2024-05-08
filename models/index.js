const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {foreignKey: 'user_id',});

Post.belongsTo(User);

User.hasMany(Comment, { foreignKey: 'user_id' });

Comment.belongsTo(User);

Post.hasMany(Comment, {foreignKey: 'post_id'});

Comment.belongsTo(Post);

module.exports = { User, Post, Comment };