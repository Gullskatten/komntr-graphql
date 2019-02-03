export default (sequelize, DataTypes) => {
  const Channel = sequelize.define(
    "channel",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  Channel.associate = models => {
    Channel.belongsToMany(models.User, {
      through: "member",
      foreignKey: {
        name: 'postId',
        field: 'post_id'
        }
    });

    Channel.belongsTo(models.User, {
      foreignKey: "owner"
    });
  };

  return Channel;
};
