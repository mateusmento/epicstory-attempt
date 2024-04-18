import { Test } from '@nestjs/testing';
import { FooController } from './foo.controller';
import { createAppModule } from 'src/app.module';

describe('FooController', () => {
  let fooController: FooController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [createAppModule({ database: ':memory:', logging: false })],
    }).compile();

    await app.init();

    fooController = app.get(FooController);
  });

  it('should list an empty list of foos', async () => {
    expect(await fooController.getFoos()).toHaveLength(0);
  });

  it('should create a foo', async () => {
    const foo = await fooController.createFoo();
    expect(foo.counter).toBe(0);
    expect(await fooController.getFoos()).toHaveLength(1);
  });
});
