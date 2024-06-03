import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './workspace.entity';
import { Repository } from 'typeorm';
import { CreateWorkspace } from './dtos/create-workspace.dto';
import { UpdateWorkspace } from './dtos/update-workspace.dto';

@Controller('/workspaces')
export class WorkspaceController {
  constructor(
    @InjectRepository(Workspace)
    private workspaceRepo: Repository<Workspace>,
  ) {}

  @Get()
  find() {
    return this.workspaceRepo.find();
  }

  @Post()
  create(@Body() data: CreateWorkspace) {
    return this.workspaceRepo.insert(data);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() data: UpdateWorkspace) {
    return this.workspaceRepo.update({ id }, data);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    this.workspaceRepo.delete(id);
  }
}
