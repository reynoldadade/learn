import { mount } from "@vue/test-utils";
import EventCard from "@/components/EventCard.vue";

describe("EventCard.vue", () => {
  it("renders the events data successfully", () => {
    const event = {
      id: 1,
      title: "Coaching little league",
      date: "September 29th, 2022",
      time: "9:00 AM",
    };

    const wrapper = mount(EventCard, {
      props: {
        event,
      },
    });

    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toContain(event.title);
    expect(wrapperHtml).toContain(event.date);
    expect(wrapperHtml).toContain(event.time);
  });
});
