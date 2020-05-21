<template>
    <div>
      <h1>Author № {{this.$route.params.id}}</h1>
       <div class="author_box"> 
          <div class="author">
            <div class="author_text">
              <p>Author name: </p>
              <p class="author_info">
                 {{ oneAuthor.name }} 
              </p>
            </div>
            <div class="author_text"> 
              <p>Username: </p>
              <p class="author_info">
                {{ oneAuthor.username }}
              </p>
            </div>
          </div>
          <AuthorNews :userId="oneAuthor.id"/> 
      </div> 
    </div>
</template>

<script>
import AuthorNews from "./AuthorsNews"

export default {
  name: "Author",
  components: {
    AuthorNews
  },
  computed: {
    oneAuthor(){
      return this.$store.getters.oneAuthor(this.$route.params.id);
    }
  },
  
}   
</script>

<style lang="scss" scoped>
.header_author{
    margin: 50px 0 75px;
    font-size: 22px;

    .author_info {
    font-size: 28px;
    text-decoration: underline;
    margin-left: 20px;
    }
    
}

</style>