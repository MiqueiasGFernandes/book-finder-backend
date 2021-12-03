import { Book } from '../models/Book';

export default interface IGetBook {
    get(filter: string[]): Promise<Book[]>
}
