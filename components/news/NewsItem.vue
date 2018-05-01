<template>
  <div>
    <a :href="link"><h2>{{ title }}</h2></a>
    <p>{{ content }}</p>
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
