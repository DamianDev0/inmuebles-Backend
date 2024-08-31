import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetPropertyWithImage {
  constructor(
    @InjectRepository(Property)
    private readonly propertyService: Repository<Property>,
  ) {}

  async getAllPropertiesWithImages(): Promise<any[]> {
    console.log('Buscando todas las propiedades con imágenes...');

    // Usar QueryBuilder para obtener propiedades y sus medios asociados
    const properties = await this.propertyService
      .createQueryBuilder('property')
      .leftJoinAndSelect('property.media', 'media')
      .getMany();

    console.log('Propiedades encontradas:', properties);

    // Verificar si se encontraron propiedades
    if (!properties.length) {
      console.log('No se encontraron propiedades con imágenes.');
    }

    // Mapear propiedades y adjuntar solo las URLs de los medios
    return properties.map((property) => ({
      ...property,
    }));
  }
}
