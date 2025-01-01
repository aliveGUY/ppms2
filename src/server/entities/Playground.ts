import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Playground {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  location: string;

  @OneToMany(() => Booking, (booking) => booking.playground)
  bookings: Booking[];
}
