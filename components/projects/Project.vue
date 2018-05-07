<template>
  <div class="projects col-md-4">
    <h3>{{title}}</h3>
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
      }
    }
  };
</script>
<style scoped>
</style>
