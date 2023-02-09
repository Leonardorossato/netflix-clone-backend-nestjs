import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { ListModule } from './list/list.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { mongoAsyncConnection } from './config/mongo.config';

@Module({
  imports: [
    MovieModule,
    ListModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync(mongoAsyncConnection),
  ],
})
export class AppModule {}
