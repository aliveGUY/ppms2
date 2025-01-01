import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Playground } from "./Playground";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  uniqueid: number;

  @Column("datetime")
  start_date: Date;

  @Column("datetime")
  end_date: Date;

  @Column("text")
  description: string;

  @ManyToOne(() => Playground, (playground) => playground.bookings)
  @JoinColumn({ name: "uniqueid" })
  playground: Playground;
}
