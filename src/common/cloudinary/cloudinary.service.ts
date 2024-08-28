import { Injectable, BadRequestException } from '@nestjs/common';
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
}
