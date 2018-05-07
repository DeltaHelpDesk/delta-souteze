<template>
  <div class="news col-md-4">
    <a :href="link"><h3>{{title}}</h3></a>
    <p>{{content}}</p>
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
      }
    }
  };
</script>
<style scoped>
</style>
