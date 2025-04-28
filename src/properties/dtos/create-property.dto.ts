import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { PropertyTypeEnum } from '../enums/property-type.enum';
import { RoomTypeEnum } from '../enums/room-type.enum';
import {
  GuestFavoriteAmenitiesEnum,
  SafetyAmenitiesEnum,
  StandoutAmenitiesEnum,
} from '../enums/amenities.enum';

export class CreatePropertyDto {
  @IsNumber()
  host_id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(PropertyTypeEnum)
  property_type: PropertyTypeEnum;

  @IsEnum(RoomTypeEnum)
  room_type: RoomTypeEnum;

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

  @IsInt()
  num_beds: number;

  @IsEnum(GuestFavoriteAmenitiesEnum, { each: true })
  guest_favorite_amenities: GuestFavoriteAmenitiesEnum[];

  @IsEnum(StandoutAmenitiesEnum, { each: true })
  standout_amenities: StandoutAmenitiesEnum[];

  @IsEnum(SafetyAmenitiesEnum, { each: true })
  safety_amenities: SafetyAmenitiesEnum[];

  @IsNumber({ maxDecimalPlaces: 2 })
  price_per_night: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  cleaning_fee: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  service_fee: number;

  @IsOptional()
  photos: any;
}
