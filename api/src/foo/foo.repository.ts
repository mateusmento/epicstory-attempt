import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Foo } from './foo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FooRepository extends Repository<Foo> {
  constructor(
    @InjectRepository(Foo)
    repo: Repository<Foo>,
  ) {
    super(repo.target, repo.manager, repo.queryRunner);
  }
}
