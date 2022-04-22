<template>
  <div class="card text-primary bg-secondary negative-bottom-margin">
    <h4>{{subtitle}}</h4>
    <h1>{{title}}</h1>
    <h6 class="bottom-padding">{{body}}</h6>
  </div>
  <div style="height: 18px;">
    <div class="card bg-primary move-up">
      <div class="col-1">
        <div class="full-width">
          <ion-icon
            class="big-icon"
            :icon="food"
          />
        </div>
        <p class="text-off-white semibold">{{emissions.food}} kg</p>
      </div>
      <div class="col-1">
        <div class="full-width">
          <ion-icon
            class="big-icon"
            :icon="car"
          />
        </div>
        <p class="text-off-white semibold">{{emissions.transportation}} kg</p>
      </div>
      <div class="col-1">
        <div class="full-width">
          <ion-icon
            class="big-icon"
            :icon="energy"
          />
        </div>
        <p class="text-off-white semibold">{{emissions.energy}} kg</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import food from '../../resources/icons/food-icon.svg';
import car from '../../resources/icons/car-icon.svg';
import energy from '../../resources/icons/energy-icon.svg';

export default defineComponent({
  name: 'EmissionSummary',
  props: {
    subtitle: String,
    title: String,
    body: String,
  },
  setup() {
    return {
      food,
      car,
      energy,
    };
  },
  data() {
    return {
      emissions: {
        food: 90,
        transportation: 900,
        energy: 310,
      },
    };
  },
});
</script>

<style scoped>
.col-1 {
  width: 33.33%;
  display: inline-block;
  text-align: center;
}
.full-width {
  width: 100%;
}
.big-icon {
  width: 38px;
  height: 38px;
}
.bottom-padding {
  padding-bottom: 70px;
}
.move-up {
  position: relative;
  top: -70px;
}
</style>
