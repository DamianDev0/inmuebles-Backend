import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IgetAllProperties } from 'src/common/interfaces/GetProperty/getAllProperties.interface';
import { GetAllPropertiesDto } from 'src/dtos/GetProperty/getAllProperties.dto';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllPropertiesService implements IgetAllProperties {
    constructor(
        @InjectRepository(Property)
        private readonly propertyRepository: Repository<Property>,
    ) {}

    async getAllProperties(dto: GetAllPropertiesDto): Promise<Property[]> {
        // Crea un objeto de consulta basado en el DTO
        const query = this.propertyRepository.createQueryBuilder('property');

        if (dto.id) {
            query.andWhere('property.id = :id', { id: dto.id });
        }

        if (dto.title) {
            query.andWhere('property.title = :title', { title: dto.title });
        }

        if (dto.description) {
            query.andWhere('property.description = :description', { description: dto.description });
        }

        // Agrega más filtros según los campos del DTO

        return await query.getMany(); // Usa getMany() para obtener una lista de propiedades
    }
}
