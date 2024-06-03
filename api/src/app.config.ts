import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AppConfig {
  @IsNumber()
  @Transform(({ value }) => +value)
  API_PORT: number = process.env.NODE_ENV === 'production' ? 80 : 3000;

  @IsNotEmpty()
  DATABASE_NAME: string = 'epicstory';

  @IsNotEmpty()
  @Transform(({ value }) => value.split(',').map((v) => v.trim()))
  CORS_ORIGINS: string[] =
    process.env.NODE_ENV === 'production'
      ? []
      : ['http://localhost:8080', 'http://localhost:4173'];
}
