import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewDetail } from '../home-page/entities/review-detail.entity';
import { Comment } from '../home-page/entities/comment.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewDetail)
    private reviewRepository: Repository<ReviewDetail>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getReviewDetail(reviewId: number): Promise<ReviewDetail> {
    return this.reviewRepository.findOne({
      where: { id: reviewId },
      relations: ['comments'],
    });
  }

  async addComment(reviewId: number, commentData: Partial<Comment>): Promise<Comment> {
    const comment = this.commentRepository.create({
      ...commentData,
      review: { id: reviewId },
    });
    return this.commentRepository.save(comment);
  }

  async getRatingBreakdown(reviewId: number): Promise<any> {
    // Example: Calculate rating breakdown
    const review = await this.reviewRepository.findOne({ where: { id: reviewId } });
    if (!review) return null;

    const comments = await this.commentRepository.find({ where: { review: { id: reviewId } } });
    const ratingBreakdown = comments.reduce((acc, comment) => {
      acc = (acc[0] || 0) + 1;
      return acc;
    }, {});

    return ratingBreakdown;
  }
}

