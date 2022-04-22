<template>
  <div id="card">
    <strong>{{ name }}</strong>
    <span>Post</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostCard',
  props: {
    name: String,
    color: String,
  },
});
</script>

<style scoped>
#card {
  background: var(--ion-color-off-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  padding: 3vw;
  margin: 1vw 3vw;
}
</style>
