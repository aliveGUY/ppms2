import { Module } from '@nestjs/common';
import { BookingController } from '../controllers/BookingController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from '../services/BookingService';
import { Booking } from '../entities/Booking';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule { }
