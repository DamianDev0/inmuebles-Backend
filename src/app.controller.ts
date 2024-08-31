import {
  BadRequestException,
  NotFoundException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePropertyDto } from './dtos/createPropertyDTO/createProperty.dto';
import { ApiTags } from '@nestjs/swagger';
import { IdOPropertyDto } from './dtos/GetProperty/getPropertyByIdDto.dto';
import { validate } from 'class-validator';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('properties')
@Controller('properties')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  async postProperty(
    @Body() body: any,
    @UploadedFile() image: Express.Multer.File,
  ) {
    // Map the request body to CreatePropertyDto
    const propertyDto: CreatePropertyDto = {
      ...body,
      image: image,
    };

    return await this.appService.createNewProperty(propertyDto);
  }

  @Get()
  async getProperties() {
    return await this.appService.getProperties();
  }

  @Get(':propertyId')
  async getPropertyById(@Param('propertyId') propertyId: string) {
    // Crear una instancia del DTO y asignar el valor
    const dto = new IdOPropertyDto();
    dto.propertyId = propertyId;

    // Validar el DTO
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    const property = await this.appService.getPropertyById(propertyId);
    if (!property) {
      throw new NotFoundException(`Property with ID ${propertyId} not found`);
    }
    return { property };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteProperty(@Param('id') id: string) {
    return await this.appService.deleteProperty(id);
  }
}
