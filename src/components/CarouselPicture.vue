<template>
    <div class="carousel-div">
      <img class="carousel-image" src="../../resources/treepic.jpeg">
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CarouselPicture',
});
</script>

<style>
.carousel-image {
  border-radius: 18px;
  height: 300px !important;
  width: 200px !important;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.carousel-div {
  margin: 10px 0px;
}
</style>
