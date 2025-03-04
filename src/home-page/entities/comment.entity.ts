import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ReviewDetail } from './review-detail.entity';
import { Article } from './article.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column('text')
  comment: string;

  @Column()
  date: Date;

  @ManyToOne(() => ReviewDetail, (reviewDetail) => reviewDetail.comments, { nullable: true })
  review: ReviewDetail;

  @ManyToOne(() => Article, (article) => article.comments, { nullable: true })
  article: Article;
  }
