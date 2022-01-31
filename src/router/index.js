//import router
import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetails from "@/views/EventDetails.vue";
import EventCreate from "@/views/EventCreate.vue";
import ErrorDisplay from "@/views/ErrorDisplay.vue";
import About from "@/views/About.vue";

const routes = [
  { path: "/", component: EventList, name: "EventList" },
  {
    path: "/event/:id",
    component: EventDetails,
    name: "EventDetails",
    props: true,
  },
  { path: "/event/create", component: EventCreate, name: "EventCreate" },
  { path: "/about", component: About, name: "About" },
  { path: "/error/:/error", component: ErrorDisplay, name: "ErrorDisplay" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
