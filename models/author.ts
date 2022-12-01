import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from ".";
import Book from "./books";

type AuthorAttributes = {
    id: number;
    name: string;
    age: number;
};
interface AuthorInput extends Optional<AuthorAttributes, "id"> {}

class Author
    extends Model<AuthorAttributes, AuthorInput>
    implements AuthorAttributes
{
    declare id: number;
    declare name: string;
    declare age: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Author.init(
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
        age: {
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

Author.hasMany(Book);

export default Author;
