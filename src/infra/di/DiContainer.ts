import 'reflect-metadata';

import { container } from 'tsyringe';
import GetBook from '../../data/usecases/GetBooks';
import HttpGoogleApi from '../api/HttpGoogleApi';
import { EnvironmentConfig } from '../config/EnvironmentConfig';

export default class DiContainer {
  static execute() {
    container
      .register('IConfig', { useClass: EnvironmentConfig })
      .register('IBookApi', { useClass: HttpGoogleApi })
      .register('IGetBook', { useClass: GetBook })
  }
}
