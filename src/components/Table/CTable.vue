<template>
  <div>
    <slot name="header" />
    <div class="w-full max-w-full overflow-x-auto">
      <table class="w-full min-w-max">
        <thead>
          <tr>
            <th
              class="p-3 bg-gray-100 first:rounded-l-md last:rounded-r-md text-sm text-left text-slate-400 first:pl-5 last:pr-5"
              :class="{ 'w-[5%]': h.key === '_index' }"
              v-for="(h, index) in head"
              :key="index"
            >
              {{ h.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(d, index) in data"
            :key="index"
            class="border-b border-gray-200 last:border-none"
          >
            <td
              v-for="(h, idx) in head"
              :key="idx"
              class="py-5 px-3 text-sm text-slate-900"
            >
              <slot :name="h.key" :data="d">
                {{
                  h.key === "_index"
                    ? (page - 1) * limit + (index + 1)
                    : d[h.key]
                }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  head: {
    title: string;
    key: string;
  }[];

  data: {
    [key: string]: any;
  }[];

  page?: number;
  limit?: number;
}
withDefaults(defineProps<Props>(), {
  page: 1,
  limit: 10,
});

const head = [
  {
    title: "№",
    key: "_index",
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Phone",
    key: "phone",
  },
];

const data = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "08123456789",
  },
  {
    name: "Jonatan Donatan",
    email: "jonatan@johndoe.com",
    phone: "08123456789",
  },
  {
    name: "Jonatan Donatan",
    email: "jonatan@johndoe.com",
    phone: "08123456789",
  },
];

const page = 1;
const limit = 10;
</script>
