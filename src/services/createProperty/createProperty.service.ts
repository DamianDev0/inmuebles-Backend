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

    const uploadedImage = await this.cloudinaryService.uploadFile(
      propertyDto.image,
    );
    const imageUrl = uploadedImage.secure_url;
    const media_type = uploadedImage.resource_type;

    const property = this.propertyRepository.create({
      ...propertyDto,
    });

    const propertyMedia = this.propertyMedia.create({
      media_type: media_type,
      url: imageUrl,
    });

    await this.propertyMedia.save(propertyMedia);

    // Save the property to the database
    return await this.propertyRepository.save(property);
  }
}
