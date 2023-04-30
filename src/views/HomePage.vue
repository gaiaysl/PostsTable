<template>
  <div>
    <table>
      <thead>
        <tr>

          <th>id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in store.posts" :key="post.id">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
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

    return {
      store,
    }
  },
  mounted() {
    this.store.fetchPosts()
  },

}
)
</script>

