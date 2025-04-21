import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PropertyPhoto } from './property-photo.entity';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  property_id: number;

  @Column()
  host_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  property_type: string;

  @Column()
  room_type: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  zip_code: string;

  @Column('decimal', { precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column('decimal', { precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column()
  num_bedrooms: number;

  @Column('decimal', { precision: 3, scale: 1 })
  num_bathrooms: number;

  @Column()
  max_guests: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price_per_night: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  cleaning_fee: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  service_fee: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => PropertyPhoto, (photo) => photo.property, { eager: true })
  photos: PropertyPhoto[];

  @Column('decimal', { precision: 2, scale: 1, default: 0 })
  rating: number;
}
