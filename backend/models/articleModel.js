import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js";

class Article extends Model {}

Article.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    source: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING },
    categoryimg: { type: DataTypes.STRING },
    totaltime: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING, allowNull: false },
    summary: { type: DataTypes.STRING },
    content: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    difficulty: { type: DataTypes.ENUM("Beginner", "Intermediate", "Advanced"), defaultValue: "Beginner" },
  },
  {
    sequelize,
    tableName: "articles",
    modelName: "Article",
    timestamps: false,
  }
);

export default Article;
