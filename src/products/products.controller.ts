import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../home-page/entities/product.entity';
import { Review } from '../home-page/entities/review.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  async getProductDetail(@Param('id') id: string): Promise<Product> {
    return await this.productsService.findOne(parseInt(id));
  }

  @Get(':id/related')
  async getRelatedProducts(@Param('id') id: string): Promise<Product[]> {
    return await this.productsService.findRelatedProducts(parseInt(id));
  }

  @Post(':id/reviews')
  async addReview(
    @Param('id') id: string,
    @Body() reviewData: Partial<Review>,
  ): Promise<Review> {
    return await this.productsService.addReview(parseInt(id), reviewData);
  }
}
