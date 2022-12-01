import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from ".";
import Author from "./author";

type BookAttributes = {
    id: number;
    name: string;
    price: number;
    authorId: number;
};
interface BookInput extends Optional<BookAttributes, "id"> {}

class Book extends Model<BookAttributes, BookInput> implements BookAttributes {
    declare id: number;
    declare name: string;
    declare price: number;
    declare authorId: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        modelName: "country",
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true,
    }
);
Book.belongsTo(Author);
export default Book;
