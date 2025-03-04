import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Product } from '../home-page/entities/product.entity';
// Import other entities like Review, Article if needed

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    // Inject other repositories like Review, Article if needed
  ) {}

  async searchProducts(query: string, filters: any, sort: string, page: number, limit: number): Promise<any> {
    const [results, total] = await this.productRepository.findAndCount({
      where: { name: Like(`%${query}%`) }, // Example: searching in product names
      skip: (page - 1) * limit,
      take: limit,
      order: { price: sort === 'price' ? 'ASC' : 'DESC' },
    });

    return {
      results,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  }

  // Implement similar methods for searching reviews, articles, etc.
}
