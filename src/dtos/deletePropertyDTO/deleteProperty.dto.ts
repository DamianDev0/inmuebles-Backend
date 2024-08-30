import { IsString, IsNotEmpty } from 'class-validator';

export class DeletePropertyDto {
  @IsString()
  @IsNotEmpty()
  id: string; // UUID como string
}
