import { plainToClassFromExist } from 'class-transformer';

export function patch<T>(value: T, partial: Partial<T>) {
  return plainToClassFromExist(value, partial, {
    enableCircularCheck: true,
    enableImplicitConversion: true,
  });
}
