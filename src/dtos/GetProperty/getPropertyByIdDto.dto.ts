import { IsString, IsOptional } from 'class-validator';

export class IdOPropertyDto {
  @IsOptional()
  @IsString()
  propertyId?: string;
}
