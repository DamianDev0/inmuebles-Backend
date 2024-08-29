import { Property } from '../../../entities/property.entity';
import { CreatePropertyDto } from '../../../dtos/createPropertyDTO/createProperty.dto';

export interface IcreateProperty {
  createProperty(property: CreatePropertyDto): Promise<Property>;
}
