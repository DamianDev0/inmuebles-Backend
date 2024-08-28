import { Status } from 'src/common/enums/status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TypeProperty } from './propertyTypes.entity';
import { PropertyMedia } from './propertyMedia.entity';
import { PropertyFeatures } from './PropertyFeatures.entity';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  price: number;

  @Column({ type: 'float' })
  size: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  garage: number;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @ManyToOne(() => TypeProperty)
  property_type: TypeProperty;

  @OneToMany(() => PropertyMedia, (media) => media.property)
  media: PropertyMedia[];

  @OneToMany(() => PropertyFeatures, (feature) => feature.property)
  features: PropertyFeatures[];

  @Column()
  owner_id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
