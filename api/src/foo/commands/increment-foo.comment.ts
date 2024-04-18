import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FooRepository } from '../foo.repository';
import { IsNumber } from 'class-validator';
import { patch } from 'src/lib/objects';

export class IncrementFoo {
  @IsNumber()
  id: number;

  constructor(data: Partial<IncrementFoo> = {}) {
    patch(this, data);
  }
}

@CommandHandler(IncrementFoo)
export class IncrementFooCommand implements ICommandHandler<IncrementFoo> {
  constructor(private fooRepo: FooRepository) {}

  async execute({ id }: IncrementFoo) {
    const foo = await this.fooRepo.findOneBy({ id });
    foo.increment();
    return this.fooRepo.save(foo);
  }
}
