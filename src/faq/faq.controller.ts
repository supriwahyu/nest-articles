import { Controller, Get, Query } from '@nestjs/common';
import { FAQService } from './faq.service';
import { FAQ } from '../home-page/entities/faq.entity';

@Controller('faq')
export class FAQController {
  constructor(private readonly faqService: FAQService) {}

  @Get()
  getAllFAQs(): Promise<FAQ[]> {
    return this.faqService.getAllFAQs();
  }

  @Get('search')
  searchFAQs(@Query('query') query: string): Promise<FAQ[]> {
    return this.faqService.searchFAQs(query);
  }
}
