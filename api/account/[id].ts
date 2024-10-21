import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as mongodb from '../../lib/mongodb';
import * as accountService from '../../service/account.service';


async function get(req: VercelRequest, response: VercelResponse) {
  const account = await accountService.get(req.query.id as string);
  return response.status(200).json({ account });
}

async function update(req: VercelRequest, response: VercelResponse) {
  await accountService.put(req.query.id as string, req.body);
  return response.status(200).json({});
}

export default async function (req: VercelRequest, response: VercelResponse) {
  await mongodb.connect();

  if(req.method === 'GET') {
    await get(req, response);
  } else if (req.method === 'PUT') {
    await update(req, response);
  } else {
    return response.status(400);
  }
}