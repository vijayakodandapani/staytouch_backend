

module.exports = (sequelize, DataTypes) => {
    const imageUpload = sequelize.define('main',{
        // image_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: DataTypes.INTEGER,
         },
        image_name:
        {
            type:DataTypes.STRING,
            require:true
        },
        image_url:
        {
            type:DataTypes.STRING,
            require:true
        }
    }
    ,{
        tableName: 'main',
        freezeTableName: true , timestamps: false
    });
    imageUpload.removeAttribute('id');
    return imageUpload;
  };