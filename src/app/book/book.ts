import {Author} from "../author/author";
import {Genre} from "../genre/genre";
import {count} from "rxjs";

export class Book {
  id: number;
  author: Author;
  title: string;
  genre:  Genre;
  price: number;
  count: number;

}
