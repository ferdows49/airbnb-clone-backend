import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePropertyPhotoDto {
  @IsNumber()
  property_id: number;

  @IsString()
  photo_url: string;

  @IsOptional()
  @IsString()
  caption?: string;

  @IsOptional()
  @IsBoolean()
  is_primary?: boolean = false;

  @IsInt()
  display_order: number;
}
