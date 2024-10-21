import * as mongodb from '@lib/mongodb';
import * as accountService from '@service/account.service';
import type { VercelRequest, VercelResponse } from '@vercel/node';

async function get(query: any = {}, response: VercelResponse) {
  const account = await accountService.get(query.id);
  return response.status(200).json({ account })
}

export default async function (req: VercelRequest, response: VercelResponse) {
  await mongodb.connect();

  if(req.method === 'GET') {
    get(req.query, response);
  } else if (req.method === 'PUT') {
    return response.status(400);
  } else {
    return response.status(400);
  }
}