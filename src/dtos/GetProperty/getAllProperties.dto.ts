import { Injectable } from "@nestjs/common";
import {  IsBtcAddress, IsNotEmpty,  IsString, IsUUID } from "class-validator";

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


}