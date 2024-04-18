import {
  ClassConstructor,
  plainToClass,
  plainToClassFromExist,
} from 'class-transformer';

export function patch<T>(value: T, partial: Partial<T>) {
  return plainToClassFromExist(value, partial, {
    enableCircularCheck: true,
    enableImplicitConversion: true,
  });
}

export function create<T>(type: ClassConstructor<T>, data: Partial<T>) {
  return plainToClass(type, data);
}
