<template>
  <div
    id="card"
    class="bg-secondary"
  >
    <h4>{{subtitle}}</h4>
    <ion-title>{{title}}</ion-title>
    <p>{{body}}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmissionSummary',
  props: {
    subtitle: String,
    title: String,
    body: String,
  },
});
</script>

<style scoped>

</style>
