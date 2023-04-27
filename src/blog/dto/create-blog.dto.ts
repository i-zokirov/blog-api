import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsBoolean,
  IsEnum,
  IsArray,
  IsOptional,
} from 'class-validator'

export class CreateBlogDto {
  @ApiProperty({
    example: 'My Blog Title',
    description: 'The title of the blog post',
  })
  @IsNotEmpty()
  @IsString()
  title: string

  @ApiPropertyOptional({
    example: 'A short description of the blog post',
    description: 'A brief summary of the blog post',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'The URL of the main image for the blog post',
    required: false,
  })
  @IsUrl()
  image: string

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet...',
    description: 'The content of the blog post',
  })
  @IsNotEmpty()
  @IsString()
  content: string

  @ApiProperty({
    example: 'draft',
    description: 'The status of the blog post',
  })
  @IsEnum(['draft', 'published', 'archived'])
  status: 'draft' | 'published' | 'archived'

  @ApiPropertyOptional({
    example: 'False',
    description: 'If the blog post is featured',
  })
  @IsBoolean()
  @IsOptional()
  isFeatured: boolean

  @ApiPropertyOptional({
    example: 'False',
    description: 'If the blog post is pinned        ',
  })
  @IsBoolean()
  @IsOptional()
  isPinned: boolean

  @ApiPropertyOptional({
    example: ['hashtag1_id', 'hashtag2_id'],
    description: 'The hashtags of the blog post',
  })
  @IsArray()
  @IsOptional()
  hashtags: string[]

  @ApiProperty({
    example: 'category_id',
    description: 'The category of the blog post',
  })
  @IsNotEmpty()
  @IsString()
  category: string
}
