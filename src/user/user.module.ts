import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../home-page/entities/user.entity';
import { ActivityLog } from '../home-page/entities/activity-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ActivityLog])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
