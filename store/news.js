import axios from 'axios';
import DATASOURCES from '~/plugins/data-sources';
import get from '~/plugins/memoized-get';

export const state = () => ({
  data: {},
});

export const mutations = {
  SET_DATA(state, { data, prefix }) {
    state.data[prefix] = data;
  },
};

export const actions = {
  async fetchData({ commit }, { competition }) {
    try {
      console.log(`Fetching data from ${DATASOURCES[competition]}/news`);
      const { data } = await get(`${DATASOURCES[competition]}/news`);
      commit('SET_DATA', { data, prefix: competition });
    } catch (e) {
      console.log(e);
    }
  },
  async fetchRecent({ commit }, { competition }) {
    try {
      const { data } = await get(`${DATASOURCES[competition]}/news/recent`);
      commit('SET_DATA', { data, prefix: competition });
    } catch (e) {
      console.log(e);
    }
  },
};

export const getters = {
  getDataByPrefix: (state) => (prefix) => {
    return state.data[prefix];
  },
  getPrefixes: (state) => {
    return Object.keys(state.data);
  }
};
