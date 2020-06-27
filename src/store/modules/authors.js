export default {
  state: {
    authors: []
  },
  actions: {
    async fetchAuthors(context) {
      try {const resp = await fetch(
          "https://jsonplaceholder.typicode.com/users"
      )
      const receivedAuthors = await resp.json()
      context.commit('updateAuthors', receivedAuthors)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mutations: {
    updateAuthors(state, receivedAuthors) {
      state.authors = receivedAuthors.map((autor) => ({
        name: autor.name, 
        id: autor.id, 
        username: autor.username
      }));
    }
  },
  getters: {
    allAuthors(state) {
        return state.authors;
    },
    oneAuthor: state => id => {
        return state.authors[id - 1];
    }
  }
} 