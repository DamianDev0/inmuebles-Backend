import { Injectable } from '@nestjs/common';
import { CreatePropertyService } from './services/CreateProperty/createProperty.service';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createProperty/CreateProperty.dto';

@Injectable()
export class AppService {
  constructor(private readonly createProperty:CreatePropertyService){}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }
}
