import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class ReviewDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  productImage: string;

  @Column()
  starRating: number;

  @Column()
  reviewerName: string;

  @Column()
  reviewDate: Date;

  @Column('text')
  reviewSummary: string;

  @Column('text')
  designReview: string;

  @Column('text')
  performanceReview: string;

  @Column('text')
  batteryLifeReview: string;

  @Column('text')
  cameraQualityReview: string;

  @Column('json')
  prosCons: { pros: string[]; cons: string[] };

  @OneToMany(() => Comment, (comment) => comment.review)
  comments: Comment[];
}
