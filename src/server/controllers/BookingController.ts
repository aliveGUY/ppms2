import { Controller, Post, Body } from '@nestjs/common';
import { BookingService } from '../services/BookingService';
import { Booking } from '../entities/Booking';

@Controller('api/booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @Post()
  async create(@Body() body: { start_date: Date, end_date: Date, description: string }): Promise<Booking> {
    const { start_date, end_date, description } = body
    return await this.bookingService.createBooking(start_date, end_date, description)
  }
}