import * as mongoose from "mongoose";
import "./film-model";
import {IFilm} from "../../Films/types/film.interface";

export const Film = mongoose.model<IFilm>("film");