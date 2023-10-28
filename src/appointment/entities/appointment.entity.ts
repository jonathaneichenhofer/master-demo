import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  location: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
