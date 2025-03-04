import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../home-page/entities/article.entity';
import { Author } from '../home-page/entities/author.entity';
import { Comment } from '../home-page/entities/comment.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getArticleDetail(articleId: number): Promise<Article> {
    return this.articleRepository.findOne({
      where: { id:

 articleId },
      relations: ['author', 'comments'],
    });
  }

  async getRelatedArticles(articleId: number): Promise<Article[]> {
    const article = await this.articleRepository.findOne({ where: { id: articleId } });
    if (!article) return [];

    return this.articleRepository.find({
      take: 4, // Example to return 4 related articles
    });
  }

  async addComment(articleId: number, commentData: Partial<Comment>): Promise<Comment> {
    const comment = this.commentRepository.create({
      ...commentData,
      article: { id: articleId },
    });
    return this.commentRepository.save(comment);
  }
}
