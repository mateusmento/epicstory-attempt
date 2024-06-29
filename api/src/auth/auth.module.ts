import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google.strategy';
import { GoogleAuthGuard } from './utils/google.auth-guard';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy, GoogleAuthGuard],
})
export class AuthModule {}
