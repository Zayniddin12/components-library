<template>
  <div class="relative overflow-hidden">
    <video
      src="/videos/showrell.mp4"
      @loadedmetadata="setVideoPlayer"
      @pause="play(false)"
      @ended="onEnded"
      @timeupdate="handleDuration"
      @contextmenu.prevent
    ></video>

    <!-- Controls -->
    <div
      class="absolute w-full bottom-0 left-0 z-10 text-white py-4 px-5 !pt-8 grid grid-cols-[max-content_1fr_max-content] items-center bg-gradient-to-t from-black/50 to-transparent transition gap-3"
    >
      <button v-if="!isPlaying" @click="play(true)">
        <span class="icon-play text-white text-2xl"></span>
      </button>
      <button
        v-else
        @click="play(false)"
        class="flex items-center gap-1 w-6 h-[28.5px]"
      >
        <div class="w-1 h-4 bg-white" />
        <div class="w-1 h-4 bg-white" />
      </button>
      <div class="w-full">
        <input
          v-model="range"
          type="range"
          class="w-full"
          :max="meta.duration"
          step="any"
          @input="handleInput"
        />
      </div>
      <div class="min-w-[100px]">
        {{ meta.playedMask }} / {{ meta.durationMask }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const player = ref<HTMLVideoElement>();
const isPlaying = ref(false);
const meta = reactive({
  duration: 0,
  durationMask: "00:00",
  played: 0,
  playedMask: "00:00",
});

const range = ref(0);

const play = (val?: boolean) => {
  isPlaying.value = !!val;
  if (val) {
    player.value?.play();
  } else {
    player.value?.pause();
  }
};

const setVideoPlayer = (e: Event) => {
  setTimeout(() => {
    const target = e.target as HTMLVideoElement;
    player.value = target;
    meta.duration = target.duration;
    const mm = Math.floor(target.duration / 60);
    const ss = Math.floor(target.duration % 60);
    meta.durationMask = `${mm > 9 ? mm : "0" + mm}:${ss > 9 ? ss : "0" + ss}`;
  }, 1);
};

const handleDuration = (e: Event) => {
  const target = e.target as HTMLVideoElement;
  range.value = target.currentTime;
  const mm = Math.floor(target.currentTime / 60);
  const ss = Math.floor(target.currentTime % 60);
  meta.playedMask = `${mm > 9 ? mm : "0" + mm}:${ss > 9 ? ss : "0" + ss}`;
};

const handleInput = (e: any) => {
  player.value.currentTime = Number(range.value);
};

const onEnded = () => {
  play(false);
};
</script>
