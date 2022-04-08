<template>
  <div>
    <div v-for="list in listNews" :key="list.id">
      <div v-if="list.title === title">
        <img :src="list.urlToImage" alt="" />
        <h1>{{ title }}</h1>
        <div class="date">
          <span>{{ list.author }}</span>
          <span style="float: right">{{ list.publishedAt }}</span>
        </div>
        <div class="deskripsi">
          {{ list.description }}
        </div>
        <div class="goTo">
          <span>Lanjut baca ke </span><a :href="list.url">Sini</a>
        </div>
        <button @click="page">Kembali</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeskripsiPage",
  setup() {},
  computed: {
    title() {
      return this.$route.params.title;
    },
    listNews() {
      return this.$store.state.news.berita;
    },
  },
  methods: {
    page() {
      this.$router.go(-1);
    },
    fetchNews() {
      this.$store.dispatch("news/fetchNews");
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
<style scoped>
.goTo,
.deskripsi {
  margin-top: 12px;
}
img {
  width: 1200px;
  height: 500px;
}
.date {
  margin-top: 12px;
  align-content: center;
}
</style>
