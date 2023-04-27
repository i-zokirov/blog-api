import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BlogModule } from './blog/blog.module'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { HashtagModule } from './hashtag/hashtag.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get<string>('DATABASE_URL'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      },
    }),
    BlogModule,
    UserModule,
    CategoryModule,
    HashtagModule,
  ],
  controllers: [AppController],
  providers: [
    ConfigService,
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true }),
    },
  ],
})
export class AppModule {}
