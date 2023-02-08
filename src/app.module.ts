import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { ListModule } from './list/list.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [MovieModule, ListModule, AuthModule]
})
export class AppModule {}
