import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {
  @Prop({ type: String, required: true, unique: true })
  title: string;

  @Prop({ type: String })
  type: string;

  @Prop({ type: String })
  gen: string;

  @Prop({ type: Array, default: [] })
  content: string;

  @Prop({ type: Date.now() })
  createdAt?: Date;
}

export const listSchema = SchemaFactory.createForClass(List);
