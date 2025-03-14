import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
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

  @Column()
  imageUrl: string;

  @Column()
  description: string;

  @Column()
  price: number;

  // Add more fields as needed
}
