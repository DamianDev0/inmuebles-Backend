import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CreatePropertyService } from './services/createProperty/createProperty.service';
import { Property } from './entities/property.entity';
import { GetAllPropertiesService } from './services/GetProperty/getAllProperties.service';
import { GetPropertyByIdService } from './services/GetProperty/getPropertyById.service';
import { CloudinaryService } from './common/cloudinary/cloudinary.service';
import { CloudinaryProvider } from './common/cloudinary/cloudinary.provaider';
import { DeletePropertyService } from './services/deleteProperty/delete-property/deleteProperty.service';
import { PatchPropertyBasicDataService } from './services/patchProperty/patchPropertyBasicData.service';
import { DeletePropertyFeaturesService } from './services/deletePropertyFeature.ts/deletePropertyFeature.service';
import { CreatePropertyFeaturesService } from './services/createPropertyFeature/createPropertyFeature.service';
import { PropertyFeatures } from './entities/propertyFeatures.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Property]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Property, PropertyFeatures]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CreatePropertyService,
    GetAllPropertiesService,
    GetPropertyByIdService,
    CloudinaryService,
    CloudinaryProvider,
    DeletePropertyService,
    PatchPropertyBasicDataService,
    DeletePropertyFeaturesService,
    CreatePropertyFeaturesService,
  ],
})
export class AppModule {}
