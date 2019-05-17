<template>
  <div class="container">
    <h1 class="title is-1">List of pokemons</h1>
    <card-pokemon :data="results"/>
    <div class="columns is-centered">
      <div class="column is-two-fifths">
          <a class="button is-rounded is-info">Previous</a>
          <a class="button is-rounded is-info">Next</a>
      </div>
    </div>
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
import CardPokemon from '~/components/CardPokemon.vue'
import axios from 'axios'
export default {
  name: "index",
  components: {
    CardPokemon
  },
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
