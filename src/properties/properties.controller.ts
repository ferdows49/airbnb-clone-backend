import { Body, Controller, Get, Post } from '@nestjs/common';
import { Property } from './entities/property.entity';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dtos/create-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async findAll(): Promise<Property[]> {
    return this.propertiesService.findAll();
  }

  @Post()
  async createProperty(@Body() createPropertyDto: CreatePropertyDto):Promise<Property> {
    return this.propertiesService.createProperty(createPropertyDto);
  }
}
