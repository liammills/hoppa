<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <img
        class="container"
        style="width: calc(100% - 6vw); margin-top: 18vh"
        src="../../resources/card-exemplar.svg"
      >
      <h5 class="container">PLACE FOR CARD DATA INPUT</h5>
      <BigButton style="margin-top: 40px">add</BigButton>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonContent,
} from '@ionic/vue';
import BigButton from '@/components/BigButton.vue';

export default defineComponent({
  name: 'PaymentConfirmationPage',
  components: {
    IonContent, IonPage, BigButton,
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
