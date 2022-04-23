<template>
    <div
      class="circle"
      :style="`background: linear-gradient(217deg, ${color1}, ${color2});`"
    />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfilePicture',
  props: {
    color1: String,
    color2: String,
  },
});
</script>

<style>
.circle {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: inline-block;
}
</style>
