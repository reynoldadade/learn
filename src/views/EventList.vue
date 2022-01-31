<template>
  <div>
    <h1>Events for Good</h1>
    <div>
      <router-link
        v-for="event in events"
        :key="event.id"
        :to="{ name: 'EventDetails', params: { id: event.id } }"
      >
        <EventCard :event="event" />
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    EventCard,
  },
  computed: {
    ...mapGetters({
      events: "getEvents",
    }),
  },
  methods: {
    ...mapActions({
      fetchEvents: "fetchEvents",
    }),
  },

  created() {
    this.fetchEvents();
  },
};
</script>

<style></style>
