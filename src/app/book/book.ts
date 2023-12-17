import {Author} from "../author/author";
import {Genre} from "../genre/genre";

export class Book {
  id?: number;
  author?: Author;
  title?: string;
  genre?:  Genre;
  price?: number;
  count?: number;
}

export interface BookCreateDto {
  author: number,
  title: string,
  genre: number,
  price: number,
  count: number
}
