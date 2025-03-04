import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewController } from './review.controller';
import { ReviewDetail } from '../home-page/entities/review-detail.entity';
import { Comment } from '../home-page/entities/comment.entity';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewDetail, Comment])],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
