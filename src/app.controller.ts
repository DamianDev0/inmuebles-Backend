import { BadRequestException, Body, Controller, NotFoundException, Param, Post } from '@nestjs/common';

import { Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { ApiTags } from '@nestjs/swagger';
import { IdOPropertyDto } from './dtos/GetProperty/getPropertyByIdDto.dto';
import { validate } from 'class-validator';

@ApiTags('properties')
@Controller('properties')
export class AppController {
  getPropertyByIdService: any;
  constructor(private readonly appService: AppService) {}

  @Post()
  async postProperty(@Body() property: CreatePropertyDto) {
    return await this.appService.createNewProperty(property);
  }
  
  @Get()
  async getProperties() {
    return await this.appService.getProperties();
  }

  @Get(':propertyId')
  async getPropertyById(@Param('propertyId') propertyId: string) {
    // Crear una instancia del DTO y asignar el valor
    const dto = new IdOPropertyDto();
    dto.propertyId = propertyId;

    // Validar el DTO
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    const property = await this.appService.getPropertyById(propertyId);
    if (!property) {
      throw new NotFoundException(`Property with ID ${propertyId} not found`);
    }
    return {property};
  }
}
