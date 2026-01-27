import { DataTypes, Model } from 'sequelize';
import sequelize from '../core/config/sequelize.config.js'; // Adjust path as needed

class User extends Model { };

User.init({
    idUser: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: { notEmpty: true }
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.VIRTUAL,
        set(value) {
            // store plain password on virtual field so hook can access it
            this.setDataValue('password', value);
        },
        validate: {
            len: {
                args: [8, 128],
                msg: 'Password must be between 8 and 128 characters',
            },
        },
    },    
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    last_login: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    tableName: 'user',
    timestamps: true,
    sequelize,
});

export default User;
