'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: DataTypes.STRING,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};