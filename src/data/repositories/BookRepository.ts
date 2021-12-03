import { injectable } from 'tsyringe';
import { Book } from '../../domain/models/Book';
import { IGoogleApi } from '../protocols/api/IGoogleApi';

@injectable()
export default class BookRepository {
  private readonly googleBooksApi: IGoogleApi

  constructor(googleBooksApi: IGoogleApi) {
    this.googleBooksApi = googleBooksApi;
  }

  async get(filter: string[]): Promise<Book[]> {
    return this.googleBooksApi.get(filter);
  }
}
