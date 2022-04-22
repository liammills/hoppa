<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
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
      <div
        style="margin-top: 15px"
        v-for="post in posts"
        :key="post.title"
      >
        <PostCard
          :userName="post.userName"
          :type="post.type"
          :title="post.title"
          :body="post.body"
          :img="post.imgSrc"
        />
      </div>
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
      posts: [
        {
          type: 'article',
          title: 'How to install a solar array on your home',
          body: 'We’re facing an energy crisis. Demand for oil and gas is increasing, '
          + 'outpacing supply. That, among other factors, has contributed to a sharp increase'
          + 'in prices and has helped create a growing market for alternative-energy sources.',
          imgSrc: '',
        },
      ],
    };
  },
});
</script>
