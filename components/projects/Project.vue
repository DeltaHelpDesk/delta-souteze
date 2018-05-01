<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p v-for="(author, index) in authors" :key="index">{{ author }}</p>
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
    }
  }
};
</script>
<style scoped>
</style>
