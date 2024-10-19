
import * as mongodb from '../lib/mongodb';
import { getAll } from '../service/account.service';

export async function GET() {
  await mongodb.connect();
  const accounts = await getAll();
  const jsonData = JSON.stringify({ accounts });

  return new Response(jsonData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
