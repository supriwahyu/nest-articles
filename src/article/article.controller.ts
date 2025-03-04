import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from '../home-page/entities/article.entity';
import { Comment } from '../home-page/entities/comment.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get(':id')
  async getArticleDetail(@Param('id') id: string): Promise<Article> {
    return await this.articleService.getArticleDetail(parseInt(id));
  }

  @Get(':id/related')
  async getRelatedArticles(@Param('id') id: string): Promise<Article[]> {
    return await this.articleService.getRelatedArticles(parseInt(id));
  }

  @Post(':id/comments')
  async addComment(@Param('id') id: string, @Body() commentData: Partial<Comment>): Promise<Comment> {
    return await this.articleService.addComment(parseInt(id), commentData);
  }
}
