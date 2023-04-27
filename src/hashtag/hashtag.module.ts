import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { HashtagService } from './hashtag.service'
import { HashtagController } from './hashtag.controller'
import { HashtagSchema, Hashtag } from './schema/hashtag.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hashtag.name, schema: HashtagSchema }]),
  ],
  controllers: [HashtagController],
  providers: [HashtagService],
})
export class HashtagModule {}
