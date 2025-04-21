import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity('property_photos')
export class PropertyPhoto {
  @PrimaryGeneratedColumn()
  photo_id: number;

  @Column()
  property_id: number;

  @Column('text')
  photo_url: string;

  @Column({ nullable: true })
  caption: string;

  @Column({ default: false })
  is_primary: boolean;

  @Column()
  display_order: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Property, (property) => property.photos)
  @JoinColumn({ name: 'property_id' })
  property: Property;
}
