import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IcreateProperty } from "src/common/interfaces/CreateProperty /createProperty.interface";
import { CreatePropertyDto } from "src/dtos/createProperty/CreateProperty.dto";
import { Property } from "src/entities/property.entity";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class GetAllPropertiesService implements IcreateProperty{
    constructor(@InjectRepository(Property) private readonly propertyRepository:Repository<Property>){}

   async createProperty(property: CreatePropertyDto): Promise<Property> {
    const newProperty = this.propertyRepository.create(property)
    return await this.propertyRepository.save(newProperty);  // Save the property to the database.
   }
}