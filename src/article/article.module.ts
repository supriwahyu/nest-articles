import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from '../home-page/entities/article.entity';
import { Author } from '../home-page/entities/author.entity';
import { Comment } from '../home-page/entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Author, Comment])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
