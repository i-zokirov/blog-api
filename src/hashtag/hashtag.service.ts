import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateHashtagDto } from './dto/create-hashtag.dto'
import { UpdateHashtagDto } from './dto/update-hashtag.dto'
import { Hashtag } from './schema/hashtag.schema'

@Injectable()
export class HashtagService {
  constructor(
    @InjectModel(Hashtag.name) private hashtagModel: Model<Hashtag>,
  ) {}

  create(createHashtagDto: CreateHashtagDto) {
    const createdHashtag = new this.hashtagModel(createHashtagDto)
    return createdHashtag.save()
  }

  findAll() {
    return this.hashtagModel.find()
  }

  findOne(id: string) {
    return this.hashtagModel.findById(id)
  }

  update(id: string, updateHashtagDto: UpdateHashtagDto) {
    return this.hashtagModel.findByIdAndUpdate(
      id,
      {
        $set: updateHashtagDto,
      },
      {
        new: true,
      },
    )
  }

  remove(id: string) {
    return this.hashtagModel.findByIdAndDelete(id)
  }
}
