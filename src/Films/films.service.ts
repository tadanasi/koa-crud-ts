import {FilmsRepository} from "./films.repository";
import {ICategoriesWithLength} from "./types/categories-with-length.interface";


export class FilmsService {
    private filmsRepository: FilmsRepository;

    constructor() {
        this.filmsRepository = new FilmsRepository();
    }

    public async getAllCategories(): Promise<string[]> {
        return this.filmsRepository.getAllCategories();
    }

    public async getFilmsByCategory(category: string): Promise<string[]> {
        return this.filmsRepository.getFilmsByCategory(category);
    }

    public async getAllCategoriesLength(): Promise<ICategoriesWithLength> {
        return this.filmsRepository.getAllCategoriesLength();
    }
}