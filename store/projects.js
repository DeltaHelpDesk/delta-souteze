import axios from 'axios/index';
import DATASOURCES from '~/plugins/data-sources';

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
      console.log(`Fetching data from ${DATASOURCES[competition]}/projects`);
      const { data } = await axios.get(`${DATASOURCES[competition]}/projects`);
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
