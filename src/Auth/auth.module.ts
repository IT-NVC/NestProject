import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './local.strategy';
import { AccountModule } from 'src/account/account.module';
import { JwtStrategy } from './jwt.stategy';
import { RolesGuard } from 'src/Role/roles.guard';

@Module({
  imports:  [AccountModule,PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    }),],
  providers: [AuthService,localStrategy,JwtStrategy],
  exports: [AuthService]
})
export class AuthModule{}
