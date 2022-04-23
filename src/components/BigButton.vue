<template>
    <div class="card big-button">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'BigButton',
});
</script>

<style>
.big-button {
  background-color: var(--ion-color-pink);
  border-radius: 18px;
  width: calc(100%-6vw);
  height: 51px;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: var(--ion-color-off-white);
  margin-bottom: 3vw;
}
</style>
