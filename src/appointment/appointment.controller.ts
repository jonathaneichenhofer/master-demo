import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() dto: CreateAppointmentDto) {
    return this.appointmentService.create(dto);
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAppointmentDto) {
    return this.appointmentService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appointmentService.delete(id);
  }
}
