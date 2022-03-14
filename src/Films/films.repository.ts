import {ICategoriesWithLength} from "./types/categories-with-length.interface";
import {Film} from "../DB/models";
import {CustomLogger, ErrorHandler} from "../middlewares/logger";

export class FilmsRepository {
    constructor() {

    }

    public async getAllCategories(): Promise<string[]> {
        const result = await Film.find().distinct("category").catch(ErrorHandler);
        if (!result) return [];
        return result;
    }

    public async getFilmsByCategory(category: string): Promise<string[]> {
        const result = await Film.find({category}, "name -_id").catch(ErrorHandler);
        if (!result) return [];
        return result.map(el => el.name);
    }

    public async getAllCategoriesLength(): Promise<ICategoriesWithLength> {
        const allData = await Film.find({}).catch(ErrorHandler); //Sorry, I rly can't remember how it make work as sql's select count
        if (!allData) return {};
        return allData.reduce((acc: any, {category}) => {
            if (!acc[category]) acc[category] = 0;
            acc[category]++;
            return acc;
        }, {});
    }
}