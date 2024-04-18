import { IsNumber } from 'class-validator';

export class AppConfig {
  @IsNumber()
  API_PORT: number = 3000;
}
