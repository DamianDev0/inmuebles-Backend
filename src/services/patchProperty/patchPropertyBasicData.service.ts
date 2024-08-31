import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUpdateBasicData } from 'src/common/interfaces/PatchProperty/updatePropertyBasicData.interface';
import { UpdatePropertyBasicDataDTO } from 'src/dtos/updatePropertyDTO/updatePropertyBasicData.dto';
import { Property } from 'src/entities/property.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PatchPropertyBasicDataService implements IUpdateBasicData {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async updatePropertyBasicData(
    id: string,
    updateBasicData: UpdatePropertyBasicDataDTO,
  ): Promise<UpdateResult> {
    return await this.propertyRepository.update(id, updateBasicData);
  }
}
