import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Hashtag } from '../../hashtag/schema/hashtag.schema'
import { User } from '../../user/schema/user.schema'
import { Category } from '../../category/schema/category.schema'

@Schema({
  timestamps: true,
})
export class Blog {
  @Prop({ required: true })
  title: string

  @Prop({ required: false })
  description: string

  @Prop({ required: false })
  image: string

  @Prop({ required: true })
  content: string

  @Prop({ required: true, default: 'draft' })
  status: 'darft' | 'published' | 'archived'

  @Prop({})
  publishedAt: Date

  @Prop()
  archivedAt: Date

  @Prop({ required: true, default: false })
  isFeatured: boolean

  @Prop({ required: true, default: false })
  isPinned: boolean

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hashtag' }],
    default: [],
  })
  hashtags: Hashtag[]

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    default: [],
  })
  category: Category

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  authors: User[]

  @Prop({ required: true, default: 0 })
  views: number

  @Prop({ required: true, default: 0 })
  likes: number

  @Prop({ required: true, default: 0 })
  dislikes: number

  @Prop({ required: true, default: 0 })
  shares: number
}

export type BlogDocument = HydratedDocument<Blog>
export const BlogSchema = SchemaFactory.createForClass(Blog)
