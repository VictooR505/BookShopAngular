import {Author} from "../author/author";
import {Genre} from "../genre/genre";

export interface Book {
  id?: string;
  author?: Author;
  title?: string;
  genre?:  Genre;
  price?: number;
  count?: number;
}
