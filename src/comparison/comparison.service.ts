import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../home-page/entities/product.entity';

@Injectable()
export class ComparisonService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getProductsForComparison(productIds: number[]): Promise<Product[]> {
    return this.productRepository.findByIds(productIds);
  }

  async addProductToComparison(productId: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id: productId } });
  }

  async removeProductFromComparison(productId: number): Promise<void> {
    // In a real application, manage comparison lists with user-specific sessions or database entries
    return;
  }

  async getQuickSummary(productIds: number[]): Promise<any> {
    const products = await this.getProductsForComparison(productIds);
    const summary = {
      differences: [],
      similarities: [],
    };

    // Example logic to generate summary
    if (products.length > 1) {
      const baseProduct = products[0];
      products.slice(1).forEach((product) => {
        for (const key in baseProduct) {
          if (baseProduct[key] !== product[key]) {
            summary.differences.push({ key, values: products.map(p => p[key]) });
          } else {
            summary.similarities.push({ key, value: baseProduct[key] });
          }
        }
      });
    }

    return summary;
  }
}
