import { denormalize, normalize } from 'normalizr';
import { generatePosts } from '../../generators/post';
import { postCollectionSchema } from '../../schema/postSchema';
import { GETTER_ALL_ENTITIES, MUTATION_UPDATE_ENTITIES } from './entities';

export const MODULE_WALL = 'MODULE_WALL';

export const ACTION_LOAD_POSTS = 'ACTION_LOAD_POSTS';

export const MUTATION_SET_POSTS = 'MUTATION_SET_POSTS';

export const GETTER_WALL_POSTS = 'GETTER_WALL_POSTS';

const state = {
  postIds: [],
};

const getters = {
  [GETTER_WALL_POSTS](state, getters, rootState, rootGetters) {
    return denormalize(state.postIds, postCollectionSchema, rootGetters[GETTER_ALL_ENTITIES]);
  },
};

const mutations = {
  [MUTATION_SET_POSTS](state, postIds) {
    state.postIds = postIds;
  },
};

const actions = {
  async [ACTION_LOAD_POSTS]({ commit }) {
    const input = generatePosts();

    const {
      entities,
      result,
    } = normalize(input, postCollectionSchema);

    commit(MUTATION_UPDATE_ENTITIES, entities, { root: true });
    commit(MUTATION_SET_POSTS, result);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
