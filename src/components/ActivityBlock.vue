<template>
    <div
      class="card text-off-white"
      :class="`bg-${color}`"
      style="margin-bottom: 10px;"
    >
      <div class="spread">
        <div style="display: flex">
          <ion-icon v-if="icon == 'food'" :icon="food" style="margin-right: 10px;" />
          <ion-icon v-if="icon == 'walking'" :icon="walkOutline" style="margin-right: 10px;" />
          <ion-icon v-if="icon == 'bus'" :icon="busOutline" style="margin-right: 10px;" />
          <ion-icon v-if="icon == 'car'" :icon="car" style="margin-right: 10px;" />
          <ion-icon v-if="icon == 'energy'" :icon="energy" style="margin-right: 10px;" />
          <h6 style="margin-top: 0">{{title}}</h6>
        </div>
        <div>
          <p class="text-off-white">Today at 12:30pm</p>
        </div>
      </div>
      <h3>{{quantity}}</h3>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import {
  busOutline, walkOutline,
} from 'ionicons/icons';
import food from '../../resources/icons/food-icon.svg';
import car from '../../resources/icons/car-icon.svg';
import energy from '../../resources/icons/energy-icon.svg';

export default defineComponent({
  name: 'ActivityBlock',
  setup() {
    return {
      food,
      car,
      energy,
      busOutline,
      walkOutline,
    };
  },
  props: {
    color: String,
    icon: String,
    quantity: String,
    title: String,
  },
});
</script>
