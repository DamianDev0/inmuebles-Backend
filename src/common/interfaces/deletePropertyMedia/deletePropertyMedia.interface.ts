import { PropertyMedia } from "src/entities/propertyMedia.entity";

export interface IDeletePropertyMedia {
    deletePropertyMedia(id: string, propertyId: string): Promise<PropertyMedia>
}
