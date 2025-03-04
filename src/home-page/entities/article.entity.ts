import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Author } from './author.entity';
import { Comment } from './comment.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  authorName: string;

  @Column()
  publicationDate: Date;

  @Column('text')
  content: string;

  @Column('simple-array')
  tags: string[];

  @ManyToOne(() => Author, (author) => author.articles)
  author: Author;

  @OneToMany(() => Comment, (comment) => comment.article)
  comments: Comment[];
}
