import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/google.auth-guard';
import { Request, Response } from 'express';

@Controller('/auth')
export class AuthController {
  @Get('/google/login')
  @UseGuards(GoogleAuthGuard)
  login() {}

  @Get('/google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleRedirect(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.redirect(`/signin`);
  }
}
