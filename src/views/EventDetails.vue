<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: { id: { type: Number, required: true } },
  mounted() {
    this.fetchEvent(this.id);
  },
  methods: {
    ...mapActions({
      fetchEvent: "fetchEvent",
    }),
  },
  computed: {
    ...mapGetters({
      event: "getEvent",
    }),
  },
};
</script>

<style></style>
