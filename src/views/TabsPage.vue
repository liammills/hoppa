<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="home"
          href="/tabs/home"
          @click="activeTab = 'home'"
        >
          <ion-icon
            v-if="activeTab == 'home'"
            :icon="homeSelected"
          />
          <ion-icon
            v-else
            :icon="homeUnselected"
          />
          <ion-badge
            v-if="notifications"
            color="tertiary"
          >
            {{notifications}}
          </ion-badge>
          <ion-label>home</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="leap"
          href="/tabs/leap"
          @click="activeTab = 'leap'"
        >
          <ion-icon
            v-if="activeTab == 'leap'"
            :icon="leapSelected"
          />
          <ion-icon
            v-else
            :icon="leapUnselected"
          />
          <ion-label>leap</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="activity"
          href="/tabs/activity"
          @click="activeTab = 'activity'"
        >
          <ion-icon
            v-if="activeTab == 'activity'"
            :icon="activitySelected"
          />
          <ion-icon
            v-else
            :icon="activityUnselected"
          />
          <ion-label>activity</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="squad"
          href="/tabs/squad"
          @click="activeTab = 'squad'"
        >
          <ion-icon
            v-if="activeTab == 'squad'"
            :icon="squadSelected"
          />
          <ion-icon
            v-else
            :icon="squadUnselected"
          />
          <ion-label>squad</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="profile"
          href="/tabs/profile"
          @click="activeTab = 'profile'"
        >
          <ion-icon
            v-if="activeTab == 'profile'"
            :icon="profileSelected"
          />
          <ion-icon
            v-else
            :icon="profileUnselected"
          />
          <ion-label>profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonBadge,
} from '@ionic/vue';
import homeSelected from '../../resources/icons/nav_home_selected.svg';
import homeUnselected from '../../resources/icons/nav_home_unselected.svg';
import leapSelected from '../../resources/icons/nav_leap select.svg';
import leapUnselected from '../../resources/icons/nav_leap unselect.svg';
import activitySelected from '../../resources/icons/nav_activity select.svg';
import activityUnselected from '../../resources/icons/nav_activity unselect.svg';
import squadSelected from '../../resources/icons/nav_squad select.svg';
import squadUnselected from '../../resources/icons/nav_squad unselect.svg';
import profileSelected from '../../resources/icons/nav_profile select.svg';
import profileUnselected from '../../resources/icons/nav_profile unselect.svg';

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonBadge,
  },
  setup() {
    return {
      homeSelected,
      homeUnselected,
      leapSelected,
      leapUnselected,
      activitySelected,
      activityUnselected,
      squadSelected,
      squadUnselected,
      profileSelected,
      profileUnselected,
    };
  },
  data() {
    return {
      notifications: 3,
      activeTab: 'home',
    };
  },
});
</script>
