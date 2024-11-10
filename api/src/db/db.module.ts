import { Module, DynamicModule } from "@nestjs/common";
import { Pool } from "pg";
import { DbService } from "./db.service";

@Module({})
export class DbModule {
  static register(options: { host: string; port: number; user: string; password: string; database: string }): DynamicModule {
    const poolProvider = {
      provide: 'PG_CONNECTION',
      useFactory: () => {
        return new Pool(options);
      },
    };

    return {
      module: DbModule,
      providers: [poolProvider, DbService],
      exports: [poolProvider, DbService],
    };
  }
}