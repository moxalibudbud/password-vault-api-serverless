import mongoose from 'mongoose';

let conn: any;
// const uri = process.env.MONGODB_URI as string;
const uri = 'mongodb+srv://moxalihighmongodbprod:Cx6QFhHvuSgD3m@cluster0.sidxbd9.mongodb.net/password_vault?retryWrites=true&w=majority&appName=Cluster0';

export const connect = async function () {
  if(!conn) {
    const options = {};

    console.log(`Connecting to ${uri}`, options);
    conn = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    }).then(() => mongoose);

    await conn;
    console.info('\u2713', `MongoDB connected to ${uri}`);
  }

  return conn;
};
