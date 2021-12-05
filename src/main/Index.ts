import DiContainer from '../infra/di/DiContainer';
import server from '../infra/server/http/routes/Index'

// eslint-disable-next-line import/order
import { container } from 'tsyringe';

DiContainer.execute()

container.resolve('IConfig')

server()
