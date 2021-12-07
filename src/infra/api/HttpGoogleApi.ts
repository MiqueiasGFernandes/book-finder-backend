import { inject, injectable } from 'tsyringe';
import axios from 'axios'

import IBookApi from '../../data/protocols/api/IBookApi';
import { IConfig } from '../../data/protocols/config/IConfig';
import InternalError from '../../domain/errors/InternalError';
import { Book } from '../../domain/models/Book';
import { GoogleBookType } from './GoogleBookType';

@injectable()
export default class HttpGoogleApi implements IBookApi {
  private readonly config: IConfig;

  constructor(@inject('IConfig') config: IConfig) {
    this.config = config;
  }

  async get(filter: string[]): Promise<Book[]> {
    const queryFilter = filter.join('+');
    const queryUrl = `${this.config.getString('GET_BOOKS_API_URL')}?q=${queryFilter}`

    const { data: responseFromGoogleApi } = await axios.get(queryUrl);
    const dataFromGoogleApi = responseFromGoogleApi.items as GoogleBookType[]

    if (!(dataFromGoogleApi instanceof Array)) {
      throw new InternalError('Invalid data from Google API')
    }

    const bookListMap: Book[] = dataFromGoogleApi.map((book) => ({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      publisherDate: book.volumeInfo.publisherDate,
      description: book.volumeInfo.description,
      pageCount: book.volumeInfo.pageCount,
      isbn: book.volumeInfo.industryIdentifiers[0].identifier,
      dimensions: {
        width: book.volumeInfo.width ? Number(book.volumeInfo.width.replace(' ', '').replace('cm', '')) : null,
        height: book.volumeInfo.height ? Number(book.volumeInfo.height.replace(' ', '').replace('cm', '')) : null,
      },
      type: book.volumeInfo.printType,
      categories: book.volumeInfo.categories,
      rating: {
        average: book.volumeInfo.averageRating,
        count: book.volumeInfo.ratingsCount,
      },
    }))

    return bookListMap;
  }
}
