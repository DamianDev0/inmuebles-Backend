import { Injectable } from '@nestjs/common';

import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { CreatePropertyService } from './services/createProperty/createProperty.service';

@Injectable()
export default class AppService {
  constructor(private readonly createProperty: CreatePropertyService) {}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }
}
