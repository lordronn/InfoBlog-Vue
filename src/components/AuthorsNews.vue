<template>
  <div class="author_news">
    
      
    <div v-if="authorNews.length > 0">
      <hr>
      <h3>Articles:</h3>
      <hr>
      <ul >
        <li v-for="news in authorNews" :key="news.id">
            <router-link 
              :to="{ name: 'ArticleId', 
              params: {id: news.id}}"
            >
              {{news.title}} 
            </router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>У выбранного автора пока нет статей</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "AllAuthorsNews",
  props: {
    userId: Number
  },
  computed: {
    authorNews () {
      return this.$store.getters.oneAuthorNews(this.userId)
    }
  },
  methods: mapActions(["fetchNews"]),
  async mounted() {
    this.fetchNews();
  }
}
</script>

<style lang="scss" scoped>
.author_news {
    ul {
      margin: 20px 0;
      text-align: left;
      list-style-type: circle;
      padding-left: 8%;
      padding-right: 10px;
      
    span {
      font-size: 18px;
      margin-bottom: 10px;
    }
    li {
      line-height: 25px;
    }
  }
}


</style>