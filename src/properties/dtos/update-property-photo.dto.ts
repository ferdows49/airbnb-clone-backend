import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePropertyPhotoDto {
  @IsOptional()
  @IsString()
  photo_url?: string;

  @IsOptional()
  @IsString()
  caption?: string;

  @IsOptional()
  @IsBoolean()
  is_primary?: boolean = false;

  @IsOptional()
  @IsInt()
  display_order?: number;
}
