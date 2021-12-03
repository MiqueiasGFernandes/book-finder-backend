import { injectable } from 'tsyringe';
import { Book } from '../../domain/models/Book';
import IBookApi from '../protocols/api/IBookApi';

@injectable()
export default class BookRepository {
  private readonly googleBooksApi: IBookApi

  constructor(googleBooksApi: IBookApi) {
    this.googleBooksApi = googleBooksApi;
  }

  async get(filter: string[]): Promise<Book[]> {
    return this.googleBooksApi.get(filter);
  }
}
