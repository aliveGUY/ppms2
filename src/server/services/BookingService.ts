import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entities/Booking';
import { generateTag } from '../utils/generateTag';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) { }

  async createBooking(start_date: Date, end_date: Date, description: string): Promise<Booking> {
    const booking = new Booking();
    booking.description = description
    booking.end_date = end_date
    booking.start_date = start_date
    return await this.bookingRepository.save(booking);
  }
}
