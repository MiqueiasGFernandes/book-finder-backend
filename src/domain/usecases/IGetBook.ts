import { Book } from '../models/Book';
import { BookFilter } from '../models/BookFilter';

export default interface IGetBook {
    get(filter: BookFilter[]): Promise<Book[]>
}
