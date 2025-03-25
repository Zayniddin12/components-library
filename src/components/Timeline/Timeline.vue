<template>
  <div class="s-timeline relative w-full max-w-[866px] mx-auto">
    <div
      class="w-[2px] bg-[#191c1c] absolute top-0 left-[50%] h-full s-transition"
    ></div>
    <STimelineCard
      v-for="(item, index) in cards"
      :id="item?.id"
      :key="index"
      class="-mt-6"
      :class="index % 2 === 0 ? 'left-1/2' : 'left-0'"
      :position="index % 2 === 0 ? 'left' : 'right'"
      :active="step >= item.step"
      :height="step > item.step"
      :description="item.description"
      :name="item?.name"
    />
  </div>
</template>

<script setup lang="ts">
import STimelineCard from "@/components/Timeline/STimelineCard.vue";

interface Props {
  step?: number;
}

withDefaults(defineProps<Props>(), {});

const cards = [
  {
    step: 1,
    id: "application_sent",
    name: "sent",
    description: "sent_text",
  },
  {
    step: 2,
    id: "application_moderating",
    name: "in_moderating",
    description: "in_moderating_text",
  },
  {
    step: 3,
    id: "application_accepted",
    name: "accepted",
    description: "accepted_text",
  },
  {
    step: 4,
    id: "application_final_stage",
    name: "final_stage",
    description: "final_stage_text",
  },
];
</script>
<style scoped>
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background-color: #191c1c;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  right: -4px;
  background-color: black;
  border: 2px solid #3de6fd;
  top: 45%;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -8px;
}
</style>
