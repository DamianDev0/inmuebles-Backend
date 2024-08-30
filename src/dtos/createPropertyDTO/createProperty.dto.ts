import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';
import { Status } from 'src/common/enums/status.enum';

@Injectable()
export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  deparment: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  size: number;

  @IsNumber()
  @IsNotEmpty()
  bedrooms: number;

  @IsNumber()
  @IsNotEmpty()
  bathrooms: number;

  @IsNumber()
  @IsNotEmpty()
  garage: number;

  @IsString()
  @IsNotEmpty()
  property_type_id: string;

  @IsString()
  @IsNotEmpty()
  owner_id: string;

  @IsEnum(Status)
  status?: Status;

  image: Express.Multer.File;
}
