// import { AccountModel } from '@lib/mongodb/models';

// const RESULT_LIMIT = 5;
// const DEFAULT_GET_OPTION = { lean: true };
// const SNAPSHOT_FIELDS = 'sourceFilename outputFilename';

// export type GetCountFileQuery = {
//   sourceFilename?: string;
//   storeId?: string;
//   countId?: string;
// };

// export async function search(query: GetCountFileQuery & any = {}) {
//   // Temporary delet extra fields
//   delete query.limit;
//   delete query.fields;

//   const result = await AccountModel.find(query, { ...DEFAULT_GET_OPTION })
//   .select('sourceFilename outputFilename sourceContainer destinationContainer storeId countId status')
//   .populate('snapshot', SNAPSHOT_FIELDS)
//   .limit(RESULT_LIMIT)
//   .sort({ createdAt: -1})
//   .exec()

//   return result;
// }

// export async function get(id: string) {
//   const result = AccountModel.findById(id, '', { ...DEFAULT_GET_OPTION })
//   .populate('snapshot', SNAPSHOT_FIELDS)
//   .exec();

//   return result;
// }

export const get = async () => {
  const result = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())

  return result;

}