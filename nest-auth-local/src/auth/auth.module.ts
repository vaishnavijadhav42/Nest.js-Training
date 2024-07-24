import { Module } from '@nestjs/common';
import { PassportLocalStratergy } from './passport.local.strategy';
import { UserModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy} from './jwt.strategy';




@Module({
  imports: [UserModule,
    JwtModule.register({
      secret:'JwtKey',
      signOptions :{expiresIn:"60s"}
    })],
  controllers: [],
  providers: [PassportLocalStratergy,AuthService,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
