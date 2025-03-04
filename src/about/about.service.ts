import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamMember } from '../home-page/entities/team-member.entity';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(TeamMember)
    private teamMemberRepository: Repository<TeamMember>,
  ) {}

  async getMissionStatement(): Promise<string> {
    // In a real app, fetch this from a database or a config file
    return 'Our mission is to provide excellent service and quality products.';
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return this.teamMemberRepository.find();
  }

  async getHistory(): Promise<string> {
    // In a real app, fetch this from a database or a config file
    return 'Our company was founded in 2020 with a mission to revolutionize tech products.';
  }

  async getContactInfo(): Promise<any> {
    // Return contact information
    return {
      email: 'info@website.com',
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
