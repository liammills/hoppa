<template>
    <div class="card button">
        <h6 style="margin-top: 0">{{name}}</h6>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'BigButton',
    props: {
        name: String,
    }
});
</script>

<style>
/* .s {
    padding-top: -3vw;
} */
.button {
  background-color: var(--ion-color-pink);
  border-radius: 10px;
  width: 70px;
  /* height: 30px; */
  text-align: center;
  color: var(--ion-color-off-white);
  padding: 3vw 0;
  margin-left: 0;
}
</style>
