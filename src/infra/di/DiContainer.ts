import 'reflect-metadata';

import { container } from 'tsyringe';
import BookRepository from '../../data/repositories/BookRepository';
import GetBook from '../../data/usecases/GetBooks';
import HttpGoogleApi from '../api/HttpGoogleApi';
import { EnvironmentConfig } from '../config/EnvironmentConfig';
import BooksController from '../server/http/controllers/BooksController';

export default class DiContainer {
  static execute() {
    container
      .register('IConfig', { useClass: EnvironmentConfig })
      .register('IBookApi', { useClass: HttpGoogleApi })
      .register('IGetBook', { useClass: GetBook })
      .register('BookRepository', { useClass: BookRepository })
      .register('BooksController', { useClass: BooksController })
  }
}
