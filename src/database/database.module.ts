import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/interfaces/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'user',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
