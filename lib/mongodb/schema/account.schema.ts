import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {  type: String, required: true },
  type: { type: String, required: true },
  username: { type: String },
  password: { type: String },
  note: { type: String }
}, {
  timestamps: true
});

export const AccountModel = model('account', schema);