import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FAQService } from './faq.service';
import { FAQController } from './faq.controller';
import { FAQ } from '../home-page/entities/faq.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FAQ])],
  providers: [FAQService],
  controllers: [FAQController],
})
export class FAQModule {}
