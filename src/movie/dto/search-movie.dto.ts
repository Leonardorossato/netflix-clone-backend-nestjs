import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SearchTitle {
  @ApiProperty({ nullable: false, type: String })
  @IsString()
  title: string;
}
