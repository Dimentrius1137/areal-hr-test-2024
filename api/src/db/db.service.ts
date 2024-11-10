import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DbService {
    constructor(@Inject('PG_CONNECTION') private readonly pool: Pool) {}

    async query(query: string, params?: any[]) {
      const client = await this.pool.connect();
      try {
        const res = await client.query(query, params);
        return res.rows;
      } finally {
        client.release();
      }
    }
}
