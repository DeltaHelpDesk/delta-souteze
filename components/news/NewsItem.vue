<template>
  <div class="news col-lg-12">
    <a :href="link"><h3>{{title}}</h3></a>
    <nuxt-link :to="`/souteze/${prefix}`"><span class="small">{{ prefix }}</span></nuxt-link>
    <p>{{content|truncate(150)}}</p>
  </div>
</template>
<script>
  export default {
    name: 'NewsItem',
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true
      },
      prefix: {
        type: String,
        required: true
      }
    }
  };
</script>
<style scoped>
</style>
