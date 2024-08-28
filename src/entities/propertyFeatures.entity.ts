import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Property } from './property.entity';

@Entity('property_features')
export class PropertyFeatures {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Property, (property) => property.features)
  property: Property;

  @Column()
  feature_name: string;

  @Column()
  feature_value: string;
}
