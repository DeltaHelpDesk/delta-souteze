<template>
  <div class="row">
    <Project v-for="(project, index) in projects" :authors="project.authors" :description="project.description" :title="project.title" :prefix="prefix" :key="index"/>
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
      required: true
    },
    limit: {
      type: Number,
      required: false,
      default: null,
    }
  },
  computed: {
    projects() {
      let data = this.$store.getters['projects/getDataByPrefix'](this.prefix);
      if (data === undefined) return [];
      else return this.limit === null ? data : data.slice(0, this.limit);
    }
  }
};
</script>
<style scoped>

</style>
