import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindFoos } from './queries/find-foos.query';
import { CreateFoo } from './commands/create-foo.command';
import { Foo } from './foo.entity';

@Controller('foos')
export class FooController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get()
  getFoos(): Promise<Foo[]> {
    return this.queryBus.execute(new FindFoos());
  }

  @Post()
  createFoo(): Promise<Foo> {
    return this.commandBus.execute(new CreateFoo());
  }
}
