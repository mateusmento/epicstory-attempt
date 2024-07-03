import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/google.auth-guard';
import { Request, Response } from 'express';
import { AppConfig } from 'src/app.config';

@Controller('/auth')
export class AuthController {
  constructor(private config: AppConfig) {}

  @Get('/google')
  @UseGuards(GoogleAuthGuard)
  google() {}

  @Get('/google/callback')
  @UseGuards(GoogleAuthGuard)
  googleCallback(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log('redirect', req.user);
    res.redirect(this.config.GOOGLE_APP_REDIRECT_URL);
  }
}
