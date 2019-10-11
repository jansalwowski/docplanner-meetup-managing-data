import Vue from 'vue';

export const MODULE_ENTITIES = 'MODULE_ENTITIES';
export const MUTATION_UPDATE_ENTITIES = 'MUTATION_UPDATE_ENTITIES';
export const GETTER_ALL_ENTITIES = 'GETTER_ALL_ENTITIES';
export const GETTER_GET_ENTITIES = 'GETTER_GET_ENTITIES';

const state = {};

const getters = {
  [GETTER_ALL_ENTITIES](state) {
    return state;
  },

  [GETTER_GET_ENTITIES](state) {
    return (type, ids) => {
      const entities = state[type] || {};

      return ids
        .map(id => entities[id])
        .filter(Boolean);
    };
  },
};

const mutations = {
  [MUTATION_UPDATE_ENTITIES](state, data) {
    // Loop over all kinds of entities we received
    Object
      .entries(data)
      .forEach(([type, entities]) => {
        if (!state[type]) {
          state[type] = {};
        }

        Object
          .entries(entities)
          .forEach(([key, entity]) => {
            const oldEntity = state[type][key] || {};
            const newEntity = {
              ...oldEntity,
              ...entity,
            };

            Vue.set(state[type], key, newEntity);
          });
      });
  },
};

export default {
  state,
  getters,
  mutations,
};
