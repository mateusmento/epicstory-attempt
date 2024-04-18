import { Module } from '@nestjs/common';
import { FooController } from './foo.controller';
import { FooRepository } from './foo.repository';
import { CreateFooCommand } from './commands/create-foo.command';
import { FindFoosQuery } from './queries/find-foos.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foo } from './foo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Foo])],
  controllers: [FooController],
  providers: [FooRepository, CreateFooCommand, FindFoosQuery],
})
export class FooModule {}
