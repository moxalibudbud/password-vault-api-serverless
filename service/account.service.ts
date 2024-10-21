import { AccountModel } from '../lib/mongodb/schema';

export async function search() {
  const result = await AccountModel.find({})
  .limit(0)
  .sort({ createdAt: -1})
  .exec()

  return result;
}

export async function get(id: string) {
  const result = AccountModel.findById(id)
  .lean()
  .exec();

  return result;
}

export async function put(_id: string, body: any) {
  const fields = {
    $set: { ...body }
  };

  await AccountModel.findByIdAndUpdate(_id, fields, { lean: true, new: true });
}

export async function post(body: any) {
  const account = new AccountModel(body);
  await account.save();
  return account._id;
}