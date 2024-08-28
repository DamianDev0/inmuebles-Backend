import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePropertyDto } from './dtos/createProperty/CreateProperty.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Post()
 async postProperty(@Body() property:CreatePropertyDto){
    return this.appService.createNewProperty(property)
 }

}
