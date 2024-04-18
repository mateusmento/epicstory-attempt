import { IsNotEmpty, IsNumber } from 'class-validator';

export class AppConfig {
  @IsNumber()
  API_PORT: number = 3000;

  @IsNotEmpty()
  DATABASE_NAME: string = 'epicstory';
}
