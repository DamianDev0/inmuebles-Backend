import { CreatePropertyDto } from "src/dtos/createProperty/CreateProperty.dto";
import { Property } from "src/entities/property.entity";

export interface IcreateProperty{
    createProperty(property:CreatePropertyDto):Promise<Property>

}


