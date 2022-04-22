<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Activity Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Activity Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Activity page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'ActivityPage',
  components: {
    ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  },
});
</script>
