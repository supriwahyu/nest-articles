import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactForm } from '../home-page/entities/contact-form.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactForm)
    private contactFormRepository: Repository<ContactForm>,
  ) {}

  async submitContactForm(contactForm: ContactForm): Promise<ContactForm> {
    return this.contactFormRepository.save(contactForm);
  }

  async getContactInfo(): Promise<any> {
    // Return contact information
    return {
      email: 'support@website.com',
      phone: '+123456789',
      address: '123 Tech Street, Tech City, Country',
      socialMedia: {
        facebook: 'https://facebook.com/website',
        twitter: 'https://twitter.com/website',
        instagram: 'https://instagram.com/website',
      },
    };
  }
}
