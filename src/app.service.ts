import { Injectable } from '@nestjs/common';
import { Property } from './entities/property.entity';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { CreatePropertyService } from './services/createProperty/createProperty.service';
import { GetAllPropertiesService } from './services/GetProperty/getAllProperties.service';
import { GetPropertyByIdService } from './services/GetProperty/getPropertyById.service';
import { IdOPropertyDto } from './dtos/GetProperty/getPropertyByIdDto.dto';
import { DeletePropertyService } from './services/deleteProperty/delete-property/deleteProperty.service';
import { UpdatePropertyBasicDataDTO } from './dtos/updatePropertyDTO/updatePropertyBasicData.dto';
import { PatchPropertyBasicDataService } from './services/patchProperty/patchPropertyBasicData.service';
import { DeletePropertyFeaturesService } from './services/deletePropertyFeature.ts/deletePropertyFeature.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreatePropertyFeaturesService } from './services/createPropertyFeature/createPropertyFeature.service';
import { PropertyFeatures } from './entities/propertyFeatures.entity';
import { CreatePropertyFeaturesDTO } from './dtos/createPropertyFeaturesDTO/createPropertyFeature.dto';
@Injectable()
export class AppService {
  constructor(
    private readonly createProperty: CreatePropertyService,
    private readonly getProperty: GetAllPropertiesService,
    private readonly getPropertyByOneId: GetPropertyByIdService,
    private readonly deletePropertyService: DeletePropertyService,
    private readonly patchPropertyBasicData: PatchPropertyBasicDataService,
    private readonly deletePropertyFeatures: DeletePropertyFeaturesService,
    private readonly createPropertyFeatures: CreatePropertyFeaturesService,
  ) {}

  createNewProperty(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.createProperty.createProperty(createPropertyDto);
  }

  getProperties(): Promise<Property[]> {
    return this.getProperty.getAllProperties();
  }

  getPropertyById(
    propertyIdDto: IdOPropertyDto,
  ): Promise<Property | undefined> {
    return this.getPropertyByOneId.getPropertyById(propertyIdDto.propertyId);
  }

  async deleteProperty(id: string) {
    return await this.deletePropertyService.deleteProperty(id);
  }

  async updateBasicData(
    id: string,
    updateBasicData: UpdatePropertyBasicDataDTO,
  ): Promise<UpdateResult> {
    return await this.patchPropertyBasicData.updatePropertyBasicData(
      id,
      updateBasicData,
    );
  }

  async createNewPropertyFeature(
    createPropertyFeaturesDto: CreatePropertyFeaturesDTO,
  ): Promise<PropertyFeatures> {
    return await this.createPropertyFeatures.createPropertyFeatures(
      createPropertyFeaturesDto,
    );
  }

  async deletePropertyFeature(
    id: string,
    PropertyId: string,
  ): Promise<DeleteResult> {
    return await this.deletePropertyFeatures.deletePropertyFeature(
      id,
      PropertyId,
    );
  }
}
