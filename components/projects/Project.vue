<template>
  <div class="projects col-lg-6">
    <h3>{{title}}</h3>
    <nuxt-link :to="`/souteze/${prefix}`"><span class="small">{{ prefix }}</span></nuxt-link>
    <ul class="authors">
      <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    authors: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
</style>
