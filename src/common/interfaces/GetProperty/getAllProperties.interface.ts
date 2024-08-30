import { GetAllPropertiesDto } from 'src/dtos/GetProperty/getAllProperties.dto';
import { Property } from 'src/entities/property.entity';

export interface IgetAllProperties {
    getAllProperties(property: GetAllPropertiesDto): Promise<Property[]>;
}
