import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get('mission')
  getMissionStatement(): Promise<string> {
    return this.aboutService.getMissionStatement();
  }

  @Get('team')
  getTeamMembers(): Promise<any[]> {
    return this.aboutService.getTeamMembers();
  }

  @Get('history')
  getHistory(): Promise<string> {
    return this.aboutService.getHistory();
  }

  @Get('contact-info')
  getContactInfo(): Promise<any> {
    return this.aboutService.getContactInfo();
  }
}
