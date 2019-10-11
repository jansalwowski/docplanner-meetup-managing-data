import Vue from 'vue';
import Vuex from 'vuex';
import entities, { MODULE_ENTITIES } from './modules/entities';
import wall, { MODULE_WALL } from './modules/wall';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [MODULE_ENTITIES]: entities,
    [MODULE_WALL]: wall,
  },
});
