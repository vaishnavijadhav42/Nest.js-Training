import { Module } from '@nestjs/common';
import { PassportLocalStratergy } from './passport.local.strategy';
import { UserModule } from 'src/users/user.module';




@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStratergy],
})
export class AuthModule {}
