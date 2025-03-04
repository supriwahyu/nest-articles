import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactForm } from '../home-page/entities/contact-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactForm])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
