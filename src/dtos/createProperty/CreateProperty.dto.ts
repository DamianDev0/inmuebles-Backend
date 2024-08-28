import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@Injectable()
export class CreatePropertyDto{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    address:string

    @IsString()
    @IsNotEmpty()
    description:string

    @IsNumber()
    @IsNotEmpty()
    price:number

    @IsNumber()
    @IsNotEmpty()
    size:number

    @IsNumber()
    @IsNotEmpty()
    bedrooms:number 

    @IsNumber()
    @IsNotEmpty()
    bathrooms:number

    @IsNumber()
    @IsNotEmpty()
    garage:number

    @IsString()
    @IsNotEmpty()
    property_type_id:string 

    @IsString()
    @IsNotEmpty()
    owner_id: string;

}