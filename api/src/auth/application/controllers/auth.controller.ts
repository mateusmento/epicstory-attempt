import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Request, Response } from 'express';
import { AppConfig } from 'src/app.config';
import { Signin } from '../features/signin.command';
import { Signup } from '../features/signup.command';
import { LocalAuthGuard } from '../passport/local.strategy';
import { GoogleAuthGuard } from '../passport/google.strategy';

type RequestWithUser = Request & {
  user: any;
};

@Controller('auth')
export class AuthController {
  constructor(
    private commandBus: CommandBus,
    private config: AppConfig,
  ) {}

  @Post('signup')
  signup(@Body() command: Signup) {
    return this.commandBus.execute(command);
  }

  @Post('signin')
  @UseGuards(LocalAuthGuard)
  async signin(
    @Req() request: RequestWithUser,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token, user } = await this.commandBus.execute(
      new Signin({ user: request.user }),
    );
    response.cookie('token', `Bearer ${token}`, { httpOnly: true });
    return user;
  }

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
