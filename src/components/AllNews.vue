<template>
  <div>
    <h1>NEWS</h1>
     <div 
          class="news_list" 
          v-for="news in allNews" 
          :key="news.id"
     >
      <router-link 
          :to="{ name: 'ArticleId', 
          params: {id: news.id}}"
          class="link_menu"
         :class="{ shadow: invizNews(news.id) }"
        >
          <p class="title_news" @click="clickNews(news.id)">
            {{ news.title }}
          </p> 
          <p class="news_body" maxlength="255" @click="clickNews(news.id)">
            {{ news.body }}
          </p>
        </router-link>
        <router-link 
          :to="{ name: 'AuthorId', 
          params: {id: news.userId}}" 
          class="author"
        > 
          <p>Name author: {{oneAuthor(news.userId).name}}</p>
        </router-link>
     </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: "AllNews",
  data() {
    return {
      active: true
    }
  },
  computed: mapGetters(["allNews", "oneAuthor", "invizNews"]), 
   
  
  methods: {
    ...mapActions(["fetchAuthors", "fetchNews", "clickNews"]), 

  },
  async mounted() {
      this.fetchAuthors();
      this.fetchNews();
  }
}
</script>


<style lang="scss" scoped>
.shadow {
  opacity: 0.5;
}


.news_list {
  margin: 3% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-content: center;
  box-shadow: 0px 0px 5px 0.5px;
  max-width: 700px;
  font-size: 16px;

  p {
   width: 90%;
   margin: 20px auto;
  }
  
  .link_menu {
    color: black;
    text-decoration: none;

      .title_news {
      font-size: 22px;
      font-weight: 600;
      margin-top: 15px;
      
    }

     .news_body {
      margin-top: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      text-align: justify;
    }
  }

 .author{
    text-align: right;
    font-weight: bold;
    color:#64acef;
  }
}

.news_list:hover {
  max-width: 800px;
  .title_news{
    font-size: 25px;
    font-weight: 650;
    text-decoration: underline;
  }
  .news_body{ 
    font-size: 20px;
  }
  .author{
    font-size: 20px;
  }
}

</style>


