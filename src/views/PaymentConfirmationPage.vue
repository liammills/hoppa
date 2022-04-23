<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar class="container">
          <h6 @click="$router.back()" class="text-pink">back to browse</h6>
          <h1 class="text-pink heading" size="large move-down">confirmation</h1>
        </ion-toolbar>
      </ion-header>
      <div style="margin-top: 80px;" class="card bg-secondary text-primary text-center">
        <h2>payment amount</h2>
        <div class="horizontal">
          <div class="circle bg-primary">
            <h2 style="font-size: 50px" class="text-in-icon-minus text-off-white">-</h2>
          </div>
          <h1 class="text-pink" style="margin: 0 15px">
            $<ion-input type="number" :value="amount"></ion-input>
          </h1>
          <div class="circle bg-primary">
            <h2 style="font-size: 50px" class="text-in-icon-plus text-off-white">+</h2>
          </div>
        </div>
        <h1 style="display: block">1090kg</h1>
      </div>
      <h5 class="text-primary" style="margin: 25px 3vw 10px 3vw">payment methods</h5>
      <div class="card bg-off-white">
        <div class="payment-line">
          <ion-icon :icon="toggle" class="icon"/><h5>**** **** **** 1234</h5>
        </div>
        <div class="payment-line">
          <ion-icon :icon="plus" class="icon"/><h5 class="text-primary">add payment method</h5>
        </div>
      </div>
      <div
        class="container spread"
        style="width: calc(100% - 6vw - 15px); margin-top:20px; align-items: center;"
      >
        <ion-icon :icon="shield" class="shield" />
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
import fArrow from '../../resources/icons/fArrow.svg';
import plus from '../../resources/icons/plus.svg';
import shield from '../../resources/icons/shield.svg';
import toggle from '../../resources/icons/toggle.svg';

export default defineComponent({
  name: 'PaymentConfirmationPage',
  components: {
    IonHeader, IonToolbar, IonContent, IonPage, BigButton,
  },
  setup() {
    return {
      fArrow,
      plus,
      shield,
      toggle,
    };
  },
  data() {
    return {
      amount: 15.62,
    };
  },
});
</script>

<style>
.move-up {
  position: relative;
  top: 400px;
}

.heading {
  font-size: 36px;
  margin-left: 3vw;
}

.horizontal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.round {
  border-radius: 50%;
  width: 70px;
  height: 50px;
  margin: 0;
  padding-left: 20;
}
.circle {
  min-height: 48px;
  min-width: 48px;
  border-radius: 50%;
  display: inline-block;
}
.text-in-icon-minus {
  position: absolute;
  z-index: 3;
  margin-left: 14px;
  margin-top: 10px;
}
.text-in-icon-plus {
  position: absolute;
  z-index: 3;
  margin-left: 9px;
  margin-top: 13px;
}
.payment-line {
  display: flex;
  align-items: center;
  justify-content: left;
}
.icon {
  margin-right: 9vw;
}
.shield {
  width: 40;
  height: 48;
  margin-right: 3vw;
}
</style>
