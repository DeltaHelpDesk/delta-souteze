<template>
  <div>
    <section class="border-bottom container news-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Novinky</h2>
          </div>
        </div>
        <news :prefix="$route.params.slug"></news>
      </div>
    </section>
    <section class="section-two container news-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Projekty</h2>
          </div>
        </div>
        <projects :prefix="$route.params.slug"></projects>
      </div>
    </section>
  </div>
</template>
<script>
import News from '../../components/news/News';
import Projects from '../../components/projects/Projects';

export default {
  components: { Projects, News },
  async fetch({ store, params }) {
    await store.dispatch('projects/fetchData', { competition: params.slug });
    await store.dispatch('news/fetchData', { competition: params.slug });
  },
};
</script>
<style scoped>
</style>
