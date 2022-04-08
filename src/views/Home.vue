<template>
  <div id="app">
    <v-row>
      <v-col cols="2">
        <div class="light-blue">
          <v-card>
            <v-navigation-drawer
              :permanent="$vuetify.breakpoint.mdAndUp"
              app
              clipped
              class="light-blue white--text"
            >
              <v-list dense nav>
                <v-list-item v-for="source in getSource" :key="source.id" link>
                  <v-list-item-content
                    class="white--text"
                    @click="getByCategory(source.id)"
                  >
                    <v-list-item-title> {{ source.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </div>
      </v-col>
      <v-col cols="8">
        <h1>Berita Terkini</h1>
        <v-layout v-for="news in listNews" :key="news.id">
          <v-card class="align-center justify-center my-6">
            <v-card hover>
              <v-img heigth="350px" :src="news.urlToImage" alt="image"></v-img>
            </v-card>
            <v-container fill-heigth>
              <v-layout my-4>
                <span class="headline">{{ news.title }}</span>
              </v-layout>
              <v-card-text>{{ news.description }}</v-card-text>
              <v-card-actions>
                <v-container class="py-0">
                  <v-row dense>
                    <v-col cols="4" md="4" sm="12">
                      <v-chip small color="secondary">
                        {{ news.source.name }}
                      </v-chip>
                    </v-col>
                    <v-col cols="6" md="6" sm="12">
                      <v-btn icon class="red--text">
                        <v-icon small>mdi-reddit</v-icon>
                      </v-btn>
                      <v-btn icon class="light-blue--text">
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn icon class="blue--text">
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon class="red--text">
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn icon class="blue--text">
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                    </v-col>
                    <!-- <v-col cols="2"> </v-col> -->
                    <v-col cols="2" md="2" sm="12">
                      <v-btn
                        small
                        replace
                        color="info"
                        class="align-text-right"
                      >
                        <a :href="news.url" target="_blank" class="white--text">
                          Read More</a
                        >
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
                <!-- 
                <v-spacer></v-spacer>

                <v-spacer></v-spacer> -->
              </v-card-actions>
            </v-container>
          </v-card>
        </v-layout>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {},
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
    listNews() {
      return this.$store.state.news.berita;
    },
    getSource() {
      return this.$store.state.news.source;
    },
  },
  methods: {
    goToDeskripsi(title) {
      this.$router.push({ path: `${title}` });
    },
    fetchNews() {
      this.$store.dispatch("news/fetchNews");
    },
    getSources() {
      this.$store.dispatch("news/getSource");
    },
    getByCategory(source) {
      this.$store.dispatch("news/getBySource", source);
    },
  },
  mounted() {
    this.fetchNews();
    this.getSources();
  },
};
</script>

<style>
.text {
  margin-left: 10px;
}
/* img {
  max-width: 600px;
  max-height: 200px;
} */
a {
  text-decoration: none;
}
h1 {
  text-align: center;
}
.list {
  list-style-type: none;
  padding: 0;
}
.body {
  display: grid;
  grid-template-columns: max-content max-content;
}
.blockNews img {
  align-items: center;
}
.blockNews:hover {
}
.blockNews {
  align-items: center;
  display: flex;
  background-color: floralwhite;
  margin: 5px 5px;
  padding: 10px 2px;
  width: 590px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
@media screen and (max-width: 1200px) {
  .blockNews {
    width: 500px;
  }
}
@media screen and (max-width: 1034px) {
  .body {
    display: block;
  }
  .blockNews {
    width: auto;
  }
}
</style>
