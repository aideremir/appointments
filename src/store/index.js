import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    appointments: []
  },
  mutations: {
    toggleCompleteAppointment(state, appointment) {
      const foundAppointment = state.appointments.find((item) => item === appointment)
      if (foundAppointment) {
        foundAppointment.isComplete = !foundAppointment.isComplete
      }
    },
    removeAppointment(state, appointment) {
      state.appointments = state.appointments.filter((item) => item !== appointment)
    },
    addAppointment(state, appointment) {
      const defaultAppointment = {
        isComplete: false
      }
      state.appointments.push({...defaultAppointment, ...appointment})
    }
  },
  actions: {
    toggleCompleteAppointment({ commit }, appointment) {
      commit('toggleCompleteAppointment', appointment)
    },
    removeAppointment({ commit }, appointment) {
      commit('removeAppointment', appointment)
    },
    addAppointment({ commit }, appointment) {
      commit('addAppointment', appointment)
    }
  },
  getters: {
    upcoming: state => {
      return state.appointments.sort((a, b) => a.date > b.date ? 1 : -1)
    }
  }
})
