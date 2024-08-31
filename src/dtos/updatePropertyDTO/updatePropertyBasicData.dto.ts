import { IsInt, IsString } from "class-validator";
import { Status } from "src/common/enums/status.enum";


export class UpdatePropertyBasicDataDTO {
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
}
