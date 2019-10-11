import { schema } from 'normalizr';
import { commentCollectionSchema } from './commentSchema';
import { userSchema } from './userSchema';

export const ENTITY_POST = 'posts';
export const postSchema = new schema.Entity(ENTITY_POST, {
  comments: commentCollectionSchema,
  user: userSchema,
});
export const postCollectionSchema = new schema.Array(postSchema);
