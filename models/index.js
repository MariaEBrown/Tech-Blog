const User = require('./User');
const Project = require('./Post');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id'

});

module.exports = { User, Post };

