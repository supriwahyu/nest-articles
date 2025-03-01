import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomePageController } from './home-page.controller';
import { HomePageService } from './home-page.service';
import { Product } from './entities/product.entity';
import { Review } from './entities/review.entity';
import { Category } from './entities/category.entity';
import { Article } from './entities/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Review, Category, Article])],
  controllers: [HomePageController],
  providers: [HomePageService],
})
export class HomePageModule {}
