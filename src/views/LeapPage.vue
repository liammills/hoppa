<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Leap to Net Zero</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <EmissionsSummary
            subtitle="your emissions"
            title="1290kg"
          />
        </ion-toolbar>
      </ion-header>

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
import EmissionsSummary from '@/components/EmissionsSummary.vue';

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
    EmissionsSummary,
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
