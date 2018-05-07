<template>
  <div>
    <section class="border-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">News</h2>
          </div>
        </div>
      <!-- <news :prefix="$route.params.slug"></news>-->
      </div>
    </section>

    <!-- Projects -->
    <section class="section-two">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Projects</h2>
          </div>
        </div>
     <!--  <projects :prefix="$route.params.slug"></projects>-->
      </div>
    </section>
  </div>
</template>

<script>
  import News from "../../components/news/News";
  import Projects from "../../components/projects/Projects";

  export default {
    name: "_slug",
    components: {Projects, News},
   /* asyncData({store})
    {
      store.dispatch('news/fetchData');
    }*/
  }
</script>

<style scoped>

</style>
