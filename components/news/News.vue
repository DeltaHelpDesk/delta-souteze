<template>
  <div class="row">
    <NewsItem v-for="(item, index) in news" :content="item.content" :link="item.link" :title="item.title"
              :prefix="prefix" :key="index" />
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
    limit: {
      type: Number,
      required: false,
      default: null,
    },
  },
  computed: {
    news() {
      let data = this.$store.getters['news/getDataByPrefix'](this.prefix);
      if (data === undefined) return [];
      else return this.limit === null ? data : data.slice(0, this.limit);
    },
  },
};
</script>
<style scoped>
</style>
