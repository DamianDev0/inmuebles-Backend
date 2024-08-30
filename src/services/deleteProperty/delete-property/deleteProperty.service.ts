import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm'; // Asegúrate de que esto esté importado correctamente
import { Property } from '../../../entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeletePropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async deleteProperty(id: string): Promise<DeleteResult> {
    // Elimina la propiedad por ID usando el repositorio
    const result: DeleteResult = await this.propertyRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${id} not found.`);
    }

    return result;
  }
}
