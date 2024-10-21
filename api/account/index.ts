import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as mongodb from '../../lib/mongodb';
import * as accountService from '../../service/account.service';

async function search(query: any = {}, response: VercelResponse) {
  const accounts = await accountService.search();
  return response.status(200).json({ accounts })
}

export default async function (req: VercelRequest, response: VercelResponse) {
  await mongodb.connect();

  if(req.method === 'GET') {
    search(req.query, response);
  } else if (req.method === 'POST') {
    return response.status(400);
  } else {
    return response.status(400);
  }
}