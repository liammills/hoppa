<template>
  <div class="card bg-off-white">
    <h6 style="margin-bottom: 10px">{{ title }}</h6>
    <p>{{ body }}</p>
    <div v-if="type=='article'">
      <a :href="link">Read more</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostCard',
  props: {
    type: String,
    title: String,
    link: String,
    body: String,
    color: String,
  },
});
</script>

<style scoped>

</style>
