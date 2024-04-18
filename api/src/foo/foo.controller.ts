import { Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateFoo } from './commands/create-foo.command';
import { IncrementFoo } from './commands/increment-foo.comment';
import { Foo } from './foo.entity';
import { FindFoos } from './queries/find-foos.query';

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

  @Post(':id/increment')
  incrementFoo(@Param('id') id: number) {
    return this.commandBus.execute(new IncrementFoo({ id }));
  }
}
