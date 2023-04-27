import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common'
import { HashtagService } from './hashtag.service'
import { CreateHashtagDto } from './dto/create-hashtag.dto'
import { UpdateHashtagDto } from './dto/update-hashtag.dto'

@Controller('hashtag')
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) {}

  @Post()
  async create(@Body() createHashtagDto: CreateHashtagDto) {
    try {
      return await this.hashtagService.create(createHashtagDto)
    } catch (error) {
      console.error(error)
      throw new BadRequestException(error.message)
    }
  }

  @Get()
  findAll() {
    return this.hashtagService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hashtagService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHashtagDto: UpdateHashtagDto) {
    return this.hashtagService.update(id, updateHashtagDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hashtagService.remove(id)
  }
}
