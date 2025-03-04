import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../home-page/entities/user.entity';
import { ActivityLog } from '../home-page/entities/activity-log.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ActivityLog)
    private activityLogRepository: Repository<ActivityLog>,
  ) {}

  async getUserProfile(userId: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async updateUserProfile(userId: number, updateData: Partial<User>): Promise<User | null> {
    await this.userRepository.update(userId, updateData);
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async getUserActivityLog(userId: number): Promise<ActivityLog[]> {
    return this.activityLogRepository.find({ where: { user: { id: userId } } });
  }

  async getUserSavedItems(userId: number): Promise<any> {
    // Mock implementation; replace with actual logic to fetch saved products/articles
    return [
      { type: 'product', id: 1, name: 'Product 1' },
      { type: 'article', id: 2, title: 'Article 1' },
    ];
  }
}
