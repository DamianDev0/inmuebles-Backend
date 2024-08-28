import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity('property_media')
export class PropertyMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  media_type: string;

  @Column()
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Property, (property) => property.media)
  property: Property;
}
