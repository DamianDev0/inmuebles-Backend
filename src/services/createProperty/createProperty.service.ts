import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IcreateProperty } from '../../common/interfaces/createProperty/createProperty.interface';
import { CreatePropertyDto } from '../../dtos/createPropertyDTO/createProperty.dto';
import { Property } from '../../entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreatePropertyService implements IcreateProperty {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async createProperty(property: CreatePropertyDto): Promise<Property> {
    const newProperty = this.propertyRepository.create(property);
    return await this.propertyRepository.save(newProperty); // Save the property to the database.
  }
}
