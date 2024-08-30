import { Body, Controller, Param, Post } from '@nestjs/common';

import { Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { ApiTags } from '@nestjs/swagger';
import { IdOPropertyDto } from './dtos/GetProperty/getPropertyByIdDto.dto';
import { Property } from './entities/property.entity';

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
  async getPropertyById(@Param() propertyIdDto: IdOPropertyDto) {
    return await this.appService.getPropertyById(propertyIdDto);
  }
}
