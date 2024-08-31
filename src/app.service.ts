import { Injectable } from '@nestjs/common';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { CreatePropertyService } from './services/createProperty/createProperty.service';
import { GetAllPropertiesService } from './services/GetProperty/getAllProperties.service';
import { GetPropertyByIdService } from './services/GetProperty/getPropertyById.service';
import { IdOPropertyDto } from './dtos/GetProperty/getPropertyByIdDto.dto';
import { DeletePropertyService } from './services/deleteProperty/delete-property/deleteProperty.service';
@Injectable()
export class AppService {
  constructor(
    private readonly createProperty: CreatePropertyService,
    private readonly getProperty: GetAllPropertiesService,
    private readonly getPropertyByOneId: GetPropertyByIdService,
    private readonly deletePropertyService: DeletePropertyService,
  ) {}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }

  getProperties(): Promise<Property[]> {
    return this.getProperty.getAllProperties();
  }

  getPropertyById(propertyId: string): Promise<Property | undefined> {
    return this.getPropertyByOneId.getPropertyById(propertyId);
  }

  async deleteProperty(id: string) {
    return await this.deletePropertyService.deleteProperty(id);
  }
}
