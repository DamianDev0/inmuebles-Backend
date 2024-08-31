import { IsNotEmpty, IsString } from "class-validator";
import { Property } from "src/entities/property.entity";

export class CreatePropertyMediaDTO {

    @IsString()
    @IsNotEmpty()
    media_type: string;

    @IsString()
    @IsNotEmpty()
    url: string;

    property: Property;
}