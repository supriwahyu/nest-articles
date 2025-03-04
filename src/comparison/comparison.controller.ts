import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ComparisonService } from './comparison.service';
import { Product } from '../home-page/entities/product.entity';

@Controller('comparison')
export class ComparisonController {
  constructor(private readonly comparisonService: ComparisonService) {}

  @Get(':ids')
  async getProductsForComparison(@Param('ids') ids: string): Promise<Product[]> {
    const productIds = ids.split(',').map((id) => parseInt(id));
    return await this.comparisonService.getProductsForComparison(productIds);
  }

  @Post('add')
  async addProductToComparison(@Body('productId') productId: number): Promise<Product> {
    return await this.comparisonService.addProductToComparison(productId);
  }

  @Delete('remove')
  async removeProductFromComparison(@Body('productId') productId: number): Promise<void> {
    return await this.comparisonService.removeProductFromComparison(productId);
  }

  @Get('summary/:ids')
  async getQuickSummary(@Param('ids') ids: string): Promise<any> {
    const productIds = ids.split(',').map((id) => parseInt(id));
    return await this.comparisonService.getQuickSummary(productIds);
  }
}
