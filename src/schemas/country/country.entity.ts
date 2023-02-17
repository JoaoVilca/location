import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel } from '../IDelete/IDelete.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from "class-transformer";

export default class CountryAttributes extends IDeletableModel {
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  code: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  prefixNumber: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  timeZone: string
}
