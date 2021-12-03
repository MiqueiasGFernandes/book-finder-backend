import { Book } from '../../../domain/models/Book';

export interface IGoogleApi {
    get(filter: string[]): Promise<Book[]>
}
