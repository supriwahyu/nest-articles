import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../home-page/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/profile')
  getUserProfile(@Param('id') userId: number): Promise<User> {
    return this.userService.getUserProfile(userId);
  }

  @Put(':id/profile')
  updateUserProfile(@Param('id') userId: number, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.updateUserProfile(userId, updateData);
  }

  @Get(':id/activity-log')
  getUserActivityLog(@Param('id') userId: number): Promise<any[]> {
    return this.userService.getUserActivityLog(userId);
  }

  @Get(':id/saved-items')
  getUserSavedItems(@Param('id') userId: number): Promise<any[]> {
    return this.userService.getUserSavedItems(userId);
  }
}
