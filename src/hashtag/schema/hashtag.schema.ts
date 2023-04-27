import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { User } from '../../user/schema/user.schema'

@Schema({
  timestamps: true,
})
export class Hashtag {
  @Prop({ required: true, unique: true })
  name: string
  // @Prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // })
  // createdBy: User
}

export type HashtagDocument = HydratedDocument<Hashtag>
export const HashtagSchema = SchemaFactory.createForClass(Hashtag)
