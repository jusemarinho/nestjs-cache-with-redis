import { Module } from '@nestjs/common';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_HOST),
    UserModule,
    RedisCacheModule,
  ],
})
export class AppModule {}
