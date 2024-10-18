
import { get } from '../service/account.service';

export async function GET(request: Request) {
  const account = await get();
  const jsonData = JSON.stringify(account);

  return new Response(jsonData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
