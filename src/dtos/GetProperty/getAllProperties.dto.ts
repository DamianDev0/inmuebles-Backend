import { Injectable } from "@nestjs/common";
import {  IsBtcAddress, IsDate, IsEmpty, IsNotEmpty,  IsNumber,  IsString, IsUUID } from "class-validator";
import { PropertyMedia } from "src/entities/propertyMedia.entity";

@Injectable()
export class GetAllPropertiesDto{
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id:string;

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsString()
    @IsNotEmpty()
    @IsBtcAddress()
    adrress:string;

    @IsString()
    @IsNotEmpty()
    city:string;

    @IsString()
    @IsNotEmpty()
    deparment:string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsNumber()
    @IsNotEmpty()
    size:number;

    @IsNumber()
    @IsNotEmpty()
    bedrooms:number;

    @IsNumber()
    @IsNotEmpty()
    bathrooms:number;

    @IsNumber()
    @IsEmpty()
    garage:number;

    @IsString()
    @IsNotEmpty()
    property_type_id:string

    @IsString()
    @IsNotEmpty()
    media:string

    @IsString()
    @IsEmpty()
    owner_id:string

    @IsDate()
    @IsNotEmpty()
    createdAt:Date

    @IsDate()
    @IsNotEmpty()
    updatedAt:Date
}