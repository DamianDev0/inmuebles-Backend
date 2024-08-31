import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IcreateProperty } from '../../common/interfaces/createProperty/createProperty.interface';
import { CreatePropertyDto } from '../../dtos/createPropertyDTO/createProperty.dto';
import { Property } from '../../entities/property.entity';
import { PropertyMedia } from '../../entities/propertyMedia.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../../common/cloudinary/cloudinary.service';

@Injectable()
export class CreatePropertyService implements IcreateProperty {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(PropertyMedia)
    private readonly propertyMedia: Repository<PropertyMedia>,
  ) {}

  async createProperty(propertyDto: CreatePropertyDto): Promise<Property> {
    if (!propertyDto.image) {
      throw new Error('Image file is required');
    }

    // Primero, crea y guarda la propiedad en la base de datos para obtener su ID
    const property = this.propertyRepository.create({
      ...propertyDto,
    });
    const savedProperty = await this.propertyRepository.save(property);

    // Luego, sube la imagen a Cloudinary y guarda la información en PropertyMedia
    const uploadedImage = await this.cloudinaryService.uploadFile(
      propertyDto.image,
    );
    const imageUrl = uploadedImage.secure_url;
    const media_type = uploadedImage.resource_type;

    // Crea la entrada en PropertyMedia con el ID de la propiedad guardada
    const propertyMedia = this.propertyMedia.create({
      media_type: media_type,
      url: imageUrl,
      property: savedProperty, // Asignamos la entidad propiedad
    });

    await this.propertyMedia.save(propertyMedia);

    // Retornamos la propiedad guardada
    return savedProperty;
  }
}
