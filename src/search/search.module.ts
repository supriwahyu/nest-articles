import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { Product } from '../home-page/entities/product.entity';
// Import other entities like Review, Article if needed

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Add other entities here
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
