import { create } from 'src/lib/objects';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Foo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  counter: number;

  static create() {
    return create(Foo, { counter: 0 });
  }

  increment() {
    this.counter++;
  }
}
