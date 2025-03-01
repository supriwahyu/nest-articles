import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Review } from './entities/review.entity';
import { Category } from './entities/category.entity';
import { Article } from './entities/article.entity';

@Injectable()
export class HomePageService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async getFeaturedProducts(): Promise<Product[]> {
    return await this.productsRepository.find({
      take: 5, // Example: fetch top 5 featured products
      order: { averageRating: 'DESC' },
    });
  }

  async getLatestReviews(): Promise<Review[]> {
    return await this.reviewsRepository.find({
      take: 5, // Example: fetch latest 5 reviews
    });
  }

  async getPopularCategories(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }

  async getTrendingArticles(): Promise<Article[]> {
    return await this.articlesRepository.find({
      take: 5, // Example: fetch top 5 trending articles
    });
  }
}
