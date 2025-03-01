import { Controller, Get } from '@nestjs/common';
import { HomePageService } from './home-page.service';
import { Product } from './entities/product.entity';
import { Review } from './entities/review.entity';
import { Category } from './entities/category.entity';
import { Article } from './entities/article.entity';

@Controller('home-page')
export class HomePageController {
  constructor(private readonly homePageService: HomePageService) {}

  @Get('featured-products')
  async getFeaturedProducts(): Promise<Product[]> {
    return await this.homePageService.getFeaturedProducts();
  }

  @Get('latest-reviews')
  async getLatestReviews(): Promise<Review[]> {
    return await this.homePageService.getLatestReviews();
  }

  @Get('popular-categories')
  async getPopularCategories(): Promise<Category[]> {
    return await this.homePageService.getPopularCategories();
  }

  @Get('trending-articles')
  async getTrendingArticles(): Promise<Article[]> {
    return await this.homePageService.getTrendingArticles();
  }
}
