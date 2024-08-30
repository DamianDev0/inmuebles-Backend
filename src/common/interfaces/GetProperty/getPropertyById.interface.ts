import { Property } from 'src/entities/property.entity';

export interface IgetPropertyById {
    getPropertyById(propertyId: string): Promise<Property | undefined>;
}
