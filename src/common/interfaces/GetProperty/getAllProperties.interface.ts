import { Property } from 'src/entities/property.entity';

export interface IgetAllProperties {
    getAllProperties(): Promise<Property[]>;
}
