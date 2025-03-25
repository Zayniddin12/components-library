<template>
  <div>
    <div
      class="h-full w-full flex items-center rounded transition-300 hover:border-blue cursor-pointer"
      :class="[
        {
          'border border-dashed border-gray-100': !images.length,
          '!border-red': error,
        },
      ]"
    >
      <input
        id="file"
        type="file"
        name="file"
        class="w-0 h-0 absolute"
        accept="image/png, image/jpeg"
        multiple
        @change="handleFile"
      />
      <div class="flex gap-3" v-if="images.length">
        <div
          class="w-[68px] h-[68px] flex-y-center relative"
          v-for="(item, index) in images"
          :key="index"
        >
          <img
            :src="item.url"
            alt="avatar"
            class="w-[68px] h-[68px] object-cover relative z-0 rounded"
            @error="item.url = null"
          />
          <div
            class="transition-300 group absolute top-1 right-1 w-5 h-5 bg-red flex items-center justify-center z-20 rounded cursor-pointer border border-transparent hover:scale-110"
            @click="removeImage(index)"
          >
            <span class="transition-300 icon-trash text-white text-base"></span>
          </div>
        </div>
        <div
          @click="getFile"
          class="w-[68px] h-[68px] flex-center relative border-2 border-dashed border-blue rounded bg-white-100 transition-300 group"
        >
          <i
            class="icon-plus-circle transition-300 text-blue text-2xl group-hover:scale-110"
          ></i>
        </div>
      </div>
      <div
        v-else
        class="w-full h-full py-3 backdrop-blur bg-gray-150 flex items-center justify-center flex-col gap-5"
        @click="getFile"
      >
        <slot>
          <div class="text-base flex-center">
            <i class="icon-link text-gray text-2xl mr-2.5"></i>
            <span class="leading-130 text-dark font-medium"
              >Перетащите файл</span
            >
            <span class="text-dark leading-130 mx-1">или</span>
            <span class="text-blue">выберите</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, reactive, watch } from "vue";

const emit = defineEmits(["change"]);
interface Props {
  item: string;
  small: boolean;
  error: boolean;
  desc: string;
  defaultImages?: string[];
}
type image = {
  url: string;
  name: string;
  file: File;
  type: string;
};
const props = defineProps<Props>();
const images = reactive<image[]>([]);

watch(
  () => props.defaultImages,
  (value) => {
    if (value) {
      value.forEach((item) => {
        images.push({
          url: item,
          name: "",
          file: new File([], item),
          type: "image",
        });
      });
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
const handleFile = async (event: Event) => {
  const target = event?.target as HTMLInputElement | null;
  if (target?.files === null) {
    return;
  }
  if (target?.files?.length) {
    for (let key in target?.files) {
      if (target?.files[key].type?.includes("video")) {
        console.log("video");
        const video = document.createElement("video");
        // video.crossOrigin = 'anonymous';
        // set the video element's src to the chosen file
        video.src = URL.createObjectURL(target?.files[key]);
        console.log(video.src, "video.src");
        // wait for the video to load metadata
        video.addEventListener("loadedmetadata", () => {
          // create a new canvas element
          const canvas = document.createElement("canvas");

          // set the canvas dimensions to match the video
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          // draw the video frame to the canvas at the current time
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

          // get the canvas contents as a data URL
          const thumbnail = canvas.toDataURL("image/png");
          images.push({
            url: thumbnail,
            name: target?.files[key].name,
            file: target?.files[key],
            type: "video",
          });
        });
      } else {
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(target?.files[key]);
          reader.onerror = (error) => reject(error);
        })
          .then((res) => {
            //Do not touch this, or else You will find yourself DEAD!!!
            images.push({
              url: res as string,
              name: target?.files[key].name,
              file: target?.files[key],
              type: "image",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  send();
};
const getFile = () => {
  const input = document.getElementById("file");
  input?.click();
};
const removeImage = (index: number) => {
  images.splice(index, 1);
  send();
};
function send() {
  emit("change", images);
}
</script>
<style>
.color {
  color: #e74c3c;
}
</style>
