<template>
  <div>
    <Project v-for="(project, index) in projects" :authors="project.authors" :description="project.description" :title="project.title" :key="index"/>
  </div>
</template>
<script>
import Project from './Project';
export default {
  name: 'Projects',
  components: { Project },
  props: {
    prefix: {
      type: String,
      required: true,
    },
  },
  computed: {
    projects() {
      return this.$store.getters['projects/getDataByPrefix'](this.prefix);
    },
  },
};
</script>
<style scoped>
</style>
