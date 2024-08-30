import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IgetAllProperties } from 'src/common/interfaces/GetProperty/getAllProperties.interface';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllPropertiesService implements IgetAllProperties {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async getAllProperties(): Promise<Property[]> {
    return await this.propertyRepository
      .createQueryBuilder('property')
      .getMany();
  }
}
