<template>
  <v-app class="ma-0" theme="dark">
    <v-system-bar>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="mx-1" density="compact" :ripple="false" width=34 variant="text" @click="console.log('wifi')"
            v-bind="props" style="min-width: 0">
            <v-icon>mdi-wifi</v-icon>
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
        <!-- <v-sheet>
          hej
        </v-sheet> -->
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


    <v-app-bar density="comfortable">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
      <!-- <v-icon class="ms-2">mdi-wifi</v-icon>
      <v-icon class="ms-2">mdi-battery-80</v-icon>
      <span class="ms-0.5">87%</span>
      <span class="mx-2">15:13</span> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <v-list nav density="comfortable">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-home" title="Dashboard" to="/" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-puzzle" title="Programming" to="/programming" value="programming"></v-list-item>
        <v-list-item prepend-icon="mdi-wrench" title="Settings" to="/settings" value="settings"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Setup" to="/setup" value="setup"></v-list-item>
        <v-list-item prepend-icon="mdi-widgets" title="Modules" to="/modules" value="modules"></v-list-item>
        <v-list-item prepend-icon="mdi-file-document-multiple" to="/documentation" title="Documentation"
          value="docs"></v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main class="ma-4">
      <v-menu>

        <v-list>
          <v-list-item>
            <v-list-item-title>T</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <router-view />
    </v-main>

  </v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: null,
      rail: false,
    }
  },
}
</script>
