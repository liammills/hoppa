<template>
  <div class="card" style="margin-bottom: 15px;">
    <div
      v-if="colors && name && time"
      style="display: flex; align-items: center; margin-bottom: 15px"
    >
      <ProfilePicture
        v-if="colors.length == 2"
        :color1="colors[0]"
        :color2="colors[1]"
        style="margin-right: 20px;"
      />
      <div>
        <h6 style="margin: 0 0 2px 0">{{name}}</h6>
        <p>{{time}}</p>
      </div>
    </div>
    <h6 style="margin-bottom: 10px">{{ title }}</h6>
    <p>{{ body }}</p>
    <img
      v-if="imgSrc === 'tram'"
      class="image"
      style="margin-bottom: 10px"
      src="../../resources/tram.jpeg"
    >
    <img
      v-if="imgSrc === 'panels'"
      class="image"
      style="margin-bottom: 10px"
      src="../../resources/panels.jpeg"
    >
    <div v-if="type=='article'">
      <a href="https://solvoltaics.com/how-to-install-solar-panels/">Read more</a>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center">
      <div style="display: flex">
        <div v-if="likes">
          <p class="text-in-icon">{{likes}}</p>
          <ion-icon
            :icon="heartOutline"
            class="icon"
          />
          <!-- <ion-icon
            :icon="heart"
            color="pink"
          /> -->
        </div>
        <div v-if="comments">
          <p class="text-in-icon">{{comments}}</p>
          <ion-icon
            :icon="chatbubblesOutline"
            class="icon"
          />
          <!-- <ion-icon
            :icon="chatbubbles"
          /> -->
        </div>
      </div>
      <h6 style="margin-top: 0" v-if="emissions">+ {{emissions}}kg</h6>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {
  heart, heartOutline, chatbubblesOutline,
} from 'ionicons/icons';
import ProfilePicture from '@/components/ProfilePicture.vue';

export default defineComponent({
  name: 'PostCard',
  setup() {
    return {
      heart,
      heartOutline,
      chatbubblesOutline,
    };
  },
  props: {
    type: String,
    title: String,
    link: String,
    body: String,
    name: String,
    time: String,
    colors: Array,
    likes: Number,
    comments: Number,
    emissions: Number,
    imgSrc: String,
  },
  components: {
    ProfilePicture,
  },
});
</script>

<style lang="css" scoped>
.image {
  border-radius: 18px;
  height: 100%;
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  margin-top: 10px;
}
.icon {
  height: 17.8px;
  width: 17.8px;
}
.text-in-icon {
  position: absolute;
  z-index: 3;
  margin-left: 7px;
  margin-top: 3.5px;
  font-size: 8px;
  font-weight: 600;
}
</style>
