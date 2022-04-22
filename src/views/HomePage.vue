<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <PostCard name="hi" />

      <ExploreContainer name="Home page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
} from '@ionic/vue';
import PostCard from '@/components/PostCard.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, PostCard,
  },
});
</script>
