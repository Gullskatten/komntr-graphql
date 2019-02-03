export default (sequelize, DataTypes) => {
    
    const Message = sequelize.define('message', {
      text: DataTypes.STRING,
    },
    {
      underscored: true
    });
  
    Message.associate = (models) => {
        Message.belongsTo(models.Post, {
           foreignKey: {
               name: 'postId',
               field: "post_id"
           }
        })

        Message.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    };
  
    return Message;
  };
  