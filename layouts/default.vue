<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand js-scroll-trigger">HomePage</nuxt-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" @click="btnClicked">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive" ref="menu">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item" v-for="(competition, index) in DATASOURCES" :key="index">
              <nuxt-link class="nav-link" :to="`/souteze/${competition}`">{{competition}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading text-uppercase">{{ $route.path === '/' ? 'Delta soutěže' : $route.params.slug }}
          </div>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>
<script>
import DATASOURCES from '~/plugins/data-sources';

export default {
  data: () => ({
    DATASOURCES: Object.keys(DATASOURCES),
    menuActive: false,
  }),
  methods: {
    btnClicked() {
      if(this.menuActive)
      {
        this.menuActive=false;
       this.$refs['menu'].style="display:none;";
      }
      else
      {
        this.menuActive=true;
         this.$refs['menu'].style="display:block;";
      }

      console.log(this.$refs['menu'])
    }
  }
};
</script>
<style>
</style>
