<template>
  <div>
    <h1>Article № {{this.$route.params.id}}</h1> 
    <div class="article_box"> 
      <p class="article_title">
        {{oneNews.title}}
      </p> 
      <p class="article_body">
        {{oneNews.body}}
      </p>
      <router-link 
        :to="{ name: 'AuthorId', 
        params: {id: oneNews.userId}}" 
        class="article_author"
      >  
        <p>Author: <span>{{this.$store.getters.oneAuthor(oneNews.userId).name}}</span> </p> 
      </router-link>
    </div> 
  </div>
</template>

<script>
export default {
  computed: {
    oneNews(){
      return this.$store.getters.oneNews(this.$route.params.id);
    }
  }    
}    
</script>

<style lang="scss" scoped>
.article_box {
    max-width: 850px;
    margin: auto;
    box-shadow: 0px 0px 5px 0.5px;
    display: flex;
    flex-direction: column;
    font-size: 18px;

    .article_title {
        font-size: 26px;
        font-weight: bold;
    }

    .article_author{
        text-align: right;
        margin-right: 25px;
        color:#64acef;
        font-size: 22px;
    }
}
</style>