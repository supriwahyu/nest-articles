import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactForm } from '../home-page/entities/contact-form.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('submit')
  submitContactForm(@Body() contactForm: ContactForm): Promise<ContactForm> {
    return this.contactService.submitContactForm(contactForm);
  }

  @Get('info')
  getContactInfo(): Promise<any> {
    return this.contactService.getContactInfo();
  }
}
