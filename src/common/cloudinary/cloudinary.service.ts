import {
  Injectable,
  BadRequestException,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary-response';
import * as streamifier from 'streamifier'; // Ensure correct import

@Injectable()
export class CloudinaryService {
  async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    if (!file || !file.buffer) {
      throw new BadRequestException('Invalid file or file buffer missing.');
    }

    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );

      try {
        const readStream = streamifier.createReadStream(file.buffer);
        readStream.pipe(uploadStream);
      } catch (error) {
        reject(error);
      }
    });
  }

  async deleteImage(imageUrl: string): Promise<void> {
    const publicId = this.getPublicIdFromUrl(imageUrl);
    //delete image of cloud service
    try {
      const deleteResult = await cloudinary.uploader.destroy(publicId);
      if (deleteResult.result !== 'ok') {
        throw new Error('Cloudinary returned an unsuccessful result');
      }
    } catch (error) {
      throw new HttpException(
        'Failed to delete image',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private getPublicIdFromUrl(url: string): string {
    //get public id that cloudinary need for destroy method
    const urlParts = url.split('/');
    const publicIdWithExtension = urlParts[urlParts.length - 1];
    const publicId = publicIdWithExtension.split('.')[0];
    return publicId;
  }
}
