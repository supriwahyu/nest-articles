import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComparisonService } from './comparison.service';
import { ComparisonController } from './comparison.controller';
import { Product } from '../home-page/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ComparisonService],
  controllers: [ComparisonController],
})
export class ComparisonModule {}
