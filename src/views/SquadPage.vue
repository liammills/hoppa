<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Squad Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Squad Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Squad page" />
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
  name: 'SquadPage',
  components: {
    ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
  },
});
</script>
