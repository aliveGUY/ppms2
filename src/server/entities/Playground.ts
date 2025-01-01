import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Playground {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  location: string;
}
