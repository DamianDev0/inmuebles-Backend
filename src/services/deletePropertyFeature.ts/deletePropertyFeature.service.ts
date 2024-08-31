import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PropertyFeatures } from 'src/entities/propertyFeatures.entity';
import { IDeletePropertyFeatures } from 'src/common/interfaces/deletePropertyFeatures/deletePropertyFeatures.interface';

@Injectable()
export class DeletePropertyFeaturesService implements IDeletePropertyFeatures {
  constructor(
    @InjectRepository(PropertyFeatures)
    private readonly propertyFeaturesRepository: Repository<PropertyFeatures>,
  ) {}

  async deletePropertyFeature(
    id: string,
    PropertyId: string,
  ): Promise<DeleteResult> {
    return await this.propertyFeaturesRepository.delete({
      id,
      property: { id: PropertyId },
    });
  }
}
