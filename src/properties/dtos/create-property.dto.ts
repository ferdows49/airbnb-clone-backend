import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsNumber()
  host_id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  property_type: string;

  @IsString()
  room_type: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  country: string;

  @IsString()
  @IsOptional()
  zip_code: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 8 })
  latitude: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 8 })
  longitude: number;

  @IsInt()
  num_bedrooms: number;

  @IsNumber({ maxDecimalPlaces: 1 })
  num_bathrooms: number;

  @IsInt()
  max_guests: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  price_per_night: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  cleaning_fee: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  service_fee: number;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
