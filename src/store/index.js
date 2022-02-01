import { createStore as vuexCreateStore } from "vuex";
import EventsService from "@/services/Events.service";

const storeConfiguration = {
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
};

//create default store
const defaultOverrides = {
  state: () => {
    return {};
  },
};

function makeState(initialState, overrideState) {
  return {
    ...(typeof initialState === "function" ? initialState() : initialState),
    ...overrideState,
  };
}

export function createStore(storeOverrides = defaultOverrides) {
  return vuexCreateStore({
    ...storeConfiguration,
    ...storeOverrides,
    ...{
      state: makeState(storeConfiguration.state, storeOverrides.state),
    },
  });
}

export default createStore();
