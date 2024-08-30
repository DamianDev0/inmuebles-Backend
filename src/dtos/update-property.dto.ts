import { IsInt, IsString } from "class-validator";
import { Status } from "src/common/enums/status.enum";
import { PropertyFeatures } from "src/entities/propertyFeatures.entity";
import { PropertyMedia } from "src/entities/propertyMedia.entity";
import { TypeProperty } from "src/entities/propertyTypes.entity";


export class UpdatePropertyDTO {
    @IsString()
    title?: string;

    @IsString()
    description?: string;

    @IsString()
    address?: string;

    @IsString()
    city?: string;

    @IsString()
    deparment?: string;

    @IsString()
    neighborhood?: string;

    @IsInt()
    price?: number;

    @IsInt()
    size?: number;

    @IsInt()
    bedrooms?: number;

    @IsInt()
    bathrooms?: number;

    @IsInt()
    garage?: number;

    @IsString()
    status?: Status;

    @IsString()
    property_type_id?: string;

    media?: PropertyMedia[];

    features: PropertyFeatures[];
}
