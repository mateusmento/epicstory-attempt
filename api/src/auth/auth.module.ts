import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from 'src/app.config';
import { AuthController } from './application/controllers/auth.controller';
import { AuthenticateCommand } from './application/features/authenticate.command';
import { SigninCommand } from './application/features/signin.command';
import { SignupCommand } from './application/features/signup.command';
import { JwtStrategy } from './application/passport/jwt.strategy';
import { LocalStrategy } from './application/passport/local.strategy';
import { Identity } from './domain/entities/identity.entity';
import { IdentityRepository } from './infrastructure/repositories/identity.repository';
import { GoogleStrategy } from './application/passport/google.strategy';
import { GoogleAuthController } from './application/controllers/google-auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Identity]),
    JwtModule.registerAsync({
      inject: [AppConfig],
      useFactory: (config: AppConfig) => ({
        secret: config.JWT_SECRET,
      }),
    }),
  ],
  controllers: [AuthController, GoogleAuthController],
  providers: [
    GoogleStrategy,
    LocalStrategy,
    JwtStrategy,
    IdentityRepository,
    SignupCommand,
    AuthenticateCommand,
    SigninCommand,
  ],
})
export class AuthModule {}
