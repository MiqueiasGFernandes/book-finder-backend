import { Express } from 'express'
import { container } from 'tsyringe';
import BooksController from '../controllers/BooksController';

export default class BooksRoutes {
  static register(application: Express): void {
    const booksController = container.resolve<BooksController>('BooksController')

    application.get('/books', booksController.get.bind(booksController))
  }
}
