<template>
  <ion-page>
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

      <div>
        <BigButton @click="$router.push('pay')">take the leap!</BigButton>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonContent, IonSlide, IonSlides,
} from '@ionic/vue';
import CarouselPicture from '@/components/CarouselPicture.vue';
import EmissionsSummary from '@/components/EmissionsSummary.vue';
import BigButton from '@/components/BigButton.vue';

export default defineComponent({
  name: 'LeapPage',
  components: {
    IonHeader,
    IonToolbar,
    IonContent,
    IonPage,
    IonSlide,
    IonSlides,
    CarouselPicture,
    EmissionsSummary,
    BigButton,
  },
  data() {
    return {
      slides: [
        {
          title: 'Australian Forest Conservation',
          description: 'Using satellite technology to monitor '
          + 'and protect existing forests across Australia...',
        },
        {
          title: 'Australian Forest Conservation',
          description: 'Using satellite technology to monitor '
          + 'and protect existing forests across Australia...',
        },
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
