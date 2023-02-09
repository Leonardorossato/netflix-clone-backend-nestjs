import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { List, listSchema } from './schema/list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: List.name, schema: listSchema }]),
  ],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
