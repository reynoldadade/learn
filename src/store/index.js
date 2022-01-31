import { createStore } from "vuex";
import EventsService from "@/services/Events.service";

const store = createStore({
  state: {
    events: [],
    event: {},
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload;
    },
    setEvent(state, payload) {
      state.event = payload;
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      try {
        const response = await EventsService.getEvents();
        commit("setEvents", response.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async fetchEvent({ commit, state }, id) {
      const event = state.events.find((event) => event.id === id);
      if (event) {
        commit("setEvent", event);
      } else {
        const response = await EventsService.getEvent(id);
        commit("setEvent", response.data);
      }
    },
  },
  getters: {
    getEvents(state) {
      return state.events;
    },
    getEvent(state) {
      return state.event;
    },
  },
});

export default store;
