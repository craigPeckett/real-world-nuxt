import EventService from '@/services/EventService'
export default {
  state: {
    event: {},
    events: []
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    fetchEvents({ commit }) {
      return EventService.getEvents().then(res => {
        commit('SET_EVENTS', res.data)
      })
    },
    fetchEvent({ commit }, id) {
      return EventService.getEvent(id).then(res => {
        commit('SET_EVENT', res.data)
      })
    }
  }
}
