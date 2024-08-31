import { DeleteResult } from 'typeorm';

export interface IDeletePropertyFeatures {
  deletePropertyFeature(id: string, PropertyId: string): Promise<DeleteResult>;
}
