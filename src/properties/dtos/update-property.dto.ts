import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { PropertyTypeEnum } from '../enums/property-type.enum';

export class UpdatePropertyDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(PropertyTypeEnum)
  property_type?: PropertyTypeEnum;

  @IsOptional()
  @IsString()
  room_type?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  zip_code?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 8 })
  latitude?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 8 })
  longitude?: number;

  @IsOptional()
  @IsInt()
  num_bedrooms?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  num_bathrooms?: number;

  @IsOptional()
  @IsInt()
  max_guests?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  price_per_night?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  cleaning_fee?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  service_fee?: number;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
