import { CreatePropertyFeaturesDTO } from "src/dtos/createPropertyFeaturesDTO/createPropertyFeature.dto";
import { PropertyFeatures } from "src/entities/propertyFeatures.entity";

export interface ICreatePropertyFeatures {
  createPropertyFeatures(property: CreatePropertyFeaturesDTO): Promise<PropertyFeatures>;
}