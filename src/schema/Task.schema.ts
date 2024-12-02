import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  description?: string;

  @Prop()
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);