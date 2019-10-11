import { schema } from 'normalizr';
import { userSchema } from './userSchema';

// COMMENT
export const ENTITY_COMMENT = 'comments';
export const commentSchema = new schema.Entity(ENTITY_COMMENT, {
  user: userSchema,
});
export const commentCollectionSchema = new schema.Array(commentSchema);
