import { IsNotEmpty } from 'class-validator';

export class CreateWorkspace {
  @IsNotEmpty()
  name: string;
}
