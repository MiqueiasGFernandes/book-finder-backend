import { injectable } from 'tsyringe';
import { config } from 'dotenv';
import { IConfig } from '../../data/protocols/config/IConfig';

@injectable()
export class EnvironmentConfig implements IConfig {
  private environmentVariables: Record<string, unknown>

  constructor() {
    config()
    this.environmentVariables = process.env;
  }

  getString(value: string): string {
    return String(this.environmentVariables[value])
  }
}
