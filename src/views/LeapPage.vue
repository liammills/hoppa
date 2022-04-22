<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Leap to Net Zero</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Leap to Net Zero</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <div class="carousel">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide
            v-for="slide in slides"
            :key="slide.title"
            class="slide"
          >
            <CarouselPicture />
            <div class="slide-text">
              <h6>{{slide.title}}</h6>
              <p>{{slide.description}}</p>
            </div>
          </ion-slide>
          <!-- <ion-slide class="slide">
            <h1>Slide 2</h1>
          </ion-slide>
          <ion-slide class="slide">
            <h1>Slide 3</h1>
          </ion-slide> -->
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSlide, IonSlides,
} from '@ionic/vue';
import CarouselPicture from '@/components/CarouselPicture.vue';

export default defineComponent({
  name: 'LeapPage',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSlide,
    IonSlides,
    CarouselPicture,
  },
  data() {
    return {
      slides: [
        {
          title: 'Australian Forest Conservation',
          description: 'Using satellite technology to monitor '
          + 'and protect existing forests across Australia...',
        },
      ],
    };
  },
});
</script>

<style>
.carousel {
  margin-bottom: 10px;
}
.slide {
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
}
.slide-text {
  width: 250px;
}
</style>
