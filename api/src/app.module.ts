import { Module } from '@nestjs/common';
import { TypedConfigModule, dotenvLoader } from 'nest-typed-config';
import { AppConfig } from './app.config';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      isGlobal: true,
      schema: AppConfig,
      load: dotenvLoader({ expandVariables: true }),
    }),
  ],
})
export class AppModule {}
