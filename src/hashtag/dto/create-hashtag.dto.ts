import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateHashtagDto {
  @ApiProperty({ type: String, description: 'Category name' })
  @IsString()
  title: string
}
