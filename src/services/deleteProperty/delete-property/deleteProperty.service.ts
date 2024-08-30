import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm'; // Asegúrate de que esto esté importado correctamente
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { DeletePropertyDto } from 'src/dtos/deletePropertyDTO/deleteProperty.dto';

@Injectable()
export class DeletePropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async deleteProperty(deletePropertyDto: DeletePropertyDto): Promise<DeleteResult> {
    // Utiliza el DTO para eliminar la propiedad por ID
    const result: DeleteResult = await this.propertyRepository.delete(deletePropertyDto.id);

    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${deletePropertyDto.id} not found.`);
    }

    return result;
  }
}
