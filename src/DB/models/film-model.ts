import * as mongoose from "mongoose";
import {IFilm} from "../../Films/types/film.interface";
const Schema = mongoose.Schema;

const FilmSchema = new Schema<IFilm>({
    name: {type: String, required: [true, "cannot be blank"], index: true},
    category: {type: String, required: [true, "cannot be blank"], index: true},
});

export default mongoose.model("film", FilmSchema);