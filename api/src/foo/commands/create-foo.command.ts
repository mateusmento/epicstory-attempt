import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FooRepository } from '../foo.repository';

export class CreateFoo {}

@CommandHandler(CreateFoo)
export class CreateFooCommand implements ICommandHandler<CreateFoo> {
  constructor(private fooRepo: FooRepository) {}

  async execute({}: CreateFoo) {
    return this.fooRepo.save({});
  }
}
