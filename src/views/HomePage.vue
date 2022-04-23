<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <EmissionsSummary
            :title="`hello, ${userName}!`"
            body="Here’s a quick overview of your emissions this month."
          />
        </ion-toolbar>
      </ion-header>
      <div
        v-for="post in posts"
        :key="post.title"
      >
        <PostCard
          :userName="post.userName"
          :type="post.type"
          :title="post.title"
          :body="post.body"
          :imgSrc="post.imgSrc"
          :name="post.name"
          :colors="post.colors"
          :time="post.time"
          :likes="post.likes"
          :comments="post.comments"
          :emissions="post.emissions"
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
      userName: 'liam',
      posts: [
        {
          name: 'Lydia Smith',
          time: 'Today at 12:30pm',
          colors: ['violet', '#FECCD8'],
          title: 'Tram down to client lunch',
          imgSrc: 'tram',
          likes: 5,
          comments: 4,
          emissions: 10,
        },
        {
          type: 'article',
          title: 'How to install a solar array on your home',
          body: 'We’re facing an energy crisis. Demand for oil and gas is increasing, '
          + 'outpacing supply. That, among other factors, has contributed to a sharp increase'
          + 'in prices and has helped create a growing market for alternative-energy sources.',
          link: '',
          imgSrc: 'panels',
        },
      ],
    };
  },
});
</script>
