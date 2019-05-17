<template>
  <div class="index">
    <h1>Hola Mundo</h1>
    <h6>{{ API }}</h6>
  </div>
</template>

<script>
/**
*
* index Component
*
* @author efrenmartinez
* @copyright 2019.
*/
import axios from 'axios'
export default {
  name: "index",
  data() {
    return {
      API: process.env.API_URL,
      results: [],
      next: null,
      count: 0,
      previous: null
    }
  },
  mounted() {
    this.getPokemons()
  },
  methods: {
    getPokemons(){
      axios.get(`${this.API}pokemon`)
        .then(response => {
          this.results = response.data.results
          this.next = response.data.next
          this.count = response.data.count
          this.previous = response.data.previous
        })
        .catch(e => {
          console.log(e)
        })
        .finally(()=>{})
    }
  }
}
</script>

<style scoped>
</style>
