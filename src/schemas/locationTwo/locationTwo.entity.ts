import {ModelExt} from "../../methods/shared.methods.class";
import {IDeletableModel} from "../IDelete/IDelete.model";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";
import LocationOneAttributes from "../locationOne/locationOne.entity";

export default class LocationTwoAttributes extends IDeletableModel {
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
  @Type(() => LocationOneAttributes)
  @IsNotEmpty()
  country?: LocationOneAttributes;

}
