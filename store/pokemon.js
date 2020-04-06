import axios from 'axios'

export const actions = {
  async query({commit}) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        commit('count', response.data.count)
        commit('next', response.data.next)
        commit('previous', response.data.previous)
        commit('results', response.data.results)
      })
  }
}

export const store = () => ({
  count: 0,
  next: '',
  previous: '',
  results: []
})

export const mutations = {
  count (state, count) {
    state.count = count
  },
  next (state, next) {
    state.next = next
  },
  previous (state, previous) {
    state.previous = previous
  },
  results (state, results) {
    state.results = results
  }
}

export const getters = {
  items: (state) => {
    return state.results
  },
  count: (state) => {
    return state.count
  },
  next: (state) => {
    return state.next
  },
  previous: (state) => {
    return state.previous
  }
}
