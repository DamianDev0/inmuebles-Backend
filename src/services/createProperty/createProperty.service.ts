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
    // Check if image exists in the DTO
    if (!propertyDto.image) {
      throw new Error('Image file is required');
    }

    // Upload image to Cloudinary
    const uploadedImage = await this.cloudinaryService.uploadFile(
      propertyDto.image,
    );
    const imageUrl = uploadedImage.secure_url; // Get the URL of the uploaded image

    // Create a new property object with the image URL
    const property = this.propertyRepository.create({
      ...propertyDto,
      media: imageUrl, // Assign the image URL to the media property
    });

    // Save the property to the database
    return await this.propertyRepository.save(property);
  }
}
