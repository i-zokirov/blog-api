import { Injectable } from '@nestjs/common'
import { CreateBlogDto } from './dto/create-blog.dto'
import { UpdateBlogDto } from './dto/update-blog.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Blog } from './schema/blog.schema'
import { Model } from 'mongoose'

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}
  create(createBlogDto: CreateBlogDto) {
    const createdBlog = new this.blogModel(createBlogDto)
    return createdBlog.save()
  }

  findAll() {
    return this.blogModel.find()
  }

  findOne(id: string) {
    return this.blogModel.findById(id)
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.blogModel.findByIdAndUpdate(
      id,
      {
        $set: updateBlogDto,
      },
      {
        new: true,
      },
    )
  }

  remove(id: string) {
    return this.blogModel.findByIdAndDelete(id)
  }
}
