import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_properties')
export class TypeProperty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type_name: string;
}
