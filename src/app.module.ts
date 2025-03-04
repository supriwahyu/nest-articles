import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomePageModule } from './home-page/home-page.module';
import { ProductsModule } from './products/products.module';
import { ReviewModule } from './review/review.module';
import { ArticleModule } from './article/article.module';
import { ComparisonModule } from './comparison/comparison.module';
import { SearchModule } from './search/search.module';
import { AboutModule } from './about/about.module';
import { ContactService } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { FAQModule } from './faq/faq.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Use your preferred database type
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'mobile_specs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HomePageModule,
    ProductsModule,
    ReviewModule,
    ArticleModule,
    ComparisonModule,
    SearchModule,
    AboutModule,
    ContactModule,
    UserModule,
    FAQModule, // Register HomePageModule
  ],
})
export class AppModule {}
