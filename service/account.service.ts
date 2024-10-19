import { AccountModel } from '../lib/mongodb/schema';

export async function getAll() {

  const result = await AccountModel.find({})
  .limit(0)
  .sort({ createdAt: -1})
  .exec()

  return result;
}

// export async function get(id: string) {
//   const result = AccountModel.findById(id, '', { ...DEFAULT_GET_OPTION })
//   .populate('snapshot', SNAPSHOT_FIELDS)
//   .exec();

//   return result;
// }