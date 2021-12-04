import DiContainer from '../infra/di/DiContainer';

// eslint-disable-next-line import/order
import { container } from 'tsyringe';

DiContainer.execute()

container.resolve('IConfig')
