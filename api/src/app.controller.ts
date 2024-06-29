import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/ip')
export class AppController {
  @Get()
  getIp(@Req() req: Request) {
    return req.ip;
  }
}
