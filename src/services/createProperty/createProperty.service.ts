import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IcreateProperty } from '../../common/interfaces/createProperty/createProperty.interface';
import { CreatePropertyDto } from '../../dtos/createPropertyDTO/createProperty.dto';
import { Property } from '../../entities/property.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../../common/cloudinary/cloudinary.service';

@Injectable()
export class CreatePropertyService implements IcreateProperty {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createProperty(propertyDto: CreatePropertyDto): Promise<Property> {
    if (!propertyDto.image) {
      throw new Error('Image file is required');
    }

    const uploadedImage = await this.cloudinaryService.uploadFile(
      propertyDto.image,
    );
    const imageUrl = uploadedImage.secure_url;

    const property = this.propertyRepository.create({
      ...propertyDto,
      media: imageUrl,
    });

    // Save the property to the database
    return await this.propertyRepository.save(property);
  }
}
