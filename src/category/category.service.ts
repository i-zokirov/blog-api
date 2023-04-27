import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Category, CategoryDocument } from './schema/category.schema'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    const createdCategory = new this.categoryModel(createCategoryDto)
    return createdCategory.save()
  }

  findAll() {
    return this.categoryModel.find()
  }

  findOne(id: string) {
    return this.categoryModel.findById(id)
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true,
    })
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id)
  }

  deleteMany(query: FilterQuery<CategoryDocument>) {
    return this.categoryModel.deleteMany(query)
  }
}
