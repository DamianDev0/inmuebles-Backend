import { Injectable } from '@nestjs/common';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { CreatePropertyService } from './services/createProperty/createProperty.service';
import { GetAllPropertiesService } from './services/GetProperty/getAllProperties.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  constructor(private readonly createProperty:CreatePropertyService, private readonly getProperty:GetAllPropertiesService){}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }

  getProperties(): Promise<Property[]> {
    return this.getProperty.getAllProperties();
  }
}
