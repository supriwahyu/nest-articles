import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { TeamMember } from '../home-page/entities/team-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamMember])],
  providers: [AboutService],
  controllers: [AboutController],
})
export class AboutModule {}
