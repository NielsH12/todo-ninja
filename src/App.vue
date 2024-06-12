<script setup>
// import { ref, computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { useVuetify } from 'vuetify';

const { t, locale } = useI18n()
const route = useRoute()
</script>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      rail: false,
    }
  }
}
</script>

<template>
  <v-app>

    <v-system-bar>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="mx-1" density="compact" :ripple="false" width=34 variant="text" @click="console.log('wifi')"
            v-bind="props" style="min-width: 0">
            <v-icon>mdi-wifi-strength-3</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Connected to WiFi</v-list-item-title>
              <v-list-item-subtitle>SSID: HomeNetwork</v-list-item-subtitle>
              <v-list-item-subtitle>Signal Strength: Strong</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="mx-1" density="compact" :ripple="false" width=40 variant="text" @click="console.log('battery')"
            v-bind="props" style="min-width: 0">
            <v-icon>mdi-battery-70</v-icon>
            <span>67%</span>
          </v-btn>
        </template>

        <v-sheet>

          <v-container>
            Battery Health: Good
          </v-container>
        </v-sheet>
        <!-- <v-sheet> -->
        <!-- </v-sheet> -->
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="ml-1" density="compact" :ripple="false" width=40 variant="text" @click="console.log('battery')"
            v-bind="props" style="min-width: 0">
            <span>18:55</span>
          </v-btn>

        </template>

        <v-sheet>
          hejasdfsafdsafdsaasfd
        </v-sheet>
      </v-menu>
    </v-system-bar>


    <v-app-bar density="comfortable" color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title> {{ $route.name }} </v-app-bar-title>
      <!-- <v-icon class="ms-2">mdi-wifi</v-icon>
      <v-icon class="ms-2">mdi-battery-80</v-icon>
      <span class="ms-0.5">87%</span>
      <span class="mx-2">15:13</span> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list nav density="comfortable">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-home" :title="t('message.dashboard')" to="/" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-puzzle" :title="t('message.programming')" to="/programming"
          value="programming"></v-list-item>
        <v-list-item prepend-icon="mdi-wrench" :title="t('message.settings')" to="/settings"
          value="settings"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" :title="t('message.setup')" to="/setup" value="setup"></v-list-item>
        <!-- <v-list-item prepend-icon="mdi-widgets" :title="t('message.modules')" to="/modules" value="modules"> -->
        <!-- </v-list-item> -->
        <v-list-group prepend-icon="mdi-widgets" :title="t('message.modules')" value="modules">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-widgets" title="Modules"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-dolly" title="Cargo Manager" to="/modules/cargo-manager"
            value="cargo-manager"></v-list-item>
        </v-list-group>
      </v-list>


    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<style>
@import '~vuetify/styles';
</style>
