import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertyFeatures } from 'src/entities/propertyFeatures.entity';
import { CreatePropertyFeaturesDTO } from 'src/dtos/createPropertyFeaturesDTO/createPropertyFeature.dto';
import { Property } from 'src/entities/property.entity';
import { ICreatePropertyFeatures } from 'src/common/interfaces/createPropertyFeatures/createPropertyFeatures.interface';


@Injectable()
export class CreatePropertyFeaturesService implements ICreatePropertyFeatures{
  constructor(
    @InjectRepository(PropertyFeatures)
    private readonly propertyFeaturesRepository: Repository<PropertyFeatures>,
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async createPropertyFeatures(createPropertyFeaturesDto: CreatePropertyFeaturesDTO): Promise<PropertyFeatures> {
    const { propertyId, ...rest } = createPropertyFeaturesDto;
    
    // Find the property associated with the feature
    const property = await this.propertyRepository.findOne({where: {id: propertyId}});
    if (!property) {
      throw new NotFoundException(`Property with ID ${propertyId} not found`);
    }

    const propertyFeature = this.propertyFeaturesRepository.create({
      ...rest,
      property,
    });

    return await this.propertyFeaturesRepository.save(propertyFeature);
  }
}