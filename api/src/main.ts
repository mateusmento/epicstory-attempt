import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppConfig } from './app.config';
import { createAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(createAppModule());

  app.setGlobalPrefix('/api');

  const config = app.get(AppConfig);

  app.getHttpAdapter().getInstance().set('trust proxy', config.TRUST_PROXY);

  app.enableCors({
    origin: config.CORS_ORIGINS,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableCircularCheck: true,
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(config.API_PORT);
}

bootstrap();
