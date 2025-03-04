import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('products')
  async searchProducts(
    @Query('query') query: string,
    @Query('filters') filters: string,
    @Query('sort') sort: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ): Promise<any> {
    const filtersObject = filters ? JSON.parse(filters) : {};
    return await this.searchService.searchProducts(query, filtersObject, sort, parseInt(page), parseInt(limit));
  }

  // Implement similar endpoints for searching reviews, articles, etc.
}
