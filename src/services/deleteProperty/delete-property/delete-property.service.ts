import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { IDeleteProperty } from 'src/common/interfaces/deleteProperty/deleteProterty.ibterface';


@Injectable()
export class DeletePropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async deleteProperty(data: IDeleteProperty): Promise<{ message: string }> {
    const result: DeleteResult = await this.propertyRepository.delete(data.id);

    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${data.id} not found.`);
    }

    return { message: `Property with ID ${data.id} deleted successfully.` };
  }
}
