export default (sequelize, DataTypes) => {
    
    const Post = sequelize.define('post', {
      name: DataTypes.STRING,
      public: DataTypes.BOOLEAN,
    }, 
    {
        underscored: true
    });
  
    Post.associate = (models) => {
        Post.belongsTo(models.Channel, {
            foreignKey: {
                name: 'channelId',
                field: 'channel_id'
        }
        });

      Post.belongsToMany(models.User, {
        through: 'post_member',
        foreignKey: {
            name: "postId",
            field: "post_id"
        }
    })
    };
  
    return Post;
  };
  