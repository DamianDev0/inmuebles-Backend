import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { ICreatePropertyMedia } from 'src/common/interfaces/createPropertyMedia/createPropertyMedia.Interface';
import { CreatePropertyMediaDTO } from 'src/dtos/createPropertyMediaDTO/createPropertyMedia.dto';
import { Property } from 'src/entities/property.entity';
import { PropertyMedia } from 'src/entities/propertyMedia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreatePropertyMediaService implements ICreatePropertyMedia {
  constructor(
    @InjectRepository(PropertyMedia)
    private readonly propertyMediaRepository: Repository<PropertyMedia>,
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
    private readonly cloudinaryServices: CloudinaryService,
  ) {}

  // Method to create a new PropertyMedia entity
  async createPropertyMedia(
    image: Express.Multer.File,
    propertyId: string,
  ): Promise<PropertyMedia> {
    // Find the property in the database using the provided ID
    const property = await this.propertyRepository.findOne({
      where: { id: propertyId },
    });

    // Throw an exception if the property is not found
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    // Upload the image to Cloudinary and get the URL and resource type
    const uploadedImage = await this.cloudinaryServices.uploadFile(image);

    const imageUrl = uploadedImage.secure_url; // Secure URL of the uploaded image
    const mediaType = uploadedImage.resource_type; // Resource type of the uploaded image

    // Create a DTO with the necessary information for the new PropertyMedia
    const createPropertyMediaDto: CreatePropertyMediaDTO = {
      media_type: mediaType,
      url: imageUrl,
      property,
    };

    // Create a new PropertyMedia instance using the DTO
    const newPropertyMedia = this.propertyMediaRepository.create(
      createPropertyMediaDto,
    );

    // Save the new instance to the database and return the saved object
    return await this.propertyMediaRepository.save(newPropertyMedia);
  }
}
