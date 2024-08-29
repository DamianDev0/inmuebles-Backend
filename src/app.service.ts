import { Injectable } from '@nestjs/common';
import { CreatePropertyService } from './services/createProperty/createProperty.service';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';

@Injectable()
export default class AppService {
  constructor(private readonly createProperty: CreatePropertyService) {}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }
}
