<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text-primary">activity</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <h1 class="heading" size="large">activity</h1>
        </ion-toolbar>
      </ion-header>
      <ActivityBlock
        color='primary'
        icon="walking"
        title="Walking Distance"
        quantity='2.5 km'
      />
      <ActivityBlock
        color='primary'
        icon="car"
        title="Driving Distance"
        quantity='30 km'
      />
      <ActivityBlock
        color='primary'
        icon="bus"
        title="Public Transport Distance"
        quantity='2.5 km'
      />
      <ActivityBlock
        color='pink'
        icon="food"
        title="Meat Consumed"
        quantity='40 g'
      />
      <ActivityBlock
        color='tertiary'
        icon="energy"
        title="Energy Used"
        quantity='40 kw'
      />
      <div class="circle bg-primary" style="position: fixed; bottom: 3vw; right: 4vw">
        <h2 style="font-size: 50px" class="text-in-icon-plus text-off-white">+</h2>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
} from '@ionic/vue';
import ActivityBlock from '@/components/ActivityBlock.vue';

export default defineComponent({
  name: 'ActivityPage',
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ActivityBlock,
  },
});
</script>

<style scoped>
.heading {
  font-size: 36px;
  margin-left: 3vw;
}
.circle {
  min-height: 48px;
  min-width: 48px;
  border-radius: 50%;
  display: inline-block;
}
.text-in-icon-plus {
  position: absolute;
  z-index: 3;
  margin-left: 9px;
  margin-top: 13px;
}
</style>
