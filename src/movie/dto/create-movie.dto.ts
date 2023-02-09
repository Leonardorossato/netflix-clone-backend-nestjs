import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ nullable: false, type: String, minLength: 3, maxLength: 255 })
  title: string;

  @ApiProperty({ nullable: false, type: String, minLength: 3, maxLength: 255 })
  description: string;

  @ApiProperty({ nullable: false, type: String, minLength: 3, maxLength: 255 })
  img: string;
}
