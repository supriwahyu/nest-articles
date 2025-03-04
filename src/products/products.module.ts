import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from '../home-page/entities/product.entity';
import { Image } from '../home-page/entities/image.entity';
import { Review } from '../home-page/entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Image, Review])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
