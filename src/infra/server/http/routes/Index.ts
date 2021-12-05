import express from 'express';
import { container } from 'tsyringe';
import { IConfig } from '../../../../data/protocols/config/IConfig';
import BooksRoutes from './BooksRoutes';

function startServer() {
  const config = container.resolve<IConfig>('IConfig')
  const application = express()
  application.listen(config.getString('EXPRESS_SERVER_PORT'))

  BooksRoutes.register(application);

  console.log('Server started...')
}

export default startServer;
