<template>
  <div class="container">
    <div class="d-flex  justify-content-center align-items-center">
      <h2 class="mb-4 ">Posts Table</h2>
    </div>

    <div class="btn-group gap-1 d-flex  justify-content-between flex-wrap   " role="group" aria-label="Basic example">

      <button v-for="i in 10" class="btn btn-secondary" @click="filterByUserId(i)">Posts {{i}}</button>
    </div>
    <table class="table table-striped table-bordered  ">
     
      <thead>
        <tr class="text-center">
          <th class="bg-primary text-white">Title</th>
          <th class="bg-primary text-white ">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in store.filteredPosts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
     
    </table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from '../store'


export default defineComponent({
  name: 'HomePage',
  setup() {
    const store = useStore()
    store.fetchPosts()  

    const filterByUserId = (userId) => {
      store.filteredPosts = userId ? store.getUsersId(userId) : store.posts
    }

    return {
      store,
      filterByUserId,
    }
  },

  mounted() {
    this.store.fetchPosts()
    
  }
})
</script>
 