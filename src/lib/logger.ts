import { Logger as TSLogger, ISettingsParam } from 'tslog';
import { Logger as BoltLogger, LogLevel } from '@slack/bolt';

class AppLogger extends TSLogger implements BoltLogger {
  constructor({ type }: { type: ISettingsParam['type'] }) {
    super({ type });

    this.level = LogLevel.INFO;
    this.name = '';
  }

  private level: LogLevel;

  private name: string;

  public getLevel(): LogLevel {
    return this.level;
  }

  public setLevel(level: LogLevel): void {
    this.level = level;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export const appLogger = ({
  type,
}: {
  type: ISettingsParam['type'];
}): BoltLogger => {
  return new AppLogger({ type });
};
