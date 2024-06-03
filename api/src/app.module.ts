import { Module } from '@nestjs/common';
import { TypedConfigModule, dotenvLoader } from 'nest-typed-config';
import { AppConfig } from './app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { FooModule } from './foo/foo.module';
import { DataSourceOptions } from 'typeorm';
import { patch } from './lib/objects';
import { WorkspaceModule } from './workspace/workspace.module';

export function createAppModule(
  dataSourceOptions: Partial<DataSourceOptions> = {},
) {
  @Module({
    imports: [
      TypedConfigModule.forRoot({
        isGlobal: true,
        schema: AppConfig,
        load: dotenvLoader({ expandVariables: true }),
      }),
      TypeOrmModule.forRootAsync({
        inject: [AppConfig],
        useFactory: async (config: AppConfig) =>
          patch(
            {
              type: 'better-sqlite3',
              database: config.DATABASE_NAME,
              enableWAL: true,
              synchronize: true,
              autoLoadEntities: true,
              logging: true,
              logger: 'advanced-console',
            } as DataSourceOptions,
            dataSourceOptions,
          ),
      }),
      CqrsModule.forRoot(),
      FooModule,
      WorkspaceModule,
    ],
  })
  class AppModule {}

  return AppModule;
}
