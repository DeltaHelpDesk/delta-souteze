import axios from 'axios/index';

export const state = () => ({
  data: {},
});

export const mutations = {
  SET_DATA(state, { data, prefix }) {
    state.data[prefix] = data;
  },
};

export const actions = {
  async fetchData({ commit }, { url, prefix }) {
    try {
      const { data } = await axios.get(`${url}/projects`);
      commit('SET_DATA', { data, prefix });
    } catch (e) {
      console.log(e);
    }
  },
};
