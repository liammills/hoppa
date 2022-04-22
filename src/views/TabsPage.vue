<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="leap" href="/tabs/leap">
          <ion-icon :icon="square" />
          <ion-label>Leap</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="activity" href="/tabs/activity">
          <ion-icon :icon="ellipse" />
          <ion-label>Activity</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="squad" href="/tabs/squad">
          <ion-icon :icon="triangle" />
          <ion-label>Squad</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet,
} from '@ionic/vue';
import {
  homeOutline, ellipse, square, triangle, personCircleOutline,
} from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet,
  },
  setup() {
    return {
      homeOutline,
      ellipse,
      square,
      triangle,
      personCircleOutline,
    };
  },
});
</script>
