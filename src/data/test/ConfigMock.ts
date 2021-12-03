import { IConfig } from '../protocols/config/IConfig';

export class ConfigMock implements IConfig {
  private readonly returnValue: string;

  public constructor(value?: string) {
    this.returnValue = value || 'Any';
  }

  private config: Record<string, string> = {
    ERROR: 'ERROR',
    ANY: 'http://site.com/books',
  }

  getString(value: string): string {
    console.log('Config value:', value);

    return this.config[this.returnValue]
  }
}
