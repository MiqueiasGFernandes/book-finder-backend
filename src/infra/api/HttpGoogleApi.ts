import fetch from 'node-fetch';
import { injectable } from 'tsyringe';
import IBookApi from '../../data/protocols/api/IBookApi';
import { IConfig } from '../../data/protocols/config/IConfig';
import InternalError from '../../domain/errors/InternalError';
import { Book } from '../../domain/models/Book';
import { GoogleBookType } from './GoogleBookType';

@injectable()
export default class HttpGoogleApi implements IBookApi {
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  async get(filter: string[]): Promise<Book[]> {
    const queryFilter = filter.join('+')
    const queryUrl = `${this.config.getString('GET_BOOKS_API_URL')}?q=${queryFilter}`

    const responseFromGoogleApi = await fetch(queryUrl);
    const dataFromGoogleApi = await responseFromGoogleApi.json() as unknown as GoogleBookType[];

    if (!(dataFromGoogleApi instanceof Array)) {
      throw new InternalError('Invalid data from Google API')
    }

    const bookListMap: Book[] = dataFromGoogleApi.map((book) => ({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      publisher: book.publisher,
      publisherDate: book.publisherDate,
      description: book.description,
      pageCount: book.pageCount,
      isbn: book.industryIdentifiers[0].identifier,
      dimensions: {
        width: Number(book.width.replace(' ', '').replace('cm', '')),
        height: Number(book.height.replace(' ', '').replace('cm', '')),
      },
      type: book.printType,
      categories: book.categories,
      rating: {
        average: book.averageRating,
        count: book.ratingsCount,
      },
    }))

    return bookListMap;
  }
}
