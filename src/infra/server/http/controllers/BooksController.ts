import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IGetBook from '../../../../domain/usecases/IGetBooks';

@injectable()
export default class BooksController {
  private readonly getBook: IGetBook;

  constructor(@inject('IGetBook') getBook: IGetBook) {
    this.getBook = getBook;
  }

  async get(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.getBook.get(String(request.query.filters).split('+') as string[]);

      return response.status(200).send({
        data: result,
      })
    } catch (error) {
      console.error(error);

      return response.status(500).send({
        data: (<Error>error).message,
      })
    }
  }
}
