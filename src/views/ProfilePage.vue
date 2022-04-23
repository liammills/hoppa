<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <h1 class="heading" size="large">profile</h1>
        </ion-toolbar>
      </ion-header>
      <div class="container" style="display: flex; align-items: center; margin-bottom: 40px">
        <ProfilePicture
          color1="#C9B3D7"
          color2="lightblue"
          large
          style="margin-right: 10vw;"
        />
        <div>
          <h6 class="text-primary" style="margin: 0 0 8px 0">Liam Zhangshuo</h6>
          <p>Member since 2022</p>
        </div>
      </div>
      <div class="container text-center">
        <h6 class="text-pink">Your average monthly carbon footprint is</h6>
        <h1 style="display: block">1290kg</h1>
        <EmissionsSummary />
        <div class="card text-primary bg-off-white">
          <img
            class="container"
            style="width: 100%; margin: 15px 0 0 0;"
            src="../../resources/chart-exemplar.svg"
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
} from '@ionic/vue';
import ProfilePicture from '@/components/ProfilePicture.vue';
import EmissionsSummary from '@/components/EmissionsSummary.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ProfilePicture, EmissionsSummary,
  },
});
</script>

<style scoped>
.heading {
  font-size: 36px;
  margin-left: 3vw;
}
</style>
