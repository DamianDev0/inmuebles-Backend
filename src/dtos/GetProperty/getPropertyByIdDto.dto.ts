import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class IdOPropertyDto {
  @IsNotEmpty({ message: 'propertyId should not be empty' })
  @IsString({ message: 'propertyId must be a string' })
  @Matches(
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
    {
      message: 'propertyId must match UUID format',
    },
  )
  propertyId: string;
}
