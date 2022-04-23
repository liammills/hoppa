<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        class="card text-primary bg-secondary text-center"
        style="margin: 20px 3vw"
      >
        <h6>PLACE FOR LOGO</h6>
        <h2>CISSA</h2>
      </div>
      <div class="card text-off-white bg-primary text-center" style="margin-bottom: 15px">
        <h1 class="text-off-white" style="display: block">54090kg</h1>
        <h2>CO2 emitted</h2>
        <h6>38 members</h6>
      </div>
      <div class="card text-pink bg-off-white text-center">
        <h2>leaderboard</h2>
      </div>
      <div class="card text-primary bg-off-white">
        <h5>Squad monthly progress</h5>
        SPACE FOR CHART
        <h2>2120kg squad saved</h2>
        <div class="text-blue spread">
          <h6>Transport</h6>
          <h6>900kg</h6>
        </div>
        <div class="text-pink spread">
          <h6>Food</h6>
          <h6>500kg</h6>
        </div>
        <div class="text-tertiary spread">
          <h6>Energy</h6>
          <h6>720kg</h6>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonContent,
} from '@ionic/vue';

export default defineComponent({
  name: 'SquadPage',
  components: {
    IonContent, IonPage,
  },
});
</script>

<style scoped>

</style>
