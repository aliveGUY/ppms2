import { Repository } from "typeorm";
import { Booking } from "../entities/Booking";

export class BookingRepository extends Repository<Booking> {
  async createBooking(
    uniqueid: number,
    start_date: Date,
    end_date: Date,
    description: string
  ): Promise<Booking> {
    const booking = new Booking();
    booking.uniqueid = uniqueid;
    booking.start_date = start_date;
    booking.end_date = end_date;
    booking.description = description;
    return await this.save(booking);
  }
}
