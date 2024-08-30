import { Injectable } from "@nestjs/common";
import {  IsBtcAddress, IsDate, IsNotEmpty,  IsNumber,  IsOptional,  IsString, IsUUID } from "class-validator";

@Injectable()
export class GetAllPropertiesDto{
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    readonly id:string;

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
    @IsOptional()
    garage:number;

    @IsString()
    @IsNotEmpty()
    property_type_id:string

    @IsString()
    @IsNotEmpty()
    media:string

    @IsString()
    @IsOptional()
    owner_id:string

    @IsDate()
    @IsNotEmpty()
    createdAt:Date

    @IsDate()
    @IsNotEmpty()
    updatedAt:Date
}