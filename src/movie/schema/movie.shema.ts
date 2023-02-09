import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({ required: true, type: String, minlength: 3, maxlength: 255 })
  title: string;

  @Prop({ required: true, type: String, minlength: 3, maxlength: 255 })
  description: string;

  @Prop({ required: true, type: String, minlength: 3, maxlength: 255 })
  img: string;

  @Prop({  type: String, minlength: 3, maxlength: 255 })
  imgTitle: string;

  @Prop({  type: String, minlength: 3, maxlength: 255 })
  imgSm: string;

  @Prop({  type: String, minlength: 3, maxlength: 255 })
  trailer: string;

  @Prop({  type: String, minlength: 3, maxlength: 255 })
  video: string;

  @Prop({ type: String, minlength: 3, maxlength: 255 })
  year: string;

  @Prop({ type: Number, minlength: 3, maxlength: 255 })
  limit: number;

  @Prop({ type: String, minlength: 3, maxlength: 255 })
  gen: string;

  @Prop({ type: Boolean, default: false })
  isSeries: string;

  @Prop({ type: Date.now() })
  createdAt?: Date;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
