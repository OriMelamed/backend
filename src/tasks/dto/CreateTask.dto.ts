import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;
  description?: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}