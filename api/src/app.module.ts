import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { AppConfig } from './app.config';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { patch } from './lib/objects';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';

export function createAppModule(
  dataSourceOptions: Partial<DataSourceOptions> = {},
) {
  @Module({
    imports: [
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
      CoreModule,
      AuthModule,
      UserModule,
      WorkspaceModule,
    ],
  })
  class AppModule {}

  return AppModule;
}
