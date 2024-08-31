import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IgetPropertyById } from 'src/common/interfaces/GetProperty/getPropertyById.interface';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetPropertyByIdService implements IgetPropertyById {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

    async getPropertyById(propertyId: string): Promise<Property | undefined> {
        if (!propertyId) {
            throw new Error('propertyId is required');
        }
    
        const property = await this.propertyRepository
            .createQueryBuilder('property')
            .where('property.id = :id', { id: propertyId })
            .getOne();
    
        return property;
    }

}
