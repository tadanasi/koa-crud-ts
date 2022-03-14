import {FilmsRepository} from "./films.repository";


export class FilmsService {
    private filmsRepository: FilmsRepository;

    constructor() {
        this.filmsRepository = new FilmsRepository();
    }


}