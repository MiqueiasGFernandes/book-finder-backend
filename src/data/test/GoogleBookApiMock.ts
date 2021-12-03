import InternalError from '../../domain/errors/InternalError';
import { Book } from '../../domain/models/Book';
import IBookApi from '../protocols/api/IBookApi';
import { IConfig } from '../protocols/config/IConfig';

export default class GoogleBookApiMock implements IBookApi {
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  async get(_filter: string[]): Promise<Book[]> {
    console.log('Filters:', _filter);

    if (this.config.getString('URL') === 'ERROR') {
      return Promise.reject(new InternalError('Invalid data from Google API'))
    }
    return Promise.resolve([
      {
        title: 'Systematic Theology',
        authors: ['Louis Berkhof'],
        publisher: 'Monergism',
        publisherDate: '2009-08-01',
        description: 'Systematic Theology',
        pageCount: 859,
        isbn: 'IRNSJJAQL',
        dimensions: {
          width: 8,
          height: 12,
        },
        type: 'EBOOK',
        categories: ['Theology, Religion'],
        rating: {
          average: 4.6,
          count: 120,
        },
      },
    ])
  }
}
