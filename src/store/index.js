import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data
        return this.posts
      })

    }
  }
})

