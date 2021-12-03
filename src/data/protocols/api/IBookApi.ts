import { Book } from '../../../domain/models/Book';

export default interface IBookApi {
    get(filter: string[]): Promise<Book[]>
}
