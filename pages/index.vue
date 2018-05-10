<template>
  <section class="container news-section">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Novinky a projekty</h2>
      </div>
        <div class="col-lg-12">
          <news v-for="(prefix, index) in $store.getters['news/getPrefixes']" :prefix="prefix" :limit="1" :key="index" />
        </div>
      
      <div class="col-lg-12">        
        <projects v-for="(prefix, index) in $store.getters['projects/getPrefixes']" :prefix="prefix" :limit="1" :key="index" />
      </div>
      </div>
  </section>
</template>
<script>
import DATASOURCES from '~/plugins/data-sources';
import News from '../components/news/News';
import Projects from '../components/projects/Projects';

export default {
  components: { Projects, News },
  async fetch({ store }) {
    let promises = [];
    Object.keys(DATASOURCES).forEach(competition => promises.push(store.dispatch('news/fetchData', { competition })));
    Object.keys(DATASOURCES).forEach(competition => promises.push(store.dispatch('projects/fetchData', { competition })));
    await Promise.all(promises)
  },
};
</script>
<style>
</style>
