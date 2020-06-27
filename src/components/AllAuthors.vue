<template>
  <div>
    <h1>Authors</h1>
      <div 
        v-for="author in allAuthors" 
        :key="author.id" 
        class="author_box"
      >
      <router-link 
        :to="{ name: 'AuthorId', 
        params: {id: author.id}}" 
        class="author"
      > 
        <div class="author_text">
          <p>Author name: </p>
          <p class="author_info"> {{ author.name }} </p>
        </div>
        <div class="author_text"> 
          <p>Username: </p>
          <p class="author_info">{{ author.username }}</p>
        </div>
      </router-link>
        <AuthorsNews :userId="author.id" />
      </div>
       
  </div>  
  
</template>

<script>
import { mapGetters } from 'vuex'
import AuthorsNews from "./AuthorsNews"


export default {
    name: "AllAuthors",
    components: {
      AuthorsNews
    },
    computed: mapGetters(["allAuthors"]),
      oneAuthorNews () {
        return this.$store.getters.oneAuthorNews()
    }
}

</script>

<style lang="scss" scoped>

</style>