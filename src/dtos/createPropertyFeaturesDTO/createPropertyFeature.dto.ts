import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePropertyFeaturesDTO {
  @IsUUID()
  @IsNotEmpty()
  readonly propertyId: string;

  @IsString()
  @IsNotEmpty()
  readonly feature_name: string;

  @IsString()
  @IsNotEmpty()
  readonly feature_value: string;
}