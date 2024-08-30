import { Injectable } from '@nestjs/common';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { CreatePropertyService } from './services/createProperty/createProperty.service';
import { GetAllPropertiesService } from './services/GetProperty/getAllProperties.service';
import { GetPropertyByIdService } from './services/GetProperty/getPropertyById.service';
import { IdOPropertyDto } from './dtos/GetProperty/getPropertyByIdDto.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly createProperty: CreatePropertyService,
    private readonly getProperty: GetAllPropertiesService,
    private readonly getPropertyByOneId: GetPropertyByIdService,
  ) {}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }

  getProperties(): Promise<Property[]> {
    return this.getProperty.getAllProperties();
  }

  getPropertyById(
    propertyIdDto: IdOPropertyDto,
  ): Promise<Property | undefined> {
    return this.getPropertyByOneId.getPropertyById(propertyIdDto.propertyId);
  }
}
