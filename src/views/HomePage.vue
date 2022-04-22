<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h1>Home</h1>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <EmissionsSummary
            :title="`hello, ${user_name}!`"
            body="Here’s a quick overview of your emissions this month."
          />
        </ion-toolbar>
      </ion-header>

      <PostCard name="hi" />

      <ExploreContainer name="Home page" />

      <h6>PLEASE work</h6>

      <p>This WILL work</p>

      <a>Read more</a>

      <h2>This looks different</h2>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonContent,
} from '@ionic/vue';
import EmissionsSummary from '@/components/EmissionsSummary.vue';
import PostCard from '@/components/PostCard.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonHeader, IonToolbar, IonContent, IonPage, PostCard, EmissionsSummary,
  },
  data() {
    return {
      user_name: 'liam',
    };
  },
});
</script>
