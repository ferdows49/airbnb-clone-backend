import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dtos/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findAll(): Promise<Property[]> {
    return this.propertyRepo.find();
  }

  async createProperty(
    createPropertyDto: CreatePropertyDto,
  ): Promise<Property> {
    const newProperty = this.propertyRepo.create(createPropertyDto);
    return this.propertyRepo.save(newProperty);
  }
}
