import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomePageModule } from './home-page/home-page.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Use your preferred database type
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HomePageModule, // Register HomePageModule
  ],
})
export class AppModule {}
