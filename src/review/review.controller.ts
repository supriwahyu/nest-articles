import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDetail } from '../home-page/entities/review-detail.entity';
import { Comment } from '../home-page/entities/comment.entity';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(':id')
  async getReviewDetail(@Param('id') id: string): Promise<ReviewDetail> {
    return await this.reviewService.getReviewDetail(parseInt(id));
  }

  @Post(':id/comments')
  async addComment(@Param('id') id: string, @Body() commentData: Partial<Comment>): Promise<Comment> {
    return await this.reviewService.addComment(parseInt(id), commentData);
  }

  @Get(':id/rating-breakdown')
  async getRatingBreakdown(@Param('id') id: string): Promise<any> {
    return await this.reviewService.getRatingBreakdown(parseInt(id));
  }
}
