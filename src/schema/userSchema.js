import { schema } from 'normalizr';

// USER
export const ENTITY_USER = 'users';
export const userSchema = new schema.Entity(ENTITY_USER);
export const userCollectionSchema = new schema.Array(userSchema);
