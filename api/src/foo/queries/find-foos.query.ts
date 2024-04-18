import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FooRepository } from '../foo.repository';

export class FindFoos {}

@QueryHandler(FindFoos)
export class FindFoosQuery implements IQueryHandler<FindFoos> {
  constructor(private fooRepo: FooRepository) {}

  async execute({}: FindFoos) {
    return this.fooRepo.find({});
  }
}
