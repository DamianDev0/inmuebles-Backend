import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../../entities/property.entity';
import { Repository } from 'typeorm';
import { IgetPropertyByOwnerId } from 'src/common/interfaces/GetProperty/getPropertyByOwnerId.interface';
import { IdOwnerPropertyDto } from 'src/dtos/GetProperty/IdOwnerProperty.dto';

// @Injectable()
// export class GetPropertyByOwnerIdService implements IgetPropertyByOwnerId {
//   constructor(
//     @InjectRepository(Property)
//     private readonly propertyRepository: Repository<Property>,
//   ) {}

//   async getPropertyByOwnerId(property: IdOwnerPropertyDto): Promise<Property | undefined> {
//     return await this.propertyRepository
//       .createQueryBuilder('property')
//       .where('property.ownerId = :ownerId', { ownerId: property.ownerId })
//       .getOne();
//   }
// }
