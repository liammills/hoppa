<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Payment Confirmation Page</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar class="container">
          <h6 @click="$router.back()" class="text-pink">back to browse</h6>
          <h1 class="text-pink heading" size="large move-down">confirmation</h1>
        </ion-toolbar>
      </ion-header>
      <div style="margin-top: 80px;" class="card bg-secondary text-primary text-center">
        <h2>payment amount</h2>
        PLACE FOR NUMBER INPUT
        <h1 style="display: block">1090kg</h1>
      </div>
      <h5 class="text-primary" style="margin: 25px 3vw 10px 3vw">payment methods</h5>
      <div class="card bg-off-white">
        PLACE FOR PAYMENT METHODS STUFF
      </div>
      <div
        class="container spread"
        style="width: calc(100% - 6vw - 15px); margin-top:20px; align-items: center;"
      >
        <p style="margin-right: 15px">ICON</p>
        <p>These transactions are protacted and guaranteed according to our terms and conditons.</p>
      </div>
      <BigButton style="margin-top: 40px">proceed</BigButton>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonContent,
} from '@ionic/vue';
import BigButton from '@/components/BigButton.vue';

export default defineComponent({
  name: 'PaymentConfirmationPage',
  components: {
    IonHeader, IonToolbar, IonContent, IonPage, BigButton,
  },
});
</script>

<style scoped>
.move-up {
  position: relative;
  top: 400px;
}

.heading {
  font-size: 36px;
}
</style>
