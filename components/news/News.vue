<template>
  <div class="row">
    <NewsItem v-for="(item, index) in news" :content="item.content" :link="item.link" :title="item.title" :key="index"/>
  </div>
</template>
<script>
import NewsItem from './NewsItem';
export default {
  name: 'News',
  components: { NewsItem },
  props: {
    prefix: {
      type: String,
      required: true,
    },
  },
  computed: {
    news() {
      return this.$store.getters['news/getDataByPrefix'](this.prefix);
    },
  },
};
</script>
<style scoped>
</style>
