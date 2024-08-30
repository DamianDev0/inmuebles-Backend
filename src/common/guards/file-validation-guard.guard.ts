import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class FileValidationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const files = request.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      throw new BadRequestException('At least one file is required!');
    }

    if (files.length > 5) {
      throw new BadRequestException('You can only upload up to 5 files!');
    }

    for (const file of files) {
      // Validate file size (max 4MB)
      if (file.size > 1024 * 1024 * 4) {
        throw new BadRequestException('File size exceeds the limit of 4MB!');
      }

      // Validate file type
      if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        throw new BadRequestException('Only image files are allowed!');
      }
    }

    return true;
  }
}
