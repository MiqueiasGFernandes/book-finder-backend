import { injectable } from 'tsyringe';
import { Book } from '../../domain/models/Book';
import IGetBook from '../../domain/usecases/IGetBooks';
import BookRepository from '../repositories/BookRepository';

@injectable()
export default class GetBook implements IGetBook {
  private readonly bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository
  }

  async get(filter: string[]): Promise<Book[]> {
    return this.bookRepository.get(filter);
  }
}
