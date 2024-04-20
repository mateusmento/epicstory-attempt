import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppConfig } from './app.config';
import { createAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(createAppModule());

  const config = app.get(AppConfig);

  app.enableCors({
    origin: 'http://localhost:8080',
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
