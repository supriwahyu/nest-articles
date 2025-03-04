import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { FAQ } from '../home-page/entities/faq.entity';

@Injectable()
export class FAQService {
  constructor(
    @InjectRepository(FAQ)
    private faqRepository: Repository<FAQ>,
  ) {}

  async getAllFAQs(): Promise<FAQ[]> {
    return this.faqRepository.find();
  }

  async searchFAQs(query: string): Promise<FAQ[]> {
    return this.faqRepository.find({
      where: { question: Like(`%${query}%`) },
    });
  }
}
