import { Injectable } from '@nestjs/common';
import { IsString, IsEmpty } from 'class-validator';

@Injectable()
export class IdOwnerPropertyDto {
    @IsEmpty()
    @IsString()
    ownerId: string;
}
