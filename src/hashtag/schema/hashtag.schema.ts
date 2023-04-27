import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'

@Schema({
  timestamps: true,
})
export class Hashtag {
  @Prop({ required: true, unique: true })
  name: string
}

export type HashtagDocument = HydratedDocument<Hashtag>
export const HashtagSchema = SchemaFactory.createForClass(Hashtag)
