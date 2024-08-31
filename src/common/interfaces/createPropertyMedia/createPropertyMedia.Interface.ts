import { CreatePropertyMediaDTO } from 'src/dtos/createPropertyMediaDTO/createPropertyMedia.dto';
import { PropertyMedia } from 'src/entities/propertyMedia.entity';

export interface ICreatePropertyMedia {
  createPropertyMedia(
    image: Express.Multer.File,
    propertyId: string,
  ): Promise<PropertyMedia>;
}
