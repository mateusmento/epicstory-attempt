import { Module } from '@nestjs/common';
import { TypedConfigModule, dotenvLoader } from 'nest-typed-config';
import { AppConfig } from './app.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      isGlobal: true,
      schema: AppConfig,
      load: dotenvLoader({ expandVariables: true }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [AppConfig],
      useFactory: async (config: AppConfig) => ({
        type: 'better-sqlite3',
        database: config.DATABASE_NAME,
        enableWAL: true,
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
        logger: 'advanced-console',
      }),
    }),
  ],
})
export class AppModule {}
