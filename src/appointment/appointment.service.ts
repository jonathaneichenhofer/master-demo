import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  create(dto: CreateAppointmentDto): Promise<Appointment> {
    const appointment = this.appointmentRepository.create(dto);
    return this.appointmentRepository.save(appointment);
  }

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }

  findOne(id: string): Promise<Appointment> {
    return this.appointmentRepository.findOne({ where: { id: id } });
  }

  async update(id: string, dto: UpdateAppointmentDto): Promise<void> {
    await this.appointmentRepository.update(id, dto);
  }

  async delete(id: string): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
