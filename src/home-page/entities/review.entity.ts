import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column()
  date: Date;

  @ManyToOne(() => Product, (product) => product.reviews)
  product: Product;
}
