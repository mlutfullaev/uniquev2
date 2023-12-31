import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hole',
      database: 'unique',
      models: [],
      autoLoadModels: true
    }),
  ],
})
export class AppModule {}