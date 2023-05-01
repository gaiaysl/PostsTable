import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    posts: [],
    filteredPosts: [] 
  }),
  actions: {
    async fetchPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = response.data
      this.filteredPosts = response.data 
    },
    getUsersId(userId) {
      return this.posts.filter(post => post.userId === userId)
    },
  }
})
