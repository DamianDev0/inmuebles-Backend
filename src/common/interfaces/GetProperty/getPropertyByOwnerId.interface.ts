import { Property } from '../../../entities/property.entity';
import { IdOwnerPropertyDto } from 'src/dtos/GetProperty/IdOwnerProperty.dto';

export interface IgetPropertyByOwnerId {
  createProperty(property: IdOwnerPropertyDto): Promise<Property | undefined>;
}
