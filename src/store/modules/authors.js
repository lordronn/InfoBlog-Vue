export default {
    state: {
        authors: []
    },
    actions: {
        async fetchAuthors(ctx) {
            const resp = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            )
            const receivedAuthors = await resp.json()
            ctx.commit('updateAuthors', receivedAuthors)
        }

    },
    mutations: {
        updateAuthors(state, receivedAuthors) {
            state.authors = receivedAuthors.map((autor) => ({name: autor.name, id: autor.id, username: autor.username}));
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