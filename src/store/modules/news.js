export default {
  state: {
    news: [],
    visitedNews: []
  },
  actions: {
    async fetchNews(context) {
      try {
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=25" 
      )
      const receivedNews = await resp.json()
      context.commit('updateNews', receivedNews)
      } catch (e) {
        console.log(e)
      }
    },
    clickNews (commit, id) { 
        commit('visitedPages', id)
      }
  },
  mutations: {
    updateNews(state, receivedNews) {
        state.news = receivedNews;
    },
    visitedPages: (state, id) => {
        if (state.visitedNews.includes(id)){
            console.log('Article was visited')
        }
        else state.visitedNews.push(id);
    }
  },
  getters: {
    allNews(state) {
      return state.news
    },
    oneAuthorNews: state => id => {
        return state.news.filter(article => article.userId === id);
    },
    oneNews: state => id => {
        return state.news[id - 1];
    },
    usedNews:state => id => {
        return state.visitedNews.includes(id)
    }
  }
} 