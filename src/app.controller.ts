import { Body, Controller, Post } from '@nestjs/common';

import { Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('properties')
@Controller('properties')
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Post()
  async postProperty(@Body() property: CreatePropertyDto) {
    return await this.appService.createNewProperty(property);
  }
  
  @Get()
  async getProperties() {
    return await this.appService.getProperties();
  }
  
}
