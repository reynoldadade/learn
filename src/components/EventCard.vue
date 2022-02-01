<template>
  <div class="p-4 rounded border shadow" data-testid="event-card">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4 class="font-semibold">{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
