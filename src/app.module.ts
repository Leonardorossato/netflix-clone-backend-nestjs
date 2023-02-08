import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { ListModule } from './list/list.module';


@Module({
  imports: [MovieModule, ListModule]
})
export class AppModule {}
