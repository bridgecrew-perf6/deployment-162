<template>
  <v-app>
    <v-app-bar app clipped-left color="primary" dark>
      <div class="d-flex align-center">
        <v-btn text target="_blank">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div>News App</div>
      </div>

      <v-spacer></v-spacer>
      <v-btn text disabled>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main><router-view /> </v-main>
    <v-footer padless app dark height="35">
      <v-col cols="12" class="text-caption">
        Made with by <v-icon class="red--text">mdi-cards-heart </v-icon>
        <span class="text-decoration-underline">Vuetify</span> and
        <span class="text-decoration-underline">Rachid Sakhara</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
