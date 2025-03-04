import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Image } from './image.entity';
import { Review } from './review.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  releaseDate: Date;

  @Column()
  averageRating: number;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  processor: string;

  @Column()
  ram: string;

  @Column()
  storage: string;

  @Column()
  display: string;

  @Column()
  batteryLife: string;

  @Column()
  camera: string;

  @Column()
  chipset: string;

  @Column()
  gpu: string;

  @Column()
  osVersion: string;

  @Column()
  dimensions: string;

  @Column()
  weight: string;

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  // Additional fields as needed
}
