export const state = () => ({
  accordeonData: ''
})

export const getters = {
  getAccordeonData (state) {
    return state.accordeonData
  }
}

export const mutations = {
  addAccordeonData (state, payload) {
    state.accordeonData = payload
  }
}

/* export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
} */
