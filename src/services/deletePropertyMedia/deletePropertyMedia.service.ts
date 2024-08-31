import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDeletePropertyMedia } from 'src/common/interfaces/deletePropertyMedia/deletePropertyMedia.interface';
import { PropertyMedia } from 'src/entities/propertyMedia.entity';
import { Property } from 'src/entities/property.entity';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

@Injectable()
export class DeletePropertyMediaService implements IDeletePropertyMedia {
  constructor(
    @InjectRepository(PropertyMedia)
    private readonly propertyMediaRepository: Repository<PropertyMedia>,
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // Method to delete a PropertyMedia entity
  async deletePropertyMedia(
    id: string,
    propertyId: string,
  ): Promise<PropertyMedia> {
    // Find the property in the database using the provided propertyId
    const property = await this.propertyRepository.findOne({
      where: { id: propertyId },
    });

    // Throw an exception if the property is not found
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    // Find the PropertyMedia in the database using the provided id and property
    const propertyMedia = await this.propertyMediaRepository.findOne({
      where: { id, property },
    });

    // Throw an exception if the PropertyMedia is not found
    if (!propertyMedia) {
      throw new NotFoundException('Property Media not found');
    }

    // Delete the image from Cloudinary
    const deleteResult = await this.cloudinaryService.deleteImage(
      propertyMedia.url,
    );

    // Remove the PropertyMedia entity from the database and return the removed entity
    return await this.propertyMediaRepository.remove(propertyMedia);
  }
}
