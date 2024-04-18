import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateFooCommand } from './commands/create-foo.command';
import { IncrementFooCommand } from './commands/increment-foo.comment';
import { FooController } from './foo.controller';
import { Foo } from './foo.entity';
import { FooRepository } from './foo.repository';
import { FindFoosQuery } from './queries/find-foos.query';

@Module({
  imports: [TypeOrmModule.forFeature([Foo])],
  controllers: [FooController],
  providers: [
    FooRepository,
    CreateFooCommand,
    FindFoosQuery,
    IncrementFooCommand,
  ],
})
export class FooModule {}
