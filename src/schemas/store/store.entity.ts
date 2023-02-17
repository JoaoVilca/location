import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel } from '../IDelete/IDelete.model';
import { Schema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export type StoreModelExt<T> = ModelExt<T>;
export default class StoreAttributes extends IDeletableModel {
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    code!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    country!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    city!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    schedule!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    type_order!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    coordinates!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    address!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    phone!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name_manager!: string
    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    photo_store!: string
}
