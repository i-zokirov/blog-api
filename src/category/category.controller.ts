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
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoryService.create(createCategoryDto)
    } catch (error) {
      console.error(error)
      throw new BadRequestException(error.message)
    }
  }

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id)
  }
}
