import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { Product } from '../home-page/entities/product.entity';
import { Image } from '../home-page/entities/image.entity';
import { Review } from '../home-page/entities/review.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  async findOne(productId: number): Promise<Product> {
	  const product = await this.productsRepository.findOne({
	    where: { id: productId },
	    relations: ['images', 'reviews'],
	  });

	  if (!product) {
	    throw new NotFoundException(`Product with ID ${productId} not found`);
	  }

	  return product;
	}

  async findRelatedProducts(productId: number): Promise<Product[]> {
    const product = await this.productsRepository.findOne({ where: { id: productId } });
    if (!product) return [];

    return this.productsRepository.find({
      where: {
        brand: product.brand,
        id: Not(product.id), // Corrected Not() usage
      },
      take: 4, // Return 4 related products
    });
  }

  async addReview(productId: number, reviewData: Partial<Review>): Promise<Review> {
    const product = await this.productsRepository.findOne({ where: { id: productId } });
    if (!product) throw new Error('Product not found');

    const review = this.reviewsRepository.create({ ...reviewData, product });
    return this.reviewsRepository.save(review);
  }
}
